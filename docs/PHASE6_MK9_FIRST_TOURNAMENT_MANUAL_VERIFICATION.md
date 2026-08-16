# Phase 6 — MK9 first-tournament decomposition manual verification

Use this checklist for the first systematic Reboot-continuity expansion slice. The intended result is to replace the old broad MK9 tournament umbrella with evidence-safe boundaries without treating a proposal as an occurrence or chronology as causality.

## Short maintainer test cases

1. **Open the Reboot chronology / first tournament** — `First tournament in the altered timeline` should be Earthrealm-scoped, include Liu Kang, Raiden, Bi-Han, Hanzo Hasashi, Quan Chi, Goro, and Shang Tsung, and must not include Kuai Liang or Outworld in that Event.
2. **Open Shang Tsung's proposal Event** — `Shang Tsung proposes a new Outworld tournament` should be Outworld-scoped and clearly read as a proposal/plan. It must not imply that the later Outworld tournament has already happened.
3. **Inspect Raiden's warning** — `Raiden sends a warning to his past self` may precede the altered tournament chronologically, but there must be no explicit causal edge saying the warning caused the tournament itself to occur.
4. **Inspect Bi-Han's reboot death Event** — Scorpion's killing of Bi-Han should show `Netherrealm` as the Event realm, not Earthrealm.
5. **Inspect Liu Kang's reboot tournament claim** — the canon Fact should state that Liu Kang won the first tournament in the altered timeline and cite `Mortal Kombat (2011) Story Mode`.
6. **Inspect Shang Tsung's proposal claim** — the canon Fact should establish the proposal only, not the later tournament occurrence.
7. **Regression / continuity** — Original and New Era chronology, claims, and causal topology should be unchanged by this slice; narrow/mobile layouts should remain readable.

## Evidence / model discipline

- [ ] Confirm the first tournament Event no longer folds Earthrealm and the later Outworld tournament into one occurrence.
- [ ] Confirm Kuai Liang is not listed as a participant in the first tournament umbrella Event.
- [ ] Confirm Goro and Shang Tsung are represented in the first tournament Event because the story directly places Liu Kang's final tournament victories against them there.
- [ ] Confirm the later Outworld tournament remains deferred as a separate occurrence until its own event evidence is modeled.
- [ ] Confirm proposal/plan evidence is not promoted into occurrence evidence.
- [ ] Confirm `Raiden warning → first tournament` is not encoded as causality merely because the warning defines the altered continuity context.
- [ ] Confirm Bi-Han's death Realm is Netherrealm.
- [ ] Confirm no schema or UI change was introduced solely for this decomposition.

## Documentation / readiness

- [ ] Confirm `ROADMAP.md` records Phase 5 as complete after PR #23 merge commit `1369869be29b42604d2f752fb0cc2f2dbed8ec48` and Phase 6 as active from that verified baseline.
- [ ] Confirm `CHANGELOG.md` describes the Phase 6 kickoff outcome rather than listing every JSON file.
- [ ] Confirm changed-file scope is limited to the MK9/Reboot data corrections and owning documentation/manual files.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
