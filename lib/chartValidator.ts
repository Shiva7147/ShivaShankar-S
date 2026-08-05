"use client";

import { useEffect, useRef, useState } from "react";

export interface ValidationReport {
  chartName: string;
  timestamp: string;
  viewportWidth: number;
  breakpoint: "desktop" | "tablet" | "mobile";
  hasOverflow: boolean;
  overflowAmount: number;
  hasClippedText: boolean;
  passed: boolean;
  warnings: string[];
}

export function detectChartOverflow(element: HTMLElement): ValidationReport {
  const scrollWidth = element.scrollWidth;
  const clientWidth = element.clientWidth;
  const viewportWidth = window.innerWidth;
  
  let breakpoint: "desktop" | "tablet" | "mobile" = "desktop";
  if (viewportWidth < 768) {
    breakpoint = "mobile";
  } else if (viewportWidth < 1024) {
    breakpoint = "tablet";
  }

  const overflowAmount = Math.max(0, scrollWidth - clientWidth);
  const hasOverflow = overflowAmount > 1; // 1px threshold for subpixel rendering

  const warnings: string[] = [];
  if (hasOverflow) {
    warnings.push(`Horizontal overflow detected (${overflowAmount}px wider than container)`);
  }

  // Check text elements for clipping or collision
  let hasClippedText = false;
  const textElements = element.querySelectorAll("p, span, h1, h2, h3, h4, h5, h6, text, td, th");
  textElements.forEach((el) => {
    const textNode = el as HTMLElement;
    if (textNode.scrollWidth > textNode.clientWidth + 2 && getComputedStyle(textNode).overflow === "hidden") {
      hasClippedText = true;
      const textContent = textNode.textContent?.trim().slice(0, 20) || "Element";
      warnings.push(`Text truncated or clipped: "${textContent}..."`);
    }
  });

  const passed = !hasOverflow && !hasClippedText;

  return {
    chartName: element.getAttribute("data-chart-name") || "Unnamed Chart",
    timestamp: new Date().toISOString(),
    viewportWidth,
    breakpoint,
    hasOverflow,
    overflowAmount,
    hasClippedText,
    passed,
    warnings,
  };
}

export function useChartQA(chartName: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [breakpoint, setBreakpoint] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [qaReport, setQaReport] = useState<ValidationReport | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    el.setAttribute("data-chart-name", chartName);

    const runValidation = () => {
      const report = detectChartOverflow(el);
      setBreakpoint(report.breakpoint);
      setQaReport(report);

      if (process.env.NODE_ENV === "development") {
        if (!report.passed) {
          console.warn(`[Chart QA Validator ❌] "${chartName}" (${report.breakpoint}):`, report.warnings);
        }
      }
    };

    runValidation();

    const resizeObserver = new ResizeObserver(() => {
      runValidation();
    });

    resizeObserver.observe(el);
    window.addEventListener("resize", runValidation);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", runValidation);
    };
  }, [chartName]);

  return { containerRef, breakpoint, qaReport };
}
