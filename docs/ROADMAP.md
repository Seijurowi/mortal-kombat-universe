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

**Current work:** Original-continuity **Shao Kahn / Deadly Alliance apparent-death stress test** in draft PR #19 on `agent/phase5-shao-kahn-apparent-death`, branched exactly from verified PR #18 merge commit `68da6291f05870187394cddc4912a56afe6ed611`. The slice preserves the older Deadly Alliance death portrayal as retconned evidence, adds later Deception clone-decoy evidence plus direct post-Deadly-Alliance evidence that the real Shao Kahn is alive, and avoids asserting that the real Shao Kahn died, that the clone specifically received the Deadly Alliance attack, or that a specific attacker killed the clone. Documentation, manual review, and final-head CI remain part of the readiness gate; merge remains an explicit user/maintainer action.

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

#### MK4 / Quan Chi role detail ✅ — PR #17
- Mortal Kombat Gold directly anchors Kitana entering battle against Shinnok and Quan Chi.
- Quan Chi's active Original-continuity MK4/Gold combat role is visible without making him the cause of Shinnok's escape.
- battle Realm remains unasserted because the source says Quan Chi's forces leave Edenia rather than locating the later battle there.
- Deadly Alliance later confirms Quan Chi had stolen Shinnok's amulet without precisely dating the theft or creating a defeat→theft causal edge.
- merged as `513d2196d5ac7f7b1fd1d026e784918fd6567b42` after manual/source review and final-head CI.

#### Deadly Alliance / Liu Kang bridge ✅ — PR #18
- Quan Chi and Shang Tsung form the named Deadly Alliance.
- explicit elimination plan stays separate from occurrences.
- plan → Liu Kang death is causal because MKDA shows the plan carried out.
- formation → plan remains chronology-only.
- Shang Tsung is the sourced Liu Kang killer/soul-consumer; Quan Chi remains an assisting Event participant rather than an invented co-killer.
- simplistic Shao Kahn death was deliberately deferred for clone/decoy review.
- merged as `68da6291f05870187394cddc4912a56afe6ed611` after manual/source review and final-head CI.

### Current Shao Kahn / Deadly Alliance apparent-death stress test 🔨 — PR #19

This slice tests the existing retcon/claim-history model against a real same-continuity death portrayal that later primary evidence complicates.

- [x] Start exactly from verified PR #18 merge commit `68da6291f05870187394cddc4912a56afe6ed611`.
- [x] Preserve MKDA's first-obstacle attack as an occurrence without asserting that the attacked figure was definitely the real Shao Kahn.
- [x] Extend the elimination-plan causal edge to the sourced first-obstacle attack.
- [x] Keep the attack Event's Realm empty because the MKDA story does not itself establish a precise event location.
- [x] Add the MKDA Kitana ending as explicit older evidence portraying Shao Kahn as dead.
- [x] Mark that older `deadly_alliance_era_status = dead` portrayal `retconned` rather than current canon.
- [x] Add Deception Shao Kahn biography evidence that he created a clone decoy and escaped.
- [x] Add Deception Goro biography evidence that Goro encountered the real Shao Kahn alive.
- [x] Add current-canon `deadly_alliance_era_status = alive after Deadly Alliance` from later primary evidence.
- [x] Keep the clone-decoy mechanism as a separate canon Fact rather than claiming the clone specifically received the Deadly Alliance attack or enabled survival from that attack.
- [x] Exercise `/claims` with the first useful real `retconned` Fact family without adding speculative `contradicts` / `supersedes` schema.
- [x] Add/index the slice-specific manual verification checklist.
- [x] Review/update CHANGELOG for this slice.
- [x] Open draft PR #19.
- [ ] Run maintainer manual UI/source pass.
- [ ] Perform final AGENTS + LORE_MODEL + DoD review and post-manual source wording recheck.
- Current-head CI must be green before Ready for review; CI state is owned by the PR checks rather than duplicated as a fragile checkbox here.
- [ ] Merge only after explicit user/maintainer action.

### Next lore slices

1. Onaga resurrection/return mechanism and post-Deception fate with stronger coverage.
2. Deception cosmology vs MK11 Titan/Kronika comparison without flattening continuities.
3. Original/Reboot/New Era Sindel comparison through claim history.
4. Revisit exact MKII/MK3/MK4 individual-victor attribution only if direct later Original evidence supports it.

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
22. follow the Deadly Alliance into Liu Kang's death with an explicit plan→occurrence edge while formation→plan remains chronology-only;
23. see Shang Tsung identified as Liu Kang's killer and soul-consumer without upgrading Quan Chi's assistance into a co-killer Fact;
24. inspect the Shao Kahn Deadly Alliance-era death portrayal as retconned evidence alongside later clone-decoy and post-MKDA-alive evidence without being told that the real Shao Kahn died, that the clone received the Deadly Alliance attack, or that the sources identify who killed the clone;
25. see intentional causal gaps where sources establish sequence/context but not direct causation;
26. navigate documentation without conflicting live-status claims.

Manual verification procedures are indexed in `docs/README.md`. Final readiness is governed by `docs/DEFINITION_OF_DONE.md`.

## Phase 6 — Systematic timeline expansion

Once the model and UX are sufficiently proven, expand event-first through Original, Reboot, and New Era / MK1 / Khaos Reigns.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, fine-grained evidence locators, and richer multiverse/timeline-transition UX.

These are not goals until scale or concrete lore/navigation cases prove they are needed.
