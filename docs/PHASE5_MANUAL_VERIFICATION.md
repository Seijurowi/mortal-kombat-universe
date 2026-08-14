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

Open Kitana, Sindel, Jerrod, and the three new source records.

- [ ] `Mortal Kombat Trilogy — Shao Kahn Biography` supports the conquest and Sindel-bride claims as `canon` Facts.
- [ ] `Mortal Kombat: Deadly Alliance — Kitana Biography` supports Edenia's liberation as a `canon` Fact.
- [ ] `Mortal Kombat 3 — Sindel Ending` is identified as `game_ending`, not biography/story evidence.
- [ ] Jerrod's `spouse_of Sindel` and `father_of Kitana` Facts are `supplemental`, not silently promoted to `canon` in this slice.
- [ ] `/claims` does not label ending-vs-biography evidence-strength differences as a contradiction by itself.

## 10. Continuity discipline

- [ ] Deception/Mythologies/MKT/MK3/MKDA Original-history claims are not copied into Reboot or New Era without independent evidence.
- [ ] MK11 Titan/Kronika cosmology is not silently reconciled with Deception cosmology yet.
- [ ] Later Sindel reinterpretations are not used to rewrite the Original-continuity Edenia records in this slice.
- [ ] Future reboot/New Era Sindel comparison should use scoped Facts and claim history.

## 11. Responsive/navigation checks

- [ ] New Characters, realms, events, facts, and sources are reachable through normal Explorer navigation.
- [ ] `/claims` can inspect the new Facts without inventing contradiction semantics.
- [ ] `/causality` shows only explicit causal edges and keeps intentional gaps/disconnected components visible.
- [ ] Kitana, Sindel, and Jerrod dossiers remain readable on narrow/mobile widths.

## Decision after this slice

Before the next Phase 5 expansion, answer:

- Does `Character` remain acceptable for unique non-playable beings such as the One Being?
- Is `Faction` sufficient for collective divine groups such as the Elder Gods?
- Does `former_member_of` plus Events model Shinnok's changing divine/political status clearly enough?
- Is the `realmIds = location/scope` plus realm-target Fact pattern clear enough for future realm mergers and conquests?
- Does `supplemental` adequately preserve ending-only Jerrod lore without overstating its evidence strength?
- Do we need a first-class Artifact entity once individual Kamidogu histories become navigable, or can Facts continue to carry that concept for now?
- Are the separate short ancient-history chains easier to trust than one artificially connected story tree?
