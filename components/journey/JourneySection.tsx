"use client";

import React from "react";
import { timelineData } from "@/data/timeline";
import { MapPin, ArrowRight } from "lucide-react";

export function JourneySection() {
  return (
    <section id="journey" className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">JOURNEY</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-12">
          Building toward a career in applied AI engineering.
        </h2>

        {/* Timeline */}
        <div className="relative max-w-4xl border-l-2 border-[rgba(10,39,71,0.15)] pl-6 md:pl-10 ml-3 md:ml-6 space-y-12">
          {timelineData.map((item, idx) => (
            <div key={item.year + idx} className="relative group">
              {/* Milestone Node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 transition-all ${
                  item.highlight
                    ? "bg-[#B98945] stroke-[#B98945] ring-4 ring-[#B98945]/20 scale-125"
                    : "bg-[#FFFEFA] border-[#12375F] group-hover:border-[#B98945]"
                }`}
              />

              <div className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-sm font-bold ${
                      item.highlight ? "text-[#B98945]" : "text-[#12375F]"
                    }`}
                  >
                    {item.year}
                  </span>
                  {item.subtitle && (
                    <span className="text-xs font-mono text-[#5A738E] border-l border-[rgba(10,39,71,0.15)] pl-2">
                      {item.subtitle}
                    </span>
                  )}
                </div>

                <h3 className="font-sans font-bold text-xl text-[#0A2747]">
                  {item.title}
                </h3>

                <p className="text-body text-xs md:text-sm text-[#5A738E] leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                {item.highlight && (
                  <div className="mt-3 p-3 rounded bg-[#FFFEFA] border border-[#B98945]/30 inline-flex items-center gap-2 text-xs font-mono text-[#0A2747]">
                    <MapPin className="w-3.5 h-3.5 text-[#B98945]" />
                    <span>Target Market Focus: Spain & Wider European AI Ecosystem</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B98945]" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
