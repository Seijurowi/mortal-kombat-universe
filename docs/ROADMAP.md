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

## Phase 5 — Cosmology and ancient history ✅

**Status: complete.**

Phase 5 expanded from character-scale lore into ancient history and cosmology while preserving source, continuity, causality, and evidence caveats instead of presenting one synthetic canon narrative. Its final evidence audit deliberately kept MKII/MK3/MK4 individual-victor attribution broad where later Original-continuity evidence remained broad.

### Completed Phase 5 slices

#### Deception cosmology foundation ✅
- One Being as unique non-playable Character/being.
- Elder Gods as Faction and valid Event participant.
- six Deception navigation realms represented.
- creation-myth evidence and `game_manual` source category.
- Event `realmIds` locked to location/scope rather than realm outputs.

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

#### Shao Kahn / Deadly Alliance apparent-death stress test ✅ — PR #19
- MKDA's first-obstacle attack is preserved without asserting the attacked figure was definitely the real Shao Kahn.
- MKDA's explicit older death portrayal is preserved as `retconned` evidence.
- Deception biographies establish Shao Kahn's clone-decoy escape and the real Shao Kahn alive after the Deadly Alliance era.
- no claim says the clone specifically received the Deadly Alliance attack or identifies who killed the clone.
- first useful real same-continuity `retconned` claim family works without `contradicts` / `supersedes` schema.
- merged as `4bb9b03afc744c8152e56fe88b1cd5d9eebe40bd` after manual/source review and final-head CI.

#### Onaga return and post-Deception fate ✅ — PR #20
- Reptile and Nightwolf Original-continuity coverage added for the return/fate chain.
- Deadly Alliance Reptile ending remains ending-strength evidence while later Armageddon material confirms the narrower Reptile-host outcome.
- Shujinko's broad responsibility for allowing Onaga's return stays separate from any invented `gathers Kamidogu → physical return` causal edge.
- Shujinko's final blow and Nightwolf's soul binding share one story moment without a causal edge between them.
- Shinnok's release of Onaga from the Netherrealm leads to Onaga awakening in his original body; the awakening Realm remains unasserted.
- Onaga's soul is not modeled as destroyed after Deception.
- merged as `5ab9a24305325bfc33f8dc957ad4324f69ff6e2d` after manual/source review, short maintainer test cases, and final-head CI.

#### Deception vs MK11 cosmology comparison ✅ — PR #21
- Existing Original-continuity One Being / Elder Gods / Kamidogu facts remain intact while Reboot Kronika claims are independently scoped.
- Kronika is sourced as Keeper of Time and Titan; her restart objective remains a plan and prior restarts remain Reboot-only.
- Official `creator of existence` wording remains `supplemental` promotional evidence rather than an invented realm-creation mechanism.
- `/cosmology` compares the frameworks without Kronika = One Being identity, Titan/Elder God/One Being hierarchy, or automatic cross-continuity retcon.
- current Character + Fact + Source + timeline scoping proved sufficient; no schema change required.
- merged as `d85d2cc728b160ae06f0bb061c849eb37c07b9b3` after source/manual review and final-head CI.

#### Original / Reboot / New Era Sindel claim history ✅ — PR #22
- stable Sindel and Jerrod Characters span Original, Reboot, and New Era rather than being duplicated by continuity.
- royal-role wording remains source-specific: Original `Queen of Edenia`, Reboot `Shao Kahn's Empress`, New Era `Empress of Outworld`.
- `spouse_of = Jerrod` agrees across all three continuities while preserving Original `supplemental` versus Reboot/New Era `canon` evidence strength.
- Original Deception canon attributes Jerrod's death to Shao Kahn; Reboot Aftermath canon attributes it to Sindel; New Era preserves only the broader murder outcome without inventing a killer.
- `/claims?q=Sindel` deep-links into the comparison and same-value cross-continuity agreement can coexist visibly with status variation.
- no schema or automatic contradiction/supersession/retcon relation was required.
- merged as `6de5ffb3d7b27bf10f9e7dec948338dc2e0d8889` after source/manual review, final contract review, and final-head CI.

#### Original-continuity individual-victor attribution audit ✅ — PR #23
- MKII/MK3/MK4 Liu Kang endings are preserved as `game_ending` source history rather than promoted into stronger canon Facts.
- existing MK3 canon `Shao Kahn defeated_by Earth warriors` and MK4 canon `Shinnok was_defeated = true` stay broad.
- repeated protagonist endings do not count as independent canon confirmation merely through repetition.
- no canon `defeated_by = Liu Kang` Fact, Event participant, causal edge, schema change, or UI change was added from ending repetition alone.
- merged as `1369869be29b42604d2f752fb0cc2f2dbed8ec48` after manual/source review, final contract review, and final-head CI.

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
25. follow Onaga's Reptile-host return and post-Deception soul/body state without canonizing every ending detail or turning simultaneity into causality;
26. see Nightwolf's Netherrealm binding and Shujinko's final blow as one story moment but separate causal components;
27. follow Shinnok's sourced release of Onaga into his original body without an invented awakening Realm;
28. compare Deception's Original cosmology with MK11's Kronika framework side by side without being told the two are one hierarchy, one entity, or an automatic retcon;
29. distinguish direct in-game Kronika claims from stronger-sounding official promotional wording that remains supplemental;
30. compare Sindel's royal role across Original, Reboot, and New Era without normalizing distinct source wording into one synthetic title;
31. see Jerrod as Sindel's spouse across all three continuities while retaining each Fact's own evidence strength;
32. compare Original and Reboot Jerrod-killer attribution as scoped value variation rather than an automatic global retcon;
33. see the New Era murder outcome without an invented killer when MK1 does not identify one in the evidence used;
34. inspect MKII/MK3/MK4 Liu Kang ending attributions as ending-strength evidence without seeing them silently promoted into canon individual-victor Facts when later evidence remains broad;
35. see intentional causal and continuity gaps where sources do not establish a direct connection;
36. navigate documentation without conflicting live-status claims.

Manual verification procedures are indexed in `docs/README.md`. Final readiness is governed by `docs/DEFINITION_OF_DONE.md`.

## Phase 6 — Systematic timeline expansion 🔨

**Status: in progress.**

Phase 6 began with the first Reboot-continuity MK9 tournament decomposition in PR #24. That slice was merged after manual review and final-head CI as `8f52f542815035c584a40470457f277c03aa2c59`.

Kickoff coverage audit found the Event store heavily weighted toward Original continuity: **44 Original / 7 Reboot / 3 New Era Events** before Phase 6 expansion. Phase 6 therefore starts by expanding the underrepresented Reboot chronology rather than adding another Original slice.

### MK9 first-tournament decomposition ✅ — PR #24
- first altered-timeline tournament narrowed to Earthrealm scope;
- Shang Tsung's later Outworld-tournament proposal separated from the first tournament occurrence;
- Liu Kang's first-tournament win and Shang Tsung's proposal backed by Reboot canon Facts from `mk9-story`;
- unsupported `Raiden warning → tournament occurrence` causality removed;
- Bi-Han's tournament-era death corrected to Netherrealm scope;
- merged as `8f52f542815035c584a40470457f277c03aa2c59` after maintainer manual/source review, final contract review, and final-head CI.

### MK9 Outworld-tournament occurrence ✅ — PR #25

- Shang Tsung's proposal remains a distinct plan/proposal Event;
- the replacement Outworld tournament is separately modeled in Reboot continuity;
- proposal → occurrence causality is mirrored because MK9 shows the terms accepted and tournament carried out;
- Liu Kang's tournament win and exact Shao Kahn defeat attribution are Reboot canon Facts from `mk9-story`;
- merged as verified commit `7dfdfa1518df3950e16ca109384ce65d4bf00044` after maintainer manual/source review, final contract review, and final-head CI.

### MK9 Sindel resurrection and Earthrealm invasion ✅ — PR #26

- Quan Chi's invasion proposal remains separate from the actual invasion occurrence;
- Sindel's Earthrealm resurrection is the separately modeled mechanism that nullifies her ward/barrier;
- proposal → resurrection → invasion causality is mirrored only where MK9 explicitly supplies the mechanism/execution relationship;
- invasion remains distinct from the later attempted realm merger;
- merged as verified commit `47d9096e11bfaeb8ceaec67bbf7bf5b26349d871` after maintainer manual/source review, final contract review, and final-head CI.

### MK9 Soulnado interruption ✅ — PR #27

- Quan Chi's Soulnado creation and Nightwolf's destruction of it remain separate Reboot Events;
- Soulnado creation → destruction causality is mirrored while the broader invasion → Soulnado transition stays chronology-only;
- Bi-Han being pulled into the Soulnado remains narrower than a confirmed death/final-fate claim;
- Nightwolf remains one stable Character expanded to Reboot continuity;
- merged as verified commit `274a97602e8179ca5da072123852d9621559fb8e` after maintainer manual/source review, final contract review, and final-head CI.

### MK9 Sindel assault and defender casualties ✅ — PR #28

- Sindel's Earthrealm assault remains a separate Reboot occurrence from the earlier Soulnado component;
- Kabal, Stryker, Kuai Liang, Jax, Smoke, and Jade have narrow Reboot canon `killed_by = Sindel` Facts from `mk9-story`;
- Nightwolf's self-sacrifice/Sindel death and Kitana's later death from Sindel-inflicted injuries remain separate sourced outcomes of the assault;
- death Facts do not silently imply later revenant state, and chronology between the outcomes does not manufacture causality;
- merged as verified commit `ad98e8afc46bdab4221d8745728511bbcaffc645` after maintainer manual/source review, final contract review, and final-head CI.

### MK9 Elder Gods refusal ✅ — PR #29

- Raiden's appeal and the Elder Gods' refusal remain separate Reboot Events with only the direct request→response causal edge;
- Sindel's concurrent assault/deaths remain parallel chronology rather than causal parents;
- the Elder Gods' rule explanation keeps invasion distinct from the proscribed realm merger, and the scene carries no invented structured Realm;
- the stable Elder Gods Faction spans Original and Reboot continuity without duplicating the collective actor;
- merged as verified commit `a0111c5c56c9e9350b03b0fd0ad5a9f44e4dae73` after maintainer manual/source review, final contract review, and final-head CI.

### MK9 Quan Chi soul bargain and control reveal ✅ — PR #30

- Raiden's proposed soul bargain and Quan Chi's separate soul-possession/control reveal remain distinct Reboot Events;
- only the direct bargain → reveal request/response causal edge is modeled, while the earlier Elder Gods refusal and defender deaths remain chronology/context;
- Shao Kahn's payment of fallen souls for Netherrealm allegiance and Quan Chi's command of the fallen remain narrow sourced Facts without requiring a formal later `revenant` label;
- the reveal roster remains intentionally non-exhaustive rather than manufacturing missing death coverage solely to fill the participant list;
- merged as verified commit `543a109fb1da4fd43e640c528f9a0233d8beab9e` after maintainer manual/source review, final contract review, and final-head CI.

### Current MK9 He Must Win realization

**Current work:** Draft PR #31 on `agent/phase6-mk9-he-must-win-realization`, branched exactly from verified PR #30 merge commit `543a109fb1da4fd43e640c528f9a0233d8beab9e`.

- [x] Start exactly from verified PR #30 merge commit `543a109fb1da4fd43e640c528f9a0233d8beab9e`.
- [x] Add Quan Chi's post-fight dismissal of the Elder Gods / Shao Kahn-arrival prediction as a separate Reboot Event in the Netherrealm.
- [x] Add Raiden's `He must win` realization as a separate Reboot Event in the Netherrealm.
- [x] Keep the earlier soul-control reveal → Quan Chi post-fight taunt transition chronology-only rather than manufacturing a causal edge from scene adjacency.
- [x] Mirror only the direct `Quan Chi post-fight taunt → Raiden realization` causal edge supported by the dialogue/reasoning sequence.
- [x] Add narrow Reboot canon Facts for Quan Chi's Shao Kahn-arrival prediction, Quan Chi's claim that the Elder Gods will not act, and Raiden's realization that `He must win` refers to Shao Kahn using `mk9-story`.
- [x] Keep Quan Chi's Elder Gods statement explicitly as his sourced claim rather than an omniscient universal Fact.
- [x] Keep Shao Kahn's arrival prediction weaker than a completed arrival/merger occurrence.
- [x] Keep Raiden's later explicit plan to allow the merger, Liu Kang confrontation/death, illegal merger, Elder Gods intervention/punishment, and Shao Kahn final defeat outside this slice.
- [x] Add/index a Phase 6 He Must Win realization manual with short maintainer test cases.
- [x] Review/update `CHANGELOG.md` for the realization outcome and prediction/claim/causality boundaries.
- [x] Confirm final changed-file scope: exactly 9 expected files, limited to this MK9 Reboot slice plus owning docs/manual.
- [x] Open Draft PR #31 for the slice.
- [ ] Maintainer manual source/UI pass completed.
- [ ] Final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review completed.
- Final-head CI must be green before Ready for review; CI state is owned by PR checks rather than duplicated as a fragile checkbox here.
- [ ] Merge only after explicit user/maintainer action.

### Next lore slices

1. Model Raiden's explicit plan to allow Shao Kahn to merge the realms as a separate Reboot plan Event/Facts, verifying whether `realization → allow-merger plan` is directly supported before adding the causal edge.
2. Model Liu Kang's confrontation with Raiden and accidental death as a separate occurrence with exact participant/Realm/evidence boundaries.
3. Model Shao Kahn's illegal realm-merger attempt, Elder Gods intervention/punishment, and final defeat as narrow separate occurrences rather than one endgame umbrella.
4. Add later-primary formal revenant-state confirmation when MKX coverage begins, rather than retroactively strengthening the MK9 soul-control scene.
5. Advance through MKX/MK11 after the MK9 Reboot chronology has enough structure to make causal transitions inspectable without large gaps.
6. Expand New Era / MK1 / Khaos Reigns after the Reboot chronology has enough structure to make cross-continuity navigation meaningful rather than sparse anchor comparison.

### Phase 6 working acceptance criteria

A user should be able to:

1. read Reboot chronology as distinct events rather than one broad MK9 umbrella;
2. distinguish tournament proposals/plans and invasion proposals from later occurrences;
3. see Event participants and Realm scope only where the source supports them;
4. follow chronology without warning/reset context, shared invasion context, or parallel story timing being turned into unsupported ordinary causality;
5. trace new event assertions back to primary story Sources and atomic Facts;
6. distinguish an Earthrealm invasion from a later realm-merger attempt;
7. distinguish a character being pulled into a destructive phenomenon from a sourced confirmed death/final-fate claim;
8. inspect individual Sindel casualty attribution without treating the assault as proof of later revenant state;
9. inspect Raiden's Elder Gods appeal/refusal as a parallel causal component without being told the Sindel casualties caused it;
10. distinguish the Reboot rule statement `invasion is not itself a transgression` from the separately proscribed realm merger and later punishment scene;
11. keep stable Characters/Factions continuity-scoped to the evidence actually added rather than projecting unmodeled history;
12. retain Original, Reboot, and New Era as independently inspectable continuities while coverage grows;
13. keep existing claim-history, chronology, DAG, source, and mobile behavior trustworthy as Event volume increases;
14. distinguish Raiden's proposed soul bargain from any completed transfer of those souls;
15. inspect Quan Chi's sourced soul possession/control and Shao Kahn payment claim without requiring a later formal revenant label;
16. understand that Event participant coverage may stay intentionally non-exhaustive when the broad sourced claim is represented literally rather than by manufacturing missing roster history;
17. distinguish Quan Chi's prediction/claim about Shao Kahn and the Elder Gods from completed future occurrences or universal narrator truth;
18. follow the directly supported Quan Chi-taunt → Raiden-realization causal relation while keeping the earlier soul-control reveal chronology-only and the later allow-merger plan separate.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, fine-grained evidence locators, and richer multiverse/timeline-transition UX.

These are not goals until scale or concrete lore/navigation cases prove they are needed.
