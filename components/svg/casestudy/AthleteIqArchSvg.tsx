"use client";

import React from "react";
import { ShieldAlert, Cpu, Database, Calculator, Activity, ArrowRight, ArrowDown } from "lucide-react";

export function AthleteIqArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 sm:p-6 shadow-xs space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#059669] font-bold tracking-wider uppercase block">
            LANGGRAPH REACT AGENT ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base md:text-lg text-[#0A2747] mt-0.5">
            AthleteIQ Hub-and-Spoke Architecture
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#0A2747] bg-[#F6F3EC] px-2.5 py-1 rounded border border-[rgba(10,39,71,0.12)] self-start sm:self-auto font-semibold shrink-0">
          Deterministic + RAG
        </span>
      </div>

      {/* Desktop / Tablet Layout Container */}
      <div className="hidden lg:block w-full overflow-x-auto pb-2">
        <div className="min-w-[760px] flex items-center justify-between gap-4">
          {/* Step 1: User Query */}
          <div className="flex-1 p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5 min-w-[200px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#5A738E] font-bold">1. USER QUERY</span>
              <span className="font-mono text-[9px] text-[#059669] bg-[#059669]/10 px-1.5 py-0.5 rounded font-bold">INPUT</span>
            </div>
            <div className="font-sans font-bold text-sm text-[#0A2747] leading-tight">Coach / Athlete Query</div>
            <div className="text-xs font-mono text-[#5A738E] leading-tight">Sports Science Telemetry</div>
          </div>

          {/* Arrow 1 */}
          <div className="flex items-center justify-center text-[#059669] shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 2: LangGraph Core */}
          <div className="flex-[1.2] p-4 rounded-xl bg-[#FFFEFA] border-2 border-[#059669] shadow-sm space-y-2 min-w-[230px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#059669] font-bold">LANGGRAPH CORE</span>
              <Cpu className="w-4 h-4 text-[#059669] shrink-0" />
            </div>
            <div className="font-sans font-bold text-sm text-[#0A2747] leading-tight">ReAct Agent &amp; Safety Router</div>
            <div className="text-xs text-[#5A738E] leading-relaxed">Intent classification, memory state &amp; tool dispatch</div>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center text-[#059669] shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 3: Routed Tools */}
          <div className="flex-[1.3] space-y-2 min-w-[240px]">
            <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
              <Database className="w-4 h-4 text-[#059669] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">ChromaDB RAG Vector Store</div>
                <div className="text-[11px] font-mono text-[#5A738E] leading-tight truncate">56 Knowledge Base Chunks</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-3">
              <Calculator className="w-4 h-4 text-[#B98945] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">ACWR Python Math Engine</div>
                <div className="text-[11px] font-mono text-[#B98945] font-bold leading-tight truncate">Deterministic Load Tool</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
              <Activity className="w-4 h-4 text-[#12375F] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">Metric Telemetry Logger</div>
                <div className="text-[11px] font-mono text-[#5A738E] leading-tight truncate">Timestamped Audit Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Vertical Stacked Layout */}
      <div className="block lg:hidden space-y-3">
        <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#5A738E] font-bold">1. USER QUERY</span>
            <span className="font-mono text-[9px] text-[#059669] bg-[#059669]/10 px-1.5 py-0.5 rounded font-bold">INPUT</span>
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Coach / Athlete Query</div>
          <div className="text-xs font-mono text-[#5A738E]">Sports Science Input Telemetry</div>
        </div>

        <div className="flex justify-center text-[#059669] py-0.5">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>

        <div className="p-4 rounded-xl bg-[#FFFEFA] border-2 border-[#059669] shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#059669] font-bold">LANGGRAPH CORE</span>
            <Cpu className="w-4 h-4 text-[#059669] shrink-0" />
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">ReAct Agent &amp; Safety Router</div>
          <div className="text-xs text-[#5A738E]">Evaluates intent, safety boundaries, &amp; dispatches tools</div>
        </div>

        <div className="flex justify-center text-[#059669] py-0.5">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <div className="p-3.5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
            <Database className="w-4 h-4 text-[#059669] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">ChromaDB Vector Store (RAG Tool)</div>
              <div className="text-[11px] font-mono text-[#5A738E]">56 Knowledge Base Chunks Retrieval</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-3">
            <Calculator className="w-4 h-4 text-[#B98945] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">ACWR Python Math Engine</div>
              <div className="text-[11px] font-mono text-[#B98945] font-bold">Deterministic Calculation Tool</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
            <Activity className="w-4 h-4 text-[#12375F] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Metric Telemetry Logger</div>
              <div className="text-[11px] font-mono text-[#5A738E]">Timestamped Database Record</div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Escalation Box */}
      <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[#B98945]/40 space-y-2">
        <div className="flex items-center gap-2 text-[#B98945]">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            RESPONSIBLE AI // EMERGENCY ESCALATION ROUTE
          </span>
        </div>
        <p className="text-xs text-[#0A2747] leading-relaxed">
          Emergency language triggers an immediate hard bypass of vector retrieval to prevent hallucinated medical guidance.
        </p>
      </div>
    </div>
  );
}
