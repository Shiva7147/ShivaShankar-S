"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Cpu } from "lucide-react";
import { Project } from "@/data/projects";
import { SimplifiedVisualFlow } from "./SimplifiedVisualFlow";

interface Props {
  project: Project;
  isFeatured?: boolean;
  isDarkTheme?: boolean;
}

export function EditorialProjectItem({ project, isFeatured = false, isDarkTheme = false }: Props) {
  // Editorial background & text themes for alternating section contrast
  const bgClass = isDarkTheme ? "bg-[#0A2747] text-[#FFFEFA]" : "bg-[#F6F3EC] text-[#0A2747]";
  const textMuted = isDarkTheme ? "text-[#CBD5E1]" : "text-[#5A738E]";
  const subHeading = isDarkTheme ? "text-[#B98945]" : "text-[#12375F]";

  // Clean, human-readable overview copy mapping
  const humanDescriptions: Record<string, { whatItIs: string; whatItDoes: string; underTheHood: string; coreTech: string[] }> = {
    athleteiq: {
      whatItIs: "An AI sports-science assistant for coaches and athletes.",
      whatItDoes: "Helps coaches and athletes understand training load, recovery, performance metrics, and injury-risk signals through a reliable AI interface.",
      underTheHood: "Combines domain vector retrieval, deterministic ACWR workload calculations, and 3-tier safety escalation routes.",
      coreTech: ["LangGraph", "RAG", "ChromaDB", "Python", "FastAPI"]
    },
    "alpha-receptionist": {
      whatItIs: "An AI receptionist and real-time business automation system.",
      whatItDoes: "Handles inbound customer phone calls 24/7, understands company context, qualifies leads, schedules appointments, and converts conversations into structured business data.",
      underTheHood: "Low-latency streaming voice pipeline connecting PSTN audio to ElevenLabs voice synthesis and Google Gemini 2.0 reasoning.",
      coreTech: ["Next.js", "Gemini 2.0", "ElevenLabs", "Twilio Voice", "Supabase"]
    },
    "alpha-lead-engine": {
      whatItIs: "An AI-powered outbound sales automation system.",
      whatItDoes: "Discovers target leads, evaluates ideal customer profiles, analyzes company websites, generates personalized emails, manages follow-ups, and classifies replies.",
      underTheHood: "Modular 6-stage AI architecture with n8n workflow orchestration and a mandatory human review gate before email dispatch.",
      coreTech: ["Next.js", "FastAPI", "Supabase", "n8n", "Docker"]
    },
    reframe: {
      whatItIs: "A private AI-assisted habit recovery application.",
      whatItDoes: "Provides personalized behavioral assessments, real-time urge interruption micro-interactions, AI support, offline PWA access, and progress visualization.",
      underTheHood: "Zero-plaintext server architecture using Web Crypto API for client-side AES-GCM 256-bit encryption before cloud sync.",
      coreTech: ["Next.js", "Gemini 2.0", "Web Crypto API", "Firebase", "Recharts"]
    },
    "smooth-operator": {
      whatItIs: "An AI dating profile coach and knowledge-based assistant.",
      whatItDoes: "Connects users with real reviewers who provide personalized voice-note feedback on dating profiles, supported by AI archetype analysis.",
      underTheHood: "RAG knowledge base of dating archetypes, photo composition frameworks, and opener templates backing reviewer feedback workflows.",
      coreTech: ["Next.js", "Python", "Pinecone RAG", "Gemini", "FastAPI"]
    }
  };

  const copy = humanDescriptions[project.slug] || {
    whatItIs: project.tagline,
    whatItDoes: project.summary,
    underTheHood: project.solution,
    coreTech: project.technologies.slice(0, 5)
  };

  return (
    <article className={`py-16 md:py-24 border-b border-[rgba(10,39,71,0.12)] ${bgClass} transition-colors`}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Human Editorial Overview & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Numbering Header */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#B98945] tracking-widest uppercase">
                {isFeatured ? `01 / FEATURED SYSTEM` : `${project.number} / PROJECT`}
              </span>
              <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${textMuted}`}>
                {project.slug.toUpperCase()}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight">
                {project.title}
              </h2>
              <p className={`font-sans font-semibold text-lg md:text-xl ${subHeading}`}>
                {project.subtitle}
              </p>
            </div>

            {/* What It Is (Simple One-Liner) */}
            <p className="font-sans font-medium text-base md:text-lg leading-relaxed border-l-3 border-l-[#B98945] pl-4 py-0.5">
              {copy.whatItIs}
            </p>

            {/* What It Does Section */}
            <div className="space-y-1.5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B98945]">
                WHAT IT DOES
              </h4>
              <p className={`text-sm md:text-base leading-relaxed font-normal ${textMuted}`}>
                {copy.whatItDoes}
              </p>
            </div>

            {/* Under the Hood / Concise Technical Summary */}
            <div className="space-y-1.5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B98945]">
                UNDER THE HOOD
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed font-mono ${textMuted}`}>
                {copy.underTheHood}
              </p>
            </div>

            {/* Core Tech Stack Pills (Strict 3–5 items only) */}
            <div className="space-y-2 pt-2">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-mono text-[11px] font-bold text-[#B98945] uppercase tracking-wider mr-1">
                  BUILT WITH:
                </span>
                {copy.coreTech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs font-mono px-3 py-1 rounded-md font-semibold border ${
                      isDarkTheme
                        ? "bg-[#12375F] text-[#FFFEFA] border-[rgba(255,255,255,0.12)]"
                        : "bg-[#FFFEFA] text-[#0A2747] border-[rgba(10,39,71,0.14)]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action CTA: VIEW CASE STUDY */}
            <div className="pt-4">
              <Link
                href={`/projects/${project.slug}`}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-sm group ${
                  isDarkTheme
                    ? "bg-[#B98945] text-[#0A2747] hover:bg-[#FFFEFA] hover:text-[#0A2747]"
                    : "bg-[#0A2747] text-[#FFFEFA] hover:bg-[#12375F] hover:text-white"
                }`}
              >
                <span>VIEW CASE STUDY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: One Simplified 3-Second Visual Flow */}
          <div className="lg:col-span-5 w-full pt-2 lg:pt-8">
            <SimplifiedVisualFlow projectSlug={project.slug} isDarkTheme={isDarkTheme} />

            <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono border-t border-[rgba(10,39,71,0.08)] opacity-80">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#B98945]" />
                <span>Production System</span>
              </span>
              <Link
                href={`/projects/${project.slug}`}
                className="text-[#B98945] font-bold hover:underline"
              >
                Inspect Architecture →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
