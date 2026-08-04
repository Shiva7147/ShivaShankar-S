"use client";

import React from "react";
import { notesData } from "@/data/notes";
import { Clock } from "lucide-react";

export function NotesSection() {
  return (
    <section id="notes" className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">ENGINEERING NOTES</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-4">
          Writing about what I build, test, and learn.
        </h2>

        <p className="text-lead max-w-3xl mb-12">
          Technical essays, system post-mortems, and architectural reflections from building production-grade RAG pipelines, voice AI, and LangGraph agents.
        </p>

        {/* 6 Article Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notesData.map((note) => (
            <div
              key={note.id}
              className="editorial-card flex flex-col justify-between space-y-4 group hover:border-[#B98945] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[#B98945] font-semibold px-2 py-0.5 bg-[#B98945]/10 rounded">
                    {note.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#5A738E] border border-[rgba(10,39,71,0.12)] px-2 py-0.5 rounded">
                    {note.status}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-[#0A2747] group-hover:text-[#B98945] transition-colors leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs text-[#5A738E] leading-relaxed">
                  {note.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(10,39,71,0.08)] flex items-center justify-between text-xs font-mono text-[#5A738E]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#B98945]" />
                  {note.readTime}
                </span>
                <span className="text-[#12375F] group-hover:translate-x-1 transition-transform">
                  Read Note →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
