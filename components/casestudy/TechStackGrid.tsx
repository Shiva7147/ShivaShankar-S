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
  frontend: "#2563EB",
  backend: "#059669",
  ai: "#7C3AED",
  database: "#B98945",
  infra: "#5A738E",
  api: "#D97706",
};

export function TechStackGrid({ project }: { project: Project }) {
  const byCategory = project.techDetails.reduce<Record<string, typeof project.techDetails>>(
    (acc, t) => {
      if (!acc[t.category]) acc[t.category] = [];
      acc[t.category].push(t);
      return acc;
    },
    {}
  );

  const categoryOrder = ["frontend", "backend", "ai", "database", "api", "infra"];
  const sorted = categoryOrder.filter((c) => byCategory[c]);

  return (
    <section className="py-20 border-b border-[rgba(10,39,71,0.12)]">
      <div className="cs-wrap">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="cs-eyebrow mb-4">Technology Stack</p>
          <h2 className="cs-heading-h2">Built With</h2>
        </motion.div>

        <div className="space-y-10">
          {sorted.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: CAT_COLORS[cat] }} />
                <span
                  className="font-mono text-[10px] font-bold uppercase tracking-widest"
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
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ti * 0.04 }}
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    className="cs-surface p-5 cursor-default"
                  >
                    <div
                      className="font-mono text-xs font-bold mb-2"
                      style={{ color: CAT_COLORS[cat] }}
                    >
                      {tech.name}
                    </div>
                    <p className="text-[#5A738E] text-xs leading-relaxed">{tech.role}</p>
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
