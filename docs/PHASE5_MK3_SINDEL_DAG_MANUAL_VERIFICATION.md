# Phase 5 Manual Verification — MK3 Sindel Scheme / DAG Stress Case

Run:

```bash
pnpm install
pnpm check
pnpm dev
```

## 1. Source framing

- [ ] `Mortal Kombat Mythologies: Sub-Zero` exposes its preservation URL and notes the Shang Tsung / Quan Chi bargain for Sindel's reincarnation.
- [ ] `Mortal Kombat Trilogy — Story` notes that the second Outworld tournament was a diversion inside the Sindel reincarnation scheme.
- [ ] `Mortal Kombat 3 — Game Story` preserves the wording that Shao Kahn enacts an ancient plan after failed tournament attempts.
- [ ] The UI does not flatten those differently framed primary accounts into a claim that the Sindel scheme was invented only after MKII.

## 2. Scheme chronology

Open `Shang Tsung arranges Sindel's reincarnation`.

- [ ] The Event is Original-continuity only.
- [ ] Shang Tsung and Quan Chi are participants; Shinnok is not inserted as a scene participant merely because his power is part of the bargain.
- [ ] The Event has no inferred realm location.
- [ ] Its order places the long-running arrangement before the first-game tournament.
- [ ] The associated Fact cites `Mortal Kombat Mythologies: Sub-Zero`.

## 3. First proven multi-parent causal node

Open `Second Mortal Kombat tournament in Outworld` and inspect `/causality`.

- [ ] The tournament has two explicit causes: `Shang Tsung arranges Sindel's reincarnation` and `Shang Tsung plans an Outworld tournament`.
- [ ] Both parent Events mirror the tournament in `consequenceEventIds`.
- [ ] The Shang Tsung lure-plan parent is supported by MKII.
- [ ] The Sindel-scheme parent is supported by MKT describing the tournament as a diversion.
- [ ] `The second tournament was a diversion within the Sindel scheme` is a canon Fact citing MKT.
- [ ] The graph does not invent direct MK1/MKII → post-tournament Sindel-plan edges from MK3's plural `failed attempts` wording.

## 4. Rebirth and invasion

Open `Sindel is reborn on Earthrealm` and `Shao Kahn breaches Earthrealm`.

- [ ] Sindel's rebirth has `realmIds: ["earthrealm"]` because MK3 directly places the rebirth on Earth Realm.
- [ ] `Shang Tsung arranges Sindel's reincarnation → Sindel is reborn on Earthrealm` is present as the scheme reaching its intended occurrence.
- [ ] `Sindel is reborn on Earthrealm → Shao Kahn breaches Earthrealm` is present because MK3/MKT explicitly connect the reincarnation with Kahn crossing the dimensional gates.
- [ ] The breach Event carries Earthrealm scope and does not misuse `realmIds` as an action-object list.
- [ ] The associated canon Facts cite MK3/MKT as appropriate.

## 5. Source-framing tension

Open `MK3 frames Shao Kahn as enacting the Sindel plan after failed tournament attempts`.

- [ ] The Fact remains visible as MK3's own framing.
- [ ] Its notes explain that Mythologies and MKT establish the scheme as already in motion before the second tournament.
- [ ] `/claims` does not automatically label this difference a retcon unless explicit retcon evidence is later modeled.
- [ ] No chronology is rewritten merely to make all three sources read like one perfectly identical narration.

## 6. DAG rendering pressure

Inspect the whole-tree rendering around `Second Mortal Kombat tournament in Outworld`.

- [ ] The local `Why?` view shows both causal parents.
- [ ] Confirm whether the whole-tree duplicates the shared tournament card beneath both parents.
- [ ] If duplicated, treat that as the proven UI requirement for a follow-up DAG-rendering fix: one canonical shared node plus an explicit merge reference from the other branch.
- [ ] Do not change lore edges merely to make the current tree renderer look simpler.

## Decision

The key acceptance question is whether the data remains more trustworthy than a visually simpler but historically flattened chain. The multi-parent node is now a real sourced requirement; renderer work should follow the data rather than weakening the graph to fit the existing tree.
