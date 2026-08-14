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

### Preserve field semantics

Do not overload structural fields to express a different domain concept. In particular, Event `realmIds` represents location/realm scope. If a realm is the object of conquest, liberation, creation, destruction, or merging, that assertion belongs in a sourced Fact.

## 3. Target experience

### Universe explorer

Users can browse/search Characters, Events, Realms, Factions, Timelines, Facts, and Sources.

### Character dossier

A character page should answer who the person is in the selected continuity, identities, important events, sourced facts, relationships, and differences across timelines.

### Event dossier

An event page should show timeline, participants, realm scope, known causes, consequences, associated facts, and evidence.

### Story-chain causality

`/causality` presents connected within-continuity causal chains from root event(s) to terminal event(s), highlights `You are here`, and keeps chronology distinct from causal edges. Explicit reset/rewrite bridges remain valid model data but are excluded from ordinary continuity trees.

### Claim history and retcons

`/claims` helps a reader inspect families of related sourced assertions across franchise history.

The claim-history view must:

- group facts by shared subject + predicate from structured data rather than hard-coded tables;
- treat that grouping as an inspection aid, not a contradiction claim;
- show subject and predicate being compared;
- show timeline scope and canon status for every claim record;
- show source evidence for every claim record;
- distinguish value variation, cross-continuity agreement, alternate portrayals, canon-status variation, and explicit retcon evidence without conflating them;
- treat source year as chronology/context, not proof that the newest source is automatically correct;
- avoid inventing contradiction/supersession semantics that the current model does not contain;
- link back to ordinary fact dossiers and source records.

### Ancient-history reading

Phase 5 data should let readers move from cosmology into ancient political history without losing source strength or continuity scope. The UI should support:

- unique beings and collective actors without fake duplicate Characters;
- changing divine/political status through Facts and Events;
- realm conquest/liberation through sourced realm-target Facts;
- ending-only details with conservative canon status;
- intentional gaps where chronology exists but direct causality is not yet modeled.

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
3. official game manuals and official Mortal Kombat / NetherRealm / WB material;
4. official supplemental material with clear continuity;
5. secondary references only as research aids or preservation mirrors when primary evidence cannot be directly recovered.

A preservation URL may host the evidence, but the Source record must identify the original primary work rather than treating the mirror as canonical authority.

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

## 7. Current milestone — Phase 5: Cosmology and ancient history

Phases 1–4 are complete and merged. Phase 5 expands the evidence model from character-scale continuity into the oldest Original-continuity history before comparing later cosmological and character reinterpretations.

Merged Phase 5 foundation includes:

- Deception creation cosmology with One Being and Elder Gods;
- Factions as valid Event participants;
- `game_manual` as a source category;
- Onaga / Shao Kahn / Shujinko story slices;
- Shinnok fall, banishment, and Netherrealm rulership;
- strict separation of `realmIds` location/scope from realm creation/output claims.

Current Edenia / Outworld slice adds:

- Kitana, Sindel, and Jerrod Original-continuity records;
- Shao Kahn's Edenian conquest and Sindel marriage history from Mortal Kombat Trilogy biography evidence;
- Edenia's later liberation from Deadly Alliance Kitana biography evidence;
- ending-only Jerrod family details as `supplemental` rather than automatically canonical;
- realm-target Facts for conquest/liberation while Event `realmIds` remains location/scope;
- no direct conquest → liberation causal edge until the intervening history is explicitly represented.

Detailed status and acceptance criteria live in `docs/ROADMAP.md` and `docs/PHASE5_MANUAL_VERIFICATION.md`.

## 8. Current non-goals

Do not:

- add the entire roster merely to increase record count;
- label every cross-continuity difference or value variation as a retcon;
- assume a newer source automatically supersedes an older one;
- infer contradiction from differing values without continuity/source/time-state context;
- add `contradicts` / `supersedes` fields only because they seem useful in theory;
- invent missing source dates or evidence locators;
- promote a character ending into canonical story outcome merely because it contains useful lore detail;
- use Event `realmIds` as a hidden action-object or output field;
- render the entire universe as one force-directed graph;
- introduce a graph database solely for visualization;
- introduce authentication or a CMS/admin editor;
- introduce SQLite as primary storage;
- hard-code lore conclusions in React to compensate for missing structured evidence.

## 9. Future capabilities

Likely capabilities after the current Phase 5 slices include:

- Great Kung Lao / Goro / Shang Tsung pre-1992 tournament history;
- scoped comparison of Deception cosmology against MK11-era Titan/Kronika cosmology;
- scoped Original/Reboot/New Era Sindel comparison through claim history;
- explicit contradiction/supersession relations only if real lore cases prove them necessary;
- chapter/scene/page/timestamp evidence locators if work-level sources become insufficient;
- dedicated timeline-reset transition UX;
- systematic Original, Reboot, and New Era expansion;
- richer graph infrastructure only if real usage proves it necessary.

## 10. Definition of done

A feature or lore expansion is not done only because it renders.

Relevant changes must satisfy:

- data validates;
- timelines remain correctly scoped;
- ordinary causal edges remain inside one timeline and cross-timeline edges are explicit reset/rewrite bridges;
- important lore claims have evidence;
- source strength is represented conservatively;
- claim-family grouping does not promote mere value/timeline variation into contradiction or retcon semantics;
- contradictions are not silently flattened;
- source chronology is not presented as canonical priority;
- realm-target semantics are represented by Facts rather than overloaded Event metadata;
- UI remains navigable and accessible;
- implementation follows `AGENTS.md`;
- product/domain documentation is updated when contracts change;
- `CHANGELOG.md` is updated when notable;
- relevant manual verification is performed;
- `pnpm check` passes.
