"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function CaseStudyOverview({ project }: Props) {
  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        {/* Section Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="cs-eyebrow mb-4"
          >
            Overview
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="cs-heading-h2 max-w-2xl"
          >
            The Problem &amp; The Solution
          </motion.h2>
        </div>

        {/* Problem / Solution Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="cs-surface p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-sm">⚠️</span>
              <h3 className="text-[#F0F6FC] font-semibold text-base font-mono tracking-wide uppercase text-xs">The Problem</h3>
            </div>
            <p className="cs-body">{project.problem}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cs-surface p-8"
            style={{ borderColor: `${project.accent}25` }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ backgroundColor: `${project.accent}15`, border: `1px solid ${project.accent}30` }}>✦</span>
              <h3 className="text-[#F0F6FC] font-semibold font-mono tracking-wide uppercase text-xs">The Solution</h3>
            </div>
            <p className="cs-body">{project.solution}</p>
          </motion.div>
        </div>

        {/* Overview Paragraphs */}
        <div className="grid md:grid-cols-3 gap-8">
          {project.overview.map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-xs font-mono text-[#484F58] mb-3">
                0{i + 1}
              </div>
              <p className="cs-body-bright text-sm leading-relaxed">{para}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
