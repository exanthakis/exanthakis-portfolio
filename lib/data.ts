import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJava, FaGitAlt, FaBootstrap, FaAws } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiRedux, SiMui } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { BiLogoAdobe } from "react-icons/bi";
import { PiCertificateThin } from "react-icons/pi";

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
    name: "Skills",
    hash: "#skills",
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

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "",
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;

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
