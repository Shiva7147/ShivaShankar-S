"use client";

import React from "react";
import { Mic, Sparkles, UserCheck, ArrowRight, ArrowDown } from "lucide-react";

export function SmoothOperatorArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            HUMAN-AI HYBRID COACHING ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Smooth Operator RAG &amp; Reviewer Loop
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#B98945] bg-[#B98945]/10 px-2.5 py-1 rounded border border-[#B98945]/20 self-start sm:self-auto font-bold">
          Voice Note Delivery
        </span>
      </div>

      {/* Main Pipeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Step 1: Submission */}
        <div className="lg:col-span-3 p-4 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">1. USER SUBMISSION</span>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Profile Content</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Photos · Bio · Prompts</div>
        </div>

        <div className="hidden lg:flex lg:col-span-1 justify-center text-[#B98945]">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className="flex lg:hidden justify-center text-[#B98945] py-1">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Step 2: AI Pre-Analysis & RAG */}
        <div className="lg:col-span-4 p-4 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">AI ANALYSIS &amp; RAG</span>
            <Sparkles className="w-4 h-4 text-[#B98945]" />
          </div>
          <div className="space-y-1 font-mono text-[11px]">
            <div className="p-1.5 rounded bg-[#F6F3EC] text-[#0A2747] font-semibold border border-[rgba(10,39,71,0.08)]">
              AI Profile Pre-Analysis (Hook/Tone)
            </div>
            <div className="p-1.5 rounded bg-[#B98945]/10 text-[#0A2747] font-bold border border-[#B98945]/20">
              Dating Archetypes RAG Knowledge Base
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-1 justify-center text-[#B98945]">
          <ArrowRight className="w-4 h-4" />
        </div>
        <div className="flex lg:hidden justify-center text-[#B98945] py-1">
          <ArrowDown className="w-4 h-4" />
        </div>

        {/* Step 3: Human Reviewer & Voice Delivery */}
        <div className="lg:col-span-3 space-y-2">
          <div className="p-2.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-[#059669] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Human Reviewer</div>
              <div className="text-[10px] font-mono text-[#059669]">Specialized Tier Routing</div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-[#B98945]/10 border border-[#B98945]/30 flex items-center gap-2">
            <Mic className="w-3.5 h-3.5 text-[#B98945] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Voice-Note Feedback</div>
              <div className="text-[10px] font-mono text-[#B98945] font-bold">Authentic Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
