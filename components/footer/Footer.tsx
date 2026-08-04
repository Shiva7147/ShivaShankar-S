"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#F6F3EC] text-[#0A2747]">
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[rgba(10,39,71,0.12)]">
          {/* Left Wordmark */}
          <div>
            <span className="font-sans font-bold text-lg tracking-tight block">
              SHIVA SHANKAR S
            </span>
            <span className="font-mono text-xs text-[#5A738E]">
              AI Engineer · RAG · Agents · Voice AI · Automation
            </span>
          </div>

          {/* Right Social Links */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#12375F] hover:text-[#B98945] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#12375F] hover:text-[#B98945] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-[#12375F] hover:text-[#B98945] transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#5A738E]">
          <div>© 2026 Shiva Shankar S. Built with intention.</div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#B98945] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
