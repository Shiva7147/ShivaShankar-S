"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function ResultsSection({ project }: { project: Project }) {
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
          <p className="cs-eyebrow mb-4">Results &amp; Evaluation</p>
          <h2 className="cs-heading-h2">What Was Achieved</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {project.results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-xl bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] border-t-4 border-t-[#B98945] shadow-xs text-center hover:shadow-md transition-all"
            >
              <div className="font-mono font-bold text-3xl md:text-4xl text-[#B98945] mb-2">{r.value}</div>
              <div className="font-sans font-bold text-[#0A2747] text-sm mb-1">{r.label}</div>
              {r.sublabel && (
                <div className="font-mono text-xs text-[#5A738E]">{r.sublabel}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
