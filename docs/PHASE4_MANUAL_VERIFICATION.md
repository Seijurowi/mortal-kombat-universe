# Phase 4 Manual Verification — Claim History and Retcons

This checklist verifies that `/claims` makes related portrayals and evidence easier to inspect **without inventing contradictions or retcons**.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then open `/claims`.

## 1. First impression

- [ ] The page reads as claim/evidence history, not another generic entity list.
- [ ] It is immediately clear that a `Claim family` is grouped for inspection and does not itself assert contradiction.
- [ ] The selected family clearly identifies the subject and predicate being compared.
- [ ] Search can find families by subject, predicate, or displayed value.
- [ ] When search hides the previously selected family, the detail pane switches to a visible result or the empty state.

## 2. Family semantics

Use families that demonstrate different shapes in the current data.

- [ ] `Cross-continuity agreement` is used when the same displayed value is recorded across multiple continuities.
- [ ] `Value variation` is used cautiously and is not described as confirmed contradiction.
- [ ] A multi-valued/time-dependent predicate such as `uses_identity` does not get described as contradictory merely because one subject has multiple values.
- [ ] `Alternate portrayal present` requires an underlying fact explicitly marked `alternate`.
- [ ] `Canon-status variation` describes status differences without implying that one fact replaced another.
- [ ] `Retcon evidence present` requires an underlying fact explicitly marked `retconned`.

## 3. Retcon status

Where the dataset contains a fact explicitly marked `retconned`:

- [ ] The individual fact visibly shows `retconned`.
- [ ] The family says retcon evidence is present without claiming every fact in the family is retconned.
- [ ] The UI does not infer which newer fact supersedes the older one unless the data/source context actually establishes it.

If the current seed contains no useful real `retconned` fact family, record that as **data pressure**, not a reason to fabricate one.

## 4. Source chronology

- [ ] Claim records with known source years are ordered chronologically.
- [ ] Missing source years are not invented.
- [ ] The page explicitly explains that source-year order is evidence-history context, not canonical priority.
- [ ] A newer source is not visually described as automatically more canonical or authoritative merely because it is newer.
- [ ] Source name, game/year when available, and official URL remain inspectable.

## 5. Evidence navigation

- [ ] `Official source` opens the intended external source in a new tab where a URL exists.
- [ ] `Open fact dossier` opens the exact underlying Fact.
- [ ] Timeline state is preserved when a timeline-specific Fact is opened.
- [ ] Facts without source URLs still show their source identity instead of disappearing from evidence history.

## 6. Grouping semantics

The current comparison key is `subject + predicate`.

- [ ] Families produced by this key are useful as inspection groups.
- [ ] The UI does not claim that every fact in a family is mutually exclusive.
- [ ] If a concrete family is too coarse or misleading, document that exact case before proposing schema changes.

Do not add `contradicts`, `supersedes`, retcon IDs, or claim-family IDs merely because they might be useful eventually. First capture the real failing lore case.

## 7. Canon-status distinctions

- [ ] `canon`, `supplemental`, `retconned`, `alternate`, `unconfirmed`, and `gameplay_only` remain visibly distinct.
- [ ] `alternate` is not presented as synonymous with retconned.
- [ ] `unconfirmed` is not presented as false.
- [ ] `supplemental` is not silently promoted to primary canon.

## 8. Responsive UX

Check desktop and narrow/mobile widths.

- [ ] Claim-family list and selected history remain usable.
- [ ] Long predicates, fact IDs, notes, and source names wrap safely.
- [ ] The bottom-right Explorer / Causality / Claims navigation does not cover important controls.
- [ ] External-source and fact-dossier links remain easy to activate.

## 9. Product decision after review

Answer these before Phase 4 is considered complete:

- Does `subject + predicate` grouping reveal useful franchise-history families without overstating their semantics?
- Do we have a real sourced case that requires explicit `contradicts` or `supersedes` links?
- Is `canonStatus: retconned` sufficient for current data, or do we need a relation between old/new claims?
- Do work-level Sources provide enough evidence precision, or has a real case proven the need for chapter/scene/page/timestamp locators?
- Should a future retcon registry show only explicit retcons, while `/claims` remains the broader claim-family/evidence view?

The correct outcome of this phase may be **no schema change yet**. That is preferable to encoding speculative semantics before the data proves the need.
