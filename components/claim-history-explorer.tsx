"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { BookOpenCheck, GitCompareArrows, History, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { Fact, Source, UniverseData } from "@/lib/types"
import { cn } from "@/lib/utils"

function claimKey(fact: Fact) {
  return `${fact.subjectId}::${fact.predicate}`
}

function factValue(fact: Fact, entitiesById: Map<string, { id: string; name: string }>) {
  if (fact.objectId) return entitiesById.get(fact.objectId)?.name ?? fact.objectId
  if (fact.value !== undefined) return String(fact.value)
  return "Assertion recorded"
}

function statusLabel(status: Fact["canonStatus"]) {
  return status.replaceAll("_", " ")
}

function sourceYear(source?: Source) {
  return source?.year ?? Number.MAX_SAFE_INTEGER
}

function familyLabel(group: {
  hasRetconned: boolean
  hasAlternate: boolean
  hasValueVariation: boolean
  hasTimelineSpread: boolean
  hasStatusVariation: boolean
}) {
  if (group.hasRetconned) return "Retcon evidence present"
  if (group.hasAlternate) return "Alternate portrayal present"
  if (group.hasValueVariation) return "Value variation"
  if (group.hasTimelineSpread && group.hasStatusVariation) return "Cross-continuity agreement · status variation"
  if (group.hasTimelineSpread) return "Cross-continuity agreement"
  if (group.hasStatusVariation) return "Canon-status variation"
  return "Multiple sourced assertions"
}

function familyExplanation(group: {
  hasRetconned: boolean
  hasAlternate: boolean
  hasValueVariation: boolean
  hasTimelineSpread: boolean
  hasStatusVariation: boolean
}) {
  if (group.hasRetconned) {
    return "At least one fact in this family is explicitly marked retconned. Inspect the individual fact cards and sources before treating the family as one simple before/after rewrite."
  }
  if (group.hasAlternate) {
    return "At least one fact in this family is explicitly marked alternate. Alternate portrayals remain inspectable, but alternate does not mean that another claim was corrected or replaced."
  }
  if (group.hasValueVariation) {
    return "This family contains more than one displayed value. That can represent a real continuity difference, but it can also reflect a multi-valued or time-dependent predicate such as identity. Value variation alone is not proof of contradiction or retcon."
  }
  if (group.hasTimelineSpread && group.hasStatusVariation) {
    return "The same displayed claim appears across more than one continuity, but the individual records use different canon statuses. The agreement is useful history while the evidence strength still remains record-specific; neither fact alone implies a retcon."
  }
  if (group.hasTimelineSpread) {
    return "The same displayed claim appears across more than one continuity. Cross-continuity agreement is useful history, but it is not a divergence or a retcon."
  }
  if (group.hasStatusVariation) {
    return "These facts share a subject and predicate but use different canon statuses. Inspect each status and its evidence rather than collapsing the family into one canonical answer."
  }
  return "Multiple sourced facts share this subject and predicate. They are grouped for inspection only; the grouping does not assert contradiction or replacement."
}

export function ClaimHistoryExplorer({ data, initialQuery = "" }: { data: UniverseData; initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const entitiesById = useMemo(
    () =>
      new Map(
        Object.values(data)
          .flat()
          .map((entity) => [entity.id, entity])
      ),
    [data]
  )
  const sourcesById = useMemo(() => new Map(data.sources.map((source) => [source.id, source])), [data.sources])
  const timelinesById = useMemo(() => new Map(data.timelines.map((timeline) => [timeline.id, timeline])), [data.timelines])

  const groups = useMemo(() => {
    const grouped = new Map<string, Fact[]>()
    for (const fact of data.facts) {
      const key = claimKey(fact)
      grouped.set(key, [...(grouped.get(key) ?? []), fact])
    }

    return [...grouped.entries()]
      .map(([key, facts]) => {
        const subject = entitiesById.get(facts[0].subjectId)
        const values = new Set(facts.map((fact) => factValue(fact, entitiesById)))
        const timelines = new Set(facts.flatMap((fact) => fact.timelineIds))
        const statuses = new Set(facts.map((fact) => fact.canonStatus))
        const hasRetconned = facts.some((fact) => fact.canonStatus === "retconned")
        const hasAlternate = facts.some((fact) => fact.canonStatus === "alternate")
        const hasValueVariation = values.size > 1
        const hasTimelineSpread = timelines.size > 1
        const hasStatusVariation = statuses.size > 1
        const isComparable = facts.length > 1 || hasRetconned || hasAlternate || hasStatusVariation
        return {
          key,
          facts,
          subjectName: subject?.name ?? facts[0].subjectId,
          predicate: facts[0].predicate,
          hasRetconned,
          hasAlternate,
          hasValueVariation,
          hasTimelineSpread,
          hasStatusVariation,
          isComparable,
          timelineCount: timelines.size,
          valueCount: values.size,
        }
      })
      .filter((group) => group.isComparable)
      .sort((a, b) => {
        if (a.hasRetconned !== b.hasRetconned) return a.hasRetconned ? -1 : 1
        if (a.hasAlternate !== b.hasAlternate) return a.hasAlternate ? -1 : 1
        if (a.hasValueVariation !== b.hasValueVariation) return a.hasValueVariation ? -1 : 1
        if (b.timelineCount !== a.timelineCount) return b.timelineCount - a.timelineCount
        return `${a.subjectName} ${a.predicate}`.localeCompare(`${b.subjectName} ${b.predicate}`)
      })
  }, [data.facts, entitiesById])

  const filtered = groups.filter((group) => {
    const haystack = `${group.subjectName} ${group.predicate} ${group.facts
      .map((fact) => factValue(fact, entitiesById))
      .join(" ")}`.toLowerCase()
    return haystack.includes(query.trim().toLowerCase())
  })

  const active = filtered.find((group) => group.key === selectedKey) ?? filtered[0] ?? null

  const orderedFacts = active
    ? [...active.facts].sort((a, b) => {
        const aYear = Math.min(...a.sourceIds.map((id) => sourceYear(sourcesById.get(id))))
        const bYear = Math.min(...b.sourceIds.map((id) => sourceYear(sourcesById.get(id))))
        if (aYear !== bYear) return aYear - bYear
        return a.id.localeCompare(b.id)
      })
    : []

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl space-y-6 px-5 py-8 md:px-8 md:py-10">
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary">
            <History className="size-4" />
            Phase 4 · claim history
          </div>
          <div className="max-w-4xl">
            <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
              Compare how claims are recorded across Mortal Kombat history
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              Facts are grouped into claim families by subject and predicate for inspection. Different values can reflect continuity changes, alternate portrayals, or valid time-dependent states, so the grouping itself never asserts contradiction or retcon.
            </p>
          </div>
        </header>

        <div className="grid gap-5 xl:grid-cols-[minmax(20rem,0.9fr)_minmax(0,2fr)]">
          <Card className="h-fit">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2 text-lg">
                <GitCompareArrows className="size-4 text-primary" />
                Claim families
              </CardTitle>
              <CardDescription>Grouped for comparison; grouping does not assert contradiction.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  aria-label="Search claim families"
                  className="pl-9"
                  placeholder="Search subject, predicate, or value..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>

              <div className="space-y-2">
                {filtered.map((group) => (
                  <button
                    key={group.key}
                    className={cn(
                      "w-full rounded-xl border p-3 text-left transition-colors hover:border-primary/40 hover:bg-muted/30",
                      active?.key === group.key && "border-primary/50 bg-primary/5"
                    )}
                    onClick={() => setSelectedKey(group.key)}
                  >
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge variant={group.hasRetconned ? "default" : "outline"}>{familyLabel(group)}</Badge>
                      <Badge variant="secondary">{group.facts.length} fact{group.facts.length === 1 ? "" : "s"}</Badge>
                    </div>
                    <div className="mt-2 font-heading text-sm">{group.subjectName}</div>
                    <div className="mt-1 font-mono text-[0.68rem] text-muted-foreground">{group.predicate}</div>
                  </button>
                ))}

                {filtered.length === 0 ? (
                  <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
                    No claim families match this search.
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>

          {active ? (
            <div className="space-y-5">
              <Card>
                <CardHeader className="border-b">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={active.hasRetconned ? "default" : "outline"}>{familyLabel(active)}</Badge>
                    <Badge variant="secondary">{active.timelineCount} timeline{active.timelineCount === 1 ? "" : "s"}</Badge>
                    <Badge variant="secondary">{active.valueCount} displayed value{active.valueCount === 1 ? "" : "s"}</Badge>
                  </div>
                  <CardTitle className="mt-2 text-xl md:text-2xl">{active.subjectName}</CardTitle>
                  <CardDescription className="font-mono">{active.predicate}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl border bg-muted/10 p-4 text-sm leading-6 text-muted-foreground">
                    {familyExplanation(active)}
                  </div>
                  <p className="text-xs leading-5 text-muted-foreground">
                    Claim records below are ordered by the earliest known year among their supporting sources. That order is evidence-history context, not canonical priority.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-3">
                {orderedFacts.map((fact, index) => {
                  const timelineNames = fact.timelineIds.map((id) => timelinesById.get(id)?.name ?? id)
                  const sources = fact.sourceIds.map((id) => sourcesById.get(id)).filter((source): source is Source => Boolean(source))
                  return (
                    <Card key={fact.id}>
                      <CardHeader className="border-b">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <Badge variant="secondary">Claim record {index + 1}</Badge>
                          <Badge variant={fact.canonStatus === "retconned" ? "default" : "outline"}>{statusLabel(fact.canonStatus)}</Badge>
                          {timelineNames.map((name) => <Badge key={name} variant="outline">{name}</Badge>)}
                        </div>
                        <CardTitle className="mt-2 text-lg">{factValue(fact, entitiesById)}</CardTitle>
                        {fact.notes ? <CardDescription className="leading-6">{fact.notes}</CardDescription> : null}
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="font-mono text-[0.7rem] text-muted-foreground">{fact.id}</div>
                        <div className="space-y-2">
                          {sources.map((source) => (
                            <div key={source.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3">
                              <div>
                                <div className="flex items-center gap-2 text-sm font-medium">
                                  <BookOpenCheck className="size-4 text-primary" />
                                  {source.name}
                                </div>
                                <div className="mt-1 text-xs text-muted-foreground">
                                  {[source.game, source.year].filter(Boolean).join(" · ") || source.sourceType}
                                </div>
                              </div>
                              {source.url ? (
                                <a
                                  className={buttonVariants({ variant: "outline", size: "sm" })}
                                  href={source.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Source
                                </a>
                              ) : null}
                            </div>
                          ))}
                        </div>
                        <Link
                          className="inline-flex text-xs font-medium text-primary underline-offset-4 hover:underline"
                          href={`/?entity=${encodeURIComponent(fact.id)}${fact.timelineIds[0] ? `&timeline=${encodeURIComponent(fact.timelineIds[0])}` : ""}`}
                        >
                          Open fact dossier
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ) : (
            <Card>
              <CardContent className="py-12 text-center text-sm text-muted-foreground">
                No claim family is available for the current search.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
