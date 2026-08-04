"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { TechMatrixSvg } from "@/components/svg/TechMatrixSvg";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">SELECTED WORK</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-4">
          AI products designed as complete systems.
        </h2>

        {/* Supporting Copy */}
        <p className="text-lead max-w-3xl mb-12">
          Each project is presented as an engineering case study: the problem, system architecture, design decisions, safeguards, evaluation, and production stack.
        </p>

        {/* 4 Case Studies */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <ProjectCaseStudy
              key={project.id}
              project={project}
              isEven={idx % 2 === 1}
            />
          ))}
        </div>

        {/* Technical Technology Matrix Visualizer */}
        <div className="mt-16 pt-12 border-t border-[rgba(10,39,71,0.12)]">
          <TechMatrixSvg />
        </div>
      </div>
    </section>
  );
}
