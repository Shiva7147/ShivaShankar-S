"use client";

import React from "react";
import Image from "next/image";

export function HeroDomePortrait() {
  return (
    <div className="relative w-full max-w-[340px] aspect-[4/5] mx-auto group">
      {/* Outer SVG Architectural Orbit & Coordinate Framing */}
      <svg
        viewBox="0 0 340 425"
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Architectural Hairline Border */}
        <path
          d="M10 170 C10 80, 80 10, 170 10 C260 10, 330 80, 330 170 L330 415 L10 415 Z"
          stroke="rgba(10, 39, 71, 0.16)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Orbit Arc */}
        <path
          d="M 25 170 A 145 145 0 0 1 315 170"
          stroke="#B98945"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="opacity-60"
        />

        {/* Corner Coordinate Ticks */}
        <g stroke="#B98945" strokeWidth="1.5" className="opacity-80">
          <line x1="10" y1="10" x2="25" y2="10" />
          <line x1="10" y1="10" x2="10" y2="25" />
          <line x1="330" y1="10" x2="315" y2="10" />
          <line x1="330" y1="10" x2="330" y2="25" />
        </g>

        {/* Coordinate Text */}
        <text x="18" y="405" fill="#5A738E" fontSize="9" fontFamily="monospace" letterSpacing="1">
          12.9716° N, 77.5946° E
        </text>
        <text x="245" y="405" fill="#B98945" fontSize="9" fontFamily="monospace" fontWeight="bold">
          SYS // 2026
        </text>

        {/* Pulse Brass Nodes */}
        <circle cx="170" cy="10" r="3.5" fill="#B98945" />
        <circle cx="10" cy="170" r="3" fill="#0A2747" />
        <circle cx="330" cy="170" r="3" fill="#0A2747" />
      </svg>

      {/* Dome Container Masking Image */}
      <div
        className="w-full h-full relative overflow-hidden bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] shadow-md transition-all duration-500 group-hover:border-[#B98945] group-hover:shadow-xl"
        style={{
          borderRadius: "160px 160px 8px 8px"
        }}
      >
        <Image
          src="/images/shiva-headshot.jpg"
          alt="Shiva Shankar S — AI Engineer"
          fill
          priority
          quality={100}
          unoptimized={true}
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover object-top filter grayscale contrast-[1.04] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2747]/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bottom Name Tag Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-[#FFFEFA]/95 backdrop-blur-md border border-[rgba(10,39,71,0.14)] px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#B98945] animate-pulse" />
        <span className="font-mono text-xs font-bold text-[#0A2747] tracking-tight">
          SHIVA SHANKAR S
        </span>
      </div>
    </div>
  );
}
