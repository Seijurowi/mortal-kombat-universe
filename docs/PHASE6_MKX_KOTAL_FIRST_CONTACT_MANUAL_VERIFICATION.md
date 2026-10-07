# Phase 6 — MKX Kotal first contact and cooperation manual verification

Use this checklist to verify Cassie's squad's first diplomatic contact with Kotal Kahn in Outworld, Kung Jin's right-of-defense duel, and the resulting cooperation arrangement.

## Scope boundary

This slice covers:
- Kotal Kahn's first direct confrontation with Cassie's squad;
- the Mileena/Kotal civil-war context as sourced Facts rather than one umbrella Event;
- Kung Jin invoking Outworld's right of defense and defeating Kotal;
- Kotal accepting cooperation after the duel.

It stops before the squad and Kotal's forces actively pursue Mileena, before direct amulet confirmation/recovery, and before Mileena's capture or execution.

The direct causal component is:

`Kotal confrontation/accusation → right-of-defense duel → cooperation agreement`.

The prior Earthrealm deployment is chronology context only.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `Sonya sends Cassie's squad to Outworld` — 530;
- `Kotal Kahn confronts Cassie's squad in Outworld` — 540;
- `Kung Jin invokes the right of defense against Kotal Kahn` — 550;
- `Kotal Kahn agrees to cooperate with Cassie's squad` — 560.

Expected:
- the squad is now visibly in Outworld;
- no `deployment → Kotal accusation` causal edge appears merely from sequence/travel.

### 2. Verify direct causality

Select Kotal's confrontation.

Expected:
`Kotal confrontation → right-of-defense duel → cooperation`.

This is directly supported:
- Kotal's accusation/death sentence prompts Kung Jin's legal challenge;
- Kung Jin's victory voids the charges and creates the leverage for cooperation.

### 3. Inspect Kotal's confrontation

Expected:
- Reboot / Outworld;
- Kotal + Cassie/Jacqui/Takeda/Kung Jin;
- Kotal suspects the team may be allied with Mileena;
- that suspicion remains Kotal's accusation/context, not a canon Fact that Earthrealm is actually allied with Mileena;
- the Event ends with Kung Jin invoking right of defense.

### 4. Inspect the duel Event

Expected:
- Kung Jin and Kotal are the central actors;
- Outworld scope;
- Kung Jin invokes Outworld law;
- Kung Jin defeats Kotal;
- Kotal voids the charges;
- the broad civil war is not a causal parent.

### 5. Inspect the cooperation Event

Expected:
- Kotal + the Earthrealm squad;
- Kung Jin claims Kotal's service instead of his life;
- cooperation is framed conditionally around Mileena / the missing amulet;
- the Event does not confirm that Mileena's talisman has already been verified as Shinnok's amulet.

### 6. Inspect Kotal Kahn

Expected:
- stable Reboot Character;
- Outworld;
- Osh-Tekk / emperor identity;
- changing office remains in a scoped Fact, not timeless metadata.

### 7. Inspect political-context Facts

Verify:
- `Kotal Kahn ruled Outworld after overthrowing Mileena`;
- `Mileena led a rebellion against Kotal Kahn`.

Expected:
- Reboot/canon;
- Kotal ruler Fact cites Story Mode + MKX bios;
- Mileena rebellion Fact cites MKX bios;
- civil war is context Fact evidence, not one giant Event.

### 8. Inspect duel/cooperation Facts

Verify:
- `Kung Jin defeated Kotal Kahn in a right-of-defense duel`;
- `Kotal Kahn agreed to cooperate with Cassie's squad against Mileena`.

Expected:
- Reboot/canon/MKX Story Mode;
- the duel Fact carries exact victor attribution;
- cooperation remains a limited arrangement, not a permanent alliance claim.

### 9. Regression against amulet uncertainty

Re-open:
- Li Mei's warning;
- Raiden's suspicion Fact;
- Kotal cooperation.

Expected:
- no new confirmed `Mileena possesses Shinnok's amulet` Fact yet;
- Kotal reacts as though the possibility is alarming, but the repository still preserves verification uncertainty at this point.

### 10. Negative scope check

Do not expect:
- Mileena hideout/pursuit;
- confirmed amulet identity/recovery;
- Mileena capture or execution;
- D'Vorah betrayal;
- Quan Chi/Shinnok-release material;
- schema/UI changes.

### 11. Mobile/regression check

At narrow/mobile width:
- navigate 530→560;
- inspect the 540→550→560 causal chain;
- open Kotal and the four new Facts;
- confirm previous warning/deployment records remain intact.

## Evidence/model checklist

- [ ] Deployment → Kotal confrontation remains chronology-only.
- [ ] Kotal accusation → duel → cooperation is directly supported.
- [ ] Kotal's Earthrealm/Mileena suspicion is not promoted into objective truth.
- [ ] Civil-war context remains sourced Facts rather than an umbrella Event.
- [ ] Kung Jin's duel victory is exact actor attribution.
- [ ] Cooperation is limited/scoped, not a timeless alliance.
- [ ] Shinnok-amulet identity remains unconfirmed at this point.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
