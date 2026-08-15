# Phase 3 Manual Verification — Story Chains / Causality Regression

This checklist began as the Phase 3 acceptance suite and now serves as a **regression checklist** for `/causality`. Later Phase 5 work extended the original implementation with a separate chronology rail and proven multi-parent/DAG merge rendering.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Open `/causality`.

## 1. Orientation

- [ ] The page reads as a story-chain explorer, not a flat event index.
- [ ] The active causal component names its causal start(s) and causal end(s).
- [ ] The selected event is clearly marked `You are here` while wider context remains visible.
- [ ] Root/terminal badges are phrased as **causal** starts/ends rather than implying timeline endpoints.
- [ ] The total number of unique events in the active component is understandable.

## 2. Chronology is independently readable

- [ ] A dedicated chronology/story-order representation lists each event exactly once in order.
- [ ] Chronology can be followed without reading the causal tree depth-first.
- [ ] Raw Event `order` remains chronology context, not causal evidence.
- [ ] A chronological neighbor does not become a parent/child merely because its order is adjacent.
- [ ] Events in the same chronology may remain in different/disconnected causal components.

## 3. Whole causal topology

Using a continuity with existing causal links:

- [ ] Events are connected only from explicit `causeEventIds` / `consequenceEventIds`.
- [ ] Clicking an event changes focus/highlight without collapsing the whole component into a three-node-only view.
- [ ] Branches visually descend from the event that causes them.
- [ ] A malformed causal cycle cannot recurse forever; expansion stops safely with a visible cycle note.
- [ ] No chronology-only link is introduced merely to make one continuous tree.

## 4. Multi-parent / DAG merge regression

Use the Original-continuity second Outworld tournament as the proven merge case.

- [ ] `Second Mortal Kombat tournament in Outworld` has both supported causal parents in the local `Why?` view.
- [ ] The whole tree does **not** render that one Event as two independent full occurrences.
- [ ] One deterministic branch renders the full shared node; additional parent branches use an explicit `Merges into …` reference.
- [ ] The merge reference is selectable/navigable enough to understand what node it joins.
- [ ] Correct lore edges are not removed merely to simplify rendering.

## 5. Multiple causal components

Where a timeline contains disconnected causal components:

- [ ] The user sees separate story-chain/component choices rather than one fabricated super-chain.
- [ ] Each component identifies what it causally starts with and leads to.
- [ ] Selecting another component focuses a valid root/event in that component.
- [ ] Independent components are never joined because their chronology is close.

## 6. Timeline isolation and reset bridges

Switch Original / Reboot / New Era.

- [ ] No ordinary causal tree contains events from another continuity.
- [ ] Switching timeline chooses a valid component/root for that continuity.
- [ ] A timeline with few causal links remains usable and does not invent missing edges.
- [ ] Similarly named events across timelines are not presented as the same occurrence.
- [ ] The Reboot `hourglass-reset → liu-kang-new-era` link remains valid model data but is not folded into either ordinary continuity tree.
- [ ] `pnpm validate` rejects arbitrary cross-timeline causal edges unless the source event is explicitly tagged as a reset/rewrite bridge (`reset`, `rewrite`, or `timeline-bridge`).

## 7. Chronology-versus-causality proof cases

- [ ] The first Mortal Kombat tournament is not treated as the cause of Bi-Han's death solely because of chronology.
- [ ] Great Kung Lao/Goro/Shang Tsung temporal association remains disconnected where no causal language exists.
- [ ] `Shao Kahn breaches Earthrealm` and later soul-taking remain chronologically ordered without a manufactured direct causal edge.
- [ ] Shao Kahn's later defeat can appear after the invasion in chronology while remaining causally disconnected from the last modeled invasion Event.

## 8. Local close-up

- [ ] `Why?` shows only immediate parent event(s) of `You are here` within the active timeline/component.
- [ ] `What next?` shows only immediate child event(s).
- [ ] Multi-parent Events show all immediate supported parents locally even though the whole-tree renderer deduplicates the shared node.
- [ ] Clicking either side updates focus without losing whole-component orientation.

## 9. Dossier integration

- [ ] `Open full event dossier` opens the correct event with the same timeline selected.
- [ ] Participant links open the correct Character/Faction dossier and preserve timeline scope.
- [ ] Explorer / Causality navigation remains reachable.

## 10. Responsive layout

Check desktop and narrow/mobile widths.

- [ ] The chronology rail remains readable/scrollable without destructive layout overflow.
- [ ] Causal branch indentation remains usable on mobile.
- [ ] Event titles and descriptions wrap safely.
- [ ] `Causal start`, `You are here`, `Causal end`, moment, and merge indicators remain understandable at narrow widths.

## 11. Product boundary

Do not introduce React Flow, Cytoscape, a graph database, or a new causal schema merely because richer diagrams are possible. The current UI should evolve only when larger real chains prove the need.

Possible future pressure remains dedicated reset/rewrite visualization and graph scalability—not basic multi-parent support, which is now a proven capability.
