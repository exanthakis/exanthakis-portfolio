import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaBootstrap,
  FaAws,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiRedux, SiMui } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { BiLogoAdobe } from "react-icons/bi";
import { PiCertificateThin } from "react-icons/pi";
import { TbBrandFramerMotion } from "react-icons/tb";
import CalendarImg from "../public/images/my-calendar-app.png";
import { RiSupabaseLine } from "react-icons/ri";
import { RxVercelLogo } from "react-icons/rx";

export const fullName = "Emmanouel Xanthakis";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const socialLinks = [
  {
    link: "https://github.com/exanthakis",
    icon: React.createElement(IoLogoGithub, {
      className: "opacity-70 group-hover:translate-x-1 transition text-xl",
    }),
  },
  {
    link: "https://www.linkedin.com/in/emmanouil-xanthakis",
    icon: React.createElement(FaLinkedinIn, {
      className: "opacity-70 group-hover:translate-x-1 transition text-xl",
    }),
  },
];

export const experiencesData = [
  {
    id: 1,
    title: "Front-End Developer (Consultant II)",
    location: "Chania",
    description:
      "Worked as a Front-End Developer, conducting code reviews and providing guidance to ensure code quality aligned with customer business needs, marketing objectives, and SEO strategy. Utilized a tech stack including React and Sass, leveraging Storybook and Jest to generate snapshot tests for all React components, ensuring consistency and reliability across the application.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-07-17",
  },
  {
    id: 2,
    title: "Front-End Developer (Consultant I)",
    location: "Chania",
    description:
      "Developed and maintained modern, scalable, and high- performance web applications using the Next.js framework, leveraging various AWS services for full cloud-based implementations (implementing AWS Cognito authentication in Next.js App).",
    icon: React.createElement(LuGraduationCap),
    date: "2023-07-17",
  },
  {
    id: 3,
    title: "Front-End Developer (Business Analyst III)",
    location: "Chania",
    description:
      "Created responsive websites using the latest front-end technologies, including HTML, SCSS, and jQuery, along with CSS frameworks like Bootstrap, to deliver high-quality, mobile-friendly web experiences.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-07-17",
  },
  {
    id: 4,
    title: "Front-End Developer (Business Analyst I)",
    location: "Chania",
    description:
      "Created responsive websites using the latest front-end technologies, including HTML, SCSS, and jQuery, along with CSS frameworks like Bootstrap, to deliver high-quality, mobile-friendly web experiences.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-07-17",
  },
] as const;

export const projectsData = [
  {
    title: "My Calendar",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    icons: [
      React.createElement(SiNextdotjs),
      React.createElement(RiTailwindCssFill),
      React.createElement(RiSupabaseLine),
      React.createElement(RxVercelLogo),
    ],
    imageUrl: CalendarImg,
    link: "https://my-calendar-smoky.vercel.app/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    icons: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "",
    link: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    icons: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
    link: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    icons: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
    link: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    icons: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
    link: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    icons: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
    link: "",
  },
] as const;

export const skillsData = [
  {
    title: "HTML5",
    icon: React.createElement(AiOutlineHtml5),
  },
  {
    title: "CSS",
    icon: React.createElement(IoLogoCss3),
  },
  {
    title: "Tailwind",
    icon: React.createElement(RiTailwindCssFill),
  },
  {
    title: "MUI",
    icon: React.createElement(SiMui),
  },
  {
    title: "Bootstrap",
    icon: React.createElement(FaBootstrap),
  },
  {
    title: "JavaScript",
    icon: React.createElement(IoLogoJavascript),
  },
  {
    title: "TypeScript",
    icon: React.createElement(SiTypescript),
  },
  {
    title: "React",
    icon: React.createElement(GrReactjs),
  },
  {
    title: "Next.js",
    icon: React.createElement(SiNextdotjs),
  },
  {
    title: "Redux",
    icon: React.createElement(SiRedux),
  },
  {
    title: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
  },
  {
    title: "Java",
    icon: React.createElement(FaJava),
  },
  {
    title: "PostgreSQL",
    icon: React.createElement(DiPostgresql),
  },
  {
    title: "AWS",
    icon: React.createElement(FaAws),
  },
  {
    title: "AEM 6.5",
    icon: React.createElement(BiLogoAdobe),
  },
  {
    title: "Git",
    icon: React.createElement(FaGitAlt),
  },
] as const;

export const certificationsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    date: "09/2023 - 09/2026",
    link: "https://www.credly.com/badges/dc064a46-4b29-4b97-9fa6-480e5137a77f/linked_in_profile",
    icon: React.createElement(PiCertificateThin),
  },
  {
    title: "Adobe Certified Expert - Adobe Experience Manager Sites Developer",
    date: "05/2023 - 11/2025",
    link: "https://www.credly.com/badges/daabab03-fe7f-428f-8220-861797bfa1e8/linked_in_profile",
    icon: React.createElement(PiCertificateThin),
  },
  {
    title:
      "Adobe Certified Expert - Adobe Experience Manager Sites Business Practitioner",
    date: "11/2021 - 11/2025",
    link: "https://www.credly.com/badges/1f344fc0-9a10-49b5-9288-985905629f72/linked_in_profile",
    icon: React.createElement(PiCertificateThin),
  },
] as const;
