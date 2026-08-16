# Lore Model

This document defines how Mortal Kombat lore is represented in the repository. It is a durable domain contract, not a live project-status document. Active work belongs in `ROADMAP.md`.

## 1. Separation of concerns

The model separates entities, events, facts, relationships, sources, and timelines. Do not overload one entity type or field to perform another type's job.

Current top-level entity types:

- `Character`
- `Event`
- `Realm`
- `Faction`
- `Timeline`
- `Relationship`
- `Source`
- `Fact`

JSON under `data/` is the canonical editable lore store.

## 2. Fact is the evidence unit

A `Fact` is the smallest independently sourced and scoped assertion. Prefer several narrow Facts over one paragraph-like claim.

Every important Fact should declare:

- `subjectId`;
- a narrow `predicate`;
- `objectId` or literal `value` where appropriate;
- `timelineIds`;
- `canonStatus`;
- one or more `sourceIds`.

A Fact's source should directly support the narrow assertion whenever possible. Contextual corroboration must not be described as direct proof of a stronger claim.

Supported canon statuses:

- `canon`
- `supplemental`
- `retconned`
- `alternate`
- `unconfirmed`
- `gameplay_only`

Use the narrowest defensible status.

## 3. Events are occurrences, not evidence

An `Event` describes an occurrence in one timeline. Facts establish sourced assertions about what happened.

Use:

- `participantIds` for involved Characters or Factions;
- `realmIds` for event location/realm scope;
- `causeEventIds` only for defensible causal relations;
- `consequenceEventIds` only for defensible causal outcomes;
- `order` for chronology/story ordering, never as automatic causality.

### Participants

Event participants may be `Character | Faction`. Phase 5 proved this with the Elder Gods collectively acting in the One Being shattering event. Do not fabricate a Character for a collective actor merely to satisfy event validation.

Do not insert a named participant merely because a broader source phrase makes that participant likely. If a later source says “Earth warriors defeated Shao Kahn,” that supports Shao Kahn as the defeated subject and a broad victor class; it does not independently identify Liu Kang as the individual victor.

### Realm semantics

`realmIds` means **where the Event occurs / its realm scope**. It is not an action-object or output field.

If a realm is conquered, liberated, merged, created, destroyed, transformed, or otherwise the object of a lore assertion, represent that assertion as a sourced Fact with the Realm in `objectId` where appropriate.

Examples:

- the One Being shattering Event does not attach later realms as if they were locations of a pre-realm event;
- `Shao Kahn conquered Edenia` is a Fact whose object is Edenia;
- `Shang Tsung seeks a second chance` has no Outworld realm scope because MKII establishes the later plan's target, not the plea's location.

A named place is not automatically a Realm mapping. A temple, academy, island, palace, arena, or city does not justify a broader `realmIds` value unless the source or separately established evidence supports that mapping. The MKII Shaolin-temple attack is the concrete proof case.

## 4. Chronology is not causality

Sequence alone never proves cause.

`causeEventIds` / `consequenceEventIds` mean supported causal relation, not:

- “happened shortly before/after”;
- adjacent `order` values;
- “during this period”;
- “years later”;
- broad narrative sequence inside one intro.

Temporal language establishes chronology/context unless the source also supplies the causal link.

Proven examples:

- Goro defeating the Great Kung Lao and Shang Tsung taking control of the tournament occur in the same historical period but remain causally disconnected;
- MKII explicitly frames Shang Tsung's plea to Shao Kahn as a response to first-tournament failure, so that edge is supported;
- MK3 places Shao Kahn's Earthrealm breach before his soul-taking, but the project deliberately does not encode the narrow `breach → soul claim` causal edge merely from adjacent invasion narration;
- later defeat of Shao Kahn remains chronologically after the invasion campaign without inventing an extermination-squads → defeat edge.

Causal gaps are valid data-model outcomes. Do not connect events merely to make a prettier tree.

## 5. Plans, intentions, threats, and prophecies

A plan, intention, threat, prophecy, possibility, or predicted outcome is not evidence that the described occurrence happened.

Model the intention itself, then require separate occurrence evidence before creating or promoting the intended Event as established history.

Concrete case:

- MKII establishes Shang Tsung's plan to lure enemies into Outworld;
- later Mortal Kombat Trilogy story material establishes that Liu Kang and his comrades were actually lured into Outworld for a second tournament.

The source proving a plan may still support a causal edge to a later separately proven occurrence when the later evidence shows the plan was carried out.

## 6. Later-primary confirmation and ending evidence

Character/arcade endings can preserve useful evidence without making every ending detail canonical.

A later primary source may independently treat a narrower ending outcome as established history. In that case the narrower outcome may be promoted to `canon`, while unsupported details remain weaker.

Examples:

- Liu Kang's first-game ending plus later MK4 Goro biography can support the narrower claim that Liu Kang took the title from Goro;
- MKII Liu Kang biography supports the narrower first-tournament-control outcome;
- MK4 story supports that Shao Kahn was defeated by Earth warriors after MK3, but does not by itself establish Liu Kang as the individual victor.

Reusable rule: **broad confirmation stays broad**. Do not strengthen later evidence into a more specific actor, method, death, or causal chain than the source establishes. The same rule applies across continuity comparison: a New Era source saying Jerrod was murdered does not license importing a killer from Original or Reboot evidence.

## 7. Qualified states stay qualified

Do not strengthen source language such as:

- apparent death;
- believed dead;
- missing;
- rumored;
- possibly;
- apparently.

MKII's `Goro's apparent death` is not a confirmed Goro death Fact/Event.

Deaths, resurrections, corruption, revenant/wraith states, ascensions, banishments, rulership changes, and similar state transitions are best represented through scoped Events plus Facts when evidence supports them.

## 8. Identity and historical status

Prefer stable person entities such as `bi-han`, `kuai-liang`, and `hanzo-hasashi`. Do not duplicate a Character merely because a mantle, form, title, allegiance, or state changes.

Represent changing identities/statuses through timeline-scoped Facts and Events unless a future proven requirement introduces a more specific entity/version concept.

Historical status should not be encoded as timeless static metadata when it changes:

- Shinnok's former Elder God status is a Fact, not eternal faction membership;
- Goro's Grand Champion status and undefeated reign are Facts, not permanent Character properties.

A unique non-playable being may currently use `Character` when it is still a single agent/entity in lore. The One Being is the current proof case. Do not add `CosmicEntity` until additional cases show that `Character` materially damages meaning or navigation.

## 9. Relationships are projections

`Relationship` supports navigation/graph traversal. It is not evidence by itself.

Meaningful lore claims should be backed by Facts where possible. Relationship direction matters. Do not derive causal Event edges from ordinary Relationship edges without separate causal evidence.

## 10. Timeline discipline

Current top-level continuity scopes are:

- `original`
- `reboot`
- `new-era`

Never infer that a fact from one continuity applies to another. Cross-continuity comparison is presentation over scoped data, not merged canon.

Ordinary causal edges stay inside one timeline.

The Reboot `hourglass-reset → liu-kang-new-era` edge is a special explicit reset/rewrite bridge. Cross-timeline causal edges require an explicit source-event tag such as `reset`, `rewrite`, or `timeline-bridge` and remain outside ordinary within-continuity story trees.

## 11. Retcons, contradictions, and claim history

Treat retcon, continuity divergence, alternate portrayal, uncertainty, and ordinary time-state change as different concepts.

- Do not call differing timeline-scoped facts a retcon merely because values differ.
- `retconned` is strong evidence that an older portrayal has been superseded, but review the source context before summarizing a whole family as a simple before/after rewrite.
- `alternate` is not automatically a correction of another fact.
- `unconfirmed` means evidence is insufficient for stronger status.
- claim-family grouping by `subject + predicate` is presentation only and does not create contradiction semantics.
- source year is evidence-history context, not canonical priority.
- the same displayed claim may appear in multiple continuities with different canon statuses; presentation should expose both the cross-continuity agreement and the record-specific evidence strength instead of flattening one into the other.
- a cross-continuity change in actor attribution, such as Jerrod's killer, is value variation until stronger same-continuity evidence proves a retcon relationship; do not manufacture `retconned`, `contradicts`, or `supersedes` semantics merely to connect the versions.

Do not add explicit `contradicts` / `supersedes` relations until a concrete sourced case proves the current model insufficient.

## 12. Source discipline

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex;
3. official game manuals and official Mortal Kombat / NetherRealm / WB material;
4. clearly scoped official supplemental material;
5. secondary mirrors/research aids when primary material cannot be directly recovered.

When primary material is accessed through a preservation mirror, identify the primary work as the source and describe the mirror honestly as access infrastructure. The mirror does not become canonical authority.

Later games may clarify or confirm earlier events without automatically replacing earlier sources. Preserve both when they add distinct evidence.

Current source records are mostly work-level. Add scene/chapter/page/timestamp/quote locators only when evidence review proves work-level granularity insufficient.

Never invent a source to satisfy validation.

## 13. Causal graph and chronology UX

The presentation model must preserve the distinction between chronological sequence and causal topology.

`/causality` currently supports:

- disconnected causal components;
- chronology/story-order rail where each Event appears once;
- whole causal trees generated only from explicit causal fields;
- local `Why? / What next?` parent/child inspection;
- real multi-parent/DAG merges;
- one full shared merge node plus explicit merge references from additional parents instead of duplicating one occurrence as multiple full cards;
- reset/rewrite bridges excluded from ordinary continuity trees.

The second Outworld tournament is the first proven multi-parent Event: MKII's lure plan and the older Sindel scheme/diversion framing converge on the same tournament occurrence.

Do not weaken correct lore edges because a renderer is simpler without them. UI must follow the model, not the reverse.

## 14. Ancient-history modeling choices

Phase 5 has proven these reusable choices:

- `One Being` can currently be modeled as a unique non-playable Character/being;
- `Elder Gods` is a Faction because the source describes a collective actor;
- realms remain Realm entities;
- realm-target actions belong in Facts while Event `realmIds` stays location/scope;
- historical divine/political status belongs in Facts/Events rather than timeless metadata;
- ending-only detail is conservative until later primary confirmation narrows what can safely become canon;
- plans and occurrences are separate evidence questions;
- qualified states stay weaker than confirmed transitions;
- named-place evidence does not automatically produce broader Realm scope;
- chronology may contain intentional causal gaps;
- parallel causal components remain separate until evidence connects them;
- real multi-parent causality is allowed when independently sourced parent relations converge on one Event;
- later broad historical confirmation does not identify a narrower actor unless the source does.

Do not project Original-continuity cosmology or ancient history automatically into Reboot or New Era. Later Titan/Kronika cosmology, reboot Shinnok, Sindel reinterpretations, and tournament retellings require their own scoped evidence.

## 15. Schema-evolution rule

Before modifying a schema or validator rule, answer:

1. What concrete sourced case cannot be represented cleanly?
2. Why do existing fields fail?
3. Is the proposed concept reusable beyond one case?
4. How do existing records migrate?
5. How will validation enforce the new rule?
6. Which owning docs must change?

Never weaken validation merely to make incorrect data pass.

## 16. Proven stress cases

The current model has been tested by:

- stable Characters carrying different identities across continuities;
- sourced death/resurrection/transformation chains;
- explicit reset/rewrite bridges;
- claim-family comparison without invented contradiction semantics;
- Factions acting as Event participants;
- official game manuals as a first-class source category;
- changing divine/faction status represented as Facts;
- realms as Fact objects without overloading Event `realmIds`;
- named places without inferred broader Realm scope;
- temporal association separated from causality;
- plans separated from later occurrences;
- qualified states kept weaker than confirmed events;
- ending evidence narrowed by later primary confirmation;
- parallel disconnected causal components;
- real multi-parent/DAG causality and merge rendering;
- chronology made readable independently of causal topology;
- later broad outcome confirmation kept broad rather than upgraded into a named victor;
- cross-continuity cosmology comparison using scoped Facts and Sources without a merged hierarchy or automatic retcon, proving the current Character/Fact/Source/timeline model sufficient for the Deception-vs-MK11 case;
- Original/Reboot/New Era Sindel comparison where royal-role values diverge, the Jerrod spouse claim agrees while evidence strength differs, and killer attribution varies by continuity while New Era preserves only the broader sourced murder outcome. This case remains representable through stable Characters, scoped Facts, canon status, and claim-family presentation without new schema or automatic retcon relations.

## 17. Current model pressure

Pressure points that may justify future work, but are **not schema commitments**:

- alternate/multiverse character variants such as Titan Havik;
- dedicated timeline-reset presentation;
- whether unique cosmic beings eventually justify a more specific entity type;
- whether Kamidogu and other important objects justify a first-class Artifact entity;
- whether work-level source records eventually require precise locators;
- whether explicit contradiction/supersession relations become necessary;
- whether graph scale eventually requires derived indexes or richer visualization.

Do not add schema merely because these concepts exist. Add it only when a concrete sourced/navigational case cannot be represented cleanly with the current model.
