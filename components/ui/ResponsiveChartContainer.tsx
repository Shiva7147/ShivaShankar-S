"use client";

import React from "react";
import { useChartQA } from "@/lib/chartValidator";

interface Props {
  name: string;
  title?: string;
  ariaLabel?: string;
  className?: string;
  children: React.ReactNode | ((breakpoint: "desktop" | "tablet" | "mobile") => React.ReactNode);
}

export function ResponsiveChartContainer({
  name,
  title,
  ariaLabel,
  className = "",
  children,
}: Props) {
  const { containerRef, breakpoint, qaReport } = useChartQA(name);

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel || title || name}
      className={`w-full max-w-full overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Dev Mode QA Inspector Tag */}
      {process.env.NODE_ENV === "development" && qaReport && !qaReport.passed && (
        <div className="mb-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-[10px] font-mono text-amber-600 flex items-center justify-between">
          <span>[QA ALERT] {name} ({breakpoint})</span>
          <span>{qaReport.warnings[0]}</span>
        </div>
      )}

      {typeof children === "function" ? children(breakpoint) : children}
    </div>
  );
}
