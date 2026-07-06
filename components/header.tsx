"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "https://www.devcircleafrica.com/blog", label: "Blog", external: true },
  { href: "mailto:sikaundimark@gmail.com", label: "Contact", external: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-sm font-bold text-white shadow-sm shadow-orange-500/25 transition-transform group-hover:scale-105">
            MS
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-500" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-tight tracking-tight">
              Mark Sikaundi
            </p>
            <p className="text-xs text-muted-foreground">Software Engineer</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              !link.external &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));

            const className = cn(
              "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "text-orange-600"
                : "text-muted-foreground hover:text-foreground"
            );

            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={className}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-[1.125rem] h-0.5 rounded-full bg-orange-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-orange-600">
            <a
              href="https://linkedin.com/in/marksikaundi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            className="rounded-full bg-orange-600 px-4 text-white shadow-sm shadow-orange-600/20 hover:bg-orange-700"
          >
            <a
              href="https://github.com/marksikaundi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-4" />
              GitHub
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive =
                !link.external &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));

              const className = cn(
                "flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-orange-50 text-orange-600 dark:bg-orange-950/40"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              );

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className={className}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={className}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="flex gap-2 pt-3">
              <Button
                variant="outline"
                className="flex-1 rounded-full"
                asChild
              >
                <a
                  href="https://linkedin.com/in/marksikaundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FaLinkedin className="size-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                className="flex-1 rounded-full bg-orange-600 text-white hover:bg-orange-700"
                asChild
              >
                <a
                  href="https://github.com/marksikaundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <FaGithub className="size-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
