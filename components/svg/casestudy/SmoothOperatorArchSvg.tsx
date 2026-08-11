"use client";

import React from "react";
import { Mic, Sparkles, UserCheck, ArrowRight, ArrowDown } from "lucide-react";

export function SmoothOperatorArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 sm:p-6 shadow-xs space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-bold tracking-wider uppercase block">
            HUMAN-AI HYBRID COACHING ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base md:text-lg text-[#0A2747] mt-0.5">
            Smooth Operator RAG &amp; Reviewer Loop
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#B98945] bg-[#B98945]/10 px-2.5 py-1 rounded border border-[#B98945]/20 self-start sm:self-auto font-bold shrink-0">
          Voice Note Delivery
        </span>
      </div>

      {/* Desktop / Tablet Scrollable Flow Container */}
      <div className="hidden lg:block w-full overflow-x-auto pb-2">
        <div className="min-w-[760px] flex items-center justify-between gap-4">
          {/* Step 1: Submission */}
          <div className="flex-1 p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5 min-w-[200px]">
            <span className="font-mono text-[10px] text-[#5A738E] font-bold block">1. USER SUBMISSION</span>
            <div className="font-sans font-bold text-sm text-[#0A2747] leading-tight">Profile Content</div>
            <div className="text-xs font-mono text-[#5A738E] leading-tight">Photos · Bio · Prompts</div>
          </div>

          <div className="flex items-center justify-center text-[#B98945] shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 2: AI Pre-Analysis & RAG */}
          <div className="flex-[1.2] p-4 rounded-xl bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-2 min-w-[230px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#B98945] font-bold">AI ANALYSIS &amp; RAG</span>
              <Sparkles className="w-4 h-4 text-[#B98945] shrink-0" />
            </div>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="p-2 rounded bg-[#F6F3EC] text-[#0A2747] font-semibold border border-[rgba(10,39,71,0.08)] truncate">
                AI Profile Pre-Analysis (Hook/Tone)
              </div>
              <div className="p-2 rounded bg-[#B98945]/10 text-[#0A2747] font-bold border border-[#B98945]/20 truncate">
                Archetypes RAG Knowledge Base
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-[#B98945] shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 3: Human Reviewer & Voice Delivery */}
          <div className="flex-[1.3] space-y-2 min-w-[240px]">
            <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
              <UserCheck className="w-4 h-4 text-[#059669] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">Human Reviewer Loop</div>
                <div className="text-[11px] font-mono text-[#059669] leading-tight truncate">Specialized Tier Routing</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-3">
              <Mic className="w-4 h-4 text-[#B98945] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">Voice-Note Feedback</div>
                <div className="text-[11px] font-mono text-[#B98945] font-bold leading-tight truncate">Authentic Personalized Advice</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Vertical Flow Container */}
      <div className="block lg:hidden space-y-3">
        <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5">
          <span className="font-mono text-[10px] text-[#5A738E] font-bold block">1. USER SUBMISSION</span>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Profile Content &amp; Screenshots</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Photos · Bio · Context Prompts</div>
        </div>

        <div className="flex justify-center text-[#B98945] py-0.5">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>

        <div className="p-4 rounded-xl bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">AI ANALYSIS &amp; RAG ENGINE</span>
            <Sparkles className="w-4 h-4 text-[#B98945] shrink-0" />
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-[#F6F3EC] text-[#0A2747] font-semibold border border-[rgba(10,39,71,0.08)]">
              AI Profile Pre-Analysis (Hook / Tone / Flow)
            </div>
            <div className="p-2 rounded bg-[#B98945]/10 text-[#0A2747] font-bold border border-[#B98945]/20">
              Dating Archetypes Vector RAG Store
            </div>
          </div>
        </div>

        <div className="flex justify-center text-[#B98945] py-0.5">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <div className="p-3.5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
            <UserCheck className="w-4 h-4 text-[#059669] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Human Reviewer Loop</div>
              <div className="text-[11px] font-mono text-[#059669]">Specialized Tier Routing</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-3">
            <Mic className="w-4 h-4 text-[#B98945] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Voice-Note Delivery</div>
              <div className="text-[11px] font-mono text-[#B98945] font-bold">Authentic Personalized Advice</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
