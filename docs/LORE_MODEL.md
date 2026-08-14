# Lore Model

This document explains how Mortal Kombat lore should be represented in the repository.

## 1. Separation of concerns

The model separates entities, events, facts, relationships, sources, and timelines. Do not overload one entity type to perform another type's job.

## 2. Fact as the evidence unit

A `Fact` is the smallest independently sourced and scoped assertion. Prefer several narrow facts over one paragraph-like fact.

Every important Fact should declare:

- `subjectId`;
- a narrow `predicate`;
- `objectId` or literal `value` when appropriate;
- `timelineIds`;
- `canonStatus`;
- one or more `sourceIds`.

## 3. Events are occurrences, not evidence

An Event describes an occurrence in one timeline. Facts establish sourced assertions about what happened.

Use:

- `participantIds` for involved **Characters or Factions**;
- `realmIds` for locations/realm scope;
- `causeEventIds` only when a causal connection is defensible;
- `consequenceEventIds` for supported outcomes.

Phase 5 expanded participant validation from Character-only to `Character | Faction`. The concrete case is the Deception creation account: the **Elder Gods collectively** act in the event that shatters the One Being. Modeling that actor as one fake Character would distort the lore, while omitting it would lose an essential participant. The same rule is reusable for wars, clans, armies, and other collective actors.

Sequence alone does not prove causality. Ordinary causal links connect events in the same timeline. Cross-timeline causal links are reserved for explicit reset/rewrite bridges whose source event creates or rewrites the following continuity; the validator recognizes `reset`, `rewrite`, and `timeline-bridge` source-event tags.

## 4. Relationships are graph projections

`Relationship` exists for navigation and graph traversal. Meaningful lore claims should be backed by Facts where possible. Do not treat Relationship as evidence by itself.

## 5. Identity handling

Prefer stable person entities such as `bi-han`, `kuai-liang`, and `hanzo-hasashi`. Identities such as Sub-Zero, Scorpion, and Noob Saibot are normally timeline-scoped Facts rather than duplicate Characters.

## 6. Transformation and state changes

Deaths, resurrections, corruption, revenant/wraith states, ascensions, and similar changes are best represented as Events plus Facts. Avoid putting all historical states into a static Character description.

## 7. Timeline discipline

Current top-level continuity scopes are:

- `original`
- `reboot`
- `new-era`

Never infer that a fact from one continuity applies to another. Use separate Facts when details differ materially. An Event belongs to one timeline. Cross-timeline comparison is presentation over scoped data, not merged canon.

The Reboot `hourglass-reset` → `liu-kang-new-era` edge is an explicit reset/rewrite bridge and remains outside ordinary within-continuity story trees.

## 8. Retcons and contradictions

When a later source contradicts an older portrayal:

1. preserve the older useful claim;
2. scope it correctly;
3. mark it `retconned` only when defensible;
4. add the newer claim separately;
5. do not rewrite history to hide the contradiction.

Claim-family grouping by `subject + predicate` is an inspection aid, not an automatic contradiction relation. Different values may reflect time-dependent or multi-valued predicates.

## 9. Source discipline

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex;
3. official Mortal Kombat / NetherRealm / WB material;
4. clearly scoped official supplemental material;
5. secondary mirrors/research aids when primary material cannot be directly recovered.

When a primary work is only accessible through a preservation mirror, the Source record must identify the primary work honestly. Do not present the mirror itself as the canonical authority.

## 10. Source granularity

The current schema stores sources mostly at work-level granularity. Add chapter/scene/page/timestamp/quote locators only when real evidence review proves they are necessary.

## 11. Causal graph guidance

Only encode causal edges supported by lore. Event `order` is chronology context and never manufactures parent/child edges.

The Kamidogu warning in Shujinko's Deception biography is therefore currently represented as a Fact: misuse can merge the realms and reawaken the One Being. We do not invent a separate causal event chain until the actual event sequence is modeled from sourced material.

## 12. Cosmology modeling

Phase 5 begins with the Original-continuity creation account in Mortal Kombat: Deception.

Current choices:

- `One Being` is represented as a unique non-playable `Character`/being because Character is currently the reusable entity class for unique agents/beings, playable or not.
- `Elder Gods` is represented as a `Faction` because the source describes a collective actor.
- individual realms remain `Realm` entities.
- the shattering is an `Event`.
- statements about the Kamidogu and creation are `Fact` records with source evidence.

Do **not** project this Deception account automatically into Reboot or New Era. Later Titan/Kronika cosmology must be added with its own scoped evidence and compared rather than silently reconciled.

The One Being is a deliberate stress test for whether `Character` remains semantically acceptable for unique cosmic beings. Do not add a `CosmicEntity` type until additional real cases prove the existing class materially harms navigation or meaning.

## 13. Model-evolution rule

Before modifying a schema or validator rule, answer:

- What real sourced example cannot be represented cleanly?
- Why do existing fields fail?
- Is the change reusable beyond one case?
- How do existing records migrate?
- How will validation enforce the new rule?
- Which product/domain docs must change?

Never weaken validation merely to make incorrect data pass.

## 14. Proven stress cases and current pressure

Proven cases include:

- stable characters carrying different identities across continuities;
- sourced death/resurrection/transformation chains;
- whole-chain causality without chronology-derived edges;
- explicit reset/rewrite bridges;
- claim-family comparison without inventing contradiction semantics;
- Factions acting as Event participants, proven by the Elder Gods in Deception cosmology.

Current pressure points include:

- alternate-timeline character variants such as Titan Havik;
- branch merges/DAG visualization;
- dedicated timeline-reset presentation;
- whether unique cosmic beings eventually justify a more specific entity type;
- whether Kamidogu and other important objects eventually justify a first-class Artifact entity;
- how Deception cosmology compares with MK11-era Titan/Kronika cosmology without flattening the difference.

Do not add new schema merely because these concepts exist. Add it when a concrete sourced slice cannot be represented or navigated cleanly with the current model.
