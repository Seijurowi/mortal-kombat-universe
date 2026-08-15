# Roadmap

The roadmap is the **authoritative owner of live project status**: what is complete, what is active, and what comes next. Stable product rules belong in `PRD.md`; domain rules belong in `LORE_MODEL.md`; execution rules belong in `AGENTS.md`; completion criteria belong in `DEFINITION_OF_DONE.md`; completed material changes belong in `CHANGELOG.md`.

The project expands only after the model and reading experience survive difficult continuity/evidence cases.

## Phase 0 — Foundation ✅

Complete and merged: Next.js + TypeScript, pnpm, shadcn/Tailwind, JSON source-of-truth data, schemas, validation, 8 entity types, explorer UX, `AGENTS.md`, and CI.

## Phase 1 — Bi-Han lore stress test ✅

Complete and merged after human review. Established sourced cross-continuity facts/events and the stable-person identity model.

## Phase 2 — Timeline-first reading experience ✅

Complete and merged. Delivered continuity-aware character dossiers, comparison, chronology, deep links, and changelog practice.

## Phase 3 — Story chains and causality ✅

Complete and merged. Delivered `/causality`, whole-chain story trees, strict chronology/causality separation, and reset/rewrite bridge validation.

Later Phase 5 work extended this capability with a continuity-wide chronology rail and real DAG merge rendering; Phase 3's original implementation is not the final capability ceiling.

## Phase 4 — Claim history, retcons, and evidence ✅

Complete and merged. Delivered `/claims`, evidence-safe claim-family labels, source-history ordering without newer-wins semantics, and no speculative contradiction/supersession schema.

## Phase 5 — Cosmology and ancient history 🔨

**Status: in progress.**

**Current work:** Original-continuity **Quan Chi / Shinnok MK4 role detail** in PR #17 on `agent/phase5-mk4-quan-chi-shinnok-role`, branched from verified PR #16 merge commit `36cb0dc3fd71075c15ef3451df54b9aa721dac1a`. Implementation, maintainer manual review, source recheck, and final contract review are complete; final-head CI remains before Ready for review.

Goal: expand from character-scale lore into ancient and Original-continuity history while preserving source, continuity, causality, and evidence caveats instead of presenting one synthetic canon narrative.

### Completed Phase 5 slices

#### Deception cosmology foundation ✅
- One Being as unique non-playable Character/being.
- Elder Gods as Faction and valid Event participant.
- six Deception navigation realms represented.
- creation-myth evidence and `game_manual` source category.
- Event `realmIds` locked to location/scope rather than event outputs.

#### Onaga ancient history ✅
- Onaga, Shao Kahn, Shujinko coverage.
- `Shao Kahn poisons Onaga → seizes Outworld`.
- `Onaga manipulates Shujinko → Shujinko gathers Kamidogu`.
- `Shujinko shatters Kamidogu → defeats Onaga`.
- intentional gather→shatter gap preserved.

#### Shinnok ancient history ✅
- Shinnok and Lucifer coverage.
- former Elder God status as Fact rather than timeless membership.
- `Shinnok wars with Raiden → banishment`.
- `Quan Chi allies with Shinnok → Shinnok rules Netherrealm`.

#### Edenia / Outworld conquest ✅ — PR #7
- Kitana, Sindel, Jerrod Original records.
- sourced Edenia conquest and later liberation.
- realm-target Facts instead of abusing Event `realmIds`.
- ending-only Jerrod details kept `supplemental`.

#### Great Kung Lao / pre-1992 tournament ✅ — PR #8
- Great Kung Lao, Goro, Shang Tsung history.
- Goro victory, Grand Champion status, and ~500-year undefeated reign.
- Shang Tsung tournament control/corruption.
- “during this period” retained as chronology, not causality.

#### Liu Kang / MK1992 bridge ✅ — PR #9
- first-game tournament enriched rather than duplicated.
- Liu Kang/Goro and tournament-control results narrowly corroborated.
- first tournament → Shang Tsung second-chance plea supported by MKII.
- Goro `apparent death` not promoted to confirmed death.

#### MKII / Outworld setup ✅ — PR #10
- second-chance plea → explicit Outworld lure plan.
- plan separated from occurrence.
- MKT later confirms the second Outworld tournament occurred.
- planning/plea events keep unsupported realm location empty.

#### MKII / Shaolin temple attack ✅ — PR #11
- Baraka and sourced Shaolin attack.
- attack → Liu Kang revenge response.
- named temple does not automatically become structured Earthrealm scope.
- attack/revenge remains separate from tournament lure chain.

#### Sindel scheme / MK3 invasion setup ✅ — PR #12
- long-running Sindel reincarnation scheme.
- second tournament becomes first real multi-parent Event.
- `Sindel reborn on Earthrealm → Shao Kahn breaches Earthrealm`.
- `/causality` chronology rail and DAG merge rendering.

#### MK3 invasion outcome ✅ — PR #13
- soul-taking and extermination campaign represented conservatively.
- Liu Kang identified as prime extermination target.
- MK4 later confirms broad outcome: Earth warriors defeated Shao Kahn.
- no unsupported Liu Kang individual-victor promotion.
- chronology-only gaps preserved around breach/soul-taking and campaign/defeat.

#### Intermediate documentation/project-contract review ✅ — PR #14
- documentation ownership clarified and live status centralized in this roadmap.
- root/docs README, PRD, LORE_MODEL, AGENTS, Phase 3 regression manual, changelog policy, and changelog refreshed.
- `docs/DEFINITION_OF_DONE.md` added as the authoritative readiness/completion gate.

#### MK4 / Shinnok return bridge ✅ — PR #15
- Shinnok escape and renewed-war framing added from the MK4 intro.
- MK3 defeat → Shinnok escape → renewed war kept chronological without unsupported causal edges.
- continuity-wide chronology and Previous/Next navigation added across causal-component boundaries.
- full Shadcn/Base UI inventory incorporated; `components/ui/` is now the default primitive layer in `AGENTS.md`.
- React 19 lint compatibility fixes completed.
- merged as `38dd666597ca0a321e691a06fb6ed09015bdeaee` after manual review and final-head CI.

#### MK4 / Shinnok outcome ✅ — PR #16
- later Armageddon material confirms the broad prior outcome that Shinnok was defeated.
- canon Fact stays broad (`was_defeated: true`) without inventing an individual victor.
- battle Realm and full victor roster remain unasserted.
- direct source wording is separated from chronology placement: Armageddon confirms a prior defeat but does not itself label a specific MK4 scene.
- merged as `36cb0dc3fd71075c15ef3451df54b9aa721dac1a` after manual/source review and final-head CI.

### Current Quan Chi / Shinnok MK4 role slice 🔨 — PR #17

This slice adds only directly sourced Original-continuity detail about Quan Chi's active combat role around Mortal Kombat Gold and the later amulet-theft fact, without projecting Reboot escape mechanics back into Original continuity.

- [x] Add Mortal Kombat Gold's Kitana biography as primary evidence.
- [x] Add `Kitana joins the battle against Shinnok and Quan Chi` at story order 205.
- [x] Add atomic canon Facts that Kitana battled Shinnok and battled Quan Chi.
- [x] Keep the battle Event's `realmIds: []`; Quan Chi's forces leaving Edenia does not establish the battle destination/location.
- [x] Keep resumed war → Kitana battle → Shinnok defeat chronological only; no direct causal edges are supplied by these sources.
- [x] Add Deadly Alliance's Quan Chi biography as later primary evidence.
- [x] Add canon Fact that Quan Chi stole Shinnok's amulet.
- [x] Do not create a precisely ordered amulet-theft Event or defeat→theft causal edge because the later bio does not date the theft sufficiently.
- [x] Keep Original history separate from MKX/Reboot claims that Quan Chi helped Shinnok escape.
- [x] Add/index a slice-specific manual verification checklist.
- [x] Review/update CHANGELOG for this slice.
- [x] Open draft PR #17.
- [x] Draft-head CI passed before final review.
- [x] Maintainer manual UI/source pass completed.
- [x] Final AGENTS + LORE_MODEL + DoD review completed after rechecking the MK Gold and Deadly Alliance source wording; no semantic correction was required.
- [ ] Final-head CI after readiness-status update.
- [ ] Merge only after explicit user/maintainer action.

### Next lore slices

1. **Deadly Alliance bridge** — Liu Kang's death, Shang Tsung/Quan Chi alliance, and the transition into the Deadly Alliance era with exact causal evidence discipline.
2. Onaga resurrection/return mechanism and post-Deception fate with stronger coverage.
3. Deception cosmology vs MK11 Titan/Kronika comparison without flattening continuities.
4. Original/Reboot/New Era Sindel comparison through claim history.
5. Revisit exact MKII/MK3/MK4 individual-victor attribution only if direct later Original evidence supports it.

### Phase 5 acceptance criteria

A user should be able to:

1. find the earliest sourced Original-continuity cosmology records;
2. inspect the One Being, Elder Gods, and six Deception navigation realms;
3. see collective actors represented without fake Characters;
4. trace important claims back to primary works/source records;
5. keep Original cosmology distinct from later continuity cosmology;
6. follow Onaga/Shinnok historical chains without invented chronology-only edges;
7. inspect realm conquest/liberation with correct Fact-vs-`realmIds` semantics;
8. distinguish ending-only details from later-confirmed canon outcomes;
9. inspect Great Kung Lao/Goro/Shang Tsung history without turning temporal association into causality;
10. follow first-game outcome into MKII setup without promoting Goro's apparent death;
11. distinguish an Outworld plan from later evidence that the plan occurred;
12. inspect the Shaolin attack/revenge chain without an inferred Realm or lure-plan bridge;
13. read chronology independently from causal topology;
14. understand one Event with multiple supported parents without duplicate-occurrence rendering;
15. follow the sourced Sindel-rebirth mechanism into Shao Kahn's Earthrealm breach;
16. inspect MK3 invasion consequences and later Shao Kahn defeat without broad→narrow evidence inflation;
17. follow continuity-wide chronology from the MK3 defeat through Shinnok's MK4 return and later defeat even when those Events belong to different/no causal components;
18. navigate Previous/Next chronological neighbors without being told that `after` means `caused by`;
19. see Shinnok's defeat promoted to canon without being told that Liu Kang individually defeated him unless independently corroborated;
20. see Quan Chi as a directly sourced active opponent in the MK4/Gold conflict without being told he caused Shinnok's escape;
21. inspect Quan Chi's theft of Shinnok's amulet without an invented exact date or defeat→theft causal bridge;
22. see intentional causal gaps where sources establish sequence/context but not direct causation;
23. navigate documentation without conflicting live-status claims.

Manual verification procedures are indexed in `docs/README.md`. Final readiness is governed by `docs/DEFINITION_OF_DONE.md`.

## Phase 6 — Systematic timeline expansion

Once the model and UX are sufficiently proven, expand event-first through Original, Reboot, and New Era / MK1 / Khaos Reigns.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, fine-grained evidence locators, and richer multiverse/timeline-transition UX.

These are not goals until scale or concrete lore/navigation cases prove they are needed.
