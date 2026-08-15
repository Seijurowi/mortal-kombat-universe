# AGENTS.md

## Mission

Build a source-aware, navigable Mortal Kombat encyclopedia that makes continuity, causality, identities, retcons, factions, realms, and evidence understandable without flattening contradictory timelines into one story.

## Read the product contract first

Before substantial work, read:

- `docs/PRD.md` — product vision and target experience.
- `docs/LORE_MODEL.md` — domain semantics and schema-evolution rules.
- `docs/ROADMAP.md` — active milestone and acceptance criteria.
- `docs/CHANGELOG_POLICY.md` — changelog practice.
- the current milestone's manual verification document under `docs/`.

Documentation is part of the implementation contract. Durable product/model decisions must not live only in chat, commits, or PR descriptions.

## Source of truth

- `data/` is the canonical editable lore store; keep one atomic JSON entity per file.
- `schema/` defines entity contracts.
- `Fact` is the smallest sourced assertion and owns timeline scope, canon status, and source evidence.
- `Relationship` is a navigation/graph projection; it is not evidence by itself.
- `Event` represents timeline-scoped occurrences and explicit causal links.
- React/UI code must not become a hidden lore store.
- Do not introduce SQLite, a graph database, or another database as the primary store. Derived indexes may be added later only when proven necessary.

## Package manager

Use **pnpm only**.

```bash
pnpm install
pnpm dev
pnpm validate
pnpm lint
pnpm typecheck
pnpm build
pnpm check
```

Do not create npm/yarn lockfiles. Keep `pnpm-lock.yaml` synchronized with `package.json`.

## UI system

The project uses the shadcn `bcivVKXQ` preset: `base-nova`, Zinc variables, Lucide icons, Tailwind CSS v4, and Base UI.

- Prefer existing `components/ui/*` primitives.
- Add registry components with `pnpm dlx shadcn@latest add <component>`.
- Keep domain components outside `components/ui/`.
- Preserve accessibility, keyboard behavior, focus states, and semantic controls.
- Keep Mortal Kombat styling as a theme layer on shadcn tokens.
- Do not redesign speculatively; let real lore/navigation friction prove the need.
- Do not assume Radix `asChild`; the current shadcn foundation uses Base UI.

## Continuity rules

- Never present timeline-dependent lore as universally true.
- Original, Reboot, and New Era must remain independently inspectable.
- Every timeline-dependent fact declares `timelineIds`.
- Every event belongs to its declared `timelineId`.
- Conflicting continuities coexist as separate facts/events.
- Timeline filters must continue to apply after navigation into detail pages and specialized views.
- Ordinary causal edges stay inside one timeline.
- A cross-timeline causal edge is allowed only when the source event is an explicit reset/rewrite bridge (currently tagged `reset`, `rewrite`, or `timeline-bridge`).
- Ancient/cosmology lore from one continuity must not be projected into another without independent evidence.

## Facts, canon, and identity

Every `Fact` requires at least one source. Supported canon statuses are `canon`, `supplemental`, `retconned`, `alternate`, `unconfirmed`, and `gameplay_only`.

Use the narrowest defensible status. Prefer small atomic assertions over paragraph-like facts.

Prefer stable person entities such as `bi-han`, `kuai-liang`, and `hanzo-hasashi`. Do not create duplicate characters merely because a mantle changes. Model identities, deaths, resurrections, corruption, revenant/wraith states, ascensions, historical offices, titles, and reigns through sourced facts/events unless a future proven requirement introduces a more specific entity/version concept.

Do not promote qualified source language into a stronger state. `Apparent death`, `believed dead`, `missing`, and similar wording are not death Facts/Events unless stronger evidence establishes death.

A `Character` may represent a unique non-playable being when it is still a single agent/entity in the lore. Phase 5 currently uses this for the One Being. Do not add a `CosmicEntity` type until multiple concrete cases prove that `Character` materially distorts the model or UI.

## Retcons, contradictions, and claim history

Treat **retcon**, **continuity divergence**, **alternate portrayal**, and **uncertainty** as different concepts.

- Do not call two timeline-scoped facts a retcon merely because their values differ.
- A fact marked `retconned` is strong evidence that an older portrayal has been superseded, but inspect source context before summarizing a whole claim family as a simple before/after rewrite.
- `alternate` is not automatically a correction of another fact.
- `unconfirmed` means evidence is insufficient for stronger status.
- Claim-history grouping by subject + predicate is presentation only and must not invent contradiction semantics.
- Source chronology is evidence-history context, not canonical priority.
- Do not add `contradicts`, `supersedes`, or dedicated retcon fields until a concrete sourced case proves the current model insufficient.

## Relationships, participants, realms, and causality

- Every graph edge references existing IDs.
- Relationship direction matters.
- Meaningful lore claims should have supporting facts; relationship edges improve navigation.
- Event `participantIds` may reference `Character` or `Faction` entities. This is proven necessary by collective actors such as the Elder Gods in Deception cosmology.
- Do not duplicate a Faction as a fake Character merely to make it an event participant.
- Event `realmIds` describes event location/scope. It is **not** an output field and does not mean the realm is the grammatical object of the action.
- Do not infer Event `realmIds` merely from participant affiliation or from the location of a later consequence. Attach a realm only when evidence establishes that event's location/scope.
- A named place such as a temple, academy, island, or palace does not automatically justify mapping the Event to a broader Realm unless the source or separately established evidence supports that mapping.
- If a realm is conquered, liberated, merged, created, destroyed, or otherwise the object of a lore assertion, represent that assertion as a sourced `Fact` with the Realm in `objectId` where appropriate.
- `causeEventIds` means supported causality, not “happened shortly before.”
- `consequenceEventIds` means supported outcome, not mere chronology.
- Never manufacture causal links because events are sequential or have adjacent `order` values.
- A plan, prophecy, threat, intention, or possibility does **not** prove that the described occurrence happened. Model the plan/intention itself, and require separate occurrence evidence before creating or promoting the resulting Event as established history.
- Temporal wording such as **“during this period,” “after,” “before,” or “years later”** establishes chronology/context unless the source also states a causal relationship.
- Keep participant and realm references explicit.
- If causality is interpretive, model the supported facts and avoid overstating the edge.
- Later primary evidence may confirm a broad historical outcome without identifying a narrower participant or victor. Promote only the confirmed scope; do not backfill named actors from an older ending unless independently corroborated.

## Story-chain causality UX

Phase 3 delivered `/causality` as a timeline-scoped story-chain explorer, and Phase 5 proved the first real multi-parent merge.

- show complete connected causal chains when small enough to read;
- highlight `You are here` without removing surrounding causal context;
- create tree branches only from explicit causal fields;
- use event `order` only for chronology/moment context;
- keep a dedicated chronology rail separate from causal topology so sequence remains readable without invented edges;
- keep disconnected causal components separate;
- keep reset/rewrite bridges out of ordinary within-continuity trees;
- keep ordinary `Relationship` edges separate from causal edges unless proven useful to combine;
- retain `Why? / What next?` as a secondary close-up;
- for multi-parent Events, render one full shared node plus explicit merge references from additional parents rather than duplicating the same Event card under every branch.

## Sources

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex;
3. official Mortal Kombat / NetherRealm / WB material;
4. official supplemental material with clear continuity scope;
5. secondary references only as research aids or preservation mirrors when primary evidence cannot be directly recovered.

If a primary work is accessed through a third-party preservation mirror, identify the primary work in the Source record and describe the mirror honestly. Do not promote the mirror itself to canonical authority.

A later primary source may clarify or confirm an earlier source without automatically superseding it. Preserve both when they add distinct evidence. An arcade ending can contribute to a canon outcome when later story/biography material independently treats that outcome as established history; do not infer that every detail of the ending therefore happened.

Do not invent a source to satisfy validation.

## Schema evolution

Before changing a schema or validator rule:

1. identify a concrete sourced lore case that cannot be represented cleanly;
2. explain why the current model is insufficient;
3. prefer a reusable domain concept over a one-off escape hatch;
4. update validators and migrations if necessary;
5. update `docs/LORE_MODEL.md` and relevant product docs.

Phase 5's first proven evolution is allowing Factions in Event `participantIds`: the Elder Gods collectively act in the One Being shattering event. This is reusable for clans, armies, organizations, and other collective actors.

Do **not** change schema merely because a new lore slice is old, complicated, or important. The tournament-history slices remain representable with existing Character, Event, Fact, and Source contracts; their challenge is evidence and causality discipline, not missing entity types.

Never weaken validation to make incorrect data pass.

## Changelog discipline

For every substantive PR, review `docs/CHANGELOG_POLICY.md` and update `CHANGELOG.md` under `## Unreleased` when product/UX, lore/data, domain semantics, contributor workflow, or security changes materially. Do not create changelog noise for typo-only, formatting-only, or behavior-neutral refactors. Do not invent semantic versions until a versioning policy exists.

## Validation discipline

Before a substantive PR is ready:

- `pnpm validate` passes;
- `pnpm lint` passes;
- `pnpm typecheck` passes;
- `pnpm build` passes;
- all new references resolve;
- event participants resolve to allowed entity types;
- causal references are mirrored;
- cross-timeline causal references are explicit reset/rewrite bridges;
- new facts have evidence and timeline scope;
- realm-target assertions are not hidden in `realmIds` semantics;
- event realm scope is supported rather than inferred from a named place, participant affiliation, or later consequence;
- temporal association is not promoted into causality;
- plans/intentions are not promoted into completed occurrences without separate evidence;
- qualified states such as `apparent death` are not promoted into stronger Facts/Events;
- later broad outcome confirmation is not strengthened into a named-victor claim without direct corroboration;
- retcon/contradiction UI does not promote mere variation into a confirmed retcon;
- documentation matches behavior;
- `CHANGELOG.md` has been reviewed;
- relevant manual verification has been performed.

A green build does not prove lore accuracy, causal accuracy, retcon accuracy, or good UX.

## Git hygiene

- Use focused `agent/*` branches.
- Keep commits scoped and descriptive.
- Do not commit `node_modules`, `.next`, caches, generated databases, or temporary scaffolds.
- Avoid rewriting unrelated lore in UI-only work.
- Never silently overwrite user-authored changes.

## Current scope

Phases 1, 2, 3, and 4 are complete and merged. Phase 5's Deception cosmology / Onaga / Shinnok foundation, Edenia / Outworld conquest, Great Kung Lao tournament history, Liu Kang / MK1992 bridge, MKII Outworld setup, Shaolin-temple attack, and Sindel/MK3 invasion setup are merged.

The active work remains **Phase 5 — Cosmology and ancient history**, defined in `docs/ROADMAP.md`.

The current slice is **MK3 invasion outcome** on `agent/phase5-mk3-invasion-outcome`: model the soul-taking and extermination campaign conservatively, use MK4 as later primary confirmation that Earth warriors defeated Shao Kahn, keep chronology distinct from causality, and do not promote Liu Kang as the individual victor without direct Original-continuity corroboration.
