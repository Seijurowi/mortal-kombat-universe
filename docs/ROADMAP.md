# Roadmap

The roadmap is deliberately staged. We expand the universe only after the model and reading experience survive difficult continuity cases.

## Phase 0 — Foundation ✅

Complete and merged: Next.js + TypeScript, pnpm, shadcn/Tailwind, JSON source-of-truth data, schemas, validation, 8 entity types, explorer UX, `AGENTS.md`, and CI.

## Phase 1 — Bi-Han lore stress test ✅

Complete and merged after human review. Established sourced cross-continuity facts/events and the stable-person identity model.

## Phase 2 — Timeline-first reading experience ✅

Complete and merged after manual review. Delivered continuity-aware character dossiers, comparison, chronology, deep links, and changelog practice.

## Phase 3 — Story chains and causality ✅

Complete and merged after manual review. Delivered `/causality`, whole-chain story trees, strict chronology/causality separation, and reset/rewrite bridge validation.

## Phase 4 — Claim history, retcons, and evidence ✅

Complete and merged after manual review.

Delivered:

- `/claims` claim-family workbench;
- evidence-safe labels such as value variation and cross-continuity agreement;
- explicit retcon evidence only when a Fact is marked `retconned`;
- source-history ordering without treating newer as automatically canonical;
- no speculative `contradicts` / `supersedes` schema.

## Phase 5 — Cosmology and ancient history 🔨

Status: implementation in progress on `agent/phase5-liu-kang-1992`.

Goal: expand from character-scale lore into the oldest Mortal Kombat history while preserving source and continuity caveats instead of presenting one synthetic creation myth or one flattened ancient history as timeless canon.

### Deception cosmology foundation ✅

- [x] Add `One Being` as a non-playable primordial Character/being in Original continuity.
- [x] Add `Elder Gods` as a Faction rather than pretending the collective is one Character.
- [x] Add Edenia, Orderrealm/Seido, and Chaosrealm so all six Deception Konquest realms are represented.
- [x] Add Deception Shujinko biography and instruction-booklet source records.
- [x] Add the Elder Gods shattering the One Being as an ancient Event plus sourced Facts.
- [x] Record the Kamidogu/reawakening danger without turning it into unsupported causal edges.
- [x] Expand Event participants from Character-only to `Character | Faction`, proven by the Elder Gods acting collectively in the creation event.
- [x] Add `game_manual` as a first-class Source type after the Deception instruction booklet proved the need.
- [x] Correct creation-event realm semantics so `realmIds` is location/scope, not an output list.

### Onaga ancient-history slice ✅

- [x] Add Onaga, Shao Kahn, and Shujinko as Original-continuity Characters.
- [x] Add Raiden biography, Shujinko ending, and later Armageddon follow-up evidence.
- [x] Model `Shao Kahn poisons Onaga → Shao Kahn seizes Outworld` as a supported causal chain.
- [x] Model `Onaga manipulates Shujinko → Shujinko gathers the Kamidogu` as a supported causal chain.
- [x] Model `Shujinko shatters the Kamidogu → Shujinko defeats Onaga` as a supported causal chain.
- [x] Deliberately leave the gather → shatter gap unconnected until a source supports that direct causal edge.

### Shinnok ancient-history slice ✅

- [x] Add Shinnok and Lucifer as Original-continuity Characters.
- [x] Represent Shinnok's former Elder God status as a Fact, not timeless static faction membership.
- [x] Model `Shinnok wars with Raiden → Shinnok is banished to the Netherrealm`.
- [x] Model `Quan Chi allies with Shinnok → Shinnok becomes ruler of the Netherrealm`.
- [x] Reuse the existing Mortal Kombat Mythologies: Sub-Zero primary game source rather than duplicating source records.

### Edenia / Outworld conquest slice ✅

- [x] Add Original-continuity Kitana, Sindel, and Jerrod Characters.
- [x] Add Mortal Kombat Trilogy Shao Kahn biography evidence for the Edenian conquest and Sindel marriage history.
- [x] Add Deadly Alliance Kitana biography evidence confirming Edenia's later liberation.
- [x] Add Mortal Kombat 3 Sindel ending as explicitly ending-level evidence for Jerrod family details.
- [x] Model `Shao Kahn conquered Edenia` and `Kitana liberated Edenia` as realm-target Facts instead of overloading Event `realmIds`.
- [x] Keep conquest and later liberation as separate chronological events without inventing one direct causal edge across the unmodeled intervening history.
- [x] Keep Jerrod spouse/father claims `supplemental` while their only evidence in this slice is a character ending.
- [x] Merge the reviewed slice through PR #7.

### Great Kung Lao / pre-1992 tournament slice ✅

- [x] Add Original-continuity Great Kung Lao, Goro, and Shang Tsung Characters.
- [x] Reuse the original Mortal Kombat (1992) game story for Goro's ancient championship history.
- [x] Add Mortal Kombat II Kung Lao biography evidence identifying the ancient defeated champion as the Great Kung Lao.
- [x] Model `Goro defeats the Great Kung Lao` as an ancient tournament Event and sourced Fact.
- [x] Record Goro's Grand Champion title and roughly 500-year undefeated reign as sourced Facts.
- [x] Model Shang Tsung taking control of and corrupting the tournament as a separate Event/Fact.
- [x] Do **not** connect Goro's victory to Shang Tsung's takeover with a causal edge: the source says these happened in the same period, not that one caused the other.
- [x] Merge the reviewed slice through PR #8.

### Liu Kang / MK1992 bridge slice 🔨

- [x] Enrich the existing `mortal-kombat-1992` Event instead of duplicating the first-game tournament.
- [x] Add Goro and Shang Tsung as participants in that Event.
- [x] Add the Mortal Kombat (1992) Liu Kang ending as ending-level evidence.
- [x] Add Mortal Kombat II story and Liu Kang biography evidence as later confirmation of the first-game outcome.
- [x] Record Liu Kang defeating Goro and winning the tournament from Shang Tsung's control as canon Facts supported by later primary sources.
- [x] Model `first-game tournament → Shang Tsung seeks a second chance` because MKII explicitly connects Tsung's failure/Goro's apparent death to his plea to Shao Kahn.
- [x] Do not model Goro's death; MKII says only `apparent death`.
- [ ] Final AGENTS/manual review and CI for the slice.

### Next lore slices

- [ ] Extend the MKII setup through Shao Kahn's Outworld tournament invitation/invasion material with primary sources.
- [ ] Onaga's resurrection/return mechanism and post-Deception fate with stronger source coverage.
- [ ] Shinnok escape/MK4 and Reboot continuity comparison.
- [ ] Compare Original cosmology against MK11-era Titan/Kronika cosmology without forcing them into one universal truth.
- [ ] Compare Original/Reboot/New Era Sindel portrayals with claim-history discipline rather than a synthetic character biography.

### Phase 5 acceptance criteria

A user should be able to:

1. find the earliest sourced Original-continuity cosmology records;
2. inspect the One Being, Elder Gods, and six Deception realms through normal dossiers;
3. see that the creation event includes a Faction actor without mis-modeling that faction as a Character;
4. trace every important cosmology claim back to a named primary work/source record;
5. distinguish Deception's Original-continuity cosmology from later Titan/New Era material;
6. follow supported Onaga/Shao Kahn/Shujinko chains without chronology-only edges being invented;
7. follow Shinnok's fall/banishment and later Netherrealm rise without treating former Elder God status as eternal membership;
8. inspect Edenia's conquest/liberation as sourced realm-target claims while `realmIds` remains event location/scope metadata;
9. distinguish biography-backed Edenian canon claims from ending-only supplemental Jerrod details;
10. inspect the Great Kung Lao/Goro/Shang Tsung tournament era without turning temporal association into causality;
11. follow Liu Kang's first-game victory into Shang Tsung's documented second-chance plea without treating Goro's apparent death as confirmed death;
12. see intentional causal gaps where the sources establish sequence or context but not direct causation.

See `PHASE5_MANUAL_VERIFICATION.md`.

## Phase 6 — Systematic timeline expansion

Once the model and UX are proven, expand event-first through Original, Reboot, and New Era / MK1 / Khaos Reigns.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, and fine-grained evidence locators. These are not goals until scale or real lore cases prove they are needed.
