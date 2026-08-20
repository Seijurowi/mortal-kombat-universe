# Phase 6 — MK9 Soulnado manual verification

Use this checklist for the Reboot-continuity Phase 6 slice after Shao Kahn's Earthrealm invasion begins. The intended result is to model Quan Chi's Soulnado and Nightwolf's destruction of it as a small sourced causal component while preserving the chronology-only gap from the broader invasion and avoiding an unsupported Bi-Han death claim.

## Short maintainer test cases

1. **Open the Reboot chronology after the Earthrealm invasion begins** — `Quan Chi creates a Soulnado in Earthrealm` should appear after `Shao Kahn's forces invade Earthrealm`, followed by `Nightwolf destroys the Soulnado`.
2. **Inspect causal topology** — the Soulnado creation should lead to Nightwolf's destruction Event. The broader invasion should **not** be shown as a direct causal parent of Soulnado creation merely because the Soulnado occurs during the invasion.
3. **Open the Soulnado-creation Event** — it should be Reboot, Earthrealm-scoped, and identify Quan Chi as the directly represented participant. It may describe the newly created Soulnado absorbing captive soldiers, but must not claim that all Earthrealm souls were actually absorbed.
4. **Open the destruction Event** — it should be Earthrealm-scoped and include Nightwolf, Quan Chi, and Bi-Han/Noob Saibot. It should explain that Nightwolf knocks Bi-Han into the Soulnado, the vortex destabilizes/explodes, and Earthrealm's souls are later reported safe.
5. **Inspect Bi-Han's Soulnado Fact** — it should say he was pulled into the Soulnado in Reboot canon and cite `Mortal Kombat (2011) Story Mode`; it must **not** say he died, was destroyed, or establish his final fate.
6. **Inspect Nightwolf** — the stable Nightwolf Character should now span Original and Reboot rather than creating a duplicate Reboot Nightwolf. Existing Original Onaga material must remain intact.
7. **Inspect the two outcome Facts** — Quan Chi created the Soulnado and Nightwolf destroyed it; both should be Reboot `canon` and cite `Mortal Kombat (2011) Story Mode`.
8. **Regression / continuity** — Original and New Era chronology/claims must remain unchanged; invasion-vs-merger separation from the prior slice must still read correctly; narrow/mobile layouts should remain readable.

## Evidence / model discipline

- [ ] Confirm Soulnado creation is a separately sourced occurrence rather than an implied property of the invasion Event.
- [ ] Confirm no direct `Earthrealm invasion → Soulnado creation` causal edge was added from chronology/context alone.
- [ ] Confirm `Soulnado creation → Nightwolf destroys Soulnado` reflects Nightwolf's explicit response to disrupt the identified Soulnado and the later shown destruction.
- [ ] Confirm `realmIds` is Earthrealm because both Soulnado Events occur at St. Dominic's Cemetery during the Earthrealm invasion; the cemetery name is contextual detail, not a new Realm.
- [ ] Confirm Nightwolf is a stable Character expanded to Reboot continuity, not duplicated.
- [ ] Confirm Bi-Han remains the stable Character for Noob Saibot.
- [ ] Confirm Bi-Han being pulled into the Soulnado is not strengthened into death/destruction/final-fate language.
- [ ] Confirm Raiden's vision of all Earthrealm souls being absorbed is not promoted into a completed all-souls occurrence.
- [ ] Confirm Sindel's later assault/deaths/revenants, Elder Gods intervention, and Shao Kahn's merger attempt remain deferred.
- [ ] Confirm no schema or UI change was introduced solely for this slice.

## Documentation / readiness

- [ ] Confirm `ROADMAP.md` records PR #26 as merged at verified merge commit `47d9096e11bfaeb8ceaec67bbf7bf5b26349d871` and this branch as current work from that baseline.
- [ ] Confirm `CHANGELOG.md` records the material Soulnado creation/destruction outcome and Bi-Han fate guardrail rather than a file-by-file diff.
- [ ] Confirm changed-file scope is limited to this MK9 Reboot slice plus owning docs/manual.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
