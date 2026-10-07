# Phase 6 — MKX revenant-state confirmation manual verification

Use this checklist to verify the first Mortal Kombat X bridge slice: later-primary character biographies formally confirm revenant state for Liu Kang, Kitana, and Kung Lao without retroactively strengthening earlier MK9 scenes.

## Scope boundary

This slice adds source-backed state Facts only. It deliberately does **not** create a synthetic revenant-conversion Event because the MKX biographies establish the transitions but do not establish one precise shared conversion moment or ordering among them.

Jax's revenant/restoration history is deferred because his MKX biography also establishes a later return-to-life state that deserves its own transition-focused slice rather than being flattened into a single boolean.

## Maintainer test cases

### 1. Inspect the new MKX source

1. Open **Explorer → Sources**.
2. Find `Mortal Kombat X — Character Biographies`.

Expected:
- source type: game biography;
- game: Mortal Kombat X;
- year: 2015;
- preservation URL points to Mortal Kombat Warehouse;
- notes clearly identify the biographies as primary in-game material and the website as access infrastructure only.

### 2. Inspect Liu Kang's revenant confirmation

Search `Liu Kang became a revenant under Quan Chi`.

Expected:
- subject: Liu Kang;
- predicate: `became revenant`;
- value: true;
- timeline: Reboot;
- canon;
- source: MKX Character Biographies;
- notes preserve the sequence death → soul collected by Quan Chi → revenant created.

Regression:
- Liu Kang's MK9 death remains accidental/self-defense-qualified;
- no causal edge is added from the MK9 death Event to a fabricated conversion Event.

### 3. Inspect Kitana's revenant confirmation

Search `Kitana became a revenant under Quan Chi`.

Expected:
- Reboot canon state confirmation;
- source is MKX Character Biographies;
- the Fact supplements her prior death and MK9 soul-control evidence rather than rewriting those records.

### 4. Inspect Kung Lao

Open the new stable `Kung Lao` Character and the revenant Fact.

Expected:
- the Character is distinct from `Great Kung Lao`;
- current timeline scope is Reboot only;
- Earthrealm / White Lotus identity is represented without duplicating the ancestor;
- revenant state is a sourced Fact rather than timeless Character metadata.

### 5. Check chronology/causality

Open `/causality` → Reboot.

Expected:
- the end of the MK9 chronology remains the Shao Kahn final-defeat Event;
- no new revenant-conversion Event appears;
- no artificial `MK9 death → revenant conversion` edges appear;
- the source-backed revenant state is discoverable through Facts/character dossiers instead.

### 6. Check earlier MK9 soul-control evidence

Open `Quan Chi reveals control of fallen Earthrealm warriors`.

Expected:
- its description still says the Event does not rely on a later formal revenant label;
- the new MKX Facts now provide that later formal confirmation separately;
- the represented MK9 participant list remains intentionally non-exhaustive.

### 7. Negative scope check

Do not expect in this slice:
- Jax's later restoration to life;
- Scorpion/Sub-Zero restoration history;
- a broad synthetic Event claiming all revenants were created simultaneously;
- MKX Shinnok invasion chronology;
- MKX 25-year-later storyline;
- any schema/UI change.

### 8. Mobile/regression check

At narrow/mobile width:
- search/open Liu Kang, Kitana, Kung Lao, and the MKX source;
- verify source/canon metadata remains readable;
- confirm Original/New Era data is unchanged.

## Evidence/model checklist

- [ ] MKX biographies are represented as a later-primary `game_bio` Source.
- [ ] Liu Kang revenant state is explicit Reboot canon evidence.
- [ ] Kitana revenant state is explicit Reboot canon evidence.
- [ ] Kung Lao revenant state is explicit Reboot canon evidence.
- [ ] Kung Lao is one stable person distinct from the Great Kung Lao.
- [ ] Revenant state remains Fact data, not timeless Character metadata.
- [ ] No exact conversion timing or shared conversion Event is invented.
- [ ] Earlier MK9 records remain narrower and historically correct.
- [ ] No schema or UI change is introduced.

Final readiness still requires the repository-wide `DEFINITION_OF_DONE.md` review and green `pnpm check` on the actual final PR head.
