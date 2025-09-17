import { Badge } from "@/components/ui/badge";
import Link from "next/link";


export default function Works() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    Software Engineer | DevCircle Africa
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2019 - 2022
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Developed and maintained a complex web application for a
                  leading community platform. Utilized React, Node.js, MongoDB,
                  and various other technologies to deliver a seamless user
                  experience.
                  <Link
                    href="https://devicircleafrica.com"
                    className="text-orange-600"
                  >
                    Learn more
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Convex</Badge>
                  <Badge>REST API</Badge>
                  <Badge>HTML/CSS/JS</Badge>
                  <Badge>CMS</Badge>
                </div>
                <hr className="m-2" />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    Software Engineer | Andela Nigeria
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Open Source Contributor
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Contributed to various open source projects, focusing on
                  improving code quality, adding new features, and fixing bugs.
                  Worked with a team of developers to enhance the functionality
                  and performance of the projects.
                  <Link
                    href="https://www.andela.com/"
                    className="text-orange-600"
                  >
                    Learn more
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>REST API</Badge>
                  <Badge>Squalizer</Badge>
                </div>
                <hr className="m-2" />
              </div>

              {/* Maya Innovation */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    Software Engineer | Maya Innovation
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2022 - 2024
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Worked on the Large Language Model (LLM), which specifically
                  focused on developing a language model that can generate
                  human-like text. The model was trained on a large dataset of
                  text and was able to generate text that was indistinguishable
                  from human-written text.
                  <Link
                    href="https://dev-app.guidizy.com"
                    className="text-orange-600 ml-2"
                  >
                   Learn more
                  </Link>
                </p>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium">
                      Quality Assurance Engineer | Guidizy Ltd
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      2024 - 2025
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Basically my primary role was to make sure the client
                    application and all its affiliate systems were all stable
                    for use. From end to end testing to maintaining contents to
                    guidizy main website. And also to make sure the application
                    is SEO friendly.
                    <Link
                      href="https://dev-app.guidizy.com"
                      className="text-orange-600 ml-2"
                    >
                      Learn more
                    </Link>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Jira/Trello</Badge>
                    <Badge>E2E</Badge>
                    <Badge>SEO</Badge>
                    <Badge>CMS</Badge>
                    <Badge>Technical Writing</Badge>
                    <Badge>Python</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>MUI</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Reactjs</Badge>
                    <Badge>LangChain</Badge>
                    <Badge>Gitlab</Badge>
                    <Badge>KS8</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Ovh Cloud</Badge>
                    <Badge>LLM</Badge>
                  </div>
                </div>
              </div>

              <hr className="m-2" />

              {/* Hero Control System */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    Software Developer | Hero Control System
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2023 - 2023
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Worked on the both front-end & backend development of Edu SaaS
                  platform, implementing responsive designs and integrating with
                  various APIs.{" "}
                  <Link
                    href="https://www.zstudy.co/"
                    className="text-orange-600"
                  >
                    Learn more
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>ReactJS</Badge>
                  <Badge>Redux</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>API Integration</Badge>
                  <Badge>AWS</Badge>
                  <Badge>SEO</Badge>
                </div>
              </div>
              <hr className="m-2" />

              {/* OneLife Communication & Events */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    IT Specialist | OneLife Communication & Events
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2023 - 2025
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Worked on managing the company&rsquo;s IT infrastructure,
                  including hardware configuration, software installation, and
                  network setup. Provided technical support to employees and
                  clients.{" "}
                  <Link
                    href="https://onelife.co.zm"
                    className="text-orange-600"
                  >
                    Learn more
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML/CSS/JS</Badge>
                  <Badge>WordPress</Badge>
                  <Badge>Database</Badge>
                  <Badge>Hardware Configuration</Badge>
                  <Badge>IT Support</Badge>
                </div>
              </div>
              <hr className="m-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
