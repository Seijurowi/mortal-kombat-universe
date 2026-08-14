# Mortal Kombat Universe — Documentation

This directory contains the product and domain contracts for the project. The repository should be understandable without relying on chat history.

## Start here

1. [`PRD.md`](./PRD.md) — product vision, user experience, requirements, non-goals, and acceptance criteria.
2. [`LORE_MODEL.md`](./LORE_MODEL.md) — how Mortal Kombat continuity, facts, events, relationships, sources, canon, and causality are represented.
3. [`ROADMAP.md`](./ROADMAP.md) — staged implementation plan and current milestone.
4. [`MANUAL_VERIFICATION.md`](./MANUAL_VERIFICATION.md) — Phase 1 lore/source verification.
5. [`PHASE2_MANUAL_VERIFICATION.md`](./PHASE2_MANUAL_VERIFICATION.md) — timeline-first character reading, chronology, comparison, deep-link, and responsive UX checks.
6. [`../AGENTS.md`](../AGENTS.md) — execution rules for Codex and other coding agents.

## Documentation rule

When implementation changes a product requirement, data-model assumption, source policy, or major workflow, update the relevant document in the same pull request. Do not leave architecture decisions only in chat, commit messages, or PR descriptions.

## Verification rule

Automated validation proves JSON shape, references, TypeScript safety, linting, and production build health. It does **not** prove that a continuity interpretation is correct or that the product is understandable. Lore-heavy milestones and major UX milestones should keep a manual verification checklist and review it before merge.
