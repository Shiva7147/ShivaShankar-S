"use client";

import React from "react";

export function ContactSvg() {
  return (
    <div className="w-full relative my-4">
      <svg
        className="w-full h-auto max-h-[120px]"
        viewBox="0 0 540 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cross border collaboration line from Bengaluru to Spain"
      >
        <path d="M 60 50 Q 270 10 480 50" stroke="rgba(10,39,71,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        <path d="M 60 50 Q 270 10 480 50" stroke="#B98945" strokeWidth="2" fill="none" />

        <circle cx="60" cy="50" r="6" fill="#12375F" />
        <circle cx="480" cy="50" r="6" fill="#B98945" />

        <text x="60" y="78" textAnchor="middle" fill="#0A2747" fontSize="11" fontWeight="700" fontFamily="Geist, sans-serif">
          Bengaluru, India
        </text>
        <text x="60" y="90" textAnchor="middle" fill="#5A738E" fontSize="9" fontFamily="JetBrains Mono">
          BUILDING
        </text>

        <text x="480" y="78" textAnchor="middle" fill="#0A2747" fontSize="11" fontWeight="700" fontFamily="Geist, sans-serif">
          Spain / Europe
        </text>
        <text x="480" y="90" textAnchor="middle" fill="#B98945" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono">
          RELOCATING LONG TERM
        </text>

        <rect x="225" y="24" width="90" height="20" rx="10" fill="#FFFEFA" stroke="#B98945" strokeWidth="1" />
        <text x="270" y="37" textAnchor="middle" fill="#0A2747" fontSize="9" fontWeight="600" fontFamily="JetBrains Mono">
          COLLABORATE ↗
        </text>
      </svg>
    </div>
  );
}
