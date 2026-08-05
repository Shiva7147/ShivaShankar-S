"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { ReceptionistArchSvg } from "@/components/svg/casestudy/ReceptionistArchSvg";
import { AthleteIqArchSvg } from "@/components/svg/casestudy/AthleteIqArchSvg";
import { LeadEngineArchSvg } from "@/components/svg/casestudy/LeadEngineArchSvg";
import { ReframeArchSvg } from "@/components/svg/casestudy/ReframeArchSvg";
import { SmoothOperatorArchSvg } from "@/components/svg/casestudy/SmoothOperatorArchSvg";
import { ResponsiveChartContainer } from "@/components/ui/ResponsiveChartContainer";
import {
  Cpu,
  Clock,
  ShieldCheck,
  Code2,
  Sparkles,
  Terminal
} from "lucide-react";

const archMap: Record<string, React.ReactNode> = {
  "alpha-receptionist": <ReceptionistArchSvg />,
  athleteiq: <AthleteIqArchSvg />,
  "alpha-lead-engine": <LeadEngineArchSvg />,
  reframe: <ReframeArchSvg />,
  "smooth-operator": <SmoothOperatorArchSvg />,
};

interface StepDetail {
  step: number;
  name: string;
  component: string;
  payload: string;
  latency: string;
  guardrail: string;
  tech: string;
}

const archStepsMap: Record<string, StepDetail[]> = {
  "alpha-receptionist": [
    {
      step: 1,
      name: "PSTN Inbound Call Stream",
      component: "Twilio Voice WebSocket Gateway",
      payload: "8kHz μ-law PCM bidirectional audio chunk stream",
      latency: "< 40ms stream buffering",
      guardrail: "Packet loss recovery & audio buffer underflow protection",
      tech: "Twilio Voice API / Node.js WebSockets",
    },
    {
      step: 2,
      name: "Streaming Speech-to-Text",
      component: "ElevenLabs / Deepgram STT Transcriber",
      payload: "Real-time audio buffer → Text transcript tokens",
      latency: "120ms token latency",
      guardrail: "Voice Activity Detection (VAD) turn-taking detection",
      tech: "ElevenLabs STT / WebSockets",
    },
    {
      step: 3,
      name: "Gemini Reasoning & Tool Selection",
      component: "Google Gemini 2.0 Flash Engine",
      payload: "Conversation context + OpenAPI Tool Schema JSON",
      latency: "220ms inference time",
      guardrail: "Strict JSON schema validation & 0.1 temperature setting",
      tech: "Google Gemini 2.0 Flash / Node.js",
    },
    {
      step: 4,
      name: "Calendar & CRM Execution",
      component: "Supabase DB & Google Calendar API",
      payload: "SQL Mutation + Calendar Event API Payload",
      latency: "150ms roundtrip",
      guardrail: "Double-booking prevention lock & ACID transaction retry",
      tech: "Supabase DB / Google Calendar API",
    },
    {
      step: 5,
      name: "TTS Audio Generation",
      component: "ElevenLabs Streaming Voice Engine",
      payload: "Synthesized text → 24kHz PCM audio byte stream",
      latency: "160ms voice synthesis",
      guardrail: "Sub-500ms total pipeline latency ceiling target",
      tech: "ElevenLabs Streaming TTS / Fastify",
    },
  ],
  athleteiq: [
    {
      step: 1,
      name: "Query Preprocessing & Intent",
      component: "OpenRouter Fast-Classifier",
      payload: "Athlete Query + Historical Load Telemetry",
      latency: "80ms classification",
      guardrail: "3-Tier Emergency Medical Escalation Filter",
      tech: "Python / Fast-Classifier",
    },
    {
      step: 2,
      name: "Dense Vector Retrieval",
      component: "ChromaDB PubMed Vector Store",
      payload: "Query Embedding → Top-k PubMed Document Chunks",
      latency: "90ms similarity search",
      guardrail: "Cosine similarity relevance cutoff score > 0.78",
      tech: "ChromaDB / Hugging Face Embeddings",
    },
    {
      step: 3,
      name: "LangGraph ReAct Agent Loop",
      component: "LangGraph Agent Engine",
      payload: "Retrieved Chunks + ACWR Math Tool Call",
      latency: "310ms graph execution",
      guardrail: "Deterministic math calculation (No LLM arithmetic)",
      tech: "LangGraph / Python",
    },
    {
      step: 4,
      name: "LLM-as-a-Judge Evaluation",
      component: "Automated Evaluation Pipeline",
      payload: "Generated Response + Context Chunks → Metric Score",
      latency: "180ms async scoring",
      guardrail: "Hallucination score threshold > 0.90 required",
      tech: "LLM-as-a-Judge Framework / Python",
    },
  ],
  "alpha-lead-engine": [
    {
      step: 1,
      name: "Target Account Scraping",
      component: "Apify LinkedIn & Web Scraper",
      payload: "Search Parameters → Raw Prospect Profile JSON",
      latency: "1.2s batch extraction",
      guardrail: "Rate limit throttling & proxy IP rotation",
      tech: "Apify Actors / Docker",
    },
    {
      step: 2,
      name: "Qualification & Enrichment",
      component: "OpenAI GPT-4o Enrichment Engine",
      payload: "Raw Lead Data → Verified ICP Match Score",
      latency: "450ms analysis",
      guardrail: "Funding status verification & tech stack verification",
      tech: "OpenAI GPT-4o / FastAPI",
    },
    {
      step: 3,
      name: "n8n Workflow Dispatch",
      component: "n8n Orchestration Engine",
      payload: "Qualified Prospect Webhook Payload",
      latency: "60ms dispatch",
      guardrail: "Deduplication key check on email & domain",
      tech: "n8n Self-Hosted / Docker",
    },
    {
      step: 4,
      name: "Outreach & Supabase Logging",
      component: "Supabase DB & Email API",
      payload: "Personalized Message Body → DB Record",
      latency: "110ms execution",
      guardrail: "Unsubscribe compliance & domain warm-up cap",
      tech: "Supabase DB / Tailwind Email Template",
    },
  ],
  reframe: [
    {
      step: 1,
      name: "Local Encrypted Journaling",
      component: "Client Storage Security Layer",
      payload: "User Entry → Client-Side AES Encryption",
      latency: "< 10ms local execution",
      guardrail: "Zero PII transmitted to server without consent",
      tech: "Next.js / Web Crypto API",
    },
    {
      step: 2,
      name: "CBT Reframing Engine",
      component: "Gemini 1.5 Flash Cognitive Processor",
      payload: "Anonymized Thought → Reframed Perspective",
      latency: "280ms inference",
      guardrail: "Empathy guardrails & crisis hotline referral triggers",
      tech: "Google Gemini 1.5 Flash",
    },
    {
      step: 3,
      name: "Firebase Sync & Persistence",
      component: "Firebase Realtime Firestore",
      payload: "Encrypted State → Firestore Document",
      latency: "70ms cloud sync",
      guardrail: "Security Rules restricting access to verified UUID",
      tech: "Firebase Firestore / TypeScript",
    },
    {
      step: 4,
      name: "Analytics & Streak Graph",
      component: "Recharts Visualization Engine",
      payload: "Habit Score Logs → Interactive Progress Graph",
      latency: "< 20ms render",
      guardrail: "Offline mode fallback state caching",
      tech: "Recharts / Tailwind CSS",
    },
  ],
  "smooth-operator": [
    {
      step: 1,
      name: "Conversation OCR & Parser",
      component: "FastAPI Vision Processing Server",
      payload: "Chat Screenshot → Extracted Dialogue JSON",
      latency: "350ms OCR processing",
      guardrail: "Automatic PII & contact information redaction",
      tech: "FastAPI / Tesseract Vision",
    },
    {
      step: 2,
      name: "Pinecone Knowledge Retrieval",
      component: "Pinecone Vector Database",
      payload: "Dialogue Context → Vector Similarity Search",
      latency: "85ms vector query",
      guardrail: "Retrieval relevance threshold cutoff > 0.82",
      tech: "Pinecone Vector DB / Python",
    },
    {
      step: 3,
      name: "RAG Coaching Agent",
      component: "Gemini 2.0 Flash Reasoning Model",
      payload: "Conversation + Retrieved Advice → Tactical Suggestion",
      latency: "290ms LLM response",
      guardrail: "Non-toxic tone filter & authenticity check",
      tech: "Google Gemini 2.0 / TypeScript",
    },
    {
      step: 4,
      name: "Response Tone Options",
      component: "Next.js UI Option Generator",
      payload: "3 Response Tones: Casual, Direct, Witty",
      latency: "40ms UI update",
      guardrail: "One-click copy to clipboard integration",
      tech: "Next.js / Tailwind CSS",
    },
  ],
};

export function CaseStudyArchitecture({ project }: { project: Project }) {
  const Diagram = archMap[project.slug];
  const steps = archStepsMap[project.slug] || [];
  const [activeStep, setActiveStep] = useState(0);

  const currentDetail = steps[activeStep] || steps[0];

  return (
    <section className="py-16 md:py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
      <div className="cs-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <p className="cs-eyebrow mb-3">Architecture &amp; System Flow</p>
          <h2 className="cs-heading-h2">System Design Visualizer</h2>
        </motion.div>

        {/* Visual Diagram in Responsive Container */}
        {Diagram ? (
          <ResponsiveChartContainer name={`${project.title} Architecture Diagram`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mb-10"
            >
              {Diagram}
            </motion.div>
          </ResponsiveChartContainer>
        ) : (
          <div className="cs-surface p-10 text-center text-[#5A738E] font-mono text-sm mb-10">
            Architecture diagram coming soon
          </div>
        )}

        {/* INTERACTIVE ARCHITECTURE STEPPER INSPECTOR */}
        {steps.length > 0 && (
          <ResponsiveChartContainer name={`${project.title} Step Inspector`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 md:p-8 rounded-xl bg-[#0A2747] text-[#FFFEFA] border border-[rgba(255,255,255,0.16)] shadow-md mb-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[rgba(255,255,255,0.1)]">
                <div>
                  <span className="font-mono text-[11px] text-[#B98945] font-bold tracking-widest uppercase block mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    INTERACTIVE STEP INSPECTOR
                  </span>
                  <h3 className="font-sans font-bold text-lg md:text-xl text-[#FFFEFA]">
                    Step-by-Step System Execution Payload
                  </h3>
                </div>
                <div className="font-mono text-xs text-[#B98945] bg-[#12375F] px-3 py-1 rounded border border-[#B98945]/30">
                  Step {activeStep + 1} of {steps.length}
                </div>
              </div>

              {/* Stepper Buttons Bar */}
              <div className="flex flex-wrap gap-2 mb-6">
                {steps.map((s, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={s.step}
                      onClick={() => setActiveStep(idx)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all ${
                        isActive
                          ? "bg-[#B98945] text-white font-bold shadow-sm"
                          : "bg-[#12375F] text-[#CBD5E1] hover:bg-[#12375F]/80 hover:text-white border border-[rgba(255,255,255,0.1)]"
                      }`}
                    >
                      <span>0{s.step}</span>
                      <span className="truncate max-w-[120px] sm:max-w-[180px]">{s.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Details Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-lg bg-[#12375F] border border-[rgba(255,255,255,0.12)]"
                >
                  {/* Left side details */}
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-[10px] text-[#B98945] uppercase tracking-wider font-bold block mb-1">
                        COMPONENT / NODE
                      </span>
                      <h4 className="font-sans font-bold text-base text-[#FFFEFA] flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#B98945]" />
                        {currentDetail.component}
                      </h4>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-[#B98945] uppercase tracking-wider font-bold block mb-1">
                        DATA / PAYLOAD FORMAT
                      </span>
                      <p className="text-xs font-mono text-[#CBD5E1] bg-[#0A2747] p-2.5 rounded border border-[rgba(255,255,255,0.08)] flex items-start gap-2">
                        <Terminal className="w-4 h-4 text-[#B98945] shrink-0 mt-0.5" />
                        <span>{currentDetail.payload}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right side benchmarks & guardrails */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <span className="font-mono text-[10px] text-[#B98945] uppercase tracking-wider font-bold block mb-1">
                          LATENCY TARGET
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#FFFEFA]">
                          <Clock className="w-3.5 h-3.5 text-[#B98945]" />
                          <span>{currentDetail.latency}</span>
                        </div>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] text-[#B98945] uppercase tracking-wider font-bold block mb-1">
                          TECHNOLOGY USED
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#FFFEFA]">
                          <Code2 className="w-3.5 h-3.5 text-[#B98945]" />
                          <span>{currentDetail.tech}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-[#B98945] uppercase tracking-wider font-bold block mb-1">
                        SAFETY GUARDRAIL / FAILOVER
                      </span>
                      <div className="p-2.5 rounded bg-[#0A2747] border-l-3 border-l-[#B98945] text-xs font-sans text-[#F8FAFC] flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#B98945] shrink-0 mt-0.5" />
                        <span>{currentDetail.guardrail}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </ResponsiveChartContainer>
        )}

        {/* Engineering Decisions */}
        {project.engineeringDecisions.length > 0 && (
          <div className="space-y-3">
            <p className="cs-eyebrow mb-4">Key Engineering Decisions</p>
            {project.engineeringDecisions.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: i * 0.08 }}
                className="flex items-start gap-3.5 p-4.5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] shadow-2xs hover:border-[#B98945]/40 transition-all"
              >
                <span className="text-[#B98945] font-bold text-base mt-0.5 flex-shrink-0">✦</span>
                <p className="text-small text-[#0A2747] leading-relaxed font-medium">{d}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
