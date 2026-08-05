"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

export function ChallengesSection({ project }: { project: Project }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#0A2747] text-[#FFFEFA] border-b border-[rgba(255,255,255,0.1)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow text-[#B98945] mb-4">Engineering Challenges</p>
          <h2 className="cs-heading-h2 text-[#FFFEFA]">Hard Problems Solved</h2>
        </motion.div>

        <div className="space-y-4 max-w-3xl">
          {project.challenges.map((ch, i) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.07 }}
              className="rounded-xl bg-[#12375F] border border-[rgba(255,255,255,0.16)] overflow-hidden shadow-md"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold w-7 h-7 rounded bg-[#B98945]/20 text-[#B98945] border border-[#B98945]/40 flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-sans font-semibold text-[#FFFEFA] text-base">{ch.title}</h3>
                </div>
                <ChevronDown
                  className="w-4 h-4 text-[#B98945] flex-shrink-0 transition-transform duration-300"
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
                    <div className="px-6 pb-6 space-y-4 border-t border-[rgba(255,255,255,0.1)] pt-5">
                      <div>
                        <p className="font-mono text-[10px] text-[#B98945] uppercase tracking-widest mb-1.5 font-bold">The Problem</p>
                        <p className="text-xs font-sans text-[#CBD5E1] leading-relaxed">{ch.problem}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#0A2747] border-l-4 border-l-[#B98945]">
                        <p className="font-mono text-[10px] text-[#B98945] uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#B98945]" />
                          Engineering Solution
                        </p>
                        <p className="text-xs font-sans text-[#F8FAFC] leading-relaxed font-medium">{ch.solution}</p>
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
