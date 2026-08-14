# Changelog

This file records notable changes to the Mortal Kombat Universe project. It is intentionally curated: it tracks meaningful product, lore/data, model, tooling, and contributor-workflow changes rather than every commit.

The working process is documented in [`docs/CHANGELOG_POLICY.md`](docs/CHANGELOG_POLICY.md).

## Unreleased

### Added

- First Phase 5 cosmology slice: One Being, Elder Gods, Edenia, Orderrealm/Seido, Chaosrealm, the ancient shattering event, and sourced Deception cosmology facts.
- Mortal Kombat: Deception Shujinko biography and instruction-booklet source records.
- Phase 5 manual verification for ancient cosmology, continuity scope, source provenance, and collective event participants.

### Changed

- Event participant validation now accepts `Character | Faction` instead of Character-only, proven necessary by the Elder Gods acting collectively in the Deception creation account.
- Ancient Original-continuity cosmology remains explicitly scoped instead of being projected onto Reboot or New Era.
- Kamidogu reawakening lore is represented as sourced Facts without manufacturing unsupported causal event edges.

## 2026-08-14 — Phase 4: Claim history, retcons, and evidence

### Added

- Dedicated `/claims` workbench for inspecting sourced claim families grouped by shared subject and predicate.
- Claim-history cards showing timeline scope, canon status, notes, source chronology, official source links, and fact-dossier navigation.
- Evidence-safe family labels for value variation, cross-continuity agreement, alternate portrayals, canon-status variation, and explicit retcon evidence.
- Search across claim families by subject, predicate, and displayed values.
- Phase 4 manual verification focused on preventing claim-family grouping from inventing contradiction or retcon semantics.

### Changed

- Subject/predicate grouping is a presentation aid rather than proof of divergence or contradiction.
- Different displayed values are not automatically labelled continuity divergence; they may represent time-dependent or multi-valued predicates such as identity.
- Search keeps the selected detail synchronized with visible results.
- Source year is evidence-history context, not automatic canonical priority.
- Schema expansion for explicit `contradicts` / `supersedes` links remains deferred until a real sourced lore case proves it necessary.

## 2026-08-14 — Phase 3: Story chains and causality

### Added

- Dedicated `/causality` workbench for story-chain exploration built from explicit `causeEventIds` / `consequenceEventIds`.
- Whole-chain vertical tree that keeps the start, branches, selected event, and terminal event(s) visible at the same time.
- `Start`, `You are here`, `End`, and moment/position markers for causal-chain orientation.
- Separate chain cards when one continuity contains disconnected causal components.
- Local immediate `Why? / What next?` close-up beneath the full-chain view.
- Links from causal events and participants back to ordinary dossiers while preserving continuity scope.
- Explorer / Causality mode navigation.
- Phase 3 manual verification checklist.

### Changed

- Story-chain UX prioritizes whole-chain orientation over isolated click-to-recenter diagrams.
- Selecting an event highlights `You are here` without removing the rest of the causal chain from view.
- Product, lore-model, and agent guidance describe whole-chain story causality as the Phase 3 contract.
- Causal validation requires mirrored cause/consequence references and rejects arbitrary cross-timeline edges unless the source event is explicitly tagged as a reset/rewrite bridge.
- Explicit reset/rewrite bridges remain valid model data but are excluded from ordinary within-continuity story trees pending future timeline-transition UX.

## 2026-08-14 — Phase 2: Timeline-first reading experience

### Added

- Timeline-first character dossiers with in-page Original / Reboot / New Era switching.
- Generated `Compare all` continuity overview for character pages.
- Dedicated character story chronology ordered from structured event data.
- Shareable `entity` + `timeline` reading state with a copy-deep-link action.
- Phase 2 manual UX verification checklist.
- Repository changelog policy and pull-request changelog checklist.

### Changed

- Character pages separate chronology, evidence-backed facts, and relationship connections instead of presenting one flat entity-inspection view.
- Product documentation and agent guidance were aligned around the timeline-first reading experience.

## 2026-08-14 — Phase 1: Bi-Han lore stress test

### Added

- Sourced Bi-Han / Hanzo Hasashi / Quan Chi / Shirai Ryu / Noob Saibot lore across Original, Reboot, and New Era continuities.
- Timeline-scoped events, facts, relationships, and source records, expanding the validated seed set to 75 records across 8 entity types.
- Product requirements, lore-model documentation, roadmap, and manual lore verification guidance.
- Source pages that show the facts citing each source.
- Timeline badges and timeline-aware detail filtering.

### Changed

- Kept Bi-Han as one stable character entity while representing Sub-Zero / Noob Saibot identity changes through timeline-scoped facts and events.
- Documented alternate-timeline Titan Havik as model pressure without prematurely introducing a character-variant schema.

### Fixed

- Removed a chronology-only causal edge that treated the first Mortal Kombat tournament as the cause of Bi-Han's death.
- Removed unsupported Original-continuity Quan Chi participation from Bi-Han's Noob Saibot transformation.

## 2026-08-14 — Foundation

### Added

- Next.js App Router + TypeScript application foundation.
- pnpm-only package management and frozen-lockfile CI workflow.
- shadcn/ui foundation using the requested `bcivVKXQ` preset, Tailwind CSS v4, Base UI, and Lucide icons.
- Atomic JSON lore store with 8 entity types, JSON Schemas, and cross-reference validation.
- Initial 41-record seed dataset.
- Search, timeline filtering, entity detail pages, facts, sources, and relationship navigation.
- `AGENTS.md` execution contract and `pnpm check` quality gate.
