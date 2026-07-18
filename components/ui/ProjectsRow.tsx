import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Boxes } from "lucide-react";

const projects = [
  {
    num: "01",
    name: "Halcyon",
    kind: "SaaS · Analytics",
    year: "2025",
    blurb:
      "Realtime analytics for indie SaaS. Rebuilt the ingestion pipeline and shipped a redesigned dashboard that cut TTFB by 68%.",
    metrics: [["+312%", "Signups"], ["68%", "Faster"], ["4wk", "To ship"]],
    accent: "from-[oklch(0.65_0.19_255)] to-[oklch(0.55_0.18_210)]",
  },
  {
    num: "02",
    name: "Ember Studio",
    kind: "AI · Creative Tools",
    year: "2024",
    blurb:
      "A generative editing tool for design studios. LLM orchestration, streaming UI, and a canvas that never drops a frame.",
    metrics: [["120ms", "Median resp"], ["4×", "Throughput"], ["12", "Model routes"]],
    accent: "from-[oklch(0.72_0.16_35)] to-[oklch(0.62_0.14_15)]",
  },
  {
    num: "03",
    name: "Northlane",
    kind: "Fintech · Dashboard",
    year: "2024",
    blurb:
      "Ops dashboard for a Series A fintech. Consolidated 6 internal tools into a single, keyboard‑first surface.",
    metrics: [["6→1", "Tools"], ["9k+", "MAU"], ["A+", "Lighthouse"]],
    accent: "from-[oklch(0.7_0.15_150)] to-[oklch(0.55_0.12_180)]",
  },
];

export default function ProjectsRow({
  p,
  reverse,
}: {
  p: (typeof projects)[number];
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [40, -40]), {
    stiffness: 80,
    damping: 20,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      className={`grid gap-10 md:grid-cols-12 md:items-center ${reverse ? "" : ""}`}
    >
      <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <motion.div
          style={{ y }}
          className="group relative aspect-16/10 overflow-hidden rounded-2xl border border-hairline bg-elev-1"
        >
          <div
            className={`absolute inset-0 bg-linear-to-br ${p.accent} opacity-70`}
          />
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
          {/* Fake product UI */}
          <div className="absolute inset-6 rounded-xl border border-white/15 bg-background/70 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Boxes className="h-3.5 w-3.5" /> {p.name.toLowerCase()}.app
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {p.metrics.map(([v, l]) => (
                <div
                  key={l}
                  className="rounded-lg border border-hairline bg-elev-1/70 p-3"
                >
                  <div className="font-display text-2xl text-foreground">
                    {v}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-1.5">
              {[80, 55, 70, 40].map((w, i) => (
                <div key={i} className="h-2 rounded-full bg-hairline">
                  <div
                    className="h-full rounded-full bg-foreground/70"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          <span className="font-mono">{p.num}</span>
          <span className="h-px w-8 bg-hairline" />
          <span>{p.kind}</span>
          <span className="ml-auto">{p.year}</span>
        </div>
        <h3 className="mt-4 font-display text-5xl leading-none text-foreground md:text-6xl">
          {p.name}
        </h3>
        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          {p.blurb}
        </p>
        <div className="mt-8 flex items-center gap-6 text-sm">
          <a href="#" className="link-underline text-foreground">
            Read case study
          </a>
          <a href="#" className="link-underline text-muted-foreground">
            Live site ↗
          </a>
        </div>
      </div>
    </motion.div>
  );
}
