# Mortal Kombat Universe

A source-aware Mortal Kombat knowledge graph and interactive encyclopedia built with Next.js.

## Architecture

The repository deliberately separates **knowledge** from **presentation**:

- `data/` — atomic JSON records; source of truth.
- `schema/` — JSON Schema contracts for every entity type.
- `scripts/validate.mjs` — schema + cross-reference + dependency validation.
- `lib/load-data.ts` — server-only loader for the knowledge base.
- `components/universe-explorer.tsx` — interactive search, timeline filters, entity cards, facts, and dependencies.
- `components/ui/` — shadcn UI primitives.
- `app/` — Next.js App Router shell and Mortal Kombat theme layer.
- `AGENTS.md` — development and lore-editing rules for Codex/agents.

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

## UI foundation

The application uses shadcn/ui with the requested preset:

```bash
pnpm dlx shadcn@latest init --preset bcivVKXQ --template next
```

The preset resolves to the `base-nova` style with Zinc CSS variables, Lucide icons, Tailwind CSS v4, and Base UI. The current explorer is built from shadcn `Button`, `Card`, `Input`, `Badge`, and `Separator` primitives, with a Mortal Kombat-specific dark/gold token layer in `app/mk-theme.css`.

Add future shadcn components with:

```bash
pnpm dlx shadcn@latest add <component>
```

## Current seed data

- Characters: Liu Kang, Raiden, Bi-Han, Kuai Liang, Hanzo Hasashi, Quan Chi
- Realms: Earthrealm, Outworld, Netherrealm
- Timelines: Original, Reboot, New Era
- Seed events spanning the original tournament, reboot reset, and Liu Kang's New Era

The seed data is intentionally small: its purpose is to stress-test the model before the encyclopedia expands.

## Development

Requires Node.js 20.9+ and pnpm. The repository pins the pnpm version via `packageManager`.

```bash
pnpm install
pnpm validate
pnpm dev
```

Open `http://localhost:3000`.

## Quality gate

```bash
pnpm check
```

This runs knowledge validation, ESLint, TypeScript type checking, and a production Next.js build. GitHub Actions runs the same gate on pushes and pull requests.

## Agent guidance

Read `AGENTS.md` before making changes. In particular:

- use pnpm only;
- keep lore in `data/`, not React components;
- prefer shadcn primitives over hand-rolled UI equivalents;
- every `Fact` needs timeline scope, canon status, and source evidence;
- do not merge conflicting Mortal Kombat continuities into a single unscoped claim.

## Next milestone

Use the Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot chain as the first full lore stress test, with separate facts and evidence per timeline.
