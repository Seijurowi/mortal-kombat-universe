# Mortal Kombat Universe — Documentation

This directory contains the product and domain contracts for the project. The repository should be understandable without relying on chat history.

## Start here

1. [`PRD.md`](./PRD.md) — product vision, user experience, requirements, non-goals, and acceptance criteria.
2. [`LORE_MODEL.md`](./LORE_MODEL.md) — how Mortal Kombat continuity, facts, events, relationships, sources, canon, and causality are represented.
3. [`ROADMAP.md`](./ROADMAP.md) — staged implementation plan and current milestone.
4. [`CHANGELOG_POLICY.md`](./CHANGELOG_POLICY.md) — rules for maintaining the root [`CHANGELOG.md`](../CHANGELOG.md).
5. [`MANUAL_VERIFICATION.md`](./MANUAL_VERIFICATION.md) — Phase 1 lore/source verification.
6. [`PHASE2_MANUAL_VERIFICATION.md`](./PHASE2_MANUAL_VERIFICATION.md) — timeline-first character reading, chronology, comparison, deep-link, and responsive UX checks.
7. [`../AGENTS.md`](../AGENTS.md) — execution rules for Codex and other coding agents.

## Document responsibilities

- `PRD.md` defines **what product we are building**.
- `LORE_MODEL.md` defines **how lore is represented**.
- `ROADMAP.md` defines **what we intend to work on next**.
- `CHANGELOG.md` records **what materially changed**.
- `CHANGELOG_POLICY.md` defines **how that history is maintained**.
- manual verification files define **what a human must check that automation cannot prove**.
- `AGENTS.md` defines **how contributors and agents execute work**.

## Documentation rule

When implementation changes a product requirement, data-model assumption, source policy, contributor workflow, or major architecture behavior, update the relevant document in the same pull request. Do not leave durable decisions only in chat, commit messages, or PR descriptions.

## Verification rule

Automated validation proves JSON shape, references, TypeScript safety, linting, and production build health. It does **not** prove that a continuity interpretation is correct or that the product is understandable. Lore-heavy milestones and major UX milestones should keep a manual verification checklist and review it before merge.
