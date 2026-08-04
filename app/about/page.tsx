import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { About } from "@/components/about/About";
import { JourneySection } from "@/components/journey/JourneySection";
import { ResearchSection } from "@/components/research/ResearchSection";
import { CurrentlyBuilding } from "@/components/now/CurrentlyBuilding";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata = {
  title: "About & Engineering Journey — Shiva Shankar S",
  description: "Background, career journey timeline (Christ University BCA 2022-2025, St Joseph's MCA 2025-2027), research on machine unlearning, and location direction toward Spain."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24 space-y-16">
        {/* 1. About Narrative & India to Spain Route */}
        <About />

        {/* 2. Research Highlight (Surgical Amnesia IEEE Challenge) */}
        <ResearchSection />

        {/* 3. Journey Timeline (Christ University & St Joseph's) */}
        <JourneySection />

        {/* 4. Currently Building Grid */}
        <CurrentlyBuilding />

        {/* 5. Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
