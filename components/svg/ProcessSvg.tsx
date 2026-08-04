"use client";

import React, { useState } from "react";

const processSteps = [
  { num: "01", title: "Research", desc: "Understand domain constraints, user friction, failure modes, and boundaries." },
  { num: "02", title: "Define Behavior", desc: "Translate vague expectations into explicit inputs, outputs, thresholds, and escalation paths." },
  { num: "03", title: "Architecture", desc: "Separate probabilistic model reasoning, deterministic math, vector stores, and APIs." },
  { num: "04", title: "Build System", desc: "Develop an end-to-end working workflow instead of isolated prompts." },
  { num: "05", title: "Evaluate", desc: "Test against ground-truth test cases using LLM-as-judge and rule-based assertion harnesses." },
  { num: "06", title: "Deploy", desc: "Add authentication, observability tracing, rate limits, and safety bypass rules." },
  { num: "07", title: "Iterate", desc: "Monitor failure logs, production usage, and continually refine knowledge base & prompts." }
];

export function ProcessSvg() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full my-8">
      {/* Desktop Horizontal Process Flow */}
      <div className="hidden lg:grid grid-cols-7 gap-3">
        {processSteps.map((step, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <div
              key={step.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative p-4 rounded-md border transition-all duration-300 ${
                isHovered
                  ? "bg-[#FFFEFA] border-[#B98945] shadow-lg -translate-y-1"
                  : "bg-[#FFFEFA]/80 border-[rgba(10,39,71,0.12)] hover:border-[#12375F]"
              }`}
            >
              <div className="font-mono text-xs text-[#B98945] font-semibold mb-1">{step.num}</div>
              <h4 className="font-sans font-bold text-sm text-[#0A2747] mb-2">{step.title}</h4>
              <p className="text-xs text-[#5A738E] leading-relaxed">{step.desc}</p>
              {idx < 6 && (
                <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#12375F] opacity-40 font-mono text-xs">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile/Tablet Vertical Process Stack */}
      <div className="lg:hidden space-y-3">
        {processSteps.map((step) => (
          <div key={step.num} className="p-4 rounded-md border border-[rgba(10,39,71,0.12)] bg-[#FFFEFA] flex gap-4 items-start">
            <span className="font-mono text-sm text-[#B98945] font-bold px-2.5 py-1 bg-[#B98945]/10 rounded">
              {step.num}
            </span>
            <div>
              <h4 className="font-sans font-bold text-sm text-[#0A2747]">{step.title}</h4>
              <p className="text-xs text-[#5A738E] mt-1 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SVG Loop Connector */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-[#5A738E]">
        <span className="w-8 h-px bg-[#B98945]" />
        <span>RECURSIVE FEEDBACK LOOP: STEP 07 (ITERATE) → STEP 01 (RESEARCH)</span>
        <span className="w-8 h-px bg-[#B98945]" />
      </div>
    </div>
  );
}
