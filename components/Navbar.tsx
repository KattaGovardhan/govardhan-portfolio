'use client'
import { useState, useEffect } from 'react';
import { motion } from "motion/react"; 
import {ArrowUpRight} from "lucide-react";
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Stack", "#stack"],
    ["Process", "#process"],
    ["Words", "#words"],
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`flex w-full max-w-295 items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-hairline bg-background/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group inline-flex items-center gap-2 text-sm font-medium">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
            <span className="font-display text-[15px] leading-none">GK</span>
          </span>
          <span className="tracking-tight">
            Govardhan<span className="text-muted-foreground">.Katta</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3.5 py-1.5 text-[13px] text-muted-foreground transition hover:bg-elev-1 hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 text-[13px] font-medium text-background transition hover:bg-foreground/90"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Book a call
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.header>
)}