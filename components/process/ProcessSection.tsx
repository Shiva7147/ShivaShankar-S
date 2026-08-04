"use client";

import React from "react";
import { ProcessSvg } from "@/components/svg/ProcessSvg";

export function ProcessSection() {
  return (
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)] bg-[#FFFEFA]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">PROCESS</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-6">
          How I move from an idea to a reliable AI system.
        </h2>

        <p className="text-lead max-w-3xl mb-12">
          Building AI applications that survive real-world edge cases requires a systematic engineering discipline rather than rapid prompt tinkering.
        </p>

        {/* 7 Step Interactive Process Grid & SVG */}
        <ProcessSvg />
      </div>
    </section>
  );
}
