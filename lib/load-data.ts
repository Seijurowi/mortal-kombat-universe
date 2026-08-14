import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import type { UniverseData } from "@/lib/types";

const folders: Array<[keyof UniverseData, string]> = [
  ["characters", "characters"],
  ["events", "events"],
  ["realms", "realms"],
  ["factions", "factions"],
  ["timelines", "timelines"],
  ["relationships", "relationships"],
  ["facts", "facts"],
  ["sources", "sources"],
];

async function loadFolder(folder: string) {
  const dir = path.join(process.cwd(), "data", folder);
  const files = (await fs.readdir(dir)).filter((file) => file.endsWith(".json")).sort();
  return Promise.all(
    files.map(async (file) => JSON.parse(await fs.readFile(path.join(dir, file), "utf8"))),
  );
}

export async function loadUniverseData(): Promise<UniverseData> {
  const entries = await Promise.all(
    folders.map(async ([key, folder]) => [key, await loadFolder(folder)] as const),
  );

  return Object.fromEntries(entries) as UniverseData;
}
