import React from "react";
import {
  FaJava,
  FaGitAlt,
  FaBootstrap,
  FaAws,
  FaLinkedinIn,
  FaPhp,
  FaVuejs,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiStorybook,
  SiVitest,
} from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiPostgresql } from "react-icons/di";
import { BiLogoAdobe } from "react-icons/bi";
import { SiUdemy } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import CalendarImg from "../public/images/calendar.png";
import PortfolioImg from "../public/images/portfolio.png";
import CasaVasiliaImg from "../public/images/casavasilia.png";
import PerigrammataImg from "../public/images/perigrammata1.png";
import DeloitteImg from "../public/images/deloitte-digital-logo.png";
import UniSystemsImg from "../public/images/uni-systems-logo-white.png";
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
    title: "Vue js",
    icon: React.createElement(FaVuejs),
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
    title: "AWS (Basics)",
    icon: React.createElement(FaAws),
  },
  {
    title: "AEM 6.5",
    icon: React.createElement(BiLogoAdobe),
  },
  {
    title: "Storybook",
    icon: React.createElement(SiStorybook),
  },
  {
    title: "Vitest",
    icon: React.createElement(SiVitest),
  },
  {
    title: "Git",
    icon: React.createElement(FaGitAlt),
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    company: "Uni Systems",
    title: "Front-End Developer",
    location: "Chania",
    description:
      "Software Engineer in Public Administration and Finance Projects. Specializing in the development and maintenance of software solutions for public sector and government projects using front-end technologies such as React, Material-UI (MUI), and Tailwind CSS.",
    startDate: "2024-11-04",
    endDate: "Present",
    img: UniSystemsImg,
    items: [],
  },
  {
    id: 2,
    company: "Deloitte Digital",
    title: "Front-End Developer",
    location: "Chania",
    description:
      "Worked as a Front-End Developer, conducting code reviews and providing guidance to ensure code quality aligned with customer business needs, marketing objectives, and SEO strategy. Utilized a tech stack including React and Sass, leveraging Storybook and Jest to generate snapshot tests for all React components, ensuring consistency and reliability across the application. Promoted annually, consistently recognized for delivering high-quality, innovative solutions and driving impactful results within the team.",
    icon: React.createElement(LuGraduationCap),
    date: "2024-07-17",
    startDate: "2021-08-21",
    endDate: "2024-11-01",
    items: [
      {
        title: "Front-End Developer (Consultant II)",
        description:
          "Integrated payment solutions using Datatrans library with React JS, implementing SecureFields for Visa/Mastercard, Payment button for Google and Apple Pay, and Lightbox for Klarna payment methods to ensure seamless and secure transactions.",
        date: "2024-07-17",
      },
      {
        title: "Front-End Developer (Consultant I)",
        description:
          "Developed and maintained modern, scalable, and high- performance web applications using the Next.js framework, leveraging various AWS services for full cloud-based implementations (implementing AWS Cognito authentication in Next.js App).",
        date: "2023-07-17",
      },
      {
        title: "Front-End Developer (Business Analyst III)",
        description:
          "Created responsive websites using the latest front-end technologies, including HTML, SCSS, and jQuery, along with CSS frameworks like Bootstrap, to deliver high-quality, mobile-friendly web experiences.",
        date: "2022-07-17",
      },
      {
        title: "Front-End Developer (Business Analyst I)",
        description:
          "Collaborated with the front-end team using Vanilla JS and SCSS.",
        date: "2021-07-17",
      },
    ],
    img: DeloitteImg,
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "CineScope",
    description:
      "CineScope is a dynamic movie-hub web application designed to help users discover, explore, and track their favorite films effortlessly. Powered by Vue 3 and TMDB, CineScope provides an intuitive platform to browse top-rated and trending movies while offering detailed insights into any film of interest—all in one place!",
    techStack: [
      skillsData[9],
      skillsData[6],
      skillsData[2],
      skillsData[16],
      skillsData[17],
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: PortfolioImg,
    link: "https://cine-scope-olive.vercel.app/",
    repo: "https://github.com/exanthakis/cine-scope",
    tags: ["Vue.js", "Tailwind"],
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "This portfolio showcases my journey in web development, featuring projects that highlight my expertise in modern web technologies, including Next.js, Tailwind CSS, and other cutting-edge tools. This project was about more than just a portfolio refresh it was an exploration of my growth as a designer, developer, and creator. I wanted to craft a digital space that reflects who I am today and where I’m headed tomorrow. Built with Next.js framework, my portfolio demonstrates the seamless combination of server-side rendering and static site generation, ensuring optimal performance and enhanced SEO. The design is driven by Tailwind CSS, allowing for a clean, responsive, and customizable UI with minimal effort. I’ve also deployed the site on Vercel, ensuring fast load times, secure hosting, and scalability.",
    techStack: [
      skillsData[8],
      skillsData[6],
      skillsData[2],
      skillsData[11],
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: PortfolioImg,
    link: "https://emmanouelxanthakis.com",
    repo: "",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 3,
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
    repo: "https://github.com/exanthakis/my-calendar",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 4,
    title: "Vacation Rental Website",
    description:
      "Built entirely with HTML, CSS, and JavaScript, this website offers a fast, clean, and responsive user experience without relying on any external frameworks and it marks my very first web development project—created from scratch without any prior experience.",
    techStack: [skillsData[0], skillsData[1], skillsData[5]],
    imageUrl: CasaVasiliaImg,
    link: "https://casavasilia.com/",
    repo: "https://github.com/exanthakis/casavasilia_website",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "Perigrammata",
    description:
      "This web application was developed for my diploma thesis. The system functions as a recommender tool for students, helping them plan their course selections based on the skills they wish to enhance. It also provides insights into the reinforcement rates for ABET achievements in courses they have successfully completed. Additionally, the system enables instructors to export course outlines (in compliance with the Quality Assurance and Certification Authority in Higher Education, ADIP) in standard formats such as PDF and HTML. It also supports the documentation of learning outcomes according to ABET accreditation standards. Users are required to log in using their academic credentials via LDAP authentication.",
    techStack: [
      skillsData[0],
      skillsData[1],
      skillsData[5],
      { icon: React.createElement(FaPhp), title: "PHP" },
    ],
    imageUrl: PerigrammataImg,
    link: "https://perigrammata.tuc.gr/",
    repo: "",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
  },
];

export const certificationsData = [
  {
    title: "AWS Certified Cloud Practitioner",
    date: "09/2023 - 09/2026",
    link: "https://www.credly.com/badges/dc064a46-4b29-4b97-9fa6-480e5137a77f/linked_in_profile",
    icon: React.createElement(FaAws),
  },
  {
    title: "Adobe Certified Expert - Adobe Experience Manager Sites Developer",
    date: "05/2023 - 11/2025",
    link: "https://www.credly.com/badges/daabab03-fe7f-428f-8220-861797bfa1e8/linked_in_profile",
    icon: React.createElement(BiLogoAdobe),
  },
  {
    title:
      "Adobe Certified Expert - Adobe Experience Manager Sites Business Practitioner",
    date: "11/2021 - 11/2025",
    link: "https://www.credly.com/badges/1f344fc0-9a10-49b5-9288-985905629f72/linked_in_profile",
    icon: React.createElement(BiLogoAdobe),
  },
] as const;
