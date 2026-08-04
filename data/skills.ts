export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "AI & LLM Engineering",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "LangChain LCEL",
      "LangGraph ReAct Agents",
      "Tool Calling & Tool Design",
      "System Prompt Design",
      "Multi-Model Routing",
      "LLM Evaluation (LLM-as-Judge + Rules)",
      "AI Guardrails & Safety Escalation"
    ]
  },
  {
    title: "Models & Retrieval",
    skills: [
      "OpenAI API (GPT-4o/o1)",
      "Google Gemini (2.0 Flash/Pro)",
      "Anthropic Claude 3.5",
      "OpenRouter Multi-Model Routing",
      "Hugging Face Embeddings (all-MiniLM)",
      "ChromaDB Vector Store",
      "FAISS Indexing",
      "Semantic Retrieval & Reranking"
    ]
  },
  {
    title: "Backend Engineering",
    skills: [
      "Python 3.11+",
      "FastAPI",
      "Node.js",
      "Fastify",
      "REST APIs & OpenAPI",
      "PostgreSQL",
      "Supabase",
      "Firebase Firestore"
    ]
  },
  {
    title: "Frontend & Product",
    skills: [
      "Next.js (App Router)",
      "React 19",
      "TypeScript",
      "JavaScript (ESNext)",
      "Tailwind CSS",
      "Recharts Data Viz",
      "Progressive Web Apps (PWA)",
      "Responsive Product Interfaces"
    ]
  },
  {
    title: "Automation & Infrastructure",
    skills: [
      "n8n Workflow Engine",
      "Apify Web Scraping",
      "Twilio Voice API",
      "Railway Cloud Hosting",
      "Vercel Deployment",
      "Docker Containerization",
      "Git & GitHub Actions",
      "Workflow Orchestration"
    ]
  }
];

export const currentlyExploring = [
  "Multi-agent LangGraph architectures",
  "Langfuse tracing & observability",
  "Google Cloud Run deployment",
  "MLOps foundation pipelines",
  "Production AI monitoring & drift detection"
];

export const techMatrixData = [
  { name: "AthleteIQ", tech: ["Python", "LangChain", "LangGraph", "ChromaDB", "Hugging Face", "OpenRouter", "LLM-as-Judge"] },
  { name: "AI Receptionist", tech: ["Next.js", "TypeScript", "Node.js", "Fastify", "Supabase", "Twilio Voice", "Gemini", "Railway"] },
  { name: "Alpha Lead Engine", tech: ["Next.js", "FastAPI", "Supabase", "OpenAI", "n8n", "Apify", "Docker", "Tailwind CSS"] },
  { name: "Reframe", tech: ["Next.js", "TypeScript", "Gemini", "Firebase", "Recharts", "Tailwind CSS", "Vercel"] }
];
