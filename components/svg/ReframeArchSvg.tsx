"use client";

import React from "react";
import { Lock, Shield } from "lucide-react";

export function ReframeArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-lg p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#B98945] font-semibold tracking-wider uppercase block">
            PRIVACY-FIRST AI ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Reframe Client-Side Encryption & Offline Flow
          </h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#0A2747] bg-[#B98945]/10 px-2.5 py-1 rounded border border-[#B98945]/30">
          <Lock className="w-3.5 h-3.5 text-[#B98945]" />
          <span>AES-GCM 256-bit</span>
        </div>
      </div>

      {/* Main Flow Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">1. ASSESSMENT & AI</span>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Weighted Onboarding</div>
          <div className="text-[11px] font-mono text-[#5A738E]">Gemini 2.0 Flash Support</div>
        </div>

        <div className="p-3.5 rounded bg-[#FFFEFA] border-2 border-[#B98945] shadow-xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#B98945] font-bold">2. URGE INTERRUPT</span>
            <Shield className="w-3.5 h-3.5 text-[#B98945]" />
          </div>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Real-Time Tooling</div>
          <div className="text-[11px] font-mono text-[#B98945]">Immediate Interventions</div>
        </div>

        <div className="p-3.5 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-1">
          <span className="font-mono text-[10px] text-[#5A738E] font-semibold">3. OFFLINE SYNC</span>
          <div className="font-sans font-bold text-xs text-[#0A2747]">Recharts Viz & PWA</div>
          <div className="text-[11px] font-mono text-[#5A738E]">IndexedDB + Service Worker</div>
        </div>
      </div>

      {/* Client Privacy Boundary Highlight Box */}
      <div className="p-4 rounded bg-[#F6F3EC] border-2 stroke-dashed border-[#B98945]/40 space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#B98945] text-white font-mono text-[10px] font-bold tracking-wider uppercase">
            🔒 CLIENT PRIVACY BOUNDARY
          </span>
          <span className="text-xs font-mono text-[#0A2747] font-semibold">
            Web Crypto API + PBKDF2 Key Derivation
          </span>
        </div>

        <p className="text-xs text-[#0A2747] leading-relaxed">
          Guaranteed Privacy Principle: Plaintext personal habit journals are encrypted on the user&apos;s browser before being stored in Firebase Firestore.
        </p>
      </div>
    </div>
  );
}
