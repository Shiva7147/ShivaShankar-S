"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function WorkflowTimeline({ project }: { project: Project }) {
  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Workflow</p>
          <h2 className="cs-heading-h2">How It Works</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-[22px] top-6 bottom-6 w-px hidden md:block"
            style={{
              background: `linear-gradient(to bottom, transparent, ${project.accent}40, ${project.accent}40, transparent)`,
            }}
          />

          <div className="space-y-3 md:space-y-0">
            {project.workflow.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-6 md:gap-8 items-start group"
              >
                {/* Step Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <motion.div
                    initial={{ scale: 0.6 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 + 0.1 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-mono font-bold z-10 relative"
                    style={{
                      backgroundColor: `${project.accent}15`,
                      border: `1.5px solid ${project.accent}40`,
                      color: project.accent,
                    }}
                  >
                    {String(step.step).padStart(2, "0")}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="cs-surface p-5 md:p-6 flex-1 mb-4 md:mb-5">
                  <h3 className="text-[#F0F6FC] font-semibold text-sm mb-1.5">{step.title}</h3>
                  <p className="text-[#8B949E] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
