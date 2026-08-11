"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { EditorialProjectItem } from "./EditorialProjectItem";
import { TechMatrixSvg } from "@/components/svg/TechMatrixSvg";

export function SelectedWork() {
  return (
    <section id="work" className="pt-8 pb-16">
      {/* Header Section */}
      <div className="wrap mb-12">
        <div className="eyebrow block mb-3">PRODUCTION SYSTEMS &amp; ARCHITECTURE</div>
        <h1 className="heading-display text-[#0A2747] mb-4">
          Selected AI Engineering Work
        </h1>
        <p className="text-lead max-w-3xl text-[#5A738E]">
          Explore production AI systems engineered across multi-step LLM agents, retrieval pipelines, real-time voice automation, client-side encryption, and workflow orchestration. Click any project to open the deep engineering case study.
        </p>
      </div>

      {/* Editorial Projects List — Alternating Themes */}
      <div className="space-y-0">
        {projectsData.map((project, idx) => (
          <EditorialProjectItem
            key={project.id}
            project={project}
            isFeatured={idx === 0}
            isDarkTheme={idx % 2 === 1}
          />
        ))}
      </div>

      {/* Interactive Architecture Matrix Visualizer */}
      <div className="wrap mt-16 pt-8">
        <TechMatrixSvg />
      </div>
    </section>
  );
}
