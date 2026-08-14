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

## Phase 3 — Story chains and causality 🔨

Status: implementation in progress on `agent/causality-focused-graph`.

Goal: help a reader see **where a causal story begins, what happens at each moment, where it branches, and where it leads** without rendering one unusable universe-wide graph or confusing chronology with causality.

### Implemented in this phase

- [x] Dedicated `/causality` workbench.
- [x] Whole-chain vertical tree derived from explicit event causal links.
- [x] `Start`, `You are here`, `End`, and moment/position markers.
- [x] Branch rendering that keeps the complete chain visible while the selected event changes.
- [x] Separate chain selection when one continuity contains disconnected causal components.
- [x] Local `Why? / What next?` view retained as a secondary close-up.
- [x] Timeline isolation for every chain and edge.
- [x] Explicit separation between event causality and ordinary relationship edges.
- [x] Links back to event and participant dossiers while preserving timeline scope.
- [x] Global Explorer / Causality mode switch.
- [x] Phase 3 manual verification checklist.
- [x] Reuse existing `causeEventIds` / `consequenceEventIds` without schema expansion.

### Still to evaluate manually

- [ ] Does the whole-chain tree solve the “where does this sequence start?” orientation problem?
- [ ] Are branches and merged branches understandable in a vertical reading layout?
- [ ] Should non-causal chronological milestones ever appear as muted context between causal nodes, or would that blur the causality contract?
- [ ] At what real chain complexity does a true 2D graph become more readable than the story tree?
- [ ] Should ordinary relationship edges remain separate from event-causal chains?

See `PHASE3_MANUAL_VERIFICATION.md`.

### Phase 3 acceptance criteria

A user should be able to:

1. open `/causality` and choose a continuity;
2. identify the start and end of a connected causal chain immediately;
3. understand the selected event's position inside that whole chain;
4. follow explicit branches from one event to multiple consequences;
5. select another event without losing whole-chain orientation;
6. distinguish immediate causes/consequences in the secondary close-up;
7. walk the Bi-Han / Hanzo chain without repeatedly navigating backward to discover where it began;
8. open the full event or participant dossier without losing timeline scope;
9. verify that chronology-only neighbors do not become causal branches.

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
- richer graph invariant tests.

These are not goals until scale or contributor workflow proves they are needed.
