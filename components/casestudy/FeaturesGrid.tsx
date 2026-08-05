"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

export function FeaturesGrid({ project }: { project: Project }) {
  return (
    <section className="py-20 bg-[#FFFEFA] border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow mb-4">Features &amp; Capabilities</p>
          <h2 className="cs-heading-h2">What It Does</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] shadow-xs hover:border-[#B98945]/40 hover:shadow-md transition-all cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-[#FFFEFA] border border-[#B98945]/30 flex items-center justify-center text-xl mb-5 shadow-xs">
                {f.icon}
              </div>
              <h3 className="font-sans font-bold text-[#0A2747] text-base mb-2">{f.title}</h3>
              <p className="text-small text-[#5A738E] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
