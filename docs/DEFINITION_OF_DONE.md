# Definition of Done

This document defines when a substantive Mortal Kombat Universe change is **ready to be considered complete**.

It is the repository-wide completion gate. `AGENTS.md` defines how contributors work; `PRD.md` defines the product; `LORE_MODEL.md` defines domain semantics; `ROADMAP.md` defines current status; this document defines **what must be true before a change is done**.

A green build or a rendered page is not enough.

## 1. Applicability

Apply this Definition of Done to every substantive pull request, including:

- lore/data expansions or corrections;
- model/schema/validator changes;
- reader-visible product or UX changes;
- source/evidence-policy changes;
- contributor-workflow or architecture changes;
- documentation changes that materially alter the project contract.

For a narrow typo/formatting-only change, some sections may be not applicable. Do not manufacture work merely to satisfy an irrelevant checklist item.

## 2. Scope and intent are correct

Before a PR is ready:

- the change matches the intended slice/feature and does not silently expand scope;
- unrelated lore, UI, schema, or documentation is not rewritten opportunistically;
- the implementation does not introduce speculative architecture or schema solely because it may be useful later;
- any deliberate scope boundary or deferred follow-up is understandable from the PR and/or `ROADMAP.md`.

## 3. Lore and evidence are defensible

For lore-heavy changes:

- every important `Fact` has source evidence and correct timeline scope;
- claims use the narrowest defensible canon status;
- primary material is preferred according to `LORE_MODEL.md` / `AGENTS.md` source discipline;
- preservation mirrors are described as access infrastructure, not canonical authority;
- source wording is not strengthened beyond what it establishes;
- a plan, threat, prophecy, intention, or possibility is not promoted into a completed occurrence without separate occurrence evidence;
- qualified states such as `apparent death`, `believed dead`, or `missing` are not promoted into stronger death/transformation claims without evidence;
- later broad confirmation is not strengthened into narrower named-actor/victor attribution without direct corroboration;
- ending-only evidence is not treated as wholesale canonical history merely because a narrower outcome is later confirmed;
- continuity-specific material is not projected into another continuity without independent evidence.

If evidence is ambiguous, prefer a narrower Fact, weaker status, intentional gap, or explicit uncertainty over a stronger synthetic narrative.

## 4. Model and graph semantics are correct

For data/model changes:

- JSON/entity records satisfy their schemas;
- all references resolve to allowed entity types;
- every Event belongs to its declared timeline;
- ordinary causal edges remain within one timeline unless they are explicit reset/rewrite bridges;
- `causeEventIds` / `consequenceEventIds` are mirrored;
- chronology or adjacent `order` values do not manufacture causality;
- temporal wording such as `after`, `before`, or `during this period` is treated as chronology/context unless causality is actually established;
- Event `realmIds` means location/scope only;
- realm creation, conquest, liberation, merging, destruction, or similar action-object claims use sourced Facts rather than overloading `realmIds`;
- a named local place or participant affiliation does not automatically establish a broader Realm mapping;
- historical identities, titles, offices, divine states, reigns, and changing faction membership are not flattened into timeless metadata when the history is stateful;
- one real multi-parent occurrence remains one Event rather than duplicated occurrences.

Any schema or validator change must be justified by a concrete sourced case, be reusable beyond one record, and update the relevant model documentation.

## 5. Product and UX remain trustworthy

For reader-visible changes:

- the UI presents structured data rather than hiding lore conclusions in React code;
- timeline selection/filtering remains correct after navigation;
- chronology and causality remain distinguishable;
- disconnected causal components remain visibly disconnected instead of being joined for visual neatness;
- multi-parent/DAG events do not appear as duplicate occurrences;
- canon/evidence status remains understandable;
- claim-history UI does not promote value variation into contradiction or retcon without evidence;
- links navigate to the intended entity/timeline;
- loading, empty, long-content, and narrow/mobile states remain usable where affected;
- semantic controls, keyboard behavior, focus behavior, and accessibility are preserved for affected UI.

A visually attractive result is not done if it makes the lore less precise.

## 6. Documentation ownership is satisfied

Review the ownership map in `docs/README.md` and update only the documents whose contracts actually changed:

- `PRD.md` — stable product requirements/principles;
- `LORE_MODEL.md` — stable domain semantics and proven model decisions;
- `ROADMAP.md` — live milestone status, completed slices, active work, next work;
- `AGENTS.md` — contributor/agent execution rules;
- `DEFINITION_OF_DONE.md` — completion/readiness gate;
- `CHANGELOG.md` — material history;
- manual verification documents — repeatable human checks;
- README files — onboarding/navigation.

Do not duplicate short-lived branch/slice status into multiple durable documents. `ROADMAP.md` owns live status.

Durable decisions must not exist only in chat, commit messages, or PR descriptions.

## 7. Changelog is reviewed

For every substantive PR:

- review `docs/CHANGELOG_POLICY.md`;
- update `CHANGELOG.md` under `Unreleased` when the PR materially changes product/UX, lore/data, domain semantics, contributor workflow, architecture, or security;
- keep entries outcome-oriented and consolidated rather than mirroring every changed JSON/file;
- do not use the changelog as a backlog or live-status document.

A PR may legitimately need no changelog entry only when the policy says the change is non-notable (for example typo-only or behavior-neutral formatting/refactoring).

## 8. Automated quality gates pass

Before a substantive PR is ready, the final PR head must pass:

```bash
pnpm validate
pnpm lint
pnpm typecheck
pnpm build
pnpm check
```

`pnpm check` is the repository-wide required quality gate and must succeed on the **actual final head**, not only on an earlier commit before review fixes.

Do not weaken validation merely to make incorrect data pass.

A green CI run proves technical consistency, not lore/evidence accuracy or good UX.

## 9. Human verification is complete where needed

Automation cannot prove source interpretation, continuity interpretation, causal interpretation, evidence sufficiency, or whether the reading experience is understandable.

Before a lore-heavy/model-heavy/major-UX PR is ready:

- run the relevant manual checklist(s) indexed in `docs/README.md`;
- manually inspect the highest-risk new/changed paths in the UI;
- verify source-sensitive wording and continuity boundaries;
- verify causal gaps/branches/merges where affected;
- record any material review correction in the data/docs/PR body as appropriate.

A quick visual pass may be sufficient for low-risk incremental UI/data additions, but it does not replace a focused review when the PR changes domain rules, evidence strength, schema, causality, or shared UX behavior.

## 10. Final review has no unresolved blockers

Before marking a substantive PR ready:

- perform a final review against `AGENTS.md`, `LORE_MODEL.md`, this Definition of Done, and the relevant manual checklist;
- resolve all known correctness blockers;
- ensure the PR description matches the final implementation rather than an earlier draft design;
- ensure the changed-file scope is expected;
- ensure `ROADMAP.md` reflects the correct live state when the PR changes milestone/slice status;
- rerun CI after the last material review correction.

If a review discovers that the initial model was too strong, correct the model rather than defending the implementation for consistency with an earlier plan.

## 11. Ready for review is not merged

`Ready for review` means the branch satisfies this Definition of Done and can be merged **after the required human/user decision**.

It does not mean an agent should merge automatically.

For this repository:

- do not merge a PR unless the user/maintainer explicitly asks for or performs the merge;
- after a user reports a merge, verify the actual merged PR state and actual merge commit before branching subsequent work;
- never treat GitHub's provisional `merge_commit_sha` on an open PR as the actual merged commit;
- start dependent work from the verified merge commit, not from a stale PR head/base assumption.

## 12. Hard blockers

A substantive PR is **not done** if any of the following is true:

- final-head `pnpm check` is failing or has not run;
- a new important Fact lacks evidence/timeline scope;
- continuity has been silently flattened;
- source language has been materially strengthened without support;
- chronology has been converted into unsupported causality;
- plan/intention has been converted into occurrence without occurrence evidence;
- a broad confirmation has been converted into an unsupported named actor/victor;
- Event `realmIds` is being used as an action-object/output field;
- references or causal mirrors are invalid;
- a material product/model/workflow change is undocumented in its owning document;
- `CHANGELOG.md` has not been reviewed for a substantive PR;
- required manual verification has not been performed;
- the PR description materially disagrees with the final implementation;
- there is a known unresolved correctness issue being deferred merely to get the PR merged.

## 13. Compact readiness checklist

Use this as the final PR pass:

- [ ] Scope is intentional and focused.
- [ ] Lore claims/evidence/timeline/canon status are defensible.
- [ ] Chronology, causality, participants, and Realm semantics are correct.
- [ ] Schema/model changes (if any) are proven by a concrete reusable case.
- [ ] Affected UX is understandable, accessible, and does not hide lore conclusions.
- [ ] Owning documentation is updated; live status exists only in `ROADMAP.md`.
- [ ] `CHANGELOG.md` has been reviewed/updated when notable.
- [ ] Relevant manual verification is complete.
- [ ] PR description matches the final implementation and review corrections.
- [ ] Changed-file scope is expected.
- [ ] Final-head `pnpm check` is green.
- [ ] No known correctness blocker remains.
- [ ] PR is ready for the explicit human/user merge decision.
