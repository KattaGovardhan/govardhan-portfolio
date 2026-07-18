'use client'
import { MoveRight } from "lucide-react";
import ProjectsRow from "../ui/ProjectsRow";
import Section from "../ui/Section";
import { projects } from "@/constants/constants";

export default function Projects() {
    
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
