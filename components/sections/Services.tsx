'use client'
import { ArrowUpRight, Cpu, Database, Gauge, Layers, Server, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';


export default function Services() {
    const services = [
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
  return (
        <Section
      id="services"
      eyebrow ="Services" 
      title="A small studio of one, opinionated on purpose."
      intro="Ten years of engineering distilled into a tight list of things I do exceptionally well — and love doing."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-55">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
  key={s.title}
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.6,
    delay: i * 0.05,
  }}
  className={`
    group relative flex flex-col justify-between
    overflow-hidden rounded-3xl
    border border-white/10
    bg-zinc-900/60
    p-7
    backdrop-blur
    transition-all duration-300
    hover:-translate-y-1
    hover:border-blue-500/30
    hover:bg-zinc-900
    ${s.className ?? ""}
  `}
>
  {s.feature && (
    <div
      className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-60"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,.35), transparent 70%)",
      }}
    />
  )}

  <div className="relative flex items-center justify-center h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-400">
    <Icon className="h-6 w-6" />
  </div>

  <div className="relative mt-8">
    <h3
      className={
        s.feature
          ? "text-4xl md:text-5xl font-bold tracking-tight"
          : "text-xl font-semibold"
      }
    >
      {s.title}
    </h3>

    <p className="mt-3 text-sm leading-7 text-zinc-400">
      {s.body}
    </p>
  </div>
</motion.div>
          );
        })}
      </div>
    </Section>
  )
}
