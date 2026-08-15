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

- [ ] `/causality` chronology is **continuity-wide**, not limited to the currently selected causal component.
- [ ] These three beats appear consecutively in the expected story order even though they are not joined by direct causal edges.
- [ ] Focusing `Shinnok escapes the Netherrealm` shows `Earth warriors defeat Shao Kahn` as **Previous in chronology** and `The war against Shinnok resumes` as **Next in chronology**.
- [ ] Clicking Previous/Next moves the selected Event even when that move changes causal component or lands on a causally isolated Event.
- [ ] The selected chronology card scrolls into view rather than leaving the focused Event off-screen in a long Original timeline.
- [ ] The `then` connector in the chronology strip reads as story order only; the explanatory text still says chronological neighbors are not automatically causal.
- [ ] There is **no** causal edge `Earth warriors defeat Shao Kahn → Shinnok escapes the Netherrealm`.
- [ ] The phrase `after Shao Kahn's defeat` is treated as chronological framing, not proof that the defeat caused or enabled Shinnok's escape.
- [ ] There is **no** direct causal edge `Shinnok escapes the Netherrealm → The war against Shinnok resumes` unless stronger source language is added later.
- [ ] The causal tree changes independently from chronology and therefore may show separate/singleton components for these beats.

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
- [ ] Source notes cover all load-bearing claims used by this slice: Shao Kahn's defeat as prior history, Shinnok's escape, and the resumed war.

## 6. Continuity and model regression

- [ ] No Reboot/New Era Shinnok material leaks into Original continuity.
- [ ] No lore schema change was introduced.
- [ ] Existing ancient `Shinnok wars with Raiden → Shinnok is banished` history remains a separate earlier causal component.
- [ ] The new MK4 records extend chronology without pretending the entire ancient-to-MK4 history is one continuous causal chain.
- [ ] Existing real DAG merge rendering still shows one full shared Event plus merge references.

## 7. Shadcn UI inventory regression

This branch also contains the maintainer-added full Shadcn UI component inventory under `components/ui/`.

- [ ] Existing app controls still render with the established Base UI / shadcn preset behavior.
- [ ] No existing component import was unintentionally replaced by an incompatible API.
- [ ] Keyboard/focus behavior on the affected `/causality` controls remains usable.
- [ ] `package.json` and `pnpm-lock.yaml` stay synchronized and frozen-lockfile installation succeeds.

## 8. DoD / final readiness

Before this PR is marked Ready for review:

- [ ] Review `AGENTS.md`, `LORE_MODEL.md`, and `DEFINITION_OF_DONE.md` against the final implementation.
- [ ] `CHANGELOG.md` has been reviewed/updated for both the lore/chronology UX change and the intentional Shadcn inventory expansion.
- [ ] `ROADMAP.md` reflects the active MK4 slice.
- [ ] PR description matches the final evidence/causality/UX choices and acknowledges the expanded component-inventory scope.
- [ ] Final-head `pnpm check` is green.
- [ ] No known lore/evidence/causality/UI blocker remains.
