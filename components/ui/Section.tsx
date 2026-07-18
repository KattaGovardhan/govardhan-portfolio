import {motion} from 'framer-motion'
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  align?: "left" | "center";
}) {
    return (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-6 py-32 md:py-40">
      {(eyebrow || title || intro) && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className={
            align === "center"
              ? "mx-auto mb-20 max-w-2xl text-center"
              : "mb-20 grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end"
          }
        >
          <div>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-8 bg-hairline" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-5xl leading-[0.95] text-foreground md:text-6xl lg:text-7xl">
                {title}
              </h2>
            )}
          </div>
          {intro && (
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:justify-self-end md:text-right">
              {intro}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};