"use client";

import React from "react";
import { Search, UserCheck, Globe, Mail, ShieldCheck, Repeat } from "lucide-react";

export function LeadEngineArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#D97706] font-semibold tracking-wider uppercase block">
            MODULAR OUTBOUND SALES PIPELINE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Alpha Lead Engine 6-Module Flow
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#059669]/10 px-2.5 py-1 rounded border border-[#059669]/20 self-start sm:self-auto font-bold">
          Mandatory Human Gate
        </span>
      </div>

      {/* 6 AI Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#D97706] font-bold">MODULE 01</span>
            <Search className="w-3.5 h-3.5 text-[#D97706]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Lead Discovery</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Apify Scraper Integration</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#D97706] font-bold">MODULE 02</span>
            <UserCheck className="w-3.5 h-3.5 text-[#D97706]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">ICP Qualification</div>
          <div className="text-[11px] font-mono text-[#5A738E]">AI Lead Scoring Engine</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#D97706] font-bold">MODULE 03</span>
            <Globe className="w-3.5 h-3.5 text-[#D97706]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Website Intelligence</div>
          <div className="text-[11px] font-mono text-[#5A738E]">RAG Sales Vector Extraction</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#D97706] font-bold">MODULE 04</span>
            <Mail className="w-3.5 h-3.5 text-[#D97706]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Personalized Email</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Context-Aware Drafts</div>
        </div>

        <div className="p-3.5 rounded bg-[#FFFEFA] border-2 border-[#059669] shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#059669] font-bold">MODULE 05 (GATE)</span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Human Review</div>
          <div className="text-[11px] font-mono text-[#059669] font-semibold">Mandatory Approval Gate</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#D97706] font-bold">MODULE 06</span>
            <Repeat className="w-3.5 h-3.5 text-[#D97706]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Follow-Up &amp; Reply</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Day 0/3/7 Classification</div>
        </div>
      </div>

      {/* n8n Orchestration Banner */}
      <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] flex items-center justify-between gap-2 text-[11px] font-mono text-[#0A2747]">
        <span>n8n Workflow Layer: Independent retries &amp; step isolation</span>
        <span className="text-[#D97706] font-bold">FastAPI + Supabase</span>
      </div>
    </div>
  );
}
