import "server-only"

import { promises as fs } from "node:fs"
import path from "node:path"

import type {
  Character,
  Event,
  Fact,
  Faction,
  Realm,
  Relationship,
  Source,
  Timeline,
  UniverseData,
} from "@/lib/types"

async function loadFolder<T>(folder: string): Promise<T[]> {
  const dir = path.join(process.cwd(), "data", folder)
  const files = (await fs.readdir(dir))
    .filter((file) => file.endsWith(".json"))
    .sort()

  return Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(dir, file), "utf8")
      return JSON.parse(raw) as T
    })
  )
}

export async function loadUniverseData(): Promise<UniverseData> {
  const [characters, events, realms, factions, timelines, relationships, facts, sources] =
    await Promise.all([
      loadFolder<Character>("characters"),
      loadFolder<Event>("events"),
      loadFolder<Realm>("realms"),
      loadFolder<Faction>("factions"),
      loadFolder<Timeline>("timelines"),
      loadFolder<Relationship>("relationships"),
      loadFolder<Fact>("facts"),
      loadFolder<Source>("sources"),
    ])

  return {
    characters,
    events,
    realms,
    factions,
    timelines,
    relationships,
    facts,
    sources,
  }
}
