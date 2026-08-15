"use client"

import Link from "next/link"
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { ArrowLeft, ArrowRight, CircleDot, Flag, GitBranch, Network, Route, Users } from "lucide-react"

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
  return [...events].sort((a, b) => {
    const orderDifference = (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER)
    return orderDifference || a.name.localeCompare(b.name)
  })
}

function eventOrder(event: Event) {
  return event.order ?? Number.MAX_SAFE_INTEGER
}

function causalComponents(events: Event[]) {
  const byId = new Map(events.map((event) => [event.id, event]))
  const adjacency = new Map(events.map((event) => [event.id, new Set<string>()]))

  for (const event of events) {
    for (const neighborId of [...(event.causeEventIds ?? []), ...(event.consequenceEventIds ?? [])]) {
      if (!byId.has(neighborId)) continue
      adjacency.get(event.id)?.add(neighborId)
      adjacency.get(neighborId)?.add(event.id)
    }
  }

  const connectedIds = new Set(
    [...adjacency.entries()].filter(([, neighbors]) => neighbors.size > 0).map(([id]) => id)
  )
  const visited = new Set<string>()
  const components: Event[][] = []

  for (const event of sortEvents(events)) {
    if (!connectedIds.has(event.id) || visited.has(event.id)) continue

    const queue = [event.id]
    const component: Event[] = []
    visited.add(event.id)

    while (queue.length) {
      const currentId = queue.shift()
      if (!currentId) continue
      const current = byId.get(currentId)
      if (current) component.push(current)

      for (const neighborId of adjacency.get(currentId) ?? []) {
        if (visited.has(neighborId)) continue
        visited.add(neighborId)
        queue.push(neighborId)
      }
    }

    components.push(sortEvents(component))
  }

  return components.sort((a, b) => {
    if (b.length !== a.length) return b.length - a.length
    return eventOrder(a[0]) - eventOrder(b[0])
  })
}

function parentsOf(event: Event, component: Event[], eventsById: Map<string, Event>) {
  const componentIds = new Set(component.map((item) => item.id))
  const ids = new Set<string>()

  for (const id of event.causeEventIds ?? []) {
    if (componentIds.has(id)) ids.add(id)
  }
  for (const candidate of component) {
    if ((candidate.consequenceEventIds ?? []).includes(event.id)) ids.add(candidate.id)
  }

  return sortEvents(
    [...ids]
      .map((id) => eventsById.get(id))
      .filter((item): item is Event => Boolean(item && componentIds.has(item.id)))
  )
}

function childrenOf(event: Event, component: Event[], eventsById: Map<string, Event>) {
  const componentIds = new Set(component.map((item) => item.id))
  const ids = new Set<string>()

  for (const id of event.consequenceEventIds ?? []) {
    if (componentIds.has(id)) ids.add(id)
  }
  for (const candidate of component) {
    if ((candidate.causeEventIds ?? []).includes(event.id)) ids.add(candidate.id)
  }

  return sortEvents(
    [...ids]
      .map((id) => eventsById.get(id))
      .filter((item): item is Event => Boolean(item && componentIds.has(item.id)))
  )
}

function rootsOf(component: Event[], eventsById: Map<string, Event>) {
  const roots = component.filter((event) => parentsOf(event, component, eventsById).length === 0)
  return roots.length ? sortEvents(roots) : component.slice(0, 1)
}

function leavesOf(component: Event[], eventsById: Map<string, Event>) {
  const leaves = component.filter((event) => childrenOf(event, component, eventsById).length === 0)
  return leaves.length ? sortEvents(leaves) : component.slice(-1)
}

function canonicalParentOf(event: Event, component: Event[], eventsById: Map<string, Event>) {
  const parents = parentsOf(event, component, eventsById)
  if (!parents.length) return undefined

  return [...parents].sort((a, b) => {
    const orderDifference = eventOrder(b) - eventOrder(a)
    return orderDifference || a.id.localeCompare(b.id)
  })[0]
}

function defaultEventForComponents(components: Event[][], timelineEvents: Event[], eventsById: Map<string, Event>) {
  const primary = components[0]
  if (primary?.length) return rootsOf(primary, eventsById)[0] ?? primary[0]
  return timelineEvents[0]
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
  const components = useMemo(() => causalComponents(timelineEvents), [timelineEvents])
  const initialFocus = defaultEventForComponents(components, timelineEvents, eventsById)?.id ?? ""
  const [focusId, setFocusId] = useState(initialFocus)
  const chronologyRefs = useRef(new Map<string, HTMLButtonElement>())

  const requestedFocus = eventsById.get(focusId)
  const focusedEvent =
    requestedFocus?.timelineId === timelineId
      ? requestedFocus
      : defaultEventForComponents(components, timelineEvents, eventsById)

  const activeComponent =
    components.find((component) => component.some((event) => event.id === focusedEvent?.id)) ??
    (focusedEvent ? [focusedEvent] : [])
  const chronology = timelineEvents
  const roots = rootsOf(activeComponent, eventsById)
  const leaves = leavesOf(activeComponent, eventsById)
  const causes = focusedEvent ? parentsOf(focusedEvent, activeComponent, eventsById) : []
  const consequences = focusedEvent ? childrenOf(focusedEvent, activeComponent, eventsById) : []
  const positions = new Map(chronology.map((event, index) => [event.id, index + 1]))
  const chronologyIndex = focusedEvent
    ? chronology.findIndex((event) => event.id === focusedEvent.id)
    : -1
  const previousChronologyEvent = chronologyIndex > 0 ? chronology[chronologyIndex - 1] : undefined
  const nextChronologyEvent =
    chronologyIndex >= 0 && chronologyIndex < chronology.length - 1
      ? chronology[chronologyIndex + 1]
      : undefined

  useEffect(() => {
    if (!focusedEvent) return
    chronologyRefs.current.get(focusedEvent.id)?.scrollIntoView({ block: "nearest", inline: "center" })
  }, [focusedEvent])

  const changeTimeline = (timeline: Timeline) => {
    const nextEvents = sortEvents(data.events.filter((event) => event.timelineId === timeline.id))
    const nextComponents = causalComponents(nextEvents)
    const next = defaultEventForComponents(nextComponents, nextEvents, eventsById)
    setTimelineId(timeline.id)
    setFocusId(next?.id ?? "")
  }

  const selectChain = (component: Event[]) => {
    const next = rootsOf(component, eventsById)[0] ?? component[0]
    setFocusId(next?.id ?? "")
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl space-y-6 px-5 py-8 md:px-8 md:py-10">
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
            <Network className="size-4" />
            Phase 3 · story chains
          </div>
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Follow the whole chain
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              Read chronology and causality separately: chronology tells you what happened first, while
              explicit causal links explain why branches split, merge, or lead to later events.
            </p>
          </div>
        </header>

        <Card>
          <CardHeader className="border-b">
            <CardTitle className="text-base">Continuity</CardTitle>
            <CardDescription>Story chains never mix events from different timelines.</CardDescription>
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

        {components.length > 1 ? (
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Route className="size-4 text-primary" />
                Story chains in this continuity
              </CardTitle>
              <CardDescription>
                Separate causal components stay separate instead of appearing as one giant event list.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {components.map((component, index) => {
                const componentRoots = rootsOf(component, eventsById)
                const componentLeaves = leavesOf(component, eventsById)
                const isActive = component.some((event) => event.id === focusedEvent?.id)
                return (
                  <button
                    key={component.map((event) => event.id).join("-")}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-colors hover:border-primary/40 hover:bg-muted/30",
                      isActive && "border-primary/50 bg-primary/5"
                    )}
                    onClick={() => selectChain(component)}
                  >
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-primary">
                      Chain {index + 1} · {component.length} event{component.length === 1 ? "" : "s"}
                    </div>
                    <div className="mt-2 font-heading text-sm">{componentRoots.map((event) => event.name).join(" / ")}</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Leads to {componentLeaves.map((event) => event.name).join(" / ")}
                    </div>
                  </button>
                )
              })}
            </CardContent>
          </Card>
        ) : null}

        {focusedEvent ? (
          <>
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Route className="size-4 text-primary" />
                  Chronology · full continuity
                </CardTitle>
                <CardDescription>
                  Read left to right across every event in this continuity. Chronological neighbors may belong to different causal components and are not automatically causal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
                  <ChronologyNavButton
                    direction="previous"
                    event={previousChronologyEvent}
                    onClick={() => previousChronologyEvent && setFocusId(previousChronologyEvent.id)}
                  />
                  <div className="rounded-lg border bg-muted/10 px-3 py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {chronologyIndex >= 0 ? chronologyIndex + 1 : "—"} of {chronology.length}
                  </div>
                  <ChronologyNavButton
                    direction="next"
                    event={nextChronologyEvent}
                    onClick={() => nextChronologyEvent && setFocusId(nextChronologyEvent.id)}
                  />
                </div>

                <ol className="flex gap-2 overflow-x-auto pb-2">
                  {chronology.map((event, index) => (
                    <li key={event.id} className="flex shrink-0 items-stretch gap-2">
                      <button
                        ref={(node) => {
                          if (node) chronologyRefs.current.set(event.id, node)
                          else chronologyRefs.current.delete(event.id)
                        }}
                        className={cn(
                          "min-w-52 max-w-64 rounded-xl border bg-background p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/20",
                          event.id === focusedEvent.id && "border-primary/60 bg-primary/10 ring-2 ring-primary/15"
                        )}
                        onClick={() => setFocusId(event.id)}
                      >
                        <div className="flex items-center gap-2">
                          <Badge variant={event.id === focusedEvent.id ? "default" : "secondary"}>{index + 1}</Badge>
                          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            of {chronology.length}
                          </span>
                        </div>
                        <div className="mt-2 font-heading text-sm leading-5">{event.name}</div>
                        <div className="mt-2 text-[0.68rem] text-muted-foreground">
                          {event.order !== undefined ? `Story order ${event.order}` : "Story order not recorded"}
                        </div>
                      </button>
                      {index < chronology.length - 1 ? (
                        <div
                          className="flex w-12 shrink-0 flex-col items-center justify-center gap-1 text-muted-foreground/60"
                          title="Next in chronology; not a causal edge"
                        >
                          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.12em]">then</span>
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <GitBranch className="size-4 text-primary" />
                  Whole causal chain
                </CardTitle>
                <CardDescription>
                  Causal branches may skip chronological neighbors. Shared merge events are rendered once and referenced from other parents.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="grid gap-3 rounded-xl border bg-muted/10 p-4 sm:grid-cols-3">
                  <ChainSummary label="Causal starts" values={roots.map((event) => event.name)} />
                  <ChainSummary label="Unique events" values={[`${activeComponent.length} event${activeComponent.length === 1 ? "" : "s"}`]} />
                  <ChainSummary label="Causal ends" values={leaves.map((event) => event.name)} />
                </div>

                <div className="space-y-4">
                  {roots.map((root) => (
                    <TreeEventBranch
                      key={root.id}
                      event={root}
                      component={activeComponent}
                      eventsById={eventsById}
                      entitiesById={entitiesById}
                      focusId={focusedEvent.id}
                      positions={positions}
                      total={chronology.length}
                      onFocus={setFocusId}
                      path={new Set<string>()}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)]">
              <Card>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CircleDot className="size-4 text-primary" />
                    Local cause / effect
                  </CardTitle>
                  <CardDescription>
                    Inspect the immediate causal parents and consequences of the selected event.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 lg:grid-cols-3">
                  <LocalColumn label="Why?" emptyLabel="No explicit parent event">
                    {causes.map((event) => (
                      <LocalEventNode key={event.id} event={event} onClick={() => setFocusId(event.id)} />
                    ))}
                  </LocalColumn>

                  <div className="rounded-xl border border-primary/40 bg-primary/5 p-4 shadow-[0_0_32px_-24px_var(--primary)]">
                    <div className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      You are here · chronology {positions.get(focusedEvent.id) ?? "—"} of {chronology.length}
                    </div>
                    <h2 className="font-heading text-xl">{focusedEvent.name}</h2>
                    {focusedEvent.description ? (
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{focusedEvent.description}</p>
                    ) : null}
                    <EventMeta event={focusedEvent} entitiesById={entitiesById} timelineId={timelineId} />
                  </div>

                  <LocalColumn label="What next?" emptyLabel="No explicit child event">
                    {consequences.map((event) => (
                      <LocalEventNode key={event.id} event={event} onClick={() => setFocusId(event.id)} />
                    ))}
                  </LocalColumn>
                </CardContent>
              </Card>

              <Card className="h-fit">
                <CardHeader className="border-b">
                  <CardTitle className="text-base">How to read this</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                  <p><strong className="text-foreground">Chronology</strong> is the numbered strip above: every event in the selected continuity appears once in story order.</p>
                  <p><strong className="text-foreground">Previous / next chronology</strong> can move you across separate causal components without inventing an edge between them.</p>
                  <p><strong className="text-foreground">Causal branches</strong> exist only when explicit event edges are recorded.</p>
                  <p><strong className="text-foreground">Merge node</strong> means multiple sourced causal parents lead to the same event. The full event card is shown once.</p>
                  <p>Chronological neighbors without a causal edge remain neighbors in the strip but are intentionally disconnected in the causal tree.</p>
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

function ChronologyNavButton({
  direction,
  event,
  onClick,
}: {
  direction: "previous" | "next"
  event?: Event
  onClick: () => void
}) {
  const isPrevious = direction === "previous"
  const label = isPrevious ? "Previous in chronology" : "Next in chronology"
  const edgeLabel = isPrevious ? "Beginning of chronology" : "End of chronology"

  return (
    <Button
      variant="outline"
      className={cn(
        "h-auto min-h-14 w-full whitespace-normal p-3",
        isPrevious ? "justify-start text-left" : "justify-end text-right"
      )}
      disabled={!event}
      onClick={onClick}
    >
      {isPrevious ? <ArrowLeft className="size-4 shrink-0" /> : null}
      <span className="min-w-0">
        <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.13em] text-muted-foreground">
          {event ? label : edgeLabel}
        </span>
        {event ? <span className="mt-0.5 block truncate font-heading text-xs">{event.name}</span> : null}
      </span>
      {!isPrevious ? <ArrowRight className="size-4 shrink-0" /> : null}
    </Button>
  )
}

function ChainSummary({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <div className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{values.length ? values.join(" / ") : "—"}</div>
    </div>
  )
}

function TreeEventBranch({
  event,
  component,
  eventsById,
  entitiesById,
  focusId,
  positions,
  total,
  onFocus,
  path,
}: {
  event: Event
  component: Event[]
  eventsById: Map<string, Event>
  entitiesById: Map<string, { id: string; name: string }>
  focusId: string
  positions: Map<string, number>
  total: number
  onFocus: (id: string) => void
  path: Set<string>
}) {
  const nextPath = new Set(path)
  nextPath.add(event.id)
  const parents = parentsOf(event, component, eventsById)
  const children = childrenOf(event, component, eventsById)
  const isStart = parents.length === 0
  const isEnd = children.length === 0
  const isFocused = event.id === focusId
  const isShared = parents.length > 1
  const moment = positions.get(event.id)

  return (
    <div>
      <button
        className={cn(
          "w-full rounded-xl border bg-background p-4 text-left transition-all hover:border-primary/40 hover:bg-muted/20",
          isFocused && "border-primary/60 bg-primary/10 ring-2 ring-primary/15"
        )}
        onClick={() => onFocus(event.id)}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {isStart ? <Badge><Flag className="size-3" />Causal start</Badge> : null}
          {typeof moment === "number" ? <Badge variant="secondary">Chronology {moment} of {total}</Badge> : null}
          {isFocused ? <Badge variant="outline">You are here</Badge> : null}
          {isEnd ? <Badge variant="outline">Causal end</Badge> : null}
          {isShared ? <Badge variant="outline">Merge node · {parents.length} parents</Badge> : null}
        </div>
        <div className="mt-2 font-heading text-base md:text-lg">{event.name}</div>
        {event.description ? (
          <p className="mt-1 text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">{event.description}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[0.68rem] text-muted-foreground">
          {event.order !== undefined ? <span>Story order {event.order}</span> : <span>Story order not recorded</span>}
          {event.participantIds.length ? (
            <span>{event.participantIds.map((id) => entitiesById.get(id)?.name ?? id).join(", ")}</span>
          ) : null}
        </div>
      </button>

      {children.length ? (
        <div className="relative ml-4 mt-3 space-y-3 border-l border-border/80 pl-5 md:ml-8 md:pl-7">
          {children.map((child) => {
            const childParents = parentsOf(child, component, eventsById)
            const canonicalParent = canonicalParentOf(child, component, eventsById)
            const renderAsMergeReference = childParents.length > 1 && canonicalParent?.id !== event.id

            return (
              <div
                key={`${event.id}-${child.id}`}
                className="relative before:absolute before:-left-5 before:top-6 before:w-5 before:border-t before:border-border/80 md:before:-left-7 md:before:w-7"
              >
                {nextPath.has(child.id) ? (
                  <div className="rounded-lg border border-dashed p-3 text-xs text-muted-foreground">
                    Cycle back to {child.name}; tree expansion stops here.
                  </div>
                ) : renderAsMergeReference ? (
                  <button
                    className="w-full rounded-xl border border-dashed bg-muted/10 p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/20"
                    onClick={() => onFocus(child.id)}
                  >
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant="outline">Merges into</Badge>
                      {positions.get(child.id) ? (
                        <Badge variant="secondary">Chronology {positions.get(child.id)} of {total}</Badge>
                      ) : null}
                    </div>
                    <div className="mt-2 font-heading text-sm">{child.name}</div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      This branch also causes the shared event. Its full card is shown once under the other causal parent.
                    </p>
                  </button>
                ) : (
                  <TreeEventBranch
                    event={child}
                    component={component}
                    eventsById={eventsById}
                    entitiesById={entitiesById}
                    focusId={focusId}
                    positions={positions}
                    total={total}
                    onFocus={onFocus}
                    path={nextPath}
                  />
                )}
              </div>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

function LocalColumn({ label, emptyLabel, children }: { label: string; emptyLabel: string; children: ReactNode }) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children)
  return (
    <section className="rounded-xl border bg-muted/10 p-3">
      <div className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="grid gap-2">
        {hasChildren ? children : <div className="py-6 text-center text-xs text-muted-foreground">{emptyLabel}</div>}
      </div>
    </section>
  )
}

function LocalEventNode({ event, onClick }: { event: Event; onClick: () => void }) {
  return (
    <button
      className="rounded-lg border bg-background p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/30"
      onClick={onClick}
    >
      <div className="font-heading text-sm">{event.name}</div>
      {event.description ? <p className="mt-1 line-clamp-3 text-xs leading-5 text-muted-foreground">{event.description}</p> : null}
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
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>
      <div className="flex items-start gap-2 text-xs text-muted-foreground">
        <Users className="mt-0.5 size-3.5 shrink-0" />
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {event.participantIds.length
            ? event.participantIds.map((id) => (
                <Link
                  key={id}
                  className="text-primary underline-offset-4 hover:underline"
                  href={`/?entity=${encodeURIComponent(id)}&timeline=${encodeURIComponent(timelineId)}`}
                >
                  {entitiesById.get(id)?.name ?? id}
                </Link>
              ))
            : "No participants recorded"}
        </div>
      </div>
      <Link
        className="inline-flex text-xs font-medium text-primary underline-offset-4 hover:underline"
        href={`/?entity=${encodeURIComponent(event.id)}&timeline=${encodeURIComponent(timelineId)}`}
      >
        Open full event dossier
      </Link>
    </div>
  )
}
