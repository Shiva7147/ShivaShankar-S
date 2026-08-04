"use client";

import { motion } from "framer-motion";

// Alpha Lead Engine — modular pipeline with n8n orchestration bar
export function LeadEngineArchSvg() {
  const modules = [
    { id: "discover", label: "Lead Discovery", sub: "Apify Scraper", color: "#F59E0B", x: 40, y: 80 },
    { id: "qualify", label: "ICP Qualification", sub: "AI Scoring", color: "#F59E0B", x: 200, y: 80 },
    { id: "website", label: "Website Analysis", sub: "Context Extraction", color: "#F59E0B", x: 360, y: 80 },
    { id: "email", label: "Email Generation", sub: "GPT-4 Personalization", color: "#F59E0B", x: 40, y: 240 },
    { id: "review", label: "Human Review", sub: "Approval Gate", color: "#34D399", x: 200, y: 240 },
    { id: "followup", label: "Follow-Up Seq.", sub: "Day 0/3/7", color: "#F59E0B", x: 360, y: 240 },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 520" className="w-full max-w-xl mx-auto" style={{ height: "auto" }}>
        <defs>
          <linearGradient id="le-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D1117" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect width="560" height="520" fill="url(#le-bg)" rx="12" />

        {/* n8n orchestration bar */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <rect x="20" y="20" width="520" height="30" rx="6" fill="#F59E0B0A" stroke="#F59E0B25" strokeWidth="1" />
          <text x="40" y="41" fill="#F59E0B" fontSize="10" fontWeight="600" fontFamily="monospace" letterSpacing="2">n8n WORKFLOW ORCHESTRATION</text>
        </motion.g>

        {/* Module boxes + arrows */}
        {modules.map((m, i) => (
          <motion.g key={m.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
            <rect x={m.x} y={m.y} width="130" height="70" rx="8"
              fill={`${m.color}0A`} stroke={`${m.color}30`} strokeWidth="1.5" />
            <circle cx={m.x + 16} cy={m.y + 18} r="5" fill={m.color} opacity="0.85" filter="url(#glow3)" />
            <text x={m.x + 28} y={m.y + 23} fill="#F0F6FC" fontSize="11" fontWeight="600" fontFamily="system-ui">{m.label}</text>
            <text x={m.x + 14} y={m.y + 42} fill="#8B949E" fontSize="9" fontFamily="monospace">{m.sub}</text>
          </motion.g>
        ))}

        {/* Row 1 arrows */}
        {[0, 1].map(i => (
          <motion.g key={`r1-${i}`}>
            <motion.line x1={170 + i * 160} y1={115} x2={200 + i * 160} y2={115}
              stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }} />
            <polygon points={`${197 + i * 160},111 ${205 + i * 160},115 ${197 + i * 160},119`} fill="rgba(245,158,11,0.5)" />
          </motion.g>
        ))}

        {/* Vertical connector row1 → row2 */}
        <motion.line x1="490" y1="150" x2="490" y2="200" stroke="rgba(245,158,11,0.2)" strokeWidth="1" strokeDasharray="4 3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
        <motion.line x1="490" y1="200" x2="490" y2="240" stroke="rgba(245,158,11,0.2)" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9 }} />

        {/* Row 2 arrows (reversed: right to left) */}
        {[1, 0].map((i, idx) => (
          <motion.g key={`r2-${i}`}>
            <motion.line x1={330 - idx * 160} y1={275} x2={360 - idx * 160} y2={275}
              stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" strokeDasharray="4 3"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9 + idx * 0.1 }} />
            <polygon points={`${357 - idx * 160},271 ${365 - idx * 160},275 ${357 - idx * 160},279`} fill="rgba(245,158,11,0.5)" />
          </motion.g>
        ))}

        {/* Supabase DB */}
        <motion.g initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
          <rect x="170" y="370" width="200" height="60" rx="8" fill="#34D3990A" stroke="#34D39930" strokeWidth="1.5" />
          <text x="270" y="394" fill="#34D399" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="system-ui">Supabase + PostgreSQL</text>
          <text x="270" y="412" fill="#8B949E" fontSize="9" textAnchor="middle" fontFamily="monospace">Lead Store + Campaign State</text>
        </motion.g>

        {/* Connector from Human Review down to DB */}
        <motion.line x1="265" y1="310" x2="265" y2="370" stroke="rgba(52,211,153,0.2)" strokeWidth="1" strokeDasharray="4 3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }} />

        {/* Analytics at bottom */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
          <rect x="20" y="460" width="520" height="32" rx="6" fill="#3B82F60A" stroke="#3B82F625" strokeWidth="1" />
          <text x="280" y="482" fill="#3B82F6" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="monospace" letterSpacing="1">CAMPAIGN ANALYTICS DASHBOARD</text>
        </motion.g>

        {/* Title */}
        <text x="280" y="508" fill="#F0F6FC" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Alpha Lead Engine Architecture</text>
      </svg>
    </div>
  );
}
