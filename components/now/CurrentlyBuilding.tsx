"use client";

import React from "react";
import { Hammer, BookOpen, Compass } from "lucide-react";

export function CurrentlyBuilding() {
  return (
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">NOW</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-12">
          What I am building and learning now.
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Building */}
          <div className="editorial-card space-y-4">
            <div className="flex items-center gap-2 text-[#0A2747] pb-3 border-b border-[rgba(10,39,71,0.08)]">
              <Hammer className="w-4 h-4 text-[#B98945]" />
              <h3 className="font-sans font-bold text-lg">Building</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-[#12375F]">
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Modular agent workflows in LangGraph</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Production AI evaluation & assertion harnesses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>AI-powered outbound sales automation (Alpha Lead)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Reliable tool-calling applications with safety bypass</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Learning */}
          <div className="editorial-card space-y-4">
            <div className="flex items-center gap-2 text-[#0A2747] pb-3 border-b border-[rgba(10,39,71,0.08)]">
              <BookOpen className="w-4 h-4 text-[#B98945]" />
              <h3 className="font-sans font-bold text-lg">Learning</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-[#12375F]">
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Multi-agent LangGraph patterns & supervisor state</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Langfuse tracing, latency, & observability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Docker & containerized production deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Google Cloud Run serverless microservices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>MLOps foundations & production model drift</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Direction */}
          <div className="editorial-card space-y-4">
            <div className="flex items-center gap-2 text-[#0A2747] pb-3 border-b border-[rgba(10,39,71,0.08)]">
              <Compass className="w-4 h-4 text-[#B98945]" />
              <h3 className="font-sans font-bold text-lg">Direction</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-[#12375F]">
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>AI Engineering & Applied ML roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Applied AI, LLM systems, & RAG architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Remote opportunities & relocation to Spain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Building systems with measurable real-world value</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
