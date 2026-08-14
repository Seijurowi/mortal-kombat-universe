"use client"

import { useMemo, useState, type ReactNode } from "react"
import {
  ArrowLeft,
  BookOpen,
  Clock3,
  Database,
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
  Event,
  Fact,
  Relationship,
  Timeline,
  UniverseData,
  UniverseEntity,
} from "@/lib/types"
import { cn } from "@/lib/utils"

type FilterType = "all" | UniverseEntity["type"]

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
  if ("timelineIds" in entity && Array.isArray(entity.timelineIds)) {
    return entity.timelineIds
  }
  return timelines.map((timeline) => timeline.id)
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

export function UniverseExplorer({ data }: { data: UniverseData }) {
  const all = useMemo<UniverseEntity[]>(() => Object.values(data).flat(), [data])
  const byId = useMemo(
    () => new Map(all.map((entity) => [entity.id, entity])),
    [all]
  )
  const timelines = useMemo(
    () => [...data.timelines].sort((a, b) => a.order - b.order),
    [data.timelines]
  )

  const [timeline, setTimeline] = useState("all")
  const [type, setType] = useState<FilterType>("all")
  const [query, setQuery] = useState("")
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = selectedId ? byId.get(selectedId) ?? null : null

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()

    return all.filter((entity) => {
      if (entity.type === "relationship") return false

      const timelineOk =
        timeline === "all" || timelineIdsOf(entity, timelines).includes(timeline)
      const typeOk = type === "all" || entity.type === type
      const searchable = [
        entity.name,
        entity.id,
        entity.description,
        "aliases" in entity ? entity.aliases?.join(" ") : undefined,
        "tags" in entity ? entity.tags?.join(" ") : undefined,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return timelineOk && typeOk && (!q || searchable.includes(q))
    })
  }, [all, query, timeline, timelines, type])

  const select = (id: string) => {
    if (byId.has(id)) setSelectedId(id)
  }

  const resetSelection = () => setSelectedId(null)

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
                resetSelection()
              }}
              placeholder="Search the realms…"
            />
          </div>

          <SidebarSection title="Timeline" className="mt-6">
            <FilterButton
              active={timeline === "all"}
              icon={<Clock3 />}
              onClick={() => {
                setTimeline("all")
                resetSelection()
              }}
            >
              All timelines
            </FilterButton>
            {timelines.map((item) => (
              <FilterButton
                key={item.id}
                active={timeline === item.id}
                icon={<Clock3 />}
                onClick={() => {
                  setTimeline(item.id)
                  resetSelection()
                }}
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
                    resetSelection()
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
                Source-aware knowledge graph
              </div>
              <h1 className="truncate font-heading text-3xl font-semibold tracking-tight md:text-4xl">
                {selected
                  ? selected.name
                  : type === "all"
                    ? "Universe Index"
                    : TYPE_LABELS[type]}
              </h1>
            </div>
            <Badge variant="outline" className="hidden md:inline-flex">
              {selected ? humanize(selected.type) : `${filtered.length} visible`}
            </Badge>
          </div>
        </header>

        <section className="mx-auto max-w-7xl p-5 md:p-8">
          {selected ? (
            <EntityDetail
              entity={selected}
              data={data}
              byId={byId}
              onSelect={select}
              onBack={resetSelection}
            />
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

function SidebarSection({
  title,
  className,
  children,
}: {
  title: string
  className?: string
  children: ReactNode
}) {
  return (
    <section className={className}>
      <div className="mb-2 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </div>
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
      className={cn(
        "h-8 w-full justify-start px-2 text-muted-foreground",
        active && "text-foreground"
      )}
      onClick={onClick}
    >
      <span data-icon="inline-start">{icon}</span>
      <span className="min-w-0 flex-1 truncate text-left">{children}</span>
      {typeof count === "number" ? (
        <span className="text-[0.68rem] tabular-nums text-muted-foreground">{count}</span>
      ) : null}
    </Button>
  )
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
  onSelect: (id: string) => void
}) {
  const Icon = TYPE_ICONS[entity.type] ?? Database

  return (
    <Card className="transition-colors hover:bg-muted/20 hover:ring-primary/25">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="size-4 text-primary" />
          {entity.name}
        </CardTitle>
        <CardDescription className="line-clamp-3 min-h-15">
          {entity.description ?? summary(entity)}
        </CardDescription>
        <CardAction>
          <Badge variant="outline">{humanize(entity.type)}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {timelineIdsOf(entity, timelines).map((id) => (
            <Badge key={id} variant="secondary">
              {byId.get(id)?.name ?? id}
            </Badge>
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

function EntityDetail({
  entity,
  data,
  byId,
  onSelect,
  onBack,
}: {
  entity: UniverseEntity
  data: UniverseData
  byId: Map<string, UniverseEntity>
  onSelect: (id: string) => void
  onBack: () => void
}) {
  const relationships = data.relationships.filter(
    (item) => item.fromId === entity.id || item.toId === entity.id
  )
  const events = data.events.filter(
    (event) => event.id === entity.id || event.participantIds.includes(entity.id)
  )
  const facts =
    entity.type === "fact"
      ? [entity]
      : data.facts.filter(
          (fact) => fact.subjectId === entity.id || fact.objectId === entity.id
        )
  const dependencies = [
    ...relationships.map((relationship) =>
      relationshipDependency(relationship, entity.id, byId)
    ),
    ...events
      .filter((event) => event.id !== entity.id)
      .map((event) => ({ id: event.id, kind: "event", name: event.name })),
  ]

  return (
    <div className="space-y-4">
      <Button variant="ghost" className="-ml-2" onClick={onBack}>
        <ArrowLeft data-icon="inline-start" />
        Back to index
      </Button>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
        <Card>
          <CardHeader className="border-b">
            <div className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
              {entity.type}
            </div>
            <CardTitle className="text-2xl md:text-3xl">{entity.name}</CardTitle>
            <CardDescription className="max-w-3xl text-sm leading-6">
              {entity.description ?? summary(entity)}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {entity.type === "event" ? (
              <EventMeta event={entity} byId={byId} onSelect={onSelect} />
            ) : null}

            {entity.type === "source" ? (
              <dl className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-2 rounded-lg border bg-muted/20 p-4 text-sm">
                <dt className="text-muted-foreground">Source type</dt>
                <dd>{humanize(entity.sourceType)}</dd>
                <dt className="text-muted-foreground">Game</dt>
                <dd>{entity.game ?? "—"}</dd>
                <dt className="text-muted-foreground">Year</dt>
                <dd>{entity.year ?? "—"}</dd>
              </dl>
            ) : null}

            <section>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="font-heading font-medium">Verified facts</h3>
                <Badge variant="secondary">{facts.length}</Badge>
              </div>
              <div className="grid gap-3">
                {facts.length ? (
                  facts.map((fact) => (
                    <FactCard key={fact.id} fact={fact} byId={byId} onSelect={onSelect} />
                  ))
                ) : (
                  <EmptyState compact>No directly linked facts yet.</EmptyState>
                )}
              </div>
            </section>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center gap-2 text-base">
              <Link2 className="size-4 text-primary" />
              Dependencies & connections
            </CardTitle>
            <CardDescription>
              Follow graph edges and events connected to this entity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {dependencies.length ? (
                dependencies.map((dependency, index) => (
                  <Button
                    key={`${dependency.id}-${index}`}
                    variant="outline"
                    className="h-auto min-h-12 justify-start px-3 py-2 text-left whitespace-normal"
                    onClick={() => onSelect(dependency.id)}
                  >
                    <span className="min-w-0">
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {humanize(dependency.kind)}
                      </span>
                      <span className="mt-0.5 block truncate">{dependency.name}</span>
                    </span>
                  </Button>
                ))
              ) : (
                <EmptyState compact>No graph edges yet.</EmptyState>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function relationshipDependency(
  relationship: Relationship,
  entityId: string,
  byId: Map<string, UniverseEntity>
) {
  const other = relationship.fromId === entityId ? relationship.toId : relationship.fromId
  return {
    id: other,
    kind: relationship.relationType,
    name: byId.get(other)?.name ?? other,
  }
}

function EventMeta({
  event,
  byId,
  onSelect,
}: {
  event: Event
  byId: Map<string, UniverseEntity>
  onSelect: (id: string) => void
}) {
  return (
    <dl className="grid grid-cols-[7rem_1fr] gap-x-4 gap-y-3 rounded-lg border bg-muted/20 p-4 text-sm">
      <MetaRow label="Caused by" ids={event.causeEventIds ?? []} byId={byId} onSelect={onSelect} />
      <MetaRow
        label="Consequences"
        ids={event.consequenceEventIds ?? []}
        byId={byId}
        onSelect={onSelect}
      />
      <MetaRow label="Participants" ids={event.participantIds} byId={byId} onSelect={onSelect} />
      <MetaRow label="Realms" ids={event.realmIds ?? []} byId={byId} onSelect={onSelect} />
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
  onSelect: (id: string) => void
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
  onSelect,
}: {
  fact: Fact
  byId: Map<string, UniverseEntity>
  onSelect: (id: string) => void
}) {
  return (
    <article className="rounded-lg border bg-muted/20 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <CanonBadge status={fact.canonStatus} />
        <span className="truncate font-mono text-[0.65rem] text-muted-foreground">{fact.id}</span>
      </div>

      <div className="text-sm leading-6">
        <InlineEntity id={fact.subjectId} byId={byId} onSelect={onSelect} />{" "}
        <strong>{humanize(fact.predicate)}</strong>{" "}
        {fact.objectId ? (
          <InlineEntity id={fact.objectId} byId={byId} onSelect={onSelect} />
        ) : (
          String(fact.value)
        )}
      </div>

      <Separator className="my-3" />

      <div className="flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-xs text-muted-foreground">Evidence:</span>
        {fact.sourceIds.map((sourceId) => (
          <Button
            key={sourceId}
            variant="link"
            size="xs"
            className="h-auto px-0 text-xs"
            onClick={() => onSelect(sourceId)}
          >
            {byId.get(sourceId)?.name ?? sourceId}
          </Button>
        ))}
      </div>
    </article>
  )
}

function InlineEntity({
  id,
  byId,
  onSelect,
}: {
  id: string
  byId: Map<string, UniverseEntity>
  onSelect: (id: string) => void
}) {
  return (
    <Button variant="link" size="xs" className="h-auto px-0 text-sm" onClick={() => onSelect(id)}>
      {byId.get(id)?.name ?? id}
    </Button>
  )
}

function CanonBadge({ status }: { status: Fact["canonStatus"] }) {
  const variant =
    status === "retconned" ? "destructive" : status === "canon" ? "default" : "outline"

  return <Badge variant={variant}>{humanize(status)}</Badge>
}

function EmptyState({
  compact = false,
  children,
}: {
  compact?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-dashed bg-muted/10 p-10 text-center text-sm text-muted-foreground",
        compact && "p-5"
      )}
    >
      {children}
    </div>
  )
}
