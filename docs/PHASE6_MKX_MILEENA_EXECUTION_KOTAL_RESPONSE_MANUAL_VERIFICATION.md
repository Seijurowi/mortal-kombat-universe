# Phase 6 — MKX Mileena execution and Kotal response manual verification

Use this checklist to verify the Outworld sequence covering Mileena's capture, Kotal's execution order, D'Vorah's direct killing of Mileena, and Kotal's separate decision to retain Shinnok's amulet and detain Cassie's squad.

## Scope boundary

This slice contains two related but distinct causal branches:

1. `D'Vorah captures Mileena → Kotal orders execution → D'Vorah executes Mileena`.
2. `D'Vorah recovers Shinnok's amulet → Kotal retains amulet / detains Cassie's squad`.

The second branch is **not** caused by Mileena's execution. Kotal's detention decision is tied to his distrust of Earthrealm's ability to safeguard the recovered amulet.

D'Vorah's later double-agent reveal, theft of the amulet, and delivery toward Quan Chi remain outside this slice.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `D'Vorah recovers Shinnok's amulet from Mileena's camp` — 600;
- `D'Vorah defeats and captures Mileena` — 610;
- `Kotal Kahn orders Mileena's execution` — 620;
- `D'Vorah executes Mileena` — 630;
- `Kotal Kahn keeps the amulet and detains Cassie's squad` — 640.

Expected:
- capture/execution and amulet-security response are visible as separate causal branches;
- chronology does not imply execution caused detention.

### 2. Verify the Mileena execution chain

Select `D'Vorah defeats and captures Mileena`.

Expected:
`capture → Kotal execution order → D'Vorah execution`.

Expected actor semantics:
- D'Vorah = captor and direct killer;
- Kotal = ordering authority;
- no `killed_by = Kotal Kahn` Fact.

### 3. Inspect the capture Event

Expected:
- Reboot / Outworld;
- D'Vorah, Mileena, Cassie;
- D'Vorah defeats and captures Mileena;
- no false claim that amulet recovery caused the capture.

### 4. Inspect Kotal's execution-order Event

Expected:
- Kotal, Mileena, D'Vorah;
- Kotal orders the execution;
- consequence points to D'Vorah's execution;
- the order remains separate from the killing itself.

### 5. Inspect Mileena's execution Event

Expected:
- D'Vorah, Mileena, Kotal, Cassie;
- D'Vorah performs the killing;
- Kotal's prior order remains visible as the cause;
- no causal edge from Mileena's death to the hostage/detention Event.

### 6. Inspect the amulet-retention/detention branch

Select `D'Vorah recovers Shinnok's amulet from Mileena's camp`.

Expected:
- consequence points to `Kotal Kahn keeps the amulet and detains Cassie's squad`;
- the response description says Kotal distrusts Earthrealm's ability to safeguard the amulet;
- Cassie/Jacqui/Takeda/Kung Jin are detained as leverage involving Raiden;
- Mileena's execution is not the causal parent.

### 7. Inspect Mileena death Facts

Verify:
- `D'Vorah captured Mileena`;
- `Kotal Kahn ordered Mileena's execution`;
- `Mileena was killed by D'Vorah`.

Expected:
- all Reboot/canon/MKX Story Mode;
- exact actor roles remain distinct;
- direct killer attribution is D'Vorah only.

### 8. Inspect Kotal response Facts

Verify:
- `Kotal Kahn decided to keep Shinnok's amulet in Outworld`;
- `Kotal Kahn detained Cassie's squad as leverage against Raiden`.

Expected:
- Reboot/canon/MKX Story Mode;
- retention is a decision state, not timeless Character metadata;
- team detention uses Cassie as representative object but notes the full team.

### 9. Regression against earlier cooperation

Re-open `Kotal Kahn agrees to cooperate with Cassie's squad`.

Expected:
- earlier cooperation remains historically true;
- later detention is a changed decision/state under new circumstances, not automatically a retcon;
- no timeless `ally_of` relation exists that would falsely imply permanent cooperation.

### 10. Negative scope check

Do not expect:
- D'Vorah double-agent reveal;
- D'Vorah stealing the amulet;
- D'Vorah delivering/traveling toward Quan Chi;
- Takeda freeing the squad;
- Kotal planning an Earthrealm invasion;
- Quan Chi capture or Shinnok release;
- schema/UI changes.

### 11. Mobile/regression check

At narrow/mobile width:
- navigate 600→640;
- inspect both causal branches;
- open Mileena/D'Vorah/Kotal dossiers and the five new Facts;
- confirm previous amulet confirmation records remain intact.

## Evidence/model checklist

- [ ] Capture → order → execution is directly supported.
- [ ] D'Vorah is the direct killer; Kotal is the ordering authority.
- [ ] Recovered amulet → Kotal retention/detention is a separate causal branch.
- [ ] Mileena's execution does not falsely cause hostage-taking.
- [ ] Earlier Kotal cooperation remains historical rather than retconned.
- [ ] D'Vorah betrayal/theft remains deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
