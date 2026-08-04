import { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/case-study.css";
import { projectsData } from "@/data/projects";
import { CaseStudyHero } from "@/components/casestudy/CaseStudyHero";
import { CaseStudyOverview } from "@/components/casestudy/CaseStudyOverview";
import { CaseStudyArchitecture } from "@/components/casestudy/CaseStudyArchitecture";
import { TechStackGrid } from "@/components/casestudy/TechStackGrid";
import { FeaturesGrid } from "@/components/casestudy/FeaturesGrid";
import { WorkflowTimeline } from "@/components/casestudy/WorkflowTimeline";
import { DeviceMockups } from "@/components/casestudy/DeviceMockups";
import { ChallengesSection } from "@/components/casestudy/ChallengesSection";
import { ResultsSection } from "@/components/casestudy/ResultsSection";
import { RoadmapSection } from "@/components/casestudy/RoadmapSection";
import { GitHubSection } from "@/components/casestudy/GitHubSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study | Shiva Shankar S`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="cs-page">
      <CaseStudyHero project={project} />
      <CaseStudyOverview project={project} />
      <CaseStudyArchitecture project={project} />
      <TechStackGrid project={project} />
      <FeaturesGrid project={project} />
      <WorkflowTimeline project={project} />
      <DeviceMockups project={project} />
      <ChallengesSection project={project} />
      <ResultsSection project={project} />
      <RoadmapSection project={project} />
      <GitHubSection project={project} />

      {/* Footer */}
      <footer className="py-16 text-center border-t border-[rgba(255,255,255,0.06)]">
        <div className="cs-wrap">
          <p className="text-[#484F58] font-mono text-xs">
            Built by{" "}
            <span className="text-[#8B949E]">Shiva Shankar S</span>
            {" · "}
            Powered by{" "}
            <span style={{ color: project.accent }}>Alpha Studi0</span>
            {" · "}
            Designed with modern enterprise aesthetics
          </p>
        </div>
      </footer>
    </main>
  );
}
