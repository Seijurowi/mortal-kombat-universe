# Phase 6 — MKX Li Mei warning and Outworld deployment manual verification

Use this checklist to verify the Mortal Kombat X bridge from Cassie's Lin Kuei teamwork exercise into the Outworld storyline: Li Mei warns Earthrealm about Mileena's destructive talisman, Raiden treats Shinnok's amulet as a suspicion requiring verification, and Sonya deploys Cassie's squad to Outworld to confirm the report with Kotal Kahn.

## Scope boundary

This slice deliberately stops at the deployment decision.

It does **not** yet model:
- Cassie's squad arriving in Outworld;
- Kotal Kahn's rule or Mileena's competing claim;
- the Outworld civil-war confrontation;
- trial-by-combat / Kung Jin's challenge;
- confirmation that the talisman is Shinnok's amulet;
- amulet recovery;
- Mileena's capture or death.

The directly supported causal component is:

`Li Mei warning → Sonya's Outworld deployment`.

Raiden's amulet identification remains an explicit suspicion in this scene.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `Sub-Zero assesses Cassie's squad` — 510;
- `Li Mei warns Earthrealm about Mileena's destructive talisman` — 520;
- `Sonya sends Cassie's squad to Outworld` — 530.

Expected:
- the refugee-camp warning follows the Lin Kuei exercise in chronology;
- no `Sub-Zero assessment → Li Mei warning` causal edge appears merely because it is the next story segment.

### 2. Verify warning → deployment causality

Select `Li Mei warns Earthrealm about Mileena's destructive talisman`.

Expected:
- **What next?** points to Sonya's Outworld deployment;
- the deployment dossier points back to the warning as **Why?**.

This edge is appropriate because Sonya explicitly says Li Mei's report must be confirmed and sends the squad to Outworld for that purpose.

### 3. Inspect the Li Mei warning Event

Expected:
- Reboot / Earthrealm;
- participants include Li Mei, Raiden, Sonya, Johnny, Cassie, and Kung Jin;
- Li Mei reports Mileena's destructive gold/crimson talisman;
- Raiden treats the object's identity as something he suspects and must verify;
- no completed `Mileena possesses Shinnok's amulet` assertion appears in the Event.

### 4. Inspect Sonya's deployment Event

Expected:
- Reboot / Earthrealm scene scope;
- Sonya + Cassie/Jacqui/Takeda/Kung Jin;
- description says the purpose is to confirm Li Mei's report with Kotal Kahn;
- Outworld is the destination/action object in sourced Fact semantics, not the Event's scene location;
- later contact/combat/amulet outcome remains deferred.

### 5. Inspect Li Mei and Mileena

Open both stable Characters.

Expected:
- both are currently Reboot-scoped;
- both are associated with Outworld;
- Li Mei is represented as an Outworld refugee representative;
- Mileena is represented broadly as an Outworld claimant/rebel leader;
- no timeless possession of the amulet is stored in Mileena's Character metadata.

### 6. Inspect the reported-talisman Fact

Search `Li Mei reported Mileena wielding a destructive talisman`.

Expected:
- subject: Mileena;
- predicate is explicitly report-qualified;
- Reboot/canon;
- source: MKX Story Mode;
- notes say this is Li Mei's report and does not yet verify the talisman as Shinnok's amulet.

### 7. Inspect Raiden's suspicion Fact

Search `Raiden suspected Mileena's talisman was Shinnok's amulet`.

Expected:
- subject: Raiden;
- value: Shinnok's amulet;
- predicate remains `suspected...`;
- notes preserve Sonya's objection and Raiden's need to verify;
- no stronger confirmed-identity Fact exists in this slice.

### 8. Inspect the deployment Fact

Search `Sonya deployed Cassie's squad to Outworld to confirm Li Mei's report`.

Expected:
- subject: Sonya;
- object: Outworld;
- Reboot/canon/source Story Mode;
- the Fact records the action-object destination while the Event remains Earthrealm-scoped.

### 9. Negative scope check

Do not expect:
- Kotal Kahn Character/Facts yet;
- Outworld civil-war combat Events;
- an amulet Artifact entity;
- confirmed Mileena possession of Shinnok's amulet;
- Mileena capture/death;
- D'Vorah betrayal;
- schema/UI changes.

### 10. Mobile/regression check

At narrow/mobile width:
- navigate orders 510→530;
- inspect warning→deployment causality;
- open Li Mei, Mileena, and all three Facts;
- confirm previous new-generation team records remain intact.

## Evidence/model checklist

- [ ] Lin Kuei assessment → Li Mei warning remains chronology-only.
- [ ] Li Mei warning → Sonya deployment is directly supported.
- [ ] Raiden's identification remains suspicion, not confirmation.
- [ ] Mileena's destructive-talisman possession remains report-qualified in this slice.
- [ ] Outworld is a Fact action object for deployment, while Event scene scope remains Earthrealm.
- [ ] No premature Artifact entity is introduced.
- [ ] Kotal/civil-war/contact outcomes remain deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
