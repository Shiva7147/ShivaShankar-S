"use client";

import { motion } from "framer-motion";

// Alpha Studi0 AI Receptionist — vertical phone call pipeline
export function ReceptionistArchSvg() {
  const nodes = [
    { id: "customer", label: "Customer", sub: "Inbound Call", color: "#38BDF8", y: 0 },
    { id: "twilio", label: "Twilio", sub: "PSTN / WebSocket", color: "#F97316", y: 100 },
    { id: "elevenlabs", label: "ElevenLabs", sub: "Voice AI / STT", color: "#A78BFA", y: 200 },
    { id: "gemini", label: "Google Gemini", sub: "LLM Reasoning", color: "#34D399", y: 300 },
    { id: "kb", label: "Knowledge Base", sub: "Business Context", color: "#F59E0B", y: 400 },
    { id: "tools", label: "Tool Calling", sub: "Agent Execution", color: "#3B82F6", y: 500 },
  ];

  const sideNodes = [
    { id: "calendar", label: "Google Calendar", color: "#4ADE80", x: 280, y: 500 },
    { id: "crm", label: "CRM", color: "#FB7185", x: 280, y: 560 },
    { id: "supabase", label: "Supabase", color: "#34D399", x: 280, y: 620 },
    { id: "analytics", label: "Analytics", color: "#F59E0B", x: 280, y: 680 },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 560 760"
        className="w-full max-w-lg mx-auto"
        style={{ height: "auto" }}
      >
        {/* Background */}
        <defs>
          <linearGradient id="recep-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D1117" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Animated dash */}
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L0,8 L8,4 z" fill="rgba(255,255,255,0.25)" />
          </marker>
        </defs>

        <rect width="560" height="760" fill="url(#recep-bg)" rx="12" />

        {/* Main vertical pipeline */}
        {nodes.map((node, i) => {
          const cx = 140;
          const cy = node.y + 50;
          const lineDelay = i * 0.12 + 0.2;
          return (
            <motion.g key={node.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
              {/* Connector line */}
              {i < nodes.length - 1 && (
                <motion.line
                  x1={cx} y1={cy + 24} x2={cx} y2={cy + 74}
                  stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ pathLength: { duration: 0.6, delay: lineDelay, ease: "easeInOut" }, opacity: { duration: 0.1, delay: lineDelay } }}
                />
              )}
              {/* Node circle */}
              <circle cx={cx} cy={cy} r={22} fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1.5" />
              <circle cx={cx} cy={cy} r={8} fill={node.color} opacity={0.9} filter="url(#glow)" />

              {/* Label to the right */}
              <text x={cx + 34} y={cy - 6} fill="#F0F6FC" fontSize="13" fontWeight="600" fontFamily="system-ui">
                {node.label}
              </text>
              <text x={cx + 34} y={cy + 10} fill="#8B949E" fontSize="10" fontFamily="system-ui">
                {node.sub}
              </text>
            </motion.g>
          );
        })}

        {/* Horizontal connector from Tool Calling to side nodes */}
        <motion.line
          x1={162} y1={550} x2={240} y2={550}
          stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 0.4 }}
        />

        {/* Vertical connector on the right side */}
        <motion.line
          x1={240} y1={500} x2={240} y2={700}
          stroke="rgba(255,255,255,0.08)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        />

        {/* Side nodes */}
        {sideNodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 + i * 0.1 }}
          >
            <motion.line
              x1={240} y1={node.y} x2={256} y2={node.y}
              stroke="rgba(255,255,255,0.12)" strokeWidth="1"
            />
            <circle cx={270} cy={node.y} r={6} fill={node.color} opacity={0.8} />
            <text x={284} y={node.y + 4} fill="#C9D1D9" fontSize="11" fontFamily="system-ui">
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* "Data Flow" animated particle */}
        <motion.circle r="4" fill="#3B82F6" opacity={0.8} filter="url(#glow)">
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path="M140,50 L140,150 L140,250 L140,350 L140,450 L140,550"
          />
        </motion.circle>

        {/* Title */}
        <text x="300" y="48" fill="#F0F6FC" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui">
          Alpha Studi0 Architecture
        </text>
        <text x="300" y="66" fill="#484F58" fontSize="10" textAnchor="middle" fontFamily="monospace">
          Real-time Voice AI Pipeline
        </text>
      </svg>
    </div>
  );
}
