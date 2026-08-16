# Phase 5 — Deception vs MK11 cosmology manual verification

Use this checklist for the scoped Original-vs-Reboot cosmology comparison. These boxes are a repeatable human procedure, not live completion state; `ROADMAP.md` owns current status.

## Short maintainer test cases

1. **Open `/cosmology`** — two distinct columns should be visible: Original continuity / Mortal Kombat: Deception and Reboot continuity / Mortal Kombat 11.
2. **Check the guardrail** — the page must not say Kronika is the One Being, must not invent a Titan → Elder God → One Being hierarchy, and must not label the two cosmologies as an automatic retcon.
3. **Original column** — One Being / Elder Gods claims should come from existing Original-continuity data and remain scoped to `original`.
4. **Reboot column** — Kronika should be shown as Keeper of Time and Titan from MK11 story evidence, with her history-restart plan kept explicitly as a plan.
5. **Creator-of-existence wording** — the official MK11 promotional claim should visibly carry `supplemental`, not `canon`, and must not be presented as a sourced realm-creation mechanism.
6. **Source drill-down** — Fact/entity links should open the Explorer correctly; official WB links should open externally, while the transcript mirror must be described as access infrastructure rather than authority.
7. **Narrow/mobile** — the two columns should stack cleanly and the bottom navigation should remain usable with the new Cosmology item.

## Source and continuity discipline

- [ ] Confirm the Original column contains only Original-continuity claims.
- [ ] Confirm the Reboot column contains only Reboot-continuity claims.
- [ ] Open the MK11 Story source and confirm it is identified as primary in-game story evidence accessed through a transcript mirror.
- [ ] Confirm the mirror itself is not described as canonical authority.
- [ ] Open the official MK11 launch source and confirm it supports Keeper of Time plus Kronika's rewind/restart objective.
- [ ] Open the official MK11 first-look source and confirm its `creator of existence` wording is preserved as official promotional evidence rather than silently upgraded to stronger in-game cosmology evidence.
- [ ] Confirm no source or Fact claims Kronika and the One Being are the same entity.
- [ ] Confirm no source or Fact invents a hierarchy among Titan, Elder Gods, and One Being.
- [ ] Confirm no cross-continuity value difference is labeled `retconned` solely because the values differ.

## Facts and evidence strength

- [ ] Confirm `Kronika is the Keeper of Time` is `canon` in `reboot`.
- [ ] Confirm `Kronika is a Titan` is `canon` in `reboot`.
- [ ] Confirm `Kronika planned to restart history` remains a plan Fact and is not presented as proof that every intended outcome occurred.
- [ ] Confirm `Kronika had restarted time on countless previous occasions` remains a Reboot-continuity claim and is not projected into Original continuity.
- [ ] Confirm `creator of existence` is `supplemental`, with notes explaining the promotional evidence boundary.
- [ ] Confirm the existing One Being `fragments_formed = the realms` Fact remains broad and is not rewritten to match MK11 terminology.
- [ ] Confirm the existing Kamidogu / One Being reawakening Fact remains Original-only.

## Reader experience

- [ ] Open `/cosmology` directly and confirm both continuity cards render without empty or duplicated facts.
- [ ] Confirm each Fact card shows canon status and its narrow predicate/value.
- [ ] Confirm the source list for each column is derived from the visible Facts' `sourceIds`.
- [ ] Confirm subject links navigate to the correct Explorer entity with the corresponding timeline selected.
- [ ] Confirm Fact links navigate to the correct Fact dossier.
- [ ] Confirm source dossier links and external source links are distinguishable and usable.
- [ ] Confirm the new `Cosmology` global navigation item does not break Explorer, Causality, or Claims navigation.
- [ ] Check desktop and narrow/mobile layouts; columns should stack without horizontal overflow and the floating navigation should remain usable.

## Model and regression

- [ ] Confirm no schema/entity-type change was introduced.
- [ ] Confirm no `contradicts` / `supersedes` relation was introduced.
- [ ] Confirm `/claims` still treats cross-continuity variation as presentation rather than automatic retcon/contradiction.
- [ ] Confirm `/causality` is unchanged by this comparison-only slice.
- [ ] Run the broad Phase 5 regression checklist because global navigation and shared data coverage changed.
- [ ] Review `CHANGELOG.md`, `ROADMAP.md`, and `docs/README.md` ownership/status wording.
- [ ] Run the final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
