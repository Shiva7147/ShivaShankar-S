"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ReceptionistArchSvg } from "@/components/svg/casestudy/ReceptionistArchSvg";
import { AthleteIqArchSvg } from "@/components/svg/casestudy/AthleteIqArchSvg";
import { LeadEngineArchSvg } from "@/components/svg/casestudy/LeadEngineArchSvg";
import { ReframeArchSvg } from "@/components/svg/casestudy/ReframeArchSvg";
import { SmoothOperatorArchSvg } from "@/components/svg/casestudy/SmoothOperatorArchSvg";

const archMap: Record<string, React.ReactNode> = {
  "alpha-receptionist": <ReceptionistArchSvg />,
  athleteiq: <AthleteIqArchSvg />,
  "alpha-lead-engine": <LeadEngineArchSvg />,
  reframe: <ReframeArchSvg />,
  "smooth-operator": <SmoothOperatorArchSvg />,
};

export function CaseStudyArchitecture({ project }: { project: Project }) {
  const Diagram = archMap[project.slug];

  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Architecture</p>
          <h2 className="cs-heading-h2">System Design</h2>
        </motion.div>

        {Diagram ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cs-surface p-6 md:p-10"
          >
            {Diagram}
          </motion.div>
        ) : (
          <div className="cs-surface p-12 text-center text-[#484F58] font-mono text-sm">
            Architecture diagram coming soon
          </div>
        )}

        {/* Engineering Decisions */}
        {project.engineeringDecisions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 space-y-4"
          >
            <p className="cs-eyebrow mb-5">Key Engineering Decisions</p>
            {project.engineeringDecisions.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 cs-surface-2 p-5"
              >
                <span
                  className="text-xs font-mono font-bold mt-0.5 flex-shrink-0"
                  style={{ color: project.accent }}
                >
                  ✦
                </span>
                <p className="text-[#C9D1D9] text-sm leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
