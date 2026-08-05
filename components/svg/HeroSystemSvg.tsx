"use client";

import React from "react";
import { ArrowRight, ArrowDown, Cpu, Sparkles, Database } from "lucide-react";
import { ResponsiveChartContainer } from "@/components/ui/ResponsiveChartContainer";

export function HeroSystemSvg() {
  return (
    <ResponsiveChartContainer name="Hero System Flow" ariaLabel="AI System Workflow Diagram">
      {(breakpoint) => (
        <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 sm:p-6 shadow-xs text-[#0A2747]">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-[rgba(10,39,71,0.08)] pb-3 mb-5">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#B98945]" />
              <span className="font-mono text-[11px] font-semibold text-[#0A2747] tracking-wider uppercase">
                AI SYSTEM FLOW // PROBABILISTIC + DETERMINISTIC
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#B98945] font-bold px-2.5 py-1 bg-[#B98945]/10 rounded border border-[#B98945]/20">
              LIVE WORKFLOW
            </span>
          </div>

          {/* Flow Grid — Responsive Layout per Breakpoint */}
          {breakpoint === "mobile" ? (
            /* VERTICAL STACKED MOBILE FLOW (A ↓ B ↓ C) */
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
                <div className="font-mono text-[10px] text-[#5A738E] uppercase font-semibold">STEP 01</div>
                <div className="font-sans font-bold text-sm text-[#0A2747]">User Input Telemetry</div>
                <div className="text-xs font-mono text-[#5A738E]">Prompt / Voice Stream / Query</div>
              </div>

              <div className="flex justify-center text-[#B98945] py-0.5">
                <ArrowDown className="w-4 h-4 animate-pulse" />
              </div>

              <div className="p-4 rounded-lg bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[10px] text-[#B98945] font-bold">LANGGRAPH REACT AGENT</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#B98945]" />
                </div>
                <div className="font-sans font-bold text-sm text-[#0A2747]">AI Agent State Core</div>
                <div className="text-xs font-mono text-[#5A738E]">Evaluates intent &amp; safety guardrails</div>
              </div>

              <div className="flex justify-center text-[#B98945] py-0.5">
                <ArrowDown className="w-4 h-4 animate-pulse" />
              </div>

              <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[10px] text-[#12375F] font-semibold tracking-wider">ROUTED EXECUTION</span>
                  <Database className="w-3.5 h-3.5 text-[#12375F]" />
                </div>
                <div className="space-y-1.5 text-xs font-mono">
                  <div className="p-2 rounded-md bg-[#FFFEFA] text-[#0A2747] font-medium border border-[rgba(10,39,71,0.10)]">
                    LLM Reasoning Engine (Gemini / Claude)
                  </div>
                  <div className="p-2 rounded-md bg-[#B98945]/10 text-[#0A2747] font-semibold border border-[#B98945]/25">
                    Deterministic Tools (Vector RAG / ACWR Math)
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* DESKTOP & TABLET HORIZONTAL FLOW */
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.1fr_auto_1.4fr] gap-3.5 items-center">
              <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
                <div className="font-mono text-[10px] text-[#5A738E] uppercase font-semibold">STEP 01</div>
                <div className="font-sans font-bold text-sm text-[#0A2747]">User Input</div>
                <div className="text-[11px] font-mono text-[#5A738E]">Prompt / Voice / Query</div>
              </div>

              <div className="hidden lg:flex justify-center text-[#B98945] px-1">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex lg:hidden justify-center text-[#B98945] py-1">
                <ArrowDown className="w-4 h-4 animate-pulse" />
              </div>

              <div className="p-4 rounded-lg bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[10px] text-[#B98945] font-bold">LANGGRAPH REACT</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#B98945]" />
                </div>
                <div className="font-sans font-bold text-sm text-[#0A2747]">AI Agent Core</div>
                <div className="text-[11px] font-mono text-[#5A738E]">State &amp; Guardrails</div>
              </div>

              <div className="hidden lg:flex justify-center text-[#B98945] px-1">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex lg:hidden justify-center text-[#B98945] py-1">
                <ArrowDown className="w-4 h-4 animate-pulse" />
              </div>

              <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-mono text-[10px] text-[#12375F] font-semibold tracking-wider">ROUTED EXECUTION</span>
                  <Database className="w-3.5 h-3.5 text-[#12375F]" />
                </div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="px-2.5 py-1 rounded bg-[#FFFEFA] text-[#0A2747] font-medium border border-[rgba(10,39,71,0.10)] whitespace-normal sm:whitespace-nowrap">
                    LLM Reasoning (Gemini/Claude)
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#B98945]/10 text-[#0A2747] font-semibold border border-[#B98945]/25 whitespace-normal sm:whitespace-nowrap">
                    Deterministic Tools (RAG/Math)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grounded Output Bar */}
          <div className="mt-4 pt-3 border-t border-[rgba(10,39,71,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#5A738E]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B98945] animate-ping inline-block" />
              <span>Output: Grounded &amp; Evaluated Response</span>
            </div>
            <span className="text-[#12375F] font-medium">Bypasses LLM on medical/safety emergency</span>
          </div>
        </div>
      )}
    </ResponsiveChartContainer>
  );
}
