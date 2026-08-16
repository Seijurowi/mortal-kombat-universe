import { Suspense } from "react"

import { ClaimHistoryExplorer } from "@/components/claim-history-explorer"
import { loadUniverseData } from "@/lib/load-data"

export const dynamic = "force-static"

export default async function ClaimsPage() {
  const data = await loadUniverseData()

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ClaimHistoryExplorer data={data} />
    </Suspense>
  )
}
