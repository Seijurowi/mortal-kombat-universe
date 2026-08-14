# Mortal Kombat Universe

A source-aware Mortal Kombat knowledge graph and interactive encyclopedia built with Next.js.

## Architecture

The repository deliberately separates **knowledge** from **presentation**:

- `data/` — atomic JSON records; source of truth.
- `schema/` — JSON Schema contracts for every entity type.
- `scripts/validate.mjs` — schema + cross-reference + dependency validation.
- `lib/load-data.ts` — server-only loader for the knowledge base.
- `components/universe-explorer.tsx` — interactive search, timeline filters, entity cards, facts, and dependencies.
- `app/` — Next.js App Router shell.

No database is required in v0.x. JSON remains Git-friendly and reviewable. SQLite can later be generated as a derived index if query volume makes it useful.

## Entity types

1. `Character`
2. `Event`
3. `Realm`
4. `Faction`
5. `Timeline`
6. `Relationship`
7. `Source`
8. `Fact`

`Fact` is the smallest sourced assertion. A fact owns its timeline scope, canon status, and source evidence. `Relationship` is a graph/navigation projection of entity connections.

## Current seed data

- Characters: Liu Kang, Raiden, Bi-Han, Kuai Liang, Hanzo Hasashi, Quan Chi
- Realms: Earthrealm, Outworld, Netherrealm
- Timelines: Original, Reboot, New Era
- Seed events spanning the original tournament, reboot reset, and Liu Kang's New Era

The seed data is intentionally small: its purpose is to stress-test the model before the encyclopedia expands.

## Development

Requires Node.js 20.9+.

```bash
npm install
npm run validate
npm run dev
```

Open `http://localhost:3000`.

## Quality gate

```bash
npm run check
```

This runs JSON Schema and cross-reference validation, ESLint, and a production Next.js build. GitHub Actions runs the same gate on pushes and pull requests.

## Next milestone

Use the Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot chain as the first full lore stress test, with separate facts and evidence per timeline.
