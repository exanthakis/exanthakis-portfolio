"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section ref={ref} className="scroll-mt-28 text-center w-full pb-12">
      <SectionHeading>Skills</SectionHeading>

      <p className="font-sans mb-12 text-center md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
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
            className="group flex flex-col items-center justify-center gap-4 text-slate-11 outline-none hover:text-white "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex h-14 w-[4.25rem] items-center justify-center rounded-2xl border-[.2px]  border-[#f1f7feb5] transition duration-200 ease-in-out group-data-[state='active']:bg-gradient-to-b group-data-[state='active']:from-white/[3%]">
              <span className="inline leading-[0] text-[#e5e7eb] text-2xl">
                {skill.icon}
              </span>
            </div>
            <span className="sans transition duration-200 ease-in-out group-hover:text-slate-12 group-data-[state='active']:text-slate-12 text-sm leading-[1.6] text-[#f1f7feb5] font-normal">
              {" "}
              {skill.title}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
