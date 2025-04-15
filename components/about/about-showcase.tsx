import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import AboutParagraph from "./about-paragraph";

const AboutShowcase = () => {
  return (
    <motion.div className="mx-auto text-left max-w-5xl md:max-w-4xl lg:max-w-6xl px-0 md:px-10">
      {/* <SectionHeading>About</SectionHeading> */}
      <div className="flex flex-col md:flex-row w-full gap-8 sm:gap-4 md:gap-0 pt-7">
        <h3 className="w-full md:w-1/2 flex items-start justify-start text-4xl">
          Hi I&apos;m Emmanouel
        </h3>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-sm">
          <AboutParagraph id={1}>
            Graduate with a{" "}
            <span className="font-medium">Master&apos;s degree</span> in
            Electrical and Computer Engineering from the Technical University of
            Crete, I specialize in creating unique user experiences. I&apos;m
            involved in every step of the process: from development to testing
            and deployment. I focus on delivering high-quality, scalable
            solutions that drive positive user experiences.
          </AboutParagraph>

          <AboutParagraph id={2}>
            I typically use a combination of{" "}
            <span className="font-medium">
              JavaScript, React, Redux, Vite, and GitHub Actions
            </span>
            . I have a keen eye for design and am meticulous about continuously
            learning and improving my skills. Currently, I am learning Vue.js to
            broaden my frontend framework expertise and enhance my ability to
            build dynamic, scalable user interfaces with greater flexibility.
          </AboutParagraph>

          <AboutParagraph id={2}>
            <span className="italic">When I&apos;m not coding</span>, I enjoy
            hiking, watching movies, and traveling to explore new cultures. I
            also love reading about emerging technologies and spending time
            outdoors.
          </AboutParagraph>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutShowcase;
