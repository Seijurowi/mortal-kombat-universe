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

The goal is not to reproduce a wiki. The goal is to make Mortal Kombat's complicated continuity **understandable as an explorable system**.

## 2. Primary user problem

Mortal Kombat lore is difficult to follow because identities are reused, histories are rewritten, timelines reset, characters die and return in altered forms, and later games reinterpret older material.

A normal article tends to flatten these contradictions into prose. This product should preserve the contradictions and make their scope visible.

Example question the product must eventually answer clearly:

> Why does Bi-Han become Noob Saibot, what role do Hanzo Hasashi and Quan Chi play, and how does that chain differ between continuities?

## 3. Product principles

### 3.1 Continuity first

No timeline-dependent claim should be displayed as universally true.

Original, Reboot, and New Era must remain independently inspectable, while comparison views may deliberately place them side-by-side.

### 3.2 Evidence first

Important claims should be traceable to sources. `Fact` is the smallest source-aware assertion.

The UI should eventually make it possible to move from:

`claim → source → surrounding event/context`

### 3.3 Causality over chronology alone

A chronological list is not enough. Events should support meaningful:

`cause → event → consequence`

navigation where the source material supports causality.

### 3.4 Data before presentation

Lore lives in `data/`, not React components or generated prose. The UI consumes the knowledge model.

### 3.5 Contradictions are data

Retcons, alternate versions, and unresolved contradictions should remain visible instead of being silently reconciled.

### 3.6 Prove model changes with real lore

Do not expand schemas because a field seems theoretically useful. Add or change a schema when a real sourced lore case cannot be represented cleanly with the current model.

## 4. Target experience

### 4.1 Universe explorer

Users can browse and search:

- Characters
- Events
- Realms
- Factions
- Timelines
- Facts
- Sources

The current explorer is the foundation, not the final information architecture.

### 4.2 Character experience

A character page should ultimately answer:

- Who is this person in the selected continuity?
- What names or identities do they use?
- What faction(s) and realm(s) are they connected to?
- What important events involve them?
- Which relationships matter?
- What sourced facts define them?
- What changed in another timeline?

Bi-Han is the first anchor character used to prove this experience.

### 4.3 Event experience

An event page should ultimately show:

- timeline;
- participants;
- realms;
- known causes;
- known consequences;
- sourced facts associated with the event;
- related events in chronological context.

### 4.4 Timeline comparison

Users should eventually be able to compare the same concept across continuities, for example:

| Subject | Original / Reboot | New Era |
| --- | --- | --- |
| Scorpion | Hanzo Hasashi | Kuai Liang |
| Sub-Zero | Bi-Han, then Kuai Liang | Bi-Han |
| Raiden | God / Earthrealm protector | Mortal champion |
| Liu Kang | Mortal champion | Fire God / architect of New Era |

This comparison must be generated from structured data rather than a hard-coded table.

### 4.5 Dependency / graph experience

The product should support a focused graph around an entity or event, rather than immediately attempting to render the entire universe at once.

Examples:

`Bi-Han → killed by → Hanzo Hasashi`

`Quan Chi → manipulates → Hanzo Hasashi`

`Bi-Han's death → leads to → Noob Saibot`

Graph edges are navigation aids; evidence remains attached to facts/sources.

## 5. Canon model

Supported canon statuses:

- `canon`
- `supplemental`
- `retconned`
- `alternate`
- `unconfirmed`
- `gameplay_only`

The UI should distinguish these visually without implying that every non-canon item is worthless. Supplemental and retconned material can be historically important for understanding how the franchise evolved.

## 6. Source hierarchy

Prefer sources in this order when practical:

1. Canonical game story / narrative.
2. Official in-game bios, codex material, and explicit character information.
3. Official Mortal Kombat / NetherRealm material.
4. Other official supplemental material with clearly identified continuity.
5. Secondary references only as research aids when primary material is unavailable; do not silently promote them to primary evidence.

Arcade endings, intros, dialogue, adaptations, and gameplay mechanics require explicit canon judgment rather than default acceptance.

## 7. Current data architecture

Primary store:

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

Contracts:

```text
schema/
```

Runtime/UI:

```text
app/
components/
lib/
```

A future SQLite database may be generated for indexing/search performance, but JSON remains the editable source of truth unless the architecture is deliberately changed through a documented decision.

## 8. Core entities

### Character

Stable person/entity record and broad continuity membership.

### Event

A timeline-scoped occurrence with participants, realms, and supported causal links.

### Realm

A realm such as Earthrealm, Outworld, or Netherrealm.

### Faction

A clan, order, empire, organization, or comparable group.

### Timeline

A continuity scope such as Original, Reboot, or New Era.

### Fact

The smallest sourced assertion. Owns timeline scope, canon status, and source evidence.

### Relationship

A graph/navigation projection between entities. It may point to supporting facts but does not substitute for evidence.

### Source

A game, story mode, official page, bio, comic, adaptation, or other identifiable evidence source.

## 9. MVP success criteria

The first meaningful MVP is reached when a user can open Bi-Han and understand the major chain around him without prior Mortal Kombat expertise:

1. Bi-Han's identity as Sub-Zero.
2. His relationship to Kuai Liang.
3. His conflict with Hanzo Hasashi / Scorpion in relevant continuities.
4. Quan Chi's role where supported.
5. Bi-Han's death in earlier continuities.
6. His transformation/return as Noob Saibot.
7. The New Era divergence.
8. Sources and canon/timeline scope for the important claims.
9. Clickable navigation between the involved characters, factions, events, and facts.
10. `pnpm check` remains green.

## 10. Current milestone — Bi-Han lore stress test

Anchor chain:

`Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot`

The milestone should introduce only the additional entities and model changes required to represent this chain accurately across:

- Original continuity;
- Reboot continuity;
- New Era.

Expected outputs:

- sourced atomic facts;
- timeline-scoped events;
- causal links where explicitly defensible;
- relevant relationships;
- missing sources;
- UI improvements proven necessary by the data;
- documented schema changes if the existing schema cannot cleanly represent a real case.

## 11. Non-goals for the current milestone

Do not:

- add the entire roster;
- build a giant all-universe force-directed graph;
- introduce authentication;
- introduce a CMS/admin editor;
- introduce SQLite as primary storage;
- model every arcade ending;
- solve every continuity contradiction;
- redesign the whole site before the new lore exposes a concrete UX need.

## 12. Future capabilities

After the first stress test succeeds, likely milestones include:

- timeline-aware character pages;
- event chronology views;
- cause/consequence explorer;
- focused relationship graph;
- timeline comparison mode;
- retcon registry;
- richer source/evidence views;
- cosmology and ancient-history expansion;
- systematic Original timeline expansion;
- Reboot expansion;
- New Era / MK1 and Khaos Reigns expansion;
- generated search/index database if scale requires it.

## 13. Definition of done for product changes

A feature or lore expansion is not done only because it renders.

Relevant changes must satisfy:

- data validates;
- timelines remain correctly scoped;
- important lore claims have evidence;
- contradictions are not silently flattened;
- UI remains navigable and accessible;
- implementation follows `AGENTS.md`;
- documentation is updated when the product/data contract changes;
- `pnpm check` passes.
