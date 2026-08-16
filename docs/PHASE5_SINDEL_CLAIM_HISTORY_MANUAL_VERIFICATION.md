# Phase 5 — Sindel claim-history manual verification

Use this checklist for the Original / Reboot / New Era Sindel comparison. These boxes are a repeatable human procedure, not live completion state; `ROADMAP.md` owns current status.

## Short maintainer test cases

1. **Open `/claims?q=Sindel`** — the search should already be filtered to Sindel-related claim families.
2. **Royal-role family** — expect `has_royal_role` to show Original `Queen of Edenia`, Reboot `Shao Kahn's Empress`, and New Era `Empress of Outworld`; it must be labelled value variation rather than retcon evidence.
3. **Jerrod spouse family** — expect `spouse_of = Jerrod` across all three continuities. Original remains `supplemental`; Reboot and New Era are `canon`. The family should expose both cross-continuity agreement and canon-status variation.
4. **Jerrod killer family** — expect Original Deception dialogue to attribute Jerrod's death to Shao Kahn at `canon` strength and Reboot Aftermath to attribute it to Sindel at `canon` strength. The UI must present value variation, not claim one continuity automatically supersedes the other.
5. **New Era murder boundary** — expect a separate New Era `was_murdered = true` Fact with no invented killer. Do not backfill Shao Kahn or Sindel into MK1 merely to complete the comparison.
6. **Source provenance** — MK11 Aftermath and MK1 transcript mirrors must be described as access infrastructure rather than canonical authority; the source button must not call every external URL an official source.
7. **Mobile / navigation** — claim-family cards and source cards should remain readable on a narrow viewport; Fact dossier links should retain the correct timeline.

## Evidence and continuity discipline

- [ ] Confirm `Sindel` and `Jerrod` are stable Character entities spanning the continuities in which the new Facts reference them.
- [ ] Confirm Original, Reboot, and New Era Facts each declare only their own timeline scope.
- [ ] Confirm no Fact is marked `retconned` solely because a different continuity records another value.
- [ ] Confirm the MK3 Sindel-ending spouse detail remains `supplemental`; the ending supports Jerrod as Sindel's husband but is not used as the killer source.
- [ ] Confirm Deception's Edenia Konquest dialogue directly supports `Jerrod killed_by Shao Kahn` in Original continuity.
- [ ] Confirm Aftermath directly supports Jerrod as Sindel's first husband, Sindel as Shao Kahn's Empress, and Sindel as Jerrod's killer in Reboot continuity.
- [ ] Confirm MK1 directly supports Sindel as Empress of Outworld, Jerrod as her late husband, and Jerrod having been murdered.
- [ ] Confirm MK1 evidence used here does not identify Jerrod's killer and the data does not invent one.
- [ ] Confirm Deception material supports Sindel's Original-continuity Queen of Edenia role.

## Claim-history behavior

- [ ] Open `/claims?q=Sindel` and confirm the URL query initializes the visible search field.
- [ ] Confirm `has_royal_role` has three records across three timelines and three source-specific displayed values.
- [ ] Confirm the role family explanation says value variation is not itself contradiction or retcon proof.
- [ ] Confirm `spouse_of` has one displayed value across three timelines while preserving different canon statuses on individual records.
- [ ] Confirm the spouse family label/explanation explicitly exposes cross-continuity agreement plus status variation.
- [ ] Confirm `Jerrod / killed_by` shows the two canon actor values and remains a comparison family, not an automatic supersession relation.
- [ ] Confirm evidence-history ordering remains year-based context only and does not imply that the newest source wins.
- [ ] Confirm source links display the neutral label `Source`, since transcript/preservation mirrors are not official sites.

## Model and regression

- [ ] Confirm no schema/entity-type change was introduced.
- [ ] Confirm no `contradicts` / `supersedes` relation was introduced.
- [ ] Confirm `/claims` still behaves correctly for pre-existing retcon, alternate, value-variation, and same-value families.
- [ ] Confirm `/cosmology` and `/causality` are unchanged by the Sindel slice.
- [ ] Run the broad Phase 5 regression checklist because shared claim-history presentation changed.
- [ ] Review `CHANGELOG.md`, `ROADMAP.md`, and `docs/README.md` ownership/status wording.
- [ ] Run the final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
