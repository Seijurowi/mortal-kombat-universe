# Mortal Kombat Universe — Documentation

This directory contains the product, domain, planning, readiness, and verification contracts for the project. The repository should remain understandable without relying on chat history, PR descriptions, or hidden implementation context.

## Start here

For substantive work, read these in order:

1. [`PRD.md`](./PRD.md) — what product we are building and the stable reader-facing principles.
2. [`LORE_MODEL.md`](./LORE_MODEL.md) — how continuity, facts, events, relationships, sources, canon, realms, and causality are represented.
3. [`ROADMAP.md`](./ROADMAP.md) — the **authoritative current milestone/status/next-work document**.
4. [`DEFINITION_OF_DONE.md`](./DEFINITION_OF_DONE.md) — the repository-wide completion/readiness gate for substantive PRs.
5. [`CHANGELOG_POLICY.md`](./CHANGELOG_POLICY.md) — how to maintain the root [`CHANGELOG.md`](../CHANGELOG.md).
6. [`../AGENTS.md`](../AGENTS.md) — execution rules for agents and contributors.

## Documentation ownership

Each document has one primary job. Avoid duplicating short-lived status across several files.

- `PRD.md` defines **what product we are building** and stable product principles.
- `LORE_MODEL.md` defines **how lore is represented** and records proven reusable domain decisions.
- `ROADMAP.md` defines **what is complete, what is active, and what we intend to work on next**. It is the sole owner of active slice/branch status.
- `DEFINITION_OF_DONE.md` defines **what must be true before a substantive PR is ready to be considered complete**.
- `CHANGELOG.md` records **what materially changed**; it is history, not a backlog.
- `CHANGELOG_POLICY.md` defines **how that history is maintained**.
- manual verification files define **what a human must check that automation cannot prove**.
- `AGENTS.md` defines **how contributors and agents execute work** and references the Definition of Done rather than duplicating its full readiness checklist.
- the root `README.md` is onboarding and architecture orientation; it should point to the roadmap for live project status rather than carry fragile record counts or active-branch details.

When implementation changes a product requirement, domain assumption, source policy, completion gate, contributor workflow, or major architecture behavior, update the owning document in the same pull request. Do not leave durable decisions only in chat, commit messages, or PR descriptions.

## Manual verification index

Manual checklists are **repeatable procedures**, not status trackers. An unchecked box in a merged milestone document does not mean the milestone is incomplete; completion/merge status belongs in `ROADMAP.md` and Git history.

### Historical milestone / regression checklists

- [`MANUAL_VERIFICATION.md`](./MANUAL_VERIFICATION.md) — Phase 1 Bi-Han identity/continuity stress test.
- [`PHASE2_MANUAL_VERIFICATION.md`](./PHASE2_MANUAL_VERIFICATION.md) — timeline-first character reading.
- [`PHASE3_MANUAL_VERIFICATION.md`](./PHASE3_MANUAL_VERIFICATION.md) — story-chain causality and current chronology/DAG regression behavior.
- [`PHASE4_MANUAL_VERIFICATION.md`](./PHASE4_MANUAL_VERIFICATION.md) — claim history, retcon-vs-variation, source chronology, and evidence.

### Phase 5 cumulative and slice-specific checks

- [`PHASE5_MANUAL_VERIFICATION.md`](./PHASE5_MANUAL_VERIFICATION.md) — broad Phase 5 regression suite covering cosmology, Onaga, Shinnok, Edenia, tournament history, MKII setup, and the Shaolin-temple slice.
- [`PHASE5_MK3_SINDEL_DAG_MANUAL_VERIFICATION.md`](./PHASE5_MK3_SINDEL_DAG_MANUAL_VERIFICATION.md) — Sindel scheme, first proven multi-parent causal node, chronology rail, and DAG rendering.
- [`PHASE5_MK3_INVASION_OUTCOME_MANUAL_VERIFICATION.md`](./PHASE5_MK3_INVASION_OUTCOME_MANUAL_VERIFICATION.md) — MK3 invasion consequences, later-confirmed Shao Kahn defeat, and broad-outcome-vs-named-victor discipline.
- [`PHASE5_MK4_SHINNOK_RETURN_MANUAL_VERIFICATION.md`](./PHASE5_MK4_SHINNOK_RETURN_MANUAL_VERIFICATION.md) — MK4 Shinnok escape/return chronology, renewed-war framing, and chronology-without-causality checks across the MK3→MK4 bridge.
- [`PHASE5_MK4_SHINNOK_OUTCOME_MANUAL_VERIFICATION.md`](./PHASE5_MK4_SHINNOK_OUTCOME_MANUAL_VERIFICATION.md) — later-confirmed Shinnok defeat, broad-outcome-vs-individual-victor discipline, and chronology-without-fake-causality checks for the MK4 outcome.
- [`PHASE5_MK4_QUAN_CHI_SHINNOK_ROLE_MANUAL_VERIFICATION.md`](./PHASE5_MK4_QUAN_CHI_SHINNOK_ROLE_MANUAL_VERIFICATION.md) — Quan Chi's direct MK4/Gold combat role, Kitana's sourced participation, amulet theft, Realm discipline, and separation from unsupported escape/defeat mechanisms.
- [`PHASE5_DEADLY_ALLIANCE_BRIDGE_MANUAL_VERIFICATION.md`](./PHASE5_DEADLY_ALLIANCE_BRIDGE_MANUAL_VERIFICATION.md) — Deadly Alliance formation, explicit elimination plan, Liu Kang's death/soul consumption, plan→occurrence causality, and the deferred Shao Kahn clone/death question.
- [`PHASE5_SHAO_KAHN_APPARENT_DEATH_MANUAL_VERIFICATION.md`](./PHASE5_SHAO_KAHN_APPARENT_DEATH_MANUAL_VERIFICATION.md) — Shao Kahn's older Deadly Alliance death portrayal, later Deception clone/survival evidence, real `retconned` claim-family behavior, and cautious target/clone attribution.
- [`PHASE5_ONAGA_RETURN_FATE_MANUAL_VERIFICATION.md`](./PHASE5_ONAGA_RETURN_FATE_MANUAL_VERIFICATION.md) — Onaga's Reptile host-body return, Shujinko defeat, simultaneous Nightwolf soul binding, Shinnok release, original-body awakening, and ending-vs-later-bio evidence discipline. Includes a short maintainer test-case section for PR review.
- [`PHASE5_KRONIKA_COSMOLOGY_COMPARISON_MANUAL_VERIFICATION.md`](./PHASE5_KRONIKA_COSMOLOGY_COMPARISON_MANUAL_VERIFICATION.md) — Deception-vs-MK11 cosmology comparison, Kronika evidence strength, continuity separation, comparison guardrails, source drill-down, and short maintainer test cases.

For Phase 5 work, run the broad regression checklist when the change can affect shared model/UI behavior, then run the latest relevant slice-specific checklist. New large slices may get their own checklist instead of indefinitely appending duplicate detail to the cumulative file.

## Verification and readiness rule

Automated validation proves JSON shape, references, causal-edge invariants, TypeScript safety, linting, and production build health. It does **not** prove continuity interpretation, source sufficiency, retcon interpretation, causal interpretation, evidence strength, or good UX.

A green `pnpm check` is necessary but never sufficient for lore-heavy or model-heavy work. Use [`DEFINITION_OF_DONE.md`](./DEFINITION_OF_DONE.md) for the final readiness pass before a substantive PR is marked ready for review.
