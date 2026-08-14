# Phase 2 Manual Verification — Timeline-first UX

After pulling `agent/timeline-first-ux`, run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then verify the product as a reader, not only as a developer.

## 1. Character reading flow

Open **Bi-Han**.

- [ ] The page feels like a dossier/story view rather than a raw entity dump.
- [ ] `Compare all`, `Original Timeline`, `Reboot Timeline`, and `New Era` are visible where applicable.
- [ ] Selecting one continuity immediately limits chronology, facts, and relationships to that continuity.
- [ ] Switching continuity does not kick you back to the index.

Repeat with **Hanzo Hasashi**, **Kuai Liang**, **Raiden**, and **Liu Kang**.

## 2. Compare-all mode

With Bi-Han open, choose `Compare all`.

- [ ] Each continuity appears as its own comparison card.
- [ ] Event and fact counts differ where the dataset differs.
- [ ] Clicking a comparison card enters that continuity.
- [ ] The comparison does not imply that all identities/states existed simultaneously.

Note: comparison quality is intentionally limited by current data coverage. If a card says `No identity summary yet`, that is a data gap, not a rendering failure.

## 3. Story chronology

For each Bi-Han continuity:

### Original

- [ ] Hanzo death/return, Bi-Han death, and Noob-related events appear in sensible order.
- [ ] Tournament chronology is not presented as the causal reason Bi-Han dies.

### Reboot

- [ ] Hanzo resurrection, Bi-Han death, and Bi-Han resurrection as Noob appear in sensible order.
- [ ] Quan Chi-related edges do not leak into Original when Original is selected.

### New Era

- [ ] Khaos Reigns Noob transformation is visible.
- [ ] The UI does not invent a normal character relationship to Titan Havik where the model currently stores him only as sourced literal context.

## 4. Deep links

Open Bi-Han, select `Reboot Timeline`, and press **Copy deep link**.

- [ ] The copied URL contains `entity=bi-han` and `timeline=reboot`.
- [ ] Opening that URL in a fresh tab restores Bi-Han + Reboot directly.
- [ ] `Compare all` removes the timeline query parameter while retaining the entity.
- [ ] Going back to the index removes the entity query parameter.

Also test manually entering a URL with an invalid `entity` or `timeline`. The app should ignore invalid values rather than crash.

## 5. Connections vs chronology

- [ ] The right-side Connections card contains entity relationships, not a duplicate event list.
- [ ] Chronological events live in the Story chronology card.
- [ ] Clicking an event opens the event detail page.
- [ ] Clicking a relationship target opens the correct entity.

The purpose of this separation is to reduce the previous "warehouse of everything" feeling.

## 6. Evidence flow

From a character fact:

`character → fact → source`

- [ ] Evidence links remain clickable.
- [ ] Source pages still show facts that cite them.
- [ ] Timeline filtering still applies when navigating into and back out of source/event pages.

## 7. Responsive layout

Check desktop and a narrow mobile viewport.

- [ ] Continuity buttons wrap without horizontal overflow.
- [ ] Timeline comparison cards stack cleanly.
- [ ] Story chronology line/dots remain readable.
- [ ] Long event names and source names do not overflow.
- [ ] Copy deep-link button remains reachable.

## 8. Product judgment

After browsing for several minutes, answer these manually:

- [ ] Does a character now feel like something you can **read**, rather than merely inspect?
- [ ] Is chronology more useful than the previous flat dependency list?
- [ ] Is `Compare all` useful, or does it need a more explicit side-by-side facts/identity table?
- [ ] Would you naturally want the next step to be a visual cause → event → consequence graph?

Record any friction before Phase 3. Real usage should determine whether we add timeline tabs, stronger generated summaries, or a richer comparison model.
