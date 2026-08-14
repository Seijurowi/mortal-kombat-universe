"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { BookOpenCheck, GitCompareArrows, History, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

export function ClaimHistoryExplorer({ data }: { data: UniverseData }) {
  const [query, setQuery] = useState("")
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
        const hasRetconned = facts.some((fact) => fact.canonStatus === "retconned")
        const hasAlternate = facts.some((fact) => fact.canonStatus === "alternate")
        const hasDivergence = values.size > 1 || timelines.size > 1 || hasRetconned || hasAlternate
        return {
          key,
          facts,
          subjectName: subject?.name ?? facts[0].subjectId,
          predicate: facts[0].predicate,
          hasRetconned,
          hasDivergence,
          timelineCount: timelines.size,
          valueCount: values.size,
        }
      })
      .filter((group) => group.hasDivergence)
      .sort((a, b) => {
        if (a.hasRetconned !== b.hasRetconned) return a.hasRetconned ? -1 : 1
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

  const active = groups.find((group) => group.key === selectedKey) ?? filtered[0] ?? groups[0]

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
              See how a claim changes across Mortal Kombat history
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
              This view separates confirmed retcons from ordinary continuity divergence. It groups sourced facts by subject and predicate, then shows each scoped version with canon status and evidence instead of flattening them into one answer.
            </p>
          </div>
        </header>

        <div className="grid gap-5 xl:grid-cols-[minmax(20rem,0.9fr)_minmax(0,2fr)]">
          <Card className="h-fit">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2 text-lg">
                <GitCompareArrows className="size-4 text-primary" />
                Divergent claims
              </CardTitle>
              <CardDescription>
                A difference between timelines is not automatically a retcon.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  aria-label="Search divergent claims"
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
                      {group.hasRetconned ? <Badge>Confirmed retcon marker</Badge> : <Badge variant="outline">Continuity divergence</Badge>}
                      <Badge variant="secondary">{group.facts.length} fact{group.facts.length === 1 ? "" : "s"}</Badge>
                    </div>
                    <div className="mt-2 font-heading text-sm">{group.subjectName}</div>
                    <div className="mt-1 font-mono text-[0.68rem] text-muted-foreground">{group.predicate}</div>
                  </button>
                ))}

                {filtered.length === 0 ? (
                  <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">
                    No divergent claim groups match this search.
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
                    <Badge variant={active.hasRetconned ? "default" : "outline"}>
                      {active.hasRetconned ? "Retcon evidence present" : "Continuity divergence"}
                    </Badge>
                    <Badge variant="secondary">{active.timelineCount} timeline{active.timelineCount === 1 ? "" : "s"}</Badge>
                  </div>
                  <CardTitle className="mt-2 text-xl md:text-2xl">{active.subjectName}</CardTitle>
                  <CardDescription className="font-mono">{active.predicate}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl border bg-muted/10 p-4 text-sm leading-6 text-muted-foreground">
                    {active.hasRetconned
                      ? "At least one fact in this group is explicitly marked retconned. Read the individual fact cards and sources before treating the entire group as one simple before/after rewrite."
                      : "These records disagree or vary by continuity, but none is explicitly marked retconned. Treat this as scoped divergence, not proof that one version replaced another."}
                  </div>
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
                          <Badge variant="secondary">Version {index + 1}</Badge>
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
                                <Button asChild={false} size="sm" variant="outline">
                                  <a href={source.url} target="_blank" rel="noreferrer">Official source</a>
                                </Button>
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
                The current dataset does not yet contain a claim group with enough scoped variation to compare.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}