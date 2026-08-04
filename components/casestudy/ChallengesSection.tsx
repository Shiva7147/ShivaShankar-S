"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Project } from "@/data/projects";

export function ChallengesSection({ project }: { project: Project }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Engineering Challenges</p>
          <h2 className="cs-heading-h2">Hard Problems Solved</h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {project.challenges.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="cs-surface overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-mono font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${project.accent}15`,
                      color: project.accent,
                      border: `1px solid ${project.accent}25`,
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-[#F0F6FC] font-semibold text-base">{ch.title}</h3>
                </div>
                <ChevronDown
                  className="w-4 h-4 text-[#8B949E] flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4 border-t border-[rgba(255,255,255,0.06)] pt-5">
                      <div>
                        <p className="text-xs font-mono text-red-400/70 uppercase tracking-widest mb-2">Problem</p>
                        <p className="cs-body text-sm">{ch.problem}</p>
                      </div>
                      <div>
                        <p
                          className="text-xs font-mono uppercase tracking-widest mb-2"
                          style={{ color: `${project.accent}90` }}
                        >
                          Solution
                        </p>
                        <p className="cs-body-bright text-sm">{ch.solution}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
