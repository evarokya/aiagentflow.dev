import Hero from "@/components/Hero";
import { Pipeline } from "@/components/Pipeline";
import { Features } from "@/components/Features";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { InstallGuide } from "@/components/InstallGuide";
import { Providers } from "@/components/Providers";
import { Community } from "@/components/Community";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Agent Flow",
    "operatingSystem": "Any with Node.js",
    "applicationCategory": "DeveloperApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Open-source multi-agent AI orchestration framework for software development."
  };

  return (
    <main className="min-h-screen bg-brand-bg transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Pipeline />
      <Features />
      <Providers />
      <InteractiveDemo />
      <InstallGuide />
      <Community />
      {/* Other sections will be added here */}
    </main>
  );
}
