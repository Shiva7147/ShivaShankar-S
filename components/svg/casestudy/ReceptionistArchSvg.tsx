"use client";

import React from "react";
import { Phone, Radio, Calendar, Database, Activity, ArrowRight, ArrowDown } from "lucide-react";

export function ReceptionistArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 sm:p-6 shadow-xs space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#2563EB] font-bold tracking-wider uppercase block">
            REAL-TIME VOICE AI PIPELINE
          </span>
          <h4 className="font-sans font-bold text-base md:text-lg text-[#0A2747] mt-0.5">
            Alpha Studi0 Sub-Second Voice Architecture
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#059669]/10 px-2.5 py-1 rounded border border-[#059669]/20 self-start sm:self-auto font-bold shrink-0">
          Sub-Second Latency
        </span>
      </div>

      {/* Desktop / Tablet Scrollable Flow Container */}
      <div className="hidden lg:block w-full overflow-x-auto pb-2">
        <div className="min-w-[760px] flex items-center justify-between gap-4">
          {/* Step 1: Inbound Call */}
          <div className="flex-1 p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5 min-w-[200px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#5A738E] font-bold">1. INBOUND CALL</span>
              <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
            </div>
            <div className="font-sans font-bold text-sm text-[#0A2747] leading-tight">Twilio PSTN Gateway</div>
            <div className="text-xs font-mono text-[#5A738E] leading-tight">WebSocket Audio Stream</div>
          </div>

          <div className="flex items-center justify-center text-[#2563EB] shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 2: Voice & LLM Engine */}
          <div className="flex-[1.2] p-4 rounded-xl bg-[#FFFEFA] border-2 border-[#2563EB] shadow-xs space-y-2 min-w-[230px]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#2563EB] font-bold">REASONING &amp; VOICE</span>
              <Radio className="w-4 h-4 text-[#2563EB] shrink-0" />
            </div>
            <div className="space-y-1.5 font-mono text-xs">
              <div className="p-2 rounded bg-[#7C3AED]/10 text-[#7C3AED] font-bold border border-[#7C3AED]/20 truncate">
                ElevenLabs (Streaming STT/TTS)
              </div>
              <div className="p-2 rounded bg-[#2563EB]/10 text-[#2563EB] font-bold border border-[#2563EB]/20 truncate">
                Google Gemini 2.0 Flash (LLM)
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-[#2563EB] shrink-0">
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Step 3: Real-Time Tool Actions */}
          <div className="flex-[1.3] space-y-2 min-w-[240px]">
            <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
              <Calendar className="w-4 h-4 text-[#059669] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">Google Calendar API</div>
                <div className="text-[11px] font-mono text-[#059669] leading-tight truncate">Live Booking Integration</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
              <Database className="w-4 h-4 text-[#B98945] shrink-0" />
              <div className="min-w-0">
                <div className="font-sans font-bold text-xs text-[#0A2747] leading-tight truncate">Supabase DB Isolation</div>
                <div className="text-[11px] font-mono text-[#B98945] leading-tight truncate">RLS Security Data Isolation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Vertical Flow Container */}
      <div className="block lg:hidden space-y-3">
        <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#5A738E] font-bold">1. INBOUND CALL</span>
            <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
          </div>
          <div className="font-sans font-bold text-sm text-[#0A2747]">Twilio PSTN Gateway</div>
          <div className="text-[11px] font-mono text-[#5A738E]">WebSocket Audio Chunk Stream</div>
        </div>

        <div className="flex justify-center text-[#2563EB] py-0.5">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>

        <div className="p-4 rounded-xl bg-[#FFFEFA] border-2 border-[#2563EB] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#2563EB] font-bold">REASONING &amp; VOICE ENGINE</span>
            <Radio className="w-4 h-4 text-[#2563EB] shrink-0" />
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            <div className="p-2 rounded bg-[#7C3AED]/10 text-[#7C3AED] font-bold border border-[#7C3AED]/20">
              ElevenLabs (Streaming STT &amp; TTS Synthesizer)
            </div>
            <div className="p-2 rounded bg-[#2563EB]/10 text-[#2563EB] font-bold border border-[#2563EB]/20">
              Google Gemini 2.0 Flash (Function Reasoning)
            </div>
          </div>
        </div>

        <div className="flex justify-center text-[#2563EB] py-0.5">
          <ArrowDown className="w-4 h-4 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <div className="p-3.5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
            <Calendar className="w-4 h-4 text-[#059669] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Google Calendar API</div>
              <div className="text-[11px] font-mono text-[#059669]">Live Real-Time Appointment Booking</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)] flex items-center gap-3">
            <Database className="w-4 h-4 text-[#B98945] shrink-0" />
            <div>
              <div className="font-sans font-bold text-xs text-[#0A2747]">Supabase Multi-Tenant DB</div>
              <div className="text-[11px] font-mono text-[#B98945]">RLS Data Security Isolation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Async Intelligence Pipeline */}
      <div className="p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-2">
        <div className="flex items-center gap-2 text-[#0A2747]">
          <Activity className="w-4 h-4 shrink-0 text-[#2563EB]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            POST-CALL ASYNCHRONOUS INTELLIGENCE PIPELINE
          </span>
        </div>

        <p className="text-xs text-[#5A738E] leading-relaxed">
          Decoupled from live audio stream: Fastify queue processes transcript asynchronously for zero-latency call performance.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#FFFEFA] text-[#0A2747] border border-[rgba(10,39,71,0.12)] font-medium">
            Transcript Processing
          </span>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#FFFEFA] text-[#0A2747] border border-[rgba(10,39,71,0.12)] font-medium">
            AI Lead Scoring
          </span>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#2563EB] text-white font-bold">
            Analytics Dashboard Push
          </span>
        </div>
      </div>
    </div>
  );
}
