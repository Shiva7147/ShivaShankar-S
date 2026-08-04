"use client";

import React from "react";
import { ArrowRight, ArrowDown, Cpu, Sparkles, Database } from "lucide-react";

export function HeroSystemSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs text-[#0A2747]">
      <div className="flex items-center justify-between border-b border-[rgba(10,39,71,0.08)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#B98945]" />
          <span className="font-mono text-[11px] font-semibold text-[#0A2747] tracking-wider uppercase">
            AI SYSTEM FLOW // PROBABILISTIC + DETERMINISTIC
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#B98945] font-bold px-2 py-0.5 bg-[#B98945]/10 rounded">
          LIVE WORKFLOW
        </span>
      </div>

      {/* Responsive Diagram Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        {/* Node 1: User Input */}
        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1 text-center md:text-left">
          <div className="font-mono text-[10px] text-[#5A738E] uppercase font-semibold">STEP 01</div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">User Input</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Prompt / Voice / Query</div>
        </div>

        {/* Connector 1 */}
        <div className="hidden md:flex justify-center text-[#B98945]">
          <ArrowRight className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex md:hidden justify-center text-[#B98945] py-1">
          <ArrowDown className="w-4 h-4 animate-pulse" />
        </div>

        {/* Node 2: AI Agent Core */}
        <div className="p-3.5 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-between gap-1">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">LANGGRAPH REACT</span>
            <Sparkles className="w-3.5 h-3.5 text-[#B98945]" />
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">AI Agent Core</div>
          <div className="text-[11px] font-mono text-[#5A738E]">State & Guardrails</div>
        </div>

        {/* Connector 2 */}
        <div className="hidden md:flex justify-center text-[#B98945]">
          <ArrowRight className="w-5 h-5 animate-pulse" />
        </div>
        <div className="flex md:hidden justify-center text-[#B98945] py-1">
          <ArrowDown className="w-4 h-4 animate-pulse" />
        </div>

        {/* Node 3: Multi-Tool Execution & Output */}
        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-between gap-1">
            <span className="font-mono text-[10px] text-[#12375F] font-semibold">ROUTED EXECUTION</span>
            <Database className="w-3.5 h-3.5 text-[#12375F]" />
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="px-2 py-0.5 rounded bg-[#FFFEFA] text-[#0A2747] font-medium border border-[rgba(10,39,71,0.08)]">
              LLM Reasoning (Gemini/Claude)
            </div>
            <div className="px-2 py-0.5 rounded bg-[#B98945]/10 text-[#0A2747] font-semibold border border-[#B98945]/20">
              Deterministic Tools (RAG/Math)
            </div>
          </div>
        </div>
      </div>

      {/* Grounded Output Bar */}
      <div className="mt-4 pt-3 border-t border-[rgba(10,39,71,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#5A738E]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#B98945] animate-ping inline-block" />
          <span>Output: Grounded & Evaluated Response</span>
        </div>
        <span className="text-[#12375F] font-medium">Bypasses LLM on medical/safety emergency</span>
      </div>
    </div>
  );
}
