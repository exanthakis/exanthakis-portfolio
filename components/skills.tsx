"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import { fadeInAnimationVariants } from "@/lib/animations";
import Badge from "./ui/badge";

const Skills = () => {
  return (
    <div className="text-center w-full mx-auto max-w-7xl pt-28">
      <Badge className="bg-[#d4b144]" title={"Skills"} />
      <h3 className="font-bold text-2xl text-left mb-2">
        Comprehensive Technical Expertise and Tools
      </h3>

      <p className="text-left tracking-[-0.16px] text-[rgba(239,247,255,.615)] font-normal pb-10">
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
            className="group flex flex-col items-center justify-center gap-4 text-slate-11 outline-none "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex h-14 w-[4.25rem] items-center justify-center rounded-2xl border-[1px] border-[#d6ebfd30] transition duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(255,255,255,.4)]">
              <span className="inline leading-[0] text-[#e5e7eb] text-2xl">
                {skill.icon}
              </span>
            </div>
            <span className="sans transition duration-200 ease-in-out group-hover:text-white group-data-[state='active']:text-slate-12 text-sm leading-[1.6] text-[#f1f7feb5] font-normal ">
              {" "}
              {skill.title}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
