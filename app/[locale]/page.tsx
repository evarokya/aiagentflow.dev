import Hero from "@/components/Hero";
import { Pipeline } from "@/components/Pipeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg transition-colors duration-300">
      <Hero />
      <Pipeline />
      {/* Other sections will be added here */}
    </main>
  );
}
