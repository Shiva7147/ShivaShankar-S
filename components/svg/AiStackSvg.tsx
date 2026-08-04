"use client";

import React, { useState } from "react";

const stackLayers = [
  {
    id: "ux",
    name: "01 / User Experience & Interfaces",
    techs: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Recharts"],
    desc: "Responsive, accessible, editorial product interfaces with client-side encryption and real-time audio streams."
  },
  {
    id: "backend",
    name: "02 / API & Backend Services",
    techs: ["FastAPI (Python)", "Node.js / Fastify", "REST APIs", "Web Crypto API"],
    desc: "High-performance API endpoints, low-latency stream buffers, and deterministic calculation handlers."
  },
  {
    id: "agent",
    name: "03 / Agent & Workflow Orchestration Layer",
    techs: ["LangGraph ReAct Agents", "LangChain LCEL", "n8n Pipelines", "Tool Call Schemas"],
    desc: "Stateful agentic loops, single-responsibility tool delegation, and multi-step workflow automation."
  },
  {
    id: "llm",
    name: "04 / Model & Retrieval Layer",
    techs: ["OpenAI (GPT-4o/o1)", "Google Gemini 2.0", "Anthropic Claude", "OpenRouter", "Hugging Face Embeddings"],
    desc: "Multi-model dynamic routing, custom system prompt engineering, semantic RAG search, and LLM-as-judge scoring."
  },
  {
    id: "database",
    name: "05 / Vector Store & Persistence",
    techs: ["ChromaDB", "FAISS", "PostgreSQL", "Supabase", "Firebase Firestore"],
    desc: "Semantic vector indexes for domain knowledge bases, structured metadata stores, and encrypted user data."
  },
  {
    id: "infra",
    name: "06 / Deployment & Guardrails",
    techs: ["Docker", "Railway", "Vercel", "Langfuse Tracing", "Safety Escalation"],
    desc: "Containerized service deployment, background job runners, real-time observability, and medical/safety bypass guardrails."
  }
];

export function AiStackSvg() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="w-full my-8">
      <div className="space-y-3">
        {stackLayers.map((layer, idx) => {
          const isHovered = activeLayer === idx;
          return (
            <div
              key={layer.id}
              onMouseEnter={() => setActiveLayer(idx)}
              onMouseLeave={() => setActiveLayer(null)}
              className={`group relative p-5 rounded-md border transition-all duration-300 cursor-pointer ${
                isHovered
                  ? "bg-[#FFFEFA] border-[#B98945] shadow-[0_8px_30px_rgba(185,137,69,0.12)] translate-x-1"
                  : "bg-[#FFFEFA]/70 border-[rgba(10,39,71,0.12)] hover:border-[#12375F]"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#B98945] font-semibold">{layer.name.split(" / ")[0]}</span>
                    <h4 className="font-sans font-bold text-base text-[#0A2747]">{layer.name.split(" / ")[1]}</h4>
                  </div>
                  <p className="text-xs text-[#5A738E] leading-relaxed max-w-2xl">{layer.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 self-start md:self-center">
                  {layer.techs.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-2.5 py-1 rounded transition-colors ${
                        isHovered
                          ? "bg-[#B98945]/10 text-[#0A2747] border border-[#B98945]/30"
                          : "bg-[#F6F3EC] text-[#12375F] border border-transparent"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vertical connector line */}
              {idx < stackLayers.length - 1 && (
                <div className="absolute left-8 -bottom-3.5 w-0.5 h-3 bg-[rgba(10,39,71,0.15)] z-10 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
