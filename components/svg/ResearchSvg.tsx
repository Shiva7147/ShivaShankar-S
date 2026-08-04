"use client";

import React from "react";
import { Award, RefreshCw } from "lucide-react";

export function ResearchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            RESEARCH PIPELINE // IEEE GENAI CHALLENGE FINALIST
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Surgical Amnesia Machine Unlearning Architecture
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#0A2747] bg-[#B98945]/10 px-2.5 py-1 rounded border border-[#B98945]/30">
          <Award className="w-3.5 h-3.5 text-[#B98945]" />
          <span>IEEE IES Camera-Ready Format</span>
        </div>
      </div>

      {/* 4 Cards Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">1. BASE MODEL</span>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Llama 3.2 1B</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Pre-trained Base LLM</div>
        </div>

        <div className="p-3.5 rounded bg-[#FFFEFA] border border-[#B98945]/40 space-y-1">
          <span className="font-mono text-[10px] text-[#B98945] font-semibold">2. TARGETED FORGET SET</span>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Data Erasure Target</div>
          <div className="text-[11px] font-mono text-[#B98945]">Copyright / GDPR Set</div>
        </div>

        <div className="p-3.5 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">3. LoRA UNLEARNING</span>
            <RefreshCw className="w-3.5 h-3.5 text-[#B98945]" />
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">LoRA Adapter Layer</div>
          <div className="text-[11px] font-mono text-[#B98945]">Negated Cross-Entropy</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">4. UPDATED MODEL</span>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Unlearned Model</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Retained General Reasoning</div>
        </div>
      </div>

      {/* Dual Evaluation Metrics Box */}
      <div className="p-4 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-3">
        <span className="font-mono text-[10px] text-[#12375F] font-bold tracking-wider uppercase block">
          COMPLIANCE & UTILITY EVALUATION HARNESS
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded bg-[#FFFEFA] border border-[#B98945]/30 space-y-1">
            <div className="font-sans font-bold text-xs text-[#0A2747]">Forget Efficacy Score</div>
            <div className="text-[11px] text-[#5A738E]">
              Verifies erased information cannot be reconstructed or extracted via prompt probing.
            </div>
          </div>

          <div className="p-3 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] space-y-1">
            <div className="font-sans font-bold text-xs text-[#0A2747]">Model Utility Retention Score</div>
            <div className="text-[11px] text-[#5A738E]">
              Ensures general knowledge, language coherence, and task performance remain intact.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
