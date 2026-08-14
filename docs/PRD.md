# Product Requirements Document — Mortal Kombat Universe

## 1. Product vision

Mortal Kombat Universe is a source-aware, navigable history and knowledge graph of Mortal Kombat lore.

The product should answer not only **what happened**, but also:

- which continuity it happened in;
- what caused it and what followed;
- which characters, factions, and realms were involved;
- which identity a character held at that time;
- whether a claim is canon, supplemental, retconned, alternate, unconfirmed, or gameplay-only;
- which source supports the claim;
- how related assertions compare across Original, Reboot, and New Era continuities;
- whether a difference is merely value/timeline variation or is actually documented as a retcon.

The goal is not to reproduce a wiki. The goal is to make Mortal Kombat's complicated continuity understandable as an explorable system.

## 2. Product principles

### Continuity first

No timeline-dependent claim should be displayed as universally true. Original, Reboot, and New Era remain independently inspectable.

### Evidence first

Important claims should be traceable to sources. `Fact` is the smallest source-aware assertion.

### Causality over chronology alone

Chronological proximity does not create a causal edge.

### Variation is not automatically contradiction or retcon

Two facts in the same subject/predicate family can differ because they belong to different continuities, alternate portrayals, valid time-dependent states, multi-valued predicates, or uncertain evidence. The UI must not call value variation a contradiction or retcon unless the data supports that stronger interpretation.

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

A character page should answer who the person is in the selected continuity, identities, important events, sourced facts, relationships, and differences across timelines.

### Event dossier

An event page should show timeline, participants, realms, known causes, consequences, associated facts, and evidence.

### Story-chain causality

`/causality` presents connected within-continuity causal chains from root event(s) to terminal event(s), highlights `You are here`, and keeps chronology distinct from causal edges. Explicit reset/rewrite bridges remain valid model data but are excluded from ordinary continuity trees.

### Claim history and retcons

`/claims` should help a reader inspect families of related sourced assertions across franchise history.

The claim-history view must:

- group facts by shared subject + predicate from structured data rather than hard-coded tables;
- treat that grouping as an inspection aid, not a contradiction claim;
- show subject and predicate being compared;
- show timeline scope and canon status for every claim record;
- show source evidence for every claim record;
- distinguish value variation, cross-continuity agreement, alternate portrayals, canon-status variation, and explicit retcon evidence without conflating them;
- treat source year as chronology/context, not proof that the newest source is automatically correct;
- avoid inventing contradiction/supersession semantics that the current model does not contain;
- link back to ordinary fact dossiers and official sources.

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

## 7. Current milestone — Phase 4: Claim history, retcons, and evidence

Phases 1–3 proved the lore model, timeline-first reading, and whole-chain causality. Phase 4 now tests whether the existing `Fact + Source + canonStatus + timelineIds` model can explain related, changing, or conflicting portrayals without prematurely adding contradiction-specific schema.

Current outputs:

- dedicated `/claims` workbench;
- generated claim families grouped by `subject + predicate`;
- evidence-safe family labels such as value variation, cross-continuity agreement, alternate portrayal, canon-status variation, and retcon evidence;
- claim records with timeline scope, canon status, notes, and evidence;
- source-year ordering when known;
- search and dossier/source navigation;
- Phase 4 manual verification;
- no `contradicts`, `supersedes`, retcon entity, or citation-locator schema until a real sourced case proves the need.

Detailed status and acceptance criteria live in `docs/ROADMAP.md`.

## 8. Current non-goals

Do not:

- add the entire roster merely to increase record count;
- label every cross-continuity difference or value variation as a retcon;
- assume a newer source automatically supersedes an older one;
- infer contradiction from differing values without continuity/source/time-state context;
- add `contradicts` / `supersedes` fields only because they seem useful in theory;
- invent missing source dates or evidence locators;
- render the entire universe as one force-directed graph;
- introduce a graph database solely for visualization;
- introduce authentication or a CMS/admin editor;
- introduce SQLite as primary storage;
- hard-code lore conclusions in React to compensate for missing structured evidence.

## 9. Future capabilities

Likely capabilities after Phase 4 include:

- explicit contradiction/supersession relations if real lore cases prove them necessary;
- chapter/scene/page/timestamp evidence locators if work-level sources become insufficient;
- dedicated timeline-reset transition UX;
- cosmology and ancient-history expansion;
- systematic Original, Reboot, and New Era expansion;
- richer graph infrastructure only if real usage proves it necessary.

## 10. Definition of done

A feature or lore expansion is not done only because it renders.

Relevant changes must satisfy:

- data validates;
- timelines remain correctly scoped;
- ordinary causal edges remain inside one timeline and cross-timeline edges are explicit reset/rewrite bridges;
- important lore claims have evidence;
- claim-family grouping does not promote mere value/timeline variation into contradiction or retcon semantics;
- contradictions are not silently flattened;
- source chronology is not presented as canonical priority;
- UI remains navigable and accessible;
- implementation follows `AGENTS.md`;
- product/domain documentation is updated when contracts change;
- `CHANGELOG.md` is updated when notable;
- relevant manual verification is performed;
- `pnpm check` passes.
