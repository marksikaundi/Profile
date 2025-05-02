import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20 border-2 border-orange-600">
              <Image
                src="/Mark Sikaundi.jpg"
                width={250}
                height={250}
                alt="Mark Sikaundi"
              />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">Mark Sikaundi</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Software Engineer
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">About Me</h3>
            <p className="text-gray-500 dark:text-gray-400">
              I am a passionate Artificial Intelligence(AI) Researcher &
              Software Engineer with over 5 years of experience in building
              softwares. I have a strong background in Python, JavaScript,
              React, Nextjs Node.js, and various databases. I am always eager to
              learn new technologies and tackle challenging projects. I have
              participated in various Data Science competions from{" "}
              <Link
                href="https://zindi.africa/users/Marksikaundi"
                className="text-orange-600"
              >
                Zindi
              </Link>{" "}
              and
              <Link
                href="https://www.kaggle.com/marksikaundi21"
                className="text-orange-600"
              >
                {" "}
                Kaggle.
              </Link>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>Pytorch</Badge>
              <Badge>Tensorflow</Badge>
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Reactjs/Nextjs</Badge>
              <Badge>Node.js/Expressjs</Badge>
              <Badge>MongoDB</Badge>
              <Badge>SQL</Badge>
              <Badge>Git/GitHub</Badge>
              <Badge>AWS/GCP</Badge>
              <Badge>Database</Badge>
              <Badge>Networking</Badge>
              <Badge>Technical Writing</Badge>
              <Badge>WordPress</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Reading</Badge>
              <Badge>Script Writing</Badge>
              <Badge>Video Gaming</Badge>
              <Badge>Podcasting</Badge>
            </div>
          </div>
          {/* University Attended */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">
              University of Phoenix -{" "}
              <span className="text-orange-600 ">Computer Science</span>
            </h3>
            {/*
              <div className="flex flex-wrap gap-2">
                <Badge>Class 2022</Badge>
              </div>
              */}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl mt-10 font-bold">Connect with Me</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://x.com/Alisikaundi"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <TwitterIcon className="h-5 w-5 text-orange-600" />
                @Alisikaundi
              </Link>
              <Link
                href="https://linkedin.com/in/marksikaundi"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <LinkedinIcon className="h-5 w-5 text-orange-600" />
                /MarkSikaundi
              </Link>
              <Link
                href="https://gitlab.com/marksikaundi"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <GitlabIcon className="h-5 w-5 text-orange-600" />
                /MarkSikaundi
              </Link>

              <Link
                href="https://gitlab.com/marksikaundi"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <GitlabIcon className="h-5 w-5 text-orange-600" />
                /MarkSikaundi
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    Founder & CEO | DevCircle Africa
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2019 - Present
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Developed and maintained a complex web application for a
                  leading community platform. Utilized React, Node.js, MongoDB,
                  and various other technologies to deliver a seamless user
                  experience.{" "}
                  <Link
                    href="https://devicircleafrica.com"
                    className="text-orange-600"
                  >
                    Learn more
                  </Link>
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>REST API</Badge>
                  <Badge>HTML/CSS/JS</Badge>
                  <Badge>CMS</Badge>
                </div>
                <hr className="m-2" />
              </div>

              {/* Maya Innovation */}
              <div className="grid gap-2">
                {/* <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    Data Scientist | Maya Innovation
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2022 - 2023
                  </p>
                </div> */}
                {/* <p className="text-gray-500 dark:text-gray-400">
                  Worked on the Large Language Model (LLM) project, which
                  specifically focused on developing a language model that can
                  generate human-like text. The model was trained on a large
                  dataset of text and was able to generate text that was
                  indistinguishable from human-written text.
                </p> */}
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-medium">
                      Quality Assurance Engineer | Guidizy Ltd
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      2022 - Present
                    </p>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Currently my primary role is to make sure the client
                    application and all its affiliate systems are all stable for
                    use. From end to end testing to maintaining contents to
                    guidizy main website.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Jira/Trello</Badge>
                    <Badge>E2E</Badge>
                    <Badge>SEO</Badge>
                    <Badge>CMS</Badge>
                    <Badge>Technical Writing</Badge>
                    <Badge>Python</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Reactjs</Badge>
                    <Badge>LangChain</Badge>
                    <Badge>Gitlab</Badge>
                    <Badge>KS8</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Ovh Cloud</Badge>
                    <Badge>LLM</Badge>
                  </div>
                  <p>
                  About Guidizy(Maya Innovation) -
                  <Link href="https://guidizy.com" className="text-orange-600">
                     Learn more 
                  </Link>
                  </p>
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
                  <Link href="https://zstudy.com" className="text-orange-600">
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

function GitlabIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
