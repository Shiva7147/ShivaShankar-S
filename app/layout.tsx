import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiva Shankar S — AI Engineer | RAG, LLM Agents and AI Automation",
  description:
    "Portfolio of Shiva Shankar S, an AI Engineer building production-ready RAG systems, LLM agents, voice AI applications, intelligent automation platforms, and responsible AI products.",
  keywords: [
    "AI Engineer",
    "RAG Engineer",
    "LLM Engineer",
    "LangGraph",
    "AI Agents",
    "Applied AI",
    "Generative AI",
    "Machine Learning Engineer",
    "Voice AI",
    "AI Automation",
    "Spain AI Engineer",
    "India AI Engineer",
    "Shiva Shankar S"
  ],
  authors: [{ name: "Shiva Shankar S" }],
  creator: "Shiva Shankar S",
  openGraph: {
    title: "Shiva Shankar S — AI Engineer",
    description: "Production-ready AI systems across RAG, LLM Agents, Voice AI, and Intelligent Automation.",
    type: "website",
    locale: "en_US",
    siteName: "Shiva Shankar S Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Shankar S — AI Engineer",
    description: "Production-ready AI systems across RAG, LLM Agents, Voice AI, and Intelligent Automation."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shiva Shankar S",
    jobTitle: "AI Engineer",
    description: "AI Engineer specializing in production RAG pipelines, LangGraph agents, voice AI, and automation systems.",
    url: "https://shivashankar.dev",
    sameAs: [
      "https://github.com/Shiva7147",
      "https://www.linkedin.com/in/shiva-shankar-s1317"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressCountry: "India"
    },
    knowsAbout: [
      "Retrieval-Augmented Generation",
      "LangGraph Agents",
      "LLM Evaluation",
      "Voice AI",
      "FastAPI",
      "Next.js"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body
        className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#F6F3EC] text-[#0A2747]`}
      >
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#B98945] text-white font-mono text-xs rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
