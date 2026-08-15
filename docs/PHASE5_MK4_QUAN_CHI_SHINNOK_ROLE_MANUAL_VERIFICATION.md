# Phase 5 Manual Verification — MK4 Quan Chi / Shinnok Role

This checklist verifies the Original-continuity role detail added around the MK4 / Mortal Kombat Gold conflict without retroactively inventing a specific mechanism for Shinnok's escape or over-ordering Quan Chi's later amulet theft.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then inspect Original continuity in the Explorer, `/causality`, claim/fact dossiers, and source dossiers.

## 1. Quan Chi as an active MK4/Gold opponent

Open `Kitana joins the battle against Shinnok and Quan Chi`.

- [ ] The Event is Original-continuity only.
- [ ] Participants are Kitana, Shinnok, and Quan Chi.
- [ ] The Event description reflects Mortal Kombat Gold's Kitana biography rather than franchise familiarity.
- [ ] The Event does **not** say Quan Chi caused Shinnok's Netherrealm escape.
- [ ] The Event does **not** say Kitana defeated Shinnok or Quan Chi.

## 2. Battle Facts stay atomic

Open `Kitana battled Shinnok` and `Kitana battled Quan Chi`.

- [ ] Both Facts are `canon`, Original-only, and sourced to the Mortal Kombat Gold Kitana biography.
- [ ] `Kitana battled Shinnok` does not become `Kitana defeated Shinnok`.
- [ ] `Kitana battled Quan Chi` does not become evidence that Quan Chi caused Shinnok's escape.
- [ ] No complete battle roster is inferred beyond the directly named participants.

## 3. Chronology without invented causality

Inspect the Original chronology around:

`The war against Shinnok resumes` → `Kitana joins the battle against Shinnok and Quan Chi` → `Shinnok is defeated`.

- [ ] The three beats appear in that chronological order.
- [ ] The battle is reachable with Previous/Next chronology navigation.
- [ ] There is no direct causal edge from the resumed-war Event to Kitana's battle merely from order.
- [ ] There is no direct causal edge from Kitana's battle to Shinnok's defeat; the source confirms participation, not that this exact battle caused the later-confirmed broad defeat.

## 4. Realm discipline

- [ ] `Kitana joins the battle against Shinnok and Quan Chi` has `realmIds: []`.
- [ ] Edenia is **not** attached as the battle Realm merely because Quan Chi's forces are described as leaving Edenia before Kitana moves into battle.
- [ ] No destination Realm is inferred for the battle from likely MK4/Gold geography.

## 5. Quan Chi and Shinnok's amulet

Open `Quan Chi stole Shinnok's amulet` and `Mortal Kombat: Deadly Alliance — Quan Chi Biography`.

- [ ] The Fact is Original-only and `canon`.
- [ ] The source directly supports the narrow claim that Quan Chi had stolen the amulet from Shinnok.
- [ ] No precisely ordered theft Event is created because the later biography does not date the theft sufficiently relative to Shinnok's defeat.
- [ ] No `Shinnok defeated → Quan Chi stole the amulet` causal edge is invented.
- [ ] The theft Fact does not by itself assert that Shinnok died, was banished again, or was imprisoned.

## 6. Source provenance / continuity boundaries

- [ ] Mortal Kombat Warehouse is described as preservation/access infrastructure, not canonical authority.
- [ ] Mortal Kombat Gold and Deadly Alliance are treated as Original-continuity primary game material.
- [ ] Reboot/MKX material about Quan Chi helping Shinnok escape is **not** projected back onto Original continuity.
- [ ] The ancient Mythologies alliance remains separate from the later MK4/Gold combat role unless direct evidence supports a specific causal bridge.

## 7. Regression / DoD

- [ ] PR #15's chronology-only MK3 → Shinnok-return bridge remains intact.
- [ ] PR #16's broad `Shinnok was defeated` outcome remains broad and does not gain an unsupported individual victor.
- [ ] Existing DAG/chronology rendering remains unchanged.
- [ ] No lore schema change was introduced.
- [ ] `CHANGELOG.md` and `ROADMAP.md` reflect this slice.
- [ ] Final-head `pnpm check` is green before Ready for review.
- [ ] Final review against `AGENTS.md`, `LORE_MODEL.md`, and `DEFINITION_OF_DONE.md` has no unresolved blocker.
