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

Status: implementation in progress on `agent/phase5-mk3-invasion-outcome`.

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

### Liu Kang / MK1992 bridge slice ✅

- [x] Enrich the existing `mortal-kombat-1992` Event instead of duplicating the first-game tournament.
- [x] Add Goro and Shang Tsung as participants in that Event.
- [x] Add the Mortal Kombat (1992) Liu Kang ending as ending-level evidence.
- [x] Add Mortal Kombat II story and Liu Kang biography evidence as later confirmation of the first-game outcome.
- [x] Record Liu Kang defeating Goro and winning the tournament from Shang Tsung's control as canon Facts supported by later primary sources.
- [x] Model `first-game tournament → Shang Tsung seeks a second chance` because MKII explicitly connects Tsung's failure/Goro's apparent death to his plea to Shao Kahn.
- [x] Do not model Goro's death; MKII says only `apparent death`.
- [x] Merge the reviewed slice through PR #9.

### Mortal Kombat II / Outworld setup slice ✅

- [x] Extend `Shang Tsung seeks a second chance` into his explicitly sourced new plan.
- [x] Add `Shang Tsung plans an Outworld tournament` as a separate Event rather than pretending the plea itself occurred in Outworld.
- [x] Add a canon Fact for the plan to lure enemies to compete in Outworld.
- [x] Reuse and expand the existing `mk2-story` Source notes so the plan claim is directly reviewable.
- [x] Add Mortal Kombat Trilogy story as later Original-continuity confirmation that Liu Kang and his comrades were actually lured into Outworld for a second tournament.
- [x] Add `Second Mortal Kombat tournament in Outworld` with `realmIds: ["outworld"]` and a canon Fact confirming Liu Kang was lured there to compete.
- [x] Model `second-chance plea → Outworld plan → second Outworld tournament` as the supported continuation of the story chain.
- [x] Keep plan and occurrence distinct: the MKII intro establishes intent; MKT confirms that intent was carried out.
- [x] Final AGENTS/manual review and CI for the slice.
- [x] Merge the reviewed slice through PR #10.

### Mortal Kombat II / Shaolin temple attack slice ✅

- [x] Add Baraka as an Original-continuity Character.
- [x] Add the Mortal Kombat II Baraka biography as direct primary evidence that Baraka led the attack on Liu Kang's Shaolin temples.
- [x] Reuse the existing Mortal Kombat II Liu Kang biography for the ruined-temple, slain-brothers, and revenge claims.
- [x] Model `Baraka leads the attack on the Shaolin temples → Liu Kang seeks revenge after the Shaolin attack` as a supported causal chain.
- [x] Keep the attack Event's `realmIds` empty because the primary bio names the Shaolin temples but does not itself map that named place to a Realm.
- [x] Keep the attack/revenge component separate from the second-tournament lure; the current primary evidence does not say the attack caused or implemented Shang Tsung's lure plan.
- [x] Final manual review and CI.
- [x] Merge the reviewed slice through PR #11.

### Sindel scheme / MK3 invasion setup slice ✅

- [x] Add MK3 story evidence and expand Mythologies/MKT source notes for the long-running Sindel scheme.
- [x] Model `Shang Tsung arranges Sindel's reincarnation` before the first tournament without inventing a Realm location.
- [x] Treat the second Outworld tournament as the first proven multi-parent causal node: Shang Tsung's lure plan plus the older Sindel scheme/diversion framing.
- [x] Preserve MK3's `failed tournament attempts` framing as a Fact rather than forcing unsupported tournament → newly-created-plan edges.
- [x] Model `Sindel is reborn on Earthrealm → Shao Kahn breaches Earthrealm` where the source directly supplies the mechanism.
- [x] Add a separate chronology rail to `/causality` and deduplicate shared DAG nodes with explicit merge references.
- [x] Merge the reviewed slice through PR #12.

### Mortal Kombat 3 / invasion outcome slice 🔨

- [x] Add MK3 soul-taking and extermination-campaign Events/Facts with the protected-warrior qualification preserved.
- [x] Add MK3 Liu Kang biography evidence that Liu Kang becomes the prime target of Shao Kahn's extermination squads.
- [x] Add MK4 story as later Original-continuity confirmation that Earth warriors defeated Shao Kahn.
- [x] Keep the broad defeat outcome canon without promoting Liu Kang as the individual victor from ending-only evidence.
- [x] Keep `Shao Kahn breaches Earthrealm` and the later soul claim in chronology without a direct causal edge; adjacent invasion narration is not sufficient proof of that narrow causal relation.
- [x] Keep the later defeat after the invasion in chronology without inventing an extermination-squads → defeat causal edge.
- [x] Update manual verification, AGENTS guidance, and CHANGELOG.
- [ ] Final CI on the review-corrected head.
- [ ] Merge only after explicit user action/instruction.

### Next lore slices

- [ ] Shinnok escape / MK4 setup and the bridge from Shao Kahn's defeat into the next Original-continuity conflict.
- [ ] Onaga's resurrection/return mechanism and post-Deception fate with stronger source coverage.
- [ ] Compare Original cosmology against MK11-era Titan/Kronika cosmology without forcing them into one universal truth.
- [ ] Compare Original/Reboot/New Era Sindel portrayals with claim-history discipline rather than a synthetic character biography.
- [ ] Revisit exact MKII/MK3 individual-victor attribution only when direct later Original evidence supports the narrower claim.

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
12. follow the plea into Shang Tsung's Outworld plan and then the later-confirmed second tournament without confusing plan target with planning-event location;
13. inspect Baraka's Shaolin-temple attack and Liu Kang's revenge response without inventing a realm mapping or a lure-plan causal edge;
14. read chronology independently from causal topology when a shared Event has multiple parents;
15. follow the sourced Sindel-rebirth mechanism into Shao Kahn's Earthrealm breach without rewriting the older scheme as a post-MKII invention;
16. inspect MK3's soul-taking/extermination campaign and later-confirmed Shao Kahn defeat without promoting chronology into causality or broad outcome confirmation into an unsupported named victor;
17. see intentional causal gaps where the sources establish sequence or context but not direct causation.

See `PHASE5_MANUAL_VERIFICATION.md` and the slice-specific manual verification documents.

## Phase 6 — Systematic timeline expansion

Once the model and UX are proven, expand event-first through Original, Reboot, and New Era / MK1 / Khaos Reigns.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, and fine-grained evidence locators. These are not goals until scale or real lore cases prove they are needed.
