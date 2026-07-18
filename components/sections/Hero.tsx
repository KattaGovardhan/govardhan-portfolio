"use client";
import { ArrowUpRight, Circle, FileText, Terminal } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import React from "react";
import { useRef } from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../icons/SVGIcons";
import BlurText from "../ui/BlurText";
import { headingLines, stats } from "@/constants/constants";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-26 pb-32 md:pt-26 md:pb-40"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid radial-fade opacity-60" />
        <div
          className="absolute left-1/2 top-[-20%] h-180 w-275 -translate-x-1/2 rounded-full opacity-70 blur-[120px]"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.55 0.2 260 / 45%), transparent 70%)",
          }}
        />
        <div
          className="absolute left-[10%] top-[30%] h-95 w-95 rounded-full opacity-50 blur-[100px]"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.55 0.18 210 / 35%), transparent)",
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
      </div>

      <motion.div
        className="relative mx-auto max-w-7xl px-6"
      >

          <h1 className="mx-auto flex max-w-6xl flex-col items-center text-center text-balance font-serif font-normal leading-[1.05] tracking-[-0.03em] text-foreground">
            {headingLines.map(({ text, size }) => (
              <BlurText
                key={text}
                text={text}
                animateBy="words"
                delay={150}
                className={`${size} w-full text-center`}
              />
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I'm Govardhan — an independent engineer who takes your idea from{" "}
            <span className="text-foreground">spec to production</span>, solo.
            No account managers, no six-person standups. Just working software,
            fast.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href="#contact" variant="primary">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost">
              See recent work
            </MagneticButton>
          </motion.div>

          {/* Credibility strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-6 border-t border-border/60 pt-8"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-light text-3xl tracking-[-0.02em] text-foreground md:text-4xl">
                  {value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>




        {/* socials row */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-5">
            {[
              [GithubIcon, "GitHub"],
              [LinkedinIcon, "LinkedIn"],
              [TwitterIcon, "Twitter"],
              [FileText, "Résumé"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof GithubIcon;
              return (
                <a
                  key={label as string}
                  href="#"
                  className="link-underline inline-flex items-center gap-2 text-foreground/80 hover:text-foreground"
                >
                  <I className="h-4 w-4" />
                  {label as string}
                </a>
              );
            })}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Circle className="h-3 w-3 animate-pulse" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

