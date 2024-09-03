import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import AboutParagraph from "./about-paragraph";

const AboutShowcase = () => {
  return (
    <motion.div className="mx-auto text-left max-w-7xl">
      <SectionHeading>About</SectionHeading>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-0 pt-7">
        <h3 className="w-full md:w-1/2 flex items-start justify-start text-4xl">
          Heading title lorem ipsum
        </h3>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-sm">
          <AboutParagraph id={1}>
            A Front-End developer with{" "}
            <span className="font-medium">over 3 years</span> of experience in
            building large-scale applications, focused on driving performance,
            reliability, and scalability of customer-facing web applications.
            Skilled in <span className="font-medium">problem-solving</span> and
            executing software tasks from start to finish. Capable of working
            independently or as part of a team, with high levels of organization
            to consistently meet deadlines.
          </AboutParagraph>

          <AboutParagraph id={2}>
            Graduate with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue
            my passion for programming. I enrolled in a coding bootcamp and
            learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium">React, Next.js</span>. I am also
            familiar with TypeScript. I am always looking to learn new
            technologies.
          </AboutParagraph>
          <AboutParagraph id={3}>
            <span className="italic">When I&apos;m not coding</span>, I enjoy
            playing video games, watching movies, and playing with my dog. I
            also enjoy <span className="font-medium">learning new things</span>.
            I am currently learning about{" "}
            <span className="font-medium">history and philosophy</span>.
            I&apos;m also learning how to play the guitar.
          </AboutParagraph>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutShowcase;
