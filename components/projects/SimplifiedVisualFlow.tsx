"use client";

import React from "react";
import { ArrowRight, ArrowDown, Cpu, Database, Radio, Mail, Shield, Sparkles } from "lucide-react";
import { ResponsiveChartContainer } from "@/components/ui/ResponsiveChartContainer";

interface Props {
  projectSlug: string;
  isDarkTheme?: boolean;
}

export function SimplifiedVisualFlow({ projectSlug, isDarkTheme = false }: Props) {
  const containerBg = isDarkTheme ? "bg-[#12375F]/80 border-[rgba(255,255,255,0.12)] text-[#FFFEFA]" : "bg-[#FFFEFA] border-[rgba(10,39,71,0.12)] text-[#0A2747]";
  const subCardBg = isDarkTheme ? "bg-[#0A2747] border-[rgba(255,255,255,0.1)] text-[#FFFEFA]" : "bg-[#F6F3EC] border-[rgba(10,39,71,0.08)] text-[#0A2747]";
  const arrowColor = isDarkTheme ? "text-[#B98945]" : "text-[#12375F]";
  const subtextColor = isDarkTheme ? "text-[#CBD5E1]" : "text-[#5A738E]";

  const renderContent = (breakpoint: "desktop" | "tablet" | "mobile") => {
    const isMobile = breakpoint === "mobile";

    switch (projectSlug) {
      case "athleteiq":
        return isMobile ? (
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold">1. USER QUERY</span>
              <div className="font-sans font-bold text-xs">Coach / Athlete Query</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5 border-l-2 border-l-[#059669]`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold">2. REACT AGENT</span>
              <div className="font-sans font-bold text-xs">Intent &amp; Safety Guardrails</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold">3. SPECIALIZED TOOLS</span>
              <div className="font-sans font-bold text-xs">ChromaDB RAG + ACWR Python Math</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold">4. OUTPUT</span>
              <div className="font-sans font-bold text-xs">Grounded &amp; Safe Response</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2.5">
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">1. USER QUERY</span>
              <div className="font-sans font-bold text-xs truncate">Coach / Athlete</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#059669] space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold block">2. REACT AGENT</span>
              <div className="font-sans font-bold text-xs truncate">Intent &amp; Safety</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">3. TOOLS</span>
              <div className="font-sans font-bold text-xs truncate">RAG + Math Engine</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold block">4. OUTPUT</span>
              <div className="font-sans font-bold text-xs truncate">Grounded Response</div>
            </div>
          </div>
        );

      case "alpha-receptionist":
        return isMobile ? (
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold">1. PHONE CALL</span>
              <div className="font-sans font-bold text-xs">Twilio PSTN WebSocket Stream</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5 border-l-2 border-l-[#2563EB]`}>
              <span className="font-mono text-[10px] text-[#2563EB] font-bold">2. REASONING &amp; VOICE</span>
              <div className="font-sans font-bold text-xs">Gemini 2.0 + ElevenLabs TTS</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold">3. REAL-TIME ACTIONS</span>
              <div className="font-sans font-bold text-xs">Google Calendar &amp; CRM Sync</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2.5">
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">1. INBOUND CALL</span>
              <div className="font-sans font-bold text-xs truncate">Twilio PSTN Stream</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1.2 p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#2563EB] space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#2563EB] font-bold block">2. VOICE &amp; REASONING</span>
              <div className="font-sans font-bold text-xs truncate">Gemini + ElevenLabs</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">3. AUTOMATION</span>
              <div className="font-sans font-bold text-xs truncate">Calendar &amp; CRM Booking</div>
            </div>
          </div>
        );

      case "alpha-lead-engine":
        return isMobile ? (
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#F59E0B] font-bold">1. LEAD DISCOVERY</span>
              <div className="font-sans font-bold text-xs">Apify Scraper + ICP Scoring</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5 border-l-2 border-l-[#059669]`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold">2. EMAIL &amp; HUMAN GATE</span>
              <div className="font-sans font-bold text-xs">Personalized Draft + Approval</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#F59E0B] font-bold">3. CAMPAIGN PIPELINE</span>
              <div className="font-sans font-bold text-xs">n8n Sequences &amp; Reply Classifier</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2.5">
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#F59E0B] font-bold block">1. DISCOVERY</span>
              <div className="font-sans font-bold text-xs truncate">Apify + ICP Scoring</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1.2 p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#059669] space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold block">2. HUMAN GATE</span>
              <div className="font-sans font-bold text-xs truncate">Drafting + Review</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#F59E0B] font-bold block">3. AUTOMATION</span>
              <div className="font-sans font-bold text-xs truncate">n8n Follow-up Pipeline</div>
            </div>
          </div>
        );

      case "reframe":
        return isMobile ? (
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#8B5CF6] font-bold">1. JOURNAL ENTRY</span>
              <div className="font-sans font-bold text-xs">Device-Local User Entry</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5 border-l-2 border-l-[#8B5CF6]`}>
              <span className="font-mono text-[10px] text-[#8B5CF6] font-bold">2. CLIENT ENCRYPTION</span>
              <div className="font-sans font-bold text-xs">Web Crypto AES-GCM 256-bit</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold">3. AI INTERVENTION</span>
              <div className="font-sans font-bold text-xs">Gemini Support + Recharts</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2.5">
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#8B5CF6] font-bold block">1. USER ENTRY</span>
              <div className="font-sans font-bold text-xs truncate">Device Journal</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1.2 p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#8B5CF6] space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#8B5CF6] font-bold block">2. ENCRYPTION</span>
              <div className="font-sans font-bold text-xs truncate">AES-GCM Client Side</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#B98945] font-bold block">3. AI SUPPORT</span>
              <div className="font-sans font-bold text-xs truncate">Urge Surfing &amp; Sync</div>
            </div>
          </div>
        );

      case "smooth-operator":
        return isMobile ? (
          <div className="space-y-2">
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#EC4899] font-bold">1. SUBMISSION</span>
              <div className="font-sans font-bold text-xs">Profile Content &amp; Photos</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5 border-l-2 border-l-[#EC4899]`}>
              <span className="font-mono text-[10px] text-[#EC4899] font-bold">2. AI &amp; RAG ENGINE</span>
              <div className="font-sans font-bold text-xs">Dating Archetypes RAG</div>
            </div>
            <div className={`flex justify-center ${arrowColor} py-0.5`}><ArrowDown className="w-3.5 h-3.5" /></div>
            <div className={`p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold">3. REVIEWER DELIVERY</span>
              <div className="font-sans font-bold text-xs">Personalized Voice Note</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-2.5">
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#EC4899] font-bold block">1. PROFILE</span>
              <div className="font-sans font-bold text-xs truncate">Bio &amp; Photos</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1.2 p-3 rounded-lg ${subCardBg} border-l-2 border-l-[#EC4899] space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#EC4899] font-bold block">2. AI &amp; RAG</span>
              <div className="font-sans font-bold text-xs truncate">Archetype Analysis</div>
            </div>
            <div className={`${arrowColor} shrink-0`}><ArrowRight className="w-4 h-4" /></div>
            <div className={`flex-1 p-3 rounded-lg ${subCardBg} space-y-0.5`}>
              <span className="font-mono text-[10px] text-[#059669] font-bold block">3. REVIEWER</span>
              <div className="font-sans font-bold text-xs truncate">Voice Note Feedback</div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <ResponsiveChartContainer name={`${projectSlug} Overview Flow`}>
      {(breakpoint) => (
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

          {renderContent(breakpoint)}
        </div>
      )}
    </ResponsiveChartContainer>
  );
}
