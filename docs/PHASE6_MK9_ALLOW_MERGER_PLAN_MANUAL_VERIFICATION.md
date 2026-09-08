# Phase 6 — MK9 allow-merger plan manual verification

Use this checklist to verify the Reboot slice covering Raiden's explicit plan to allow Shao Kahn to merge the realms so the Elder Gods will punish the violation.

## Maintainer test cases

1. Open Reboot chronology after `Raiden realizes that Shao Kahn must win`. Confirm `Raiden proposes allowing Shao Kahn to merge the realms` appears as the next distinct Event.
2. Inspect causality. Confirm `Raiden realizes He Must Win → Raiden proposes allowing the merger` is added and mirrored. No causal edge should yet connect the plan to an actual merger, Elder Gods intervention, or Shao Kahn's defeat.
3. Open the plan Event. Confirm it is Reboot, scoped to Earthrealm, includes Raiden and Liu Kang, and clearly describes a strategy/proposal rather than a completed merger occurrence.
4. Confirm the plan Event does **not** assert that Shao Kahn has already merged Earthrealm and Outworld, already violated Mortal Kombat, or already been punished by the Elder Gods.
5. Inspect `Raiden planned to allow Shao Kahn to merge the realms`. Confirm it is Reboot `canon`, sourced to `Mortal Kombat (2011) Story Mode`, and remains plan evidence only.
6. Inspect `Raiden expected the Elder Gods to punish an illegal merger`. Confirm it is Reboot `canon`, sourced to the same story source, and presented as Raiden's stated expectation rather than a completed punishment Fact.
7. Confirm Earthrealm is used only as the scene's location/scope. The planned merger itself must remain in sourced Fact/value wording rather than abusing Event `realmIds` as an action-object field.
8. Confirm Liu Kang is present as the recipient/opponent of the plan discussion, but his later confrontation with Raiden and accidental death remain outside this Event.
9. Confirm Shao Kahn's later arrival/illegal merger, Elder Gods intervention/punishment, and final defeat remain outside this slice.
10. Regression-check the prior He Must Win realization, Quan Chi soul-control evidence boundary, Elder Gods invasion-vs-merger distinction, Original/New Era data, and narrow/mobile readability.

## Evidence/model checklist

- [ ] The Event records an explicit plan, not the merger occurrence.
- [ ] `realization → plan` is supported by Raiden saying he now knows what must be done and immediately stating the strategy to Liu Kang.
- [ ] The plan has no consequence edge to a future merger until occurrence evidence is modeled separately.
- [ ] Elder Gods punishment remains Raiden's expectation in this slice, not a completed intervention.
- [ ] Earthrealm `realmIds` is location/scope only.
- [ ] Liu Kang confrontation/death remains deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
