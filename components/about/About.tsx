"use client";

import React from "react";
import { IndiaToSpainSvg } from "@/components/svg/IndiaToSpainSvg";

export function About() {
  return (
    <section id="about" className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
      <div className="wrap">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="eyebrow block mb-3">ABOUT</div>

          {/* Headline */}
          <h2 className="heading-h2 text-[#0A2747] mb-8">
            I turn AI concepts into systems that can operate in the real world.
          </h2>

          {/* Narrative Body */}
          <div className="space-y-6 text-body">
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
          <blockquote className="my-10 p-6 md:p-8 rounded-md bg-[#F6F3EC] border-l-4 border-[#B98945]">
            <p className="font-sans font-semibold text-xl md:text-2xl text-[#0A2747] leading-snug italic">
              &ldquo;Good AI engineering is not about making a model sound intelligent. It is about designing a system that behaves reliably.&rdquo;
            </p>
          </blockquote>

          {/* India to Spain SVG Route Illustration */}
          <IndiaToSpainSvg />
        </div>
      </div>
    </section>
  );
}
