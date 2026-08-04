"use client";

import React from "react";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export function EvalChartSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(10,39,71,0.08)] pb-3">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            EVALUATION HARNESS BENCHMARK
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            AthleteIQ Accuracy Improvement
          </h4>
        </div>
        <div className="text-xs font-mono text-[#5A738E]">
          20 Ground-Truth Test Cases · 9 Categories
        </div>
      </div>

      {/* Accuracy Comparison Bars */}
      <div className="space-y-4">
        {/* Baseline Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-sans">
            <span className="font-semibold text-[#5A738E]">Initial Baseline RAG Retrieval</span>
            <span className="font-mono font-bold text-[#12375F]">85% Measured Accuracy</span>
          </div>
          <div className="w-full h-3.5 bg-[#F6F3EC] rounded-full overflow-hidden border border-[rgba(10,39,71,0.08)]">
            <div className="h-full bg-[#12375F] rounded-full transition-all duration-700" style={{ width: "85%" }} />
          </div>
        </div>

        {/* Improved Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-sans">
            <span className="font-bold text-[#0A2747] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B98945]" />
              Evaluated System Harness + Refined Knowledge Base
            </span>
            <span className="font-mono font-bold text-[#B98945] text-sm">95% Measured Accuracy (+10%)</span>
          </div>
          <div className="w-full h-4 bg-[#F6F3EC] rounded-full overflow-hidden border border-[#B98945]/30 p-0.5">
            <div className="h-full bg-[#B98945] rounded-full transition-all duration-700" style={{ width: "95%" }} />
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#5A738E] border-t border-[rgba(10,39,71,0.06)]">
        <TrendingUp className="w-4 h-4 text-[#B98945] shrink-0" />
        <span>Hybrid eval harness combining LLM-as-judge scoring with rule-based assertions.</span>
      </div>
    </div>
  );
}
