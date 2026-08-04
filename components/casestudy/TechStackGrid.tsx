"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

const CAT_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI / ML",
  database: "Database",
  infra: "Infrastructure",
  api: "API / Integration",
};

const CAT_COLORS: Record<string, string> = {
  frontend: "#38BDF8",
  backend: "#34D399",
  ai: "#A78BFA",
  database: "#F59E0B",
  infra: "#6B7280",
  api: "#F97316",
};

export function TechStackGrid({ project }: { project: Project }) {
  const byCategory = project.techDetails.reduce<Record<string, typeof project.techDetails>>((acc, t) => {
    if (!acc[t.category]) acc[t.category] = [];
    acc[t.category].push(t);
    return acc;
  }, {});

  const categoryOrder = ["frontend", "backend", "ai", "database", "api", "infra"];
  const sorted = categoryOrder.filter((c) => byCategory[c]);

  return (
    <section className="py-24 border-b border-[rgba(255,255,255,0.06)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="cs-eyebrow mb-4">Technology Stack</p>
          <h2 className="cs-heading-h2">Built With</h2>
        </motion.div>

        <div className="space-y-10">
          {sorted.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: ci * 0.07 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: CAT_COLORS[cat] }}
                />
                <span
                  className="text-xs font-mono font-semibold uppercase tracking-widest"
                  style={{ color: CAT_COLORS[cat] }}
                >
                  {CAT_LABELS[cat]}
                </span>
              </div>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {byCategory[cat].map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ti * 0.05 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="cs-surface-2 p-5 group cursor-default"
                  >
                    <div
                      className="text-xs font-mono font-bold mb-2 transition-colors"
                      style={{ color: CAT_COLORS[cat] }}
                    >
                      {tech.name}
                    </div>
                    <p className="text-[#8B949E] text-xs leading-relaxed">{tech.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
