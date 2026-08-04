"use client";

import React from "react";
import { ResearchSvg } from "@/components/svg/ResearchSvg";
import { Award } from "lucide-react";

export function ResearchSection() {
  return (
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">RESEARCH</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-6">
          Exploring targeted machine unlearning for responsible LLM systems.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-[#B98945] font-mono text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#B98945]" />
              <span>IEEE IES GENERATIVE AI CHALLENGE — FINALIST PAPER</span>
            </div>

            <h3 className="font-sans font-bold text-2xl text-[#0A2747] leading-snug">
              Surgical Amnesia: A Framework for Targeted Machine Unlearning and Copyright Compliance in Large Language Models
            </h3>

            <p className="text-body text-[#12375F]">
              Co-authored a parameter-efficient machine unlearning framework using Llama 3.2 1B and LoRA with a negated cross-entropy objective. The work explored targeted data removal without full model retraining and considered obligations connected to data erasure, copyright compliance, GDPR Article 17, and the EU AI Act.
            </p>

            <div className="p-4 rounded bg-[#F6F3EC] border-l-3 border-[#B98945] text-xs text-[#0A2747] leading-relaxed">
              <strong>IEEE Challenge Outcome:</strong> The project reached the final round of the IEEE Industrial Electronics Society Generative AI Challenge. Revised methodology per reviewer feedback and submitted in camera-ready IEEE conference format.
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)] space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0A2747]">
              Research Focus Vectors
            </h4>
            <ul className="space-y-2 text-xs text-[#12375F]">
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Parameter-Efficient LoRA Unlearning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Negated Cross-Entropy Objective</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>GDPR &ldquo;Right to be Forgotten&rdquo; Compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>EU AI Act Data Erasure Alignment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B98945] font-bold">•</span>
                <span>Model Utility vs Forget Efficacy Trade-off</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Research SVG Illustration */}
        <ResearchSvg />
      </div>
    </section>
  );
}
