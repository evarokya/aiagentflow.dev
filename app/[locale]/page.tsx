import Hero from "@/components/Hero";
import { Pipeline } from "@/components/Pipeline";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { InstallGuide } from "@/components/InstallGuide";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg transition-colors duration-300">
      <Hero />
      <Pipeline />
      <Features />
      <InteractiveDemo />
      <InstallGuide />
      {/* Other sections will be added here */}
    </main>
  );
}
