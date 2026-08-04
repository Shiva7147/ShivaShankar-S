"use client";

import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Github, CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import { AthleteIqArchSvg } from "@/components/svg/AthleteIqArchSvg";
import { AiReceptionistArchSvg } from "@/components/svg/AiReceptionistArchSvg";
import { AlphaLeadEngineArchSvg } from "@/components/svg/AlphaLeadEngineArchSvg";
import { ReframeArchSvg } from "@/components/svg/ReframeArchSvg";
import { SmoothOperatorArchSvg } from "@/components/svg/SmoothOperatorArchSvg";
import { EvalChartSvg } from "@/components/svg/EvalChartSvg";

interface Props {
  project: Project;
  isEven: boolean;
}

export function ProjectCaseStudy({ project, isEven }: Props) {
  const renderArchSvg = () => {
    switch (project.id) {
      case "athleteiq":
        return (
          <div className="space-y-4">
            <AthleteIqArchSvg />
            <EvalChartSvg />
          </div>
        );
      case "alpha-receptionist":
        return <AiReceptionistArchSvg />;
      case "alpha-lead-engine":
        return <AlphaLeadEngineArchSvg />;
      case "reframe":
        return <ReframeArchSvg />;
      case "smooth-operator":
        return <SmoothOperatorArchSvg />;
      default:
        return null;
    }
  };

  return (
    <article id={project.id} className="py-16 border-b border-[rgba(10,39,71,0.12)] last:border-b-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left/Right Text Content Column */}
        <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#B98945] font-bold px-2 py-0.5 bg-[#B98945]/10 rounded">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-[#5A738E] uppercase tracking-wider">CASE STUDY</span>
            </div>
            <h3 className="font-sans font-bold text-3xl md:text-4xl text-[#0A2747]">{project.title}</h3>
            <p className="font-mono text-sm text-[#B98945] font-medium">{project.subtitle}</p>
          </div>

          {/* Project Summary */}
          <p className="text-body font-medium text-[#0A2747] bg-[#FFFEFA] p-4 rounded border-l-2 border-[#12375F]">
            {project.summary}
          </p>

          {/* Problem & Solution Grid */}
          <div className="space-y-4">
            <div className="p-4 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)]">
              <h4 className="font-sans font-bold text-sm text-[#0A2747] mb-1 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#B98945]" />
                The Problem
              </h4>
              <p className="text-xs text-[#5A738E] leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-4 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)]">
              <h4 className="font-sans font-bold text-sm text-[#0A2747] mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12375F]" />
                The System Solution
              </h4>
              <p className="text-xs text-[#12375F] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Modules List if present */}
          {project.modules && (
            <div className="space-y-2">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0A2747]">
                6 Focused AI Modules
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.modules.map((m) => (
                  <div key={m.name} className="p-2.5 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.08)]">
                    <span className="font-sans font-bold text-xs text-[#0A2747] block">{m.name}</span>
                    <span className="text-[11px] text-[#5A738E] leading-snug block">{m.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Capabilities */}
          <div className="space-y-2">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0A2747]">
              Key Capabilities & Guardrails
            </h4>
            <ul className="space-y-1.5">
              {project.capabilities.map((cap) => (
                <li key={cap} className="text-xs text-[#12375F] flex items-start gap-2">
                  <span className="text-[#B98945] font-bold">•</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlighted Engineering Decisions */}
          <div className="p-4 rounded bg-[#F6F3EC] border-l-3 border-[#B98945]">
            <h4 className="font-mono text-xs font-bold text-[#B98945] uppercase tracking-wider mb-2">
              ENGINEERING DECISION HIGHLIGHT
            </h4>
            {project.engineeringDecisions.map((dec, i) => (
              <p key={i} className="text-xs text-[#0A2747] font-medium leading-relaxed italic mb-1.5 last:mb-0">
                &ldquo;{dec}&rdquo;
              </p>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0A2747]">
              Production Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 bg-[#FFFEFA] text-[#0A2747] rounded border border-[rgba(10,39,71,0.12)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links & "What this demonstrates" */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[rgba(10,39,71,0.08)]">
            <div className="flex items-center gap-3 flex-wrap">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-1.5 px-3"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B98945] hover:text-[#0A2747] transition-colors group"
              >
                <span>View Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="text-[11px] font-mono text-[#5A738E] italic">
              Demonstrates: <span className="text-[#0A2747] font-bold not-italic">{project.demonstrates}</span>
            </div>
          </div>
        </div>

        {/* Architecture Diagram Column */}
        <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          {renderArchSvg()}
        </div>
      </div>
    </article>
  );
}
