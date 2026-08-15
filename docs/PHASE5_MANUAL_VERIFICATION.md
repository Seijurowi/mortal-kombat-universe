# Phase 5 Manual Verification — Cosmology and Ancient History

This checklist verifies the current Original-continuity cosmology / ancient-history slice without flattening later continuities into it.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

## 1. Earliest cosmology records

- [ ] Search for `One Being` and open its dossier.
- [ ] The One Being is scoped to Original continuity rather than presented as universal across all timelines.
- [ ] Search for `Elder Gods` and confirm the collective is a Faction, not a fabricated single Character.

## 2. Creation event

Open `Elder Gods shatter the One Being`.

- [ ] Both `Elder Gods` and `One Being` appear as participants.
- [ ] The event is Original-continuity only.
- [ ] The event does **not** attach the six later realms through `realmIds`; `realmIds` remains location/scope rather than an event-output field.
- [ ] The associated Fact says the shattering formed **the realms** without claiming the separately enumerated six Konquest realms are an exhaustive set of One Being fragments.
- [ ] The ancient order value places it before ordinary tournament-era events without creating causal edges by chronology alone.

## 3. Six-realm Deception navigation scope

Confirm the dataset contains and can navigate Earthrealm, Netherrealm, Outworld, Orderrealm / Seido, Chaosrealm, and Edenia.

- [ ] These realm records are independently useful for Deception navigation.
- [ ] The UI does not imply that this six-realm set is an exhaustive list of every realm in every continuity.
- [ ] The UI does not imply that the manual's six Konquest realms prove those exact six are the complete output of the One Being shattering event.

## 4. Evidence and source taxonomy

- [ ] The Shujinko and Raiden biography sources use `game_bio` and identify the original in-game material even when the accessible URL is a preservation/reproduction page.
- [ ] The Deception instruction booklet is identified as `game_manual`, not generic `other`.
- [ ] The Shujinko ending is identified as `game_ending`.
- [ ] The Armageddon Shujinko biography is available as later follow-up evidence confirming Onaga's defeat.
- [ ] The shattering Fact cites the Shujinko biography.
- [ ] The Kamidogu reawakening Fact does not invent a causal event chain that the current source does not establish.

## 5. Participant model change

- [ ] Existing Character-only events still render normally.
- [ ] The creation and Shinnok-banishment events can include the Elder Gods Faction as a participant.
- [ ] Faction participants link to normal Faction dossiers in `/causality` and event detail views.
- [ ] No Faction was duplicated as a fake Character merely to satisfy validation.

## 6. Onaga story chains

In Original continuity, inspect the causal story components.

- [ ] `Shao Kahn poisons Onaga → Shao Kahn seizes Outworld` appears as one supported chain.
- [ ] `Onaga manipulates Shujinko → Shujinko gathers the Kamidogu` appears as a separate supported chain.
- [ ] `Shujinko shatters the Kamidogu → Shujinko defeats Onaga` appears as another supported chain.
- [ ] There is no manufactured `gathers Kamidogu → shatters Kamidogu` edge simply to make one continuous tree.
- [ ] The `Shujinko defeated Onaga` Fact exposes both the Deception ending and later Armageddon biography evidence.
- [ ] Onaga, Shao Kahn, and Shujinko dossiers expose their scoped Facts and sources.

## 7. Shinnok historical-state modeling

- [ ] Shinnok is a stable Character, not duplicated as separate `Elder God Shinnok` and `Netherrealm Shinnok` entities.
- [ ] Shinnok's former Elder God status appears as a sourced Fact rather than timeless `factionIds` membership.
- [ ] `Shinnok wars with Raiden → Shinnok is banished to the Netherrealm` renders as a supported chain.
- [ ] `Quan Chi allies with Shinnok → Shinnok becomes ruler of the Netherrealm` renders as a separate supported chain.
- [ ] Lucifer is reachable as the prior Netherrealm ruler involved in the second chain.

## 8. Edenia / Outworld conquest semantics

Search/open `Shao Kahn conquers Edenia`, `Kitana frees Edenia from Shao Kahn`, and the Edenia dossier.

- [ ] The conquest event uses `realmIds: ["edenia"]` only as event location/scope.
- [ ] The statement that Shao Kahn conquered Edenia is a sourced Fact with `objectId: "edenia"`.
- [ ] The statement that Kitana liberated Edenia is a separate sourced Fact with `objectId: "edenia"`.
- [ ] The conquest and liberation events are **not** directly connected by a causal edge merely because one reverses the other historically.
- [ ] `/causality` therefore keeps those events disconnected until the intervening history is explicitly modeled.

## 9. Edenian evidence strength

Open Kitana, Sindel, Jerrod, and the three source records used by the slice.

- [ ] `Mortal Kombat Trilogy — Shao Kahn Biography` supports the conquest and Sindel-bride claims as `canon` Facts.
- [ ] `Mortal Kombat: Deadly Alliance — Kitana Biography` supports Edenia's liberation as a `canon` Fact.
- [ ] `Mortal Kombat 3 — Sindel Ending` is identified as `game_ending`, not biography/story evidence.
- [ ] Jerrod's `spouse_of Sindel` and `father_of Kitana` Facts are `supplemental`, not silently promoted to `canon` in this slice.
- [ ] `/claims` does not label ending-vs-biography evidence-strength differences as a contradiction by itself.

## 10. Great Kung Lao / Goro tournament history

Search/open `Great Kung Lao`, `Goro`, and `Goro defeats the Great Kung Lao`.

- [ ] Great Kung Lao, Goro, and Shang Tsung are Original-continuity Characters in this slice.
- [ ] `Goro defeated the Great Kung Lao` cites both the original Mortal Kombat story and Mortal Kombat II Kung Lao biography.
- [ ] Goro's Grand Champion title is a historical Fact rather than timeless Character metadata.
- [ ] Goro's roughly 500-year undefeated reign is a separate sourced Fact.
- [ ] The Mortal Kombat II source is identified as `game_bio` and as a reproduction of the in-game biography rather than TRMK being treated as canon authority.
- [ ] The Mortal Kombat (1992) arcade story source exposes a preservation URL and explicitly identifies the preservation site as access infrastructure rather than canonical authority.

## 11. Tournament chronology versus causality

Open `Goro defeats the Great Kung Lao` and `Shang Tsung takes control of the tournament`, then inspect `/causality`.

- [ ] Both Events are chronologically placed before the first-game tournament.
- [ ] `Shang Tsung controlled and corrupted the tournament` is represented as a sourced Fact.
- [ ] There is **no** direct `Goro defeats Great Kung Lao → Shang Tsung takes control` causal edge.
- [ ] The phrase “during this period” is treated as temporal association/context, not proof of causality.
- [ ] `/causality` therefore shows these as disconnected components unless a future primary source establishes a direct causal relation.

## 12. Liu Kang / MK1992 outcome bridge

Open `First game tournament`, Liu Kang, Goro, Shang Tsung, and `Shang Tsung seeks a second chance`.

- [ ] The existing `mortal-kombat-1992` Event is enriched rather than duplicated.
- [ ] Liu Kang, Goro, and Shang Tsung are visible as relevant participants alongside existing first-game participants.
- [ ] `Liu Kang defeated Goro` is a `canon` Fact citing the MK1992 ending plus the later MK4 Goro biography, which directly says the title was won from Goro by Liu Kang.
- [ ] `Liu Kang won the tournament from Shang Tsung's control` is a `canon` Fact citing the MK1992 ending plus MKII Liu Kang biography.
- [ ] The MK4 Goro biography is used narrowly for the Liu Kang/Goro result and does not import its known erroneous Kung Lao genealogy wording.
- [ ] The UI does not imply that every detail of Liu Kang's arcade ending became canonical merely because later sources confirm these narrower outcomes.
- [ ] Goro has **no confirmed death Fact/Event** from this slice; MKII's wording remains `apparent death`.

## 13. First-game consequence into MKII

Inspect `/causality` around the first-game tournament.

- [ ] `First game tournament → Shang Tsung seeks a second chance` appears as a supported causal edge.
- [ ] The follow-up Event includes Shang Tsung and Shao Kahn.
- [ ] The follow-up Event has no inferred realm scope: MKII establishes that the later plan concerns Outworld, but does not establish where Tsung makes his plea.
- [ ] The causal edge is justified by MKII story text connecting Tsung's failure/Goro's apparent death to his plea for another chance.
- [ ] This new supported edge does not cause unrelated pre-1992 tournament events to become causally connected.

## 14. MKII Outworld plan and confirmed tournament

Open `Shang Tsung plans an Outworld tournament`, `Second Mortal Kombat tournament in Outworld`, `Shang Tsung planned to lure his enemies to compete in Outworld`, and `Liu Kang was lured into Outworld for the second tournament`.

- [ ] The planning Event has **no** `realmIds` entry because the source establishes the target realm of the plan, not the location where the plan is made.
- [ ] The plan Fact is `canon` and cites `Mortal Kombat II — Arcade Story`.
- [ ] The MKII Source notes explicitly include the new plan to lure enemies to compete in Outworld.
- [ ] `Mortal Kombat Trilogy — Story` is present as later Original-continuity confirmation that Liu Kang and his comrades were actually lured into Outworld for a second tournament.
- [ ] `Second Mortal Kombat tournament in Outworld` carries `realmIds: ["outworld"]` and does not rely on the MKII plan alone as proof that the plan occurred.
- [ ] `Liu Kang was lured into Outworld for the second tournament` is a `canon` Fact citing the MKT story.
- [ ] `/causality` shows `First game tournament → Shang Tsung seeks a second chance → Shang Tsung plans an Outworld tournament → Second Mortal Kombat tournament in Outworld`.
- [ ] The new links do not connect the older Great Kung Lao-era events merely to make one continuous tournament tree.
- [ ] No later Reboot/New Era retelling is used to fill Original-continuity details in this chain.

## 15. Continuity discipline

- [ ] Deception/Mythologies/MKT/MK3/MKDA/MK1/MKII/MK4 Original-history claims are not copied into Reboot or New Era without independent evidence.
- [ ] MK11 Titan/Kronika cosmology is not silently reconciled with Deception cosmology yet.
- [ ] Later Sindel reinterpretations are not used to rewrite the Original-continuity Edenia records in this slice.
- [ ] MK9/New Era tournament retellings are not silently used to fill gaps in the Original tournament history.
- [ ] Future reboot/New Era comparisons should use scoped Facts and claim history.

## 16. Responsive/navigation checks

- [ ] New Characters, realms, events, facts, and sources are reachable through normal Explorer navigation.
- [ ] `/claims` can inspect the new Facts without inventing contradiction semantics.
- [ ] `/causality` shows only explicit causal edges and keeps intentional gaps/disconnected components visible.
- [ ] Liu Kang, Goro, Shang Tsung, Great Kung Lao, Kitana, Sindel, and Jerrod dossiers remain readable on narrow/mobile widths.

## Decision after this slice

Before the next Phase 5 expansion, answer:

- Does `Character` remain acceptable for unique non-playable beings such as the One Being?
- Is `Faction` sufficient for collective divine groups such as the Elder Gods?
- Does `former_member_of` plus Events model Shinnok's changing divine/political status clearly enough?
- Is the `realmIds = location/scope` plus realm-target Fact pattern clear enough for future realm mergers and conquests?
- Does `supplemental` adequately preserve ending-only Jerrod lore without overstating its evidence strength?
- Is the chronology-without-causality rule clear enough for tournament history where sources say events occurred “during this period”?
- Is ending + later primary confirmation clear enough to support a narrower `canon` outcome without canonizing an ending wholesale?
- Are qualified states such as `apparent death` staying visibly weaker than confirmed death?
- Are event locations omitted when realm scope is not directly supported, even if the surrounding story later moves to a known realm?
- Is the plan-versus-occurrence split clear enough to distinguish “plan targets Outworld” from “later source confirms that plan happened”?
- Do we need a first-class Artifact entity once individual Kamidogu histories become navigable, or can Facts continue to carry that concept for now?
- Are the separate short ancient-history chains easier to trust than one artificially connected story tree?
