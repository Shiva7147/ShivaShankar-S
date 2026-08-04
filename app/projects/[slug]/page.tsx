import { Metadata } from "next";
import { notFound } from "next/navigation";
import "@/app/case-study.css";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
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
    <div className="min-h-screen flex flex-col cs-page">
      <Navbar />
      <main id="main-content" className="flex-1">
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
      </main>
      <Footer />
    </div>
  );
}
