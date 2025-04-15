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
    <div className="text-center w-full mx-auto max-w-5xl md:max-w-4xl lg:max-w-6xl px-0 md:px-10 pt-28">
      <Badge className="bg-[#d4b144]" title={"Skills"} />
      <h3 className="font-bold text-2xl text-left mb-2">
        Technical Skills and Tools
      </h3>
      <p className="text-left  text-secondary font-normal pb-10">
        My technical toolkit focuses mainly on{" "}
        <span className="font-medium"> front-end</span> development, with some
        experience in <span className="font-medium"> back-end</span> as well,
        along with solid skills in different programming languages, frameworks,
        and tools. Here&apos;s a list of the main technologies I&apos;ve used to
        build projects.
      </p>
      <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-800  max-w-[53rem] mx-auto">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group flex flex-col items-center justify-center gap-4 outline-none w-[4.25rem] md:w-auto h-full"
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
