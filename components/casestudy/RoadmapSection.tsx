"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function RoadmapSection({ project }: { project: Project }) {
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
          <p className="cs-eyebrow mb-4">Future Roadmap</p>
          <h2 className="cs-heading-h2">What&apos;s Next</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {project.roadmap.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium cs-surface cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B98945] flex-shrink-0" />
              <span className="text-[#12375F] font-sans text-sm">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="font-mono text-xs text-[#5A738E] mt-8"
        >
          {project.roadmap.length} planned features · Active development
        </motion.p>
      </div>
    </section>
  );
}
