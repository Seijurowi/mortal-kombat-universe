# Changelog Policy

`CHANGELOG.md` is the human-readable history of meaningful project evolution. It complements Git history and pull requests; it does not duplicate them.

## What belongs in the changelog

Add an entry under `## Unreleased` when a change materially affects at least one of these areas:

- **Product / UX** — new reader-visible behavior, navigation, pages, workflows, or notable accessibility behavior.
- **Lore / data** — meaningful new lore coverage, corrected claims, continuity changes, canon-status changes, or source/evidence improvements.
- **Domain model** — schema/entity semantics, identity/version handling, causality rules, retcon behavior, source policy, or validation invariants.
- **Developer workflow / documentation contract** — package manager, build/validation behavior, agent contract, CI requirements, documentation ownership, or contributor workflow changes future contributors must know.
- **Security** — dependency or configuration changes with security impact.

Do **not** add changelog entries for:

- typo-only documentation fixes;
- formatting-only changes;
- internal refactors with no meaningful behavior/model/workflow impact;
- dependency lockfile churn with no notable consequence;
- every individual lore JSON file when one milestone/slice-level entry describes the expansion more clearly;
- active branch names, next-task status, or backlog items that belong in `docs/ROADMAP.md`.

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
2. If the PR contains a notable product, lore, model, workflow, or documentation-contract change, update `## Unreleased` in the same PR.
3. Group related work into one meaningful changelog item instead of mirroring every commit or data file.
4. If no changelog entry is needed, no placeholder such as `No changelog` is required; the PR description may state why when useful.
5. Keep changelog claims consistent with actual implementation and the owning documents defined in `docs/README.md`.
6. Confirm that live status/next-work language remains in `docs/ROADMAP.md`, not in the changelog.

## Consolidating a long Unreleased section

During a long milestone, `## Unreleased` may accumulate many individually correct bullets that become harder to understand than the milestone itself.

When this happens:

- consolidate adjacent bullets into slice/milestone-level outcome summaries;
- preserve material model/UX corrections that future maintainers need to understand;
- remove duplicate wording that merely names every source/file added;
- do **not** fabricate a release/version simply to shorten the section;
- keep enough detail to explain important evidence/model decisions without turning the changelog into a second `LORE_MODEL.md` or `ROADMAP.md`.

The goal is curated history, not lossless commit reproduction.

## Releases and milestones

The project currently does not require invented semantic versions. Until a release/versioning policy is deliberately adopted:

- keep current work in `## Unreleased`;
- when a meaningful milestone is merged and deliberately considered complete, move the relevant entries to a dated heading such as:

```md
## 2026-08-14 — Phase 2: Timeline-first reading experience
```

- leave a fresh `## Unreleased` section at the top for subsequent work.

If semantic versioning or tagged releases are introduced later, update this policy deliberately.

## Historical entries

Historical entries should reflect merged repository state and documented milestones; do not invent fine-grained details that cannot be established from repository history.

A later documentation cleanup may consolidate historical wording without changing the underlying history, provided it does not erase material product/model decisions.

## Ownership

`CHANGELOG.md` is part of the repository documentation contract.

- `AGENTS.md` tells contributors **when they must maintain it**.
- this document defines **how to maintain it**.
- `CHANGELOG.md` records **what actually changed**.
- `ROADMAP.md` records **what is active and what we intend to do next**.
- `docs/README.md` defines the ownership boundaries between these documents.

Do not use the changelog as a roadmap, backlog, source-of-truth lore store, or design document.
