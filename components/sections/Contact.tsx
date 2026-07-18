'use client'
import MagneticButton from '../ui/MagneticButton';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-30 radial-fade" />
        <div
          className="absolute left-1/2 top-1/2 h-150 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
          style={{
            background: "radial-gradient(closest-side, oklch(0.6 0.2 260 / 55%), transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-270 px-6 text-center">
        

        <h2 className="text-balance font-display text-6xl leading-[0.95] text-foreground md:text-[112px]">
          Let's build something
          <br />
          <span className="italic text-primary">worth talking about.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Tell me about your product, timeline and where you're stuck. I reply within a day —
          usually with pointed questions and a rough plan.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="mailto:govardhankatta.dev@gmail.com" variant="primary">
            govardhankatta.dev@gmail.com
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#" variant="ghost">
            Book a 20‑min intro
          </MagneticButton>
        </div>

        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
          {[
            ["Response", "< 48 hours"],
            ["Timezone", "GMT · async first"],
            ["Engagements", "2–8 weeks"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6 text-left">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</div>
              <div className="mt-1 font-display text-2xl text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
