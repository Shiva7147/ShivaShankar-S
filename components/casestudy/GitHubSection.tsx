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
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow mb-4">Source Code</p>
          <h2 className="cs-heading-h2">GitHub Repository</h2>
        </motion.div>

        {/* Repo Card */}
        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          whileHover={{ y: -2 }}
          className="block cs-surface p-7 mb-6 group"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Github className="w-5 h-5 text-[#0A2747]" />
                <span className="font-mono font-semibold text-[#0A2747] text-sm">
                  Shiva7147 / {project.slug}
                </span>
              </div>
              <p className="text-small text-[#5A738E] max-w-xl leading-relaxed">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="cs-tag">{t}</span>
                ))}
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#5A738E] flex-shrink-0 group-hover:text-[#B98945] transition-colors mt-1" />
          </div>
        </motion.a>

        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                whileHover={{ y: -2 }}
                className="cs-surface p-5 text-center group"
              >
                <Icon className="w-5 h-5 mx-auto mb-3 text-[#B98945]" />
                <div className="font-sans font-semibold text-[#0A2747] text-sm mb-1">{link.label}</div>
                <div className="font-mono text-xs text-[#5A738E]">{link.desc}</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
