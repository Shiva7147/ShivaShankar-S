"use client";

import React from "react";

export function HeroDomePortrait() {
  return (
    <div className="relative group flex flex-col items-center">
      {/* Architectural Dome Container */}
      <div
        className="relative overflow-hidden bg-[#FFFEFA] border-[1.5px] border-[rgba(10,39,71,0.14)] transition-all duration-500 ease-out group-hover:border-[#B98945] group-hover:shadow-[0_12px_40px_rgba(185,137,69,0.12)] flex items-center justify-center"
        style={{
          width: "100%",
          maxWidth: "380px",
          height: "480px",
          borderRadius: "190px 190px 24px 24px"
        }}
      >
        {/* Subtle Architectural Orbit Lines & Coordinate Ticks (SVG Overlay) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          viewBox="0 0 380 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Top Arch Orbit Line */}
          <path
            d="M 20 190 A 170 170 0 0 1 360 190"
            stroke="#12375F"
            strokeWidth="0.75"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* Secondary Inner Arch */}
          <path
            d="M 40 190 A 150 150 0 0 1 340 190"
            stroke="#B98945"
            strokeWidth="0.75"
            opacity="0.3"
          />

          {/* Coordinate Crosshairs & Ticks */}
          <line x1="190" y1="15" x2="190" y2="45" stroke="#B98945" strokeWidth="1" />
          <line x1="20" y1="190" x2="40" y2="190" stroke="#12375F" strokeWidth="1" opacity="0.5" />
          <line x1="340" y1="190" x2="360" y2="190" stroke="#12375F" strokeWidth="1" opacity="0.5" />

          {/* Brass Nodes */}
          <circle cx="190" cy="20" r="3" fill="#B98945" />
          <circle cx="20" cy="190" r="2.5" fill="#12375F" />
          <circle cx="360" cy="190" r="2.5" fill="#12375F" />

          {/* Technical Metadata Ticks */}
          <text x="190" y="38" textAnchor="middle" fill="#5A738E" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.1em">
            12.9716° N, 77.5946° E
          </text>
          <text x="190" y="462" textAnchor="middle" fill="#B98945" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.15em">
            SHIVA SHANKAR S · AI ENGINEER
          </text>
        </svg>

        {/* Abstract Architectural Monogram & Silhouette Portrait Placeholder */}
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center transition-transform duration-500 ease-out group-hover:scale-[1.04]">
          {/* Subtle background gradient fill */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F3EC]/50 via-transparent to-[#B98945]/5" />

          {/* Headshot SVG Illustration */}
          <div className="relative z-0 my-auto flex flex-col items-center">
            <svg
              className="w-48 h-56 text-[#0A2747]"
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Portrait illustration placeholder for Shiva Shankar S"
            >
              <title>Shiva Shankar S — Architectural Portrait Placeholder</title>
              <desc>Abstract minimal vector portrait placeholder with technical grid lines and brass monogram.</desc>
              {/* Outer Glow Halo */}
              <circle cx="100" cy="90" r="65" fill="#B98945" fillOpacity="0.05" />

              {/* Head Outline */}
              <path
                d="M 60 90 C 60 55 140 55 140 90 C 140 120 125 140 100 140 C 75 140 60 120 60 90 Z"
                fill="#F6F3EC"
                stroke="#12375F"
                strokeWidth="1.5"
              />

              {/* Ears */}
              <circle cx="58" cy="95" r="7" fill="#FFFEFA" stroke="#12375F" strokeWidth="1" />
              <circle cx="142" cy="95" r="7" fill="#FFFEFA" stroke="#12375F" strokeWidth="1" />

              {/* Hairline / Glasses / Refined Minimal Silhouette Features */}
              <path
                d="M 64 80 C 75 60 125 60 136 80"
                stroke="#0A2747"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Glasses Frame */}
              <rect x="70" y="85" width="24" height="16" rx="3" stroke="#B98945" strokeWidth="1.5" fill="none" />
              <rect x="106" y="85" width="24" height="16" rx="3" stroke="#B98945" strokeWidth="1.5" fill="none" />
              <line x1="94" y1="91" x2="106" y2="91" stroke="#B98945" strokeWidth="1.5" />

              {/* Neck & Shoulders */}
              <path d="M 85 138 L 85 165 C 85 168 115 168 115 165 L 115 138" fill="#F6F3EC" stroke="#12375F" strokeWidth="1.5" />
              <path
                d="M 45 220 C 45 175 155 175 155 220"
                fill="#FFFEFA"
                stroke="#0A2747"
                strokeWidth="1.75"
              />

              {/* Collar detail */}
              <path d="M 85 168 L 100 195 L 115 168" stroke="#B98945" strokeWidth="1.25" fill="none" />

              {/* Monogram Overlay */}
              <text x="100" y="222" textAnchor="middle" fill="#0A2747" fontWeight="700" fontSize="16" fontFamily="Geist, sans-serif" letterSpacing="0.1em">
                SS
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Clear Code Comment instruction for headshot swap */}
      {/* 
        DEVELOPER INSTRUCTION:
        To replace this portrait placeholder with Shiva's final professional headshot image:
        1. Place your headshot file at `/public/images/shiva-headshot.jpg` or `.webp`.
        2. Replace the `<div className="relative w-full h-full ...">` above with an `<Image src="/images/shiva-headshot.jpg" fill className="object-cover rounded-[190px_190px_24px_24px]" alt="Shiva Shankar S — AI Engineer" priority />`.
      */}
      <div className="mt-3 text-[11px] font-mono text-[#5A738E] tracking-wider text-center">
        ARCHITECTURAL DOME PORTRAIT · BENGALURU
      </div>
    </div>
  );
}
