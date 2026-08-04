"use client";

import React from "react";
import { PhoneCall, Radio, Zap, Calendar, Database, LayoutDashboard } from "lucide-react";

export function AiReceptionistArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            VOICE AI ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Real-Time Call Processing & Intelligence
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#B98945] font-bold px-2 py-1 bg-[#B98945]/10 rounded border border-[#B98945]/30 self-start sm:self-auto">
          ⚡ Sub-Second Latency
        </span>
      </div>

      {/* Pipeline 1: Real-Time Live Call */}
      <div className="space-y-2">
        <span className="font-mono text-[10px] text-[#5A738E] font-semibold tracking-wider uppercase block">
          1. REAL-TIME LIVE CALL PIPELINE
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {/* Step 1 */}
          <div className="p-3 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
            <div className="flex items-center gap-1.5 text-[#0A2747]">
              <PhoneCall className="w-3.5 h-3.5 text-[#12375F]" />
              <span className="font-sans font-bold text-xs">Inbound Phone Call</span>
            </div>
            <div className="text-[11px] font-mono text-[#5A738E]">Twilio WebSockets</div>
          </div>

          {/* Step 2 */}
          <div className="p-3 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1">
            <div className="flex items-center gap-1.5 text-[#B98945]">
              <Radio className="w-3.5 h-3.5" />
              <span className="font-sans font-bold text-xs">Google Gemini 2.0</span>
            </div>
            <div className="text-[11px] font-mono text-[#B98945] font-semibold">Real-Time Audio Stream</div>
          </div>

          {/* Step 3 */}
          <div className="p-3 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
            <div className="flex items-center gap-1.5 text-[#0A2747]">
              <Calendar className="w-3.5 h-3.5 text-[#12375F]" />
              <span className="font-sans font-bold text-xs">Google Calendar API</span>
            </div>
            <div className="text-[11px] font-mono text-[#5A738E]">AI Appointment Booking</div>
          </div>

          {/* Step 4 */}
          <div className="p-3 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
            <div className="flex items-center gap-1.5 text-[#0A2747]">
              <Zap className="w-3.5 h-3.5 text-[#B98945]" />
              <span className="font-sans font-bold text-xs">Knowledge Base</span>
            </div>
            <div className="text-[11px] font-mono text-[#5A738E]">Company Context Retrieval</div>
          </div>
        </div>
      </div>

      {/* Pipeline 2: Post-Call Async Intelligence */}
      <div className="p-4 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-3">
        <span className="font-mono text-[10px] text-[#12375F] font-bold tracking-wider uppercase block">
          2. POST-CALL ASYNC DATA PIPELINE (ZERO IMPACT ON CALL LATENCY)
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="p-3 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] space-y-1">
            <div className="font-sans font-bold text-xs text-[#0A2747]">Fastify Transcript Engine</div>
            <div className="text-[11px] font-mono text-[#5A738E]">Summarization & Lead Eval</div>
          </div>

          <div className="p-3 rounded bg-[#FFFEFA] border border-[#B98945]/30 space-y-1">
            <div className="flex items-center gap-1.5 text-[#0A2747]">
              <Database className="w-3.5 h-3.5 text-[#B98945]" />
              <span className="font-sans font-bold text-xs">Supabase / PostgreSQL</span>
            </div>
            <div className="text-[11px] font-mono text-[#B98945] font-semibold">Multi-Tenant Isolation</div>
          </div>

          <div className="p-3 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] space-y-1">
            <div className="flex items-center gap-1.5 text-[#0A2747]">
              <LayoutDashboard className="w-3.5 h-3.5 text-[#12375F]" />
              <span className="font-sans font-bold text-xs">Analytics Dashboard</span>
            </div>
            <div className="text-[11px] font-mono text-[#5A738E]">Next.js / Recharts Viz</div>
          </div>
        </div>
      </div>
    </div>
  );
}
