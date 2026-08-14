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
- `realmIds` for event location/realm scope;
- `causeEventIds` only when a causal connection is defensible;
- `consequenceEventIds` for supported outcomes.

Phase 5 expanded participant validation from Character-only to `Character | Faction`. The concrete case is the Deception creation account: the **Elder Gods collectively** act in the event that shatters the One Being. Modeling that actor as one fake Character would distort the lore, while omitting it would lose an essential participant. The same rule is reusable for wars, clans, armies, and other collective actors.

`realmIds` must not be overloaded as an event-output or action-object field. The One Being review proved this when the creation event initially attached later realms as if they were locations of a pre-realm event. The Edenia conquest slice proves the reusable positive rule: an event may have `realmIds: ["edenia"]` because it occurs in/concerns Edenia, while a sourced Fact such as `Shao Kahn conquered Edenia` uses `objectId: "edenia"` to express Edenia as the object of the claim. Apply the same pattern to liberation, merging, destruction, creation, or similar realm-target assertions.

Sequence alone does not prove causality. Ordinary causal links connect events in the same timeline. Cross-timeline causal links are reserved for explicit reset/rewrite bridges whose source event creates or rewrites the following continuity; the validator recognizes `reset`, `rewrite`, and `timeline-bridge` source-event tags.

## 4. Relationships are graph projections

`Relationship` exists for navigation and graph traversal. Meaningful lore claims should be backed by Facts where possible. Do not treat Relationship as evidence by itself.

## 5. Identity and historical status handling

Prefer stable person entities such as `bi-han`, `kuai-liang`, `hanzo-hasashi`, and `shinnok`. Identities such as Sub-Zero, Scorpion, and Noob Saibot are normally timeline-scoped Facts rather than duplicate Characters.

Do not encode a historical office, rank, divine state, or faction membership as timeless static Character metadata when the lore shows that it changes. Phase 5 proves this with Shinnok: he **was** an Elder God, fell, was banished, and later ruled the Netherrealm. His former Elder God status is therefore a Fact (`former_member_of`) rather than `factionIds: ["elder-gods"]` on the Character.

## 6. Transformation and state changes

Deaths, resurrections, corruption, revenant/wraith states, ascensions, banishments, rulership changes, conquests, and liberations are best represented as Events plus Facts. Avoid putting all historical states into a static Character or Realm description.

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

Arcade/character endings require the same evidence discipline. An ending may preserve important lore detail without proving that the ending's full outcome occurred canonically. In the Edenia slice, Jerrod family details sourced only from Sindel's Mortal Kombat 3 ending are therefore retained as `supplemental`, while Shao Kahn's conquest and Kitana's later liberation use biography evidence and are `canon`.

## 9. Source discipline

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex;
3. official game manuals and official Mortal Kombat / NetherRealm / WB material;
4. clearly scoped official supplemental material;
5. secondary mirrors/research aids when primary material cannot be directly recovered.

When a primary work is only accessible through a preservation mirror, the Source record must identify the primary work honestly. Do not present the mirror itself as the canonical authority.

Phase 5 adds `game_manual` as a first-class Source type after the Mortal Kombat: Deception instruction booklet proved that official manuals are a reusable evidence category rather than generic `other` material.

## 10. Source granularity

The current schema stores sources mostly at work-level granularity. Add chapter/scene/page/timestamp/quote locators only when real evidence review proves they are necessary.

## 11. Causal graph guidance

Only encode causal edges supported by lore. Event `order` is chronology context and never manufactures parent/child edges.

The Kamidogu warning in Shujinko's Deception biography is therefore represented as a Fact: misuse can merge the realms and reawaken the One Being. We do not invent a separate causal event chain until the actual event sequence is modeled from sourced material.

Phase 5 also deliberately keeps Shujinko's `gathers Kamidogu` and later `shatters Kamidogu` events disconnected because the current evidence establishes both story states but does not require a direct causal edge between them.

Likewise, `Shao Kahn conquers Edenia` and the much later `Kitana frees Edenia` remain disconnected causal components for now. The conquest establishes the historical condition that is later reversed, but the dataset does not yet model the long chain of intervening events needed to claim one direct causal edge.

## 12. Cosmology and ancient-history modeling

Phase 5 begins with the Original-continuity creation account in Mortal Kombat: Deception and expands into Onaga, Shinnok, and Edenia/Outworld conquest history.

Current choices:

- `One Being` is represented as a unique non-playable `Character`/being because Character is currently the reusable entity class for unique agents/beings, playable or not.
- `Elder Gods` is represented as a `Faction` because the source describes a collective actor.
- individual realms remain `Realm` entities.
- realm-target claims use Facts; `realmIds` stays event location/scope metadata.
- the shattering is an `Event`.
- statements about the Kamidogu and creation are `Fact` records with source evidence.
- Onaga, Shao Kahn, Shujinko, Shinnok, Lucifer, Sindel, Kitana, and Jerrod remain stable Characters; changes in rulership, allegiance, divine status, conquest, liberation, or banishment are represented through Events and Facts.
- ending-only details may be preserved with conservative `supplemental` status instead of being promoted into biography-level canon.

Do **not** project this Original-continuity material automatically into Reboot or New Era. Later Titan/Kronika cosmology, reboot Shinnok, and later Sindel reinterpretations must be added with their own scoped evidence and compared rather than silently reconciled.

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
- Factions acting as Event participants, proven by the Elder Gods in Deception cosmology;
- official game manuals as a distinct source category;
- historical divine/faction status represented as Facts rather than timeless Character membership, proven by Shinnok;
- realms acting as the object of sourced claims without overloading Event `realmIds`, proven by Edenia conquest/liberation;
- ending-only lore retained conservatively as supplemental evidence rather than automatic canonical history.

Current pressure points include:

- alternate-timeline character variants such as Titan Havik;
- branch merges/DAG visualization;
- dedicated timeline-reset presentation;
- whether unique cosmic beings eventually justify a more specific entity type;
- whether Kamidogu and other important objects eventually justify a first-class Artifact entity;
- how Deception cosmology compares with MK11-era Titan/Kronika cosmology without flattening the difference;
- how Original/Reboot/New Era Sindel portrayals should be compared without treating every changed characterization as one simple retcon.

Do not add new schema merely because these concepts exist. Add it when a concrete sourced slice cannot be represented or navigated cleanly with the current model.
