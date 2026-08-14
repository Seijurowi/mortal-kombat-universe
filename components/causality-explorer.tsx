"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, CircleDot, Network, Swords, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Event, Timeline, UniverseData } from "@/lib/types"
import { cn } from "@/lib/utils"

function eventLinkCount(event: Event) {
  return (event.causeEventIds?.length ?? 0) + (event.consequenceEventIds?.length ?? 0)
}

function timelineEdgeCount(timelineId: string, events: Event[]) {
  return events
    .filter((event) => event.timelineId === timelineId)
    .reduce((total, event) => total + eventLinkCount(event), 0)
}

function sortEvents(events: Event[]) {
  return [...events].sort(
    (a, b) => (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
  )
}

export function CausalityExplorer({ data }: { data: UniverseData }) {
  const timelines = useMemo(
    () => [...data.timelines].sort((a, b) => a.order - b.order),
    [data.timelines]
  )
  const eventsById = useMemo(
    () => new Map(data.events.map((event) => [event.id, event])),
    [data.events]
  )
  const entitiesById = useMemo(
    () =>
      new Map(
        Object.values(data)
          .flat()
          .map((entity) => [entity.id, entity])
      ),
    [data]
  )

  const defaultTimeline = useMemo(() => {
    return (
      [...timelines].sort(
        (a, b) => timelineEdgeCount(b.id, data.events) - timelineEdgeCount(a.id, data.events)
      )[0]?.id ?? timelines[0]?.id ?? ""
    )
  }, [data.events, timelines])

  const [timelineId, setTimelineId] = useState(defaultTimeline)
  const timelineEvents = useMemo(
    () => sortEvents(data.events.filter((event) => event.timelineId === timelineId)),
    [data.events, timelineId]
  )
  const connectedEvents = timelineEvents.filter((event) => eventLinkCount(event) > 0)
  const defaultFocus =
    [...connectedEvents].sort((a, b) => eventLinkCount(b) - eventLinkCount(a))[0]?.id ??
    timelineEvents[0]?.id ??
    ""
  const [focusId, setFocusId] = useState(defaultFocus)

  const focus = eventsById.get(focusId)?.timelineId === timelineId ? eventsById.get(focusId) : undefined
  const focusedEvent = focus ?? eventsById.get(defaultFocus)

  const causes = (focusedEvent?.causeEventIds ?? [])
    .map((id) => eventsById.get(id))
    .filter((event): event is Event => Boolean(event && event.timelineId === timelineId))
  const consequences = (focusedEvent?.consequenceEventIds ?? [])
    .map((id) => eventsById.get(id))
    .filter((event): event is Event => Boolean(event && event.timelineId === timelineId))

  const changeTimeline = (timeline: Timeline) => {
    setTimelineId(timeline.id)
    const candidates = sortEvents(data.events.filter((event) => event.timelineId === timeline.id))
    const next =
      [...candidates]
        .filter((event) => eventLinkCount(event) > 0)
        .sort((a, b) => eventLinkCount(b) - eventLinkCount(a))[0] ?? candidates[0]
    setFocusId(next?.id ?? "")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl space-y-6 px-5 py-8 md:px-8 md:py-10">
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
            <Network className="size-4" />
            Phase 3 · focused causality
          </div>
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Why did this happen?
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              Follow only explicit event-to-event causal links recorded in the lore model. Chronological
              neighbors are intentionally excluded unless the data says one event caused another.
            </p>
          </div>
        </header>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base">Continuity</CardTitle>
            <CardDescription>The graph never mixes causal edges from different timelines.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {timelines.map((timeline) => (
              <Button
                key={timeline.id}
                size="sm"
                variant={timeline.id === timelineId ? "default" : "outline"}
                onClick={() => changeTimeline(timeline)}
              >
                {timeline.name}
              </Button>
            ))}
          </CardContent>
        </Card>

        {focusedEvent ? (
          <>
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CircleDot className="size-4 text-primary" />
                  Cause → event → consequence
                </CardTitle>
                <CardDescription>
                  Click a neighboring event to re-center the graph around that node.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid items-stretch gap-3 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1.25fr)_3rem_minmax(0,1fr)]">
                  <GraphColumn label="Why?" emptyLabel="No explicit cause recorded">
                    {causes.map((event) => (
                      <EventNode key={event.id} event={event} onClick={() => setFocusId(event.id)} />
                    ))}
                  </GraphColumn>

                  <GraphArrow direction="forward" />

                  <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 shadow-[0_0_32px_-24px_var(--primary)]">
                    <div className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      Focus event
                    </div>
                    <h2 className="font-heading text-xl">{focusedEvent.name}</h2>
                    {focusedEvent.description ? (
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {focusedEvent.description}
                      </p>
                    ) : null}
                    <EventMeta
                      event={focusedEvent}
                      entitiesById={entitiesById}
                      timelineId={timelineId}
                    />
                  </div>

                  <GraphArrow direction="forward" />

                  <GraphColumn label="What next?" emptyLabel="No explicit consequence recorded">
                    {consequences.map((event) => (
                      <EventNode key={event.id} event={event} onClick={() => setFocusId(event.id)} />
                    ))}
                  </GraphColumn>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
              <Card>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Swords className="size-4 text-primary" />
                    Causal events in this continuity
                  </CardTitle>
                  <CardDescription>
                    Events with at least one explicit incoming or outgoing causal link.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2 md:grid-cols-2">
                  {connectedEvents.map((event) => (
                    <button
                      key={event.id}
                      className={cn(
                        "rounded-lg border p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/30",
                        event.id === focusedEvent.id && "border-primary/50 bg-primary/5"
                      )}
                      onClick={() => setFocusId(event.id)}
                    >
                      <div className="font-heading text-sm">{event.name}</div>
                      <div className="mt-2 flex flex-wrap gap-1.5 text-[0.68rem] text-muted-foreground">
                        <span>{event.causeEventIds?.length ?? 0} cause(s)</span>
                        <span>·</span>
                        <span>{event.consequenceEventIds?.length ?? 0} consequence(s)</span>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="h-fit">
                <CardHeader className="border-b">
                  <CardTitle className="text-base">Graph rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>Only `causeEventIds` and `consequenceEventIds` create causal arrows.</p>
                  <p>Event order is chronology, not causality. Being adjacent in the story creates no edge.</p>
                  <p>All neighbors must belong to the selected timeline; cross-continuity leakage is hidden.</p>
                  <p>Relationship edges remain separate from causal event edges until real usage proves they should be composed.</p>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <Card>
            <CardContent className="py-10 text-center text-sm text-muted-foreground">
              No events are available in this continuity yet.
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}

function GraphColumn({
  label,
  emptyLabel,
  children,
}: {
  label: string
  emptyLabel: string
  children: React.ReactNode
}) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children)
  return (
    <section className="rounded-xl border bg-muted/10 p-3">
      <div className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </div>
      <div className="grid gap-2">
        {hasChildren ? children : <div className="py-6 text-center text-xs text-muted-foreground">{emptyLabel}</div>}
      </div>
    </section>
  )
}

function GraphArrow({ direction }: { direction: "forward" }) {
  return (
    <div className="hidden items-center justify-center text-primary/70 lg:flex" aria-hidden="true">
      {direction === "forward" ? <ArrowRight className="size-6" /> : <ArrowLeft className="size-6" />}
    </div>
  )
}

function EventNode({ event, onClick }: { event: Event; onClick: () => void }) {
  return (
    <button
      className="rounded-lg border bg-background p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/30"
      onClick={onClick}
    >
      <div className="font-heading text-sm">{event.name}</div>
      {event.description ? (
        <p className="mt-1 line-clamp-3 text-xs leading-5 text-muted-foreground">{event.description}</p>
      ) : null}
    </button>
  )
}

function EventMeta({
  event,
  entitiesById,
  timelineId,
}: {
  event: Event
  entitiesById: Map<string, { id: string; name: string }>
  timelineId: string
}) {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {(event.tags ?? []).map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
      <div className="flex items-start gap-2 text-xs text-muted-foreground">
        <Users className="mt-0.5 size-3.5 shrink-0" />
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {event.participantIds.length
            ? event.participantIds.map((id) => (
                <a
                  key={id}
                  className="text-primary underline-offset-4 hover:underline"
                  href={`/?entity=${encodeURIComponent(id)}&timeline=${encodeURIComponent(timelineId)}`}
                >
                  {entitiesById.get(id)?.name ?? id}
                </a>
              ))
            : "No participants recorded"}
        </div>
      </div>
      <a
        className="inline-flex text-xs font-medium text-primary underline-offset-4 hover:underline"
        href={`/?entity=${encodeURIComponent(event.id)}&timeline=${encodeURIComponent(timelineId)}`}
      >
        Open full event dossier
      </a>
    </div>
  )
}
