# Phase 6 — MK9 Liu Kang confrontation and death manual verification

Use this checklist to verify the Reboot slice covering Liu Kang's confrontation with Raiden and Liu Kang's accidental death during their clash.

## Before you start

This slice is in Draft PR #33 and is **not on `main` yet**. To inspect the new records locally:

```bash
git checkout agent/phase6-mk9-liu-kang-death
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

This is also **not yet the full end of MK9**. The current branch intentionally stops after Liu Kang's death. Shao Kahn's actual illegal merger, the Elder Gods' intervention/punishment, and Shao Kahn's final defeat are later slices and should not appear yet.

## Action-level maintainer test cases

### 1. Find the new chronology segment

1. Open `http://localhost:3000/causality`.
2. In the **Continuity** card, click **Reboot Timeline**.
3. Scroll to **Chronology · full continuity**.
4. Use **Next in chronology** repeatedly, or scroll the horizontal chronology strip toward the right.
5. Find these three consecutive records near the current end of the modeled MK9 chronology:
   - `Raiden proposes allowing Shao Kahn to merge the realms` — story order 350;
   - `Raiden and Liu Kang fight over Shao Kahn` — story order 360;
   - `Liu Kang dies after clashing with Raiden` — story order 370.

Expected:
- confrontation and death are separate cards;
- order is plan → confrontation → death.

Must not appear:
- a completed Shao Kahn realm-merger Event after Liu Kang's death;
- Elder Gods punishment/final defeat as if already modeled.

### 2. Check the causal chain

1. Still on `/causality`, click `Raiden and Liu Kang fight over Shao Kahn` in the chronology strip.
2. Scroll to **Whole causal chain**.
3. Verify the branch shows:
   `Raiden proposes allowing Shao Kahn to merge the realms → Raiden and Liu Kang fight over Shao Kahn → Liu Kang dies after clashing with Raiden`.
4. Scroll to **Local cause / effect** with the confrontation selected.

Expected:
- **Why?** contains the allow-merger plan;
- **What next?** contains Liu Kang's death.

Must not appear:
- a direct plan → death shortcut;
- actual merger / Elder Gods intervention / Shao Kahn defeat as children of this chain.

### 3. Inspect the confrontation Event

1. With `Raiden and Liu Kang fight over Shao Kahn` selected on `/causality`, click **Open full event dossier**.
2. Confirm the dossier says **Reboot Timeline** and **Earthrealm**.
3. Confirm participants include **Raiden** and **Liu Kang**.
4. Read the description.

Expected:
- Raiden stops Liu Kang from fighting Shao Kahn because Raiden is following the allow-merger strategy;
- Liu Kang declares Raiden his enemy and they fight;
- this Event stops before the lethal collision.

Must not appear:
- wording that Shao Kahn has already completed the merger;
- Liu Kang's death folded into this Event.

### 4. Inspect Liu Kang's death Event

1. Return to `/causality`.
2. Select `Liu Kang dies after clashing with Raiden`.
3. Click **Open full event dossier**.
4. Read the description carefully.

Expected sequence:
- Liu Kang charges Raiden while using fire;
- Raiden raises a lightning shield in self-defense;
- Liu Kang collides with it;
- the backlash involves Raiden's lightning and Liu Kang's own fire;
- Liu Kang dies from the injuries;
- Raiden immediately treats the result as unintended and asks forgiveness.

Must not appear:
- wording such as intentional execution/murder;
- a claim that Raiden deliberately set out to kill Liu Kang.

### 5. Inspect the killer-attribution Fact

1. Go to the bottom-right navigation and click **Explorer**.
2. In the left sidebar, click **Reboot Timeline**.
3. Under **Explore**, click **Facts**.
4. In the search field, type `Raiden killed Liu Kang`.
5. Open the matching Fact.

Expected:
- subject: Liu Kang;
- predicate: `killed by`;
- object: Raiden;
- continuity: Reboot;
- canon status: canon;
- source: `Mortal Kombat (2011) Story Mode`;
- notes explicitly preserve the unintended/accidental context.

### 6. Inspect the self-defense qualifier

1. Stay in **Explorer → Reboot Timeline → Facts**.
2. Search for `Raiden acted in self-defense against Liu Kang`.
3. Open the matching Fact.

Expected:
- Raiden is the subject;
- Liu Kang is the object;
- Reboot / canon / MK9 story source;
- notes explain that Liu Kang attacks and Raiden raises the lightning shield in self-defense.

The two Facts should coexist:
- `Raiden killed Liu Kang` confirms the death attribution;
- `Raiden acted in self-defense against Liu Kang` prevents the UI/evidence history from turning that attribution into an intentional-murder claim.

### 7. Negative end-of-MK9 check

On `/causality` with **Reboot Timeline** selected, inspect what comes after Liu Kang's death.

For this PR, Liu Kang's death may be the current end of the modeled chronology.

That is **expected**.

Do not expect to find yet:
- Shao Kahn's completed illegal merger;
- Elder Gods intervention/punishment;
- Shao Kahn's final defeat;
- Liu Kang's later revenant state.

Those are intentionally deferred rather than inferred or collapsed into this slice.

### 8. Quick regression/mobile check

1. Resize the browser to a narrow/mobile width.
2. Open `/causality` → **Reboot Timeline**.
3. Scroll the chronology strip and select the new confrontation/death events.
4. Open both event dossiers.
5. Open **Explorer → Reboot Timeline → Facts** and search the two new Facts.

Expected:
- chronology remains horizontally usable;
- buttons/cards do not overlap;
- event descriptions remain readable;
- source/canon metadata remains accessible;
- prior allow-merger / He Must Win / Quan Chi records are still reachable.

## Evidence/model checklist

- [ ] Confrontation and death are two distinct occurrences.
- [ ] `plan → confrontation → death` is mirrored and source-supported.
- [ ] Liu Kang's death is confirmed, not qualified as merely apparent or possible.
- [ ] `killed_by = Raiden` remains qualified by separate self-defense/unintended evidence.
- [ ] The death is not presented as an intentional execution.
- [ ] Earthrealm `realmIds` is location/scope only.
- [ ] Actual merger, Elder Gods punishment, final defeat, and revenant state remain deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
