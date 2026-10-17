# Phase 6 — MKX Quan Chi ambush and capture manual verification

Use this checklist to verify the bridge from the Outworld aftermath into Jax and Kenshi's Netherrealm operation against Quan Chi.

## Scope boundary

This slice covers:
- Cassie's squad reporting D'Vorah's likely Sea of Blood route;
- Jax identifying the route as connected to Quan Chi;
- the already-underway Jax/Kenshi/Sareena ambush of Quan Chi's force;
- Jax pursuing the weakened sorcerer;
- Jax capturing Quan Chi.

It stops before:
- Kenshi transporting Quan Chi to Earthrealm;
- Quan Chi being restrained/interrogated at the refugee camp;
- Scorpion/Hanzo arriving to demand Quan Chi;
- Quan Chi's death;
- D'Vorah physically reaching Quan Chi;
- Shinnok's release.

The direct causal component is:

`Netherrealm ambush → Jax pursuit → Quan Chi capture`.

The cross-realm D'Vorah route report is chronology/context only because Jax and Kenshi are already operating in the Netherrealm when the report occurs.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `Kotal Kahn prepares retaliation against Earthrealm` — 700;
- `Cassie's squad reports D'Vorah's Sea of Blood route` — 710;
- `Jax, Kenshi, and Sareena ambush Quan Chi's force` — 720;
- `Jax pursues Quan Chi after the Netherrealm ambush` — 730;
- `Jax captures Quan Chi in the Netherrealm` — 740.

Expected:
- 700→710 and 710→720 are chronology-only;
- 720→730→740 is one direct causal component.

### 2. Inspect the cross-realm report

Expected:
- Cassie/Jacqui/Takeda/Kung Jin + Kenshi/Jax;
- no single `realmIds` value because the communicators connect Outworld and Netherrealm actors;
- Takeda's destination language remains report/belief-qualified;
- Jax identifies the Sea of Blood route as connected to Quan Chi;
- no causal edge to the already-underway ambush.

### 3. Inspect the Quan Chi ambush

Expected:
- Jax, Kenshi, Sareena, Quan Chi;
- Netherrealm scope;
- Special Forces/revenant context may remain in description without fabricating every combatant as a required participant;
- no **Why?** edge from Cassie's report;
- **What next?** points to Jax's pursuit.

### 4. Inspect Jax's pursuit

Expected:
- Jax + Quan Chi;
- Netherrealm;
- causal parent is the ambush;
- description says Jax continues after the weakened sorcerer after the ambush turns against Quan Chi's side;
- consequence points to capture.

### 5. Inspect Quan Chi's capture

Expected:
- Jax + Quan Chi;
- Netherrealm;
- Jax is the capture actor;
- description may note Jax instructing Kenshi to take Quan Chi to Sonya, but no Earthrealm transport Event is created yet;
- D'Vorah arrival / Shinnok release remains deferred.

### 6. Inspect Kenshi and Sareena

Expected:
- Kenshi is a stable Reboot/Earthrealm Character;
- Sareena is a stable Reboot/Netherrealm Character;
- neither is duplicated as a role/version entity.

### 7. Inspect Takeda's route-report Fact

Search `Takeda reported D'Vorah was heading toward the Sea of Blood`.

Expected:
- Reboot/canon/MKX Story Mode;
- value = Sea of Blood;
- notes preserve the squad's belief/report wording rather than claiming direct observation.

### 8. Inspect Sareena's aid Fact

Search `Sareena aided Earthrealm's ambush of Quan Chi`.

Expected:
- subject: Sareena;
- object: Quan Chi;
- Reboot/canon/MKX Story Mode;
- notes mention her advice about Quan Chi's weakened condition and direct participation.

### 9. Inspect Quan Chi capture Fact

Search `Quan Chi was captured by Jax`.

Expected:
- subject: Quan Chi;
- predicate: `captured_by`;
- object: Jax;
- Reboot/canon/MKX Story Mode;
- exact capture actor remains Jax.

### 10. Negative scope check

Do not expect:
- Quan Chi Earthrealm transport;
- refugee-camp imprisonment/interrogation;
- Scorpion/Hanzo intervention;
- Quan Chi death;
- D'Vorah delivery of the amulet;
- Shinnok release;
- schema/UI changes.

### 11. Mobile/regression check

At narrow/mobile width:
- navigate 700→740;
- inspect 720→730→740 causal flow;
- open Kenshi, Sareena, and the three new Facts;
- confirm the prior Kotal retaliation and D'Vorah theft records remain intact.

## Evidence/model checklist

- [ ] Kotal retaliation → D'Vorah route report remains chronology-only.
- [ ] D'Vorah route report → Quan Chi ambush remains chronology-only.
- [ ] Ambush → Jax pursuit → Quan Chi capture is directly supported.
- [ ] Cross-realm communication does not invent one Event Realm.
- [ ] Takeda's route statement remains report/belief-qualified.
- [ ] Jax remains the exact capture actor.
- [ ] No later Scorpion/D'Vorah/Shinnok sequence is folded into this slice.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
