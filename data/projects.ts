export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution: string;
  capabilities: string[];
  engineeringDecisions: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  demonstrates: string;
  modules?: { name: string; description: string }[];
};

export const projectsData: Project[] = [
  {
    id: "athleteiq",
    number: "01",
    title: "AthleteIQ",
    subtitle: "AI Sports Science RAG Agent",
    summary: "A production-grade sports science assistant that combines retrieval, tool calling, deterministic workload calculations, athlete metric tracking, evaluation, and safety escalation.",
    problem: "Coaches and athletes need rapid access to sports science guidance, but general-purpose language models can hallucinate, perform unreliable calculations, and provide unsafe advice in health-adjacent situations.",
    solution: "Built a LangGraph ReAct agent with four specialized tools: sports-science retrieval, deterministic ACWR calculation, timestamped athlete metric logging, and three-tier safety escalation.",
    capabilities: [
      "Retrieval over a 56-entry sports science knowledge base",
      "Coverage of ACWR, HRV, RPE, overtraining, biomechanics, recovery, and youth athlete safety",
      "ChromaDB semantic retrieval with Hugging Face all-MiniLM-L6-v2 embeddings",
      "Deterministic Python ACWR calculations (Acute:Chronic Workload Ratio)",
      "Timestamped athlete metric logging system",
      "Emergency detection and immediate human escalation bypass",
      "Hybrid evaluation using LLM-as-judge and rule-based checks",
      "Accuracy improvement from 85% to 95% across 20 ground-truth test cases"
    ],
    engineeringDecisions: [
      "The LLM does not perform safety-critical workload mathematics. AthleteIQ routes ACWR calculations to deterministic Python logic.",
      "Bypasses retrieval entirely when a medical emergency is detected, instantly routing to immediate human escalation.",
      "Uses a hybrid eval harness combining LLM-as-judge scoring with rule-based checks for safety-critical questions."
    ],
    technologies: [
      "Python",
      "LangChain LCEL",
      "LangGraph",
      "ChromaDB",
      "Hugging Face",
      "OpenRouter API",
      "LLM-as-Judge"
    ],
    githubUrl: "https://github.com/Shiva7147/athleteiq",
    demonstrates: "Agent architecture, retrieval engineering, deterministic tools, responsible AI, and measurable evaluation."
  },
  {
    id: "alpha-receptionist",
    number: "02",
    title: "Alpha Studi0 AI Receptionist",
    subtitle: "Production AI Voice Automation Platform",
    summary: "A real-time AI voice receptionist that handles inbound business calls, understands company context, qualifies leads, schedules appointments, and converts conversations into structured business intelligence.",
    problem: "Many small and medium-sized businesses miss calls, lose leads outside working hours, and rely on manual call handling that does not create structured insights.",
    solution: "Built a cloud-hosted AI receptionist using Twilio Voice and Google Gemini, supported by a business-specific knowledge layer, automated transcription, summarization, lead qualification, scheduling, and an analytics dashboard.",
    capabilities: [
      "Inbound call handling with sub-second latency responses",
      "Real-time AI voice conversations powered by Google Gemini & Twilio",
      "Business-specific knowledge base for company-aware dialogue",
      "Automated lead qualification and transcript summarization",
      "Google Calendar API integration for AI-powered appointment scheduling",
      "Cloud-hosted Fastify backend with Supabase PostgreSQL storage",
      "Customer and conversation analytics dashboard",
      "Multi-tenant SaaS-ready architecture"
    ],
    engineeringDecisions: [
      "Architected sub-second audio response pipeline using real-time streaming buffers between Twilio and Gemini.",
      "Separated call processing from post-call structured intelligence extraction to keep live calls zero-latency.",
      "Persisted all transcriptions and metadata in Supabase PostgreSQL with tenant isolation boundaries."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "Supabase",
      "PostgreSQL",
      "Twilio Voice",
      "Google Gemini",
      "Railway",
      "Google Calendar API"
    ],
    githubUrl: "https://github.com/Shiva7147",
    demonstrates: "Voice AI, low-latency system design, backend orchestration, business automation, and SaaS architecture."
  },
  {
    id: "alpha-lead-engine",
    number: "03",
    title: "Alpha Lead Engine",
    subtitle: "AI-Powered Outbound Sales Automation Platform",
    summary: "Built and deployed a live outbound sales automation platform that discovers leads, qualifies them with AI, generates personalized outreach emails, automates multi-step follow-ups, and classifies replies—reducing manual prospecting to a single reviewable pipeline.",
    problem: "Outbound sales teams spend large amounts of time discovering companies, checking lead quality, researching websites, writing personalized emails, managing follow-ups, and manually reading replies.",
    solution: "Designed a unified AI-powered pipeline that moves each prospect from discovery to qualification, personalization, outreach, follow-up, reply classification, and campaign analytics.",
    modules: [
      { name: "Lead Qualification", description: "Evaluates raw leads against ICP criteria before spending tokens on outreach." },
      { name: "Website Analysis", description: "Scrapes and synthesizes company site content into key sales vectors." },
      { name: "Email Generation", description: "Drafts tailored cold emails based on website analysis and persona." },
      { name: "Follow-Up Generation", description: "Schedules day-based personalized follow-up sequences (Day 0, 3, 7)." },
      { name: "Reply Classification", description: "Categorizes incoming replies into Interested, Not Now, Not Interested, or Unclear." },
      { name: "Campaign Recommendation", description: "Provides actionable pipeline recommendations to improve conversion." }
    ],
    capabilities: [
      "Automated lead discovery via Apify integration",
      "6 focused single-responsibility AI modules",
      "Human review-before-send workflow guardrail",
      "n8n workflow layer for complex multi-step orchestration",
      "Day-based multi-step follow-up sequencing",
      "Reply intent classification engine",
      "Campaign performance analytics dashboard",
      "Docker containerized production deployment"
    ],
    engineeringDecisions: [
      "Each AI module has a single responsibility, making the system easier to test, maintain, replace, and improve independently.",
      "Implemented a mandatory 'Human Review' checkpoint before email dispatch to guarantee campaign safety.",
      "Decoupled workflow orchestration (n8n) from core application APIs (FastAPI) to handle long-running async tasks smoothly."
    ],
    technologies: [
      "Next.js",
      "FastAPI",
      "Supabase",
      "OpenAI API",
      "n8n",
      "Apify",
      "Docker",
      "REST APIs",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/Shiva7147",
    demonstrates: "Applied AI automation, modular AI architecture, workflow orchestration, full-stack product development, and measurable business utility."
  },
  {
    id: "reframe",
    number: "04",
    title: "Reframe",
    subtitle: "Private AI Habit Recovery Web Application",
    summary: "A full-stack AI-assisted behavioral support application designed around personalized assessment, real-time urge interruption, privacy-first storage, offline access, and visual progress tracking.",
    problem: "Habit recovery tools often rely on generic advice and require users to share sensitive personal data without meaningful privacy protections.",
    solution: "Built a personalized application with a multidimensional weighted assessment, Gemini-powered support, a real-time urge interruption feature, encrypted client-side data handling, anonymous authentication, offline-first PWA support, and progress visualization.",
    capabilities: [
      "Personalized onboarding with multidimensional weighted assessment",
      "Gemini 2.0 Flash contextual behavioral support",
      "Real-time urge interruption micro-interaction experience",
      "Client-side AES-GCM encryption with PBKDF2 key derivation",
      "Anonymous Firebase authentication",
      "Offline-first PWA with automatic background synchronization",
      "Progress visualization using Recharts"
    ],
    engineeringDecisions: [
      "All sensitive assessment and journal data is encrypted on the client using AES-GCM before entering remote storage.",
      "Gemini prompt boundaries explicitly restrict medical diagnosis while providing empathetic, evidence-backed behavioral interventions.",
      "Offline-first indexedDB storage ensures immediate app responsiveness during high-stress urge interruption events."
    ],
    technologies: [
      "Next.js",
      "Gemini 2.0 Flash",
      "Firebase Firestore",
      "Tailwind CSS",
      "Recharts",
      "Vercel",
      "Web Crypto API"
    ],
    githubUrl: "https://github.com/Shiva7147/reframe-app",
    demonstrates: "Privacy-aware AI product design, full-stack application engineering, secure client-side architecture, and user-centered AI."
  },
  {
    id: "smooth-operator",
    number: "05",
    title: "Smooth Operator",
    subtitle: "AI Dating Profile Coach & RAG Knowledge Engine",
    summary: "Founded and designed Smooth Operator, a platform connecting men on dating apps with real reviewers who provide personalized voice-note feedback on their profiles, structured across three pricing tiers.",
    problem: "Men on dating platforms struggle to get objective, constructive feedback on profile presentation, photo selection, and messaging style, often relying on generic advice that fails to improve match outcomes.",
    solution: "Designed the AI layer architecture: a RAG knowledge base of dating archetypes and conversation templates, agent-based profile analysis, and a reviewer feedback retrieval system for personalized coaching.",
    capabilities: [
      "RAG knowledge base of dating archetypes, photo selection frameworks, and conversation templates",
      "Agent-based profile analysis engine evaluating bio tone, photo ordering, and prompt hooks",
      "Reviewer feedback retrieval system structuring personalized voice-note delivery",
      "Three-tier pricing and service architecture for custom coaching",
      "Complete go-to-market assets including ad campaign briefs, outreach content, and partnership media kits"
    ],
    engineeringDecisions: [
      "Combined real reviewer voice feedback with RAG dating archetypes so advice remains authentically human while structurally analytical.",
      "Engineered prompt templates that evaluate bio hooks and photo compositions without introducing biased or judgmental tone."
    ],
    technologies: [
      "Python",
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "RAG Architecture",
      "Supabase",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/Shiva7147",
    demonstrates: "Product design, domain RAG architecture, market positioning, and full-stack AI concept execution."
  }
];
