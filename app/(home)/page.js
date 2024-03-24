import { Hero, DealOfTheDay, RHMSNEWS } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="lg:hidden">
        <Hero />
      </div>
      <DealOfTheDay />
      <RHMSNEWS />
    </main>
  );
}
