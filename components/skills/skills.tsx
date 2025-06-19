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
    <div className="mx-auto w-full max-w-5xl px-0 pt-28 text-center md:max-w-4xl md:px-10 lg:max-w-6xl">
      <Badge className="bg-[#d4b144]" title={"Skills"} />
      <h3 className="mb-2 text-left text-2xl font-bold">Technical Skills and Tools</h3>
      <p className="text-secondary pb-10 text-left text-base font-normal">
        My technical toolkit focuses mainly on <span className="font-medium"> front-end</span>{" "}
        development, with some experience in <span className="font-medium"> back-end</span> as well,
        along with solid skills in different programming languages, frameworks, and tools.
        Here&apos;s a list of the main technologies I&apos;ve used to build projects.
      </p>
      <ul className="mx-auto flex max-w-[53rem] flex-wrap justify-center gap-6 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group flex h-full w-[4.25rem] flex-col items-center justify-center gap-4 outline-none md:w-auto"
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
