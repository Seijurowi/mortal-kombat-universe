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

## Facts, canon, and identity

Every `Fact` requires at least one source. Supported canon statuses are `canon`, `supplemental`, `retconned`, `alternate`, `unconfirmed`, and `gameplay_only`.

Use the narrowest defensible status. Prefer small atomic assertions over paragraph-like facts.

Prefer stable person entities such as `bi-han`, `kuai-liang`, and `hanzo-hasashi`. Do not create duplicate characters merely because a mantle changes. Model identities, deaths, resurrections, corruption, revenant/wraith states, and ascensions through sourced facts/events unless a future proven requirement introduces an explicit identity/version entity.

## Retcons, contradictions, and claim history

Phase 4 treats **retcon**, **continuity divergence**, **alternate portrayal**, and **uncertainty** as different concepts.

Rules:

- Do not call two timeline-scoped facts a retcon merely because their values differ.
- A fact marked `retconned` is strong evidence that an older portrayal has been superseded, but still inspect the source context before summarizing the whole claim group as one simple before/after rewrite.
- `alternate` means an alternate/versioned portrayal, not automatically a correction of another fact.
- `unconfirmed` means evidence is insufficient for stronger status.
- Claim-history views may group facts by shared subject + predicate for comparison, but grouping is a presentation operation and must not invent contradiction semantics.
- Order claim versions by source chronology when reliable source years exist; missing years must not be fabricated.
- Always keep source links and timeline scope visible when presenting disputed or changing claims.
- Do not add `contradicts`, `supersedes`, or dedicated retcon entity fields until a concrete sourced case proves that current facts + statuses cannot represent the needed distinction cleanly.

## Relationships and causality

- Every graph edge references existing IDs.
- Relationship direction matters.
- Meaningful lore claims should have supporting facts; relationship edges improve navigation.
- `causeEventIds` means supported causality, not “happened shortly before.”
- `consequenceEventIds` means supported outcome, not mere chronology.
- Never manufacture causal links because events are sequential or have adjacent `order` values.
- Keep participant and realm references explicit.
- If causality is interpretive, model the supported facts and avoid overstating the edge.

## Story-chain causality UX

Phase 3 delivered `/causality` as a timeline-scoped story-chain explorer.

- show complete connected causal chains when small enough to read;
- highlight `You are here` without removing surrounding causal context;
- create tree branches only from explicit causal fields;
- use event `order` only for chronology/moment context;
- keep disconnected causal components separate;
- keep reset/rewrite bridges out of ordinary within-continuity trees;
- keep ordinary `Relationship` edges separate from causal edges unless proven useful to combine;
- retain `Why? / What next?` as a secondary close-up;
- treat real branch merges or graph complexity as future stress cases rather than pretending the simple tree handles them perfectly.

## Sources

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex;
3. official Mortal Kombat / NetherRealm / WB material;
4. official supplemental material with clear continuity scope;
5. secondary references only as research aids when primary evidence cannot be recovered.

Do not invent a source to satisfy validation.

## Schema evolution

Before changing a schema:

1. identify a concrete sourced lore case that cannot be represented cleanly;
2. explain why the current model is insufficient;
3. prefer a reusable domain concept over a character-specific escape hatch;
4. update validators and migrations if necessary;
5. update `docs/LORE_MODEL.md` and relevant product docs.

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
- causal references are mirrored;
- cross-timeline causal references are explicit reset/rewrite bridges;
- new facts have evidence and timeline scope;
- retcon/contradiction UI does not promote mere continuity divergence into a confirmed retcon;
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

Phases 1, 2, and 3 are complete and merged.

The active milestone is **Phase 4 — Claim history, retcons, and evidence**, defined in `docs/ROADMAP.md` and reviewed through `docs/PHASE4_MANUAL_VERIFICATION.md`.

The immediate goal is to let a reader compare sourced versions of the same claim across continuities and source chronology while clearly distinguishing **continuity divergence** from a genuinely **retconned** assertion. Schema expansion is explicitly deferred until a real sourced case proves it necessary.
