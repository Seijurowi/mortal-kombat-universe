# Roadmap

The roadmap is deliberately staged. We expand the universe only after the model and reading experience survive difficult continuity cases.

## Phase 0 — Foundation ✅

Status: complete and merged.

Delivered: Next.js + TypeScript, pnpm, shadcn/Tailwind, JSON source-of-truth data, schemas, cross-reference validation, 8 entity types, search/filter/detail UX, `AGENTS.md`, and CI.

## Phase 1 — Bi-Han lore stress test ✅

Status: complete and merged after human review.

Delivered sourced Original / Reboot / New Era Bi-Han, Hanzo, Quan Chi, Shirai Ryu, and Noob Saibot coverage; timeline-aware facts/relationships; corrected unsupported causal assumptions; source pages; manual lore verification; and the stable-person identity model.

## Phase 2 — Timeline-first reading experience ✅

Status: complete and merged after manual review.

Delivered character dossiers, continuity switching, generated `Compare all`, chronology, evidence separation, shareable reading state, and changelog practice.

## Phase 3 — Story chains and causality ✅

Status: complete and merged after manual review.

Delivered:

- `/causality` whole-chain vertical story trees;
- `Start`, `You are here`, `End`, and moment markers;
- separate disconnected causal chains;
- local `Why? / What next?` close-up;
- strict continuity isolation for ordinary story trees;
- reset/rewrite bridge validation for legitimate cross-timeline transitions;
- explicit separation of chronology, causality, and ordinary relationships;
- Phase 3 manual verification.

Known future pressure remains around branch-merge/DAG rendering and dedicated timeline-reset transition UX.

## Phase 4 — Claim history, retcons, and evidence 🔨

Status: implementation in progress on `agent/phase4-retcon-explorer`.

Goal: make franchise evolution itself navigable **without calling every continuity difference a retcon**.

### Implemented in this phase

- [x] Dedicated `/claims` workbench.
- [x] Group facts by shared `subject + predicate` as a presentation-only comparison.
- [x] Separate `Continuity divergence` from groups containing an explicit `retconned` fact.
- [x] Show each scoped version with canon status, timeline scope, notes, and sources.
- [x] Order claim versions by known source year when available without fabricating missing dates.
- [x] Search across subject, predicate, and presented values.
- [x] Link comparison cards back to ordinary fact dossiers and official source URLs.
- [x] Reuse current `Fact`, `Source`, canon-status, and timeline model with no schema expansion.

### Still to evaluate manually

- [ ] Does the user understand that a continuity divergence is **not automatically a retcon**?
- [ ] Are grouped `subject + predicate` claims semantically useful, or are some predicates too coarse for trustworthy comparison?
- [ ] Does source-year ordering read as evidence history rather than canonical priority?
- [ ] Do we have enough real `retconned` facts to justify a stronger dedicated retcon registry yet?
- [ ] Which real sourced case, if any, proves the need for explicit `contradicts` / `supersedes` links?
- [ ] Do source records need chapter/scene/page/timestamp locators before contradiction review can be reliable at larger scale?

See `PHASE4_MANUAL_VERIFICATION.md`.

### Phase 4 acceptance criteria

A user should be able to:

1. open `/claims` and find claim groups with meaningful continuity variation;
2. see which subject/predicate is being compared;
3. distinguish continuity divergence from an explicitly retconned fact;
4. inspect every version's timeline scope and canon status;
5. inspect the source(s) supporting each version;
6. open the underlying fact dossier;
7. verify that source chronology is not presented as proof that a newer source automatically supersedes an older one;
8. verify that the UI never invents a contradiction or retcon solely because values differ across timelines.

All automated quality gates and Phase 4 manual verification must pass before merge.

## Phase 5 — Cosmology and ancient history

Expand systematically into One Being/early cosmology, Elder Gods/Titans with continuity caveats, realms and merging rules, Shinnok, Onaga, Edenia, Shao Kahn, Great Kung Lao, and pre-tournament history.

This phase must track retcons rather than present one synthetic cosmology as timeless canon.

## Phase 6 — Systematic timeline expansion

Once the model and UX are proven:

1. Original timeline
2. Reboot timeline
3. New Era / MK1 / Khaos Reigns

Expansion should be event-driven and sourced, not roster-driven.

## Later infrastructure — only when justified

Possible future additions include generated SQLite/search indexes, full-text search, graph indexes, authoring tools, automated source coverage reports, richer graph invariants, explicit contradiction relations, and fine-grained evidence locators.

These are not goals until scale or real lore cases prove they are needed.
