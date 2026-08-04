"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function WorkflowTimeline({ project }: { project: Project }) {
  return (
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow mb-4">Workflow</p>
          <h2 className="cs-heading-h2">How It Works</h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-2 bottom-2 w-px bg-[rgba(10,39,71,0.10)] hidden md:block" />

          <div className="space-y-4">
            {project.workflow.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-6 items-start"
              >
                {/* Step number */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 relative z-10"
                  style={{
                    backgroundColor: "var(--brass-dim)",
                    border: "1px solid rgba(185,137,69,0.25)",
                    color: "var(--brass)",
                  }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="cs-surface p-5 flex-1 mb-3">
                  <h3 className="font-sans font-semibold text-[#0A2747] text-sm mb-1">{step.title}</h3>
                  <p className="text-small text-[#5A738E]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
