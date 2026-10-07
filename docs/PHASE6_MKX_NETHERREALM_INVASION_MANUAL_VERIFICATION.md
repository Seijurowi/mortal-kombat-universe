# Phase 6 — MKX Netherrealm invasion and Shinnok imprisonment manual verification

Use this checklist to verify the first event-focused Mortal Kombat X chronology slice after the MK9 endgame and biography-only revenant/restoration bridge.

## Scope boundary

This slice covers:
- Shinnok's Netherrealm invasion of Earthrealm;
- the Jinsei-chamber assault;
- Johnny Cage's defensive power manifestation while protecting Sonya;
- Raiden imprisoning Shinnok in Shinnok's own amulet.

The broader invasion Event is chronology/context for the Jinsei assault, not an automatic causal parent. The directly supported causal component begins with the Jinsei assault and continues through Johnny's intervention to Shinnok's imprisonment.

Later Quan Chi pursuit/restoration material and the 25-year-later MKX storyline remain deferred.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline** and scroll to the MK9→MKX bridge.

Expected order:
- `Shao Kahn suffers his final MK9 defeat` — 400;
- `Shinnok's Netherrealm forces invade Earthrealm` — 410;
- `Shinnok assaults the Jinsei chamber` — 420;
- `Johnny Cage awakens his power while protecting Sonya` — 430;
- `Raiden imprisons Shinnok in his own amulet` — 440.

Expected:
- the MKX invasion is visibly later than the MK9 endgame;
- no fabricated direct MK9-final-defeat → Shinnok-invasion causal edge appears.

### 2. Verify chronology versus causality

Select the Jinsei assault.

Expected causal chain:
`Jinsei assault → Johnny power/intervention → Shinnok imprisonment`.

Must not appear:
- `broad invasion → Jinsei assault` as a causal edge merely because the assault is part of that campaign;
- `MK9 final defeat → invasion` as an ordinary causal edge.

### 3. Inspect the invasion Event

Open `Shinnok's Netherrealm forces invade Earthrealm`.

Expected:
- Reboot;
- Earthrealm scene scope;
- Shinnok and Quan Chi represented as direct high-level participants;
- description explicitly says the represented roster is non-exhaustive in effect and avoids turning every later battle into a child of the broad invasion.

### 4. Inspect the Jinsei assault

Open `Shinnok assaults the Jinsei chamber`.

Expected:
- participants include Shinnok, Raiden, Fujin, Quan Chi;
- Earthrealm scope;
- Raiden/Fujin defend the Sky Temple/Jinsei;
- Shinnok uses the amulet against the gods and threatens Earthrealm's life force;
- consequence points only to Johnny's intervention.

### 5. Inspect Johnny's intervention

Open `Johnny Cage awakens his power while protecting Sonya`.

Expected:
- participants: Johnny, Sonya, Shinnok;
- Johnny's green power is triggered in the shown defensive moment;
- description does not claim Johnny alone captures Shinnok;
- consequence points to the imprisonment Event.

### 6. Inspect Shinnok's imprisonment

Open `Raiden imprisons Shinnok in his own amulet`.

Expected:
- participants: Shinnok, Raiden, Johnny;
- Raiden performs the actual imprisonment;
- Johnny's intervention remains the direct causal parent;
- the description does not credit Fujin or Johnny as the individual captor when Story Mode directly shows Raiden perform the final act.

### 7. Inspect the three new Facts

In **Explorer → Reboot Timeline → Facts**, verify:
- `Shinnok attacked Earthrealm after escaping confinement`;
- `Johnny Cage manifested protective power against Shinnok`;
- `Raiden imprisoned Shinnok in Shinnok's own amulet`.

Expected:
- all Reboot/canon;
- attack and imprisonment cite both Story Mode and MKX biography evidence where applicable;
- Johnny's power cites Story Mode;
- notes preserve direct actor attribution and do not overgeneralize the power mechanism.

### 8. Inspect stable Characters

Open Shinnok, Fujin, Johnny Cage, and Sonya Blade.

Expected:
- Shinnok is one stable Character now spanning Original + Reboot;
- Fujin, Johnny, and Sonya are stable Reboot Characters;
- no state such as imprisoned, empowered, or injured is stored as timeless Character metadata.

### 9. Negative scope check

Do not expect yet:
- Quan Chi's later capture/pursuit Event;
- Scorpion/Sub-Zero restoration;
- a `cleansed_by` relation;
- Shinnok's later release from the amulet;
- the 25-year-later Special Forces/Outworld storyline;
- schema/UI changes.

### 10. Mobile/regression check

At narrow/mobile width:
- navigate the 400→440 chronology sequence;
- inspect the 420→430→440 causal chain;
- open the three Facts and new/expanded Characters;
- confirm Original Shinnok coverage remains intact.

## Evidence/model checklist

- [ ] MK9 final defeat → MKX invasion remains chronology-only.
- [ ] Broad invasion → Jinsei assault remains chronology-only rather than umbrella→child causality.
- [ ] Jinsei assault → Johnny intervention is directly supported.
- [ ] Johnny intervention → Shinnok imprisonment is directly supported.
- [ ] Raiden remains the structured final imprisonment actor.
- [ ] Johnny's enabling role remains separately visible.
- [ ] Shinnok stable identity spans Original/Reboot without duplication.
- [ ] Event `realmIds` remains location/scope only.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
