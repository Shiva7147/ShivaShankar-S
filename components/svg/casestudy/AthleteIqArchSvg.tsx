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
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            AthleteIQ Hub-and-Spoke System
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#0A2747] bg-[#F6F3EC] px-2.5 py-1 rounded border border-[rgba(10,39,71,0.12)] self-start sm:self-auto font-semibold">
          Deterministic + RAG
        </span>
      </div>

      {/* Desktop / Tablet Scrollable Flow Container */}
      <div className="hidden lg:block w-full overflow-x-auto pb-2">
        <div className="min-w-[650px] grid grid-cols-12 gap-3.5 items-center">
          {/* Step 1: User Query */}
          <div className="col-span-3 p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
            <span className="font-mono text-[10px] text-[#5A738E] font-semibold block">1. USER QUERY</span>
            <div className="font-sans font-bold text-sm text-[#0A2747]">Coach / Athlete</div>
            <div className="text-[11px] font-mono text-[#5A738E]">Sports Science Input</div>
          </div>

          <div className="col-span-1 flex justify-center text-[#059669]">
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Step 2: LangGraph Core */}
          <div className="col-span-4 p-4 rounded-lg bg-[#FFFEFA] border-2 border-[#059669] shadow-xs space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#059669] font-bold">LANGGRAPH CORE</span>
              <Cpu className="w-4 h-4 text-[#059669] shrink-0" />
            </div>
            <div className="font-sans font-bold text-sm text-[#0A2747]">ReAct Agent Core</div>
            <div className="text-[11px] text-[#5A738E]">Intent routing &amp; safety evaluation</div>
          </div>

          <div className="col-span-1 flex justify-center text-[#059669]">
            <ArrowRight className="w-4 h-4" />
          </div>

          {/* Step 3: Tools */}
          <div className="col-span-3 space-y-2">
            <div className="p-2.5 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2 min-w-0">
              <Database className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] truncate">ChromaDB RAG</div>
                <div className="text-[10px] font-mono text-[#5A738E] truncate">56 Knowledge Entries</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-2 min-w-0">
              <Calculator className="w-3.5 h-3.5 text-[#B98945] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] truncate">ACWR Python Math</div>
                <div className="text-[10px] font-mono text-[#B98945] font-bold truncate">Deterministic Tool</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2 min-w-0">
              <Activity className="w-3.5 h-3.5 text-[#12375F] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] truncate">Metric Logger</div>
                <div className="text-[10px] font-mono text-[#5A738E] truncate">Timestamped Record</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Vertical Flow Container */}
      <div className="block lg:hidden space-y-3">
        {/* Step 1 */}
        <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold block">1. USER QUERY</span>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Coach / Athlete Query</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Sports Science Input Telemetry</div>
        </div>

        <div className="flex justify-center text-[#059669] py-0.5">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Step 2 */}
        <div className="p-4 rounded-lg bg-[#FFFEFA] border-2 border-[#059669] shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#059669] font-bold">LANGGRAPH CORE</span>
            <Cpu className="w-4 h-4 text-[#059669] shrink-0" />
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">ReAct Agent &amp; Safety Router</div>
          <div className="text-xs text-[#5A738E]">Evaluates intent, safety boundaries, &amp; selects tools</div>
        </div>

        <div className="flex justify-center text-[#059669] py-0.5">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Step 3 */}
        <div className="space-y-2">
          <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2.5">
            <Database className="w-4 h-4 text-[#059669] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">RAG Tool (ChromaDB Vector Store)</div>
              <div className="text-[11px] font-mono text-[#5A738E]">56-Entry Knowledge Base Retrieval</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-2.5">
            <Calculator className="w-4 h-4 text-[#B98945] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">ACWR Python Math Engine</div>
              <div className="text-[11px] font-mono text-[#B98945] font-bold">Deterministic Calculation Tool</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-[#12375F] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Metric Telemetry Logger</div>
              <div className="text-[11px] font-mono text-[#5A738E]">Timestamped Database Record</div>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Escalation Box */}
      <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[#B98945]/40 space-y-2">
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
