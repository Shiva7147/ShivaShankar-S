"use client";

import React from "react";
import { ArrowRight, ArrowDown, Cpu, Database, Radio, Mail, Shield, Sparkles } from "lucide-react";
import { ResponsiveChartContainer } from "@/components/ui/ResponsiveChartContainer";

interface Props {
  projectSlug: string;
  isDarkTheme?: boolean;
}

export function SimplifiedVisualFlow({ projectSlug, isDarkTheme = false }: Props) {
  const containerBg = isDarkTheme
    ? "bg-[#12375F]/90 border-[rgba(255,255,255,0.14)] text-[#FFFEFA]"
    : "bg-[#FFFEFA] border-[rgba(10,39,71,0.14)] text-[#0A2747]";
  const subCardBg = isDarkTheme
    ? "bg-[#0A2747] border-[rgba(255,255,255,0.12)] text-[#FFFEFA]"
    : "bg-[#F6F3EC] border-[rgba(10,39,71,0.08)] text-[#0A2747]";
  const arrowColor = isDarkTheme ? "text-[#B98945]" : "text-[#12375F]";
  const subtextColor = isDarkTheme ? "text-[#CBD5E1]" : "text-[#5A738E]";

  const renderContent = () => {
    switch (projectSlug) {
      case "athleteiq":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Step 1 */}
            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#B98945] font-bold">1. USER QUERY</span>
                <span className="font-mono text-[9px] text-[#059669] bg-[#059669]/10 px-1 rounded font-bold">INPUT</span>
              </div>
              <div className="font-sans font-bold text-xs leading-tight">Coach / Athlete Query</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Sports Science Telemetry</div>
            </div>

            {/* Step 2 */}
            <div className={`p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#059669] space-y-1`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#059669] font-bold">2. REACT AGENT</span>
                <Cpu className="w-3 h-3 text-[#059669]" />
              </div>
              <div className="font-sans font-bold text-xs leading-tight">Intent &amp; Safety Guardrails</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Emergency Bypass Check</div>
            </div>

            {/* Step 3 */}
            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#B98945] font-bold">3. SPECIALIZED TOOLS</span>
                <Database className="w-3 h-3 text-[#B98945]" />
              </div>
              <div className="font-sans font-bold text-xs leading-tight">ChromaDB RAG + ACWR Math</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Deterministic Math Engine</div>
            </div>

            {/* Step 4 */}
            <div className={`p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#059669] space-y-1`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#059669] font-bold">4. GROUNDED OUTPUT</span>
                <Sparkles className="w-3 h-3 text-[#059669]" />
              </div>
              <div className="font-sans font-bold text-xs leading-tight">Evaluated Response</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>95% Benchmark Score</div>
            </div>
          </div>
        );

      case "alpha-receptionist":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">1. INBOUND CALL</span>
              <div className="font-sans font-bold text-xs leading-tight">Twilio PSTN Stream</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>WebSocket Audio</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#2563EB] space-y-1`}>
              <span className="font-mono text-[10px] text-[#2563EB] font-bold block">2. VOICE &amp; REASONING</span>
              <div className="font-sans font-bold text-xs leading-tight">Gemini 2.0 + ElevenLabs</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Sub-1s Latency Stream</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">3. AUTOMATION</span>
              <div className="font-sans font-bold text-xs leading-tight">Google Calendar &amp; CRM</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Live Appointment Sync</div>
            </div>
          </div>
        );

      case "alpha-lead-engine":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#F59E0B] font-bold block">1. LEAD DISCOVERY</span>
              <div className="font-sans font-bold text-xs leading-tight">Apify + ICP Scoring</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Target Scraper</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#059669] space-y-1`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold block">2. HUMAN GATE</span>
              <div className="font-sans font-bold text-xs leading-tight">Personalized Draft</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Mandatory Review</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#F59E0B] font-bold block">3. AUTOMATION</span>
              <div className="font-sans font-bold text-xs leading-tight">n8n Follow-up Sequence</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Reply Classifier</div>
            </div>
          </div>
        );

      case "reframe":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#8B5CF6] font-bold block">1. USER ENTRY</span>
              <div className="font-sans font-bold text-xs leading-tight">Device Journal</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Local Storage</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#8B5CF6] space-y-1`}>
              <span className="font-mono text-[10px] text-[#8B5CF6] font-bold block">2. ENCRYPTION</span>
              <div className="font-sans font-bold text-xs leading-tight">AES-GCM 256-bit</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Client Side Key</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">3. AI SUPPORT</span>
              <div className="font-sans font-bold text-xs leading-tight">Gemini + Recharts</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Urge Surfing Sync</div>
            </div>
          </div>
        );

      case "smooth-operator":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#EC4899] font-bold block">1. PROFILE</span>
              <div className="font-sans font-bold text-xs leading-tight">Bio &amp; Photos</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Content Submission</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#EC4899] space-y-1`}>
              <span className="font-mono text-[10px] text-[#EC4899] font-bold block">2. AI &amp; RAG</span>
              <div className="font-sans font-bold text-xs leading-tight">Archetype Analysis</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Knowledge RAG</div>
            </div>

            <div className={`p-3 rounded-lg ${subCardBg} space-y-1`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold block">3. REVIEWER</span>
              <div className="font-sans font-bold text-xs leading-tight">Voice Note Feedback</div>
              <div className={`text-[11px] font-mono ${subtextColor} leading-tight`}>Authentic Delivery</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ResponsiveChartContainer name={`${projectSlug} Overview Flow`}>
      {() => (
        <div className={`w-full p-4 md:p-5 rounded-xl border ${containerBg} shadow-2xs space-y-3`}>
          <div className="flex items-center justify-between pb-2 border-b border-[rgba(10,39,71,0.08)]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B98945]" />
              <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#B98945]">
                SYSTEM WORKFLOW SUMMARY
              </span>
            </div>
            <span className={`text-[10px] font-mono ${subtextColor}`}>3-Second Overview</span>
          </div>

          {renderContent()}
        </div>
      )}
    </ResponsiveChartContainer>
  );
}
