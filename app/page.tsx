import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { MetricsBand } from "@/components/metrics/MetricsBand";
import { Footer } from "@/components/footer/Footer";
import { projectsData } from "@/data/projects";
import { skillCategoriesData } from "@/data/skills";
import { ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EC]">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero Introduction */}
        <Hero />

        {/* 2. Core Metrics */}
        <MetricsBand />

        {/* 3. Specialized Applied AI Roles & Competencies Overview */}
        <section className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="eyebrow block mb-2">COMPETENCY OVERVIEW</div>
                <h2 className="heading-h2 text-[#0A2747]">
                  Applied AI & System Engineering Stack
                </h2>
              </div>
              <Link href="/about" className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#12375F] hover:text-[#B98945] transition-colors">
                <span>View Full About & Background</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategoriesData.slice(0, 3).map((cat, i) => (
                <div key={cat.title} className="editorial-card space-y-3">
                  <div className="font-mono text-xs text-[#B98945] font-semibold">0{i + 1}</div>
                  <h3 className="font-sans font-bold text-lg text-[#0A2747]">{cat.title}</h3>
                  <ul className="space-y-1.5 text-xs text-[#12375F]">
                    {cat.skills.slice(0, 5).map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="text-[#B98945]">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Projects Teaser (Titles, Summaries & Links to /projects) */}
        <section className="py-20 border-b border-[rgba(10,39,71,0.12)]">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="eyebrow block mb-2">SELECTED WORK</div>
                <h2 className="heading-h2 text-[#0A2747]">
                  Production AI Systems & Case Studies
                </h2>
              </div>
              <Link href="/projects" className="btn-primary text-xs py-2 px-4">
                <span>View All 5 Projects & Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Project Summary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="editorial-card flex flex-col justify-between space-y-5 group hover:border-[#B98945] transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#B98945] font-bold px-2 py-0.5 bg-[#B98945]/10 rounded">
                        PROJECT {project.number}
                      </span>
                      <span className="text-[10px] font-mono text-[#5A738E] uppercase">SYSTEM CASE STUDY</span>
                    </div>

                    <h3 className="font-sans font-bold text-xl text-[#0A2747] group-hover:text-[#B98945] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[#B98945] font-medium">{project.subtitle}</p>

                    <p className="text-xs text-[#5A738E] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-[rgba(10,39,71,0.08)]">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-[10px] font-mono px-2 py-0.5 bg-[#F6F3EC] text-[#0A2747] rounded border border-[rgba(10,39,71,0.08)]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/projects#${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#12375F] group-hover:text-[#B98945] transition-colors"
                    >
                      <span>Explore Architecture & Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Core Engineering Principles Teaser */}
        <section className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
          <div className="wrap">
            <div className="eyebrow block mb-2">ENGINEERING PRINCIPLES</div>
            <h2 className="heading-h2 text-[#0A2747] mb-8">
              Engineering over hype. Reliability over demos.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
                <div className="flex items-center gap-2 text-[#0A2747] font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-[#B98945]" />
                  <span>Deterministic Boundaries</span>
                </div>
                <p className="text-xs text-[#5A738E] leading-relaxed">
                  Calculations, rules, and permissions use explicit software when deterministic code is more dependable than probabilistic model generation.
                </p>
              </div>

              <div className="p-6 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
                <div className="flex items-center gap-2 text-[#0A2747] font-bold text-base">
                  <Cpu className="w-4 h-4 text-[#12375F]" />
                  <span>Human Oversight & Safety Bypass</span>
                </div>
                <p className="text-xs text-[#5A738E] leading-relaxed">
                  Responsible AI design knows when to pause, skip retrieval, or immediately escalate to human professionals in health-adjacent or sensitive domains.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
