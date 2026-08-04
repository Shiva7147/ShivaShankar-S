"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function ResultsSection({ project }: { project: Project }) {
  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="cs-eyebrow mb-4">Results</p>
          <h2 className="cs-heading-h2">What Was Achieved</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cs-surface p-8 text-center group"
              style={{ borderColor: `${project.accent}18` }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.15, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl font-bold mb-2 font-mono"
                style={{ color: project.accent }}
              >
                {r.value}
              </motion.div>
              <div className="text-[#F0F6FC] font-semibold text-sm mb-1">{r.label}</div>
              {r.sublabel && (
                <div className="text-[#484F58] text-xs">{r.sublabel}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
