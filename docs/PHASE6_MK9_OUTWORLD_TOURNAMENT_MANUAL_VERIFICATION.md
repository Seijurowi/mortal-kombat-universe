# Phase 6 — MK9 Outworld tournament manual verification

Use this checklist for the second Reboot-continuity Phase 6 slice. The intended result is to model Shang Tsung's earlier tournament proposal and the later tournament occurrence as separate evidence questions while allowing the proposal → occurrence edge because Mortal Kombat (2011) shows the terms accepted and the replacement tournament actually take place.

## Short maintainer test cases

1. **Open the Reboot chronology around the two tournaments** — the first altered-timeline tournament should remain separate from `Shang Tsung proposes a new Outworld tournament`, followed by `Outworld tournament in the altered timeline`.
2. **Open the proposal Event** — it should still read as a plan/proposal, not as the tournament occurrence itself. It should point forward to the separately modeled Outworld tournament.
3. **Open the Outworld tournament Event** — it should be scoped to `Outworld`, include Liu Kang, Raiden, Shang Tsung, and Shao Kahn, and describe the replacement tournament ending in Earthrealm's victory.
4. **Inspect causal topology** — `Shang Tsung proposes a new Outworld tournament → Outworld tournament in the altered timeline` should be an explicit causal edge. There must still be no direct `Raiden sends a warning to his past self → Outworld tournament` edge.
5. **Inspect Liu Kang's tournament-win Fact** — it should be Reboot `canon`, state that Liu Kang won the Outworld tournament, and cite `Mortal Kombat (2011) Story Mode`.
6. **Inspect Shao Kahn's defeat Fact** — it should be Reboot `canon`, attribute Shao Kahn's tournament defeat specifically to Liu Kang, and cite `Mortal Kombat (2011) Story Mode`.
7. **Regression / continuity** — Original and New Era chronology, claims, and causal topology should be unchanged; narrow/mobile layouts should remain readable.

## Evidence / model discipline

- [ ] Confirm proposal/plan and occurrence remain two distinct Events.
- [ ] Confirm the occurrence has `Outworld` realm scope and does not inherit Earthrealm merely because Earthrealm's fighters participate.
- [ ] Confirm the proposal → occurrence edge is mirrored in both Events.
- [ ] Confirm Raiden's future warning remains chronology/reset context rather than an ordinary cause of the tournament.
- [ ] Confirm Liu Kang's exact Reboot victory over Shao Kahn is sourced to story-mode evidence rather than inferred from Original-continuity endings.
- [ ] Confirm the Event participant list is not presented as an exhaustive roster of everyone involved in the tournament.
- [ ] Confirm no schema or UI change was introduced solely for this slice.

## Documentation / readiness

- [ ] Confirm `ROADMAP.md` records PR #24 as merged at `8f52f542815035c584a40470457f277c03aa2c59` and this Outworld-tournament slice as current work from that verified baseline.
- [ ] Confirm `CHANGELOG.md` records the material occurrence/causality/evidence outcome rather than a file-by-file diff.
- [ ] Confirm changed-file scope is limited to the MK9 Outworld-tournament data and owning documentation/manual files.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
