import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const projectLinks = [
  { href: "https://www.prostnow.com/", label: "Prostnow" },
  { href: "https://www.lystica.cloud/", label: "Lystica" },
  { href: "https://devcircleafrica.com", label: "DevCircle Africa" },
  { href: "https://forum.devcircleafrica.com", label: "Community" },
  { href: "https://lupleg.org", label: "Lupleg" },
  { href: "https://mentor.lupleg.org", label: "Mentor" },
  { href: "https://timer.lupleg.org/", label: "Code Timer" },
  { href: "https://pixelper.lupleg.org", label: "PixelPer" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "mailto:sikaundimark@gmail.com", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/marksikaundi", label: "GitHub", icon: FaGithub },
  { href: "https://x.com/Alisikaundi", label: "Twitter", icon: FaTwitter },
  {
    href: "https://linkedin.com/in/marksikaundi",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-card/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-4 lg:py-14">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 text-xs font-bold text-white">
                MS
              </div>
              <span className="font-semibold tracking-tight">Mark Sikaundi</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Software engineer building user-focused applications and exploring
              new technologies through open-source and community work.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:hover:border-orange-800 dark:hover:bg-orange-950/30"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.devcircleafrica.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-orange-600"
                >
                  Blog
                  <HiArrowUpRight className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Projects</h4>
            <ul className="space-y-2.5">
              {projectLinks.map((project) => (
                <li key={project.href}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-orange-600"
                  >
                    {project.label}
                    <HiArrowUpRight className="size-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Get in Touch</h4>
            <p className="text-sm text-muted-foreground">
              Open to collaborations, consulting, and interesting product ideas.
            </p>
            <a
              href="mailto:sikaundimark@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:hover:border-orange-800 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
            >
              Contact Me
              <HiArrowUpRight className="size-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-border/60 py-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Mark Sikaundi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
