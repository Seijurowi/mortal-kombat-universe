import { CausalityExplorer } from "@/components/causality-explorer"
import { loadUniverseData } from "@/lib/load-data"

export const dynamic = "force-static"

export default async function CausalityPage() {
  const data = await loadUniverseData()
  return <CausalityExplorer data={data} />
}
