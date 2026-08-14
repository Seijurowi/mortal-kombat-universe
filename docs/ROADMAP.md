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

## Phase 1 — Bi-Han lore stress test 🔨

Goal: prove that the data model can represent a messy, retcon-heavy character chain without flattening continuities.

Anchor chain:

`Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot`

### Workstream A — Documentation

- [x] Create `/docs` index.
- [x] Create PRD.
- [x] Document lore model.
- [x] Create roadmap.
- [ ] Keep AGENTS.md aligned with docs and current milestone.

### Workstream B — Research and evidence

- [ ] Inventory existing Bi-Han/Hanzo/Quan Chi seed records.
- [ ] Verify Original continuity claims against primary/official material where recoverable.
- [ ] Verify Reboot continuity claims against MK9/MKX/MK11 material.
- [ ] Verify New Era claims against MK1 and Khaos Reigns material.
- [ ] Record uncertainty instead of filling gaps with fan shorthand.

### Workstream C — Lore data

- [ ] Add missing source records.
- [ ] Add missing atomic facts.
- [ ] Add missing timeline-scoped events.
- [ ] Add supporting relationships.
- [ ] Add any missing character/faction/entity records only when required.
- [ ] Connect meaningful cause/consequence edges.
- [ ] Run `pnpm validate` after every meaningful data batch.

### Workstream D — Model stress findings

- [ ] Document any case the current schemas cannot represent cleanly.
- [ ] Evolve schemas only for proven gaps.
- [ ] Add validator rules for any new model semantics.

### Workstream E — Product UX

Use the new lore to prove UX changes rather than redesigning speculatively.

Likely needs:

- [ ] timeline-aware character detail sections;
- [ ] clearer canon status presentation;
- [ ] evidence/source section;
- [ ] chronological event presentation;
- [ ] cause/consequence navigation;
- [ ] focused dependency view around the selected entity.

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

All quality gates must pass.

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
- neighborhood expansion instead of one giant universe graph.

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
