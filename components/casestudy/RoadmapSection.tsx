"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function RoadmapSection({ project }: { project: Project }) {
  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Future Roadmap</p>
          <h2 className="cs-heading-h2">What&apos;s Next</h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {project.roadmap.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium cursor-default"
              style={{
                backgroundColor: `${project.accent}10`,
                border: `1px solid ${project.accent}25`,
                color: project.accent,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.accent }}
              />
              {item}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#484F58] text-sm font-mono mt-8"
        >
          {project.roadmap.length} planned features · Active development
        </motion.p>
      </div>
    </section>
  );
}
