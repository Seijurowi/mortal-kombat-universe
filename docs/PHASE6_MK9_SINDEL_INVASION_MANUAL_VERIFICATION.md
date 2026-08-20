# Phase 6 — MK9 Sindel resurrection and invasion manual verification

Use this checklist for the Reboot-continuity Phase 6 slice after the Outworld tournament. The intended result is to keep Quan Chi's invasion proposal, Sindel's resurrection, and the actual Earthrealm invasion as separate evidence questions while preserving the explicit causal mechanism shown in Mortal Kombat (2011): Sindel's resurrection nullifies the ward blocking Shao Kahn's entry, after which the invasion begins.

## Short maintainer test cases

1. **Open the Reboot chronology after the Outworld tournament** — it should show `Outworld tournament in the altered timeline` → `Quan Chi proposes an invasion of Earthrealm` → `Quan Chi resurrects Sindel on Earthrealm` → `Shao Kahn's forces invade Earthrealm` as distinct Events.
2. **Open the invasion-proposal Event** — it must remain a plan/proposal, not the invasion occurrence itself. It should be scoped to Outworld and point forward to the separate Sindel-resurrection Event.
3. **Open the Sindel-resurrection Event** — it should be scoped to Earthrealm and include Quan Chi, Sindel, and Bi-Han/Noob Saibot. It should explain that the resurrection nullifies Sindel's ward; it must not place Shao Kahn in this Earthrealm scene merely because the ward concerns his entry.
4. **Inspect causal topology** — the tournament loss should lead to Quan Chi's explicitly framed invasion alternative; the proposal should lead to the resurrection mechanism; the resurrection should lead to the invasion. All causal mirrors should agree in both directions.
5. **Open the Earthrealm-invasion Event** — it should be Earthrealm-scoped and represent Shao Kahn's invasion only. It must **not** state that Earthrealm and Outworld have already merged.
6. **Inspect the new Facts** — Quan Chi's invasion proposal, Sindel resurrection, ward nullification, and Shao Kahn's invasion should all be Reboot `canon` and cite `Mortal Kombat (2011) Story Mode`.
7. **Regression / continuity** — Original and New Era chronology/claims must remain unchanged; the existing Reboot tournament records must still read correctly; narrow/mobile layouts should remain readable.

## Evidence / model discipline

- [ ] Confirm proposal and occurrence remain distinct Events.
- [ ] Confirm the tournament → invasion-proposal edge comes from the story explicitly presenting invasion as the alternative after tournament defeat blocks the merger path, not from adjacency alone.
- [ ] Confirm proposal → resurrection reflects Quan Chi carrying out the proposed mechanism rather than assuming every proposal succeeds.
- [ ] Confirm resurrection → invasion is supported by the explicit ward/barrier nullification followed by the invasion beginning.
- [ ] Confirm `realmIds` reflects event location/scope only: proposal in Outworld; resurrection and invasion in Earthrealm.
- [ ] Confirm Bi-Han is used as the stable Character for Noob Saibot in the resurrection scene rather than creating a duplicate Character.
- [ ] Confirm the invasion is not silently promoted into realm merger, conquest, soul-taking, or any later invasion-era outcome.
- [ ] Confirm later Soulnado, Sindel massacre/revenants, Elder Gods intervention, and merger-attempt material remains deferred to separately sourced slices.
- [ ] Confirm no schema or UI change was introduced solely for this slice.

## Documentation / readiness

- [ ] Confirm `ROADMAP.md` records PR #25 as merged at verified merge commit `7dfdfa1518df3950e16ca109384ce65d4bf00044` and this branch as current work from that baseline.
- [ ] Confirm `CHANGELOG.md` records the material proposal/resurrection/invasion outcome rather than a file-by-file diff.
- [ ] Confirm changed-file scope is limited to this MK9 Reboot slice plus owning docs/manual.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
