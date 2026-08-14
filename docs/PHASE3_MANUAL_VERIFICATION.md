# Phase 3 Manual Verification — Focused Causality

This checklist verifies that the causality workbench helps a reader answer **why did this happen?** and **what did this lead to?** without confusing chronology with causality.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then open `/causality`.

## 1. First impression

- [ ] The page feels like a focused causal explanation, not a second generic entity index.
- [ ] The center event is visually dominant.
- [ ] `Why?` and `What next?` are immediately understandable without lore expertise.
- [ ] Empty cause/consequence sides look intentional rather than broken.

## 2. Re-centering

Using a continuity with existing causal links:

- [ ] Click a cause node; it becomes the new center event.
- [ ] Click a consequence node; it becomes the new center event.
- [ ] The left/right neighbors update consistently.
- [ ] Re-centering never changes continuity implicitly.

## 3. Timeline isolation

Switch Original / Reboot / New Era.

- [ ] No event from another continuity appears as a causal neighbor.
- [ ] Switching timeline chooses a valid focus event in that continuity.
- [ ] A timeline with few causal links remains usable and does not invent missing edges.
- [ ] The workbench does not imply that similarly named events across timelines are the same occurrence.

## 4. Chronology is not causality

This is the highest-value conceptual check.

- [ ] An event does not get an arrow merely because its `order` is immediately before/after the focused event.
- [ ] Every visible causal arrow corresponds to `causeEventIds` / `consequenceEventIds` in the JSON data.
- [ ] The first Mortal Kombat tournament is not reintroduced as a cause of Bi-Han's death solely because of chronology.
- [ ] Events with no explicit causal link remain absent from the graph neighborhood even when they are nearby in story order.

## 5. Bi-Han / Hanzo stress case

### Original

Verify the existing graph can express at least the supported chain around:

`Hanzo dies → Hanzo returns as Scorpion → Scorpion kills Bi-Han → Bi-Han becomes Noob Saibot`

- [ ] Each step can be reached by repeatedly clicking consequence nodes where the data contains the link.
- [ ] No unsupported Quan Chi transformation edge appears for Original Bi-Han.

### Reboot

- [ ] Reboot nodes remain separate from Original nodes.
- [ ] Bi-Han's death and Noob resurrection chain is navigable where explicit links exist.
- [ ] Quan Chi-related causal meaning is not inferred from ordinary relationship edges unless represented as event causality.

## 6. Dossier integration

From the focused event:

- [ ] `Open full event dossier` opens the correct event with the same timeline selected.
- [ ] Participant links open the correct character dossier and preserve timeline scope.
- [ ] The global `Explorer / Causality` switch remains reachable without covering important content.

## 7. Responsive layout

Check desktop and narrow/mobile widths.

- [ ] Desktop reads naturally left → center → right.
- [ ] Mobile stacks without horizontal overflow.
- [ ] Event titles and long descriptions wrap safely.
- [ ] Bottom-right mode navigation does not obscure controls or graph content.

## 8. Product decision after review

Answer these before Phase 3 is considered complete:

- Does this focused representation answer causal questions better than the old dependency list?
- Do we need multi-hop expansion on one screen, or is click-to-recenter sufficient?
- Do relationship edges belong in the same visual graph, or would mixing them make causality less trustworthy?
- Is a dedicated graph library justified yet?

Do **not** introduce React Flow, Cytoscape, a graph database, or a new causal schema solely because a richer graph is theoretically possible. Let this manual test demonstrate the missing interaction first.
