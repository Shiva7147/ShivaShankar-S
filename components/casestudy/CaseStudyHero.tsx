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
    <section
      className="relative min-h-[85vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden"
      style={{ backgroundColor: "#030712" }}
    >
      {/* Gradient Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${project.accent}18 0%, transparent 70%)`,
        }}
      />
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="cs-wrap relative z-10">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#8B949E] hover:text-[#F0F6FC] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Metadata Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span
            className="cs-tag"
            style={{ color: project.accent, borderColor: `${project.accent}30`, backgroundColor: `${project.accent}10` }}
          >
            PROJECT {project.number}
          </span>
          <span className="cs-tag">{project.subtitle}</span>
          <span className="cs-tag flex items-center gap-1">
            <Zap className="w-2.5 h-2.5 text-green-400" />
            Production
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="cs-heading-display mb-4 max-w-4xl"
          style={{
            background: `linear-gradient(135deg, #F0F6FC 0%, ${project.accent} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {project.title}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#8B949E] text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          {project.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="cs-btn-primary">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cs-btn-ghost">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          <span className="text-sm font-mono text-[#484F58]">
            Built by <span className="text-[#8B949E]">Shiva Shankar S</span>
          </span>
        </motion.div>
      </div>

      {/* Bottom border fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent" />
    </section>
  );
}
