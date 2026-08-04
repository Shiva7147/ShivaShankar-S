"use client";

import { motion } from "framer-motion";

// AthleteIQ — Hub and spoke: ReAct Agent in center, 4 tools as spokes
export function AthleteIqArchSvg() {
  const cx = 280;
  const cy = 300;
  const r = 130;

  const tools = [
    { id: "rag", label: "ChromaDB RAG", sub: "Sports Science KB", color: "#22C55E", angle: -90 },
    { id: "acwr", label: "ACWR Calculator", sub: "Deterministic Python", color: "#38BDF8", angle: 0 },
    { id: "log", label: "Metric Logger", sub: "Timestamped DB Write", color: "#F59E0B", angle: 90 },
    { id: "safety", label: "Safety Bypass", sub: "Emergency Escalation", color: "#F87171", angle: 180 },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 600" className="w-full max-w-lg mx-auto" style={{ height: "auto" }}>
        <defs>
          <linearGradient id="ath-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D1117" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="560" height="600" fill="url(#ath-bg)" rx="12" />

        {/* Query input at top */}
        <motion.g initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
          <rect x="200" y="28" width="160" height="44" rx="8" fill="#161B22" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          <text x="280" y="48" fill="#F0F6FC" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="system-ui">Coach Query</text>
          <text x="280" y="64" fill="#8B949E" fontSize="9" textAnchor="middle" fontFamily="monospace">Natural Language Input</text>
          {/* Arrow down */}
          <motion.line x1="280" y1="72" x2="280" y2="154" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.4 }} />
        </motion.g>

        {/* Center hub — ReAct Agent */}
        <motion.g initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, type: "spring" }}>
          <circle cx={cx} cy={cy} r="64" fill="#22C55E0D" stroke="#22C55E30" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="48" fill="#22C55E0A" stroke="#22C55E20" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="18" fill="#22C55E" opacity={0.9} filter="url(#glow2)" />
          <text x={cx} y={cy - 10} fill="#F0F6FC" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui">LangGraph</text>
          <text x={cx} y={cy + 6} fill="#F0F6FC" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="system-ui">ReAct Agent</text>
          <text x={cx} y={cy + 22} fill="#8B949E" fontSize="9" textAnchor="middle" fontFamily="monospace">Intent Router</text>
        </motion.g>

        {/* Spokes + Tool Nodes */}
        {tools.map((tool, i) => {
          const rad = (tool.angle * Math.PI) / 180;
          const tx = cx + Math.cos(rad) * r;
          const ty = cy + Math.sin(rad) * r;
          const mx = cx + Math.cos(rad) * 68;
          const my = cy + Math.sin(rad) * 68;

          return (
            <motion.g
              key={tool.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.15 }}
            >
              {/* Spoke line */}
              <motion.line
                x1={mx} y1={my} x2={tx} y2={ty}
                stroke={`${tool.color}40`} strokeWidth="1.5" strokeDasharray="5 4"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.45 }}
              />
              {/* Tool node */}
              <circle cx={tx} cy={ty} r="34" fill={`${tool.color}12`} stroke={`${tool.color}35`} strokeWidth="1.5" />
              <circle cx={tx} cy={ty} r="7" fill={tool.color} opacity={0.85} />
              <text x={tx} y={ty + 22} fill="#F0F6FC" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui">{tool.label}</text>
              <text x={tx} y={ty + 35} fill="#8B949E" fontSize="9" textAnchor="middle" fontFamily="monospace">{tool.sub}</text>
            </motion.g>
          );
        })}

        {/* Response at bottom */}
        <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
          <motion.line x1="280" y1="364" x2="280" y2="446" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 0.3 }} />
          <rect x="180" y="448" width="200" height="44" rx="8" fill="#161B22" stroke="#22C55E30" strokeWidth="1" />
          <text x="280" y="468" fill="#F0F6FC" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="system-ui">Grounded Response</text>
          <text x="280" y="484" fill="#8B949E" fontSize="9" textAnchor="middle" fontFamily="monospace">Tool output + LLM synthesis</text>
        </motion.g>

        {/* Labels */}
        <text x="280" y="548" fill="#F0F6FC" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui">AthleteIQ Architecture</text>
        <text x="280" y="566" fill="#484F58" fontSize="10" textAnchor="middle" fontFamily="monospace">LangGraph Hub-and-Spoke Agent</text>
      </svg>
    </div>
  );
}
