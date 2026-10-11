# Phase 6 — MKX D'Vorah betrayal and amulet theft manual verification

Use this checklist to verify the narrow betrayal slice after Kotal Kahn retains Shinnok's amulet and detains Cassie's squad.

## Scope boundary

This slice covers only D'Vorah's branch:

`secret Quan Chi contact → amulet theft → escape from Outworld with the amulet for Quan Chi`.

The prior Kotal detention is chronology context only. D'Vorah's secret allegiance predates that security decision and must not be represented as caused by it.

This slice deliberately stops before:
- Takeda frees Cassie's squad;
- the squad discovers D'Vorah's betrayal;
- Outworld retainers misattribute the escape/theft to Earthrealm;
- Kotal plans retaliation;
- D'Vorah arrives at Quan Chi or physically hands him the amulet;
- Quan Chi's capture, Scorpion's intervention, or Shinnok's release.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `Kotal Kahn keeps the amulet and detains Cassie's squad` — 640;
- `D'Vorah reveals her secret loyalty to Quan Chi` — 650;
- `D'Vorah kills the guards and steals Shinnok's amulet` — 660;
- `D'Vorah escapes Outworld with Shinnok's amulet for Quan Chi` — 670.

Expected:
- 640→650 is chronology-only;
- 650→660→670 is one direct causal component.

### 2. Verify chronology versus causality

Select D'Vorah's secret-contact Event.

Expected:
- no **Why?** edge from Kotal's detention;
- **What next?** points to the theft;
- the theft then points to the escape.

This preserves pre-existing double-agent allegiance rather than implying Kotal's decision turned D'Vorah into a traitor.

### 3. Inspect the secret-contact Event

Expected:
- Reboot / Outworld;
- D'Vorah + Quan Chi;
- D'Vorah's hidden allegiance is revealed;
- Quan Chi directs her to obtain/bring the amulet;
- no claim that physical delivery already occurred.

### 4. Inspect the theft Event

Expected:
- D'Vorah as the only required participant;
- Outworld;
- guards are described but not introduced as fabricated stable Characters;
- theft is directly caused by the Quan Chi contact/order;
- description distinguishes theft from the earlier authorized recovery.

### 5. Inspect the escape Event

Expected:
- D'Vorah / Outworld;
- D'Vorah leaves carrying the amulet for Quan Chi;
- no Quan Chi delivery Event yet;
- no Cassie-team discovery Event yet.

### 6. Inspect D'Vorah's allegiance Fact

Search `D'Vorah secretly served Quan Chi`.

Expected:
- subject: D'Vorah;
- object: Quan Chi;
- Reboot/canon/MKX Story Mode;
- changing allegiance remains a Fact rather than timeless Character metadata.

### 7. Inspect Quan Chi's order Fact

Search `Quan Chi ordered D'Vorah to bring him Shinnok's amulet`.

Expected:
- subject: Quan Chi;
- object: D'Vorah;
- notes identify the amulet as the action target;
- no first-class Artifact entity is required.

### 8. Compare recovery and theft

Open:
- `D'Vorah recovered Shinnok's amulet from Mileena's camp`;
- `D'Vorah stole Shinnok's amulet from Kotal's custody`.

Expected:
- both remain true;
- recovery was authorized during Kotal's operation;
- theft is the later betrayal after Kotal retained custody;
- the two claims are ordinary state/history progression, not contradiction/retcon.

### 9. Inspect the escape-for-Quan-Chi Fact

Expected:
- subject: D'Vorah;
- object: Quan Chi;
- Fact records intended recipient/departure;
- no `delivered_to = Quan Chi` assertion yet.

### 10. Negative scope check

Do not expect:
- Takeda freeing the squad;
- Cassie's team discovering the theft;
- Kotal's mistaken Earthrealm/Raiden inference;
- D'Vorah arriving at Quan Chi;
- Quan Chi receiving the amulet;
- Shinnok release;
- Artifact/schema/UI changes.

### 11. Mobile/regression check

At narrow/mobile width:
- navigate 640→670;
- inspect 650→660→670 causal flow;
- compare D'Vorah's earlier recovery Fact with the later theft Fact;
- confirm prior Mileena/Kotal records remain intact.

## Evidence/model checklist

- [ ] Kotal detention → D'Vorah secret contact remains chronology-only.
- [ ] Secret contact/order → theft → escape is directly supported.
- [ ] Recovery and later theft remain distinct historical occurrences.
- [ ] D'Vorah's allegiance is a scoped Fact, not timeless Character metadata.
- [ ] Escape-for-Quan-Chi does not overstate physical delivery.
- [ ] No incidental guard Characters are manufactured.
- [ ] No Artifact schema is introduced.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
