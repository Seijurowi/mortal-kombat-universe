# Phase 5 — Onaga return and post-Deception fate manual verification

Use this checklist for the Original-continuity Onaga return/post-Deception slice. These boxes are a repeatable human procedure, not live completion state; `ROADMAP.md` owns current status.

## Quick maintainer test cases

These are the short manual checks to run first when reviewing the PR UI.

1. **Onaga return / host body**
   - Open Onaga in Original continuity and follow the return-era Event/Fact links.
   - Expect: Reptile is visible as Onaga's host body and the claim is `canon` from later corroboration.
   - Must not say: the full Deadly Alliance dragon-egg/energy sequence is independently confirmed canon in every detail.
2. **Deception defeat + Nightwolf binding**
   - Open `/causality` in Original continuity around the Deception events.
   - Expect: `Shujinko defeats Onaga` and `Nightwolf binds Onaga's soul in the Netherrealm` occupy the same story moment and remain separate causal components.
   - Must not show: `Shujinko defeats Onaga → Nightwolf binds Onaga` as a causal arrow.
3. **Onaga soul state**
   - Open Onaga/Nightwolf facts and sources after the Deception defeat.
   - Expect: Nightwolf imprisoned/bound Onaga's soul in the Netherrealm.
   - Must not say: Shujinko permanently destroyed Onaga's soul.
4. **Armageddon return**
   - Follow `Shinnok frees Onaga from the Netherrealm → Onaga awakens in his original body`.
   - Expect: this one causal edge is present because Onaga's biography explicitly supplies the sequence.
   - Must not infer: a Realm for the awakening itself when the source does not establish one.
5. **Source-strength sanity check**
   - Open the Reptile and Nightwolf Deception-era ending Sources plus later Armageddon biographies.
   - Expect: endings remain identifiable as ending evidence; later bios are used only to promote the narrower outcomes they actually corroborate.

## Source and continuity

- [ ] Filter/read the Original continuity only; no Reboot or New Era Onaga/cosmology claim is projected into this slice.
- [ ] Open the Mortal Kombat: Deadly Alliance Reptile ending Source and confirm it is described as primary in-game ending material accessed through a preservation mirror, not as MKWarehouse canon authority.
- [ ] Confirm the Reptile ending's dragon-egg/energy transformation remains ending-level detail rather than being promoted wholesale to canonical mechanism.
- [ ] Open the Mortal Kombat: Armageddon Shujinko biography Source and confirm it establishes Reptile as the body left after Onaga's host collapses and says Shujinko allowed Onaga to return.
- [ ] Confirm Shujinko's wording about purging Onaga's soul is not presented as permanent soul destruction, because Onaga's Armageddon biography later describes the soul as bound in the Netherrealm.
- [ ] Open the Mortal Kombat: Deception Nightwolf ending Source and confirm the binding-symbol ritual is preserved as ending evidence.
- [ ] Open the Mortal Kombat: Armageddon Nightwolf biography Source and confirm Nightwolf later directly says he imprisoned Onaga's soul.
- [ ] Open the Mortal Kombat: Armageddon Onaga biography Source and confirm it directly supports host-body expulsion, Netherrealm binding, Shinnok's release, and awakening in Onaga's original body.

## Events, chronology, and causality

- [ ] Confirm `Onaga returns in Reptile's host body` appears after the current Deadly Alliance-era chronology and uses Reptile + Onaga as participants.
- [ ] Confirm the return Event has no structured Realm because the sources used here do not establish a Realm for the physical host transformation/return.
- [ ] Confirm `Shujinko shatters the Kamidogu` and `Shujinko defeats Onaga` were moved from their old early Phase 5 placeholder order into the post-Deadly-Alliance Deception chronology.
- [ ] Confirm shattering the Kamidogu remains the explicit cause of Shujinko's defeat Event because the Deception ending directly says the shattering weakened Onaga before Shujinko attacked him.
- [ ] Confirm the broad Fact `Shujinko allowed Onaga to return` does not create a synthetic `gathers Kamidogu → Onaga returns` causal edge.
- [ ] Confirm `Nightwolf binds Onaga's soul in the Netherrealm` and `Shujinko defeats Onaga` share the same story order/moment, while remaining causally disconnected; Onaga describes the outside force acting simultaneously with the final blow, not the final blow causing the binding.
- [ ] Confirm Nightwolf + Onaga are the binding Event participants and `netherrealm` is the Event Realm.
- [ ] Confirm `Shinnok frees Onaga from the Netherrealm` has Shinnok + Onaga as participants and `netherrealm` as its Realm.
- [ ] Confirm Shinnok's release explicitly leads to `Onaga awakens in his original body`.
- [ ] Confirm the awakening Event keeps `realmIds` empty because the biography does not establish a structured Realm for where Onaga's original body awakens.

## Facts and evidence strength

- [ ] Confirm `inhabited_host_body = Reptile` is canon because later Armageddon material corroborates the older ending's narrower host-body outcome.
- [ ] Confirm `enabled_return_of = Onaga` remains a broad Shujinko responsibility Fact and does not claim which exact quest action physically caused the return.
- [ ] Confirm `imprisoned_soul_of = Onaga` is canon for Nightwolf from later Armageddon confirmation.
- [ ] Confirm `freed_from_netherrealm = Onaga` is canon for Shinnok from Onaga's Armageddon biography.
- [ ] Confirm `returned_to_original_body = true` is canon for Onaga and does not import Sindel's Deception ending as the canonical restoration mechanism.
- [ ] Confirm no Fact/Event says Onaga's soul was destroyed after Deception.
- [ ] Confirm no schema change, `contradicts`, or `supersedes` relation was introduced for this slice.

## Regression and readiness

- [ ] Check `/causality` in Original continuity: the Deception events appear in chronology without a fabricated Shujinko-defeat → Nightwolf-binding edge.
- [ ] Check Onaga, Reptile, Nightwolf, Shinnok, and Shujinko dossiers/source links for correct Original-continuity navigation.
- [ ] Check narrow/mobile rendering for the newly longer Onaga chronology/source text.
- [ ] Run the broad Phase 5 regression checklist if shared chronology/model behavior was affected.
- [ ] Review `CHANGELOG.md` and `ROADMAP.md` ownership/status wording.
- [ ] Run the final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review.
- [ ] Confirm final-head `pnpm check` is green before Ready for review.
