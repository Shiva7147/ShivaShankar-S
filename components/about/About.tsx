"use client";

import React from "react";
import { IndiaToSpainSvg } from "@/components/svg/IndiaToSpainSvg";
import { HeroDomePortrait } from "@/components/svg/HeroDomePortrait";

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">ABOUT SHIVA SHANKAR S</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="heading-h2 text-[#0A2747]">
              I turn AI concepts into systems that can operate in the real world.
            </h2>

            <div className="space-y-4 text-body text-[#12375F]">
              <p>
                I am an AI Engineer focused on building systems that go beyond conversational demos. My work spans retrieval-augmented generation, tool-calling agents, intelligent automation, voice interfaces, AI evaluation, safety guardrails, and production-grade full-stack development.
              </p>

              <p>
                I am especially interested in the boundary between probabilistic models and deterministic software. When accuracy matters, I prefer explicit tools, validated calculations, structured outputs, measurable evaluation, and human escalation rather than relying on a model to improvise.
              </p>

              <p>
                I currently build from Bengaluru, India, and I am working toward contributing to ambitious AI teams in Spain and the broader European technology ecosystem.
              </p>
            </div>

            {/* Editorial Pull Quote */}
            <blockquote className="p-6 rounded-lg bg-[#F6F3EC] border-l-4 border-[#B98945] shadow-xs">
              <p className="font-sans font-semibold text-lg md:text-xl text-[#0A2747] leading-snug italic">
                &ldquo;Good AI engineering is not about making a model sound intelligent. It is about designing a system that behaves reliably.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right Column: Profile Image Dome Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroDomePortrait />
          </div>
        </div>

        {/* India to Spain SVG Route Illustration */}
        <div className="pt-6 border-t border-[rgba(10,39,71,0.08)]">
          <IndiaToSpainSvg />
        </div>
      </div>
    </section>
  );
}
