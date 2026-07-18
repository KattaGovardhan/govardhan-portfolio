import React, { useRef } from 'react'

export default function MagneticButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 ease-out ${
        variant === "primary"
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "border border-hairline text-foreground hover:bg-elev-1"
      }`}
    >
      {children}
    </a>
  );
}
