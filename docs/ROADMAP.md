# Roadmap

The roadmap is the **authoritative owner of live project status**: what is complete, what is active, and what comes next. Stable product rules belong in `PRD.md`; domain rules belong in `LORE_MODEL.md`; execution rules belong in `AGENTS.md`; completed material changes belong in `CHANGELOG.md`.

The project expands only after the model and reading experience survive difficult continuity/evidence cases.

## Phase 0 — Foundation ✅

Complete and merged: Next.js + TypeScript, pnpm, shadcn/Tailwind, JSON source-of-truth data, schemas, validation, 8 entity types, explorer UX, `AGENTS.md`, and CI.

## Phase 1 — Bi-Han lore stress test ✅

Complete and merged after human review. Established sourced cross-continuity facts/events and the stable-person identity model.

## Phase 2 — Timeline-first reading experience ✅

Complete and merged. Delivered continuity-aware character dossiers, comparison, chronology, deep links, and changelog practice.

## Phase 3 — Story chains and causality ✅

Complete and merged. Delivered `/causality`, whole-chain story trees, strict chronology/causality separation, and reset/rewrite bridge validation.

Later Phase 5 work extended this capability with a dedicated chronology rail and real DAG merge rendering; Phase 3's original implementation is not the final capability ceiling.

## Phase 4 — Claim history, retcons, and evidence ✅

Complete and merged. Delivered:

- `/claims` claim-family workbench;
- evidence-safe labels such as value variation and cross-continuity agreement;
- explicit retcon evidence only when a Fact is marked `retconned`;
- source-history ordering without treating newer as automatically canonical;
- no speculative `contradicts` / `supersedes` schema.

## Phase 5 — Cosmology and ancient history 🔨

**Status: in progress.**

**Current work:** intermediate project/documentation review on `agent/intermediate-project-review` after PR #13.

**Next lore slice after this review:** Original-continuity **MK4 / Shinnok return setup**, starting from the reviewed/merged documentation state rather than from stale branch-specific assumptions.

Goal: expand from character-scale lore into ancient and Original-continuity history while preserving source, continuity, causality, and evidence caveats instead of presenting one synthetic canon narrative.

### Completed Phase 5 slices

#### Deception cosmology foundation ✅

- One Being as unique non-playable Character/being.
- Elder Gods as Faction and valid Event participant.
- six Deception navigation realms represented.
- Deception biography/manual/ending sources.
- Elder Gods shatter the One Being Event/Facts.
- `game_manual` source category.
- realm-output correction: Event `realmIds` remains location/scope.

#### Onaga ancient history ✅

- Onaga, Shao Kahn, Shujinko coverage.
- `Shao Kahn poisons Onaga → seizes Outworld`.
- `Onaga manipulates Shujinko → Shujinko gathers Kamidogu`.
- `Shujinko shatters Kamidogu → defeats Onaga`.
- intentional gather→shatter causal gap preserved.

#### Shinnok ancient history ✅

- Shinnok and Lucifer coverage.
- former Elder God status as Fact rather than timeless membership.
- `Shinnok wars with Raiden → banishment`.
- `Quan Chi allies with Shinnok → Shinnok rules Netherrealm`.

#### Edenia / Outworld conquest ✅ — PR #7

- Kitana, Sindel, Jerrod Original records.
- sourced Edenia conquest and later liberation.
- realm-target Facts instead of abusing Event `realmIds`.
- Jerrod ending-only family details kept `supplemental`.
- conquest/liberation not joined by a fake direct causal edge.

#### Great Kung Lao / pre-1992 tournament ✅ — PR #8

- Great Kung Lao, Goro, Shang Tsung historical records.
- Goro victory, Grand Champion status, and ~500-year undefeated reign.
- Shang Tsung tournament control/corruption.
- “during this period” retained as chronology, not causality.

#### Liu Kang / MK1992 bridge ✅ — PR #9

- first-game tournament enriched rather than duplicated.
- Liu Kang defeating Goro and winning the tournament/control as narrowly corroborated canon Facts.
- first tournament → Shang Tsung second-chance plea supported by MKII.
- Goro `apparent death` not promoted to confirmed death.

#### MKII / Outworld setup ✅ — PR #10

- second-chance plea → explicit Outworld lure plan.
- plan separated from occurrence.
- later MKT story confirms second Outworld tournament occurred.
- no inferred realm location for the planning/plea events.

#### MKII / Shaolin temple attack ✅ — PR #11

- Baraka and sourced Shaolin attack.
- attack → Liu Kang revenge response.
- named temple does not automatically become structured Earthrealm scope.
- attack/revenge remains separate from tournament lure chain.

#### Sindel scheme / MK3 invasion setup ✅ — PR #12

- long-running Sindel reincarnation scheme established across Mythologies/MKT/MK3 source framing.
- second tournament becomes first real multi-parent Event.
- `Sindel reborn on Earthrealm → Shao Kahn breaches Earthrealm`.
- `/causality` gains separate chronology rail.
- shared DAG nodes render once with explicit merge references.
- unsupported “two tournament failures directly caused a newly invented Sindel plan” interpretation rejected.

#### MK3 invasion outcome ✅ — PR #13

- soul-taking and extermination campaign represented conservatively.
- Liu Kang identified as prime extermination target from MK3 biography.
- later MK4 story confirms broad outcome: Earth warriors defeated Shao Kahn.
- Liu Kang is not promoted as individual victor from ending-only evidence.
- breach → soul claim kept chronological without unsupported direct causal edge.
- invasion campaign → later defeat kept chronological without unsupported immediate causal edge.

### Current intermediate review 🔨

Purpose: reduce documentation drift before the next lore era.

Review targets:

- [x] verify PR #13 merged and record actual merge state;
- [x] audit root `README.md` for stale milestone/record-count claims;
- [x] audit `AGENTS.md` for branch-specific status duplication;
- [x] audit `PRD.md` for stale current-slice/future-work text;
- [x] audit `LORE_MODEL.md` for proven-vs-pressure drift;
- [x] audit `docs/README.md` for manual-verification discoverability;
- [ ] audit/update historical Phase 3 manual wording superseded by DAG/chronology improvements;
- [ ] clarify Phase 5 cumulative-vs-slice-specific manual ownership;
- [ ] review `CHANGELOG.md` structure after the large Phase 5 accumulation;
- [ ] review `CHANGELOG_POLICY.md` against actual workflow;
- [ ] run final `pnpm check` on the documentation-review head;
- [ ] open a focused review PR and merge only after user approval/action.

### Next lore slices

After the intermediate review:

1. **MK4 / Shinnok return setup** — extend Original continuity from Shao Kahn's defeat into Shinnok's return only where primary evidence supports causal or chronological bridges.
2. Shinnok MK4 outcome / aftermath with later-primary confirmation discipline.
3. Onaga resurrection/return mechanism and post-Deception fate with stronger coverage.
4. Deception cosmology vs MK11 Titan/Kronika comparison without flattening the continuities.
5. Original/Reboot/New Era Sindel comparison through claim history.
6. Revisit exact MKII/MK3 individual-victor attribution only if direct later Original evidence supports it.

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
17. see intentional causal gaps where sources establish sequence but not direct causation;
18. navigate documentation without conflicting “current branch/current slice” claims across README/PRD/AGENTS/manuals.

Manual verification procedures are indexed in `docs/README.md`.

## Phase 6 — Systematic timeline expansion

Once the model and UX are sufficiently proven, expand event-first through Original, Reboot, and New Era / MK1 / Khaos Reigns.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, fine-grained evidence locators, and richer multiverse/timeline-transition UX.

These are not goals until scale or concrete lore/navigation cases prove they are needed.
