# Phase 6 — MKX Jax revenant/restoration manual verification

Use this checklist to verify Jax's Reboot-continuity state sequence from later-primary Mortal Kombat X biographies: death → Quan Chi-controlled undead/revenant state → freed from Quan Chi → returned to life.

## Scope boundary

This slice adds state-transition Facts only. The MKX Jax biography gives a clear relative sequence but does not provide one precise standalone restoration scene or an exact Event location/order, so no synthetic Event or causal edge is added.

The broader Netherrealm/Shinnok invasion chronology remains the next event-focused slice.

## Maintainer test cases

### 1. Inspect Jax's state Facts

In **Explorer → Reboot Timeline → Facts**, search for Jax.

Expected:
- `Jax became a revenant under Quan Chi`;
- `Jax was freed from Quan Chi's influence`;
- `Jax returned to life after his revenant state`.

All three should be Reboot `canon` and cite `Mortal Kombat X — Character Biographies`.

### 2. Verify state progression rather than contradiction

Inspect the three Facts together.

Expected:
- revenant state remains historically true;
- freedom from Quan Chi happens later;
- return to life happens later;
- the later living state does not mark the earlier revenant state as `retconned` or contradictory.

### 3. Check Jax's stable identity

Open `Jax Briggs`.

Expected:
- still one stable Character;
- Reboot timeline;
- Earthrealm identity remains unchanged;
- revenant/restored states live in Facts, not timeless Character metadata.

### 4. Check the source wording

Open `Mortal Kombat X — Character Biographies`.

Expected:
- Source notes now include Jax alongside Liu Kang, Kitana, and Kung Lao;
- Jax evidence is described narrowly: Quan Chi confiscated his soul, recreated him as an undead/revenant warrior, and he was later freed and returned to life;
- Mortal Kombat Warehouse remains described as preservation/access infrastructure.

### 5. Check chronology/causality

Open `/causality` → Reboot.

Expected:
- no new Jax restoration Event appears;
- no synthetic causal edge is created from Jax's MK9 death to restoration;
- MK9 chronology still ends at Shao Kahn's final defeat until the later MKX event-focused slice is added.

### 6. Regression against MK9 casualty evidence

Open `Sindel attacks Earthrealm's defenders` and Jax's `killed_by = Sindel` Fact.

Expected:
- the MK9 death attribution remains unchanged;
- later revenant/restoration Facts supplement rather than overwrite it;
- death → revenant → restored living state is readable as ordinary time-state change.

### 7. Negative scope check

Do not expect in this slice:
- a precise restoration scene;
- a `cleansed_by = Raiden` Fact derived only from concept-art commentary;
- Sub-Zero/Scorpion restoration coverage;
- Shinnok's Netherrealm invasion Events;
- 25-year-later MKX story Events;
- schema or UI changes.

### 8. Mobile/regression check

At narrow/mobile width:
- search/open Jax and the three state Facts;
- open the MKX source;
- confirm source/canon metadata remains readable;
- confirm Original/New Era data remains unchanged.

## Evidence/model checklist

- [ ] Jax revenant state is explicit Reboot canon evidence.
- [ ] Jax freedom from Quan Chi is explicit Reboot canon evidence.
- [ ] Jax return to life is explicit Reboot canon evidence.
- [ ] State progression is not mislabeled as retcon/contradiction.
- [ ] State changes remain Facts rather than timeless Character metadata.
- [ ] No exact restoration Event/location/order is invented.
- [ ] No unsupported Raiden attribution is promoted from concept-art commentary.
- [ ] Earlier MK9 death evidence remains unchanged.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
