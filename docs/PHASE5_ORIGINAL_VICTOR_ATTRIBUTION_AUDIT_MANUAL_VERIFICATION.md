# Phase 5 — Original-continuity victor-attribution audit manual verification

Use this checklist for the MKII / MK3 / MK4 individual-victor evidence audit. The intended outcome is conservative: ending-specific attribution may be preserved as source history without becoming a canon Fact unless later independent Original-continuity evidence names the same individual victor.

## Short maintainer test cases

1. **Open the three new Source dossiers** — `Mortal Kombat II — Liu Kang Ending`, `Mortal Kombat 3 — Liu Kang Ending`, and `Mortal Kombat 4 — Liu Kang Ending` should all be typed as `game_ending` and clearly described as ending evidence.
2. **Check MK3 canon outcome** — `Shao Kahn / defeated_by` must still be `Earth warriors` at `canon` strength from MK4 story. There must be no new canon `defeated_by = Liu Kang` Fact.
3. **Check MK4 canon outcome** — `Shinnok / was_defeated = true` must remain broad at `canon` strength from Armageddon biography evidence. There must be no new canon individual-victor Fact for Liu Kang.
4. **Check MKII boundary** — Liu Kang's MKII ending may state the ending-specific Shao Kahn defeat, but without independent later Original-continuity confirmation it must not create a new canon exact-victor Fact.
5. **Check source provenance** — Mortal Kombat Warehouse must be described as preservation/access infrastructure rather than canonical authority.
6. **Check claim history / dossiers** — the new Source records may be navigable as evidence records, but `/claims` must not imply that merely adding an ending Source changes an existing canon claim family.
7. **Mobile / regression** — source dossiers and existing broad outcome Facts remain readable; `/causality` and `/cosmology` should be unchanged.

## Evidence discipline

- [ ] Confirm MKII Liu Kang ending directly attributes Shao Kahn's tournament defeat to Liu Kang, but remains ending-strength evidence only.
- [ ] Confirm MK3 Liu Kang ending directly attributes Shao Kahn's defeat to Liu Kang, but later MK4 story confirms only the broader Earth-warriors outcome used by the project.
- [ ] Confirm MK4 Liu Kang ending supports an ending-specific reading that Liu Kang's victory saved Earthrealm/Edenia after Shinnok's destruction, while later Armageddon biography evidence confirms only a broad prior defeat of Shinnok.
- [ ] Confirm repeated protagonist endings across adjacent games do not count as independent later primary confirmation merely because the same attribution appears more than once.
- [ ] Confirm no new `canon` Fact names Liu Kang as the exact MKII, MK3, or MK4 individual victor.
- [ ] Confirm no ending-only attribution is silently folded into an Event participant list or causal edge.
- [ ] Confirm no schema or validator change was introduced.

## Documentation / readiness

- [ ] Confirm `LORE_MODEL.md` records the reusable rule that repeated ending portrayals do not by themselves promote an exact attribution to canon.
- [ ] Confirm `ROADMAP.md` records PR #22 as merged and this audit as the active slice.
- [ ] Confirm `CHANGELOG.md` describes the evidence-audit outcome rather than claiming a new canon victor.
- [ ] Confirm changed-file scope is limited to Source records and owning documentation/manual files.
- [ ] Run final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
