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

Add future shadcn components with:

```bash
pnpm dlx shadcn@latest add <component>
```

## Current state

The validated dataset contains 75 records across 8 entity types, including the Bi-Han / Hanzo Hasashi / Quan Chi / Shirai Ryu / Noob Saibot cross-continuity stress test.

The current product milestone is **Phase 3 — Story chains and causality**. The `/causality` view shows complete connected causal chains inside one continuity, keeps root/terminal events visible, highlights the selected event as `You are here`, and retains a local `Why? / What next?` close-up. Causal branches come only from explicit event links; chronology alone never creates an edge.

See:

- `docs/PRD.md`
- `docs/ROADMAP.md`
- `docs/PHASE3_MANUAL_VERIFICATION.md`
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

This runs knowledge validation, ESLint, TypeScript type checking, and a production Next.js build. Validation also rejects causal event links that are missing, unmirrored, or cross continuity boundaries. GitHub Actions runs the same gate on pushes and pull requests.

## Change tracking

Notable product, lore, model, and contributor-workflow changes are recorded in `CHANGELOG.md`.

During active development, changes go under `## Unreleased`. See `docs/CHANGELOG_POLICY.md` for what belongs in the changelog and how completed milestones are dated.

## Agent guidance

Read `AGENTS.md` before making substantive changes. In particular:

- use pnpm only;
- keep lore in `data/`, not React components;
- prefer shadcn primitives over hand-rolled UI equivalents;
- every `Fact` needs timeline scope, canon status, and source evidence;
- do not merge conflicting Mortal Kombat continuities into a single unscoped claim;
- do not infer causal edges from chronology;
- review `CHANGELOG.md` before requesting merge.
