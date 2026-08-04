import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { NotesSection } from "@/components/notes/NotesSection";

export const metadata = {
  title: "Engineering Notes & Technical Writing — Shiva Shankar S",
  description: "Technical articles and engineering writing on RAG evaluation, LangGraph state, sub-second voice AI, machine unlearning, and client encryption."
};

export default function NotesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-24">
        <NotesSection />
      </main>
      <Footer />
    </div>
  );
}
