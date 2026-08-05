"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ResponsiveChartContainer } from "@/components/ui/ResponsiveChartContainer";

// SVG-rendered dashboard mockup — cream/navy palette to match site
function DashboardMockup() {
  return (
    <svg viewBox="0 0 480 280" style={{ width: "100%", height: "auto", borderRadius: 8 }} role="img" aria-label="Dashboard UI Mockup">
      <rect width="480" height="280" fill="#FFFEFA" />
      {/* Sidebar */}
      <rect x="0" y="0" width="56" height="280" fill="#F6F3EC" />
      {[36, 76, 116, 156, 196].map((y) => (
        <rect key={y} x="14" y={y} width="28" height="5" rx="2" fill="rgba(10,39,71,0.08)" />
      ))}
      <rect x="14" y="20" width="28" height="8" rx="2" fill="#B98945" />

      {/* Topbar */}
      <rect x="56" y="0" width="424" height="36" fill="#F6F3EC" />
      <rect x="70" y="13" width="90" height="10" rx="3" fill="rgba(10,39,71,0.07)" />
      <rect x="420" y="12" width="48" height="12" rx="3" fill="rgba(185,137,69,0.25)" />

      {/* Stat cards */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={70 + i * 96} y={50} width="88" height="52" rx="4"
            fill="#FFFEFA" stroke="rgba(10,39,71,0.10)" strokeWidth="1" />
          <rect x={78 + i * 96} y={62} width={30 + i * 4} height="5" rx="2" fill="#B98945" />
          <rect x={78 + i * 96} y={74} width="52" height="4" rx="2" fill="rgba(10,39,71,0.08)" />
          <rect x={78 + i * 96} y={84} width="36" height="3" rx="2" fill="rgba(10,39,71,0.04)" />
        </g>
      ))}

      {/* Bar chart */}
      <rect x="70" y="114" width="270" height="120" rx="4" fill="#FFFEFA" stroke="rgba(10,39,71,0.08)" strokeWidth="1" />
      {[18, 50, 30, 65, 40, 72, 28, 55, 44, 68].map((h, i) => (
        <rect key={i} x={84 + i * 24} y={224 - h} width="14" height={h} rx="2"
          fill={i % 3 === 0 ? "#B98945" : "#12375F"} opacity={i % 3 === 0 ? "0.9" : "0.2"} />
      ))}
      <rect x="70" y="225" width="270" height="1" fill="rgba(10,39,71,0.08)" />

      {/* Side panel */}
      <rect x="356" y="114" width="108" height="120" rx="4" fill="#FFFEFA" stroke="rgba(10,39,71,0.08)" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="366" y={126 + i * 20} width="60" height="4" rx="2" fill="rgba(10,39,71,0.07)" />
          <circle cx="444" cy={128 + i * 20} r="4"
            fill={i < 2 ? "#B98945" : i === 2 ? "#12375F" : "rgba(10,39,71,0.15)"} />
        </g>
      ))}

      {/* Bottom bar */}
      <rect x="70" y="248" width="392" height="20" rx="4" fill="#F6F3EC" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={80 + i * 120} y="254" width="70" height="8" rx="2" fill="rgba(10,39,71,0.06)" />
      ))}
    </svg>
  );
}

function ConversationMockup() {
  const messages = [
    { right: false, w: 180 },
    { right: true, w: 140 },
    { right: false, w: 210 },
    { right: false, w: 150 },
    { right: true, w: 110 },
    { right: true, w: 170 },
  ];
  return (
    <svg viewBox="0 0 480 280" style={{ width: "100%", height: "auto", borderRadius: 8 }} role="img" aria-label="Conversation UI Mockup">
      <rect width="480" height="280" fill="#FFFEFA" />
      {/* Header */}
      <rect x="0" y="0" width="480" height="44" fill="#F6F3EC" />
      <circle cx="26" cy="22" r="10" fill="#B98945" />
      <rect x="44" y="16" width="80" height="7" rx="3" fill="rgba(10,39,71,0.12)" />
      <rect x="44" y="27" width="50" height="5" rx="2" fill="#B98945" opacity="0.6" />

      {/* Messages */}
      {messages.map((m, i) => {
        const x = m.right ? 480 - m.w - 20 : 20;
        const y = 58 + i * 33;
        return (
          <g key={i}>
            <rect x={x} y={y} width={m.w} height="22" rx="10"
              fill={m.right ? "rgba(185,137,69,0.12)" : "#F6F3EC"}
              stroke={m.right ? "rgba(185,137,69,0.3)" : "rgba(10,39,71,0.08)"} strokeWidth="1" />
            <rect x={x + 10} y={y + 7} width={m.w - 20} height="8" rx="3"
              fill={m.right ? "#B98945" : "rgba(10,39,71,0.12)"} opacity={m.right ? "0.8" : "1"} />
          </g>
        );
      })}

      {/* Input bar */}
      <rect x="16" y="248" width="396" height="22" rx="10" fill="#F6F3EC" stroke="rgba(10,39,71,0.08)" strokeWidth="1" />
      <rect x="420" y="248" width="44" height="22" rx="10" fill="#B98945" />
    </svg>
  );
}

export function DeviceMockups({ project }: { project: Project }) {
  return (
    <section className="py-20 bg-[#FFFEFA] border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow mb-4">Interface &amp; Dashboard</p>
          <h2 className="cs-heading-h2">{project.title} Interface</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <ResponsiveChartContainer name={`${project.title} Dashboard Mockup`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.14)] shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-mono text-xs font-bold text-[#0A2747] uppercase tracking-widest mb-3">Analytics Dashboard</p>
              <DashboardMockup />
            </motion.div>
          </ResponsiveChartContainer>

          <ResponsiveChartContainer name={`${project.title} Conversation Mockup`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="p-5 rounded-xl bg-[#F6F3EC] border border-[rgba(10,39,71,0.14)] shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-mono text-xs font-bold text-[#0A2747] uppercase tracking-widest mb-3">Conversation View</p>
              <ConversationMockup />
            </motion.div>
          </ResponsiveChartContainer>
        </div>
      </div>
    </section>
  );
}
