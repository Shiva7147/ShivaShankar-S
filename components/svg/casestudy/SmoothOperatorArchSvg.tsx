"use client";

import { motion } from "framer-motion";

// Smooth Operator — Input → RAG → Agentic Analysis → Reviewer Delivery
export function SmoothOperatorArchSvg() {
  const steps = [
    { label: "Profile Submission", sub: "Photos · Bio · Prompts · Messages", color: "#EC4899", x: 60, y: 80 },
    { label: "AI Pre-Analysis", sub: "Bio hook · Photo order · Tone", color: "#EC4899", x: 60, y: 190 },
    { label: "RAG Knowledge Base", sub: "Archetypes · Frameworks · Templates", color: "#A78BFA", x: 60, y: 300 },
    { label: "Archetype Matching", sub: "Profile → Improvement Framework", color: "#EC4899", x: 60, y: 410 },
    { label: "Reviewer Assignment", sub: "Tier routing · Human review", color: "#34D399", x: 350, y: 410 },
    { label: "Voice-Note Feedback", sub: "Personalized · Actionable delivery", color: "#34D399", x: 350, y: 300 },
    { label: "Improvement Plan", sub: "Photo swaps · Bio rewrites · Openers", color: "#F59E0B", x: 350, y: 190 },
    { label: "Follow-Up Session", sub: "Review changes · Measure improvement", color: "#F59E0B", x: 350, y: 80 },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 540" className="w-full max-w-xl mx-auto" style={{ height: "auto" }}>
        <defs>
          <linearGradient id="so-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D1117" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <filter id="glow5">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect width="560" height="540" fill="url(#so-bg)" rx="12" />

        {/* Left column nodes (0–3) */}
        {steps.slice(0, 4).map((s, i) => (
          <motion.g key={s.label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }}>
            <rect x={s.x} y={s.y} width="180" height="72" rx="8"
              fill={`${s.color}0D`} stroke={`${s.color}35`} strokeWidth="1.5" />
            <circle cx={s.x + 16} cy={s.y + 20} r="5" fill={s.color} filter="url(#glow5)" />
            <text x={s.x + 28} y={s.y + 25} fill="#F0F6FC" fontSize="11" fontWeight="600" fontFamily="system-ui">{s.label}</text>
            <text x={s.x + 14} y={s.y + 48} fill="#8B949E" fontSize="9" fontFamily="monospace">{s.sub}</text>

            {/* Arrow down */}
            {i < 3 && (
              <motion.line x1={s.x + 90} y1={s.y + 72} x2={s.x + 90} y2={s.y + 108}
                stroke={`${s.color}40`} strokeWidth="1.5" strokeDasharray="4 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.12 + 0.1, duration: 0.3 }} />
            )}
          </motion.g>
        ))}

        {/* Bottom connector (left → right) */}
        <motion.g>
          <motion.line x1="240" y1="446" x2="350" y2="446"
            stroke="#34D39940" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6, duration: 0.4 }} />
          <polygon points="347,442 354,446 347,450" fill="#34D39940" />
          <text x="295" y="440" fill="#484F58" fontSize="8" textAnchor="middle" fontFamily="monospace">routed to</text>
        </motion.g>

        {/* Right column nodes (4–7, bottom to top) */}
        {steps.slice(4).map((s, i) => (
          <motion.g key={s.label} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.12 }}>
            <rect x={s.x} y={s.y} width="180" height="72" rx="8"
              fill={`${s.color}0D`} stroke={`${s.color}35`} strokeWidth="1.5" />
            <circle cx={s.x + 16} cy={s.y + 20} r="5" fill={s.color} filter="url(#glow5)" />
            <text x={s.x + 28} y={s.y + 25} fill="#F0F6FC" fontSize="11" fontWeight="600" fontFamily="system-ui">{s.label}</text>
            <text x={s.x + 14} y={s.y + 48} fill="#8B949E" fontSize="9" fontFamily="monospace">{s.sub}</text>

            {/* Arrow up */}
            {i < 3 && (
              <motion.line x1={s.x + 90} y1={s.y} x2={s.x + 90} y2={s.y - 38}
                stroke={`${s.color}40`} strokeWidth="1.5" strokeDasharray="4 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 + i * 0.12, duration: 0.3 }} />
            )}
          </motion.g>
        ))}

        {/* Center AI badge */}
        <motion.g initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55, type: "spring" }}>
          <circle cx="280" cy="300" r="36" fill="#EC489915" stroke="#EC489935" strokeWidth="1.5" />
          <circle cx="280" cy="300" r="14" fill="#EC4899" opacity={0.9} filter="url(#glow5)" />
          <text x="280" y="348" fill="#EC4899" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="system-ui">OpenAI Agent</text>
          <text x="280" y="362" fill="#8B949E" fontSize="8" textAnchor="middle" fontFamily="monospace">+ RAG Engine</text>
        </motion.g>

        <text x="280" y="505" fill="#F0F6FC" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Smooth Operator Architecture</text>
        <text x="280" y="522" fill="#484F58" fontSize="10" textAnchor="middle" fontFamily="monospace">Human-AI Hybrid Coaching Loop</text>
      </svg>
    </div>
  );
}
