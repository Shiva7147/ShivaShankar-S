"use client";

import React from "react";
import { Heart, Sparkles, Mic, Layers, Database } from "lucide-react";

export function SmoothOperatorArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            AI DATING COACH ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Smooth Operator RAG & Reviewer Engine
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#0A2747] bg-[#B98945]/10 px-2.5 py-1 rounded border border-[#B98945]/30">
          <Heart className="w-3.5 h-3.5 text-[#B98945]" />
          <span>Hybrid Human + AI Coaching</span>
        </div>
      </div>

      {/* Main Architecture Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">1. INPUT PROFILE</span>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Photos & Bio Hooks</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Dating App Submissions</div>
        </div>

        <div className="p-3.5 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">2. AGENTIC ANALYSIS</span>
            <Sparkles className="w-3.5 h-3.5 text-[#B98945]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Archetype Analyzer</div>
          <div className="text-[11px] font-mono text-[#B98945]">Tone & Composition</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#12375F] font-semibold">3. RAG BASE</span>
            <Database className="w-3.5 h-3.5 text-[#12375F]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Conversation RAG</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Template Vector Store</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#12375F] font-semibold">4. VOICE FEEDBACK</span>
            <Mic className="w-3.5 h-3.5 text-[#12375F]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Reviewer Retrieval</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Structured Voice Notes</div>
        </div>
      </div>

      {/* 3-Tier Service Architecture */}
      <div className="p-4 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#B98945]" />
          <span className="font-mono text-xs font-bold text-[#0A2747] uppercase">
            3-TIER PRICING & GO-TO-MARKET ASSETS
          </span>
        </div>

        <p className="text-xs text-[#12375F] leading-relaxed">
          Platform concept equipped with full GTM collateral: ad campaign briefs, target reviewer outreach lists, media kits, and structured voice-note delivery workflows.
        </p>
      </div>
    </div>
  );
}
