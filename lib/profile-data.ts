import type { IconType } from "react-icons";
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
  SiApollographql,
  SiDbeaver,
  SiExpress,
  SiGooglecloud,
  SiMongodb,
  SiNeovim,
  SiParrotsecurity,
  SiPostman,
  SiPycharm,
  SiRedis,
  SiTypescript,
  SiVercel,
  SiWebstorm,
} from "react-icons/si";
import { VscTerminalPowershell, VscVscode } from "react-icons/vsc";

export const coreSkills = [
  "Software Development",
  "IT Support",
  "Networking",
  "Cyber Security",
  "Agile",
  "Mentoring",
  "Quality Assurance",
  "Hardware Troubleshooting",
  "Technical Writing",
  "Data Analysis",
  "Cloud Computing",
] as const;

export const techStack: { icon: IconType; label: string }[] = [
  { icon: RiJavascriptFill, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: RiNextjsFill, label: "Next.js" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: FaPython, label: "Python" },
  { icon: FaGolang, label: "Go" },
  { icon: PiFileSqlBold, label: "SQL" },
  { icon: GrGraphQl, label: "GraphQL" },
  { icon: SiApollographql, label: "Apollo" },
  { icon: BiLogoPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiRedis, label: "Redis" },
  { icon: RiSupabaseFill, label: "Supabase" },
  { icon: FaGit, label: "Git" },
  { icon: FaAws, label: "AWS" },
  { icon: SiGooglecloud, label: "GCP" },
  { icon: SiVercel, label: "Vercel" },
  { icon: BiLogoNetlify, label: "Netlify" },
  { icon: DiHeroku, label: "Heroku" },
  { icon: VscVscode, label: "VS Code" },
  { icon: SiNeovim, label: "Neovim" },
  { icon: SiWebstorm, label: "WebStorm" },
  { icon: SiPycharm, label: "PyCharm" },
  { icon: SiPostman, label: "Postman" },
  { icon: SiDbeaver, label: "DBeaver" },
  { icon: FaUbuntu, label: "Ubuntu" },
  { icon: FcLinux, label: "Linux" },
  { icon: SiParrotsecurity, label: "Parrot OS" },
  { icon: VscTerminalPowershell, label: "PowerShell" },
];

export const socialLinks = [
  {
    href: "https://github.com/marksikaundi",
    label: "GitHub",
    handle: "MarkSikaundi",
    icon: FaGithub,
  },
  {
    href: "https://gitlab.com/marksikaundi",
    label: "GitLab",
    handle: "MarkSikaundi",
    icon: FaGitlab,
  },
  {
    href: "https://x.com/Alisikaundi",
    label: "Twitter",
    handle: "@Alisikaundi",
    icon: FaTwitter,
  },
  {
    href: "https://linkedin.com/in/marksikaundi",
    label: "LinkedIn",
    handle: "MarkSikaundi",
    icon: FaLinkedin,
  },
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  link?: string;
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Technical Support Officer",
    company: "Electoral Commission of Zambia",
    period: "2025 — Present",
    description:
      "Frontline IT and systems support for secure electoral processes — installing and maintaining hardware, software, and network systems for voter registration, election monitoring, and results transmission.",
    link: "https://www.elections.org.zm",
    tags: ["IT Support", "Networking", "Security"],
  },
  {
    role: "Quality Assurance Engineer",
    company: "Guidizy Ltd",
    period: "2024 — 2025",
    description:
      "Ensured client applications and affiliate systems remained stable through end-to-end testing, content maintenance, and SEO optimization across the Guidizy platform.",
    link: "https://dev-app.guidizy.com",
    tags: [
      "E2E",
      "SEO",
      "TypeScript",
      "React",
      "LangChain",
      "AWS",
      "Kubernetes",
    ],
  },
  {
    role: "IT Specialist",
    company: "OneLife Communication & Events",
    period: "2023 — 2025",
    description:
      "Managed company IT infrastructure including hardware configuration, software installation, and network setup. Provided technical support to employees and clients.",
    link: "https://onelife.co.zm",
    tags: ["WordPress", "IT Support", "Networking", "Hardware"],
  },
  {
    role: "Software Engineer",
    company: "Maya Innovation",
    period: "2022 — 2024",
    description:
      "Developed a Large Language Model focused on generating human-like text, trained on extensive datasets for NLP applications.",
    link: "https://dev-app.guidizy.com",
    tags: ["Python", "LLM", "NLP", "Machine Learning"],
  },
  {
    role: "Software Developer",
    company: "Hero Control System",
    period: "2023",
    description:
      "Full-stack development of an education SaaS platform with responsive designs and API integrations.",
    link: "https://www.zstudy.co/",
    tags: ["React", "Redux", "MongoDB", "AWS", "Tailwind CSS"],
  },
  {
    role: "Software Engineer",
    company: "DevCircle Africa",
    period: "2019 — 2022",
    description:
      "Built and maintained a complex community web application using React, Node.js, MongoDB, and modern tooling to deliver a seamless user experience.",
    link: "https://devcircleafrica.com",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Convex"],
  },
  {
    role: "Software Engineer",
    company: "Andela Nigeria",
    period: "Open Source",
    description:
      "Contributed to open source projects — improving code quality, adding features, and fixing bugs alongside a distributed engineering team.",
    link: "https://www.andela.com/",
    tags: ["React", "TypeScript", "Node.js", "Open Source"],
  },
];
