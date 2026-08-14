"use client";

import { useMemo, useState } from "react";
import type { Event, Fact, Relationship, Timeline, UniverseData, UniverseEntity } from "@/lib/types";

type FilterType = "all" | UniverseEntity["type"];

const TYPE_LABELS: Record<FilterType, string> = {
  all: "All",
  character: "Characters",
  event: "Events",
  realm: "Realms",
  faction: "Factions",
  timeline: "Timelines",
  relationship: "Relationships",
  fact: "Facts",
  source: "Sources",
};

const NAV_TYPES: FilterType[] = ["all", "character", "event", "realm", "faction", "fact", "source"];

function timelineIdsOf(entity: UniverseEntity, timelines: Timeline[]) {
  if (entity.type === "timeline") return [entity.id];
  if (entity.type === "event") return [entity.timelineId];
  if ("timelineIds" in entity && Array.isArray(entity.timelineIds)) return entity.timelineIds;
  return timelines.map((timeline) => timeline.id);
}

function humanize(value: string) {
  return value.replaceAll("_", " ");
}

function summary(entity: UniverseEntity) {
  if (entity.type === "fact") return `${entity.subjectId} · ${humanize(entity.predicate)} · ${entity.objectId ?? String(entity.value)}`;
  if (entity.type === "source") return `${humanize(entity.sourceType)}${entity.game ? ` · ${entity.game}` : ""}`;
  if (entity.type === "relationship") return `${entity.fromId} → ${humanize(entity.relationType)} → ${entity.toId}`;
  return entity.id;
}

export function UniverseExplorer({ data }: { data: UniverseData }) {
  const all = useMemo<UniverseEntity[]>(() => Object.values(data).flat(), [data]);
  const byId = useMemo(() => new Map(all.map((entity) => [entity.id, entity])), [all]);
  const timelines = useMemo(() => [...data.timelines].sort((a, b) => a.order - b.order), [data.timelines]);
  const [timeline, setTimeline] = useState("all");
  const [type, setType] = useState<FilterType>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = selectedId ? byId.get(selectedId) ?? null : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((entity) => {
      if (entity.type === "relationship") return false;
      const timelineOk = timeline === "all" || timelineIdsOf(entity, timelines).includes(timeline);
      const typeOk = type === "all" || entity.type === type;
      const searchable = [
        entity.name,
        entity.id,
        entity.description,
        "aliases" in entity ? entity.aliases?.join(" ") : undefined,
        "tags" in entity ? entity.tags?.join(" ") : undefined,
      ].filter(Boolean).join(" ").toLowerCase();
      return timelineOk && typeOk && (!q || searchable.includes(q));
    });
  }, [all, query, timeline, timelines, type]);

  const select = (id: string) => { if (byId.has(id)) setSelectedId(id); };

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">MK</div>
          <div><strong>Mortal Kombat</strong><small>Universe · Next.js v0.2</small></div>
        </div>

        <input
          aria-label="Search"
          className="search"
          value={query}
          onChange={(event) => { setQuery(event.target.value); setSelectedId(null); }}
          placeholder="Search the realms…"
        />

        <div className="sectionLabel">TIMELINE</div>
        <div className="filterStack">
          <FilterButton active={timeline === "all"} onClick={() => { setTimeline("all"); setSelectedId(null); }}>All timelines</FilterButton>
          {timelines.map((item) => (
            <FilterButton key={item.id} active={timeline === item.id} onClick={() => { setTimeline(item.id); setSelectedId(null); }}>{item.name}</FilterButton>
          ))}
        </div>

        <div className="sectionLabel">EXPLORE</div>
        <nav className="filterStack" aria-label="Entity type">
          {NAV_TYPES.map((item) => {
            const count = item === "all" ? all.length : all.filter((entity) => entity.type === item).length;
            return <FilterButton key={item} active={type === item} onClick={() => { setType(item); setSelectedId(null); }}><span>{TYPE_LABELS[item]}</span><span className="count">{count}</span></FilterButton>;
          })}
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <div><div className="eyebrow">SOURCE-AWARE KNOWLEDGE GRAPH</div><h1>{selected ? selected.name : type === "all" ? "Universe Index" : TYPE_LABELS[type]}</h1></div>
          <div className="stats">{selected ? selected.type : `${filtered.length} visible · ${all.length} records`}</div>
        </header>

        <section className="content">
          {selected ? (
            <EntityDetail entity={selected} data={data} byId={byId} onSelect={select} onBack={() => setSelectedId(null)} />
          ) : filtered.length ? (
            <div className="grid">{filtered.map((entity) => <EntityCard key={entity.id} entity={entity} timelines={timelines} byId={byId} onSelect={select} />)}</div>
          ) : <div className="empty">Nothing matches this filter.</div>}
        </section>
      </main>
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return <button className={`filterBtn${active ? " active" : ""}`} onClick={onClick}>{children}</button>;
}

function EntityCard({ entity, timelines, byId, onSelect }: { entity: UniverseEntity; timelines: Timeline[]; byId: Map<string, UniverseEntity>; onSelect: (id: string) => void }) {
  return (
    <button className="card" onClick={() => onSelect(entity.id)}>
      <span className="typeLabel">{entity.type}</span>
      <h2>{entity.name}</h2>
      <p>{entity.description ?? summary(entity)}</p>
      <div className="pills">{timelineIdsOf(entity, timelines).map((id) => <span key={id} className="pill">{byId.get(id)?.name ?? id}</span>)}</div>
    </button>
  );
}

function EntityDetail({ entity, data, byId, onSelect, onBack }: { entity: UniverseEntity; data: UniverseData; byId: Map<string, UniverseEntity>; onSelect: (id: string) => void; onBack: () => void }) {
  const relationships = data.relationships.filter((item) => item.fromId === entity.id || item.toId === entity.id);
  const events = data.events.filter((event) => event.id === entity.id || event.participantIds.includes(entity.id));
  const facts = entity.type === "fact" ? [entity] : data.facts.filter((fact) => fact.subjectId === entity.id || fact.objectId === entity.id);
  const dependencies = [
    ...relationships.map((relationship) => relationshipDependency(relationship, entity.id, byId)),
    ...events.filter((event) => event.id !== entity.id).map((event) => ({ id: event.id, kind: "event", name: event.name })),
  ];

  return (
    <>
      <button className="back" onClick={onBack}>← Back to index</button>
      <div className="detail">
        <article className="panel primaryPanel">
          <div className="eyebrow">{entity.type.toUpperCase()}</div>
          <h2 className="detailTitle">{entity.name}</h2>
          <p className="lede">{entity.description ?? summary(entity)}</p>

          {entity.type === "event" ? <EventMeta event={entity} byId={byId} onSelect={onSelect} /> : null}
          {entity.type === "source" ? <div className="metaGrid"><div className="metaLabel">Source type</div><div>{humanize(entity.sourceType)}</div><div className="metaLabel">Game</div><div>{entity.game ?? "—"}</div><div className="metaLabel">Year</div><div>{entity.year ?? "—"}</div></div> : null}

          <div className="sectionHeading"><h3>Verified facts</h3><span>{facts.length}</span></div>
          {facts.length ? facts.map((fact) => <FactCard key={fact.id} fact={fact} byId={byId} onSelect={onSelect} />) : <div className="empty compact">No directly linked facts yet.</div>}
        </article>

        <aside className="panel">
          <div className="eyebrow">DEPENDENCIES & CONNECTIONS</div>
          <div className="depList">{dependencies.length ? dependencies.map((dependency, index) => (
            <button key={`${dependency.id}-${index}`} className="dep" onClick={() => onSelect(dependency.id)}><small>{humanize(dependency.kind)}</small><span>{dependency.name}</span></button>
          )) : <div className="empty compact">No graph edges yet.</div>}</div>
        </aside>
      </div>
    </>
  );
}

function relationshipDependency(relationship: Relationship, entityId: string, byId: Map<string, UniverseEntity>) {
  const other = relationship.fromId === entityId ? relationship.toId : relationship.fromId;
  return { id: other, kind: relationship.relationType, name: byId.get(other)?.name ?? other };
}

function EventMeta({ event, byId, onSelect }: { event: Event; byId: Map<string, UniverseEntity>; onSelect: (id: string) => void }) {
  return <div className="metaGrid"><MetaRow label="Caused by" ids={event.causeEventIds ?? []} byId={byId} onSelect={onSelect} /><MetaRow label="Consequences" ids={event.consequenceEventIds ?? []} byId={byId} onSelect={onSelect} /><MetaRow label="Participants" ids={event.participantIds} byId={byId} onSelect={onSelect} /><MetaRow label="Realms" ids={event.realmIds ?? []} byId={byId} onSelect={onSelect} /></div>;
}

function MetaRow({ label, ids, byId, onSelect }: { label: string; ids: string[]; byId: Map<string, UniverseEntity>; onSelect: (id: string) => void }) {
  return <><div className="metaLabel">{label}</div><div>{ids.length ? ids.map((id, index) => <span key={id}>{index > 0 ? ", " : ""}<button className="inlineLink" onClick={() => onSelect(id)}>{byId.get(id)?.name ?? id}</button></span>) : "—"}</div></>;
}

function FactCard({ fact, byId, onSelect }: { fact: Fact; byId: Map<string, UniverseEntity>; onSelect: (id: string) => void }) {
  return (
    <article className="factCard">
      <div className={`status status-${fact.canonStatus}`}>{humanize(fact.canonStatus)}</div>
      <div className="factStatement"><button className="inlineLink" onClick={() => onSelect(fact.subjectId)}>{byId.get(fact.subjectId)?.name ?? fact.subjectId}</button>{" "}<strong>{humanize(fact.predicate)}</strong>{" "}{fact.objectId ? <button className="inlineLink" onClick={() => onSelect(fact.objectId!)}>{byId.get(fact.objectId)?.name ?? fact.objectId}</button> : String(fact.value)}</div>
      <div className="sourceLine">{fact.sourceIds.map((sourceId, index) => <span key={sourceId}>{index > 0 ? " · " : ""}<button className="inlineLink subtle" onClick={() => onSelect(sourceId)}>{byId.get(sourceId)?.name ?? sourceId}</button></span>)}</div>
    </article>
  );
}
