# Phase 6 — MKX Quan Chi confrontation and revenant restoration manual verification

Use this checklist to verify the early post-Shinnok Mortal Kombat X slice covering Quan Chi's Netherrealm confrontation, the attempted Johnny Cage revenant conversion, Raiden's counterspell, Sonya's enabling defeat of Quan Chi, and the restoration of Jax, Hanzo Hasashi/Scorpion, and Kuai Liang/Sub-Zero.

## Scope boundary

The broad fortress confrontation is chronology/context only. The direct causal component begins with Quan Chi's attempted Johnny revenant conversion:

`Johnny conversion attempt → Raiden counterspell / Sonya defeats Quan Chi → Raiden completes restoration`.

This slice does not say that every revenant was restored. Liu Kang, Kitana, Kung Lao, Sindel, and others remain outside this restoration occurrence.

## Maintainer test cases

### 1. Verify chronology

Open `/causality` → **Reboot Timeline** and scroll past Shinnok's imprisonment.

Expected order:
- `Raiden imprisons Shinnok in his own amulet` — 440;
- `Earthrealm warriors confront Quan Chi in the Netherrealm` — 450;
- `Quan Chi attempts to turn Johnny Cage into a revenant` — 460;
- `Raiden counters Quan Chi's spell while Sonya defeats him` — 470;
- `Raiden restores Jax, Scorpion, and Sub-Zero` — 480.

Expected:
- pursuit/confrontation follows Shinnok's imprisonment;
- no `Shinnok imprisonment → Quan Chi confrontation` causal edge is required merely from story sequence.

### 2. Verify chronology versus causality

Select `Quan Chi attempts to turn Johnny Cage into a revenant`.

Expected causal chain:
`Johnny conversion attempt → counterspell/Sonya victory → restoration`.

Must not appear:
- broad confrontation → conversion attempt as an umbrella causal edge;
- Shinnok imprisonment → confrontation as an ordinary causal edge.

### 3. Inspect the confrontation Event

Expected:
- Reboot / Netherrealm;
- Johnny, Sonya, Raiden, Quan Chi, Jax, Hanzo, and Kuai Liang represented;
- Jax/Scorpion/Sub-Zero are described as remaining under Quan Chi's control;
- the Event is context, not a causal parent of every specific action inside the fortress.

### 4. Inspect the Johnny conversion attempt

Expected:
- Quan Chi, Johnny, Raiden, Sonya;
- Netherrealm;
- description states Johnny is mortally wounded and Quan Chi begins revenant creation;
- Johnny is **not** recorded as actually becoming a revenant;
- consequence points to Raiden's counterspell/Sonya fight.

### 5. Inspect the counterspell/Sonya Event

Expected:
- Raiden reverses Quan Chi's spell;
- Quan Chi interferes;
- Sonya defeats Quan Chi;
- Sonya's combat role is enabling, while Raiden remains the restoration actor;
- consequence points to the completed restoration Event.

### 6. Inspect the restoration Event

Expected:
- participants: Raiden, Johnny, Jax, Hanzo, Kuai Liang;
- Netherrealm;
- Johnny is saved from the incomplete conversion;
- Jax, Hanzo/Scorpion, and Kuai Liang/Sub-Zero are restored to living human form/free will;
- no claim that all revenants are restored.

### 7. Inspect new Facts

In **Explorer → Reboot Timeline → Facts**, verify:
- `Quan Chi attempted to turn Johnny Cage into a revenant`;
- `Sonya defeated Quan Chi during Raiden's reversal spell`;
- `Jax was restored by Raiden`;
- `Hanzo Hasashi was restored by Raiden`;
- `Kuai Liang was restored by Raiden`.

Expected:
- all Reboot/canon;
- all cite `Mortal Kombat X — Story Mode`;
- Johnny's record is attempt-only;
- restoration actor is Raiden.

### 8. Regression against Jax biography-backed states

Open Jax's existing:
- `became_revenant`;
- `freed_from_influence_of`;
- `returned_to_life`;
- new `restored_by = Raiden`.

Expected:
- they coexist as compatible time-state / actor-attribution evidence;
- none is marked retconned;
- the Story Mode actor attribution supplements the biography-backed state progression.

### 9. Hanzo identity guardrail

Open Hanzo Hasashi.

Expected:
- one stable Character;
- prior Scorpion/specter resurrection history remains intact;
- no new generic `became_revenant` Fact is added merely to make the restoration symmetric with other characters;
- later restoration is represented narrowly as `restored_by = Raiden`.

### 10. Kuai Liang guardrail

Open Kuai Liang.

Expected:
- one stable Character across continuities;
- restoration Fact does not invent the exact off-screen mechanism that transformed the Cyber Sub-Zero state into the later revenant body;
- no duplicate "human Sub-Zero" Character is created.

### 11. Negative scope check

Do not expect:
- restoration of Liu Kang, Kitana, Kung Lao, Sindel, or every revenant;
- a Johnny `became_revenant` Fact;
- a broad all-revenants restoration Event;
- later 25-year MKX storyline;
- schema/UI changes.

### 12. Mobile/regression check

At narrow/mobile width:
- navigate orders 440→480;
- inspect the 460→470→480 causal component;
- open Johnny/Sonya/Jax/Hanzo/Kuai Facts and dossiers;
- confirm source/canon metadata remains readable.

## Evidence/model checklist

- [ ] Fortress confrontation remains chronology/context rather than umbrella causality.
- [ ] Johnny conversion is represented as an attempt, not completed state.
- [ ] Attempt → counterspell/Sonya victory → restoration is mirrored.
- [ ] Sonya's enabling role remains distinct from Raiden's restoration actor role.
- [ ] Jax, Hanzo, and Kuai Liang restoration is source-supported.
- [ ] No all-revenants generalization is introduced.
- [ ] Hanzo's prior specter history is not flattened into a generic revenant-origin claim.
- [ ] Kuai Liang's off-screen body-state mechanism is not invented.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
