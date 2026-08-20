# Phase 6 — MK9 Elder Gods refusal manual verification

Use this checklist for the Reboot-continuity Phase 6 slice covering Raiden's appeal to the Elder Gods and their refusal to intervene during Shao Kahn's invasion. The scene runs in parallel with Sindel's assault; later Quan Chi/revenant material and the Elder Gods' final intervention against Shao Kahn remain outside this slice.

## Short maintainer test cases

1. **Open Reboot chronology around Sindel's assault** — `Sindel attacks Earthrealm's defenders` should remain at the start of the assault period, followed by `Raiden appeals to the Elder Gods for intervention`, then `The Elder Gods refuse to intervene in Earthrealm's invasion`, and later Nightwolf's sacrifice / Kitana's death.
2. **Inspect causal topology** — `Raiden appeals → Elder Gods refuse` should exist and be mirrored. There must be no causal edge from Sindel's assault/deaths to either Elder Gods Event merely because the scenes run in parallel.
3. **Open Raiden's appeal Event** — Reboot; participants Raiden, Liu Kang, and the Elder Gods; no structured Realm should be asserted from the temple/other-plane scene.
4. **Open the refusal Event** — Reboot; participants Elder Gods, Raiden, and Liu Kang; no structured Realm. It should say invasion is not itself a Mortal Kombat transgression and distinguish that from the proscribed merger of realms.
5. **Inspect the four new Facts** — Raiden's appeal, the Elder Gods' refusal, invasion-not-transgression, and realm-merger-proscribed should all be Reboot `canon` and source `Mortal Kombat (2011) Story Mode`.
6. **Inspect Elder Gods** — the same stable Faction should now span Original and Reboot; existing Original creation-myth coverage must remain intact and continuity-scoped.
7. **Confirm deferred material** — this slice must not say the Elder Gods already punished Shao Kahn, must not model the later illegal merger occurrence, and must not add Quan Chi/revenant-state claims.
8. **Regression / continuity** — Sindel casualty Facts, Soulnado chronology-vs-causality, invasion-vs-merger separation, Original/New Era claims, and narrow/mobile readability should remain intact.

## Evidence / model discipline

- [ ] Confirm the appeal and refusal are separate occurrences rather than one broad summary Event.
- [ ] Confirm `appeal → refusal` is the only new causal edge and reflects a direct request/response relation.
- [ ] Confirm parallel editing between the Elder Gods scene and Sindel's assault is represented through chronology/order only, not a causal edge.
- [ ] Confirm `realmIds` stays empty because the source's temple/other-plane description does not establish one of the repository's structured Realms.
- [ ] Confirm the Elder Gods are reused as a Faction and expanded to Reboot continuity rather than duplicated as a Character or new Faction.
- [ ] Confirm the rule Facts remain narrowly Reboot-scoped and do not project this exact wording into Original or New Era continuity.
- [ ] Confirm `invasion is not itself a transgression` is kept distinct from `merger of realms is proscribed`.
- [ ] Confirm the later final-scene violation/punishment, Quan Chi bargain, revenant reveal, Liu Kang death, and Shao Kahn defeat remain deferred.
- [ ] Confirm no schema or UI change was introduced solely for this slice.

## Documentation / readiness

- [ ] Confirm `ROADMAP.md` records PR #28 as merged at verified merge commit `ad98e8afc46bdab4221d8745728511bbcaffc645` and this branch as current work from that baseline.
- [ ] Confirm `CHANGELOG.md` records the material Elder Gods refusal/rule distinction rather than a file-by-file list.
- [ ] Confirm changed-file scope is limited to this MK9 Reboot slice plus owning docs/manual.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
