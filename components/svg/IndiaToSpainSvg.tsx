"use client";

import React from "react";

export function IndiaToSpainSvg() {
  return (
    <div className="w-full relative my-4">
      <svg
        className="w-full h-auto max-h-[160px]"
        viewBox="0 0 680 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="spain-route-title spain-route-desc"
      >
        <title id="spain-route-title">Career Direction: Bengaluru, India to Spain</title>
        <desc id="spain-route-desc">
          Abstract geographic coordinate route illustrating Shiva&apos;s ongoing work in Bengaluru and clear long-term direction toward Spain and the European AI ecosystem.
        </desc>

        <style>{`
          @keyframes travelDot {
            0% { stroke-dashoffset: 280; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-route-dot {
            stroke-dasharray: 8, 20;
            animation: travelDot 4s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-route-dot { animation: none !important; }
          }
        `}</style>

        {/* Background Subtle Arc Line */}
        <path
          d="M 120 75 Q 340 15 560 75"
          stroke="rgba(10,39,71,0.14)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />

        {/* Active Animated Brass Route */}
        <path
          d="M 120 75 Q 340 15 560 75"
          stroke="#B98945"
          strokeWidth="2"
          fill="none"
          className="animate-route-dot"
        />

        {/* 1. Origin Node — Bengaluru */}
        <g id="node-bengaluru">
          <circle cx="120" cy="75" r="14" fill="#FFFEFA" stroke="#0A2747" strokeWidth="1.5" />
          <circle cx="120" cy="75" r="5" fill="#12375F" />

          {/* Radar Ring */}
          <circle cx="120" cy="75" r="22" stroke="#12375F" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.5" />

          {/* Labels */}
          <text x="120" y="112" textAnchor="middle" fill="#0A2747" fontSize="13" fontWeight="700" fontFamily="Geist, sans-serif">
            Bengaluru, India
          </text>
          <text x="120" y="127" textAnchor="middle" fill="#B98945" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono">
            BUILDING NOW
          </text>
        </g>

        {/* Direction Badge in Center with Solid Masking Background */}
        <g transform="translate(340, 45)">
          {/* Solid fill rect masks out the dashed arc behind it */}
          <rect x="-60" y="-14" width="120" height="28" rx="14" fill="#F6F3EC" stroke="#B98945" strokeWidth="1.5" />
          <text x="0" y="4" textAnchor="middle" fill="#0A2747" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono" letterSpacing="0.08em">
            INTERNATIONAL ↗
          </text>
        </g>

        {/* 2. Destination Node — Spain */}
        <g id="node-spain">
          <circle cx="560" cy="75" r="14" fill="#FFFEFA" stroke="#B98945" strokeWidth="2" />
          <circle cx="560" cy="75" r="6" fill="#B98945" />

          {/* Outer Pulse Ring */}
          <circle cx="560" cy="75" r="24" stroke="#B98945" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

          {/* Labels */}
          <text x="560" y="112" textAnchor="middle" fill="#0A2747" fontSize="13" fontWeight="700" fontFamily="Geist, sans-serif">
            Spain / Europe
          </text>
          <text x="560" y="127" textAnchor="middle" fill="#12375F" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono">
            LONG-TERM DIRECTION
          </text>
        </g>
      </svg>
    </div>
  );
}
