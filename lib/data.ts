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
    title: "Portfolio",
    description:
      "This portfolio showcases my journey in web development, featuring projects that highlight my expertise in modern web technologies, including Next.js, Tailwind CSS, and other cutting-edge tools. Built with Next.js framework, my portfolio demonstrates the seamless combination of server-side rendering and static site generation, ensuring optimal performance and enhanced SEO. The design is driven by Tailwind CSS, allowing for a clean, responsive, and customizable UI with minimal effort. I’ve also deployed the site on Vercel, ensuring fast load times, secure hosting, and scalability.",
    techStack: [
      skillsData[8],
      skillsData[2],
      skillsData[10],
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: CalendarImg,
    link: "",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "My Calendar",
    description:
      "A user-friendly scheduling tool to help stay organized and manage time effectively. Build Next.js, enabling a fast and dynamic user experience with server-side rendering and static generation. The design is crafted using Tailwind CSS, ensuring a fully responsive and visually appealing interface that adapts across all devices. The app’s backend is supported by Supabase, providing authentication services and secure and real-time database management for seamless event creation, editing, and syncing across multiple devices. Vercel powers the deployment, offering lightning-fast performance and reliable hosting, allowing users to access their calendars anytime, anywhere with optimal speed and reliability.",
    techStack: [
      skillsData[8],
      skillsData[2],
      { icon: React.createElement(RiSupabaseLine), title: "Supabase" },
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: CalendarImg,
    link: "https://my-calendar-smoky.vercel.app/",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Vacation Rental Website",
    description:
      "Built entirely with HTML, CSS, and JavaScript, this website offers a fast, clean, and responsive user experience without relying on any external frameworks and it marks my very first web development project—created from scratch without any prior experience.",
    techStack: [skillsData[0], skillsData[1], skillsData[5]],
    imageUrl: CalendarImg,
    link: "https://casavasilia.com/",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Perigrammata",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    techStack: [
      { icon: React.createElement(SiNextdotjs), title: "Next.js" },
      { icon: React.createElement(RiTailwindCssFill), title: "Tailwind CSS" },
      { icon: React.createElement(RiSupabaseLine), title: "Supabase" },
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: CalendarImg,
    link: "",
    tags: ["HTML", "CSS", "Tailwind"],
  },
];

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
