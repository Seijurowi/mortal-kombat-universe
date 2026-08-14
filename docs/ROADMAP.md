# Roadmap

The roadmap is deliberately staged. We expand the universe only after the model and reading experience survive difficult continuity cases.

## Phase 0 — Foundation ✅

Complete and merged: Next.js + TypeScript, pnpm, shadcn/Tailwind, JSON source-of-truth data, schemas, validation, 8 entity types, explorer UX, `AGENTS.md`, and CI.

## Phase 1 — Bi-Han lore stress test ✅

Complete and merged after human review. Established sourced cross-continuity facts/events and the stable-person identity model.

## Phase 2 — Timeline-first reading experience ✅

Complete and merged after manual review. Delivered continuity-aware character dossiers, comparison, chronology, deep links, and changelog practice.

## Phase 3 — Story chains and causality ✅

Complete and merged after manual review. Delivered `/causality`, whole-chain story trees, strict chronology/causality separation, and reset/rewrite bridge validation.

## Phase 4 — Claim history, retcons, and evidence ✅

Complete and merged after manual review.

Delivered:

- `/claims` claim-family workbench;
- evidence-safe labels such as value variation and cross-continuity agreement;
- explicit retcon evidence only when a Fact is marked `retconned`;
- source-history ordering without treating newer as automatically canonical;
- no speculative `contradicts` / `supersedes` schema.

## Phase 5 — Cosmology and ancient history 🔨

Status: implementation in progress on `agent/phase5-cosmology`.

Goal: expand from character-scale lore into the oldest Mortal Kombat history while preserving source and continuity caveats instead of presenting one synthetic creation myth as timeless canon.

### Deception cosmology foundation

- [x] Add `One Being` as a non-playable primordial Character/being in Original continuity.
- [x] Add `Elder Gods` as a Faction rather than pretending the collective is one Character.
- [x] Add Edenia, Orderrealm/Seido, and Chaosrealm so all six Deception Konquest realms are represented.
- [x] Add Deception Shujinko biography and instruction-booklet source records.
- [x] Add the Elder Gods shattering the One Being as an ancient Event plus sourced Facts.
- [x] Record the Kamidogu/reawakening danger without turning it into unsupported causal edges.
- [x] Expand Event participants from Character-only to `Character | Faction`, proven by the Elder Gods acting collectively in the creation event.
- [x] Add `game_manual` as a first-class Source type after the Deception instruction booklet proved the need.

### Onaga ancient-history slice

- [x] Add Onaga, Shao Kahn, and Shujinko as Original-continuity Characters.
- [x] Add Raiden biography and Shujinko ending evidence from Deception.
- [x] Model `Shao Kahn poisons Onaga → Shao Kahn seizes Outworld` as a supported causal chain.
- [x] Model `Onaga manipulates Shujinko → Shujinko gathers the Kamidogu` as a supported causal chain.
- [x] Model `Shujinko shatters the Kamidogu → Shujinko defeats Onaga` as a supported causal chain.
- [x] Deliberately leave the gather → shatter gap unconnected until a source supports that direct causal edge.

### Next lore slices

- [ ] Onaga's resurrection/return mechanism and post-Deception fate with stronger source coverage.
- [ ] Shinnok as Elder God, fall, Netherrealm rule, and continuity differences.
- [ ] Edenia / Outworld conquest history and Shao Kahn.
- [ ] Great Kung Lao and pre-1992 tournament history.
- [ ] Compare Original cosmology against MK11-era Titan/Kronika cosmology without forcing them into one universal truth.

### Phase 5 acceptance criteria

A user should be able to:

1. find the earliest sourced Original-continuity cosmology records;
2. inspect the One Being, Elder Gods, and six Deception realms through normal dossiers;
3. see that the creation event includes a Faction actor without mis-modeling that faction as a Character;
4. trace every important cosmology claim back to a named primary work/source record;
5. distinguish Deception's Original-continuity cosmology from later Titan/New Era material;
6. follow supported Onaga/Shao Kahn/Shujinko chains without chronology-only edges being invented;
7. see intentional causal gaps where the sources establish sequence or context but not direct causation.

See `PHASE5_MANUAL_VERIFICATION.md`.

## Phase 6 — Systematic timeline expansion

Once the model and UX are proven, expand event-first through Original, Reboot, and New Era / MK1 / Khaos Reigns.

## Later infrastructure — only when justified

Possible future additions include generated search/SQLite indexes, graph indexes, authoring tools, automated source coverage, richer graph invariants, explicit contradiction relations, and fine-grained evidence locators. These are not goals until scale or real lore cases prove they are needed.
