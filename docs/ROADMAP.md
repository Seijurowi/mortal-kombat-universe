# Roadmap

The roadmap is deliberately staged. We expand the universe only after the model survives difficult continuity cases.

## Phase 0 — Foundation ✅

Status: complete and merged.

Delivered:

- Next.js App Router + TypeScript
- pnpm-only package management
- shadcn/ui foundation
- Tailwind CSS v4
- JSON source-of-truth data store
- JSON Schemas
- cross-reference validation
- 8 entity types
- initial 41-record seed dataset
- search, timeline filters, entity cards, sourced facts, clickable dependencies
- `AGENTS.md`
- CI quality gate: validate, lint, typecheck, build

## Phase 1 — Bi-Han lore stress test 🔎

Status: implementation complete; human lore/UX verification pending.

Goal: prove that the data model can represent a messy, retcon-heavy character chain without flattening continuities.

Anchor chain:

`Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot`

### Workstream A — Documentation

- [x] Create `/docs` index.
- [x] Create PRD.
- [x] Document lore model.
- [x] Create roadmap.
- [x] Keep AGENTS.md aligned with docs and current milestone.
- [x] Add a manual verification checklist for lore and UX checks that automation cannot prove.

### Workstream B — Research and evidence

- [x] Inventory existing Bi-Han/Hanzo/Quan Chi seed records.
- [x] Verify the implemented Original continuity claims against primary/official or archival game material where recoverable.
- [x] Verify the implemented Reboot continuity claims against MK9/MK11 and official anniversary material.
- [x] Verify the implemented New Era Noob origin against official Khaos Reigns material.
- [x] Record uncertainty instead of filling gaps with fan shorthand.
- [ ] Complete the human in-game spot-checks listed in `MANUAL_VERIFICATION.md`.

### Workstream C — Lore data

- [x] Add missing source records for the stress-test chain.
- [x] Add missing atomic facts.
- [x] Add missing timeline-scoped events.
- [x] Add supporting relationships.
- [x] Avoid duplicate Noob Saibot character records; keep Bi-Han as one person with timeline-scoped identities.
- [x] Connect meaningful cause/consequence edges.
- [x] Remove chronology-only causal links from the seed data.
- [x] Remove unsupported Original-timeline Quan Chi participation from Bi-Han's Noob transformation.

### Workstream D — Model stress findings

- [x] Document a case the current schemas cannot represent cleanly: alternate-timeline Titan Havik as the actor in New Era Bi-Han's transformation.
- [x] Avoid premature schema evolution; represent Titan Havik as sourced literal text for this milestone.
- [ ] Decide in Phase 3 whether character variants require `CharacterVariant`, `EntityVersion`, or a multiverse-aware timeline model.
- [ ] Add validator rules only after that model is chosen.

### Workstream E — Product UX

Implemented from real stress-test needs:

- [x] keep timeline scope active inside entity detail pages;
- [x] show timeline badges directly on fact cards;
- [x] show source pages with the facts that cite each source;
- [x] expose official source URLs when available;
- [x] keep event cause/consequence navigation;
- [x] filter dependency edges and related events to the active timeline;
- [ ] add a dedicated chronological event presentation;
- [ ] add a richer focused dependency/graph view.

### Phase 1 acceptance criteria

A user unfamiliar with the details should be able to open Bi-Han and understand:

1. his relevant identities;
2. his relationship to Kuai Liang;
3. his conflict with Hanzo Hasashi in earlier continuities;
4. Quan Chi's role, with careful continuity/evidence wording;
5. how Bi-Han dies in earlier continuities;
6. how/when he becomes or returns as Noob Saibot;
7. how the New Era differs;
8. which sources support each important claim.

Automated quality gates must pass and `MANUAL_VERIFICATION.md` must be reviewed before merge.

## Phase 2 — Timeline-first UX

Goal: make continuity selection a first-class part of reading the encyclopedia.

Candidates:

- character timeline tabs/selector;
- event chronology per timeline;
- generated timeline comparison;
- continuity-specific summaries;
- direct links that preserve selected timeline.

## Phase 3 — Causality and focused graph

Goal: answer "why?" and "what did this lead to?" visually.

Candidates:

- focused entity relationship graph;
- cause → event → consequence explorer;
- graph filters by timeline/relation type/canon status;
- neighborhood expansion instead of one giant universe graph;
- resolve alternate-timeline character variants such as Titan Havik if the UI proves the need.

## Phase 4 — Retcon registry and evidence explorer

Goal: make franchise evolution itself navigable.

Candidates:

- explicit retcon/contradiction views;
- claim history by source/date;
- source pages with supported facts;
- improved citation granularity if proven necessary.

## Phase 5 — Cosmology and ancient history

Expand systematically into:

- One Being and early cosmology;
- Elder Gods / gods / Titans with continuity caveats;
- realms and realm-merging rules;
- Shinnok;
- Onaga;
- Edenia;
- Shao Kahn;
- Great Kung Lao;
- pre-tournament history.

This phase should explicitly track retcons rather than present one synthetic cosmology as timeless canon.

## Phase 6 — Systematic timeline expansion

Once the model and UX are proven:

1. Original timeline
2. Reboot timeline
3. New Era / MK1 / Khaos Reigns

Expansion should be event-driven and sourced, not roster-driven.

## Later infrastructure — only when justified

Possible future additions:

- generated SQLite/search index;
- full-text search;
- graph index;
- content authoring tools;
- automated source coverage reports;
- richer tests for graph invariants.

These are not goals until scale or contributor workflow proves they are needed.
