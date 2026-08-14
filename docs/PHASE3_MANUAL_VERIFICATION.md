# Phase 3 Manual Verification — Story Chains

This checklist verifies that the causality workbench helps a reader understand **where a story chain starts, what happens next, where it branches, and where the reader currently is** without confusing chronology with causality.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then open `/causality`.

## 1. Orientation first

- [ ] The page feels like a story-chain explorer, not a flat event index.
- [ ] The active chain clearly names its `Starts with` event(s).
- [ ] The active chain clearly names its `Ends with` event(s).
- [ ] The total number of events in the chain is visible.
- [ ] The selected event is clearly marked `You are here` while the whole chain remains visible.
- [ ] Root events are visibly marked `Start`; terminal events are visibly marked `End`.

## 2. Whole-chain tree

Using a continuity with existing causal links:

- [ ] Events are shown as a connected vertical tree from root toward consequences.
- [ ] Clicking any event changes only the focus/highlight; it does not collapse the reader back into a three-node-only view.
- [ ] Branches are visually indented from the event that causes them.
- [ ] If two causal branches merge into one event, the UI does not silently invent a second distinct event.
- [ ] A malformed causal cycle cannot cause infinite recursive rendering; expansion stops with a visible cycle note.

## 3. Moment / chronology context

- [ ] Every tree node with known ordering shows a readable moment/position indicator.
- [ ] Raw event `order` remains available as story-order context.
- [ ] Moment ordering helps answer “when in this chain does this happen?” without claiming that numerical adjacency itself is causality.

## 4. Multiple chains in one continuity

Where a timeline contains disconnected causal components:

- [ ] The user sees separate `Story chains in this continuity` cards instead of one undifferentiated event list.
- [ ] Each chain card says what it starts with and what it leads to.
- [ ] Selecting another chain focuses its root and displays that chain only.
- [ ] Independent chains are never joined merely because their event orders are close.

## 5. Timeline isolation

Switch Original / Reboot / New Era.

- [ ] No event from another continuity appears anywhere in the tree.
- [ ] Switching timeline chooses a valid chain/root in that continuity.
- [ ] A timeline with few causal links remains usable and does not invent missing edges.
- [ ] Similarly named events across timelines are not presented as the same occurrence.

## 6. Chronology is not causality

This remains the highest-value conceptual check.

- [ ] An event does not become a parent/child merely because its `order` is immediately before/after another event.
- [ ] Every visible tree branch corresponds to explicit `causeEventIds` / `consequenceEventIds` data.
- [ ] The first Mortal Kombat tournament is not reintroduced as a cause of Bi-Han's death solely because of chronology.
- [ ] Chronological events outside the causal component remain absent from the tree.

## 7. Bi-Han / Hanzo stress case

### Original

Verify the whole chain can visibly express:

`Hanzo dies → Hanzo returns as Scorpion → Scorpion kills Bi-Han → Bi-Han becomes Noob Saibot`

- [ ] The start of the chain is visible without clicking backward repeatedly.
- [ ] The final Noob event is visible without clicking forward repeatedly.
- [ ] Selecting the middle Bi-Han death event marks `You are here` while both earlier and later steps remain visible.
- [ ] No unsupported Quan Chi transformation edge appears for Original Bi-Han.

### Reboot

- [ ] Reboot chain(s) remain completely separate from Original.
- [ ] Bi-Han's death and Noob resurrection are visible in their wider causal context where explicit links exist.
- [ ] Quan Chi-related meaning is not inferred from ordinary relationship edges unless represented as event causality.

## 8. Local close-up

The local cause/effect panel remains secondary to the whole tree.

- [ ] `Why?` shows only immediate parent event(s) of `You are here`.
- [ ] `What next?` shows only immediate child event(s).
- [ ] Clicking either side updates `You are here` in the tree without losing whole-chain orientation.

## 9. Dossier integration

- [ ] `Open full event dossier` opens the correct event with the same timeline selected.
- [ ] Participant links open the correct character dossier and preserve timeline scope.
- [ ] The global Explorer / Causality switch remains reachable without obscuring important content.

## 10. Responsive layout

Check desktop and narrow/mobile widths.

- [ ] The vertical tree remains readable on both desktop and mobile.
- [ ] Branch indentation does not create destructive horizontal overflow on mobile.
- [ ] Event titles and long descriptions wrap safely.
- [ ] `Start`, `You are here`, `End`, and moment badges remain understandable at narrow widths.

## 11. Product decision after review

Answer these before Phase 3 is considered complete:

- Does the whole-chain tree solve the “where does this event chain start?” problem?
- Are branching and merging understandable with the current simple tree rendering?
- Do we eventually need a true 2D graph for highly branching chains, or is the vertical story tree preferable for reading?
- Should non-causal chronological milestones ever appear as muted context between causal nodes, or would that weaken trust in the graph?

Do **not** introduce React Flow, Cytoscape, a graph database, or a new causal schema solely because a richer diagram is theoretically possible. Let larger real chains demonstrate the need first.
