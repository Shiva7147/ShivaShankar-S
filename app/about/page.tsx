import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { About } from "@/components/about/About";
import { JourneySection } from "@/components/journey/JourneySection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { BeyondEngineering } from "@/components/about/BeyondEngineering";
import { CurrentlyBuilding } from "@/components/now/CurrentlyBuilding";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "About & Beyond Engineering — Shiva Shankar S",
  description: "Background, sports leadership, competitive football, IEEE research finalist, hackathons, client work, timeline (Kristu Jayanti BCA 2022-2025, St Joseph's MCA 2025-2027), and direction toward Spain."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24 space-y-16">
        {/* 1. About Narrative & Profile Portrait */}
        <About />

        {/* 2. Research Highlight (Surgical Amnesia IEEE Challenge) */}
        <ResearchSection />

        {/* 3. Journey Timeline (Kristu Jayanti University & St Joseph's University) */}
        <JourneySection />

        {/* 4. Beyond Engineering (Sports Leadership, Football, Hackathons, IEEE, Client Work) */}
        <BeyondEngineering />

        {/* 5. Currently Building / Now Grid */}
        <CurrentlyBuilding />

        {/* 6. Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
