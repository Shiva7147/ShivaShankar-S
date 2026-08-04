"use client";

import { motion } from "framer-motion";
import { Github, BookOpen, Server, Layers, Code2, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

const links = [
  { label: "Repository", icon: Github, desc: "Browse source code" },
  { label: "Documentation", icon: BookOpen, desc: "Setup and usage guide" },
  { label: "Architecture", icon: Layers, desc: "System design overview" },
  { label: "Deployment", icon: Server, desc: "Cloud infrastructure" },
  { label: "Tech Stack", icon: Code2, desc: "Tools and dependencies" },
];

export function GitHubSection({ project }: { project: Project }) {
  if (!project.githubUrl) return null;

  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Source Code</p>
          <h2 className="cs-heading-h2">GitHub Repository</h2>
        </motion.div>

        {/* Repo Card */}
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3 }}
          className="block cs-surface p-8 mb-8 group"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Github className="w-5 h-5 text-[#F0F6FC]" />
                <span className="text-[#F0F6FC] font-semibold font-mono">
                  Shiva7147 / {project.slug}
                </span>
              </div>
              <p className="text-[#8B949E] text-sm leading-relaxed max-w-xl">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="cs-tag text-xs">{t}</span>
                ))}
              </div>
            </div>
            <ExternalLink
              className="w-5 h-5 text-[#8B949E] flex-shrink-0 group-hover:text-[#F0F6FC] transition-colors mt-1"
            />
          </div>
        </motion.a>

        {/* Quick Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                whileHover={{ y: -2 }}
                className="cs-surface-2 p-5 group text-center"
              >
                <Icon
                  className="w-5 h-5 mx-auto mb-3 transition-colors"
                  style={{ color: `${project.accent}80` }}
                />
                <div className="text-[#F0F6FC] text-sm font-semibold mb-1">{link.label}</div>
                <div className="text-[#484F58] text-xs">{link.desc}</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
