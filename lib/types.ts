export type EntityType =
  | "character"
  | "event"
  | "realm"
  | "faction"
  | "timeline"
  | "relationship"
  | "fact"
  | "source";

export type CanonStatus =
  | "canon"
  | "supplemental"
  | "retconned"
  | "alternate"
  | "unconfirmed"
  | "gameplay_only";

export interface BaseEntity {
  id: string;
  type: EntityType;
  name: string;
  description?: string;
}

export interface Timeline extends BaseEntity {
  type: "timeline";
  order: number;
  eraLabel?: string;
  startsWith?: string | null;
  endsWith?: string | null;
}

export interface Character extends BaseEntity {
  type: "character";
  aliases?: string[];
  timelineIds: string[];
  realmIds?: string[];
  factionIds?: string[];
  tags?: string[];
}

export interface Realm extends BaseEntity {
  type: "realm";
  timelineIds: string[];
  tags?: string[];
}

export interface Faction extends BaseEntity {
  type: "faction";
  timelineIds: string[];
  realmIds?: string[];
  tags?: string[];
}

export interface Event extends BaseEntity {
  type: "event";
  timelineId: string;
  participantIds: string[];
  realmIds?: string[];
  causeEventIds?: string[];
  consequenceEventIds?: string[];
  order?: number;
  tags?: string[];
}

export interface Relationship extends BaseEntity {
  type: "relationship";
  relationType: string;
  fromId: string;
  toId: string;
  timelineIds: string[];
  factIds?: string[];
  directed: boolean;
}

export interface Source extends BaseEntity {
  type: "source";
  sourceType: string;
  game?: string;
  year?: number;
  url?: string;
  notes?: string;
}

export interface Fact extends BaseEntity {
  type: "fact";
  subjectId: string;
  predicate: string;
  objectId?: string;
  value?: string | number | boolean;
  timelineIds: string[];
  canonStatus: CanonStatus;
  sourceIds: string[];
  notes?: string;
}

export type UniverseEntity =
  | Character
  | Event
  | Realm
  | Faction
  | Timeline
  | Relationship
  | Fact
  | Source;

export interface UniverseData {
  characters: Character[];
  events: Event[];
  realms: Realm[];
  factions: Faction[];
  timelines: Timeline[];
  relationships: Relationship[];
  facts: Fact[];
  sources: Source[];
}
