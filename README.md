# Mortal Kombat Universe

A source-aware Mortal Kombat knowledge graph and interactive encyclopedia built with Next.js.

The goal is not to reproduce a flat wiki. The project makes Mortal Kombat continuity readable as structured, sourced history: timelines, identities, events, causality, relationships, retcons, realms, factions, and evidence.

## Architecture

The repository deliberately separates **knowledge** from **presentation**:

- `data/` — atomic JSON records; canonical editable lore store.
- `schema/` — JSON Schema contracts for every entity type.
- `scripts/validate.mjs` — schema, cross-reference, dependency, and causal-edge validation.
- `lib/load-data.ts` — server-only loader for the knowledge base.
- `components/universe-explorer.tsx` — interactive explorer and timeline-first reading UI.
- `components/causality-explorer.tsx` — chronology-aware causal story explorer with DAG merge handling.
- `components/claim-history-explorer.tsx` — claim-family and retcon-evidence explorer.
- `components/ui/` — shadcn UI primitives.
- `app/` — Next.js App Router shell and Mortal Kombat theme layer.
- `docs/` — product, lore-model, roadmap, changelog, and manual-verification contracts.
- `AGENTS.md` — development and lore-editing execution contract.
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

`Fact` is the smallest sourced assertion. A fact owns its timeline scope, canon status, and source evidence. `Relationship` is a navigation/graph projection, not evidence by itself.

## Product principles

- continuity-dependent lore is always scoped;
- JSON data is the source of truth, not React prose;
- chronology and causality are separate concepts;
- plans/intentions do not prove their intended occurrences;
- broad later confirmation does not automatically prove a narrower named actor or victor;
- source mirrors are access infrastructure, not canonical authority;
- realm location/scope is not the same thing as a realm being the object of conquest, creation, destruction, or merging;
- claim variation is not automatically contradiction or retcon;
- schema changes must be justified by concrete sourced lore pressure.

## Current project status

Phases 1–4 are complete. Phase 5 is expanding Original-continuity cosmology and historical coverage while stress-testing the evidence model with ancient history, tournament history, multi-parent causality, realm semantics, ending evidence, and later-primary confirmation.

**Live milestone status, completed slices, and the next planned work belong only in [`docs/ROADMAP.md`](docs/ROADMAP.md).** This README intentionally does not carry fragile record counts, branch names, or active-slice details.

Useful entry points:

- [`docs/README.md`](docs/README.md) — documentation map and ownership rules.
- [`docs/PRD.md`](docs/PRD.md) — stable product contract.
- [`docs/LORE_MODEL.md`](docs/LORE_MODEL.md) — domain semantics and proven modeling decisions.
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — current milestone and next work.
- [`AGENTS.md`](AGENTS.md) — contributor/agent execution rules.
- [`CHANGELOG.md`](CHANGELOG.md) — material project history.

## UI foundation

The application uses shadcn/ui with the requested preset:

```bash
pnpm dlx shadcn@latest init --preset bcivVKXQ --template next
```

The preset resolves to the `base-nova` style with Zinc CSS variables, Lucide icons, Tailwind CSS v4, and Base UI.

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

A green build proves technical consistency, not lore accuracy. Substantive lore/model work also requires the relevant human verification checklist from `docs/README.md`.

## Change tracking

Notable product, lore, model, and contributor-workflow changes are recorded in `CHANGELOG.md` under `## Unreleased` until a milestone/release is deliberately cut. See `docs/CHANGELOG_POLICY.md`.

## Agent guidance

Read `AGENTS.md` before making substantive changes. In particular:

- use pnpm only;
- keep lore in `data/`, not React components;
- prefer shadcn/Base UI primitives over hand-rolled equivalents;
- every `Fact` needs timeline scope, canon status, and source evidence;
- do not merge conflicting continuities into one unscoped claim;
- do not infer causal edges from chronology;
- do not promote claim-family variation into contradiction or retcon semantics without evidence;
- review `CHANGELOG.md` and the relevant documentation owner before requesting merge.
