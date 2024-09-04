"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "../ui/section-heading";
import { fadeInAnimationVariants } from "@/lib/animations";
import Badge from "../ui/badge";
import SkillsItem from "./skillsItem";

const Skills = () => {
  return (
    <div className="text-center w-full mx-auto max-w-7xl pt-28">
      <Badge className="bg-[#d4b144]" title={"Skills"} />
      <h3 className="font-bold text-2xl text-left mb-2">
        Comprehensive Technical Expertise and Tools
      </h3>

      <p className="text-left tracking-[-0.16px] text-secondary font-normal pb-10">
        My technical toolkit includes a deep understanding of both{" "}
        <span className="font-medium">front-end</span> and{" "}
        <span className="font-medium">back-end</span> development, as well as a
        strong command of various programming languages, frameworks, and tools.
        Below is a list of the key technologies I leverage to deliver{" "}
        <span className="underline">high-quality</span> results.
      </p>
      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800  max-w-[53rem] mx-auto">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group flex flex-col items-center justify-center gap-4 outline-none "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <SkillsItem icon={skill.icon} title={skill.title} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
