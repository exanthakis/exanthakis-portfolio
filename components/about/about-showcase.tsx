import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import AboutParagraph from "./about-paragraph";

const AboutShowcase = () => {
  return (
    <motion.div className="mx-auto max-w-5xl px-0 text-left md:max-w-4xl md:px-10 lg:max-w-6xl">
      {/* <SectionHeading>About</SectionHeading> */}
      <div className="flex w-full flex-col gap-8 pt-7 sm:gap-4 md:flex-row md:gap-0">
        <h3 className="flex w-full items-start justify-start text-4xl md:w-1/2">
          Hi I&apos;m Emmanouel
        </h3>
        <div className="flex w-full flex-col items-start justify-center md:w-1/2">
          <AboutParagraph id={1}>
            Graduate with a <span className="font-medium">Master&apos;s degree</span> in Electrical
            and Computer Engineering from the Technical University of Crete, I specialize in
            creating unique user experiences. I&apos;m involved in every step of the process: from
            development to testing and deployment. I focus on delivering high-quality, scalable
            solutions that drive positive user experiences.
          </AboutParagraph>

          <AboutParagraph id={2}>
            I typically use a combination of{" "}
            <span className="font-medium">JavaScript, React, Redux, Vite, and GitHub Actions</span>.
            I have a keen eye for design and am meticulous about continuously learning and improving
            my skills. Currently, I am learning Vue.js to broaden my frontend framework expertise
            and enhance my ability to build dynamic, scalable user interfaces with greater
            flexibility.
          </AboutParagraph>

          <AboutParagraph id={2}>
            <span className="italic">When I&apos;m not coding</span>, I enjoy hiking, watching
            movies, and traveling to explore new cultures. I also love reading about emerging
            technologies and spending time outdoors.
          </AboutParagraph>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutShowcase;
