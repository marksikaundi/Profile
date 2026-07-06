import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export function ProfileHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 md:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-orange-600/5 blur-3xl" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <Avatar className="h-24 w-24 border-2 border-orange-500/30 shadow-lg shadow-orange-500/10 md:h-28 md:w-28">
            <Image
              src="/Mark Sikaundi.jpg"
              width={250}
              height={250}
              alt="Mark Sikaundi"
              className="object-cover"
            />
            <AvatarFallback className="bg-orange-100 text-orange-700">
              MS
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-400"
              >
                Available for work
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              Mark Sikaundi
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Software Engineer & AI Researcher
            </p>
            <p className="text-sm text-muted-foreground">
              Lusaka, Zambia · 5+ years experience
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:flex-col sm:items-stretch">
          <Button
            asChild
            className="rounded-full bg-orange-600 text-white shadow-sm shadow-orange-600/20 hover:bg-orange-700"
          >
            <Link href="/projects">
              View Projects
              <HiArrowUpRight className="size-4" />
            </Link>
          </Button>
          {/* <Button asChild variant="outline" className="rounded-full">
            <Link href="mailto:sikaundimark@gmail.com">Contact Me</Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
