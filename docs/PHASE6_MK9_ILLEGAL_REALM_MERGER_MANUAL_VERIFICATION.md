# Phase 6 — MK9 illegal realm merger manual verification

Use this checklist to verify the Reboot slice covering Shao Kahn's actual illegal Earthrealm/Outworld merger occurrence after Liu Kang's death.

## Before you start

This slice intentionally stops at the merger occurrence. The Elder Gods' later intervention/punishment and Shao Kahn's final defeat belong to the next slice.

Start locally with:

```bash
git checkout agent/phase6-mk9-illegal-merger
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Action-level maintainer test cases

### 1. Find the new chronology endpoint

1. Open `/causality`.
2. Select **Reboot Timeline**.
3. Scroll to **Chronology · full continuity** near the end of MK9 coverage.
4. Confirm the visible order is:
   - `Raiden proposes allowing Shao Kahn to merge the realms` — 350;
   - `Raiden and Liu Kang fight over Shao Kahn` — 360;
   - `Liu Kang dies after clashing with Raiden` — 370;
   - `Shao Kahn begins illegally merging Earthrealm and Outworld` — 380.

Expected:
- the merger is a distinct occurrence after the earlier plan and Liu Kang's death;
- the new Event is the current chronology endpoint.

Must not appear:
- Elder Gods intervention/punishment;
- Shao Kahn's final defeat;
- a completed permanent merged-realm state.

### 2. Check chronology versus causality

1. Select `Shao Kahn begins illegally merging Earthrealm and Outworld`.
2. Inspect **Whole causal chain** and **Local cause / effect**.

Expected:
- the merger is readable in chronology after Liu Kang's death;
- it is not attached to Liu Kang's death merely because it happens next;
- it is not attached directly to Raiden's allow-merger plan merely because Raiden intended to permit it.

Must not appear:
- `Liu Kang death → merger` as a causal edge;
- `allow-merger plan → merger` as a direct causal edge without source evidence that Raiden caused Shao Kahn's decision/action;
- an Elder Gods child Event yet.

### 3. Inspect the merger Event dossier

1. Open the full dossier for the new Event.
2. Confirm **Timeline = Reboot**.
3. Confirm **Participant = Shao Kahn**.
4. Confirm **Realm = Earthrealm**.
5. Read the description.

Expected:
- Shao Kahn completes his portal passage into Earthrealm;
- the Event states that the actual prohibited merger begins;
- the later Elder Gods judgment is used only to identify the act as merging realms without Mortal Kombat victory;
- the Event stops before intervention, punishment, and defeat.

Must not appear:
- Outworld added to `realmIds` as though both realms were scene locations;
- language claiming the merged state became permanent or survived the Elder Gods' response.

### 4. Inspect the sourced merger Fact

1. Open **Explorer → Reboot Timeline → Facts**.
2. Search for `Shao Kahn began merging Earthrealm with Outworld without a Mortal Kombat victory`.
3. Open the matching Fact.

Expected:
- subject: Shao Kahn;
- predicate: `began merging`;
- object: Earthrealm;
- continuity: Reboot;
- canon status: canon;
- source: `Mortal Kombat (2011) Story Mode`;
- notes explicitly identify Outworld, the no-victory violation, and the ongoing/interrupted nature of the merger.

### 5. Check Realm action-object semantics

Inspect the Event and Fact together.

Expected:
- Event `realmIds: ["earthrealm"]` describes scene scope only;
- the merger assertion is carried by the sourced Fact with Earthrealm as the Realm object;
- Outworld is named in the claim/notes without abusing Event `realmIds` as merger outputs.

### 6. Negative endgame boundary check

Search the current Reboot chronology and Shao Kahn dossier.

Do not expect yet:
- a separate Elder Gods intervention Event;
- a separate punishment/judgment Event;
- Shao Kahn's final defeat Event/Fact from this scene;
- Liu Kang's later formal revenant-state confirmation.

Those remain deferred rather than collapsed into this occurrence.

### 7. Quick regression/mobile check

1. Resize the browser to a narrow/mobile width.
2. Re-open `/causality` → **Reboot Timeline**.
3. Select the new merger Event.
4. Open its dossier and the new merger Fact in Explorer.

Expected:
- chronology remains horizontally usable;
- cards and navigation remain readable;
- source/canon metadata is accessible;
- the preceding plan/confrontation/death records remain reachable.

## Evidence/model checklist

- [ ] The actual merger occurrence is distinct from Raiden's earlier plan.
- [ ] Liu Kang's death precedes the merger without becoming its unsupported cause.
- [ ] The plan does not directly cause Shao Kahn's merger action unless stronger evidence is added.
- [ ] Earthrealm `realmIds` is scene scope only.
- [ ] A sourced Fact carries the realm-merger assertion.
- [ ] The claim is an ongoing/begun merger, not a completed permanent merged state.
- [ ] Elder Gods intervention/punishment and Shao Kahn's final defeat remain deferred.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
