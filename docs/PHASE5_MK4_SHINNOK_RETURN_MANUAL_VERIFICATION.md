# Phase 5 Manual Verification — MK4 / Shinnok Return

This checklist verifies the Original-continuity bridge from the later-confirmed MK3 outcome into Mortal Kombat 4 without converting chronological framing into unsupported causality.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then inspect Original continuity in the Explorer and `/causality`.

## 1. Shinnok escape

Open `Shinnok escapes the Netherrealm` and the associated Fact/source.

- [ ] The Event is Original-continuity only.
- [ ] Shinnok is the participant.
- [ ] `realmIds` contains `netherrealm` because the MK4 intro explicitly identifies the place of confinement/escape.
- [ ] The canon Fact `Shinnok escaped the Netherrealm` cites `Mortal Kombat 4 — Game Story`.
- [ ] No new Shinnok Character or variant was created.

## 2. MK3 → MK4 chronology without fake causality

Inspect chronology around:

`Earth warriors defeat Shao Kahn` → `Shinnok escapes the Netherrealm` → `The war against Shinnok resumes`.

- [ ] Chronology/story order presents these beats in that order.
- [ ] There is **no** causal edge `Earth warriors defeat Shao Kahn → Shinnok escapes the Netherrealm`.
- [ ] The phrase `after Shao Kahn's defeat` is treated as chronological framing, not proof that the defeat caused or enabled Shinnok's escape.
- [ ] There is **no** direct causal edge `Shinnok escapes the Netherrealm → The war against Shinnok resumes` unless stronger source language is added later.
- [ ] `/causality` therefore may show these as separate/disconnected causal components even though the chronology rail places them consecutively.

## 3. Renewed conflict

Open `The war against Shinnok resumes` and its Fact.

- [ ] The record preserves MK4's broad resumed-war framing.
- [ ] The Event does not invent a Realm location from the ancient-war context.
- [ ] The Event does not invent a detailed participant roster not named by the intro.
- [ ] The associated Fact remains broad rather than fabricating a specific battle, army, or victor.

## 4. Quan Chi discipline

Inspect Shinnok/Quan Chi related records.

- [ ] Existing Mythologies evidence about Quan Chi's alliance with Shinnok remains intact.
- [ ] This slice does **not** claim Quan Chi personally caused the specific MK4 escape unless a primary source directly establishes that mechanism.
- [ ] The older alliance/escape-attempt context is not silently converted into a new direct causal edge merely because it is plausible.

## 5. Source provenance

Open `Mortal Kombat 4 — Game Story`.

- [ ] The Source is still `game_story` for Mortal Kombat 4 (1997).
- [ ] Mortal Kombat Warehouse is described as preservation/access infrastructure, not canonical authority.
- [ ] Source notes now cover all load-bearing claims used by this slice: Shao Kahn's defeat as prior history, Shinnok's escape, and the resumed war.

## 6. Continuity and model regression

- [ ] No Reboot/New Era Shinnok material leaks into Original continuity.
- [ ] No schema change was introduced.
- [ ] Existing ancient `Shinnok wars with Raiden → Shinnok is banished` history remains a separate earlier causal component.
- [ ] The new MK4 records extend chronology without pretending the entire ancient-to-MK4 history is one continuous causal chain.

## 7. DoD / final readiness

Before this PR is marked Ready for review:

- [ ] Review `AGENTS.md`, `LORE_MODEL.md`, and `DEFINITION_OF_DONE.md` against the final implementation.
- [ ] `CHANGELOG.md` has been reviewed/updated.
- [ ] `ROADMAP.md` reflects the active MK4 slice.
- [ ] PR description matches the final evidence/causality choices.
- [ ] Final-head `pnpm check` is green.
- [ ] No known lore/evidence/causality blocker remains.
