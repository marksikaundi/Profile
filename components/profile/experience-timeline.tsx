import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import type { Experience } from "@/lib/profile-data";
import { experiences } from "@/lib/profile-data";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-2 flex h-3 w-3 items-center justify-center">
        <span className="absolute h-3 w-3 rounded-full bg-orange-200 dark:bg-orange-900" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-orange-600" />
      </span>

      <div className="space-y-3 rounded-xl border border-transparent p-4 transition-colors hover:border-border/60 hover:bg-muted/30">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="font-medium leading-snug">{experience.role}</h3>
            <p className="text-sm text-orange-600">{experience.company}</p>
          </div>
          <time className="shrink-0 text-xs font-medium text-muted-foreground sm:text-sm">
            {experience.period}
          </time>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {experience.description}
          {experience.link && (
            <>
              {" "}
              <Link
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-medium text-orange-600 transition-colors hover:text-orange-700"
              >
                Learn more
                <HiArrowUpRight className="size-3" />
              </Link>
            </>
          )}
        </p>

        {experience.tags && experience.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
      <SectionHeading
        label="Career"
        title="Work Experience"
        description="Roles across software engineering, QA, IT support, and AI research."
        className="mb-8"
      />

      <div className="relative space-y-2">
        <div className="absolute bottom-2 left-[5px] top-2 w-px bg-border" />
        {experiences.map((experience) => (
          <ExperienceItem key={`${experience.company}-${experience.period}`} experience={experience} />
        ))}
      </div>
    </section>
  );
}
