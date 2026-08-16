import Link from "next/link"
import { ArrowRight, BookOpen, ExternalLink, GitCompareArrows, ShieldCheck, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Fact, Source, UniverseData, UniverseEntity } from "@/lib/types"

const LENSES = [
  {
    timelineId: "original",
    eyebrow: "Mortal Kombat: Deception",
    title: "Original continuity",
    subjectIds: ["one-being", "elder-gods"],
    description: "Creation-era claims centered on the One Being, the Elder Gods, the realms, and the Kamidogu.",
  },
  {
    timelineId: "reboot",
    eyebrow: "Mortal Kombat 11",
    title: "Reboot continuity",
    subjectIds: ["kronika"],
    description: "Time-and-existence claims centered on Kronika, her cosmic status, and repeated timeline restarts.",
  },
] as const

const statusVariant = {
  canon: "default",
  supplemental: "secondary",
  retconned: "destructive",
  alternate: "outline",
  unconfirmed: "outline",
  gameplay_only: "outline",
} as const

function humanize(value: string) {
  return value.replaceAll("_", " ")
}

function entityById(data: UniverseData, id: string): UniverseEntity | undefined {
  return Object.values(data)
    .flat()
    .find((entity) => entity.id === id)
}

function factValue(fact: Fact, data: UniverseData) {
  if (fact.objectId) return entityById(data, fact.objectId)?.name ?? fact.objectId
  return String(fact.value ?? "")
}

function sourcesFor(facts: Fact[], sources: Source[]) {
  const ids = new Set(facts.flatMap((fact) => fact.sourceIds))
  return sources.filter((source) => ids.has(source.id)).sort((a, b) => (a.year ?? 0) - (b.year ?? 0))
}

export function CosmologyComparison({ data }: { data: UniverseData }) {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <GitCompareArrows className="size-4" />
            Continuity-scoped comparison
          </div>
          <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight md:text-5xl">
            Deception cosmology vs. MK11 Kronika
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
            Read two sourced cosmological frameworks side by side without flattening them into one canon narrative.
            A difference across continuities is not automatically a contradiction or retcon.
          </p>
        </header>

        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="size-5 text-primary" />
              Comparison guardrails
            </CardTitle>
            <CardDescription>
              This view does not infer a Titan → Elder God → One Being hierarchy, does not identify Kronika with the One Being,
              and does not turn MK11 promotional wording into an Original-continuity retcon.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-5 xl:grid-cols-2">
          {LENSES.map((lens) => {
            const subjects = lens.subjectIds
              .map((id) => entityById(data, id))
              .filter((entity): entity is UniverseEntity => Boolean(entity))
            const facts = data.facts.filter(
              (fact) => lens.subjectIds.includes(fact.subjectId as never) && fact.timelineIds.includes(lens.timelineId)
            )
            const sources = sourcesFor(facts, data.sources)

            return (
              <Card key={lens.timelineId} className="overflow-hidden">
                <CardHeader className="border-b bg-muted/15">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{lens.eyebrow}</div>
                  <CardTitle className="text-2xl">{lens.title}</CardTitle>
                  <CardDescription className="leading-6">{lens.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {subjects.map((subject) => (
                      <Link
                        key={subject.id}
                        href={`/?timeline=${lens.timelineId}&entity=${subject.id}`}
                        className="inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-primary/50 hover:bg-muted"
                      >
                        {subject.name}
                        <ArrowRight className="size-3" />
                      </Link>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <section>
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      <Sparkles className="size-4" />
                      Evidence-backed claims
                    </div>
                    <div className="grid gap-3">
                      {facts.map((fact) => (
                        <div key={fact.id} className="rounded-xl border bg-muted/10 p-4">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <Link
                              href={`/?timeline=${lens.timelineId}&entity=${fact.id}`}
                              className="font-heading text-lg hover:text-primary"
                            >
                              {fact.name}
                            </Link>
                            <Badge variant={statusVariant[fact.canonStatus]}>{humanize(fact.canonStatus)}</Badge>
                          </div>
                          <div className="mt-2 text-sm">
                            <span className="text-muted-foreground">{humanize(fact.predicate)}:</span>{" "}
                            <span>{factValue(fact, data)}</span>
                          </div>
                          {fact.notes ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{fact.notes}</p> : null}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      <BookOpen className="size-4" />
                      Sources used by these claims
                    </div>
                    <div className="grid gap-2">
                      {sources.map((source) => (
                        <div key={source.id} className="rounded-xl border p-3">
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <Link href={`/?entity=${source.id}`} className="font-medium hover:text-primary">
                              {source.name}
                            </Link>
                            <div className="flex items-center gap-2">
                              {source.year ? <Badge variant="outline">{source.year}</Badge> : null}
                              {source.url ? (
                                <a
                                  href={source.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={`Open ${source.name} source`}
                                  className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                  <ExternalLink className="size-4" />
                                </a>
                              ) : null}
                            </div>
                          </div>
                          {source.notes ? <p className="mt-2 text-xs leading-5 text-muted-foreground">{source.notes}</p> : null}
                        </div>
                      ))}
                    </div>
                  </section>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </main>
  )
}
