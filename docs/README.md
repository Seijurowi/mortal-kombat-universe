# Mortal Kombat Universe — Documentation

This directory contains the product and domain contracts for the project. The repository should be understandable without relying on chat history.

## Start here

1. [`PRD.md`](./PRD.md) — product vision, user experience, requirements, non-goals, and acceptance criteria.
2. [`LORE_MODEL.md`](./LORE_MODEL.md) — how Mortal Kombat continuity, facts, events, relationships, sources, canon, and causality are represented.
3. [`ROADMAP.md`](./ROADMAP.md) — staged implementation plan and current milestone.
4. [`MANUAL_VERIFICATION.md`](./MANUAL_VERIFICATION.md) — checks that require a human to verify lore wording, game-source evidence, timeline behavior, and UX after implementation.
5. [`../AGENTS.md`](../AGENTS.md) — execution rules for Codex and other coding agents.

## Documentation rule

When implementation changes a product requirement, data-model assumption, source policy, or major workflow, update the relevant document in the same pull request. Do not leave architecture decisions only in chat, commit messages, or PR descriptions.

## Verification rule

Automated validation proves JSON shape, references, TypeScript safety, linting, and production build health. It does **not** prove that a continuity interpretation is correct. For lore-heavy milestones, keep the manual verification checklist current and review it before merging.
