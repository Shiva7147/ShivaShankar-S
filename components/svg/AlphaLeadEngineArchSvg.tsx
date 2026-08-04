"use client";

import React from "react";
import { Workflow, UserCheck, Filter } from "lucide-react";

export function AlphaLeadEngineArchSvg() {
  const steps = [
    { num: "01", name: "Apify Lead Discovery", desc: "Lead Store (Supabase)" },
    { num: "02", name: "AI Qualification", desc: "ICP Score Check ✓", highlight: true },
    { num: "03", name: "Website Analysis", desc: "Scrape & Vectorize" },
    { num: "04", name: "Email Generation", desc: "Personalized Copy" },
    { num: "05", name: "Human Review", desc: "Review-Before-Send Guardrail", critical: true },
    { num: "06", name: "Multi-Step Follow-Up", desc: "Day 0 → Day 3 → Day 7 Sequence" }
  ];

  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            OUTBOUND SALES AUTOMATION
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Alpha Lead Pipeline & 6 Modular AI Engines
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#0A2747] bg-[#F6F3EC] px-2.5 py-1 rounded border border-[rgba(10,39,71,0.12)]">
          <Workflow className="w-3.5 h-3.5 text-[#B98945]" />
          <span>n8n Orchestration Layer</span>
        </div>
      </div>

      {/* 6 Step Modular Pipeline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className={`p-3.5 rounded border transition-all space-y-1 ${
              step.critical
                ? "bg-[#F6F3EC] border-2 border-[#B98945] shadow-xs"
                : step.highlight
                ? "bg-[#FFFEFA] border-[#B98945]/40"
                : "bg-[#FFFEFA] border-[rgba(10,39,71,0.12)]"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#B98945] font-bold">MODULE {step.num}</span>
              {step.critical && <UserCheck className="w-4 h-4 text-[#B98945]" />}
            </div>
            <div className="font-sans font-bold text-xs md:text-sm text-[#0A2747]">{step.name}</div>
            <div className={`text-[11px] font-mono ${step.critical ? "text-[#B98945] font-bold" : "text-[#5A738E]"}`}>
              {step.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Reply Classification & Analytics Banner */}
      <div className="p-4 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(10,39,71,0.08)] pb-2">
          <div className="flex items-center gap-1.5 text-[#0A2747]">
            <Filter className="w-4 h-4 text-[#B98945]" />
            <span className="font-mono text-xs font-bold uppercase">7. Reply Intent Classification AI</span>
          </div>
          <span className="text-[11px] font-mono text-[#5A738E]">
            Categorizes Interested / Not Now / Unclear
          </span>
        </div>

        <p className="text-xs text-[#12375F] leading-relaxed">
          &ldquo;Each AI module has a single responsibility—making the system easier to test, evaluate, replace, and improve independently.&rdquo;
        </p>
      </div>
    </div>
  );
}
