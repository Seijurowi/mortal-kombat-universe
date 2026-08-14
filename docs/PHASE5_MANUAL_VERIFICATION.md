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
- [ ] The six Deception Konquest realms are attached to the event.
- [ ] The ancient order value places it before ordinary tournament-era events without creating causal edges by chronology alone.

## 3. Six-realm Deception scope

Confirm the dataset contains and can navigate Earthrealm, Netherrealm, Outworld, Orderrealm / Seido, Chaosrealm, and Edenia.

- [ ] The UI does not imply that this six-realm set is an exhaustive list of every realm in every continuity.

## 4. Evidence and source taxonomy

- [ ] The Shujinko and Raiden biography sources use `game_bio` and identify the original in-game material even when the accessible URL is a preservation/reproduction page.
- [ ] The Deception instruction booklet is identified as `game_manual`, not generic `other`.
- [ ] The Shujinko ending is identified as `game_ending`.
- [ ] The shattering Fact cites the Shujinko biography.
- [ ] The Kamidogu reawakening Fact does not invent a causal event chain that the current source does not establish.

## 5. Participant model change

- [ ] Existing Character-only events still render normally.
- [ ] The creation and Shinnok-banishment events can include the Elder Gods Faction as a participant.
- [ ] No Faction was duplicated as a fake Character merely to satisfy validation.

## 6. Onaga story chains

In Original continuity, inspect the causal story components.

- [ ] `Shao Kahn poisons Onaga → Shao Kahn seizes Outworld` appears as one supported chain.
- [ ] `Onaga manipulates Shujinko → Shujinko gathers the Kamidogu` appears as a separate supported chain.
- [ ] `Shujinko shatters the Kamidogu → Shujinko defeats Onaga` appears as another supported chain.
- [ ] There is no manufactured `gathers Kamidogu → shatters Kamidogu` edge simply to make one continuous tree.
- [ ] Onaga, Shao Kahn, and Shujinko dossiers expose their scoped Facts and sources.

## 7. Shinnok historical-state modeling

- [ ] Shinnok is a stable Character, not duplicated as separate `Elder God Shinnok` and `Netherrealm Shinnok` entities.
- [ ] Shinnok's former Elder God status appears as a sourced Fact rather than timeless `factionIds` membership.
- [ ] `Shinnok wars with Raiden → Shinnok is banished to the Netherrealm` renders as a supported chain.
- [ ] `Quan Chi allies with Shinnok → Shinnok becomes ruler of the Netherrealm` renders as a separate supported chain.
- [ ] Lucifer is reachable as the prior Netherrealm ruler involved in the second chain.

## 8. Continuity discipline

- [ ] Deception/Mythologies ancient-history claims are not copied into Reboot or New Era without independent evidence.
- [ ] MK11 Titan/Kronika cosmology is not silently reconciled with Deception cosmology yet.
- [ ] Future reboot Shinnok comparison should use scoped Facts rather than rewriting the Original history.

## 9. Responsive/navigation checks

- [ ] New Characters, Faction, realms, events, facts, and sources are reachable through normal Explorer navigation.
- [ ] `/claims` can inspect the new Facts without inventing contradiction semantics.
- [ ] `/causality` shows only explicit causal edges and keeps intentional gaps/disconnected components visible.

## Decision after this slice

Before the next Phase 5 expansion, answer:

- Does `Character` remain acceptable for unique non-playable beings such as the One Being?
- Is `Faction` sufficient for collective divine groups such as the Elder Gods?
- Does `former_member_of` plus Events model Shinnok's changing divine/political status clearly enough?
- Do we need a first-class Artifact entity once individual Kamidogu histories become navigable, or can Facts continue to carry that concept for now?
- Are the separate short ancient-history chains easier to trust than one artificially connected story tree?
