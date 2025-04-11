import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-8 py-6 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* About section */}
            <div className="space-y-4 md:max-w-xs">
              <h3 className="text-md font-medium">About</h3>
              <p className="text-sm text-muted-foreground">
                I&apos;m a passionate software engineer with a focus on building
                user-friendly applications. I love exploring new technologies
                and sharing my knowledge through writing and open-source
                contributions.
              </p>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
              {/* Projects section */}
              <div className="space-y-3">
                <h4 className="text-md font-medium">Projects</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="https://lupleg.org" className="hover:underline">
                      Lupleg
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mentor.lupleg.org"
                      className="hover:underline"
                    >
                      Mentor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pixelper.lupleg.org"
                      className="hover:underline"
                    >
                      Code Timer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pixelper.lupleg.org"
                      className="hover:underline"
                    >
                      PixelPer
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social section */}
              <div className="space-y-3">
                <h4 className="text-md font-medium">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://github.com/marksikaundi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Alisikaundi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/marksikaundi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Mark Sikaundi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
