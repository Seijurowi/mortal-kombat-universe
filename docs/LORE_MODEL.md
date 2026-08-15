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

Event realm scope also requires direct support. Do not infer a location merely from the realms associated with participants or from the location of a later consequence. The MKII setup does not establish where Shang Tsung makes his plea to Shao Kahn, so `Shang Tsung seeks a second chance` intentionally has no `realmIds` entry even though the plan that follows concerns Outworld.

A named place does not automatically justify a broader Realm mapping. The MKII biographies name Liu Kang's Shaolin temples but do not, in those claims, explicitly map that named place to Earthrealm; the Shaolin-temple attack Event therefore leaves `realmIds` empty. The same conservative rule applies to islands, academies, palaces, arenas, and other local places until the dataset has direct or separately established evidence for the Realm mapping.

A stated plan, intention, threat, prophecy, or possibility is not evidence that the planned occurrence actually happened. Model the planning state separately, then require a source that treats the occurrence as established history before creating/promoting the resulting Event. The MKII slice uses the arcade story for Shang Tsung's Outworld plan and Mortal Kombat Trilogy story for later confirmation that Liu Kang and his comrades were actually lured into Outworld for a second tournament.

Sequence alone does not prove causality. Ordinary causal links connect events in the same timeline. Cross-timeline causal links are reserved for explicit reset/rewrite bridges whose source event creates or rewrites the following continuity; the validator recognizes `reset`, `rewrite`, and `timeline-bridge` source-event tags.

Temporal phrases such as **“during this period,” “after,” “before,” or “years later”** establish chronology/context unless the source also states a causal relationship. The Great Kung Lao tournament slice proves this distinction: the original Mortal Kombat story says Goro defeated Kung Lao and that during this period the tournament fell into Shang Tsung's hands. Those are separate Events/Facts with no `causeEventIds` edge because temporal co-occurrence is not proof that Goro's victory caused Shang Tsung's takeover.

The Liu Kang/MK1992 slice proves the positive counterpart: Mortal Kombat II explicitly frames Shang Tsung's plea to Shao Kahn as a response to his first-tournament failure and Goro's apparent death. That wording supports a causal edge from the first-game tournament to `Shang Tsung seeks a second chance`.

## 4. Relationships are graph projections

`Relationship` exists for navigation and graph traversal. Meaningful lore claims should be backed by Facts where possible. Do not treat Relationship as evidence by itself.

## 5. Identity and historical status handling

Prefer stable person entities such as `bi-han`, `kuai-liang`, `hanzo-hasashi`, and `shinnok`. Identities such as Sub-Zero, Scorpion, and Noob Saibot are normally timeline-scoped Facts rather than duplicate Characters.

Do not encode a historical office, rank, divine state, or faction membership as timeless static Character metadata when the lore shows that it changes. Phase 5 proves this with Shinnok: he **was** an Elder God, fell, was banished, and later ruled the Netherrealm. His former Elder God status is therefore a Fact (`former_member_of`) rather than `factionIds: ["elder-gods"]` on the Character.

Historical titles and reign lengths follow the same rule. Goro's Grand Champion status and roughly 500-year undefeated reign are sourced Facts, not timeless Character metadata.

Do not strengthen qualified source language. `Apparent death`, `believed dead`, `missing`, or similar states are not equivalent to confirmed death. The MKII setup describes Goro's **apparent death**, so this slice does not create a Goro death Fact/Event.

## 6. Transformation and state changes

Deaths, resurrections, corruption, revenant/wraith states, ascensions, banishments, rulership changes, conquests, liberations, title changes, and similar transitions are best represented as Events plus Facts. Avoid putting all historical states into a static Character or Realm description.

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

Arcade/character endings require evidence discipline. An ending can preserve useful detail without proving every part of its outcome. If later primary story/biography material independently treats a specific outcome as established history, that narrower outcome may be represented as `canon` while unsupported ending details remain weaker. The Liu Kang slice applies this with his MK1992 ending plus direct later confirmation: MK4's Goro biography says the title was won from Goro by Liu Kang, while MKII's Liu Kang biography confirms that Liu Kang won the tournament from Shang Tsung's control.

## 9. Source discipline

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex;
3. official game manuals and official Mortal Kombat / NetherRealm / WB material;
4. clearly scoped official supplemental material;
5. secondary mirrors/research aids when primary material cannot be directly recovered.

When a primary work is only accessible through a preservation mirror, the Source record must identify the primary work honestly. Do not present the mirror itself as the canonical authority.

Phase 5 adds `game_manual` as a first-class Source type after the Mortal Kombat: Deception instruction booklet proved that official manuals are a reusable evidence category rather than generic `other` material.

Later games may clarify or confirm an older event without replacing the older source. The Great Kung Lao slice uses Mortal Kombat (1992) to establish Goro's ancient victory and Mortal Kombat II to identify the defeated ancestor explicitly as the **Great Kung Lao**. The Liu Kang slice uses direct later biographies to confirm specific first-game outcomes first shown in Liu Kang's ending. A source should only support the claim it actually states: MKII's general account of Goro's apparent death is not used as direct proof that Liu Kang personally defeated Goro. The MKII/MKT slice similarly separates Shang Tsung's plan from later confirmation that the second Outworld tournament occurred. This is evidence accumulation, not “newer source automatically wins.”

## 10. Source granularity

The current schema stores sources mostly at work-level granularity. Add chapter/scene/page/timestamp/quote locators only when real evidence review proves they are necessary.

## 11. Causal graph guidance

Only encode causal edges supported by lore. Event `order` is chronology context and never manufactures parent/child edges.

The Kamidogu warning in Shujinko's Deception biography is therefore represented as a Fact: misuse can merge the realms and reawaken the One Being. We do not invent a separate causal event chain until the actual event sequence is modeled from sourced material.

Phase 5 also deliberately keeps Shujinko's `gathers Kamidogu` and later `shatters Kamidogu` events disconnected because the current evidence establishes both story states but does not require a direct causal edge between them.

Likewise, `Shao Kahn conquers Edenia` and the much later `Kitana frees Edenia` remain disconnected causal components for now. The conquest establishes the historical condition that is later reversed, but the dataset does not yet model the long chain of intervening events needed to claim one direct causal edge.

The Great Kung Lao/Goro slice adds another reusable case: `Goro defeats the Great Kung Lao` and `Shang Tsung takes control of the tournament` belong to the same historical period, but remain disconnected because the source does not explicitly say one caused the other.

The first-game tournament now has one explicit consequence edge to Shang Tsung's second-chance plea because MKII story text supplies the missing causal language. This demonstrates that causal gaps can be filled later when stronger evidence appears without retroactively treating all chronology as causality.

The MKII continuation distinguishes planning from occurrence. `Shang Tsung plans an Outworld tournament` is supported by the MKII intro; `Second Mortal Kombat tournament in Outworld` is supported by later MKT story text that says Liu Kang and his comrades were lured there to compete. The causal edge links a sourced plan to a separately sourced occurrence rather than assuming plans automatically succeed.

The Shaolin-temple slice demonstrates parallel causal components. Baraka's biography says he led the attack on Liu Kang's Shaolin temples, and Liu Kang's biography directly links the ruined home and slain brothers to his revenge journey. That supports `Shaolin attack → Liu Kang seeks revenge`. It does **not** by itself support `Shaolin attack → second tournament` or `Shaolin attack → Shang Tsung's lure plan`, so those components remain disconnected unless stronger primary evidence is added later.

## 12. Cosmology and ancient-history modeling

Phase 5 begins with the Original-continuity creation account in Mortal Kombat: Deception and expands through Onaga, Shinnok, Edenia/Outworld conquest history, pre-1992 tournament history, and the MK1992 transition into MKII.

Current choices:

- `One Being` is represented as a unique non-playable `Character`/being because Character is currently the reusable entity class for unique agents/beings, playable or not.
- `Elder Gods` is represented as a `Faction` because the source describes a collective actor.
- individual realms remain `Realm` entities.
- realm-target claims use Facts; `realmIds` stays event location/scope metadata and is omitted when event location is not directly supported, including when a source names only a local place without establishing its broader Realm mapping.
- historical titles, reigns, tournament control, and victories are Facts/Events rather than timeless metadata.
- ending-only details may be preserved conservatively, while specific ending outcomes may be promoted to canon only when independent primary sources confirm them.
- plans/intentions remain separate from later occurrences unless another source establishes that the intended event actually happened.
- qualified states such as Goro's `apparent death` remain qualified rather than becoming stronger death events.
- tournament-era chronology may remain disconnected when sources provide only sequence/context, and parallel causal components remain separate until evidence connects them.

Do **not** project this Original-continuity material automatically into Reboot or New Era. Later Titan/Kronika cosmology, reboot Shinnok, later Sindel reinterpretations, and MK9/New Era tournament-history variants must be added with their own scoped evidence and compared rather than silently reconciled.

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
- ending-only lore retained conservatively until later primary evidence confirms a narrower canonical outcome;
- temporal association kept separate from causality, proven by Great Kung Lao/Goro/Shang Tsung history;
- qualified states kept weaker than confirmed transformations, proven by Goro's `apparent death` in the MKII setup;
- event location omitted when realm scope is contextual but not directly stated, proven by Shang Tsung's second-chance plea;
- named-place evidence not automatically promoted to a broader Realm mapping, proven by the Shaolin-temple attack;
- plans kept distinct from later occurrences until occurrence evidence exists, proven by the MKII Outworld plan and MKT confirmation of the second tournament;
- parallel causal components kept separate when sources establish motivations but not a bridge between them, proven by the Shaolin attack/revenge chain versus the second-tournament lure chain.

Current pressure points include:

- alternate-timeline character variants such as Titan Havik;
- branch merges/DAG visualization;
- dedicated timeline-reset presentation;
- whether unique cosmic beings eventually justify a more specific entity type;
- whether Kamidogu and other important objects eventually justify a first-class Artifact entity;
- how Deception cosmology compares with MK11-era Titan/Kronika cosmology without flattening the difference;
- how Original/Reboot/New Era Sindel portrayals should be compared without treating every changed characterization as one simple retcon;
- how far tournament-history expansion should continue before cross-continuity comparison becomes the higher-value next stress case.

Do not add new schema merely because these concepts exist. Add it when a concrete sourced slice cannot be represented or navigated cleanly with the current model.
