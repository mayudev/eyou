import { Status } from "types";
import Timeline from "../../../components/timeline/timeline";
import { setTimeout } from "timers/promises";
import { generateStatuses } from "../../../mocks/handlers/timelines";

async function getData(): Promise<Status[]> {
  await setTimeout(0);
  return generateStatuses(6);
}

export default async function HomePage() {
  const data = await getData();
  return (
    <div>
      <Timeline posts={data} />
    </div>
  );
}
