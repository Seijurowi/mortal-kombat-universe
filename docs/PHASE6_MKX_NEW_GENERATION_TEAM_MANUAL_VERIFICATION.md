# Phase 6 — MKX new-generation team and Lin Kuei exercise manual verification

Use this checklist to verify the first twenty-years-later Mortal Kombat X slice: Johnny Cage briefs Cassie's new-generation squad, sends them to contact Sub-Zero, and the apparent Lin Kuei retrieval mission is revealed as a training exercise focused on teamwork.

## Scope boundary

This slice stops after Sub-Zero's team assessment. Li Mei's warning, Mileena's possession of Shinnok's amulet, the Outworld civil war, and the squad's Outworld mission belong to the next slice.

The three direct story steps form one causal component:

`Johnny briefing/assignment → Lin Kuei exercise → Sub-Zero assessment`.

## Maintainer test cases

### 1. Verify the twenty-years-later chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `Raiden restores Jax, Scorpion, and Sub-Zero` — 480;
- `Johnny Cage briefs Cassie's new-generation squad` — 490;
- `Cassie's squad enters the Lin Kuei temple` — 500;
- `Sub-Zero assesses Cassie's squad` — 510.

Expected:
- the main-era MKX jump is readable as a later chronology segment;
- no `restoration → twenty-years-later briefing` causal edge appears merely because the briefing is next in story order.

### 2. Verify the direct causal component

Select `Johnny Cage briefs Cassie's new-generation squad`.

Expected:
`briefing/assignment → Lin Kuei exercise → Sub-Zero assessment`.

The mirrored edge is appropriate because Johnny explicitly gives the mission, the squad executes it, and the exercise ends in Sub-Zero's explicit assessment.

### 3. Inspect the briefing Event

Expected:
- Reboot / Earthrealm;
- Johnny, Cassie, Jacqui, Takeda, Kung Jin;
- description says twenty years have passed since the earlier Shinnok sequence;
- Cassie is identified as squad leader;
- Johnny assigns the Sub-Zero contact/retrieval mission;
- no Outworld mission is added yet.

### 4. Inspect the Lin Kuei exercise

Expected:
- Cassie, Jacqui, Takeda, Kung Jin, Kuai Liang, and the Lin Kuei Faction are represented;
- Earthrealm scope;
- the team enters/fights through the Lin Kuei temple;
- the Event description foreshadows/reveals that the apparent mission was a training exercise;
- no claim that Earthrealm and the Lin Kuei entered a real war.

### 5. Inspect Sub-Zero's assessment

Expected:
- Kuai Liang plus the four younger fighters;
- Sub-Zero reveals the exercise was arranged with Johnny;
- he says the team must function together;
- no downstream Outworld Event yet.

### 6. Inspect new stable Characters

Open:
- Cassie Cage;
- Jacqui Briggs;
- Takeda Takahashi;
- Kung Jin.

Expected:
- all are Reboot-scoped stable people;
- no duplicate mantle/version entities;
- squad leadership, faction role, and other changing states are not stored as timeless Character metadata.

### 7. Inspect the Special Forces Faction

Open `Special Forces`.

Expected:
- Reboot only for currently modeled evidence;
- Earthrealm scope;
- broad organization description only;
- no unsupported Original/New Era expansion yet.

### 8. Inspect the three new Facts

Verify:
- `Cassie Cage led the new-generation Special Forces squad`;
- `Kuai Liang served as Grandmaster of the Lin Kuei`;
- `Johnny Cage and Sub-Zero arranged the Lin Kuei training exercise`.

Expected:
- all Reboot/canon;
- Cassie's leadership uses Story Mode + MKX bio support;
- Grandmaster/training facts cite Story Mode;
- roles remain scoped Facts instead of Character metadata.

### 9. Negative scope check

Do not expect:
- Li Mei's refugee warning;
- Mileena possessing Shinnok's amulet;
- Kotal Kahn / Mileena civil-war Events;
- the squad's Outworld diplomatic mission;
- schema/UI changes.

### 10. Mobile/regression check

At narrow/mobile width:
- navigate orders 480→510;
- inspect the 490→500→510 causal chain;
- open all four new Characters, Special Forces, and the three Facts;
- confirm earlier Netherrealm restoration records remain readable.

## Evidence/model checklist

- [ ] Twenty-years-later jump is chronology, not an invented restoration→briefing cause.
- [ ] Briefing → exercise → assessment is directly supported.
- [ ] The Lin Kuei encounter is preserved as a training exercise, not a real faction war.
- [ ] Cassie's squad leadership is a sourced Fact.
- [ ] Kuai Liang's Grandmaster role is a sourced Fact.
- [ ] Special Forces is continuity-scoped only to currently modeled evidence.
- [ ] New-generation Characters are stable people, not role/version duplicates.
- [ ] Outworld civil-war material remains deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
