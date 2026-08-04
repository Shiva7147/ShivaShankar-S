"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Zap } from "lucide-react";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export function CaseStudyHero({ project }: Props) {
  return (
    <section className="relative pt-32 pb-20 border-b border-[rgba(10,39,71,0.12)]">
      {/* Subtle brass glow top-left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 0% 0%, rgba(185,137,69,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="cs-wrap relative">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#5A738E] hover:text-[#0A2747] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Metadata Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="eyebrow">PROJECT {project.number}</span>
          <span className="cs-tag">{project.subtitle}</span>
          <span className="cs-tag flex items-center gap-1">
            <Zap className="w-2.5 h-2.5 text-[#B98945]" />
            Production
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="cs-heading-display mb-5 max-w-4xl"
        >
          {project.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="text-lead max-w-2xl mb-10"
        >
          {project.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.38 }}
          className="flex flex-wrap items-center gap-4"
        >
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Github className="w-4 h-4" />
              GitHub Repository
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
