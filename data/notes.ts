export type Note = {
  id: string;
  title: string;
  tag: string;
  status: "Engineering Note" | "Draft" | "Coming Soon";
  excerpt: string;
  readTime: string;
};

export const notesData: Note[] = [
  {
    id: "note-1",
    title: "Why I stopped asking language models to do deterministic math",
    tag: "Agent Architecture",
    status: "Engineering Note",
    excerpt: "Language models generate tokens probabilistically; they do not calculate arithmetic reliably. How routing ACWR sports science math to explicit Python logic eliminated hallucination risks in AthleteIQ.",
    readTime: "5 min read"
  },
  {
    id: "note-2",
    title: "What building a LangGraph agent taught me about tool design",
    tag: "LangGraph / ReAct",
    status: "Engineering Note",
    excerpt: "Clean tool contracts with tight schema constraints make or break ReAct agents. Why single-purpose tools with explicit error returns beat Swiss-army-knife tools every single time.",
    readTime: "7 min read"
  },
  {
    id: "note-3",
    title: "Why more documents do not automatically create better RAG",
    tag: "RAG Systems",
    status: "Draft",
    excerpt: "Information retrieval suffers when chunk noise overwhelms vector similarity. How chunking strategy, metadata filtering, and targeted domain knowledge beat massive dump files.",
    readTime: "6 min read"
  },
  {
    id: "note-4",
    title: "Latency is a product feature in voice AI",
    tag: "Voice AI & Audio",
    status: "Engineering Note",
    excerpt: "Human conversations break down when turn-taking latency exceeds 800ms. Lessons from optimizing Twilio Voice audio buffers and Google Gemini real-time streaming.",
    readTime: "8 min read"
  },
  {
    id: "note-5",
    title: "How I evaluate an AI system beyond the demo",
    tag: "Evaluation & Testing",
    status: "Draft",
    excerpt: "A sleek demo proves nothing about production stability. How an automated 20-case evaluation harness combining rule checks and LLM-as-judge raised AthleteIQ's accuracy to 95%.",
    readTime: "6 min read"
  },
  {
    id: "note-6",
    title: "Designing human escalation into AI workflows",
    tag: "Responsible AI",
    status: "Coming Soon",
    excerpt: "When safety, medical emergency, or financial risk is detected, AI must yield gracefully. Patterns for building immediate human-in-the-loop fallback channels into autonomous systems.",
    readTime: "5 min read"
  }
];
