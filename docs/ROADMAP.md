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

## Phase 2 — Timeline-first reading experience 🔨

Status: implementation in progress on `agent/timeline-first-ux`.

Goal: stop the encyclopedia feeling like a warehouse of disconnected records. A character should be something a reader can follow as a continuity-specific story.

### Implemented in this phase

- [x] Specialized character dossier view.
- [x] Continuity selector inside character pages without returning to the index.
- [x] `Compare all` continuity overview generated from existing facts/events.
- [x] Dedicated chronological event presentation ordered by event `order`.
- [x] Clear separation between chronology, evidence-backed facts, and relationship connections.
- [x] URL state for `entity` + `timeline` so a specific reading state can be linked directly.
- [x] Copy-deep-link action.
- [x] Manual Phase 2 UX verification checklist.

### Still to evaluate manually

- [ ] Does the character page now feel readable rather than inspectable?
- [ ] Is `Compare all` sufficient, or does it need stronger generated summaries / side-by-side identity tables?
- [ ] Does chronology remain understandable when a character has many more events?
- [ ] Are direct links useful enough to justify moving state into Next.js route segments later?
- [ ] Does mobile chronology remain usable?

See `PHASE2_MANUAL_VERIFICATION.md`.

### Phase 2 acceptance criteria

For Bi-Han, a user should be able to:

1. open the character once;
2. switch Original / Reboot / New Era without leaving the dossier;
3. read important events in chronological order;
4. inspect sourced facts separately from the event narrative;
5. follow people/faction connections separately from chronology;
6. compare continuity coverage;
7. copy a URL that restores the same character + timeline state.

All automated quality gates must pass before merge.

## Phase 3 — Causality and focused graph

Goal: answer **why did this happen?** and **what did this lead to?** visually without rendering one unusable universe-wide graph.

Candidates:

- focused entity neighborhood graph;
- cause → event → consequence explorer;
- graph filters by timeline, relation type, and canon status;
- neighborhood expansion from a selected entity/event;
- resolve alternate-timeline character variants such as Titan Havik if real graph navigation proves the need.

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
