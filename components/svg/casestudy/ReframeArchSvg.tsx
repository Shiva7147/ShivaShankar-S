"use client";

import React from "react";
import { Lock, Shield } from "lucide-react";

export function ReframeArchSvg() {
  return (
    <div className="w-full bg-[#FFFEFA] border border-[rgba(10,39,71,0.14)] rounded-xl p-5 sm:p-6 shadow-xs space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(10,39,71,0.08)]">
        <div>
          <span className="font-mono text-[11px] text-[#7C3AED] font-bold tracking-wider uppercase block">
            PRIVACY-FIRST CLIENT-SIDE ARCHITECTURE
          </span>
          <h4 className="font-sans font-bold text-base text-[#0A2747] mt-0.5">
            Reframe Encryption &amp; Boundary Guardrails
          </h4>
        </div>
        <span className="text-[10px] font-mono text-[#7C3AED] bg-[#7C3AED]/10 px-2.5 py-1 rounded border border-[#7C3AED]/20 self-start sm:self-auto font-bold">
          Zero Plaintext Server
        </span>
      </div>

      {/* Browser vs Cloud Boundary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Client Boundary (Browser Zone) */}
        <div className="p-4 rounded-lg bg-[#7C3AED]/5 border-2 border-[#7C3AED]/30 space-y-3 min-w-0">
          <div className="flex items-center justify-between border-b border-[#7C3AED]/20 pb-2">
            <div className="flex items-center gap-2 text-[#7C3AED]">
              <Lock className="w-4 h-4 shrink-0" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">BROWSER (CLIENT ZONE)</span>
            </div>
            <span className="text-[10px] font-mono text-[#7C3AED] font-bold">Web Crypto API</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-md bg-[#FFFEFA] border border-[#7C3AED]/20 text-[#0A2747] leading-relaxed">
              <strong>PBKDF2 Key Derivation:</strong> Device-local encryption key from user passphrase.
            </div>
            <div className="p-2.5 rounded-md bg-[#FFFEFA] border border-[#7C3AED]/20 text-[#0A2747] leading-relaxed">
              <strong>AES-GCM 256-Bit:</strong> Client-side encryption before writing data.
            </div>
            <div className="p-2.5 rounded-md bg-[#FFFEFA] border border-[#7C3AED]/20 text-[#0A2747] leading-relaxed">
              <strong>IndexedDB &amp; PWA:</strong> Offline-first local store for instant response.
            </div>
          </div>
        </div>

        {/* Server Boundary (Cloud Zone) */}
        <div className="p-4 rounded-lg bg-[#F6F3EC] border border-[rgba(10,39,71,0.12)] space-y-3 min-w-0">
          <div className="flex items-center justify-between border-b border-[rgba(10,39,71,0.10)] pb-2">
            <div className="flex items-center gap-2 text-[#12375F]">
              <Shield className="w-4 h-4 shrink-0" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">CLOUD (SERVER ZONE)</span>
            </div>
            <span className="text-[10px] font-mono text-[#5A738E] font-bold">Ciphertext Only</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-md bg-[#FFFEFA] border border-[rgba(10,39,71,0.08)] text-[#0A2747] leading-relaxed">
              <strong>Firebase Firestore:</strong> Stores encrypted ciphertext blobs.
            </div>
            <div className="p-2.5 rounded-md bg-[#FFFEFA] border border-[rgba(10,39,71,0.08)] text-[#0A2747] leading-relaxed">
              <strong>Gemini 2.0 Flash:</strong> Contextual behavioral AI within safety prompt guardrails.
            </div>
            <div className="p-2.5 rounded-md bg-[#FFFEFA] border border-[rgba(10,39,71,0.08)] text-[#0A2747] leading-relaxed">
              <strong>Firebase Auth:</strong> Anonymous authentication — no PII required.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
