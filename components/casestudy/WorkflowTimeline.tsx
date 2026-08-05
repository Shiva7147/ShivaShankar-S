"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function WorkflowTimeline({ project }: { project: Project }) {
  return (
    <section className="py-20 bg-[#F6F3EC] border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow mb-4">Workflow Pipeline</p>
          <h2 className="cs-heading-h2">Step-by-Step System Flow</h2>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-[#B98945]/30 hidden md:block" />

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
                {/* Step number badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 relative z-10 shadow-xs"
                  style={{
                    backgroundColor: "#FFFEFA",
                    border: "2px solid #B98945",
                    color: "#B98945",
                  }}
                >
                  {String(step.step).padStart(2, "0")}
                </div>

                {/* Card Content */}
                <div className="p-5 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] shadow-xs flex-1 mb-2 hover:border-[#B98945]/40 transition-all">
                  <h3 className="font-sans font-semibold text-[#0A2747] text-base mb-1">{step.title}</h3>
                  <p className="text-small text-[#5A738E] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
