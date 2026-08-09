"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X, ShieldCheck } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
}

export function SunshineModal({ isOpen, onClose }: Props) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isOpen) {
      const symbols = ["✨", "❤️", "⭐", "💖", "✦"];
      const newParticles: Particle[] = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 90 + 5, // percentage
        y: Math.random() * 80 + 10,
        size: Math.random() * 10 + 12,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 0.4,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      }));
      setParticles(newParticles);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-x-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A2747]/85 backdrop-blur-md"
        />

        {/* Celebration Particles Overlay (Non-blocking) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0.8, 0], y: -60, scale: [0.5, 1.2, 1] }}
              transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
              }}
            >
              {p.symbol}
            </motion.div>
          ))}
        </div>

        {/* Sunshine Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-[#F6F3EC] border-2 border-[#B98945] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#0A2747] z-20 space-y-5 overflow-hidden"
        >
          {/* Top Decorative Header Bar */}
          <div className="flex items-center justify-between border-b border-[rgba(10,39,71,0.10)] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B98945] animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-[#B98945] tracking-widest uppercase">
                A SECRET FOR SUNSHINE ✦
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#5A738E] hover:text-[#0A2747] rounded-lg transition-colors bg-[#FFFEFA] border border-[rgba(10,39,71,0.12)]"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="space-y-3 text-center py-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B98945]/15 border border-[#B98945]/30 mb-1">
              <Heart className="w-6 h-6 text-[#B98945] fill-[#B98945]/30" />
            </div>

            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#0A2747] tracking-tight">
              Oi, Princess. 🥺
            </h3>

            <p className="font-sans font-bold text-lg text-[#12375F]">
              How&apos;s my portfolio?
            </p>

            <p className="text-sm font-sans text-[#5A738E] leading-relaxed max-w-sm mx-auto">
              Because honestly, how could my portfolio ever be complete without you in it?
            </p>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#B98945]/10 border border-[#B98945]/30 text-xs font-mono font-semibold text-[#0A2747]">
                Most important skill unlocked: loving my Sunshine forever. ✨
              </span>
            </div>
          </div>

          {/* Relationship Status Badge */}
          <div className="p-4 rounded-xl bg-[#FFFEFA] border border-[#B98945]/40 shadow-xs flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B98945] shrink-0" />
              <div>
                <span className="font-mono text-[10px] text-[#5A738E] font-bold uppercase tracking-wider block">
                  RELATIONSHIP STATUS
                </span>
                <span className="font-sans font-bold text-sm text-[#0A2747]">
                  Taken. Forever. By Sunshine. ❤️
                </span>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <div className="pt-2 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#0A2747] text-[#FFFEFA] hover:bg-[#12375F] text-xs font-mono font-bold transition-all shadow-sm"
            >
              Close Secret Message
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
