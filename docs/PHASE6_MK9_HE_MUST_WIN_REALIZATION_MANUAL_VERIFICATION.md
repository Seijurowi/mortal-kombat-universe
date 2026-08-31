# Phase 6 — MK9 He Must Win realization manual verification

Use this checklist to verify the Reboot slice covering Quan Chi's post-fight dismissal of the Elder Gods and Raiden's realization that the future message `He must win` refers to Shao Kahn.

## Maintainer test cases

1. Open Reboot chronology after `Quan Chi reveals control of fallen Earthrealm warriors`. Confirm `Quan Chi dismisses the Elder Gods' intervention` appears before `Raiden realizes that Shao Kahn must win` as two distinct Events.
2. Inspect causality. Confirm only `Quan Chi dismisses Elder Gods → Raiden realizes He Must Win` is added and mirrored. The earlier soul-control reveal must remain chronology/context only rather than becoming a causal parent merely because it occurs earlier in Chapter 16.
3. Open the Quan Chi Event. Confirm it is Reboot, scoped to Netherrealm, includes Quan Chi and Raiden, and records Quan Chi's post-fight statements that Shao Kahn will soon arrive and that the Elder Gods do not act.
4. Confirm the Quan Chi Event does **not** present Shao Kahn's arrival, realm merger, or Elder Gods' future judgment as already completed occurrences.
5. Open Raiden's realization Event. Confirm it is Reboot, scoped to Netherrealm, includes Raiden and Quan Chi, and ends at Raiden identifying `He must win` with Shao Kahn / saying he knows what must be done.
6. Confirm Raiden's later explicit plan to allow Shao Kahn to merge the realms is **not** folded into the realization Event.
7. Inspect the three new Facts. Confirm all are Reboot `canon` and sourced to `Mortal Kombat (2011) Story Mode`: Quan Chi predicts Shao Kahn's arrival; Quan Chi claims the Elder Gods will not act; Raiden realizes `He must win` refers to Shao Kahn.
8. Confirm Quan Chi's `Elder Gods would not act` record is presented as Quan Chi's sourced claim, not a universal truth that overrides the prior Elder Gods rule Facts.
9. Confirm Liu Kang confrontation/death, the explicit allow-merger plan, illegal merger, Elder Gods intervention/punishment, and Shao Kahn's final defeat remain outside this slice.
10. Regression-check the prior soul-bargain evidence boundary, Elder Gods invasion-vs-merger distinction, chronology-vs-causality behavior, Original/New Era data, and narrow/mobile readability.

## Evidence/model checklist

- [ ] `soul-control reveal → Quan Chi taunt` remains chronology-only.
- [ ] `Quan Chi taunt → Raiden realization` is supported by the direct dialogue/reasoning sequence rather than adjacency alone.
- [ ] Quan Chi's Shao Kahn-arrival statement remains a prediction, not an occurrence.
- [ ] Quan Chi's Elder Gods statement remains his claim, not an omniscient lore assertion.
- [ ] Raiden's realization remains distinct from his later plan/action.
- [ ] Netherrealm scope is source-supported by Chapter 16.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
