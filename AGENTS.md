# AGENTS.md

## Mission

Build a source-aware, navigable knowledge graph and encyclopedia of the Mortal Kombat universe. The application must make complicated continuity, causality, retcons, identities, realms, factions, and character relationships easier to understand without flattening contradictory timelines into one story.

## Source of truth

- `data/` is the canonical knowledge store. Keep one atomic JSON entity per file.
- `schema/` defines the contracts for every entity type.
- `Fact` is the smallest sourced assertion. A fact owns its timeline scope, canon status, and source evidence.
- `Relationship` is a graph/navigation projection. A relationship is not evidence by itself and must not replace a sourced fact when a claim needs provenance.
- `app/`, `components/`, and `lib/` are presentation/runtime layers. Do not hide lore facts inside React components.
- Do not introduce SQLite or another database as the primary store. A database may later be generated as a derived index only.

## Package manager

Use **pnpm only**.

- Do not use `npm install`, `npm run`, Yarn, or create `package-lock.json` / `yarn.lock`.
- The repository pins pnpm through the `packageManager` field.
- Install dependencies with `pnpm install`.
- Add dependencies with `pnpm add` / `pnpm add -D`.
- Run scripts with `pnpm <script>`.

## UI system

The UI is based on the shadcn preset originally scaffolded with:

```bash
pnpm dlx shadcn@latest init --preset bcivVKXQ --template next
```

The resolved contract uses the `base-nova` style, Zinc variables, Lucide icons, Tailwind CSS v4, and Base UI.

Rules:

- Prefer existing shadcn components from `components/ui/` over hand-rolled equivalents.
- Add new registry components with `pnpm dlx shadcn@latest add <component>`.
- Keep `components.json` authoritative for shadcn aliases and style configuration.
- Use Lucide for interface icons rather than custom SVG icon sets unless the visual cannot be represented adequately.
- Compose domain-specific components outside `components/ui/`; keep generated/shared UI primitives in `components/ui/`.
- Preserve accessible labels, keyboard behavior, focus states, and semantic controls.
- Keep the Mortal Kombat visual identity as a theme layer on top of shadcn tokens rather than replacing the design system with one-off CSS.

## Lore editing rules

### IDs and files

- Use stable lowercase kebab-case IDs.
- Prefer one entity per JSON file named after its ID.
- Do not rename an existing ID casually; IDs are graph references. Treat an ID rename as a migration and update every reference.

### Timelines

- Never merge Original, Reboot, and New Era facts into an unscoped claim.
- Every timeline-dependent fact must declare the correct `timelineIds`.
- Events belong to a specific `timelineId` unless the schema is deliberately evolved to support something else.
- If two continuities disagree, store separate facts rather than trying to reconcile them in prose.

### Facts and canon

- Every `Fact` requires at least one `sourceId`.
- Use the narrowest defensible `canonStatus`: `canon`, `supplemental`, `retconned`, `alternate`, `unconfirmed`, or `gameplay_only`.
- Do not convert speculation, fan interpretation, gameplay mechanics, or arcade endings into primary canon without explicit evidence.
- If an older claim is superseded, preserve it when historically useful and mark it appropriately instead of silently deleting the contradiction.

### Relationships

- Graph edges must reference existing IDs.
- Direction matters for causal and membership relations.
- Symmetric concepts such as sibling relationships should use the schema's `directed` semantics consistently.
- Prefer facts with provenance for meaningful lore claims; relationships should make those claims easy to navigate.

### Events and causality

- Model meaningful prerequisites through `causeEventIds` and outcomes through `consequenceEventIds`.
- Do not manufacture causal links merely because two events occur sequentially.
- Keep participant and realm references explicit.

## Sources

Prefer primary and official material whenever possible:

1. Story modes and canonical game narrative.
2. Official character bios and in-game codex material.
3. Official Mortal Kombat / NetherRealm material.
4. Supplemental official media when its continuity is clearly scoped.

When adding a claim:

- Do not invent a source to satisfy validation.
- Record enough source identity to make later verification possible.
- Keep adaptations and alternate universes explicitly separated from the main game continuities.
- Treat intros, endings, and gameplay-only material cautiously when their canonical status is ambiguous.

## Development workflow

Core commands:

```bash
pnpm install
pnpm validate
pnpm lint
pnpm typecheck
pnpm build
pnpm check
pnpm dev
```

Before committing a substantive change, run `pnpm check` when the environment permits it. `pnpm check` is the repository quality gate and should include knowledge validation, linting, type checking, and a production build.

## Validation discipline

- Never weaken a schema or validator only to make incorrect seed data pass.
- Fix the underlying data when validation exposes a real inconsistency.
- Cross-references must resolve to existing entities of compatible types.
- UI changes must not mutate source JSON at runtime.
- A green TypeScript build does not mean the lore is valid; both code and data validation matter.

## Git and PR hygiene

- Use focused `agent/*` branches for agent-authored work.
- Keep commits scoped and descriptive.
- Do not commit `node_modules`, `.next`, local caches, generated databases, or temporary scaffold/reference directories.
- Keep `pnpm-lock.yaml` committed and in sync with `package.json`.
- Avoid formatting or rewriting unrelated lore files in UI-only changes.
- Do not silently overwrite user-authored changes.

## Review checklist

Before considering a PR ready:

- `pnpm validate` passes.
- `pnpm lint` passes.
- `pnpm typecheck` passes.
- `pnpm build` passes.
- New facts have sources and timeline scope.
- All new references resolve.
- UI work uses existing shadcn primitives where appropriate.
- No npm/yarn lockfiles were introduced.
- Temporary migration/probe artifacts are removed.

## Current scope

The repository intentionally begins with a small seed set so the model can be stress-tested before full encyclopedia expansion. The next major lore stress test is the Bi-Han → Hanzo Hasashi → Quan Chi → Shirai Ryu → Noob Saibot chain across Original, Reboot, and New Era continuities, with explicit sources, causal events, and retcons.
