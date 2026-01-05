import { getPage } from "../actions/pages";
import DynamicSection from "@/components/dynamic-section";

export const revalidate = 60;
export default async function HomePage() {
  const { data } = await getPage("/");

  return (
    <div className="min-h-screen bg-background">
      <DynamicSection data={data} />
    </div>
  );
}
