"use client";

import { motion } from "framer-motion";

// Reframe — privacy boundary diagram: browser zone vs cloud zone
export function ReframeArchSvg() {
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 560 500" className="w-full max-w-xl mx-auto" style={{ height: "auto" }}>
        <defs>
          <linearGradient id="rf-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0D1117" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <filter id="glow4">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect width="560" height="500" fill="url(#rf-bg)" rx="12" />

        {/* Browser Zone */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <rect x="20" y="20" width="250" height="390" rx="10"
            fill="#8B5CF60A" stroke="#8B5CF630" strokeWidth="1.5" strokeDasharray="6 4" />
          <text x="145" y="46" fill="#8B5CF6" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace" letterSpacing="1">BROWSER (CLIENT)</text>

          {/* Nodes inside browser */}
          {[
            { label: "User Input", sub: "Journal / Data", y: 70, color: "#8B5CF6" },
            { label: "PBKDF2 Key Derivation", sub: "Password → AES Key", y: 140, color: "#A78BFA" },
            { label: "AES-GCM Encryption", sub: "Web Crypto API", y: 210, color: "#A78BFA" },
            { label: "IndexedDB Cache", sub: "Offline-first Storage", y: 280, color: "#6D28D9" },
            { label: "Recharts", sub: "Progress Visualization", y: 350, color: "#8B5CF6" },
          ].map((node, i) => (
            <motion.g key={node.label} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
              <rect x="36" y={node.y} width="218" height="52" rx="7"
                fill={`${node.color}10`} stroke={`${node.color}30`} strokeWidth="1" />
              <circle cx="52" cy={node.y + 18} r="5" fill={node.color} filter="url(#glow4)" />
              <text x="64" y={node.y + 23} fill="#F0F6FC" fontSize="11" fontWeight="600" fontFamily="system-ui">{node.label}</text>
              <text x="52" y={node.y + 40} fill="#8B949E" fontSize="9" fontFamily="monospace">{node.sub}</text>
            </motion.g>
          ))}
        </motion.g>

        {/* Transfer arrow */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <motion.line x1="270" y1="215" x2="290" y2="215" stroke="#8B5CF660" strokeWidth="1.5"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.85, duration: 0.3 }} />
          <text x="282" y="206" fill="#484F58" fontSize="8" fontFamily="monospace" textAnchor="middle">Ciphertext only</text>
          <polygon points="288,211 295,215 288,219" fill="#8B5CF660" />
        </motion.g>

        {/* Cloud Zone */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <rect x="295" y="20" width="245" height="390" rx="10"
            fill="#34D3990A" stroke="#34D39930" strokeWidth="1.5" strokeDasharray="6 4" />
          <text x="417" y="46" fill="#34D399" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="monospace" letterSpacing="1">CLOUD (SERVER)</text>

          {[
            { label: "Firebase Firestore", sub: "Encrypted blob storage", y: 70, color: "#F59E0B" },
            { label: "Gemini 2.0 Flash", sub: "AI Behavioral Support", y: 160, color: "#34D399" },
            { label: "Firebase Auth", sub: "Anonymous Authentication", y: 250, color: "#38BDF8" },
            { label: "Vercel Edge", sub: "Next.js Deployment", y: 340, color: "#6B7280" },
          ].map((node, i) => (
            <motion.g key={node.label} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.1 }}>
              <rect x="311" y={node.y} width="213" height="66" rx="7"
                fill={`${node.color}10`} stroke={`${node.color}30`} strokeWidth="1" />
              <circle cx="327" cy={node.y + 20} r="5" fill={node.color} filter="url(#glow4)" />
              <text x="339" y={node.y + 25} fill="#F0F6FC" fontSize="11" fontWeight="600" fontFamily="system-ui">{node.label}</text>
              <text x="327" y={node.y + 48} fill="#8B949E" fontSize="9" fontFamily="monospace">{node.sub}</text>
            </motion.g>
          ))}
        </motion.g>

        {/* Privacy lock icon area */}
        <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, type: "spring" }}>
          <circle cx="280" cy="430" r="22" fill="#8B5CF615" stroke="#8B5CF640" strokeWidth="1.5" />
          <text x="280" y="436" fill="#8B5CF6" fontSize="18" textAnchor="middle">🔒</text>
        </motion.g>

        <text x="280" y="475" fill="#F0F6FC" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="system-ui">Reframe Privacy Architecture</text>
        <text x="280" y="492" fill="#484F58" fontSize="10" textAnchor="middle" fontFamily="monospace">Zero plaintext on server</text>
      </svg>
    </div>
  );
}
