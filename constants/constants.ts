import {
  Cpu,
  Database,
  Gauge,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
export const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Stack", "#stack"],
  ["Process", "#process"],
  ["Words", "#words"],
];
export const headingLines = [
  {
    text: "Software engineering",
    size: "text-[54px] md:text-[88px] lg:text-[104px]",
  },
  {
    text: "for founders who care about craft.",
    size: "text-[38px] md:text-[72px] lg:text-[72px]",
  },
];

export const stats = [
  { value: "6+", label: "years shipping production code" },
  { value: "20+", label: "products launched for founders" },
  { value: "48h", label: "avg. first response time" },
];

export const services = [
  {
    icon: Layers,
    title: "Full-Stack Product Engineering",
    body: "From blank Figma to production. React, Next.js, Node — shipped as one coherent product.",
    className: "md:col-span-2 md:row-span-2",
    feature: true,
  },
  {
    icon: Server,
    title: "Backend & API Design",
    body: "Clean Node/NestJS services, typed end-to-end.",
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    body: "OpenAI, Gemini, RAG pipelines and agents that ship.",
  },
  {
    icon: Gauge,
    title: "Performance Audits",
    body: "Core Web Vitals, DB hot paths, real user monitoring.",
  },
  {
    icon: Database,
    title: "Database Design",
    body: "Postgres schemas that scale from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Auth Systems",
    body: "Clerk, Better Auth, custom SSO — done right.",
    className: "md:col-span-2",
  },
  {
    icon: Cpu,
    title: "Dashboards & Ops",
    body: "Internal tools your team will actually use.",
    className: "md:col-span-2",
  },
];

export const projects = [
  {
    num: "01",
    name: "Halcyon",
    kind: "SaaS · Analytics",
    year: "2025",
    blurb:
      "Realtime analytics for indie SaaS. Rebuilt the ingestion pipeline and shipped a redesigned dashboard that cut TTFB by 68%.",
    metrics: [
      ["+312%", "Signups"],
      ["68%", "Faster"],
      ["4wk", "To ship"],
    ],
    accent: "from-[oklch(0.65_0.19_255)] to-[oklch(0.55_0.18_210)]",
  },
  {
    num: "02",
    name: "Ember Studio",
    kind: "AI · Creative Tools",
    year: "2024",
    blurb:
      "A generative editing tool for design studios. LLM orchestration, streaming UI, and a canvas that never drops a frame.",
    metrics: [
      ["120ms", "Median resp"],
      ["4×", "Throughput"],
      ["12", "Model routes"],
    ],
    accent: "from-[oklch(0.72_0.16_35)] to-[oklch(0.62_0.14_15)]",
  },
  {
    num: "03",
    name: "Northlane",
    kind: "Fintech · Dashboard",
    year: "2024",
    blurb:
      "Ops dashboard for a Series A fintech. Consolidated 6 internal tools into a single, keyboard‑first surface.",
    metrics: [
      ["6→1", "Tools"],
      ["9k+", "MAU"],
      ["A+", "Lighthouse"],
    ],
    accent: "from-[oklch(0.7_0.15_150)] to-[oklch(0.55_0.12_180)]",
  },
];

export const stack = {
  Frontend: [
    "Next.js",
    "React 19",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "GSAP",
  ],
  Backend: ["Node.js", "NestJS", "Express", "tRPC", "GraphQL", "Bun"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "SQLite"],
  Cloud: [
    "AWS",
    "Vercel",
    "Cloudflare",
    "Docker",
    "GitHub Actions",
    "Terraform",
  ],
  AI: ["OpenAI", "Gemini", "Anthropic", "LangChain", "Pinecone", "pgvector"],
  Auth: [
    "Clerk",
    "Better Auth",
    "Auth.js",
    "Supabase Auth",
    "OAuth 2",
    "WebAuthn",
  ],
};

export const steps = [
  [
    "Discovery",
    "One call. We map the shape of the problem, not just the ticket list.",
  ],
  [
    "Planning",
    "Scope, architecture and a weekly cadence. No surprises, no ceremony.",
  ],
  [
    "Design",
    "Interfaces sketched with real content. Prototyped in code where it matters.",
  ],
  [
    "Development",
    "Small PRs, previewable branches, honest changelogs. You watch it come together.",
  ],
  [
    "Testing",
    "Types, e2e, load — the boring parts that make Sunday nights quiet.",
  ],
  ["Deployment", "Zero‑downtime ships and a runbook you actually understand."],
];
