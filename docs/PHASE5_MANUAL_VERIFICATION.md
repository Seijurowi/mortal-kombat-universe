# Phase 5 Manual Verification — Cosmology and Ancient History

This checklist verifies the first Deception-era cosmology slice without flattening later continuities into it.

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

## 1. Earliest cosmology records

- [ ] Search for `One Being` and open its dossier.
- [ ] The One Being is scoped to Original continuity rather than presented as universal across all timelines.
- [ ] Search for `Elder Gods` and confirm the collective is a Faction, not a fabricated single Character.

## 2. Creation event

Open `Elder Gods shatter the One Being`.

- [ ] Both `Elder Gods` and `One Being` appear as participants.
- [ ] The event is Original-continuity only.
- [ ] The six Deception Konquest realms are attached to the event.
- [ ] The ancient order value places it before ordinary tournament-era events without creating causal edges by chronology alone.

## 3. Six-realm Deception scope

Confirm the dataset contains and can navigate:

- [ ] Earthrealm
- [ ] Netherrealm
- [ ] Outworld
- [ ] Orderrealm / Seido
- [ ] Chaosrealm
- [ ] Edenia

Do not infer that this six-realm list is an exhaustive list of every realm ever mentioned in every continuity.

## 4. Evidence

- [ ] The Shujinko biography source is identified as an in-game bio even though the accessible URL is a preservation/reproduction page.
- [ ] The Deception instruction booklet is identified as an official game manual preserved on a third-party archive.
- [ ] The shattering Fact cites the Shujinko biography.
- [ ] The realms-from-One-Being Fact exposes both the biography and manual context.
- [ ] The Kamidogu reawakening Fact does not invent a separate causal event chain that the current source does not establish.

## 5. Participant model change

- [ ] Existing Character-only events still render normally.
- [ ] The new cosmology event can include a Faction participant.
- [ ] No Faction was duplicated as a fake Character merely to satisfy validation.

This is the concrete Phase 5 schema-pressure case: collective actors such as the Elder Gods can participate in events. The validator now accepts `Character | Faction` for `participantIds`.

## 6. Continuity discipline

- [ ] Deception creation-myth claims are not copied into Reboot or New Era without independent evidence.
- [ ] MK11 Titan/Kronika cosmology is not silently reconciled with Deception cosmology yet.
- [ ] Future comparison should use scoped Facts/claim history rather than rewriting this Original-continuity material.

## 7. Responsive/navigation checks

- [ ] One Being, Elder Gods, realms, event, facts, and sources are reachable through normal Explorer navigation.
- [ ] `/claims` can inspect the new Facts without inventing contradiction semantics.
- [ ] `/causality` does not manufacture ancient causal branches just because the event has an early `order` value.

## Decision after this slice

Before expanding into Onaga and Shinnok, answer:

- Does `Character` remain an acceptable representation for unique non-playable beings such as the One Being?
- Is `Faction` sufficient for collective divine groups such as the Elder Gods?
- Does allowing Factions as event participants remain clear in the UI?
- Do we need a first-class Artifact entity for Kamidogu once their individual histories become navigable, or can Facts continue to carry that concept for now?
