"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

export function CaseStudyOverview({ project }: Props) {
  return (
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="cs-eyebrow mb-4"
          >
            Overview
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="cs-heading-h2 max-w-2xl"
          >
            The Problem &amp; The Solution
          </motion.h2>
        </div>

        {/* Problem / Solution cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="cs-surface p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-4 h-4 text-[#B98945]" />
              <h3 className="font-mono text-xs font-bold text-[#5A738E] uppercase tracking-widest">The Problem</h3>
            </div>
            <p className="text-body text-[#12375F] leading-relaxed text-sm">{project.problem}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="cs-surface p-7 border-l-2 border-[#B98945]"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-4 h-4 text-[#12375F]" />
              <h3 className="font-mono text-xs font-bold text-[#5A738E] uppercase tracking-widest">The Solution</h3>
            </div>
            <p className="text-body text-[#12375F] leading-relaxed text-sm">{project.solution}</p>
          </motion.div>
        </div>

        {/* Overview prose — 3 columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {project.overview.map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="font-mono text-xs text-[#B98945] font-bold mb-3">0{i + 1}</div>
              <p className="text-small text-[#12375F] leading-relaxed">{para}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Props {
  project: Project;
}
