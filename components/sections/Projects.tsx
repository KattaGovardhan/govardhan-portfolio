'use client'
import { MoveRight } from "lucide-react";
import ProjectsRow from "../ui/ProjectsRow";
import Section from "../ui/Section";

export default function Projects() {
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
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Work that shipped and moved a number."
      intro="A short list of recent engagements. Each one is a case study in restraint — few features, done deeply."
    >
      <div className="space-y-28">
        {projects.map((p, i) => (
          <ProjectsRow key={p.num} p={p} reverse={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-24 flex items-center justify-between border-t border-hairline pt-8 text-sm">
        <span className="text-muted-foreground">
          A dozen more under NDA — happy to walk you through them on a call.
        </span>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-foreground link-underline"
        >
          Request the full deck <MoveRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>
      </div>
    </Section>
  );
}
