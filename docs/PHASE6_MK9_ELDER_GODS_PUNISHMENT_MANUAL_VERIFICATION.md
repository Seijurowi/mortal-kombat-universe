# Phase 6 — MK9 Elder Gods intervention, punishment, and Shao Kahn defeat manual verification

Use this checklist to verify the Reboot slice covering the Elder Gods' response to Shao Kahn's illegal merger, Raiden's empowerment, and Shao Kahn's final MK9 defeat.

## Before you start

This slice begins with the already-modeled illegal merger occurrence and ends with Shao Kahn's final MK9 defeat. It does not add a separate confirmed death state or later MKX/MK11 consequences.

Start locally with:

```bash
git checkout agent/phase6-mk9-elder-gods-punishment
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Action-level maintainer test cases

### 1. Verify the end-of-MK9 chronology

1. Open `/causality`.
2. Select **Reboot Timeline**.
3. Scroll to the end of the chronology.
4. Confirm the visible order is:
   - `Shao Kahn begins illegally merging Earthrealm and Outworld` — 380;
   - `The Elder Gods intervene against Shao Kahn` — 390;
   - `Shao Kahn suffers his final MK9 defeat` — 400.

Expected:
- intervention and final defeat are separate cards;
- no umbrella event collapses the violation, intervention, and fight.

### 2. Verify merger → intervention causality

1. Select `The Elder Gods intervene against Shao Kahn`.
2. Inspect **Whole causal chain** and **Local cause / effect**.

Expected:
- **Why?** points to the illegal merger occurrence;
- **What next?** points to Shao Kahn's final defeat;
- the chain reads `illegal merger → Elder Gods intervention → final defeat`.

Must not appear:
- Liu Kang's death as a direct cause of the intervention;
- the earlier invasion/refusal Event as a direct cause merely because it explains the rule historically.

### 3. Inspect the intervention Event

Open the full dossier.

Expected:
- Reboot timeline;
- participants: Elder Gods, Raiden, Shao Kahn;
- Earthrealm scene scope;
- the Elder Gods intervene only after the prohibited merger violation;
- golden dragon forms restore/empower Raiden;
- the Elder Gods declare Shao Kahn's violation and penalty;
- the Event ends before the fight outcome.

### 4. Inspect the final-defeat Event

Open `Shao Kahn suffers his final MK9 defeat`.

Expected:
- Reboot / Earthrealm;
- participants: Shao Kahn, Raiden, Elder Gods;
- description says Elder-God-empowered Raiden wins the fight;
- the golden dragon forms continue the punishment afterward;
- Shao Kahn disappears in the final golden blast.

Must not appear:
- an unsupported claim that ordinary unassisted Raiden defeated Shao Kahn;
- a new `killed_by` or permanent-death assertion;
- later MKX/MK11 state projected backward.

### 5. Inspect Raiden's empowerment Fact

In **Explorer → Reboot Timeline → Facts**, search `The Elder Gods empowered Raiden against Shao Kahn`.

Expected:
- subject: Raiden;
- predicate: `empowered by`;
- object: Elder Gods;
- canon / Reboot / MK9 story source;
- notes connect the empowerment to the Elder Gods' response to the merger violation.

### 6. Inspect the punishment Fact

Search `The Elder Gods punished Shao Kahn for the illegal merger`.

Expected:
- subject: Shao Kahn;
- predicate: `punished by`;
- object: Elder Gods;
- canon / Reboot / MK9 story source;
- notes preserve the rule violation and do not silently turn punishment into a separate permanent death Fact.

### 7. Inspect the final victor Fact

Search `Shao Kahn was finally defeated by Raiden in MK9`.

Expected:
- subject: Shao Kahn;
- predicate: `defeated by`;
- value: Raiden;
- canon / Reboot / MK9 story source;
- notes qualify that Raiden was empowered by the Elder Gods and that their dragon forms continued the punishment after the fight.

### 8. Regression against the earlier refusal

Open the earlier `The Elder Gods refuse to intervene in Earthrealm's invasion` Event and its rule Facts.

Expected:
- the earlier refusal remains correct because invasion alone was not a Mortal Kombat transgression;
- the new intervention occurs only after the separately modeled illegal merger;
- the UI must not make the two Elder Gods decisions look contradictory without their differing conditions.

### 9. Quick mobile check

At narrow/mobile width:
- open the three endgame chronology cards;
- follow the causal chain;
- open the two new Events and three new Facts.

Expected:
- chronology remains scrollable;
- causal cards remain legible;
- participant/source/canon metadata remains accessible.

## Evidence/model checklist

- [ ] Illegal merger → Elder Gods intervention is mirrored and source-supported.
- [ ] Intervention → final defeat is mirrored and source-supported.
- [ ] Intervention and fight outcome remain separate occurrences.
- [ ] Raiden's victory is qualified by Elder Gods empowerment.
- [ ] Elder Gods punishment remains separately visible from the fight-victor attribution.
- [ ] No unsupported permanent-death Fact is added for Shao Kahn.
- [ ] Earlier refusal remains valid under the invasion-vs-merger rule distinction.
- [ ] Earthrealm `realmIds` remains scene scope only.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
