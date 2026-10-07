# Phase 6 — MK9 Liu Kang confrontation and death manual verification

Use this checklist to verify the Reboot slice covering Liu Kang's confrontation with Raiden and Liu Kang's accidental death during their clash.

## Before you start

If you are checking locally:

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

The floating navigation in the bottom-right gives you the two views used most in this checklist:

- **Explorer** — entity/Event/Fact dossiers and search;
- **Causality** — full Reboot chronology plus explicit cause/effect chains.

For this slice, keep **Reboot Timeline** selected whenever the UI offers a continuity filter.

## Action-level maintainer walkthrough

### 1. Confirm the three-step chronology in Causality

**Where:** click **Causality** in the bottom-right navigation.

**Actions:**
1. In the **Continuity** section, select **Reboot Timeline**.
2. Find the horizontal card strip titled **Chronology · full continuity**.
3. Scroll near the end of the current MK9 sequence.
4. Find and click `Raiden proposes allowing Shao Kahn to merge the realms`.
5. Use **Next in chronology** or the chronology cards to move forward twice.

**Expect:**
- first: `Raiden proposes allowing Shao Kahn to merge the realms`;
- next: `Raiden and Liu Kang fight over Shao Kahn`;
- next: `Liu Kang dies after clashing with Raiden`.

**Must not appear:**
- the confrontation and death collapsed into one Event;
- Shao Kahn's actual realm merger inserted between these new Events unless a later slice adds it explicitly.

### 2. Confirm the causal chain, not just story order

**Where:** stay on **Causality** with **Reboot Timeline** selected.

**Actions:**
1. Click `Raiden proposes allowing Shao Kahn to merge the realms` in the chronology strip.
2. Scroll to **Whole causal chain**.
3. Confirm the tree continues from the plan into `Raiden and Liu Kang fight over Shao Kahn`.
4. Click the confrontation node.
5. Confirm its child is `Liu Kang dies after clashing with Raiden`.
6. Scroll to **Local cause / effect** and inspect **Why?** / **What next?** for the confrontation and death Events.

**Expect:**
- `allow-merger plan → confrontation → Liu Kang death`;
- when the confrontation is selected, **Why?** shows the allow-merger plan and **What next?** shows Liu Kang's death;
- when the death is selected, **Why?** shows the confrontation.

**Must not appear:**
- a direct shortcut `allow-merger plan → Liu Kang death`;
- a new causal edge from Liu Kang's death to the actual merger, Elder Gods punishment, or Shao Kahn's final defeat.

### 3. Open the confrontation Event dossier

**Where:** **Causality** → select `Raiden and Liu Kang fight over Shao Kahn`.

**Actions:**
1. In the selected Event card, click **Open full event dossier**.
2. The app should return to **Explorer** with the Event already opened and Reboot still selected.
3. In the Event metadata, inspect **Timeline**, **Caused by**, **Consequences**, **Participants**, and **Realms**.
4. Read the Event description.

**Expect:**
- Timeline: **Reboot Timeline**;
- Participants: **Raiden**, **Liu Kang**;
- Realms: **Earthrealm**;
- **Caused by:** `Raiden proposes allowing Shao Kahn to merge the realms`;
- **Consequences:** `Liu Kang dies after clashing with Raiden`;
- description says Raiden repeatedly stops Liu Kang from fighting Shao Kahn because Raiden is carrying out the allow-merger strategy;
- the Event ends before the lethal lightning/fire collision.

**Must not appear:**
- wording that Liu Kang is already dead inside this confrontation Event;
- wording that Shao Kahn has already completed the realm merger.

### 4. Open the Liu Kang death Event dossier

**Where:** from the confrontation dossier, click the linked consequence `Liu Kang dies after clashing with Raiden`; alternatively use **Back to index**, select **Events**, and search the exact Event name.

**Actions:**
1. Open the death Event.
2. Inspect the same metadata rows.
3. Read the complete description.

**Expect:**
- Timeline: **Reboot Timeline**;
- Participants: **Liu Kang**, **Raiden**;
- Realms: **Earthrealm**;
- **Caused by:** `Raiden and Liu Kang fight over Shao Kahn`;
- sequence is readable as:
  1. Liu Kang charges Raiden while using fire;
  2. Raiden raises a lightning shield in self-defense;
  3. Liu Kang collides with the shield;
  4. lightning + Liu Kang's own fire injure him;
  5. Raiden reacts that this was not meant to happen and asks forgiveness;
  6. Liu Kang dies from the injuries.

**Must not appear:**
- intentional execution;
- deliberate murder;
- a claim that Raiden wanted Liu Kang dead.

### 5. Inspect the killer Fact

**Where:** click **Explorer** in the bottom-right navigation.

**Actions:**
1. In the left sidebar under **Timeline**, select **Reboot Timeline**.
2. Under **Explore**, click **Facts**.
3. In the search box, enter `Raiden killed Liu Kang`.
4. Open the matching Fact dossier.
5. Inspect its badges, subject/object links, notes, and source.

**Expect:**
- Fact name: `Raiden killed Liu Kang`;
- canon badge: **canon**;
- timeline badge: **Reboot Timeline**;
- subject: **Liu Kang**;
- predicate: `killed by`;
- object: **Raiden**;
- source: **Mortal Kombat (2011) Story Mode**;
- notes explicitly say the fatal outcome came from the lightning-shield collision and must not be presented as an intentional execution.

**Must not appear:**
- `murdered_by`;
- wording that removes the accidental/unintended context.

### 6. Inspect the self-defense qualifier Fact

**Where:** stay in **Explorer → Reboot Timeline → Facts**.

**Actions:**
1. Replace the search text with `Raiden acted in self-defense against Liu Kang`.
2. Open the matching Fact dossier.
3. Inspect canon/timeline/source and the notes.

**Expect:**
- canon: **canon**;
- timeline: **Reboot Timeline**;
- subject: **Raiden**;
- object: **Liu Kang**;
- source: **Mortal Kombat (2011) Story Mode**;
- notes explain that Liu Kang charges Raiden and Raiden generates the lightning shield defensively.

**Must not appear:**
- any implication that this qualifier reverses or weakens the confirmed death;
- any implication that self-defense proves Raiden intended the fatal outcome.

### 7. Check Liu Kang's character dossier

**Where:** **Explorer**.

**Actions:**
1. Select **Reboot Timeline**.
2. Under **Explore**, click **Characters**.
3. Search `Liu Kang`.
4. Open Liu Kang.
5. Scroll through **Chronology** and **Facts**.

**Expect:**
- both new Events appear in his Reboot chronology;
- the `Raiden killed Liu Kang` Fact appears in his Fact list;
- Original and New Era material does not leak into the Reboot reading mode.

**Must not appear:**
- a new revenant-state Fact from this slice;
- an automatic resurrection/revenant transition after the death.

### 8. Check Raiden's character dossier

**Where:** **Explorer → Reboot Timeline → Characters**.

**Actions:**
1. Search `Raiden`.
2. Open Raiden.
3. Inspect **Chronology** and **Facts** around the end of MK9.

**Expect:**
- allow-merger plan → confrontation → Liu Kang death appear in chronological order;
- the self-defense Fact is visible;
- the death attribution involving Raiden is discoverable from his dossier as an object-linked Fact.

**Must not appear:**
- a character-level timeless statement that Raiden is a murderer;
- New Era mortal-Raiden data mixed into the Reboot-only reading mode.

### 9. Confirm the deferred endgame is still absent

**Where:** **Explorer** and **Causality**, still filtered to Reboot.

**Actions:**
1. Search Events for terms such as `merger`, `Elder Gods`, and `Shao Kahn`.
2. Look at chronology after Liu Kang's death.
3. Inspect the death Event's **Consequences** / Causality **What next?**.

**Expect:**
- this PR stops at Liu Kang's death;
- the actual illegal realm-merger occurrence, Elder Gods intervention/punishment, and Shao Kahn's final defeat are not newly modeled by this slice.

**Must not appear:**
- Liu Kang's death being used as proof that the realm merger has already happened;
- a fabricated death → merger or death → Elder Gods causal edge.

### 10. Quick responsive/regression pass

**Where:** both **Explorer** and **Causality**.

**Actions:**
1. Narrow the browser to roughly phone width.
2. Open the confrontation Event, death Event, and both new Fact dossiers.
3. Open **Causality** and select each of the three chain Events.
4. Return to desktop width.

**Expect:**
- cards remain readable without horizontal page overflow;
- the chronology rail itself may scroll horizontally as designed;
- bottom-right **Explorer / Causality / Claims / Cosmology** navigation remains usable;
- **Open full event dossier**, participant links, **Back to index**, and timeline filtering still work.

## Evidence/model checklist

- [ ] Confrontation and death are two distinct occurrences.
- [ ] `plan → confrontation → death` is mirrored and source-supported.
- [ ] Liu Kang's death is confirmed, not qualified as merely apparent or possible.
- [ ] `killed_by = Raiden` remains qualified by separate self-defense/unintended evidence.
- [ ] The death is not presented as an intentional execution.
- [ ] Earthrealm `realmIds` is location/scope only.
- [ ] Actual merger, Elder Gods punishment, final defeat, and revenant state remain deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
