# Phase 5 — Shao Kahn apparent-death manual verification

Use this checklist for the Original-continuity Deadly Alliance-era Shao Kahn death/clone stress test.

## Source / continuity

- [ ] All new lore is scoped to `original` only.
- [ ] Mortal Kombat: Deadly Alliance story/ending material is treated as primary game material; Mortal Kombat Warehouse is described only as preservation/access infrastructure.
- [ ] Mortal Kombat: Deception Shao Kahn and Goro biographies are treated as later primary evidence.
- [ ] No Reboot/New Era Shao Kahn death, clone, or resurrection material is projected into Original continuity.

## First-obstacle attack

- [ ] `The Deadly Alliance springs its first obstacle attack` appears between the elimination plan and Liu Kang's death in Original chronology.
- [ ] The Event records Quan Chi and Shang Tsung as participants but does not encode Shao Kahn as a physical participant because later evidence complicates the attacked figure's identity.
- [ ] The Event has no Realm mapping; `Emperor of Outworld` is not treated as proof of the attack's physical location.
- [ ] The elimination plan has a direct causal edge to the first-obstacle attack because MKDA explicitly presents the attack as execution of the stated plan.
- [ ] The first-obstacle attack does not gain a causal edge to Liu Kang's death merely because it occurs immediately before the Earthrealm confrontation.
- [ ] No Event named or described as a confirmed `Shao Kahn dies` occurrence exists for this scene.

## Retcon / claim history

- [ ] The MKDA Kitana ending is inspectable as the older explicit portrayal that Shao Kahn was dead.
- [ ] `deadly_alliance_era_status = dead` is marked `retconned`, not `canon` or `supplemental`.
- [ ] The Deception Shao Kahn biography directly supports the clone-decoy Fact and escape/survival interpretation.
- [ ] The Deception Goro biography independently confirms that Goro later encountered the real Shao Kahn alive.
- [ ] `deadly_alliance_era_status = survived via clone decoy` is `canon` and appears in the same `/claims` family as the older retconned status.
- [ ] `/claims` labels the family as having retcon evidence because an underlying Fact is actually `retconned`; it does not infer a formal `supersedes` relation that is absent from the schema.
- [ ] Source-year ordering remains evidence-history context rather than a generic newer-source-wins rule.

## Clone attribution discipline

- [ ] `Shao Kahn created a clone decoy before escaping` is a narrow canon Fact supported by Shao Kahn's Deception biography.
- [ ] The project does not assert that Quan Chi or Shang Tsung explicitly killed the clone; the later biography does not say which enemies encountered or killed it.
- [ ] The project does not assert a Shao Kahn resurrection because the later evidence establishes survival, not return from death.
- [ ] The project does not silently turn the MKDA Kitana ending into canonical scene detail beyond preserving its explicit older death portrayal as retconned evidence.

## Regression

- [ ] The prior Deadly Alliance formation → plan chronology-only gap remains unchanged.
- [ ] The plan → Liu Kang death causal edge remains intact.
- [ ] Liu Kang's Earthrealm death Event and Shang Tsung killer/soul-consumer Facts remain unchanged.
- [ ] Existing Phase 4 claim-family semantics still distinguish retcon evidence, canon-status variation, and value variation without inventing contradiction semantics.
- [ ] No schema/validator change was introduced solely for this case.

## Final readiness

- [ ] `CHANGELOG.md` reviewed/updated.
- [ ] `ROADMAP.md` reflects PR #18 as merged and PR #19 as current work from verified merge commit `68da6291f05870187394cddc4912a56afe6ed611`.
- [ ] Final `AGENTS.md` + `LORE_MODEL.md` + `DEFINITION_OF_DONE.md` review performed.
- [ ] MKDA/Deception source wording rechecked after manual UI review.
- [ ] Final-head `pnpm check` is green.
