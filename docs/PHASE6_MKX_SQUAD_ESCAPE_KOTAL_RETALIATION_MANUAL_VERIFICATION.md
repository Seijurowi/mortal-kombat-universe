# Phase 6 — MKX squad escape and Kotal retaliation manual verification

Use this checklist to verify the aftermath of D'Vorah's amulet theft: Takeda frees Cassie's squad, the freed team clashes with Kotal's retainers over the missing amulet, and Kotal responds to a mistaken Raiden/D'Vorah theory by preparing retaliation against Earthrealm.

## Scope boundary

This slice contains a deliberate multi-parent causal node:

`Kotal detention → Takeda frees squad`

and

`Takeda frees squad + D'Vorah steals amulet → Outworld confrontation/report → Kotal retaliation plan`.

D'Vorah's actual secret allegiance to Quan Chi remains objective canon from the prior slice. Kotal's contrary belief that she works for Raiden is represented only as Kotal's belief.

The slice stops before:
- a completed Kotal invasion of Earthrealm;
- Cassie's team reaching Earthrealm and briefing Special Forces;
- Jax/Kenshi's Netherrealm assault;
- Quan Chi's capture;
- Scorpion/Hanzo's intervention;
- D'Vorah reaching Quan Chi or Shinnok's release.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline**.

Expected order:
- `D'Vorah escapes Outworld with Shinnok's amulet for Quan Chi` — 670;
- `Takeda frees Cassie's squad from Kotal's custody` — 680;
- `Cassie's squad clashes with Kotal's retainers over the missing amulet` — 690;
- `Kotal Kahn prepares retaliation against Earthrealm` — 700.

Expected:
- D'Vorah's escape and the squad's escape are parallel branches in chronology;
- no `D'Vorah escape → Takeda escape` causal edge exists.

### 2. Verify detention → squad escape

Select `Takeda frees Cassie's squad from Kotal's custody`.

Expected:
- **Why?** points to Kotal's retention/detention Event at 640;
- Takeda is the freeing actor;
- Cassie/Jacqui/Kung Jin are the freed teammates.

### 3. Verify the multi-parent confrontation

Select `Cassie's squad clashes with Kotal's retainers over the missing amulet`.

Expected two causal parents:
- `Takeda frees Cassie's squad`;
- `D'Vorah kills the guards and steals Shinnok's amulet`.

Expected:
- both parents are required story context for the encounter;
- the parents are not connected to each other by a fabricated causal edge.

### 4. Inspect the confrontation participants

Expected:
- Cassie, Jacqui, Takeda, Kung Jin;
- Erron Black, Reptile, Ermac;
- Outworld scope;
- the description distinguishes the objective theft from the retainers' mistaken theory about D'Vorah/Raiden.

### 5. Inspect Kotal's retaliation Event

Expected:
- Kotal / Outworld;
- causal parent is the confrontation/report Event;
- Kotal accepts the mistaken D'Vorah/Raiden theory;
- he prepares retaliation/invasion against Earthrealm;
- the Event does **not** say D'Vorah objectively serves Raiden;
- preparation is not a completed invasion occurrence.

### 6. Inspect Reptile, Ermac, and Erron Black

Expected:
- Reptile remains one stable Character and now spans Original + Reboot;
- Ermac and Erron Black are stable Reboot Characters;
- all are associated with Outworld for the currently modeled evidence;
- no unnecessary version/mantle duplicates are created.

### 7. Inspect Takeda's Fact

Search `Takeda freed Cassie's squad from Kotal's custody`.

Expected:
- Reboot/canon/MKX Story Mode;
- Cassie is representative object for the full team;
- notes identify Takeda's telepathic escape action.

### 8. Inspect the squad discovery Fact

Search `Cassie's squad learned D'Vorah had stolen Shinnok's amulet`.

Expected:
- Reboot/canon/MKX Story Mode;
- Cassie is representative subject for the squad;
- the Fact records knowledge discovery, not the theft itself (already represented separately).

### 9. Compare objective allegiance and mistaken belief

Open:
- `D'Vorah secretly served Quan Chi`;
- `Kotal Kahn believed D'Vorah was working for Raiden`.

Expected:
- both coexist;
- objective allegiance remains Quan Chi;
- Kotal's contrary claim is explicitly belief-qualified;
- no contradiction/retcon relation is needed between objective truth and a character's mistaken belief.

### 10. Inspect Kotal's retaliation-plan Fact

Search `Kotal Kahn prepared to invade Earthrealm to recover the amulet`.

Expected:
- subject: Kotal;
- object: Earthrealm;
- Reboot/canon/MKX Story Mode;
- predicate is preparation/plan, not completed invasion.

### 11. Negative scope check

Do not expect:
- completed Kotal invasion;
- Jax/Kenshi Netherrealm assault;
- Quan Chi capture;
- Scorpion/Hanzo intervention;
- D'Vorah delivery to Quan Chi;
- Shinnok release;
- schema/UI changes.

### 12. Mobile/regression check

At narrow/mobile width:
- navigate 640→700;
- inspect the two-parent 690 node;
- compare D'Vorah objective allegiance with Kotal's belief Fact;
- confirm prior theft/escape records remain intact.

## Evidence/model checklist

- [ ] Kotal detention → Takeda escape is directly supported.
- [ ] Takeda escape + D'Vorah theft → confrontation is a valid multi-parent node.
- [ ] No causal edge is invented between the two parent branches.
- [ ] Kotal's D'Vorah/Raiden theory stays belief-qualified.
- [ ] Kotal's Earthrealm action stays a plan/preparation, not completed invasion.
- [ ] Reptile stable identity is expanded rather than duplicated.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
