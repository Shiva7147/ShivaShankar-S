"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function FeaturesGrid({ project }: { project: Project }) {
  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Features</p>
          <h2 className="cs-heading-h2">What It Does</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="cs-surface p-7 group cursor-default"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  backgroundColor: `${project.accent}12`,
                  border: `1px solid ${project.accent}25`,
                }}
              >
                {f.icon}
              </div>
              <h3 className="text-[#F0F6FC] font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-[#8B949E] text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
