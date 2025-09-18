import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { BiLogoNetlify, BiLogoPostgresql } from "react-icons/bi";
import { DiHeroku } from "react-icons/di";
import {
  FaAws,
  FaGit,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaTwitter,
  FaUbuntu,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { GrGraphQl } from "react-icons/gr";
import { PiFileSqlBold } from "react-icons/pi";
import { RiJavascriptFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import {
  SiDbeaver,
  SiGooglecloud,
  SiParrotsecurity,
  SiMongodb,
  SiPostman,
  SiPycharm,
  SiRedis,
  SiTypescript,
  SiVercel,
  SiWebstorm,
  SiNeovim,
  SiExpress,
  SiApollographql,
} from "react-icons/si";
import { VscTerminalPowershell, VscVscode } from "react-icons/vsc";

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
              I’m a Software Engineer and Artificial Intelligence Researcher
              with over 5 years of experience building scalable, efficient, and
              user-focused applications. My work spans across FullStack web
              development and cutting edge AI research, with strong proficiency
              in Python, JavaScript, TypeScript, and frameworks like React,
              Next.js, Node.js, PyTorch, and TensorFlow. Throughout my career,
              I’ve developed projects ranging from responsive web platforms to
              intelligent systems in NLP, computer vision, and reinforcement
              learning. I’m also well versed in RESTful API design, database
              management, and deploying cloud- based solutions on AWS and GCP. I
              value clean code, performance driven development, and
              collaborative teamwork. I’ve contributed to agile development
              teams, led technical reviews, and mentored junior developers.
              {/* what’s next. I have participated in various Data Science
              competions from{" "}
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
              </Link> */}
            </p>
          </div>
          {/* Core Skills */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Software Development</Badge>
              <Badge>IT Support</Badge>
              <Badge>Networking</Badge>
              <Badge>Cyber Security</Badge>
              <Badge>Agile</Badge>
              <Badge>Mentoring</Badge>
              <Badge>Quality Assurance</Badge>
              <Badge>Hardware Troubleshooting</Badge>
              <Badge>Technical Writing</Badge>
              <Badge>Data Analysis</Badge>
              <Badge>Cloud Computing</Badge>
            </div>
          </div>

          {/* Programming Languages  */}
          <div className="space-y-2">
            <h3 className="text-xl mt-10 font-bold">Programming & Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <RiJavascriptFill className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaNodeJs className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <SiTypescript className="h-10 w-10 text-orange-600" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaPython className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaGolang className="h-10 w-10 text-orange-600" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <PiFileSqlBold className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <RiNextjsFill className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiExpress className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <GrGraphQl className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiApollographql className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <VscTerminalPowershell className="h-10 w-10 text-orange-600" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaUbuntu className="h-10 w-10 text-orange-600" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FcLinux className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiParrotsecurity className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiWebstorm className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <BiLogoPostgresql className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiPycharm className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaGit className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <VscVscode className="h-10 w-10 text-orange-600" />
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiNeovim className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiPostman className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiVercel className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaAws className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiGooglecloud className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <RiSupabaseFill className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiMongodb className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiRedis className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <SiDbeaver className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <BiLogoNetlify className="h-10 w-10 text-orange-600" />
              </Link>

              <Link
                href="#"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <DiHeroku className="h-10 w-10 text-orange-600" />
              </Link>
            </div>
          </div>

          {/* University Attended */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold">
              Information & Communication University(ICU) -{" "}
              <span className="text-orange-600 ">BSc`SEng</span>
            </h3>
          </div>

          {/* Connect with Me */}
          <div className="space-y-2">
            <h3 className="text-xl mt-10 font-bold">Connect with Me</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://gitlab.com/marksikaundi"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaGithub className="h-5 w-5 text-orange-600" />
                MarkSikaundi
              </Link>

              <Link
                href="https://gitlab.com/marksikaundi"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaGitlab className="h-5 w-5 text-orange-600" />
                MarkSikaundi
              </Link>
              <Link
                href="https://x.com/Alisikaundi"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <FaTwitter className="h-5 w-5 text-orange-600" />
                @Alisikaundi
              </Link>
              <Link
                href="https://linkedin.com/in/marksikaundi"
                className="flex items-center gap-2 "
                prefetch={false}
              >
                <FaLinkedin className="h-5 w-5 text-orange-600" />
                MarkSikaundi
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Work Experience</h3>
            <div className="space-y-4">
              <hr className="m-2" />
              {/* Electoral Commission of Zambia */}
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium">
                    TSO (II) | Electoral Commission of Zambia
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    2025 - Present
                  </p>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Technical Support Officers at the Electoral Commission of
                  Zambia <b className="text-black">(ECZ)</b> provide frontline
                  IT and systems support to ensure smooth and secure electoral
                  processes. Responsible for installing, configuring, and
                  maintaining computer hardware, software, and network systems
                  used in voter registration, election monitoring, and results
                  transmission. Their role includes troubleshooting technical
                  issues, supporting users across ECZ offices and polling
                  stations, safeguarding data integrity, and ensuring compliance
                  with ICT security standards.
                  <Link
                    href="https://www.elections.org.zm"
                    className="text-orange-600"
                  >
                    Learn more
                  </Link>
                </p>

                <hr className="m-2" />
              </div>

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
