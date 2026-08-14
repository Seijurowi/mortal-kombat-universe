import { UniverseExplorer } from "@/components/universe-explorer";
import { loadUniverseData } from "@/lib/load-data";

export const dynamic = "force-static";

export default async function Home() {
  const data = await loadUniverseData();
  return <UniverseExplorer data={data} />;
}
