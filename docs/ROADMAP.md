# Roadmap

The roadmap is deliberately staged. We expand the universe only after the model and reading experience survive difficult continuity cases.

## Phase 0 — Foundation ✅

Status: complete and merged.

Delivered:

- Next.js App Router + TypeScript
- pnpm-only package management
- shadcn/ui + Tailwind CSS v4
- JSON source-of-truth data store and JSON Schemas
- cross-reference validation
- 8 entity types
- search, timeline filters, entity cards, sourced facts, clickable dependencies
- `AGENTS.md` and CI quality gate

## Phase 1 — Bi-Han lore stress test ✅

Status: complete and merged after human review.

Anchor chain:

`Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot`

Delivered:

- sourced Original / Reboot / New Era facts and events;
- timeline-aware evidence and relationship filtering;
- correction of chronology-only causal links;
- source pages showing facts that cite them;
- documented model pressure around alternate-timeline Titan Havik;
- manual lore verification checklist.

Key model decision: Bi-Han remains one `Character`; Sub-Zero and Noob Saibot are timeline-scoped identities/states rather than duplicate person records.

## Phase 2 — Timeline-first reading experience ✅

Status: complete and merged after manual review.

Delivered:

- specialized character dossiers;
- in-page Original / Reboot / New Era continuity switching;
- generated `Compare all` continuity overview;
- dedicated chronological event presentation;
- separation between chronology, evidence-backed facts, and relationship connections;
- shareable `entity` + `timeline` state and copy-deep-link action;
- Phase 2 manual verification guide;
- repository changelog practice and contributor policy.

The product now supports reading a character as a continuity-specific story rather than only inspecting isolated entity records.

## Phase 3 — Causality and focused graph 🔨

Status: implementation in progress on `agent/causality-focused-graph`.

Goal: answer **why did this happen?** and **what did this lead to?** without rendering one unusable universe-wide graph or confusing chronology with causality.

### Implemented in this phase

- [x] Dedicated `/causality` workbench.
- [x] Focused `cause → event → consequence` layout.
- [x] Click-to-recenter navigation through neighboring causal events.
- [x] Timeline isolation for causal neighborhoods.
- [x] Explicit separation between event causality and ordinary relationship edges.
- [x] Links back to event and participant dossiers while preserving timeline scope.
- [x] Global Explorer / Causality mode switch.
- [x] Phase 3 manual verification checklist.
- [x] Reuse existing `causeEventIds` / `consequenceEventIds` without schema expansion.

### Still to evaluate manually

- [ ] Does focused causality answer "why?" better than the old dependency list?
- [ ] Is click-to-recenter enough, or is visible multi-hop expansion needed?
- [ ] Does the three-column desktop graph remain understandable for events with multiple causes/consequences?
- [ ] Should relationship edges ever be composed into the same graph, or remain separate?
- [ ] Is a dedicated graph library justified by actual interaction needs?

See `PHASE3_MANUAL_VERIFICATION.md`.

### Phase 3 acceptance criteria

A user should be able to:

1. open `/causality`;
2. choose a continuity;
3. focus an event;
4. distinguish explicit causes from explicit consequences;
5. re-center the graph by clicking a neighbor;
6. navigate several causal steps through the Bi-Han / Hanzo chain;
7. open the full event or participant dossier without losing timeline scope;
8. verify that chronology-only neighbors do not become causal arrows.

All automated quality gates and the Phase 3 manual verification checklist must pass before merge.

## Phase 4 — Retcon registry and evidence explorer

Goal: make franchise evolution itself navigable.

Candidates:

- explicit retcon / contradiction views;
- claim history by source/date;
- stronger source coverage views;
- improved citation granularity when proven necessary.

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

This phase must track retcons rather than present one synthetic cosmology as timeless canon.

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
- richer graph invariant tests;

These are not goals until scale or contributor workflow proves they are needed.
