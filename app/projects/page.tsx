import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectPreview } from "@/components/projects/project-preview";
import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Projects | Mark Sikaundi",
  description:
    "A collection of products and platforms built for communities, developers, and businesses.",
};

const projects = [
  {
    title: "Prostnow",
    description:
      "Social media management platform for businesses and individuals. Schedule posts and track performance metrics in one place.",
    link: "https://prostnow.com",
    image: "/projects/prostnow.png",
    tags: ["SaaS", "Social Media"],
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    title: "Lystica",
    description:
      "Database platform for email marketing campaigns, contact management, and performance analytics.",
    link: "https://lystica.cloud",
    image: "/projects/lys.png",
    tags: ["Email", "Analytics"],
    gradient: "from-sky-500 to-blue-700",
  },
  {
    title: "DevCircle Africa",
    description:
      "Community-driven platform connecting African developers with resources, networking, and collaborative projects.",
    link: "https://devcircleafrica.com",
    image: "/projects/devc.png",
    tags: ["Community", "Platform"],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "LinkSnap",
    description:
      "Create and share your e-business card with a single link. Showcase your business, products, and services beautifully.",
    link: "https://preview--link-in-a-snap.lovable.app/",
    image: "/projects/link.png",
    tags: ["Link-in-bio", "Business"],
    gradient: "from-fuchsia-500 to-purple-700",
  },
  {
    title: "PixelPer",
    description:
      "Create and share pixel art with a focus on community engagement and creative collaboration.",
    link: "https://pixelper.lupleg.org/",
    image: "/projects/pix.png",
    tags: ["Creative", "Community"],
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    title: "Code Timer",
    description:
      "Intelligent coding productivity tool that tracks and optimizes sessions with detailed analytics and insights.",
    link: "https://timer.lupleg.org/",
    image: "/projects/code.png",
    tags: ["Dev Tools", "Analytics"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Mentor",
    description:
      "Platform connecting aspiring developers with experienced mentors for knowledge sharing and career growth.",
    link: "https://mentor.lupleg.org/auth",
    image: "/projects/mentor.png",
    tags: ["Education", "Mentorship"],
    gradient: "from-rose-500 to-pink-700",
  },
] as const;

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-20">
      {/* Page header */}
      <section className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <Badge
          variant="outline"
          className="mb-4 border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-400"
        >
          {projects.length} Projects
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Featured Projects
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Products and platforms I&apos;ve built for communities, developers, and
          businesses — from social tools to developer productivity.
        </p>
      </section>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group gap-0 overflow-hidden border-border/60 py-0 transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 dark:hover:border-orange-900"
          >
            <ProjectPreview
              title={project.title}
              image={project.image}
              gradient={project.gradient}
            />

            <CardHeader className="px-5 pt-5 pb-0">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>

            <CardContent className="px-5">
              <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="px-5 pb-5">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-border/80 transition-colors group-hover:border-orange-300 group-hover:bg-orange-50 group-hover:text-orange-700 dark:group-hover:border-orange-800 dark:group-hover:bg-orange-950/30 dark:group-hover:text-orange-400"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <HiArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="mx-auto mt-16 max-w-xl rounded-2xl border border-border/60 bg-muted/30 px-6 py-10 text-center md:mt-20">
        <h2 className="text-xl font-semibold tracking-tight">
          Have a project in mind?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          I&apos;m open to collaborations, consulting, and interesting product
          ideas.
        </p>
        <Button
          asChild
          className="mt-6 rounded-full bg-orange-600 px-6 text-white shadow-sm shadow-orange-600/20 hover:bg-orange-700"
        >
          <Link href="mailto:sikaundimark@gmail.com">Get in touch</Link>
        </Button>
      </section>
    </div>
  );
}
