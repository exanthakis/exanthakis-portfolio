import React from "react";
import {
  FaGitAlt,
  FaBootstrap,
  FaAws,
  FaLinkedinIn,
  FaPhp,
  FaVuejs,
  FaSass,
  FaFigma,
  FaJira,
  FaGitlab,
  FaGithub,
  FaChrome,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill, RiTeamFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiStorybook,
  SiVitest,
  SiStackblitz,
  SiVite,
  SiPostman,
  SiSupabase,
} from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { GrReactjs, GrContact } from "react-icons/gr";
import { BiLogoAdobe, BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import CalendarImg from "../public/images/calendar.png";
import CalendarXsImg from "../public/images/calendar_xs.png";
import PortfolioImg from "../public/images/portfolio.png";
import PortfolioXsImg from "../public/images/portfolio_xs.png";
import CineScopeImg from "../public/images/cinescope3.jpg";
import CineScopeXsImg from "../public/images/cinescope_xs.jpg";
import OpcoImg from "../public/images/opco.jpg";
import OpcoXsImg from "../public/images/opco_xs.jpg";
import CasaVasiliaImg from "../public/images/casavasilia.png";
import CasaVasiliaXsImg from "../public/images/casavasilia_xs.png";
import PerigrammataImg from "../public/images/perigrammata1.png";
import PerigrammataXsImg from "../public/images/perigrammata_xs.png";
import DeloitteImg from "../public/images/deloitte-digital-logo.png";
import UniSystemsImg from "../public/images/uni-systems-logo-white.png";
import { RiSupabaseLine } from "react-icons/ri";
import { RxVercelLogo } from "react-icons/rx";
import { MdHome, MdAppSettingsAlt } from "react-icons/md";
import { BsFilePerson } from "react-icons/bs";

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
    hash: "/",
    children: [
      {
        name: "Home",
        hash: "#home",
        icon: React.createElement(MdHome, {
          className: "text-xl",
        }),
      },
      {
        name: "About",
        hash: "#about",
        icon: React.createElement(BsFilePerson, {
          className: "text-xl",
        }),
      },
      {
        name: "Projects",
        hash: "#projects",
        icon: React.createElement(MdAppSettingsAlt, {
          className: "text-xl",
        }),
      },
      {
        name: "Contact",
        hash: "#contact",
        icon: React.createElement(GrContact, {
          className: "text-xl",
        }),
      },
    ],
    isButton: false,
  },
  {
    name: "Blog",
    hash: "/blog",
    children: [],
    isButton: false,
  },
  {
    name: "Contact",
    hash: "/#contact",
    children: [],
    isButton: true,
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

export const mainSkillsData = [
  {
    title: "Modern Stack Expertise",
    icon: React.createElement(SiStackblitz),
    iconColor: "#FFF42B",
  },
  {
    title: "Performance-Optimized Interfaces",
    icon: React.createElement(CgPerformance),
    iconColor: "#68CC58",
  },
  {
    title: "Agile Collaboration Across Teams",
    icon: React.createElement(RiTeamFill),
    iconColor: "#C3E0E5",
  },
];

export const skillsData = [
  {
    title: "HTML",
    icon: React.createElement(AiOutlineHtml5),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: React.createElement(IoLogoCss3),
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    title: "Sass",
    icon: React.createElement(FaSass),
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    title: "Tailwind CSS",
    icon: React.createElement(RiTailwindCssFill),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    title: "Material UI",
    icon: React.createElement(SiMui),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
  },
  {
    title: "Bootstrap",
    icon: React.createElement(FaBootstrap),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  },
  {
    title: "JavaScript",
    icon: React.createElement(IoLogoJavascript),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    title: "TypeScript",
    icon: React.createElement(SiTypescript),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    title: "React",
    icon: React.createElement(GrReactjs),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    icon: React.createElement(SiNextdotjs),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "Vue.js (Basics)",
    icon: React.createElement(FaVuejs),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
  },
  {
    title: "Redux",
    icon: React.createElement(SiRedux),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },
  {
    title: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/framermotion/framermotion-original.svg",
  },
  {
    title: "Supabase",
    icon: React.createElement(SiSupabase),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
  },
  {
    title: "AWS (Basics)",
    icon: React.createElement(FaAws),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  {
    title: "AEM 6.5",
    icon: React.createElement(BiLogoAdobe),
    image: "",
  },
  {
    title: "Storybook",
    icon: React.createElement(SiStorybook),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
  },
  {
    title: "Vitest",
    icon: React.createElement(SiVitest),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitest/vitest-original.svg",
  },
  {
    title: "Git",
    icon: React.createElement(FaGitAlt),
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
] as const;

export const toolkitData = [
  {
    title: "Visual Studio Code",
    icon: React.createElement(BiLogoVisualStudio),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    title: "Chrome DevTools",
    icon: React.createElement(FaChrome),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/chrome/chrome-original.svg",
  },
  {
    title: "Postman",
    icon: React.createElement(SiPostman),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
  },
  {
    title: "Figma",
    icon: React.createElement(FaFigma),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },
  {
    title: "Jira",
    icon: React.createElement(FaJira),
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
  },
  {
    title: "GitHub",
    icon: React.createElement(FaGithub),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    title: "GitLab",
    icon: React.createElement(FaGitlab),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg",
  },
  {
    title: "Vite",
    icon: React.createElement(SiVite),
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    company: "Uni Systems",
    title: "Front-End Developer",
    location: "Chania",
    description:
      "Software Engineer in Public Administration and Finance Projects. Specializing in the development and maintenance of software solutions for public sector and government projects using React & Material UI.",
    startDate: "2024-11-04",
    endDate: "Present",
    img: UniSystemsImg,
    items: [
      {
        title: "",
        description:
          "Implemented secure authentication in React using OpenID Connect (OIDC) with Keycloak as the identity provider, leveraging JSON Web Tokens (JWT) for secure routing and role-based access control.",
        date: "",
      },
      {
        title: "",
        description:
          "Developed custom React hook utilizing TanStack React Query to efficiently fetch data with Axios, enabling caching and optimizing performance.",
        date: "",
      },
    ],
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
          "Integrated full payment flow in React using Datatrans payment gateway, implementing integration flows such as SecureFields (Visa/Mastercard), Payment Button (Google/Apple Pay), and Lightbox (Klarna) to ensure seamless and secure transactions.",
        date: "2024-07-17",
      },
      {
        title: "Front-End Developer (Consultant I)",
        description:
          "Developed and maintained modern, scalable, and high-performance web applications using Next.js framework, leveraging various AWS services for full cloud-based implementations.",
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
        description: "Collaborated with the front-end team using Vanilla JS and SCSS.",
        date: "2021-07-17",
      },
    ],
    img: DeloitteImg,
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Opco",
    description:
      "Opco is a cutting-edge industrial solutions company that helps businesses thrive in the era of smart operations. By integrating advanced process control, intelligent automation, and data-driven insights, Opco enables clients to reduce variability, increase reliability, and unlock sustainable performance improvements.\n\nBuilt with:\n• Next.js 15.4 for App Router and server-side rendering.\n• TypeScript 5 for type-safe, maintainable code.\n• Tailwind CSS 4 for rapid, responsive styling.\n• Resend + React Email for dynamic email templates.\n• Vercel hosting for seamless deployment and performance.",
    techStack: [
      skillsData[9],
      skillsData[7],
      skillsData[3],
      skillsData[12],
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: OpcoImg,
    imageXsUrl: OpcoXsImg,
    link: "https://opco.gr/",
    repo: "",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 2,
    title: "CineScope",
    description:
      "CineScope is a dynamic movie-hub web application designed to help users discover, explore, and track their favorite films effortlessly. Powered by Vue 3 and TMDB, CineScope provides an intuitive platform to browse top-rated and trending movies while offering detailed insights into any film of interest—all in one place!\n\nFeatures:\n• Advanced Movie Search – Find films based on genres, release date, language, and more.\n• Comprehensive Film Details – Access in-depth information, including cast, crew, synopsis, ratings, and trailers.\n• Trending & Top-Rated Movies – Stay updated with what’s popular in the film industry.\n• Personalized Watchlist – Keep track of movies you want to watch.\n\nBuilt with:\n• Vue 3.5 (Composition API with script setup)\n• TypeScript\n• Pinia\n• Vue Router\n• Tailwind CSS\n• Axios\n• Storybook\n• Vitest",
    techStack: [
      skillsData[10],
      skillsData[7],
      skillsData[3],
      skillsData[16],
      skillsData[17],
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: CineScopeImg,
    imageXsUrl: CineScopeXsImg,
    link: "https://cine-scope-olive.vercel.app/",
    repo: "https://github.com/exanthakis/cine-scope",
    tags: ["Vue.js", "Tailwind"],
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "This portfolio showcases my journey in web development, featuring projects that highlight my expertise in modern web technologies, including Next.js, Tailwind CSS, and other cutting-edge tools.\n\nThis project was about more than just a portfolio refresh it was an exploration of my growth as a designer, developer, and creator. I wanted to craft a digital space that reflects who I am today and where I’m headed tomorrow.\n\nFeatures:\n• Clean and modern design\n• Responsive layout for all devices\n• Fast performance with server-side rendering\n• SEO-friendly pages\n• Easy to update and expand\n\nTech Stack:\n• Next.js – for server-side rendering and static site generation\n• TypeScript – for type safety and better development experience\n• Tailwind CSS – for fast and flexible styling\n• Framer Motion – for animations and UI transitions\n• Vercel – for fast and secure deployment",
    techStack: [
      skillsData[9],
      skillsData[7],
      skillsData[3],
      skillsData[12],
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: PortfolioImg,
    imageXsUrl: PortfolioXsImg,
    link: "https://emmanouelxanthakis.com",
    repo: "https://github.com/exanthakis/exanthakis-portfolio",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 4,
    title: "My Calendar",
    description:
      "Calendar App is a modern and intuitive web application that allows users to manage their schedules efficiently. Users can sign in seamlessly using Google, GitHub, or a Magic Link and add notes for each date through an interactive calendar interface.\n\n Features:\n• Secure Authentication – Sign in via Google, GitHub, or Magic Link.\n• Interactive Calendar – Easily navigate and manage events.\n• Add Notes – Attach personalized notes to specific dates.\n• Cloud-Based Storage – Data is securely stored and retrieved using Supabase.\n• Responsive UI – Built with Tailwind CSS for a sleek and modern design.\n\n Tech Stack:\n• Next.js – Server-side rendering and optimized performance.\n• Tailwind CSS – Modern and responsive styling.\n• Supabase – Authentication & database management.",
    techStack: [
      skillsData[9],
      skillsData[3],
      { icon: React.createElement(RiSupabaseLine), title: "Supabase" },
      { icon: React.createElement(RxVercelLogo), title: "Vercel" },
    ],
    imageUrl: CalendarImg,
    imageXsUrl: CalendarXsImg,
    link: "https://my-calendar-smoky.vercel.app/",
    repo: "https://github.com/exanthakis/my-calendar",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    id: 5,
    title: "Vacation Rental Website",
    description:
      "Built entirely with HTML, CSS, and JavaScript, this website offers a fast, clean, and responsive user experience without relying on any external frameworks and it marks my very first web development project—created from scratch without any prior experience.",
    techStack: [skillsData[0], skillsData[1], skillsData[6]],
    imageUrl: CasaVasiliaImg,
    imageXsUrl: CasaVasiliaXsImg,
    link: "https://casavasilia.com/",
    repo: "https://github.com/exanthakis/casavasilia_website",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    title: "Perigrammata",
    description:
      "This web application was developed for my diploma thesis. The system functions as a recommender tool for students, helping them plan their course selections based on the skills they wish to enhance. It also provides insights into the reinforcement rates for ABET achievements in courses they have successfully completed. Additionally, the system enables instructors to export course outlines (in compliance with the Quality Assurance and Certification Authority in Higher Education, ADIP) in standard formats such as PDF and HTML. It also supports the documentation of learning outcomes according to ABET accreditation standards. Users are required to log in using their academic credentials via LDAP authentication.",
    techStack: [
      skillsData[0],
      skillsData[1],
      skillsData[6],
      { icon: React.createElement(FaPhp), title: "PHP" },
    ],
    imageUrl: PerigrammataImg,
    imageXsUrl: PerigrammataXsImg,
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
    title: "Adobe Certified Expert - Adobe Experience Manager Sites Business Practitioner",
    date: "11/2021 - 11/2025",
    link: "https://www.credly.com/badges/1f344fc0-9a10-49b5-9288-985905629f72/linked_in_profile",
    icon: React.createElement(BiLogoAdobe),
  },
] as const;
