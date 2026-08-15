# Product Requirements Document — Mortal Kombat Universe

## 1. Product vision

Mortal Kombat Universe is a source-aware, navigable history and knowledge graph of Mortal Kombat lore.

The product should answer not only **what happened**, but also:

- which continuity it happened in;
- what caused it and what merely happened before/after it;
- which characters, factions, and realms were involved;
- which identity a character held at that time;
- whether a claim is canon, supplemental, retconned, alternate, unconfirmed, or gameplay-only;
- which source supports the claim;
- how related assertions compare across Original, Reboot, and New Era continuities;
- whether a difference is mere variation, an alternate portrayal, uncertainty, or actually documented as a retcon.

The goal is not to reproduce a wiki. The goal is to make Mortal Kombat's complicated continuity understandable as an explorable, evidence-aware system.

## 2. Product principles

### Continuity first

No timeline-dependent claim should be displayed as universally true. Original, Reboot, and New Era remain independently inspectable.

### Evidence first

Important claims should be traceable to sources. `Fact` is the smallest source-aware assertion.

### Causality is not chronology

Chronological proximity, adjacent `order` values, or phrases such as “after” and “during this period” do not create a causal edge unless the source establishes the causal relation.

The product must let a reader understand chronology **without requiring fake causal links**.

### Intention is not occurrence

A plan, threat, prophecy, possibility, or intended outcome establishes that intention—not that the described event happened. Occurrences require their own evidence.

### Broad confirmation stays broad

Later primary material may establish a broad historical outcome while leaving narrower attribution unresolved. If a later source says “Earth warriors defeated Shao Kahn,” the product must not silently upgrade that into “Liu Kang defeated Shao Kahn” without separate corroboration.

### Variation is not automatically contradiction or retcon

Two facts in the same subject/predicate family can differ because they belong to different continuities, alternate portrayals, valid time-dependent states, multi-valued predicates, or uncertain evidence. The UI must not call value variation a contradiction or retcon unless the data supports that stronger interpretation.

### Data before presentation

Lore lives in `data/`, not React components or generated prose. UI views are generated from the knowledge model.

### Contradictions remain inspectable

Retcons, alternate versions, and unresolved contradictions should remain visible rather than silently reconciled.

### Prove model changes with real lore

Do not expand schemas because a field seems theoretically useful. Add or change a schema only when a real sourced lore case cannot be represented cleanly.

### Preserve field semantics

Do not overload structural fields to express a different domain concept. In particular, Event `realmIds` represents location/realm scope. If a realm is the object of conquest, liberation, creation, destruction, or merging, that assertion belongs in a sourced Fact.

### Documentation has owners

Short-lived implementation status belongs in `docs/ROADMAP.md`, not duplicated across PRD, README, AGENTS, manuals, and changelog. Stable product/domain rules belong in their owning documents as defined by `docs/README.md`.

## 3. Target experience

### Universe explorer

Users can browse/search Characters, Events, Realms, Factions, Timelines, Facts, Relationships, and Sources.

### Character dossier

A character page should answer who the person is in the selected continuity, identities, important events, sourced facts, relationships, and differences across timelines.

### Event dossier

An event page should show timeline, participants, realm scope, known causes, consequences, associated facts, and evidence.

### Story chronology and causality

`/causality` must make two different questions readable:

1. **When did events happen?** — through a chronology/story-order representation where each event appears once.
2. **What caused what?** — through explicit causal topology only.

The view should:

- present connected within-continuity causal components;
- highlight `You are here` without removing the surrounding chain;
- keep chronology independently readable;
- support real multi-parent/DAG events without rendering one occurrence as duplicate full events;
- retain immediate `Why? / What next?` context;
- exclude reset/rewrite bridges from ordinary within-continuity trees while preserving them as valid model data.

### Claim history and retcons

`/claims` helps a reader inspect families of related sourced assertions across franchise history.

The claim-history view must:

- group facts by shared subject + predicate from structured data rather than hard-coded tables;
- treat grouping as an inspection aid, not a contradiction claim;
- show subject and predicate being compared;
- show timeline scope and canon status for every claim record;
- show source evidence for every claim record;
- distinguish value variation, cross-continuity agreement, alternate portrayals, canon-status variation, and explicit retcon evidence without conflating them;
- treat source year as chronology/context, not proof that the newest source is automatically correct;
- avoid inventing contradiction/supersession semantics that the current model does not contain;
- link back to ordinary fact dossiers and source records.

### Ancient-history reading

Phase 5 data should let readers move from cosmology into ancient political history and tournament-era history without losing source strength or continuity scope. The UI/model should support:

- unique beings and collective actors without fake duplicate Characters;
- changing divine/political status through Facts and Events;
- realm conquest/liberation through sourced realm-target Facts;
- ending-only details with conservative canon status;
- later primary confirmation of narrower ending outcomes without canonizing an ending wholesale;
- plans separated from later confirmed occurrences;
- qualified states such as apparent death remaining visibly weaker than confirmed death;
- named places without automatically inferring a broader Realm;
- parallel causal components and intentional gaps where chronology exists but causality is not established;
- multi-parent events when different sourced causes converge on one occurrence.

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

A later primary source may clarify or confirm an earlier claim without automatically superseding it.

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

Current top-level entity types remain:

- Character
- Event
- Realm
- Faction
- Timeline
- Relationship
- Source
- Fact

Do not introduce new entity types until a concrete sourced/navigation case proves the existing model materially insufficient.

## 7. Milestone model

Phases 1–4 established the character identity model, timeline-first reading, story-chain causality, and claim-history/evidence UX.

Phase 5 stress-tests the same product/model at larger historical scale: cosmology, ancient rulers, realms, tournament history, long causal gaps, later-primary corroboration, and DAG merges.

**The authoritative list of completed slices, active work, next slices, and acceptance status lives in `docs/ROADMAP.md`.** This PRD intentionally does not duplicate active branch names or slice checklists.

## 8. Current non-goals

Do not:

- add the entire roster merely to increase record count;
- label every cross-continuity difference or value variation as a retcon;
- assume a newer source automatically supersedes an older one;
- infer contradiction from differing values without continuity/source/time-state context;
- add `contradicts` / `supersedes` fields only because they seem useful in theory;
- invent missing source dates or evidence locators;
- promote a character ending into canonical story outcome merely because it contains useful lore detail;
- infer that a plan occurred without separate occurrence evidence;
- strengthen a broad later confirmation into a narrower named-victor claim;
- use Event `realmIds` as a hidden action-object or output field;
- infer a Realm solely from a named local place or participant allegiance;
- render the entire universe as one force-directed graph;
- introduce a graph database solely for visualization;
- introduce authentication or a CMS/admin editor;
- introduce SQLite as primary storage;
- hard-code lore conclusions in React to compensate for missing structured evidence.

## 9. Future capabilities

Potential future capabilities include:

- systematic Original, Reboot, and New Era event expansion;
- scoped comparison of Deception cosmology against MK11-era Titan/Kronika cosmology;
- scoped Original/Reboot/New Era Sindel comparison through claim history;
- explicit contradiction/supersession relations only if real lore cases prove them necessary;
- chapter/scene/page/timestamp evidence locators if work-level sources become insufficient;
- dedicated timeline-reset transition UX;
- richer multiverse/variant modeling if Titan/alternate variants prove the current identity model insufficient;
- a first-class Artifact entity if Kamidogu and other objects need independent navigation/history;
- richer graph/index infrastructure only if real usage proves it necessary.

These are model pressure points, not commitments. `docs/ROADMAP.md` decides what is actually next.

## 10. Definition of Done

A feature or lore expansion is not done only because it renders or because CI is green.

The authoritative repository-wide completion/readiness gate is [`DEFINITION_OF_DONE.md`](./DEFINITION_OF_DONE.md). Substantive work must satisfy that gate before a PR is marked ready for review.

The DoD combines technical quality with the parts automation cannot prove: evidence discipline, continuity/canon correctness, causal and Realm semantics, UX trustworthiness, documentation ownership, changelog review, relevant manual verification, final-head CI, and explicit human/user merge authority.
