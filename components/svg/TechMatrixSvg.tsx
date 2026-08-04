"use client";

import React, { useState } from "react";

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
  "Docker",
  "Twilio Voice",
  "n8n"
];

export function TechMatrixSvg() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="w-full my-8 bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] rounded-lg p-4 md:p-6 shadow-xs overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-widest uppercase block">
            INTERACTIVE ARCHITECTURE MATRIX
          </span>
          <h3 className="font-sans font-bold text-lg md:text-xl text-[#0A2747] mt-0.5">
            Project × Technology Architecture Mapping
          </h3>
        </div>
        {hoveredTech && (
          <div className="self-start md:self-auto px-3 py-1 bg-[#B98945]/10 border border-[#B98945]/30 rounded text-xs font-mono text-[#0A2747]">
            Filter: <span className="font-bold">{hoveredTech}</span>
          </div>
        )}
      </div>

      {/* Responsive Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-2">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[rgba(10,39,71,0.12)]">
              <th className="py-3 px-3 font-mono text-xs text-[#5A738E] font-semibold w-48 sticky left-0 bg-[#FFFEFA] z-10">
                PROJECT NAME
              </th>
              {allTechs.map((tech) => {
                const isHovered = hoveredTech === tech;
                return (
                  <th
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`py-3 px-2 text-center font-mono text-[11px] cursor-pointer transition-colors ${
                      isHovered ? "text-[#B98945] font-bold bg-[#B98945]/5" : "text-[#5A738E]"
                    }`}
                  >
                    <span className="block truncate max-w-[55px] mx-auto" title={tech}>
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
                    isProjHovered ? "bg-[#F6F3EC]" : "hover:bg-[#F6F3EC]/50"
                  }`}
                >
                  <td className="py-3.5 px-3 sticky left-0 bg-inherit z-10">
                    <div className="font-sans font-bold text-xs md:text-sm text-[#0A2747]">{proj.name}</div>
                    <div className="text-[11px] text-[#5A738E] truncate max-w-[170px]">{proj.subtitle}</div>
                  </td>

                  {allTechs.map((tech) => {
                    const hasTech = proj.techs.includes(tech);
                    const isTechMatched = hoveredTech === tech;
                    return (
                      <td
                        key={tech}
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className={`py-3.5 px-2 text-center align-middle cursor-pointer transition-colors ${
                          isTechMatched ? "bg-[#B98945]/10" : ""
                        }`}
                      >
                        {hasTech ? (
                          <div
                            className={`w-4 h-4 rounded-full mx-auto flex items-center justify-center transition-all ${
                              isTechMatched
                                ? "bg-[#B98945] ring-2 ring-[#B98945]/40 scale-110"
                                : "bg-[#12375F]"
                            }`}
                          >
                            <span className="text-[9px] text-white font-mono font-bold leading-none">✓</span>
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

      <div className="mt-3 text-[11px] font-mono text-[#5A738E] flex items-center justify-between">
        <span>← SCROLL HORIZONTALLY TO VIEW ALL TECH →</span>
        <span>HOVER COLUMN OR ROW TO HIGHLIGHT INTEGRATIONS</span>
      </div>
    </div>
  );
}
