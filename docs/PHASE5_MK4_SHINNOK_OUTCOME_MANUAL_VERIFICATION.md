# Phase 5 Manual Verification — MK4 / Shinnok Outcome

This checklist verifies the later-confirmed Original-continuity outcome of Shinnok's Mortal Kombat 4 return without promoting one arcade ending or a probable individual victor into stronger canon than the evidence supports.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

Then inspect Original continuity in the Explorer, `/causality`, and source/fact dossiers.

## 1. Broad Shinnok defeat outcome

Open `Shinnok is defeated` and `Shinnok was defeated`.

- [ ] The Event and Fact are Original-continuity only.
- [ ] The Fact is `canon` because a later primary Original-continuity biography independently treats Shinnok's earlier defeat as established history.
- [ ] The Fact stays broad (`was_defeated: true`) rather than naming an individual victor.
- [ ] The Event includes Shinnok as the only structured participant unless stronger direct evidence is added later.
- [ ] The Event does not claim Shinnok died, was imprisoned, was banished, or suffered another specific post-defeat state not established by this source.

## 2. Ending discipline / victor attribution

Inspect Liu Kang, Johnny Cage, and Shinnok-related records around MK4.

- [ ] This slice does **not** say `Liu Kang defeated Shinnok` merely because Liu Kang has an MK4 arcade ending or is a plausible central hero.
- [ ] Johnny Cage's first-person retrospective is used to establish the broad historical outcome, not to manufacture a complete victor roster.
- [ ] No MK4 arcade ending is promoted wholesale to canon by the later biography.
- [ ] If an individual victor is added later, that change requires direct Original-continuity corroboration at that narrower level.

## 3. Chronology without fake causality

Inspect the continuity-wide chronology around:

`Shinnok escapes the Netherrealm` → `The war against Shinnok resumes` → `Shinnok is defeated`.

- [ ] The three beats appear in that chronological order.
- [ ] `Shinnok is defeated` is reachable through Previous/Next chronology navigation.
- [ ] There is **no** direct causal edge `The war against Shinnok resumes → Shinnok is defeated` based only on story order and later outcome confirmation.
- [ ] The causal tree therefore keeps the defeat as its own causal context unless a source later establishes a direct mechanism/parent event.

## 4. Realm and participant discipline

- [ ] `Shinnok is defeated` has `realmIds: []` because the Armageddon biography does not identify the battle location.
- [ ] No Realm is inferred from Shinnok's affiliation, the MK4 return setup, or likely battle geography.
- [ ] No named fighter is added to `participantIds` merely from franchise familiarity or ending plausibility.

## 5. Source provenance

Open `Mortal Kombat: Armageddon — Johnny Cage Biography`.

- [ ] It is represented as a primary in-game biography (`game_bio`, 2006).
- [ ] Mortal Kombat Warehouse is described as preservation/access infrastructure rather than canonical authority.
- [ ] Source notes explain exactly what is promoted: broad prior defeat of Shinnok.
- [ ] Source notes also explain what remains unproven: individual victor, complete roster, exact location, and direct causal bridge.

## 6. Regression / continuity boundaries

- [ ] PR #15's MK3 → MK4 chronology remains intact.
- [ ] `Earth warriors defeat Shao Kahn → Shinnok escapes → renewed war → Shinnok defeated` reads as chronology, not one fabricated causal chain.
- [ ] No Reboot/MKX Shinnok history is used as Original-continuity evidence.
- [ ] Existing ancient Shinnok history remains separate from the MK4-era outcome unless explicit causal evidence connects it.
- [ ] No lore schema change was introduced.

## 7. DoD / final readiness

Before this PR is marked Ready for review:

- [ ] Review `AGENTS.md`, `LORE_MODEL.md`, and `DEFINITION_OF_DONE.md` against the final implementation.
- [ ] `CHANGELOG.md` has been reviewed/updated.
- [ ] `ROADMAP.md` reflects the active Shinnok-outcome slice.
- [ ] PR description matches the final evidence/causality choices.
- [ ] Final-head `pnpm check` is green.
- [ ] Manual UI/source pass is complete.
- [ ] No known lore/evidence/causality blocker remains.
