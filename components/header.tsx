"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Mark Sikaundi</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
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
        {/* TODO */}
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/projects">Projects</Link>
          <Link href="https://www.devcircleafrica.com/blog">Blog</Link>
          <Link href="mailto:sikaundimark@gmail.com">Contact</Link>
        </nav>

        {/* Desktop CTA button */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="flex-none">
            <Button
              className="bg-black hover:bg-black text-white hover:text-white"
              variant="outline"
            >
              <Link href="mailto:sikaundimark@gmail.com">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-3 space-y-3">
            <Link href="/projects" className="block text-sm">
              Projects
            </Link>
            <Link href="/blog" className="block text-sm">
              Blog
            </Link>
            <Link
              href="mailto:sikaundimark@gmail.com"
              className="block text-sm"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button variant="outline" className="w-full justify-center">
                <Link href="mailto:sikaundimark@gmail.com">Get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
