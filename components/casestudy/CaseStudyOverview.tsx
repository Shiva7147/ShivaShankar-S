"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function CaseStudyOverview({ project }: Props) {
  return (
    <section className="py-20 bg-[#0A2747] text-[#FFFEFA] border-b border-[rgba(255,255,255,0.1)]">
      <div className="cs-wrap">
        {/* Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="cs-eyebrow mb-4 text-[#B98945]"
          >
            Overview &amp; Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="cs-heading-h2 max-w-2xl text-[#FFFEFA]"
          >
            The Problem &amp; The System Solution
          </motion.h2>
        </div>

        {/* Problem / Solution cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="p-7 rounded-xl bg-[#12375F] border border-[rgba(255,255,255,0.16)] shadow-md space-y-3"
          >
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-5 h-5 text-[#B98945]" />
              <h3 className="font-mono text-xs font-bold text-[#B98945] uppercase tracking-widest">The Problem</h3>
            </div>
            <p className="text-sm font-sans text-[#F8FAFC] leading-relaxed font-normal">{project.problem}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="p-7 rounded-xl bg-[#12375F] border-l-4 border-l-[#B98945] border border-[rgba(255,255,255,0.16)] shadow-md space-y-3"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#B98945]" />
              <h3 className="font-mono text-xs font-bold text-[#B98945] uppercase tracking-widest">The System Solution</h3>
            </div>
            <p className="text-sm font-sans text-[#F8FAFC] leading-relaxed font-normal">{project.solution}</p>
          </motion.div>
        </div>

        {/* Overview prose — 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-[rgba(255,255,255,0.1)]">
          {project.overview.map((para, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="font-mono text-xs text-[#B98945] font-bold mb-3">0{i + 1}</div>
              <p className="text-sm font-sans text-[#CBD5E1] leading-relaxed">{para}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
