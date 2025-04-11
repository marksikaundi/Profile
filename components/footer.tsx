import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/95">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col gap-8 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-4">
              <h3 className="text-md font-medium">About</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                I&apos;m a passionate software engineer with a focus on building
                user-friendly applications. I love exploring new technologies
                and sharing my knowledge through writing and open-source
                contributions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-md font-medium">Projects</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="https://lupleg.org">Lupleg</Link>
                  </li>
                  <li>
                    <Link href="https://mentor.lupleg.org">Mentor</Link>
                  </li>
                  <li>
                    <Link href="https://pixelper.lupleg.org">Code Timer</Link>
                  </li>
                  <li>
                    <Link href="https://pixelper.lupleg.org">PixelPer</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-md font-medium">Social</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://github.com/marksikaundi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Alisikaundi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/marksikaundi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground border-t pt-4">
            <p>
              © {new Date().getFullYear()} Mark Sikaundi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
