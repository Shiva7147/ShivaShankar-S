"use client";

import React, { useState } from "react";
import { Check, Layers } from "lucide-react";
import { ResponsiveChartContainer } from "@/components/ui/ResponsiveChartContainer";

const matrixProjects = [
  {
    name: "AthleteIQ",
    subtitle: "AI Sports Science RAG Agent",
    techs: ["Python", "LangGraph", "ChromaDB", "Hugging Face", "OpenRouter", "LLM-as-Judge"]
  },
  {
    name: "AI Receptionist",
    subtitle: "Voice Automation Platform",
    techs: ["Next.js", "TypeScript", "Node.js", "Fastify", "Supabase", "Twilio Voice", "Gemini", "Railway"]
  },
  {
    name: "Alpha Lead Engine",
    subtitle: "Outbound Sales Automation",
    techs: ["Next.js", "FastAPI", "Supabase", "OpenAI", "n8n", "Apify", "Docker", "Tailwind CSS"]
  },
  {
    name: "Reframe",
    subtitle: "Private AI Habit Recovery",
    techs: ["Next.js", "TypeScript", "Gemini", "Firebase", "Recharts", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Smooth Operator",
    subtitle: "Dating AI RAG Coach",
    techs: ["Next.js", "TypeScript", "Gemini", "FastAPI", "Pinecone", "Tailwind CSS", "Vercel"]
  }
];

const allTechs = [
  "Python",
  "Next.js",
  "TypeScript",
  "LangGraph",
  "Gemini",
  "OpenAI",
  "FastAPI",
  "Fastify",
  "Supabase",
  "Firebase",
  "ChromaDB",
  "Pinecone",
  "Docker",
  "Twilio Voice",
  "n8n"
];

export function TechMatrixSvg() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <ResponsiveChartContainer name="Architecture Matrix" ariaLabel="Project x Technology Matrix">
      {(breakpoint) => (
        <div className="w-full my-8 bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 md:p-8 shadow-sm">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-[rgba(10,39,71,0.08)]">
            <div>
              <span className="font-mono text-[11px] text-[#B98945] font-bold tracking-widest uppercase block mb-1">
                INTERACTIVE ARCHITECTURE MATRIX
              </span>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-[#0A2747]">
                Project × Technology Architecture Mapping
              </h3>
            </div>
            {hoveredTech && (
              <div className="self-start md:self-auto px-3 py-1 bg-[#B98945]/10 border border-[#B98945]/30 rounded-md text-xs font-mono text-[#0A2747]">
                Filter: <span className="font-bold text-[#B98945]">{hoveredTech}</span>
              </div>
            )}
          </div>

          {/* Breakpoint Decision: Desktop/Tablet Table vs Mobile Stacked Cards */}
          {breakpoint === "mobile" ? (
            /* Mobile Card-Based Architecture View (ZERO SCROLL OVERFLOW) */
            <div className="space-y-4">
              {matrixProjects.map((proj) => (
                <div
                  key={proj.name}
                  className="p-4 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-sans font-bold text-base text-[#0A2747]">{proj.name}</h4>
                      <p className="text-xs font-mono text-[#5A738E]">{proj.subtitle}</p>
                    </div>
                    <Layers className="w-4 h-4 text-[#B98945]" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.techs.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#FFFEFA] text-[#0A2747] border border-[rgba(10,39,71,0.12)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop & Tablet Table View */
            <div className="w-full overflow-x-auto pb-4">
              <table className="w-full min-w-[850px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[rgba(10,39,71,0.12)]">
                    <th className="py-4 px-4 font-mono text-xs text-[#0A2747] font-bold min-w-[210px] w-[210px] sticky left-0 bg-[#FFFEFA] z-20 border-r border-[rgba(10,39,71,0.08)] shadow-[2px_0_6px_rgba(0,0,0,0.03)]">
                      PROJECT NAME
                    </th>
                    {allTechs.map((tech) => {
                      const isHovered = hoveredTech === tech;
                      return (
                        <th
                          key={tech}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          className={`py-4 px-2 text-center font-mono text-xs cursor-pointer transition-colors min-w-[85px] ${
                            isHovered ? "text-[#B98945] font-bold bg-[#B98945]/10" : "text-[#5A738E]"
                          }`}
                        >
                          <span className="block truncate max-w-[80px] mx-auto" title={tech}>
                            {tech}
                          </span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {matrixProjects.map((proj) => {
                    const isProjHovered = hoveredProject === proj.name;
                    return (
                      <tr
                        key={proj.name}
                        onMouseEnter={() => setHoveredProject(proj.name)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className={`border-b border-[rgba(10,39,71,0.06)] transition-colors ${
                          isProjHovered ? "bg-[#F6F3EC]" : "hover:bg-[#F6F3EC]/60"
                        }`}
                      >
                        <td className="py-4 px-4 sticky left-0 bg-[#FFFEFA] z-20 border-r border-[rgba(10,39,71,0.08)] shadow-[2px_0_6px_rgba(0,0,0,0.03)] min-w-[210px] w-[210px]">
                          <div className="font-sans font-bold text-sm text-[#0A2747] whitespace-nowrap">{proj.name}</div>
                          <div className="text-xs text-[#5A738E] font-medium whitespace-nowrap">{proj.subtitle}</div>
                        </td>

                        {allTechs.map((tech) => {
                          const hasTech = proj.techs.includes(tech);
                          const isTechMatched = hoveredTech === tech;
                          return (
                            <td
                              key={tech}
                              onMouseEnter={() => setHoveredTech(tech)}
                              onMouseLeave={() => setHoveredTech(null)}
                              className={`py-4 px-2 text-center align-middle cursor-pointer min-w-[85px] transition-colors ${
                                isTechMatched ? "bg-[#B98945]/10" : ""
                              }`}
                            >
                              {hasTech ? (
                                <div
                                  className={`w-5 h-5 rounded-full mx-auto flex items-center justify-center transition-all ${
                                    isTechMatched
                                      ? "bg-[#B98945] ring-2 ring-[#B98945]/40 scale-110"
                                      : "bg-[#12375F]"
                                  }`}
                                >
                                  <Check className="w-3 h-3 text-white stroke-[3]" />
                                </div>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-[rgba(10,39,71,0.12)] inline-block" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-[rgba(10,39,71,0.08)] text-[11px] font-mono text-[#5A738E] flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="hidden md:inline">← SCROLL HORIZONTALLY TO VIEW ALL TECH STACKS →</span>
            <span className="md:hidden">5 PRODUCTION SYSTEMS ARCHITECTURE MAPPED</span>
            <span>HOVER OR TAP TO HIGHLIGHT INTEGRATIONS</span>
          </div>
        </div>
      )}
    </ResponsiveChartContainer>
  );
}
