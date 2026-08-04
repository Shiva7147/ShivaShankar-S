"use client";

import React from "react";
import { skillCategoriesData, currentlyExploring } from "@/data/skills";
import { AiStackSvg } from "@/components/svg/AiStackSvg";
import { Sparkles } from "lucide-react";

export function Expertise() {
  return (
    <section id="expertise" className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">EXPERTISE</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-12">
          Engineering across the complete AI application stack.
        </h2>

        {/* 5 Editorial Competency Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={category.title}
              className="editorial-card flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs text-[#B98945] font-semibold mb-2">
                  0{idx + 1}
                </div>
                <h3 className="font-sans font-bold text-base text-[#0A2747] mb-4 pb-2 border-b border-[rgba(10,39,71,0.08)]">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-xs text-[#12375F] flex items-start gap-2">
                      <span className="text-[#B98945] font-bold select-none">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* "Currently Exploring" Strip */}
        <div className="p-4 md:p-6 rounded-md bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16">
          <div className="flex items-center gap-2 text-[#0A2747]">
            <Sparkles className="w-4 h-4 text-[#B98945]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              CURRENTLY EXPLORING:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-3 py-1 bg-[#F6F3EC] text-[#12375F] rounded border border-[rgba(10,39,71,0.08)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* AI Stack Interactive Layered SVG */}
        <div className="mt-12">
          <div className="mb-4">
            <span className="font-mono text-xs text-[#B98945] font-semibold tracking-wider uppercase">
              ARCHITECTURE SYSTEM STACK
            </span>
            <h3 className="font-sans font-bold text-xl text-[#0A2747] mt-1">
              Production AI Application Layers
            </h3>
          </div>
          <AiStackSvg />
        </div>
      </div>
    </section>
  );
}
