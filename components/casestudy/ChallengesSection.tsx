"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Project } from "@/data/projects";

export function ChallengesSection({ project }: { project: Project }) {
  const [open, setOpen] = useState<number | null>(0);

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
          <p className="cs-eyebrow mb-4">Engineering Challenges</p>
          <h2 className="cs-heading-h2">Hard Problems Solved</h2>
        </motion.div>

        <div className="space-y-3 max-w-3xl">
          {project.challenges.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.07 }}
              className="cs-surface overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="font-mono text-xs font-bold w-7 h-7 rounded flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "var(--brass-dim)",
                      color: "var(--brass)",
                      border: "1px solid rgba(185,137,69,0.2)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-sans font-semibold text-[#0A2747] text-base">{ch.title}</h3>
                </div>
                <ChevronDown
                  className="w-4 h-4 text-[#5A738E] flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4 border-t border-[rgba(10,39,71,0.08)] pt-5">
                      <div>
                        <p className="font-mono text-[10px] text-[#B98945] uppercase tracking-widest mb-2 font-bold">Problem</p>
                        <p className="text-small text-[#5A738E] leading-relaxed">{ch.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-[#12375F] uppercase tracking-widest mb-2 font-bold">Solution</p>
                        <p className="text-small text-[#12375F] leading-relaxed">{ch.solution}</p>
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
