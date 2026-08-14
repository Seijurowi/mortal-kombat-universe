import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import Ajv2020 from "ajv/dist/2020.js";

const root = process.cwd();
const typeFolders = {
  character: "characters",
  event: "events",
  realm: "realms",
  faction: "factions",
  timeline: "timelines",
  relationship: "relationships",
  fact: "facts",
  source: "sources",
};
const timelineBridgeTags = new Set(["reset", "rewrite", "timeline-bridge"]);

async function readJson(file) {
  return JSON.parse(await fs.readFile(file, "utf8"));
}

const ajv = new Ajv2020({ allErrors: true, strict: false });
const records = new Map();
const byType = Object.fromEntries(Object.keys(typeFolders).map((type) => [type, new Map()]));
const errors = [];

for (const [type, folder] of Object.entries(typeFolders)) {
  const schema = await readJson(path.join(root, "schema", `${type}.schema.json`));
  const validate = ajv.compile(schema);
  const directory = path.join(root, "data", folder);
  const files = (await fs.readdir(directory)).filter((file) => file.endsWith(".json")).sort();

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const record = await readJson(fullPath);
    if (!validate(record)) {
      errors.push(`${path.relative(root, fullPath)}: ${ajv.errorsText(validate.errors, { separator: "; " })}`);
      continue;
    }
    if (records.has(record.id)) errors.push(`Duplicate id: ${record.id}`);
    records.set(record.id, record);
    byType[type].set(record.id, record);
  }
}

const timelineIds = new Set(byType.timeline.keys());
const sourceIds = new Set(byType.source.keys());
const factIds = new Set(byType.fact.keys());

function requireRefs(owner, field, ids, allowedTypes) {
  for (const id of ids ?? []) {
    const target = records.get(id);
    if (!target) errors.push(`${owner}: ${field} references missing id '${id}'`);
    else if (allowedTypes && !allowedTypes.includes(target.type)) errors.push(`${owner}: ${field} '${id}' has invalid type '${target.type}'`);
  }
}

function isTimelineBridge(source, target) {
  return source.timelineId !== target.timelineId && (source.tags ?? []).some((tag) => timelineBridgeTags.has(tag));
}

function validateCausalTimeline(source, target) {
  if (source.timelineId === target.timelineId) return;
  if (isTimelineBridge(source, target)) return;
  errors.push(
    `${source.id} -> ${target.id} crosses timelines (${source.timelineId} -> ${target.timelineId}) without an explicit reset/rewrite bridge tag on the source event`
  );
}

for (const record of records.values()) {
  for (const timelineId of record.timelineIds ?? []) {
    if (!timelineIds.has(timelineId)) errors.push(`${record.id}: unknown timeline '${timelineId}'`);
  }

  switch (record.type) {
    case "character":
      requireRefs(record.id, "realmIds", record.realmIds, ["realm"]);
      requireRefs(record.id, "factionIds", record.factionIds, ["faction"]);
      break;
    case "faction":
      requireRefs(record.id, "realmIds", record.realmIds, ["realm"]);
      break;
    case "event":
      if (!timelineIds.has(record.timelineId)) errors.push(`${record.id}: unknown timeline '${record.timelineId}'`);
      requireRefs(record.id, "participantIds", record.participantIds, ["character"]);
      requireRefs(record.id, "realmIds", record.realmIds, ["realm"]);
      requireRefs(record.id, "causeEventIds", record.causeEventIds, ["event"]);
      requireRefs(record.id, "consequenceEventIds", record.consequenceEventIds, ["event"]);
      break;
    case "relationship":
      requireRefs(record.id, "fromId", [record.fromId]);
      requireRefs(record.id, "toId", [record.toId]);
      for (const factId of record.factIds ?? []) if (!factIds.has(factId)) errors.push(`${record.id}: missing fact '${factId}'`);
      break;
    case "fact":
      requireRefs(record.id, "subjectId", [record.subjectId]);
      if (record.objectId) requireRefs(record.id, "objectId", [record.objectId]);
      for (const sourceId of record.sourceIds) if (!sourceIds.has(sourceId)) errors.push(`${record.id}: missing source '${sourceId}'`);
      break;
  }
}

for (const event of byType.event.values()) {
  for (const causeId of event.causeEventIds ?? []) {
    const cause = byType.event.get(causeId);
    if (cause) validateCausalTimeline(cause, event);
    if (cause && !(cause.consequenceEventIds ?? []).includes(event.id)) {
      errors.push(`${causeId} -> ${event.id} must be mirrored in consequenceEventIds`);
    }
  }
  for (const consequenceId of event.consequenceEventIds ?? []) {
    const consequence = byType.event.get(consequenceId);
    if (consequence) validateCausalTimeline(event, consequence);
    if (consequence && !(consequence.causeEventIds ?? []).includes(event.id)) {
      errors.push(`${event.id} -> ${consequenceId} must be mirrored in causeEventIds`);
    }
  }
}

if (errors.length) {
  console.error("\nVALIDATION FAILED\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`VALID: ${records.size} records across ${Object.keys(typeFolders).length} entity types.`);
for (const [type, items] of Object.entries(byType)) console.log(`- ${type}: ${items.size}`);
