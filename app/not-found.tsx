import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-8xl font-bold tracking-tighter text-orange-600/20">
        404
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button
          asChild
          className="rounded-full bg-orange-600 text-white hover:bg-orange-700"
        >
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/projects">
            View Projects
            <HiArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
