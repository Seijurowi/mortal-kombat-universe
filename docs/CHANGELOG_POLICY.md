# Changelog Policy

`CHANGELOG.md` is the human-readable history of meaningful project evolution. It complements Git history and pull requests; it does not duplicate them.

## What belongs in the changelog

Add an entry under `## Unreleased` when a change materially affects at least one of these areas:

- **Product / UX** — new reader-visible behavior, navigation, pages, workflows, or notable accessibility behavior.
- **Lore / data** — meaningful new lore coverage, corrected claims, continuity changes, canon-status changes, or source/evidence improvements.
- **Domain model** — schema/entity semantics, identity/version handling, causality rules, retcon behavior, source policy, or validation invariants.
- **Developer workflow** — package manager, build/validation behavior, agent contract, CI requirements, or contributor workflow changes that future contributors need to know.
- **Security** — dependency or configuration changes with security impact.

Do **not** add changelog entries for:

- typo-only documentation fixes;
- formatting-only changes;
- internal refactors with no meaningful behavior/model/workflow impact;
- dependency lockfile churn with no notable consequence;
- every individual lore JSON file when one milestone-level entry describes the expansion more clearly.

## Unreleased structure

Use only the sections that are needed:

```md
## Unreleased

### Added
- ...

### Changed
- ...

### Fixed
- ...

### Removed
- ...

### Security
- ...
```

Entries should be written for a future maintainer or reader, not as commit messages. Prefer outcome language over implementation trivia.

Good:

> - Added timeline-first character dossiers with continuity switching and chronological event reading.

Avoid:

> - Refactored `UniverseExplorer` and added 487 lines.

## Pull-request practice

For every substantive PR:

1. Review `CHANGELOG.md` before requesting merge.
2. If the PR contains a notable product, lore, model, or workflow change, update `## Unreleased` in the same PR.
3. Group related work into one meaningful changelog item instead of mirroring every commit.
4. If no changelog entry is needed, no placeholder such as `No changelog` is required in the file; the PR description may state why when useful.
5. Keep changelog claims consistent with `docs/PRD.md`, `docs/ROADMAP.md`, `docs/LORE_MODEL.md`, and actual implementation.

## Releases and milestones

The project currently does not require invented semantic versions. Until a release/versioning policy is deliberately adopted:

- keep current work in `## Unreleased`;
- when a meaningful milestone is merged and considered complete, move the relevant entries to a dated heading such as:

```md
## 2026-08-14 — Phase 2: Timeline-first reading experience
```

- leave a fresh empty `## Unreleased` section at the top for subsequent work.

If semantic versioning or tagged releases are introduced later, update this policy and switch dated milestone headings to version + date headings deliberately.

## Historical entries

The initial changelog may summarize project history that predates the changelog file. Historical entries should reflect merged repository state and documented milestones; do not invent fine-grained details that cannot be established from repository history.

## Ownership

`CHANGELOG.md` is part of the repository documentation contract.

- `AGENTS.md` tells contributors **when they must maintain it**.
- this document defines **how to maintain it**.
- `CHANGELOG.md` records **what actually changed**.
- `ROADMAP.md` records **what we intend to do next**.

Do not use the changelog as a roadmap, backlog, or design document.
