'use client'
import Section from '../ui/Section';
import {motion} from 'framer-motion'

const steps = [
  ["Discovery", "One call. We map the shape of the problem, not just the ticket list."],
  ["Planning", "Scope, architecture and a weekly cadence. No surprises, no ceremony."],
  ["Design", "Interfaces sketched with real content. Prototyped in code where it matters."],
  ["Development", "Small PRs, previewable branches, honest changelogs. You watch it come together."],
  ["Testing", "Types, e2e, load — the boring parts that make Sunday nights quiet."],
  ["Deployment", "Zero‑downtime ships and a runbook you actually understand."],
];

export default function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="Six weeks. Six steps. One partner."
      intro="Every engagement follows the same rhythm — tight enough to move fast, loose enough to think."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-hairline md:block" />
        <ol className="space-y-14">
          {steps.map(([title, body], i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid gap-4 md:grid-cols-[80px_1fr_2fr] md:gap-10"
            >
              <div className="relative flex items-center gap-3 md:block">
                <span className="relative grid h-8 w-8 place-items-center rounded-full border border-hairline bg-background font-mono text-xs text-primary md:z-10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-3xl text-foreground md:text-4xl">{title}</h3>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
