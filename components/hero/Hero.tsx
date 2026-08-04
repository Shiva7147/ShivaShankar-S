"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroDomePortrait } from "@/components/svg/HeroDomePortrait";
import { HeroSystemSvg } from "@/components/svg/HeroSystemSvg";

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B98945] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B98945]" />
              </span>
              <span className="text-xs font-mono text-[#0A2747] font-medium">
                Open to AI Engineering opportunities · Remote / Spain
              </span>
            </div>

            {/* Section Eyebrow */}
            <div className="eyebrow block">
              <span>AI ENGINEER</span>
              <span className="text-[#5A738E] font-normal">·</span>
              <span>BENGALURU → SPAIN</span>
            </div>

            {/* Headline */}
            <h1 className="heading-display text-[#0A2747]">
              Building AI systems people can trust.
            </h1>

            {/* Main Supporting Paragraph */}
            <p className="text-lead">
              I design and build production-ready AI systems across LLM agents, retrieval pipelines, voice automation, intelligent workflows, and full-stack applications. My work combines probabilistic AI with deterministic engineering, measurable evaluation, safety guardrails, and real-world deployment.
            </p>

            {/* Secondary Spain Direction Copy */}
            <p className="text-body text-[#5A738E] border-l-2 border-[#B98945] pl-4 font-normal">
              Currently building from Bengaluru while working toward an AI engineering career in Spain and the European technology market.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/projects" className="btn-primary">
                <span>Explore All 5 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={profileData.resumePath}
                download="ShivaShankar_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <FileText className="w-4 h-4 text-[#B98945]" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-[#12375F] hover:text-[#B98945] transition-colors ml-2"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Dome Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroDomePortrait />
          </div>
        </div>

        {/* Full-width System Flow Workflow Card Below */}
        <div className="mt-12">
          <HeroSystemSvg />
        </div>
      </div>
    </section>
  );
}
