import { ClaimHistoryExplorer } from "@/components/claim-history-explorer"
import { loadUniverseData } from "@/lib/load-data"

export const dynamic = "force-static"

type ClaimsPageProps = {
  searchParams: Promise<{ q?: string | string[] }>
}

export default async function ClaimsPage({ searchParams }: ClaimsPageProps) {
  const data = await loadUniverseData()
  const params = await searchParams
  const initialQuery = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? ""

  return <ClaimHistoryExplorer data={data} initialQuery={initialQuery} />
}
