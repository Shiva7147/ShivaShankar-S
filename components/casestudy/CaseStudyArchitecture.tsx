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
    <section className="py-16 md:py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <p className="cs-eyebrow mb-3">Architecture</p>
          <h2 className="cs-heading-h2">System Design</h2>
        </motion.div>

        {/* Diagram */}
        {Diagram ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10"
          >
            {Diagram}
          </motion.div>
        ) : (
          <div className="cs-surface p-10 text-center text-[#5A738E] font-mono text-sm mb-10">
            Architecture diagram coming soon
          </div>
        )}

        {/* Engineering Decisions */}
        {project.engineeringDecisions.length > 0 && (
          <div className="space-y-3">
            <p className="cs-eyebrow mb-4">Key Engineering Decisions</p>
            {project.engineeringDecisions.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.08 }}
                className="flex items-start gap-3.5 cs-surface p-4.5"
              >
                <span className="text-[#B98945] font-bold text-base mt-0.5 flex-shrink-0">✦</span>
                <p className="text-small text-[#12375F] leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
