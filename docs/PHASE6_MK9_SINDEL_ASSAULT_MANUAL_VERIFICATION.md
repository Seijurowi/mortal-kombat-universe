# Phase 6 — MK9 Sindel assault manual verification

Use this checklist for the Reboot-continuity Phase 6 slice covering Sindel's assault on Earthrealm's defenders, the directly shown casualty attributions, Nightwolf's self-sacrifice, and Kitana's later death from her injuries. Revenant conversion, the Elder Gods' refusal, Quan Chi's later reveal, and Shao Kahn's merger attempt remain outside this slice.

## Short maintainer test cases

1. **Open Reboot chronology after the Soulnado slice** — the next modeled Event should be `Sindel attacks Earthrealm's defenders`, followed by `Nightwolf sacrifices himself to kill Sindel` and then `Kitana dies from injuries inflicted by Sindel`.
2. **Inspect causal topology** — the Sindel assault should point separately to Nightwolf's sacrifice and Kitana's death. There must be no direct `Soulnado destruction → Sindel assault` edge and no `Nightwolf sacrifice → Kitana death` edge.
3. **Open the Sindel assault Event** — it should be Reboot and Earthrealm-scoped. The participant list should include Sindel and the directly represented casualties/defenders added for this slice; it need not pretend to be the exhaustive roster of everyone present.
4. **Inspect the six immediate casualty Facts** — Kabal, Kurtis Stryker, Kuai Liang/Cyber Sub-Zero, Jax Briggs, Tomas Vrbada/Smoke, and Jade should each have a Reboot `canon` `killed_by = Sindel` Fact sourced to `Mortal Kombat (2011) Story Mode`.
5. **Inspect Nightwolf and Sindel outcomes** — Sindel should have a Reboot `canon` `killed_by = Nightwolf` Fact, and Nightwolf should have a separate sourced self-sacrifice Fact. The Event should make clear that Nightwolf dies in the same attack that kills Sindel.
6. **Inspect Kitana's outcome** — Kitana should now span Original and Reboot as one stable Character. Her Reboot death Event/Fact should say that Sindel inflicted the injuries and that Kitana later died from them after Liu Kang and Raiden returned.
7. **Inspect new Characters** — Jax, Jade, Kabal, Stryker, and Tomas Vrbada should be single stable Character records scoped only to Reboot for now; no unsupported Original/New Era continuity should be projected into them.
8. **Confirm deferred states** — none of the casualty Facts should say `revenant`, `undead`, `enslaved by Quan Chi`, or otherwise treat the later Quan Chi reveal as already modeled.
9. **Regression / continuity** — the prior invasion-vs-merger and Soulnado chronology-vs-causality guardrails must remain intact; Original/New Era claims and narrow/mobile readability should remain unchanged.

## Evidence / model discipline

- [ ] Confirm the assault Event is a sourced occurrence and not inferred solely from later death Facts.
- [ ] Confirm no direct causal edge is manufactured from the Soulnado or the broader invasion merely because both precede the assault in MK9.
- [ ] Confirm `assault → Nightwolf sacrifice` reflects Nightwolf's direct response to Sindel overwhelming the defenders and threatening Kitana.
- [ ] Confirm `assault → Kitana death` reflects the directly shown injuries and later death, while chronology between Nightwolf's sacrifice and Kitana's death does not become causality.
- [ ] Confirm all six immediate `killed_by = Sindel` Facts are narrow, Reboot-scoped, canon, and source `mk9-story`.
- [ ] Confirm Nightwolf's self-sacrifice and Sindel's death are represented as related but distinct atomic assertions.
- [ ] Confirm Kitana remains one stable Character expanded to Reboot rather than duplicated.
- [ ] Confirm Jax, Jade, Kabal, Stryker, and Smoke were added only because this slice needs them as direct casualty subjects/participants, not as roster-count expansion.
- [ ] Confirm revenant conversion, Quan Chi's possession of the dead warriors' souls, Elder Gods intervention/refusal, Liu Kang's later death, and Shao Kahn's merger/final defeat remain deferred.
- [ ] Confirm no schema or UI change was introduced solely for this slice.

## Documentation / readiness

- [ ] Confirm `ROADMAP.md` records PR #27 as merged at verified merge commit `274a97602e8179ca5da072123852d9621559fb8e` and this branch as current work from that baseline.
- [ ] Confirm `CHANGELOG.md` records the material Sindel assault/casualty outcome rather than a file-by-file list.
- [ ] Confirm changed-file scope is limited to this MK9 Reboot slice plus owning docs/manual.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
