# Product Requirements Document — Mortal Kombat Universe

## 1. Product vision

Mortal Kombat Universe is a source-aware, navigable history and knowledge graph of Mortal Kombat lore.

The product should answer not only **what happened**, but also:

- which continuity it happened in;
- what caused it;
- what it caused next;
- which characters, factions, and realms were involved;
- which identity a character held at that time;
- whether a claim is canon, supplemental, retconned, alternate, unconfirmed, or gameplay-only;
- which source supports the claim;
- how the same subject differs across Original, Reboot, and New Era continuities.

The goal is not to reproduce a wiki. The goal is to make Mortal Kombat's complicated continuity understandable as an explorable system.

## 2. Product principles

### Continuity first

No timeline-dependent claim should be displayed as universally true. Original, Reboot, and New Era must remain independently inspectable.

### Evidence first

Important claims should be traceable to sources. `Fact` is the smallest source-aware assertion.

### Causality over chronology alone

Chronological proximity does not create a causal edge. The product should distinguish story order from explicit `cause → event → consequence` relationships.

### Data before presentation

Lore lives in `data/`, not React components or generated prose. UI views are generated from the knowledge model.

### Contradictions are data

Retcons, alternate versions, and unresolved contradictions should remain visible rather than silently reconciled.

### Prove model changes with real lore

Do not expand schemas because a field seems theoretically useful. Add or change a schema only when a real sourced lore case cannot be represented cleanly.

## 3. Target experience

### Universe explorer

Users can browse/search Characters, Events, Realms, Factions, Timelines, Facts, and Sources.

### Character dossier

A character page should answer who the person is in the selected continuity, their identities, important events in chronological order, sourced facts, relationships, and differences across timelines.

### Event dossier

An event page should show timeline, participants, realms, known causes, known consequences, associated facts, and evidence.

### Timeline comparison

Comparison must be generated from structured data rather than hard-coded lore tables.

### Focused causality

Users should be able to focus one event and see:

`explicit causes → focused event → explicit consequences`

The causal view must:

- never infer arrows from event order alone;
- keep timelines isolated;
- allow click-to-recenter navigation;
- link back to ordinary event/character dossiers;
- keep ordinary relationship edges separate unless future usage proves that combining them improves understanding;
- avoid a universe-wide graph by default.

## 4. Canon model

Supported canon statuses:

- `canon`
- `supplemental`
- `retconned`
- `alternate`
- `unconfirmed`
- `gameplay_only`

## 5. Source hierarchy

Prefer:

1. canonical game story / narrative;
2. official in-game bios/codex;
3. official Mortal Kombat / NetherRealm / WB material;
4. official supplemental material with clear continuity;
5. secondary references only as research aids when primary evidence cannot be recovered.

## 6. Data architecture

Canonical editable store:

```text
data/
  characters/
  events/
  realms/
  factions/
  timelines/
  relationships/
  facts/
  sources/
```

Contracts live in `schema/`; runtime/presentation live in `app/`, `components/`, and `lib/`.

JSON remains the source of truth. SQLite or graph indexes may later be generated as derived infrastructure if scale proves the need.

## 7. Current milestone — Phase 3: Causality and focused graph

Phase 1 proved the lore model. Phase 2 made continuity-specific character reading useful. Phase 3 now proves that the existing event model can answer causal questions directly.

Current outputs:

- dedicated `/causality` workbench;
- continuity selector;
- focused cause/event/consequence layout;
- click-to-recenter causal navigation;
- dossier links preserving timeline scope;
- manual verification that chronology-only neighbors never become arrows;
- no schema change or graph library unless manual usage proves a concrete need.

Detailed status and acceptance criteria live in `docs/ROADMAP.md`.

## 8. Current non-goals

Do not:

- add the entire roster merely to increase record count;
- render the entire universe as one force-directed graph;
- introduce a graph database solely for visualization;
- mix ordinary relationship edges with causal edges by default;
- infer causality from chronology;
- introduce authentication or a CMS/admin editor;
- introduce SQLite as primary storage;
- hard-code narrative prose in React to compensate for missing structured lore.

## 9. Future capabilities

Likely milestones after Phase 3 include:

- retcon / contradiction explorer;
- richer source/evidence views;
- cosmology and ancient-history expansion;
- systematic Original, Reboot, and New Era expansion;
- richer graph infrastructure only if focused graph usage proves it necessary.

## 10. Definition of done

A feature or lore expansion is not done only because it renders.

Relevant changes must satisfy:

- data validates;
- timelines remain correctly scoped;
- important lore claims have evidence;
- contradictions are not silently flattened;
- causal arrows represent explicit causal data, not chronology;
- UI remains navigable and accessible;
- implementation follows `AGENTS.md`;
- product/domain documentation is updated when contracts change;
- `CHANGELOG.md` is updated under `Unreleased` when notable;
- relevant manual verification is performed;
- `pnpm check` passes.
