# AGENTS.md

## Mission

Build a source-aware, navigable Mortal Kombat encyclopedia that makes continuity, causality, identities, retcons, factions, realms, and evidence understandable without flattening contradictory timelines into one story.

## Read the product contract first

Before substantial work, read:

- `docs/PRD.md` — product vision and target experience.
- `docs/LORE_MODEL.md` — domain semantics and schema-evolution rules.
- `docs/ROADMAP.md` — active milestone and acceptance criteria.
- the current milestone's manual verification document under `docs/`.

Documentation is part of the implementation contract. Do not leave durable product/model decisions only in chat, commit messages, or PR descriptions.

When behavior, model semantics, source policy, architecture assumptions, or roadmap scope changes, update the relevant documentation in the same PR.

## Source of truth

- `data/` is the canonical editable lore store.
- Keep one atomic JSON entity per file.
- `schema/` defines entity contracts.
- `Fact` is the smallest sourced assertion and owns timeline scope, canon status, and source evidence.
- `Relationship` is a navigation/graph projection; it is not evidence by itself.
- `Event` represents timeline-scoped occurrences and supported causal links.
- React/UI code must not become a hidden lore store.
- Do not introduce SQLite or another database as the primary store. A future database may be generated as a derived index only.

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

Do not create npm/yarn lockfiles. Keep `pnpm-lock.yaml` committed and synchronized with `package.json`.

## UI system

The project uses the shadcn preset originally scaffolded with:

```bash
pnpm dlx shadcn@latest init --preset bcivVKXQ --template next
```

Resolved foundation:

- `base-nova`
- Zinc variables
- Lucide icons
- Tailwind CSS v4
- Base UI

Rules:

- Prefer existing `components/ui/*` primitives before creating custom equivalents.
- Add registry components with `pnpm dlx shadcn@latest add <component>`.
- Keep domain components outside `components/ui/`.
- Preserve accessibility, keyboard behavior, focus states, and semantic controls.
- Keep Mortal Kombat styling as a theme layer on top of shadcn tokens.
- Do not redesign speculatively; let actual lore/navigation friction prove the need.

## Continuity rules

- Never present timeline-dependent lore as universally true.
- Original, Reboot, and New Era must remain independently inspectable.
- Every timeline-dependent fact declares `timelineIds`.
- Every event belongs to its declared `timelineId`.
- Conflicting continuities should coexist as separate facts/events, not be reconciled into synthetic prose.
- Timeline filters must continue to apply after navigation into detail pages.

## Fact and canon rules

Every `Fact` requires at least one source.

Supported canon statuses:

- `canon`
- `supplemental`
- `retconned`
- `alternate`
- `unconfirmed`
- `gameplay_only`

Use the narrowest defensible status. Do not promote speculation, fan interpretation, gameplay mechanics, intros, or endings into primary canon without explicit evidence.

Prefer small atomic assertions over paragraph-like facts containing several disputable claims.

## Identity and transformation

Prefer stable person entities such as:

- `bi-han`
- `kuai-liang`
- `hanzo-hasashi`

Do not create duplicate characters merely because a mantle changes.

Model timeline-dependent identities such as Sub-Zero, Scorpion, or Noob Saibot through sourced facts unless a future proven requirement introduces an explicit identity/version entity.

Deaths, resurrections, corruption, wraith/revenant states, ascensions, and similar changes should be modeled through events plus facts.

## Relationships

- Every graph edge references existing entity IDs.
- Direction matters for causal, membership, manipulation, and creation relations.
- Symmetric relations should use `directed` consistently.
- Meaningful lore claims should have supporting facts; graph edges exist to improve navigation.

## Events and causality

- `causeEventIds` means supported causality, not "happened shortly before".
- `consequenceEventIds` means supported outcome, not mere chronology.
- Do not manufacture causal links because events are sequential.
- Keep participants and realms explicit.
- If causality is interpretive, model the component facts and avoid overstating the edge.

## Sources

Prefer, in order:

1. canonical game story/narrative;
2. official in-game bios/codex material;
3. official Mortal Kombat / NetherRealm / WB material;
4. official supplemental material with clear continuity scope;
5. secondary references only as research aids when primary evidence cannot be recovered.

Do not invent a source to satisfy validation. Record enough source identity for later human verification.

## Schema evolution

Do not add fields because they seem theoretically useful.

Before changing a schema:

1. identify a concrete sourced lore case that cannot be represented cleanly;
2. explain why the current model is insufficient;
3. prefer a reusable domain concept over a character-specific escape hatch;
4. update validators and migrations if necessary;
5. update `docs/LORE_MODEL.md` and relevant product docs.

Never weaken schema/data validation to make incorrect data pass.

## Timeline-first reading UX

The current product direction is to move from a warehouse of entities toward readable continuity-specific dossiers.

For character pages:

- continuity selection should be available inside the dossier;
- chronology, evidence-backed facts, and relationship connections should be visually distinct;
- `Compare all` must compare continuity-scoped data without implying simultaneous truth;
- direct links should preserve useful reading state where implemented;
- expanding the dataset must not silently make chronology misleading.

Do not hard-code character-specific story prose into React to improve readability. Improve the structured data or generated presentation instead.

## Validation discipline

Before a substantive PR is ready:

- `pnpm validate` passes;
- `pnpm lint` passes;
- `pnpm typecheck` passes;
- `pnpm build` passes;
- all new references resolve;
- new facts have evidence and timeline scope;
- documentation matches behavior;
- relevant manual verification has been performed.

A green build does not prove lore accuracy or good UX. Human verification remains required where documented.

## Git hygiene

- Use focused `agent/*` branches for agent-authored work.
- Keep commits scoped and descriptive.
- Do not commit `node_modules`, `.next`, local caches, generated databases, or temporary scaffolds.
- Avoid formatting/re-writing unrelated lore in UI-only work.
- Never silently overwrite user-authored changes.

## Current scope

Phase 1 (Bi-Han lore stress test) is complete and merged.

The active milestone is **Phase 2 — Timeline-first reading experience**, defined in `docs/ROADMAP.md` and manually reviewed through `docs/PHASE2_MANUAL_VERIFICATION.md`.

The goal is to make a character feel like a continuity-specific story that can be read, compared, deep-linked, and explored—not merely an entity record in a warehouse.
