import { Badge } from "@/components/ui/badge";
import { ExperienceTimeline } from "@/components/profile/experience-timeline";
import { ProfileHero } from "@/components/profile/hero";
import { SocialLinks } from "@/components/profile/social-links";
import { TechStack } from "@/components/profile/tech-stack";
import { SectionHeading } from "@/components/section-heading";
import { coreSkills } from "@/lib/profile-data";

export default function Profile() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10 md:py-14 lg:py-16">
      <ProfileHero />

      <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-5 lg:gap-10">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* About */}
          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <SectionHeading label="Profile" title="About Me" className="mb-4" />
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              I&apos;m a Software Engineer and Artificial Intelligence Researcher
              with over 5 years of experience building scalable, efficient, and
              user-focused applications. My work spans full-stack web development
              and cutting-edge AI research, with strong proficiency in Python,
              JavaScript, TypeScript, and frameworks like React, Next.js, Node.js,
              PyTorch, and TensorFlow.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              I value clean code, performance-driven development, and
              collaborative teamwork. I&apos;ve contributed to agile teams, led
              technical reviews, and mentored junior developers across projects
              ranging from responsive web platforms to intelligent systems in NLP,
              computer vision, and reinforcement learning.
            </p>
          </section>

          {/* Skills */}
          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <SectionHeading label="Expertise" title="Core Skills" className="mb-4" />
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-xs font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <SectionHeading label="Education" title="Academic Background" className="mb-4" />
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <p className="font-medium">Information & Communication University</p>
              <p className="mt-1 text-sm text-orange-600">
                BSc. Electrical & Electronic Engineering
              </p>
            </div>
          </section>

          {/* Tools */}
          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <SectionHeading
              label="Stack"
              title="Programming & Tools"
              className="mb-4"
            />
            <TechStack />
          </section>

          {/* Social */}
          <section className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <SectionHeading label="Connect" title="Find Me Online" className="mb-4" />
            <SocialLinks />
          </section>
        </div>

        {/* Right column — Experience */}
        <div className="lg:col-span-3">
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
