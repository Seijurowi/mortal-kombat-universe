# Phase 4 Manual Verification — Claim History and Retcons

This checklist verifies that `/claims` makes changing portrayals and evidence easier to inspect **without inventing retcons or contradictions**.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then open `/claims`.

## 1. First impression

- [ ] The page reads as claim/evidence history, not another generic entity list.
- [ ] It is immediately clear that `Continuity divergence` does **not** mean confirmed retcon.
- [ ] The selected group clearly identifies the subject and predicate being compared.
- [ ] Search can find groups by subject, predicate, or displayed value.

## 2. Continuity divergence

Use a claim that appears in more than one timeline.

- [ ] Each version shows its own timeline scope.
- [ ] Differing values across Original / Reboot / New Era are not automatically labelled retconned.
- [ ] A group with no `retconned` fact explicitly says it is scoped divergence rather than proof of replacement.
- [ ] Similar claims from different continuities remain separately inspectable.

## 3. Retcon status

Where the dataset contains a fact explicitly marked `retconned`:

- [ ] The individual fact visibly shows `retconned`.
- [ ] The group says retcon evidence is present without claiming every fact in the group is retconned.
- [ ] The UI does not infer which newer fact supersedes the older one unless the data/source context actually establishes it.

If the current seed contains no useful real `retconned` fact group, record that as **data pressure**, not a reason to fabricate one.

## 4. Source chronology

- [ ] Versions with known source years are ordered chronologically.
- [ ] Missing source years are not invented.
- [ ] A newer source is not visually described as automatically more canonical or authoritative merely because it is newer.
- [ ] Source name, game/year when available, and official URL remain inspectable.

## 5. Evidence navigation

- [ ] `Official source` opens the intended external source in a new tab where a URL exists.
- [ ] `Open fact dossier` opens the exact underlying Fact.
- [ ] Timeline state is preserved when a timeline-specific Fact is opened.
- [ ] Facts without source URLs still show their source identity instead of disappearing from evidence history.

## 6. Grouping semantics

The current comparison key is `subject + predicate`.

- [ ] Groups produced by this key are actually useful to compare.
- [ ] No group combines semantically unrelated claims merely because a predicate is too broad.
- [ ] If a concrete group is misleading, document that exact case before proposing schema changes.

Do not add `contradicts`, `supersedes`, retcon IDs, or claim-family IDs merely because they might be useful eventually. First capture the real failing lore case.

## 7. Canon-status distinctions

- [ ] `canon`, `supplemental`, `retconned`, `alternate`, `unconfirmed`, and `gameplay_only` remain visibly distinct.
- [ ] `alternate` is not presented as synonymous with retconned.
- [ ] `unconfirmed` is not presented as false.
- [ ] `supplemental` is not silently promoted to primary canon.

## 8. Responsive UX

Check desktop and narrow/mobile widths.

- [ ] Claim list and selected history remain usable.
- [ ] Long predicates, fact IDs, notes, and source names wrap safely.
- [ ] The bottom-right Explorer / Causality / Claims navigation does not cover important controls.
- [ ] External-source and fact-dossier links remain easy to activate.

## 9. Product decision after review

Answer these before Phase 4 is considered complete:

- Does `subject + predicate` grouping reveal useful franchise-history changes?
- Do we have a real sourced case that requires explicit `contradicts` or `supersedes` links?
- Is `canonStatus: retconned` sufficient for current data, or do we need a relation between old/new claims?
- Do work-level Sources provide enough evidence precision, or has a real case proven the need for chapter/scene/page/timestamp locators?
- Should a future retcon registry show only explicit retcons, while `/claims` remains the broader divergence/evidence view?

The correct outcome of this phase may be **no schema change yet**. That is preferable to encoding speculative semantics before the data proves the need.
