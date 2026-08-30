# Phase 6 — MK9 Quan Chi soul bargain manual verification

Use this checklist to verify the Reboot slice covering Raiden's proposed bargain with Quan Chi and Quan Chi's reveal that the fallen warriors' souls are already under his control.

## Maintainer test cases

1. Open Reboot chronology after Kitana's death. Confirm `Raiden offers souls for Netherrealm cooperation` appears before `Quan Chi reveals control of fallen Earthrealm warriors` as two distinct Events.
2. Inspect causality. Confirm only `Raiden soul bargain → Quan Chi reveal` is added and mirrored. There must be no direct causal edge from the Elder Gods refusal, Sindel casualties, Nightwolf's sacrifice, or Kitana's death into the bargain merely because those events happened earlier.
3. Open Raiden's bargain Event. Confirm it is Reboot, scoped to Netherrealm, includes Raiden and Quan Chi, and clearly describes a proposed exchange rather than a completed transfer of souls.
4. Open Quan Chi's reveal Event. Confirm it is Reboot, scoped to Netherrealm, and says the represented fallen-warrior participant list is intentionally non-exhaustive.
5. Inspect Raiden's two new Facts. Confirm both are Reboot `canon` and sourced to `Mortal Kombat (2011) Story Mode`; the fallen-warrior soul offer and Raiden's conditional own-soul offer must remain separate assertions.
6. Inspect Quan Chi/Shao Kahn Facts. Confirm the source supports: Quan Chi says the fallen warriors' souls are already his; he identifies them as Shao Kahn's payment for Netherrealm allegiance; he commands fallen warriors to attack Raiden.
7. Confirm no new Fact automatically labels every previously killed fighter a `revenant`, no death Fact is rewritten into a revenant transition, and no unsupported universal soul-transfer mechanism is introduced.
8. Confirm Kung Lao is not added merely to make the reveal Event roster exhaustive; participant coverage may remain narrow while the broad soul/control claim stays literal and source-backed.
9. Confirm the later `He must win` realization, Liu Kang's death, illegal realm-merger attempt, Elder Gods intervention, and Shao Kahn's final defeat remain outside this slice.
10. Regression-check prior Elder Gods invasion-vs-merger wording, Sindel casualty facts, Soulnado chronology-vs-causality, Original/New Era data, and narrow/mobile readability.

## Evidence/model checklist

- [ ] Proposed bargain is not represented as a completed soul transfer.
- [ ] `bargain → reveal` causality is direct request/response evidence, not adjacency.
- [ ] Earlier losses/refusal remain chronology/context rather than invented causal parents.
- [ ] Netherrealm scope is source-supported by the Chapter 16 scene.
- [ ] Soul possession, payment, and command claims stay at the narrow level MK9 directly establishes.
- [ ] Formal revenant terminology/state is not required to represent this scene and is deferred until primary evidence makes that label useful.
- [ ] Event participant coverage is not presented as exhaustive.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
