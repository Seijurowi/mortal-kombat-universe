# Manual Verification Checklist

This file records checks that should be performed by a human after the Bi-Han lore stress-test implementation. Automated schema validation can prove structure and references; it cannot prove that a lore interpretation is correct.

## 1. Run the application

```bash
pnpm install
pnpm check
pnpm dev
```

Open the local app and verify there are no runtime errors or hydration warnings.

## 2. Bi-Han timeline behavior

Search for `Bi-Han` and inspect each timeline separately.

### Original

Confirm the UI communicates this chain without implying more than the evidence supports:

`Hanzo dies → returns as Scorpion → Scorpion kills Bi-Han → Bi-Han later appears as Noob Saibot`

Important: the Original-timeline Noob transformation must **not** state as settled fact that Quan Chi transformed or resurrected Bi-Han unless a primary/official Original-continuity source is added that explicitly establishes it.

### Reboot

Confirm the UI can show:

`Bi-Han kills Hanzo → Quan Chi resurrects Hanzo as Scorpion → Scorpion kills Bi-Han → Quan Chi resurrects Bi-Han as Noob Saibot`

Also confirm Quan Chi's responsibility for the Shirai Ryu massacre is scoped to the Reboot evidence and does not leak into the Original or New Era filters.

### New Era

Confirm the UI shows Kuai Liang as Scorpion and Bi-Han as Sub-Zero before the Khaos Reigns transformation.

After the Khaos Reigns event, Bi-Han should be discoverable through the `Noob Saibot` identity without creating a second person node.

## 3. Source spot-checks in the games

These are the highest-value manual checks because several web sources are archival transcriptions of in-game text.

- [ ] **Mortal Kombat: Deception — Noob-Smoke ending:** verify it explicitly identifies Noob Saibot as the original Sub-Zero and says he died at Scorpion's hands.
- [ ] **Mortal Kombat (2011) — Scorpion bio/story:** verify Quan Chi resurrects Hanzo/Scorpion and the Bi-Han revenge setup.
- [ ] **Mortal Kombat 11 — Noob Saibot bio:** verify Bi-Han was killed by Scorpion and resurrected by Quan Chi with darkness powers.
- [ ] **Mortal Kombat 11 — Scorpion bio:** verify Quan Chi is described as the murderer of Hanzo's family/clan and that Hanzo ultimately kills him.
- [ ] **Mortal Kombat 1 — Scorpion ending:** verify Kuai Liang and Harumi create/name the New Era Shirai Ryu. Decide whether the project should keep this fact `supplemental` or promote it to `canon` based on Khaos Reigns story confirmation.
- [ ] **Mortal Kombat 1: Khaos Reigns — Noob Saibot bio/story:** verify the exact transformation wording: Bi-Han, Titan Havik, soul theft/transformation, and whether `died` should be modeled literally or as transformation language.
- [ ] **MK vs. DC Universe — Scorpion bio:** decide whether its retrospective statement that Quan Chi resurrected Scorpion is acceptable as supplemental evidence for the Original continuity or should be removed entirely because the title is a crossover continuity.

## 4. Causality review

Open the affected events and inspect `causeEventIds` / `consequenceEventIds`.

- [ ] The first Mortal Kombat tournament is chronological context for Bi-Han's death, **not** modeled as its cause.
- [ ] Hanzo's return as Scorpion may be modeled as a meaningful prerequisite for his revenge killing of Bi-Han.
- [ ] Bi-Han's death may be modeled as the prerequisite for his later Noob Saibot state.
- [ ] No causal edge should exist merely because two events happen one after another.

## 5. Identity-model review

The current decision is: one person node, multiple sourced identities.

- [ ] Search `Sub-Zero` and verify Bi-Han and Kuai Liang remain distinguishable.
- [ ] Search `Scorpion` and verify Hanzo Hasashi and Kuai Liang remain distinguishable by timeline.
- [ ] Search `Noob Saibot` and verify it resolves to Bi-Han rather than a duplicate character entity.

If this becomes confusing in the UI, the next model evolution should likely be an explicit `Identity`/`Persona` entity or timeline-scoped alias structure—not duplicate `Character` records.

## 6. Known model pressure: Titan Havik

The New Era Noob origin involves a Titan Havik who comes from another timeline. The current three-timeline model cannot cleanly reference that variant as an entity without conflating him with other Havik versions.

For this milestone, the transformation fact stores Titan Havik as a sourced literal value rather than inventing a misleading `havik` relationship.

After reviewing Khaos Reigns, decide whether Phase 3 needs one of:

- timeline/variant-aware character instances,
- a `CharacterVariant` entity,
- a multiverse/titan timeline model,
- or a more general `EntityVersion` abstraction.

Do not choose one until the actual browsing experience demonstrates the need.

## 7. UI manual checks

- [ ] Timeline filters hide facts and events from other continuities.
- [ ] Sourced facts display source names and canon status clearly.
- [ ] Clicking a relationship never jumps to a same-name but wrong-continuity identity.
- [ ] Long source names and multiple evidence links do not break mobile layout.
- [ ] The dependency panel distinguishes person relationships from event causality clearly enough for a first-time reader.
