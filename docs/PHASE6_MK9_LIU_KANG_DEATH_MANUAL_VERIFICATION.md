# Phase 6 — MK9 Liu Kang confrontation and death manual verification

Use this checklist to verify the Reboot slice covering Liu Kang's confrontation with Raiden and Liu Kang's accidental death during their clash.

## Maintainer test cases

1. Open Reboot chronology after `Raiden proposes allowing Shao Kahn to merge the realms`. Confirm `Raiden and Liu Kang fight over Shao Kahn` appears next, followed by `Liu Kang dies after clashing with Raiden` as a separate Event.
2. Inspect causality. Confirm the mirrored chain is `allow-merger plan → Raiden/Liu Kang confrontation → Liu Kang death`. There must be no direct plan → death shortcut and no new edge from this slice to the later actual merger, Elder Gods intervention, or Shao Kahn defeat.
3. Open the confrontation Event. Confirm it is Reboot, scoped to Earthrealm, includes Raiden and Liu Kang, and explains that Raiden repeatedly stops Liu Kang from fighting Shao Kahn because of the allow-merger strategy.
4. Confirm the confrontation Event ends before the lethal collision and does **not** present Shao Kahn's realm merger as already completed.
5. Open the death Event. Confirm it is Reboot, scoped to Earthrealm, and preserves the sequence: Liu Kang charges with fire, Raiden raises a lightning shield in self-defense, the collision injures Liu Kang with lightning and his own fire, and Liu Kang dies moments later.
6. Confirm the death Event does **not** describe Raiden as intentionally executing or murdering Liu Kang. Raiden's immediate reaction that the outcome was not meant to happen and his request for forgiveness should remain visible.
7. Inspect `Raiden killed Liu Kang`. Confirm it is Reboot `canon`, sourced to `Mortal Kombat (2011) Story Mode`, and its notes explicitly preserve the accidental/unintended context.
8. Inspect `Raiden acted in self-defense against Liu Kang`. Confirm it is a separate Reboot `canon` Fact sourced to the same story source and qualifies the killer attribution without weakening the confirmed death.
9. Confirm Shao Kahn's actual illegal merger, Elder Gods intervention/punishment, Shao Kahn's final defeat, and any later Liu Kang revenant state remain outside this slice.
10. Regression-check the prior allow-merger plan, He Must Win realization, Quan Chi soul-control boundary, Original/New Era data, causality rendering, and narrow/mobile readability.

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
