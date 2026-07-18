"use client"
import { stack } from '@/constants/constants';
import Section from '../ui/Section';
import { Workflow } from 'lucide-react';



export default function TechStack() {
  const groups = Object.entries(stack);
  return (
    <Section
      id="stack"
      eyebrow="Toolkit"
      title="The stack I reach for — and know well."
      intro="No CV bloat. These are the tools I ship with weekly, chosen for how they compose."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
        {groups.map(([group, items]) => (
          <div key={group} className="bg-background p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-2xl text-foreground">{group}</h3>
              <Workflow className="h-4 w-4 text-muted-foreground" />
            </div>
            <ul className="space-y-2 text-sm">
              {items.map((t) => (
                <li
                  key={t}
                  className="group flex items-center justify-between border-b border-hairline/60 py-2 last:border-b-0"
                >
                  <span className="text-foreground">{t}</span>
                  <span className="font-mono text-xs text-muted-foreground opacity-0 transition group-hover:opacity-100">
                    ↗
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
