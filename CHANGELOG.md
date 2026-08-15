# Changelog

This file records notable changes to the Mortal Kombat Universe project. It is intentionally curated: meaningful product, lore/data, model, tooling, and contributor-workflow changes belong here; commit-by-commit detail does not.

See [`docs/CHANGELOG_POLICY.md`](docs/CHANGELOG_POLICY.md).

## Unreleased

### Added

- **Phase 5 Original-continuity cosmology foundation:** One Being, Elder Gods, the six Deception navigation realms, creation-myth evidence, `game_manual` sources, and Factions as valid Event participants.
- **Onaga / Shujinko ancient-history coverage:** sourced succession, manipulation, Kamidogu, and defeat chains while preserving intentional causal gaps where evidence does not support a direct edge.
- **Shinnok ancient-history coverage:** fall from Elder God status, war with Raiden, Netherrealm banishment, alliance with Quan Chi, Lucifer context, and later Netherrealm rulership.
- **Edenia / Outworld history:** Kitana, Sindel, Jerrod, Shao Kahn's conquest, Edenia's later liberation, realm-target Facts, and conservative ending-only Jerrod family details.
- **Pre-1992 tournament history:** Great Kung Lao, Goro, Shang Tsung, Goro's ancient victory/Grand Champion reign, and Shang Tsung's tournament control without turning shared chronology into causality.
- **MK1992 → MKII bridge:** Liu Kang's first-game victory over Goro/tournament control at the narrow level later primary sources confirm; Shang Tsung's sourced second-chance plea; Goro's `apparent death` kept weaker than confirmed death.
- **MKII Outworld setup:** Shang Tsung's explicit plan to lure enemies into Outworld, later Original-continuity confirmation that the second tournament occurred, and a strict plan-versus-occurrence split.
- **MKII Shaolin-temple slice:** Baraka's attack and Liu Kang's revenge response as a separate causal component, without inferred Earthrealm scope or an invented connection to the tournament lure.
- **Sindel scheme / MK3 setup:** the long-running reincarnation scheme, Sindel's Earthrealm rebirth, Shao Kahn's breach, and the second Outworld tournament as the first real multi-parent causal Event.
- **MK3 invasion outcome:** soul-taking/extermination coverage, Liu Kang as the prime extermination target, and later MK4 confirmation that Earth warriors defeated Shao Kahn without promoting Liu Kang as the individual victor from ending-only evidence.
- **MK4 / Shinnok return setup:** Shinnok's escape from Netherrealm and the renewed war as sourced Original-continuity Events/Facts, with the MK3 defeat → escape → renewed-war sequence kept chronological rather than converted into unsupported direct causality.
- **MK4 / Shinnok outcome:** Mortal Kombat: Armageddon's Johnny Cage biography now serves as later primary confirmation that Shinnok was defeated years earlier; the canon Fact stays at the broad defeat level without promoting Liu Kang or another fighter as the individual victor, inventing a battle location, or turning renewed-war chronology into a direct causal edge.
- **Quan Chi / Shinnok MK4 role detail:** Mortal Kombat Gold now directly establishes Kitana entering battle against Shinnok and Quan Chi, making Quan Chi's active Original-continuity combat role visible without retroactively crediting him with Shinnok's escape; Deadly Alliance later confirms that Quan Chi had stolen Shinnok's amulet, preserved as a narrow Fact without an invented exact theft date or defeat→theft causal edge.
- **Continuity-wide chronology navigation:** `/causality` now presents all Events in the selected continuity in story order, adds Previous/Next chronology navigation across causal-component boundaries, and auto-scrolls the selected chronology card into view.
- **Shadcn UI component inventory:** the repository now includes the expanded Shadcn/Base UI component set under `components/ui/` plus the dependencies required by those primitives, while preserving the existing preset and pnpm lockfile discipline.
- **Causality UX evolution:** a dedicated chronology/story-order rail, real DAG merge rendering, one full shared node plus explicit merge references, and clearer causal-start/causal-end semantics.
- Phase 5 cumulative and slice-specific manual verification covering evidence strength, source provenance, realm semantics, chronology-versus-causality, plans versus occurrences, DAG merges, broad-versus-narrow later confirmation, the MK4 Shinnok return/outcome bridge, and Quan Chi's sourced MK4/Gold role.
- **Repository Definition of Done:** a dedicated `docs/DEFINITION_OF_DONE.md` readiness gate covering scope, lore/evidence, graph/model semantics, UX, documentation ownership, changelog discipline, manual verification, final-head CI, PR review, and explicit human/user merge authority.

### Changed

- Event `participantIds` accepts `Character | Faction`, proven by the Elder Gods acting collectively.
- Event `realmIds` is locked to location/scope semantics; realm creation, conquest, liberation, merging, destruction, and similar action-object claims belong in sourced Facts.
- Named local places do not automatically justify a broader Realm mapping; the Shaolin-temple case is the explicit proof example.
- The One Being shattering claim is narrowed to the source-supported formation of **the realms** rather than synthesizing a later six-realm navigation set into an exhaustive creation-output claim.
- Historical identities, titles, reigns, divine states, and changing faction membership remain Facts/Events rather than timeless Character metadata.
- Plans, intentions, prophecies, threats, and possibilities are not treated as proof that their described occurrences happened; later occurrence evidence is required.
- Qualified wording such as `apparent death` remains weaker than a confirmed death/transformation Event.
- Temporal association and adjacent story order never manufacture causal edges. This is applied across Great Kung Lao history, MK3 breach/soul-taking, the MK3→MK4 Shinnok-return bridge, the renewed-war→Shinnok-defeat transition, and other chronology-only transitions.
- Later primary sources may confirm a narrower ending outcome without canonizing an ending wholesale; conversely, broad later confirmation stays broad and does not silently identify a narrower named actor/victor.
- The second Outworld tournament now proves real multi-parent causality: MKII's lure plan and the older Sindel/diversion scheme converge on one occurrence.
- `/causality` separates chronology from causal topology so history remains readable even when causal components are disconnected or merge; chronology navigation can cross those component boundaries without creating graph edges.
- Claim history continues to treat subject/predicate grouping as presentation rather than automatic contradiction/retcon evidence; source year remains chronology context, not canonical priority.
- **Documentation governance was consolidated:** `ROADMAP.md` is the sole owner of live milestone/active-slice status; PRD, LORE_MODEL, AGENTS, README, changelog, manuals, and Definition of Done now have explicit ownership boundaries to reduce documentation drift.
- `AGENTS.md` now references the dedicated Definition of Done as the authoritative readiness/completion gate instead of duplicating the full final PR checklist.
- **Shadcn/Base UI is now the explicit default primitive layer in `AGENTS.md`:** contributors should reuse `components/ui/*` before hand-building generic controls, keep domain components outside the primitive layer, and preserve primitive APIs/accessibility when compatibility fixes are required.
- Root/documentation README files no longer carry fragile record counts, branch-specific status, or stale milestone claims; manual verification documents are explicitly indexed as cumulative/regression/slice-specific procedures rather than status trackers.
- Changelog practice now explicitly supports consolidating long `Unreleased` sections into milestone/slice-level history instead of mirroring every source/Event/Fact file.

## 2026-08-14 — Phase 4: Claim history, retcons, and evidence

### Added

- Dedicated `/claims` workbench for inspecting sourced claim families grouped by shared subject and predicate.
- Claim-history cards showing timeline scope, canon status, notes, source chronology, official source links, and fact-dossier navigation.
- Evidence-safe family labels for value variation, cross-continuity agreement, alternate portrayals, canon-status variation, and explicit retcon evidence.
- Search across claim families by subject, predicate, and displayed values.
- Phase 4 manual verification focused on preventing claim-family grouping from inventing contradiction or retcon semantics.

### Changed

- Subject/predicate grouping is a presentation aid rather than proof of divergence or contradiction.
- Different displayed values are not automatically labelled continuity divergence; they may represent time-dependent or multi-valued predicates.
- Source year is evidence-history context, not automatic canonical priority.
- Explicit `contradicts` / `supersedes` schema remains deferred until a concrete sourced case proves the need.

## 2026-08-14 — Phase 3: Story chains and causality

### Added

- Dedicated `/causality` workbench built from explicit `causeEventIds` / `consequenceEventIds`.
- Whole-chain vertical tree with start/end orientation, selected-event context, disconnected-component selection, and local `Why? / What next?` inspection.
- Links from causal events and participants back to ordinary dossiers while preserving continuity scope.
- Explorer / Causality mode navigation and Phase 3 manual verification.

### Changed

- Story-chain UX prioritizes whole-chain orientation over isolated click-to-recenter diagrams.
- Causal validation requires mirrored references and rejects arbitrary cross-timeline edges unless the source Event is an explicit reset/rewrite bridge.
- Reset/rewrite bridges remain valid model data but are excluded from ordinary within-continuity story trees pending dedicated transition UX.

## 2026-08-14 — Phase 2: Timeline-first reading experience

### Added

- Timeline-first character dossiers with in-page Original / Reboot / New Era switching.
- Generated `Compare all` continuity overview for character pages.
- Dedicated character story chronology ordered from structured Event data.
- Shareable `entity` + `timeline` reading state with copy-deep-link action.
- Phase 2 manual UX verification and changelog policy/practice.

### Changed

- Character pages separate chronology, evidence-backed facts, and relationship connections instead of presenting one flat entity-inspection view.

## 2026-08-14 — Phase 1: Bi-Han lore stress test

### Added

- Sourced Bi-Han / Hanzo Hasashi / Quan Chi / Shirai Ryu / Noob Saibot lore across Original, Reboot, and New Era continuities.
- Timeline-scoped events, facts, relationships, and sources proving the stable-person identity model.
- Product requirements, lore-model documentation, source pages, timeline badges, and manual lore verification guidance.

### Changed

- Bi-Han remains one stable Character while Sub-Zero / Noob Saibot identity changes are represented through scoped Facts/Events.
- Alternate-timeline Titan Havik remains model pressure rather than a fabricated ordinary Character relationship.

### Fixed

- Removed a chronology-only causal edge that treated the first Mortal Kombat tournament as the cause of Bi-Han's death.
- Removed unsupported Original-continuity Quan Chi participation from Bi-Han's Noob Saibot transformation.

## 2026-08-14 — Foundation

### Added

- Next.js App Router + TypeScript application foundation.
- pnpm-only package management and frozen-lockfile CI workflow.
- shadcn/ui foundation using the requested `bcivVKXQ` preset, Tailwind CSS v4, Base UI, and Lucide icons.
- Atomic JSON lore store with 8 entity types, JSON Schemas, and cross-reference validation.
- Initial seed dataset, search, timeline filtering, entity detail pages, facts, sources, and relationship navigation.
- `AGENTS.md` execution contract and `pnpm check` quality gate.
