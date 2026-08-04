"use client";

import React, { useState, useEffect, useRef } from "react";

const metrics = [
  { value: 4, suffix: "+", label: "Production AI systems" },
  { value: 95, suffix: "%", label: "Evaluated AthleteIQ accuracy" },
  { value: 6, suffix: "", label: "Focused AI modules in Alpha Lead Engine" },
  { value: 1, suffix: "", label: "IEEE GenAI Challenge final round" }
];

export function MetricsBand() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 600; // 600ms cubic ease-out
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out formula
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = metrics.map((m) => Math.floor(easeOutProgress * m.value));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(metrics.map((m) => m.value));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-12 bg-[#FFFEFA] border-b border-[rgba(10,39,71,0.12)]">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[rgba(10,39,71,0.12)]">
          {metrics.map((metric, idx) => (
            <div key={metric.label} className={`space-y-1 ${idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}>
              <div className="font-sans font-bold text-4xl lg:text-5xl text-[#0A2747] tracking-tight">
                {counts[idx]}
                <span className="text-[#B98945]">{metric.suffix}</span>
              </div>
              <p className="text-xs font-mono text-[#5A738E] font-medium leading-normal uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
