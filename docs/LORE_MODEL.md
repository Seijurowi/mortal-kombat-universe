# Lore Model

This document explains how Mortal Kombat lore should be represented in the repository.

## 1. Separation of concerns

The model deliberately separates:

- **entities** — who/what exists;
- **events** — what happens;
- **facts** — sourced assertions;
- **relationships** — navigable graph edges;
- **sources** — evidence;
- **timelines** — continuity scope.

Do not overload one entity type to perform another type's job.

## 2. Fact as the evidence unit

A `Fact` should represent one useful assertion that can be independently sourced and scoped.

Example:

```json
{
  "id": "fact-bi-han-kuai-liang-brothers",
  "type": "fact",
  "subjectId": "bi-han",
  "predicate": "brother_of",
  "objectId": "kuai-liang",
  "timelineIds": ["original", "reboot", "new-era"],
  "canonStatus": "canon",
  "sourceIds": ["mk9-story", "mk1-story"]
}
```

Prefer several narrow facts over one large paragraph-like fact.

## 3. Events are occurrences, not evidence

An event describes an occurrence in a particular timeline. The event itself may be linked from facts that establish what happened.

Use:

- `participantIds` for involved characters;
- `realmIds` for locations/realm scope;
- `causeEventIds` only when a causal connection is defensible;
- `consequenceEventIds` for supported outcomes.

Sequence alone does not prove causality.

## 4. Relationships are graph projections

`Relationship` exists to make exploration fast and expressive.

Examples:

- `brother_of`
- `member_of`
- `killed_by`
- `manipulated_by`
- `serves`
- `ruler_of`

For meaningful lore claims, prefer a relationship to point at one or more supporting `factIds`.

Do not treat a relationship record as evidence by itself.

## 5. Identity handling

Mortal Kombat repeatedly reuses identities such as Sub-Zero and Scorpion.

The stable entity should normally be the person:

- `bi-han`
- `kuai-liang`
- `hanzo-hasashi`

Identity claims should be timeline-scoped facts such as:

- Bi-Han `uses_identity` Sub-Zero;
- Hanzo Hasashi `uses_identity` Scorpion in earlier continuities;
- Kuai Liang `uses_identity` Scorpion in the New Era.

Do not create a separate character entity for an identity unless later lore proves that the identity itself must behave as an independent entity in the graph.

## 6. Transformation and state changes

Death, resurrection, corruption, revenant state, wraith transformation, ascension, and similar changes are best modeled as events plus facts.

Example pattern:

```text
Bi-Han dies
    ↓
transformation / return event
    ↓
Fact: Bi-Han uses identity Noob Saibot
Fact: Bi-Han has nature/status wraith (if explicitly supported)
```

Avoid putting all historical states into the character's static description.

## 7. Timeline discipline

Current top-level continuity scopes:

- `original`
- `reboot`
- `new-era`

Rules:

- never infer that a fact from one continuity applies to another;
- use separate facts when details differ materially;
- an event belongs to one timeline;
- cross-timeline comparison is a presentation operation over scoped data, not a merged canon.

## 8. Retcons and contradictions

When a later source contradicts an older portrayal:

1. Preserve the older claim if it remains useful to franchise history.
2. Scope it correctly.
3. Mark it `retconned` when appropriate.
4. Add the newer claim separately.
5. Do not rewrite the older record to make the contradiction disappear.

If the exact status is uncertain, use `unconfirmed` rather than inventing certainty.

## 9. Source discipline

Every important fact must have real evidence.

Preferred hierarchy:

1. canonical story modes;
2. official in-game bios/codex;
3. official Mortal Kombat / NetherRealm material;
4. clearly scoped official supplemental material;
5. secondary sources only as research aids where primary evidence cannot be recovered.

A source record should identify the work well enough that a researcher can later verify the claim.

## 10. Source granularity

The current schema stores sources at work-level granularity, for example `mk9-story`.

If the stress test proves that chapter, scene, bio-entry, timestamp, page, or quote-level references are required for reliable provenance, evolve the source/fact model deliberately and document the decision. Do not add ad-hoc fields to individual JSON files.

## 11. Causal graph guidance

The product wants to answer "why did this happen?" and "what did this cause?"

Use explicit causal edges only for relationships like:

```text
Quan Chi deception
    ↓ causes/supports
Hanzo targets Bi-Han
    ↓
Bi-Han dies
    ↓
Bi-Han returns as Noob Saibot
```

But only encode an edge if the lore actually supports that interpretation. If the chain is interpretive rather than explicit, represent the component facts and leave the causal edge absent or mark the relevant assertion conservatively.

## 12. Model-evolution rule

Before modifying a schema, write down the concrete lore case that fails under the current model.

A schema change should answer:

- What real example cannot be represented cleanly?
- Why do existing fields fail?
- Is the new concept reusable beyond one character?
- How will existing records migrate?
- How will the validator enforce it?
- Does the PRD or this document need updating?

## 13. Bi-Han stress-test questions

The current milestone should test whether the model can represent, without ambiguity:

- Bi-Han as Sub-Zero in the relevant continuities;
- Bi-Han and Kuai Liang as distinct people sharing an identity over franchise history;
- Hanzo Hasashi as Scorpion in Original/Reboot continuity;
- Quan Chi's role in Hanzo's understanding of the Shirai Ryu tragedy;
- Bi-Han's death at Hanzo/Scorpion's hands in earlier continuities;
- Bi-Han's return/transformation as Noob Saibot;
- the New Era divergence, including Kuai Liang as Scorpion;
- New Era developments involving Bi-Han/Noob Saibot where supported by MK1: Khaos Reigns;
- differences between explicit source statements and commonly repeated fan shorthand.

If those cannot be represented cleanly, the stress test has found a legitimate model gap.
