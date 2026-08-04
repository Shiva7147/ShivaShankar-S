"use client";

import React from "react";
import { ShieldAlert, Cpu, Database, Calculator, Activity, ArrowRight, ArrowDown } from "lucide-react";

export function AthleteIqArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            AGENT ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            AthleteIQ LangGraph ReAct Workflow
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#12375F] bg-[#F6F3EC] px-2.5 py-1 rounded border border-[rgba(10,39,71,0.08)] self-start sm:self-auto">
          Multi-Tool Orchestration
        </span>
      </div>

      {/* Main Flow: Input -> Agent -> Tools */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        {/* Step 1: Coach Query */}
        <div className="md:col-span-3 p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">1. USER QUERY</span>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Coach / Athlete</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Sports Science Input</div>
        </div>

        <div className="hidden md:flex md:col-span-1 justify-center text-[#B98945]">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className="flex md:hidden justify-center text-[#B98945] py-1">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Step 2: LangGraph ReAct Core */}
        <div className="md:col-span-4 p-4 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">LANGGRAPH CORE</span>
            <Cpu className="w-4 h-4 text-[#B98945]" />
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">ReAct Agent & Safety Router</div>
          <div className="text-[11px] text-[#5A738E]">Evaluates intent, safety boundaries, & selects tools</div>
        </div>

        <div className="hidden md:flex md:col-span-1 justify-center text-[#B98945]">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className="flex md:hidden justify-center text-[#B98945] py-1">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Step 3: 3 Tools Stack */}
        <div className="md:col-span-3 space-y-2">
          {/* Tool 1 */}
          <div className="p-2.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-[#12375F] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">RAG Tool (ChromaDB)</div>
              <div className="text-[10px] font-mono text-[#5A738E]">56-Entry Knowledge Base</div>
            </div>
          </div>

          {/* Tool 2 */}
          <div className="p-2.5 rounded bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5 text-[#B98945] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">ACWR Python Math</div>
              <div className="text-[10px] font-mono text-[#B98945] font-bold">Deterministic Tool</div>
            </div>
          </div>

          {/* Tool 3 */}
          <div className="p-2.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#12375F] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Metric Logger</div>
              <div className="text-[10px] font-mono text-[#5A738E]">Timestamped DB Record</div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsible AI Emergency Bypass Section */}
      <div className="p-4 rounded bg-[#F6F3EC] border border-[#B98945]/40 space-y-2">
        <div className="flex items-center gap-2 text-[#B98945]">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            RESPONSIBLE AI // EMERGENCY SAFETY ESCALATION ROUTE
          </span>
        </div>

        <p className="text-xs text-[#0A2747] leading-relaxed">
          When medical emergency or severe pain language is detected, the agent <strong>bypasses knowledge RAG completely</strong> and immediately routes to human medical escalation.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFFEFA] text-[#0A2747] border border-[rgba(10,39,71,0.12)]">
            Emergency Language Detected
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B98945] text-white font-bold">
            Bypass Retrieval (Zero Hallucination)
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFFEFA] text-[#0A2747] border border-[rgba(10,39,71,0.12)]">
            Immediate Human Notice
          </span>
        </div>
      </div>
    </div>
  );
}
