# Mortal Kombat Universe

A source-aware Mortal Kombat knowledge graph and interactive encyclopedia built with Next.js.

The goal is not to reproduce a flat wiki. The project makes Mortal Kombat continuity readable as structured, sourced history: timelines, identities, events, causality, relationships, retcons, and evidence.

## Architecture

The repository deliberately separates **knowledge** from **presentation**:

- `data/` — atomic JSON records; source of truth.
- `schema/` — JSON Schema contracts for every entity type.
- `scripts/validate.mjs` — schema, cross-reference, dependency, and causal-edge validation.
- `lib/load-data.ts` — server-only loader for the knowledge base.
- `components/universe-explorer.tsx` — interactive explorer and timeline-first reading UI.
- `components/causality-explorer.tsx` — whole-chain causal story explorer.
- `components/claim-history-explorer.tsx` — claim divergence / retcon evidence explorer.
- `components/ui/` — shadcn UI primitives.
- `app/` — Next.js App Router shell and Mortal Kombat theme layer.
- `docs/` — PRD, lore model, roadmap, changelog policy, and manual verification guides.
- `AGENTS.md` — development and lore-editing contract for agents/contributors.
- `CHANGELOG.md` — curated history of notable project changes.

JSON remains Git-friendly and reviewable. SQLite or graph indexes may later be generated as derived infrastructure if scale proves them useful, but they are not the primary lore store.

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

The preset resolves to the `base-nova` style with Zinc CSS variables, Lucide icons, Tailwind CSS v4, and Base UI.

## Current state

The validated dataset contains 75 records across 8 entity types, including the Bi-Han / Hanzo Hasashi / Quan Chi / Shirai Ryu / Noob Saibot cross-continuity stress test.

Phases 1–3 are complete. The current product milestone is **Phase 4 — Claim history, retcons, and evidence**.

The new `/claims` view groups comparable facts by `subject + predicate` and shows each scoped version with canon status, timelines, notes, and supporting sources. A continuity difference is explicitly **not** treated as a retcon unless the data contains retcon evidence. Source years provide historical ordering only; they do not make the newest source automatically canonical.

Existing `/causality` story trees remain continuity-scoped; explicit timeline reset/rewrite bridges remain valid model data but are not folded into ordinary continuity trees.

See:

- `docs/PRD.md`
- `docs/ROADMAP.md`
- `docs/PHASE4_MANUAL_VERIFICATION.md`
- `CHANGELOG.md`

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

## Change tracking

Notable product, lore, model, and contributor-workflow changes are recorded in `CHANGELOG.md`.

During active development, changes go under `## Unreleased`. See `docs/CHANGELOG_POLICY.md` for what belongs in the changelog and how completed milestones are dated.

## Agent guidance

Read `AGENTS.md` before making substantive changes. In particular:

- use pnpm only;
- keep lore in `data/`, not React components;
- prefer shadcn/Base UI primitives over hand-rolled equivalents;
- every `Fact` needs timeline scope, canon status, and source evidence;
- do not merge conflicting continuities into one unscoped claim;
- do not infer causal edges from chronology;
- do not label ordinary continuity divergence as a retcon without evidence;
- review `CHANGELOG.md` before requesting merge.
