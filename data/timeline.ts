export type TimelineEntry = {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  highlight?: boolean;
};

export const timelineData: TimelineEntry[] = [
  {
    year: "2022 – 2025",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Christ University, Bengaluru",
    description: "Completed undergraduate degree in computer applications. Built practical experience in software development, web engineering, databases, and big data analytics coursework (Hadoop, MapReduce, NoSQL, Hive, Pig)."
  },
  {
    year: "2025 – 2027",
    title: "Master of Computer Applications (MCA — Expected)",
    subtitle: "St Joseph's University, Bengaluru",
    description: "Currently pursuing Master's degree with dedicated focus on AI/ML engineering, RAG systems, LangGraph agentic architectures, tool-calling systems, and LLM evaluation harnesses."
  },
  {
    year: "2025 – 2026",
    title: "Transitioned from full-stack development into AI systems engineering",
    description: "Shifted focus from conventional web backends to architecting production-grade AI systems combining probabilistic language models, deterministic software tools, vector databases, and safety guardrails."
  },
  {
    year: "2026",
    title: "Built AthleteIQ, AI Receptionist, Alpha Lead Engine, Reframe & Smooth Operator",
    description: "Designed and shipped 5 complete production AI systems featuring LangGraph ReAct agents, real-time voice automation, 6-module sales pipelines, client-side encryption, and dating RAG coaching."
  },
  {
    year: "2026",
    title: "Reached IEEE Generative AI Challenge Final Round",
    subtitle: "IEEE Industrial Electronics Society",
    description: "Co-authored 'Surgical Amnesia: A Framework for Targeted Machine Unlearning and Copyright Compliance in Large Language Models' using Llama 3.2 1B and LoRA with negated cross-entropy."
  },
  {
    year: "Current Direction",
    title: "Building from India toward AI engineering opportunities in Spain",
    subtitle: "Bengaluru → Spain / European Tech Ecosystem",
    description: "Actively positioning for AI Engineer roles in Spain and Europe, combining production-focused system reliability, applied AI research, and European technology ecosystem alignment.",
    highlight: true
  }
];
