import { CosmologyComparison } from "@/components/cosmology-comparison"
import { loadUniverseData } from "@/lib/load-data"

export const dynamic = "force-static"

export default async function CosmologyPage() {
  const data = await loadUniverseData()
  return <CosmologyComparison data={data} />
}
