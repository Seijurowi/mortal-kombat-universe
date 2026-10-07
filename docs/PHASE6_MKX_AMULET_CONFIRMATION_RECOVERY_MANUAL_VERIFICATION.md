# Phase 6 — MKX amulet confirmation and recovery manual verification

Use this checklist to verify the Outworld sequence from Sonya's Mileena-location intelligence through Kotal's operation, Cassie/D'Vorah's infiltration, and the first direct confirmation/recovery of Shinnok's amulet.

## Scope boundary

This slice covers:
- Sonya relaying Mileena's location to Cassie;
- Kotal launching the operation against Mileena's camp;
- Cassie and D'Vorah infiltrating the rebel camp;
- the destructive talisman being directly identified as Shinnok's amulet;
- D'Vorah recovering the amulet.

It stops before:
- Mileena's capture;
- Mileena's execution;
- Kotal holding the Earthrealmers;
- D'Vorah betraying Kotal/Earthrealm;
- D'Vorah stealing/carrying the amulet to Quan Chi.

The direct causal component is:

`Sonya location intel → Kotal operation → Cassie/D'Vorah infiltration → amulet recovery`.

Kotal's earlier cooperation agreement is chronology/context for Sonya's independent location call, not its causal parent.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `Kotal Kahn agrees to cooperate with Cassie's squad` — 560;
- `Sonya relays Mileena's location to Cassie's team` — 570;
- `Kotal Kahn launches an operation against Mileena's camp` — 580;
- `Cassie and D'Vorah infiltrate Mileena's camp` — 590;
- `D'Vorah recovers Shinnok's amulet from Mileena's camp` — 600.

Expected:
- no `cooperation → Sonya location intel` causal edge;
- orders 570→600 form a separate direct causal component.

### 2. Verify causal chain

Select the Sonya location-intel Event.

Expected:
`location intel → Kotal operation → infiltration → amulet recovery`.

This chain is directly supported because the location report enables the operation, the operation includes the covert infiltration, and the infiltration reaches the amulet.

### 3. Inspect Sonya's location-intel Event

Expected:
- Reboot;
- Sonya + Cassie;
- no single Realm is asserted for the cross-realm communication;
- description identifies the information as coming from Sonya's separate Kano investigation;
- the earlier Kotal cooperation remains chronology/context only.

### 4. Inspect Kotal's operation

Expected:
- Reboot / Outworld;
- Kotal, Cassie, D'Vorah;
- Kotal acts on the location intelligence;
- D'Vorah proposes covert amulet recovery;
- Cassie joins the infiltration;
- the broad civil war is not encoded as a giant causal parent.

### 5. Inspect the infiltration

Expected:
- Cassie + D'Vorah;
- Outworld;
- description says the talisman is directly identified as Shinnok's amulet in this sequence;
- consequence points to amulet recovery.

### 6. Inspect the recovery Event

Expected:
- D'Vorah + Cassie;
- Outworld;
- D'Vorah performs the physical recovery;
- the Event explicitly stops before Mileena capture/execution or D'Vorah betrayal.

### 7. Inspect D'Vorah

Expected:
- stable Reboot Character;
- Outworld/Kytinn identity;
- no timeless trait saying she is a traitor or Quan Chi agent yet in this slice.

### 8. Inspect the confirmed amulet Fact

Search `Mileena possessed Shinnok's amulet`.

Expected:
- subject: Mileena;
- predicate: `possessed`;
- value: Shinnok's amulet;
- Reboot/canon/MKX Story Mode;
- notes explicitly say this is later confirmation that supplements the earlier report/suspicion records.

### 9. Regression against earlier uncertainty

Re-open:
- `Li Mei reported Mileena wielding a destructive talisman`;
- `Raiden suspected Mileena's talisman was Shinnok's amulet`;
- new confirmed possession Fact.

Expected:
- all three coexist;
- earlier report/suspicion is not marked wrong merely because later evidence confirms the identity;
- the reader can see evidence becoming stronger over time.

### 10. Inspect D'Vorah recovery Fact

Search `D'Vorah recovered Shinnok's amulet from Mileena's camp`.

Expected:
- Reboot/canon/MKX Story Mode;
- recovery actor is D'Vorah;
- no later theft/betrayal is folded into this Fact.

### 11. Negative scope check

Do not expect:
- Mileena capture/death;
- Kotal taking Cassie's squad hostage;
- D'Vorah's double-agent reveal;
- D'Vorah stealing the amulet for Quan Chi;
- a first-class Artifact entity;
- schema/UI changes.

### 12. Mobile/regression check

At narrow/mobile width:
- navigate 560→600;
- inspect the 570→600 causal chain;
- open D'Vorah and the three new Facts;
- compare the earlier suspicion/report records to the new confirmation.

## Evidence/model checklist

- [ ] Cooperation → location intel remains chronology-only.
- [ ] Location intel → operation → infiltration → recovery is directly supported.
- [ ] Cross-realm communication does not invent a single Realm location.
- [ ] Earlier report/suspicion remains historically correct after later confirmation.
- [ ] Confirmed possession is a new later Fact rather than a rewrite of earlier weaker evidence.
- [ ] D'Vorah recovery is separate from her later betrayal/theft.
- [ ] No Artifact schema is introduced.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
