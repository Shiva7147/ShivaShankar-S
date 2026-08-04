"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

// SVG-rendered dashboard mockup that looks like a dark analytics UI
function DashboardMockup({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 480 300" style={{ width: "100%", height: "auto", borderRadius: 8 }}>
      {/* Screen bg */}
      <rect width="480" height="300" fill="#0D1117" rx="8" />
      {/* Sidebar */}
      <rect x="0" y="0" width="60" height="300" fill="#161B22" />
      {[40, 90, 140, 190, 240].map((y) => (
        <rect key={y} x="16" y={y} width="28" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      ))}
      <circle cx="30" cy="20" r="8" fill={`${accent}60`} />

      {/* Topbar */}
      <rect x="60" y="0" width="420" height="36" fill="#161B22" />
      <rect x="76" y="14" width="80" height="8" rx="3" fill="rgba(255,255,255,0.07)" />
      <circle cx="448" cy="18" r="8" fill={`${accent}50`} />

      {/* Stat cards row */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={76 + i * 96} y={50} width="88" height="56" rx="6"
            fill="#161B22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <rect x={84 + i * 96} y={62} width={32 + i * 4} height="6" rx="2" fill={`${accent}40`} />
          <rect x={84 + i * 96} y={76} width="52" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x={84 + i * 96} y={88} width="36" height="4" rx="2" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}

      {/* Chart area */}
      <rect x="76" y="118" width="280" height="120" rx="6" fill="#161B22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {/* Bar chart bars */}
      {[20, 55, 35, 70, 45, 80, 30, 60, 50, 75].map((h, i) => (
        <rect key={i} x={90 + i * 26} y={228 - h} width="16" height={h} rx="2"
          fill={`${accent}${i % 3 === 0 ? "90" : "35"}`} />
      ))}
      <rect x="76" y="230" width="280" height="1" fill="rgba(255,255,255,0.08)" />
      <text x="88" y="112" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">Call Volume</text>

      {/* Table area */}
      <rect x="370" y="118" width="104" height="120" rx="6" fill="#161B22" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="380" y={130 + i * 22} width="60" height="4" rx="2" fill="rgba(255,255,255,0.08)" />
          <circle cx="456" cy={132 + i * 22} r="4"
            fill={i < 2 ? `${accent}80` : i === 2 ? "#34D39980" : "rgba(255,255,255,0.15)"} />
        </g>
      ))}

      {/* Bottom bar */}
      <rect x="76" y="252" width="394" height="36" rx="6" fill="#161B22" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={88 + i * 120} y="266" width="80" height="8" rx="3" fill="rgba(255,255,255,0.07)" />
      ))}
    </svg>
  );
}

function ConversationMockup({ accent }: { accent: string }) {
  const messages = [
    { side: "left", w: 180 },
    { side: "right", w: 140 },
    { side: "left", w: 220 },
    { side: "left", w: 160 },
    { side: "right", w: 100 },
    { side: "right", w: 180 },
  ];
  return (
    <svg viewBox="0 0 480 300" style={{ width: "100%", height: "auto", borderRadius: 8 }}>
      <rect width="480" height="300" fill="#0D1117" rx="8" />
      {/* Header */}
      <rect x="0" y="0" width="480" height="44" fill="#161B22" />
      <circle cx="28" cy="22" r="10" fill={`${accent}60`} />
      <rect x="46" y="16" width="80" height="7" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="46" y="27" width="50" height="5" rx="2" fill={`${accent}40`} />
      <circle cx="452" cy="22" r="7" fill="rgba(255,255,255,0.08)" />
      <circle cx="432" cy="22" r="7" fill="rgba(255,255,255,0.08)" />

      {/* Messages */}
      {messages.map((m, i) => {
        const isRight = m.side === "right";
        const x = isRight ? 480 - m.w - 20 : 20;
        const y = 60 + i * 36;
        return (
          <g key={i}>
            <rect x={x} y={y} width={m.w} height="24" rx="12"
              fill={isRight ? `${accent}30` : "#161B22"}
              stroke={isRight ? `${accent}50` : "rgba(255,255,255,0.08)"} strokeWidth="1" />
            <rect x={x + 10} y={y + 8} width={m.w - 20} height="8" rx="3"
              fill={isRight ? `${accent}60` : "rgba(255,255,255,0.1)"} />
          </g>
        );
      })}

      {/* Input bar */}
      <rect x="16" y="264" width="400" height="24" rx="12" fill="#161B22" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      <rect x="424" y="264" width="40" height="24" rx="12" fill={`${accent}80`} />
    </svg>
  );
}

export function DeviceMockups({ project }: { project: Project }) {
  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Interface</p>
          <h2 className="cs-heading-h2">Dashboard Screens</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cs-surface p-4"
          >
            <div className="text-xs font-mono text-[#484F58] mb-3 uppercase tracking-widest">Analytics Dashboard</div>
            <DashboardMockup accent={project.accent} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="cs-surface p-4"
          >
            <div className="text-xs font-mono text-[#484F58] mb-3 uppercase tracking-widest">Conversation View</div>
            <ConversationMockup accent={project.accent} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
