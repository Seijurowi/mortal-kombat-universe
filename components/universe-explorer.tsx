"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import {
  ArrowLeft,
  BookOpen,
  Check,
  Clock3,
  Copy,
  Database,
  ExternalLink,
  Globe2,
  Link2,
  Network,
  Search,
  Shield,
  Sparkles,
  Swords,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import type {
  Character,
  Event,
  Fact,
  Relationship,
  Source,
  Timeline,
  UniverseData,
  UniverseEntity,
} from "@/lib/types"
import { cn } from "@/lib/utils"

type FilterType = "all" | UniverseEntity["type"]

type SelectHandler = (id: string) => void

const TYPE_LABELS: Record<FilterType, string> = {
  all: "All",
  character: "Characters",
  event: "Events",
  realm: "Realms",
  faction: "Factions",
  timeline: "Timelines",
  relationship: "Relationships",
  fact: "Facts",
  source: "Sources",
}

const NAV_TYPES: FilterType[] = [
  "all",
  "character",
  "event",
  "realm",
  "faction",
  "fact",
  "source",
]

const TYPE_ICONS: Partial<Record<FilterType, typeof Network>> = {
  all: Network,
  character: Users,
  event: Swords,
  realm: Globe2,
  faction: Shield,
  fact: Sparkles,
  source: BookOpen,
  timeline: Clock3,
  relationship: Link2,
}

function timelineIdsOf(entity: UniverseEntity, timelines: Timeline[]) {
  if (entity.type === "timeline") return [entity.id]
  if (entity.type === "event") return [entity.timelineId]
  if ("timelineIds" in entity && Array.isArray(entity.timelineIds)) return entity.timelineIds
  return timelines.map((item) => item.id)
}

function matchesTimeline(ids: string[], timeline: string) {
  return timeline === "all" || ids.includes(timeline)
}

function humanize(value: string) {
  return value.replaceAll("_", " ")
}

function summary(entity: UniverseEntity) {
  if (entity.type === "fact") {
    return `${entity.subjectId} · ${humanize(entity.predicate)} · ${entity.objectId ?? String(entity.value)}`
  }
  if (entity.type === "source") {
    return `${humanize(entity.sourceType)}${entity.game ? ` · ${entity.game}` : ""}`
  }
  if (entity.type === "relationship") {
    return `${entity.fromId} → ${humanize(entity.relationType)} → ${entity.toId}`
  }
  return entity.id
}

function searchText(entity: UniverseEntity) {
  const extra: Array<string | undefined> = []
  if ("aliases" in entity) extra.push(entity.aliases?.join(" "))
  if ("tags" in entity) extra.push(entity.tags?.join(" "))
  if (entity.type === "fact") {
    extra.push(entity.subjectId, entity.predicate, entity.objectId, String(entity.value ?? ""), entity.notes)
  }
  if (entity.type === "source") extra.push(entity.game, entity.sourceType, entity.notes)

  return [entity.name, entity.id, entity.description, ...extra]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
}

function timelineName(timelineId: string, timelines: Timeline[]) {
  return timelines.find((item) => item.id === timelineId)?.name ?? timelineId
}

export function UniverseExplorer({ data }: { data: UniverseData }) {
  const all = useMemo<UniverseEntity[]>(() => Object.values(data).flat(), [data])
  const byId = useMemo(() => new Map(all.map((entity) => [entity.id, entity])), [all])
  const timelines = useMemo(
    () => [...data.timelines].sort((a, b) => a.order - b.order),
    [data.timelines]
  )

  const [timeline, setTimeline] = useState("all")
  const [type, setType] = useState<FilterType>("all")
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [urlReady, setUrlReady] = useState(false)
  const selected = selectedId ? byId.get(selectedId) ?? null : null

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const requestedTimeline = params.get("timeline")
    const requestedEntity = params.get("entity")

    if (requestedTimeline === "all" || timelines.some((item) => item.id === requestedTimeline)) {
      setTimeline(requestedTimeline ?? "all")
    }
    if (requestedEntity && byId.has(requestedEntity)) setSelectedId(requestedEntity)
    setUrlReady(true)
  }, [byId, timelines])

  useEffect(() => {
    if (!urlReady) return
    const params = new URLSearchParams(window.location.search)

    if (timeline === "all") params.delete("timeline")
    else params.set("timeline", timeline)

    if (selectedId) params.set("entity", selectedId)
    else params.delete("entity")

    const next = params.toString()
    window.history.replaceState(null, "", `${window.location.pathname}${next ? `?${next}` : ""}`)
  }, [selectedId, timeline, urlReady])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return all.filter((entity) => {
      if (entity.type === "relationship") return false
      return (
        matchesTimeline(timelineIdsOf(entity, timelines), timeline) &&
        (type === "all" || entity.type === type) &&
        (!q || searchText(entity).includes(q))
      )
    })
  }, [all, query, timeline, timelines, type])

  const select = (id: string) => {
    if (byId.has(id)) setSelectedId(id)
  }

  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="border-b border-border/70 bg-sidebar/70 backdrop-blur lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-b-0">
        <div className="flex h-full flex-col p-4">
          <div className="flex items-center gap-3 px-2 py-3">
            <div className="grid size-11 place-items-center rounded-full border border-primary/50 bg-primary/10 font-heading text-sm font-black tracking-[-0.08em] text-primary shadow-[0_0_30px_-12px_var(--primary)]">
              MK
            </div>
            <div className="min-w-0">
              <div className="truncate font-heading text-sm font-semibold uppercase tracking-[0.12em]">
                Mortal Kombat
              </div>
              <div className="text-xs text-muted-foreground">Universe knowledge graph</div>
            </div>
          </div>

          <div className="relative mt-3">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search the Mortal Kombat universe"
              className="pl-8"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setSelectedId(null)
              }}
              placeholder="Search the realms…"
            />
          </div>

          <SidebarSection title="Timeline" className="mt-6">
            <FilterButton
              active={timeline === "all"}
              icon={<Clock3 />}
              onClick={() => setTimeline("all")}
            >
              All timelines
            </FilterButton>
            {timelines.map((item) => (
              <FilterButton
                key={item.id}
                active={timeline === item.id}
                icon={<Clock3 />}
                onClick={() => setTimeline(item.id)}
              >
                {item.name}
              </FilterButton>
            ))}
          </SidebarSection>

          <Separator className="my-5" />

          <SidebarSection title="Explore">
            {NAV_TYPES.map((item) => {
              const count =
                item === "all"
                  ? all.filter((entity) => entity.type !== "relationship").length
                  : all.filter((entity) => entity.type === item).length
              const Icon = TYPE_ICONS[item] ?? Database

              return (
                <FilterButton
                  key={item}
                  active={type === item}
                  icon={<Icon />}
                  count={count}
                  onClick={() => {
                    setType(item)
                    setSelectedId(null)
                  }}
                >
                  {TYPE_LABELS[item]}
                </FilterButton>
              )
            })}
          </SidebarSection>

          <div className="mt-auto hidden pt-6 text-xs text-muted-foreground lg:block">
            <div className="flex items-center gap-2">
              <Database className="size-3.5" />
              {all.length} source records
            </div>
          </div>
        </div>
      </aside>

      <main className="min-w-0">
        <header className="border-b border-border/70 bg-background/85 px-5 py-6 backdrop-blur md:px-8 lg:sticky lg:top-0 lg:z-10">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-2 flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
                <Network className="size-3.5" />
                Timeline-first encyclopedia
              </div>
              <h1 className="truncate font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                {selected ? selected.name : type === "all" ? "Universe Index" : TYPE_LABELS[type]}
              </h1>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              {timeline !== "all" ? <Badge variant="secondary">{timelineName(timeline, timelines)}</Badge> : null}
              <Badge variant="outline">{selected ? humanize(selected.type) : `${filtered.length} visible`}</Badge>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-7xl p-5 md:p-8">
          {selected ? (
            selected.type === "character" ? (
              <CharacterDetail
                character={selected}
                data={data}
                byId={byId}
                timelines={timelines}
                activeTimeline={timeline}
                onTimelineChange={setTimeline}
                onSelect={select}
                onBack={() => setSelectedId(null)}
              />
            ) : (
              <EntityDetail
                entity={selected}
                data={data}
                byId={byId}
                timelines={timelines}
                activeTimeline={timeline}
                onSelect={select}
                onBack={() => setSelectedId(null)}
              />
            )
          ) : filtered.length ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((entity) => (
                <EntityCard
                  key={entity.id}
                  entity={entity}
                  timelines={timelines}
                  byId={byId}
                  onSelect={select}
                />
              ))}
            </div>
          ) : (
            <EmptyState>Nothing matches this filter.</EmptyState>
          )}
        </section>
      </main>
    </div>
  )
}

function CharacterDetail({
  character,
  data,
  byId,
  timelines,
  activeTimeline,
  onTimelineChange,
  onSelect,
  onBack,
}: {
  character: Character
  data: UniverseData
  byId: Map<string, UniverseEntity>
  timelines: Timeline[]
  activeTimeline: string
  onTimelineChange: (timelineId: string) => void
  onSelect: SelectHandler
  onBack: () => void
}) {
  const characterTimelines = timelines.filter((item) => character.timelineIds.includes(item.id))
  const facts = data.facts.filter(
    (fact) =>
      (fact.subjectId === character.id || fact.objectId === character.id) &&
      matchesTimeline(fact.timelineIds, activeTimeline)
  )
  const events = data.events
    .filter(
      (event) => event.participantIds.includes(character.id) && matchesTimeline([event.timelineId], activeTimeline)
    )
    .sort((a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER))
  const relationships = data.relationships.filter(
    (item) =>
      (item.fromId === character.id || item.toId === character.id) &&
      matchesTimeline(item.timelineIds, activeTimeline)
  )

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" className="-ml-2" onClick={onBack}>
          <ArrowLeft data-icon="inline-start" />
          Back to index
        </Button>
        <CopyLinkButton />
      </div>

      <Card>
        <CardHeader className="border-b">
          <div className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
            Character dossier
          </div>
          <CardTitle className="text-3xl md:text-4xl">{character.name}</CardTitle>
          <CardDescription className="max-w-3xl text-sm leading-6">
            {character.description ?? summary(character)}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Read this character by continuity
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={activeTimeline === "all" ? "default" : "outline"}
                onClick={() => onTimelineChange("all")}
              >
                Compare all
              </Button>
              {characterTimelines.map((item) => (
                <Button
                  key={item.id}
                  size="sm"
                  variant={activeTimeline === item.id ? "default" : "outline"}
                  onClick={() => onTimelineChange(item.id)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>

          {activeTimeline === "all" ? (
            <TimelineComparison
              character={character}
              timelines={characterTimelines}
              data={data}
              onTimelineChange={onTimelineChange}
            />
          ) : (
            <div className="rounded-xl border bg-muted/15 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Reading mode</div>
              <div className="mt-1 font-heading text-xl">{timelineName(activeTimeline, timelines)}</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Facts, chronology and connections below are limited to this continuity.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
        <div className="space-y-5">
          <ChronologyCard events={events} byId={byId} timelines={timelines} onSelect={onSelect} />
          <FactsCard facts={facts} byId={byId} timelines={timelines} onSelect={onSelect} />
        </div>
        <ConnectionsCard
          characterId={character.id}
          relationships={relationships}
          byId={byId}
          onSelect={onSelect}
        />
      </div>
    </div>
  )
}

function TimelineComparison({
  character,
  timelines,
  data,
  onTimelineChange,
}: {
  character: Character
  timelines: Timeline[]
  data: UniverseData
  onTimelineChange: (timelineId: string) => void
}) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {timelines.map((timeline) => {
        const facts = data.facts.filter(
          (fact) =>
            (fact.subjectId === character.id || fact.objectId === character.id) &&
            fact.timelineIds.includes(timeline.id)
        )
        const events = data.events.filter(
          (event) => event.participantIds.includes(character.id) && event.timelineId === timeline.id
        )
        const identityFacts = facts.filter((fact) =>
          ["uses_identity", "has_role", "has_nature"].includes(fact.predicate)
        )

        return (
          <button
            key={timeline.id}
            className="rounded-xl border bg-muted/15 p-4 text-left transition-colors hover:border-primary/40 hover:bg-muted/30"
            onClick={() => onTimelineChange(timeline.id)}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{timeline.name}</div>
            <div className="mt-3 space-y-1 text-sm">
              {identityFacts.length ? (
                identityFacts.slice(0, 3).map((fact) => (
                  <div key={fact.id} className="text-foreground">
                    <span className="text-muted-foreground">{humanize(fact.predicate)}:</span>{" "}
                    {fact.objectId ?? String(fact.value)}
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground">No identity summary yet.</div>
              )}
            </div>
            <div className="mt-4 flex gap-2 text-xs text-muted-foreground">
              <span>{events.length} events</span>
              <span>·</span>
              <span>{facts.length} facts</span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

function ChronologyCard({
  events,
  byId,
  timelines,
  onSelect,
}: {
  events: Event[]
  byId: Map<string, UniverseEntity>
  timelines: Timeline[]
  onSelect: SelectHandler
}) {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Clock3 className="size-4 text-primary" />
          Story chronology
        </CardTitle>
        <CardDescription>Important recorded events involving this character, ordered within each timeline.</CardDescription>
      </CardHeader>
      <CardContent>
        {events.length ? (
          <div className="relative ml-2 border-l border-border pl-6">
            {events.map((event, index) => (
              <div key={event.id} className="relative pb-7 last:pb-0">
                <div className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{timelineName(event.timelineId, timelines)}</Badge>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">#{index + 1}</span>
                </div>
                <button className="text-left font-heading text-lg hover:text-primary" onClick={() => onSelect(event.id)}>
                  {event.name}
                </button>
                {event.description ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{event.description}</p> : null}
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  {event.causeEventIds?.length ? <span>{event.causeEventIds.length} cause link(s)</span> : null}
                  {event.consequenceEventIds?.length ? <span>{event.consequenceEventIds.length} consequence link(s)</span> : null}
                  {event.realmIds?.map((id) => <span key={id}>{byId.get(id)?.name ?? id}</span>)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState compact>No chronological events in this timeline yet.</EmptyState>
        )}
      </CardContent>
    </Card>
  )
}

function FactsCard({
  facts,
  byId,
  timelines,
  onSelect,
}: {
  facts: Fact[]
  byId: Map<string, UniverseEntity>
  timelines: Timeline[]
  onSelect: SelectHandler
}) {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="size-4 text-primary" />
          Evidence-backed facts
        </CardTitle>
        <CardDescription>Atomic claims with continuity, canon status and source evidence.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        {facts.length ? (
          facts.map((fact) => (
            <FactCard key={fact.id} fact={fact} byId={byId} timelines={timelines} onSelect={onSelect} />
          ))
        ) : (
          <EmptyState compact>No sourced facts in this timeline yet.</EmptyState>
        )}
      </CardContent>
    </Card>
  )
}

function ConnectionsCard({
  characterId,
  relationships,
  byId,
  onSelect,
}: {
  characterId: string
  relationships: Relationship[]
  byId: Map<string, UniverseEntity>
  onSelect: SelectHandler
}) {
  return (
    <Card className="h-fit">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Link2 className="size-4 text-primary" />
          Connections
        </CardTitle>
        <CardDescription>People, factions and other graph neighbors in the selected continuity.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        {relationships.length ? (
          relationships.map((relationship) => {
            const dependency = relationshipDependency(relationship, characterId, byId)
            return (
              <Button
                key={relationship.id}
                variant="outline"
                className="h-auto min-h-12 justify-start px-3 py-2 text-left whitespace-normal"
                onClick={() => onSelect(dependency.id)}
              >
                <span>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {humanize(dependency.kind)}
                  </span>
                  <span className="mt-0.5 block">{dependency.name}</span>
                </span>
              </Button>
            )
          })
        ) : (
          <EmptyState compact>No relationship edges in this timeline yet.</EmptyState>
        )}
      </CardContent>
    </Card>
  )
}

function EntityDetail({
  entity,
  data,
  byId,
  timelines,
  activeTimeline,
  onSelect,
  onBack,
}: {
  entity: UniverseEntity
  data: UniverseData
  byId: Map<string, UniverseEntity>
  timelines: Timeline[]
  activeTimeline: string
  onSelect: SelectHandler
  onBack: () => void
}) {
  const relationships = data.relationships.filter(
    (item) =>
      (item.fromId === entity.id || item.toId === entity.id) &&
      matchesTimeline(item.timelineIds, activeTimeline)
  )
  const events = data.events.filter(
    (event) =>
      (event.id === entity.id || event.participantIds.includes(entity.id)) &&
      matchesTimeline([event.timelineId], activeTimeline)
  )
  const facts = data.facts.filter((fact) => {
    if (!matchesTimeline(fact.timelineIds, activeTimeline)) return false
    if (entity.type === "fact") return fact.id === entity.id
    if (entity.type === "source") return fact.sourceIds.includes(entity.id)
    return fact.subjectId === entity.id || fact.objectId === entity.id
  })
  const dependencies = [
    ...relationships.map((relationship) => relationshipDependency(relationship, entity.id, byId)),
    ...events.filter((event) => event.id !== entity.id).map((event) => ({ id: event.id, kind: "event", name: event.name })),
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" className="-ml-2" onClick={onBack}>
          <ArrowLeft data-icon="inline-start" />
          Back to index
        </Button>
        <CopyLinkButton />
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
        <Card>
          <CardHeader className="border-b">
            <div className="mb-1 flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
              <span>{entity.type}</span>
              {activeTimeline !== "all" ? (
                <Badge variant="secondary" className="normal-case tracking-normal">
                  {timelineName(activeTimeline, timelines)}
                </Badge>
              ) : null}
            </div>
            <CardTitle className="text-2xl md:text-3xl">{entity.name}</CardTitle>
            <CardDescription className="max-w-3xl text-sm leading-6">
              {entity.description ?? summary(entity)}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {entity.type === "event" ? <EventMeta event={entity} byId={byId} onSelect={onSelect} /> : null}
            {entity.type === "source" ? <SourceMeta source={entity} /> : null}
            <FactsCard facts={facts} byId={byId} timelines={timelines} onSelect={onSelect} />
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2 text-base">
              <Link2 className="size-4 text-primary" />
              Dependencies & connections
            </CardTitle>
            <CardDescription>Graph edges and events filtered to the active timeline.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            {dependencies.length ? (
              dependencies.map((dependency, index) => (
                <Button
                  key={`${dependency.id}-${index}`}
                  variant="outline"
                  className="h-auto min-h-12 justify-start px-3 py-2 text-left whitespace-normal"
                  onClick={() => onSelect(dependency.id)}
                >
                  <span>
                    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {humanize(dependency.kind)}
                    </span>
                    <span className="mt-0.5 block">{dependency.name}</span>
                  </span>
                </Button>
              ))
            ) : (
              <EmptyState compact>No graph edges in this timeline.</EmptyState>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CopyLinkButton() {
  const [copied, setCopied] = useState(false)

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1500)
      }}
    >
      {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
      {copied ? "Copied" : "Copy deep link"}
    </Button>
  )
}

function relationshipDependency(
  relationship: Relationship,
  entityId: string,
  byId: Map<string, UniverseEntity>
) {
  const other = relationship.fromId === entityId ? relationship.toId : relationship.fromId
  const reverse = relationship.directed && relationship.toId === entityId
  return {
    id: other,
    kind: reverse ? `${relationship.relationType} by` : relationship.relationType,
    name: byId.get(other)?.name ?? other,
  }
}

function EventMeta({ event, byId, onSelect }: { event: Event; byId: Map<string, UniverseEntity>; onSelect: SelectHandler }) {
  return (
    <dl className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-3 rounded-lg border bg-muted/20 p-4 text-sm">
      <MetaRow label="Timeline" ids={[event.timelineId]} byId={byId} onSelect={onSelect} />
      <MetaRow label="Caused by" ids={event.causeEventIds ?? []} byId={byId} onSelect={onSelect} />
      <MetaRow label="Consequences" ids={event.consequenceEventIds ?? []} byId={byId} onSelect={onSelect} />
      <MetaRow label="Participants" ids={event.participantIds} byId={byId} onSelect={onSelect} />
      <MetaRow label="Realms" ids={event.realmIds ?? []} byId={byId} onSelect={onSelect} />
    </dl>
  )
}

function SourceMeta({ source }: { source: Source }) {
  return (
    <dl className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-2 rounded-lg border bg-muted/20 p-4 text-sm">
      <dt className="text-muted-foreground">Source type</dt>
      <dd>{humanize(source.sourceType)}</dd>
      <dt className="text-muted-foreground">Game</dt>
      <dd>{source.game ?? "—"}</dd>
      <dt className="text-muted-foreground">Year</dt>
      <dd>{source.year ?? "—"}</dd>
      {source.url ? (
        <>
          <dt className="text-muted-foreground">Reference</dt>
          <dd>
            <a className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline" href={source.url} target="_blank" rel="noreferrer">
              Open source
              <ExternalLink className="size-3.5" />
            </a>
          </dd>
        </>
      ) : null}
    </dl>
  )
}

function MetaRow({
  label,
  ids,
  byId,
  onSelect,
}: {
  label: string
  ids: string[]
  byId: Map<string, UniverseEntity>
  onSelect: SelectHandler
}) {
  return (
    <>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="flex flex-wrap gap-1.5">
        {ids.length
          ? ids.map((id) => (
              <Button key={id} variant="link" size="xs" className="h-auto px-0" onClick={() => onSelect(id)}>
                {byId.get(id)?.name ?? id}
              </Button>
            ))
          : "—"}
      </dd>
    </>
  )
}

function FactCard({
  fact,
  byId,
  timelines,
  onSelect,
}: {
  fact: Fact
  byId: Map<string, UniverseEntity>
  timelines: Timeline[]
  onSelect: SelectHandler
}) {
  return (
    <article className="rounded-lg border bg-muted/20 p-4">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <CanonBadge status={fact.canonStatus} />
        {fact.timelineIds.map((timelineId) => (
          <Badge key={timelineId} variant="secondary">
            {timelineName(timelineId, timelines)}
          </Badge>
        ))}
      </div>
      <div className="text-sm leading-6">
        <InlineEntity id={fact.subjectId} byId={byId} onSelect={onSelect} />{" "}
        <strong>{humanize(fact.predicate)}</strong>{" "}
        {fact.objectId ? <InlineEntity id={fact.objectId} byId={byId} onSelect={onSelect} /> : String(fact.value)}
      </div>
      {fact.notes ? <p className="mt-2 text-xs leading-5 text-muted-foreground">{fact.notes}</p> : null}
      <Separator className="my-3" />
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-xs text-muted-foreground">Evidence:</span>
        {fact.sourceIds.map((sourceId) => (
          <Button key={sourceId} variant="link" size="xs" className="h-auto px-0 text-xs" onClick={() => onSelect(sourceId)}>
            {byId.get(sourceId)?.name ?? sourceId}
          </Button>
        ))}
      </div>
    </article>
  )
}

function InlineEntity({ id, byId, onSelect }: { id: string; byId: Map<string, UniverseEntity>; onSelect: SelectHandler }) {
  return (
    <Button variant="link" size="xs" className="h-auto px-0 text-sm" onClick={() => onSelect(id)}>
      {byId.get(id)?.name ?? id}
    </Button>
  )
}

function CanonBadge({ status }: { status: Fact["canonStatus"] }) {
  const variant = status === "retconned" ? "destructive" : status === "canon" ? "default" : "outline"
  return <Badge variant={variant}>{humanize(status)}</Badge>
}

function EntityCard({
  entity,
  timelines,
  byId,
  onSelect,
}: {
  entity: UniverseEntity
  timelines: Timeline[]
  byId: Map<string, UniverseEntity>
  onSelect: SelectHandler
}) {
  const Icon = TYPE_ICONS[entity.type] ?? Database
  return (
    <Card className="transition-colors hover:bg-muted/20 hover:ring-primary/25">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="size-4 text-primary" />
          {entity.name}
        </CardTitle>
        <CardDescription className="line-clamp-3 min-h-15">{entity.description ?? summary(entity)}</CardDescription>
        <CardAction><Badge variant="outline">{humanize(entity.type)}</Badge></CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {timelineIdsOf(entity, timelines).map((id) => (
            <Badge key={id} variant="secondary">{byId.get(id)?.name ?? id}</Badge>
          ))}
        </div>
        <Button variant="outline" className="w-full" onClick={() => onSelect(entity.id)}>
          Explore
          <Network data-icon="inline-end" />
        </Button>
      </CardContent>
    </Card>
  )
}

function SidebarSection({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <section className={className}>
      <div className="mb-2 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <div className="grid gap-1">{children}</div>
    </section>
  )
}

function FilterButton({
  active,
  icon,
  count,
  onClick,
  children,
}: {
  active: boolean
  icon: ReactNode
  count?: number
  onClick: () => void
  children: ReactNode
}) {
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn("h-8 w-full justify-start px-2 text-muted-foreground", active && "text-foreground")}
      onClick={onClick}
    >
      <span data-icon="inline-start">{icon}</span>
      <span className="min-w-0 flex-1 truncate text-left">{children}</span>
      {typeof count === "number" ? <span className="text-[0.68rem] tabular-nums text-muted-foreground">{count}</span> : null}
    </Button>
  )
}

function EmptyState({ compact = false, children }: { compact?: boolean; children: ReactNode }) {
  return (
    <div className={cn("rounded-xl border border-dashed bg-muted/10 p-10 text-center text-sm text-muted-foreground", compact && "p-5")}>
      {children}
    </div>
  )
}
