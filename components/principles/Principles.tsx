"use client";

import React from "react";

const principles = [
  {
    num: "01",
    title: "Reliability",
    quote: "AI systems should behave predictably where user trust, safety, money, or business operations are involved.",
    icon: (
      <svg className="w-10 h-10 text-[#B98945]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 24 8 L 28 14 L 35 12 L 35 19 L 42 22 L 38 28 L 42 34 L 35 37 L 35 44 L 28 42 L 24 48 L 20 42 L 13 44 L 13 37 L 6 34 L 10 28 L 6 22 L 13 19 L 13 12 L 20 14 Z" stroke="#12375F" strokeWidth="1.5" fill="#FFFEFA" />
        <path d="M 17 24 L 22 29 L 31 18" stroke="#B98945" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Evaluation",
    quote: "An AI application should be tested against defined behavior, not judged only by a convincing demo.",
    icon: (
      <svg className="w-10 h-10 text-[#B98945]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#12375F" strokeWidth="1.5" fill="#FFFEFA" />
        <line x1="8" y1="20" x2="40" y2="20" stroke="#12375F" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="20" y1="20" x2="20" y2="40" stroke="#12375F" strokeWidth="1" strokeDasharray="2 2" />
        <path d="M 12 34 L 18 28 L 24 32 L 34 22" stroke="#B98945" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="22" r="3" fill="#B98945" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Deterministic Boundaries",
    quote: "Calculations, rules, permissions, and critical workflows should use explicit software when deterministic code is more dependable than model generation.",
    icon: (
      <svg className="w-10 h-10 text-[#B98945]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="24" r="5" stroke="#12375F" strokeWidth="1.5" fill="#FFFEFA" />
        <path d="M 17 24 L 28 14 M 17 24 L 28 34" stroke="#12375F" strokeWidth="1.5" />
        <rect x="28" y="9" width="14" height="10" rx="2" stroke="#B98945" strokeWidth="1.5" fill="#FFFEFA" />
        <rect x="28" y="29" width="14" height="10" rx="2" stroke="#12375F" strokeWidth="1.5" fill="#F6F3EC" />
        <text x="35" y="16" textAnchor="middle" fill="#B98945" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">MATH</text>
        <text x="35" y="36" textAnchor="middle" fill="#12375F" fontSize="8" fontFamily="JetBrains Mono">LLM</text>
      </svg>
    )
  },
  {
    num: "04",
    title: "Human Oversight",
    quote: "Good automation knows when to pause, escalate, or return control to a person.",
    icon: (
      <svg className="w-10 h-10 text-[#B98945]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="24" r="7" stroke="#12375F" strokeWidth="1.5" fill="#FFFEFA" />
        <text x="16" y="27" textAnchor="middle" fill="#12375F" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">AI</text>
        <path d="M 23 24 L 31 24" stroke="#B98945" strokeWidth="2" strokeDasharray="2 2" />
        <polygon points="29,21 35,24 29,27" fill="#B98945" />
        <circle cx="38" cy="20" r="4" stroke="#0A2747" strokeWidth="1.5" />
        <path d="M 32 32 C 32 27 44 27 44 32" stroke="#0A2747" strokeWidth="1.5" />
      </svg>
    )
  }
];

export function Principles() {
  return (
    <section id="principles" className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        {/* Eyebrow */}
        <div className="eyebrow block mb-3">PRINCIPLES</div>

        {/* Headline */}
        <h2 className="heading-h2 text-[#0A2747] mb-12">
          The principles behind the systems I build.
        </h2>

        {/* 4 Editorial Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p) => (
            <div key={p.title} className="editorial-card flex flex-col justify-between space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-[#B98945] font-semibold block mb-1">
                    PRINCIPLE {p.num}
                  </span>
                  <h3 className="heading-h3 text-[#0A2747]">{p.title}</h3>
                </div>
                <div className="p-3 rounded bg-[#F6F3EC] border border-[rgba(10,39,71,0.08)]">
                  {p.icon}
                </div>
              </div>

              <blockquote className="text-lead text-[#12375F] font-normal leading-relaxed border-l-2 border-[#B98945] pl-4 italic">
                &ldquo;{p.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
