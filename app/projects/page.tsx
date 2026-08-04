import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { SelectedWork } from "@/components/projects/SelectedWork";

export const metadata = {
  title: "Projects & AI Architecture Case Studies — Shiva Shankar S",
  description: "Detailed system architecture, decision highlights, evaluation metrics, and technology stacks for Shiva Shankar S's production AI projects."
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <SelectedWork />
      </main>
      <Footer />
    </div>
  );
}
