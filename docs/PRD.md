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

Users can browse and search Characters, Events, Realms, Factions, Timelines, Facts, and Sources. The explorer remains a discovery surface rather than the final reading experience.

### 4.2 Character experience

A character page should answer:

- Who is this person in the selected continuity?
- What names or identities do they use?
- What faction(s) and realm(s) are they connected to?
- What important events involve them, in readable chronological order?
- Which relationships matter?
- What sourced facts define them?
- What changed in another timeline?

Character pages should support continuity switching without forcing the reader back to the global index. Bi-Han remains the first anchor character used to prove this experience.

### 4.3 Event experience

An event page should ultimately show timeline, participants, realms, known causes, known consequences, associated sourced facts, and related chronological context.

### 4.4 Timeline comparison

Users should be able to compare the same concept across continuities. Comparison must be generated from structured data rather than hard-coded lore tables.

### 4.5 Dependency / graph experience

The product should support a focused graph around an entity or event rather than immediately rendering the entire universe. Graph edges are navigation aids; evidence remains attached to facts/sources.

## 5. Canon model

Supported canon statuses:

- `canon`
- `supplemental`
- `retconned`
- `alternate`
- `unconfirmed`
- `gameplay_only`

The UI should distinguish these visually without implying that every non-canon item is worthless.

## 6. Source hierarchy

Prefer sources in this order when practical:

1. Canonical game story / narrative.
2. Official in-game bios, codex material, and explicit character information.
3. Official Mortal Kombat / NetherRealm / WB material.
4. Other official supplemental material with clearly identified continuity.
5. Secondary references only as research aids when primary material is unavailable.

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

Contracts live in `schema/`; runtime and presentation live in `app/`, `components/`, and `lib/`.

A future SQLite database may be generated for indexing/search performance, but JSON remains the editable source of truth unless deliberately changed through a documented architecture decision.

## 8. Core entities

- **Character** — stable person/entity record and broad continuity membership.
- **Event** — timeline-scoped occurrence with participants, realms, and supported causal links.
- **Realm** — realm such as Earthrealm, Outworld, or Netherrealm.
- **Faction** — clan, order, empire, organization, or comparable group.
- **Timeline** — continuity scope such as Original, Reboot, or New Era.
- **Fact** — smallest sourced assertion; owns timeline scope, canon status, and evidence.
- **Relationship** — graph/navigation projection between entities; does not substitute for evidence.
- **Source** — identifiable game, story, bio, official page, or other evidence source.

## 9. MVP success criteria

The first meaningful MVP is reached when a user can open Bi-Han and understand the major chain around him without prior Mortal Kombat expertise, including identity, family, Hanzo conflict, Quan Chi's supported role, death/transformation, New Era divergence, sources, continuity scope, chronology, and clickable navigation.

`pnpm check` must remain green.

## 10. Current milestone — Phase 2: Timeline-first reading experience

Phase 1 proved that the lore model can represent the Bi-Han / Hanzo / Quan Chi chain across continuities. Phase 2 focuses on turning that structured data into a readable character experience.

Current outputs:

- continuity selector inside character dossiers;
- generated `Compare all` continuity overview;
- chronological story presentation driven by structured events;
- separation of story chronology, evidence-backed facts, and relationship connections;
- shareable character + timeline reading state;
- manual UX verification for readability, continuity isolation, deep links, and responsive behavior.

The milestone is successful when a reader experiences a character as a continuity-specific story rather than a warehouse record.

Detailed status and acceptance criteria live in `docs/ROADMAP.md`.

## 11. Current non-goals

Do not:

- add the entire roster merely to increase record count;
- build a giant all-universe force-directed graph;
- introduce authentication or a CMS/admin editor;
- introduce SQLite as primary storage;
- model every arcade ending;
- solve every continuity contradiction before a real browsing need demands it;
- hard-code narrative prose in React to compensate for missing structured lore.

## 12. Future capabilities

Likely milestones after Phase 2 include:

- cause/consequence explorer;
- focused relationship graph;
- retcon registry;
- richer source/evidence views;
- cosmology and ancient-history expansion;
- systematic Original, Reboot, and New Era expansion;
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
- product/domain documentation is updated when contracts change;
- `CHANGELOG.md` is updated under `Unreleased` when the change is notable according to `docs/CHANGELOG_POLICY.md`;
- relevant manual verification is performed;
- `pnpm check` passes.
