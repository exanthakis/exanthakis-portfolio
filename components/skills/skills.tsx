"use client";

import React from "react";

import { skillsData, toolkitData } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeInAnimationVariants, fadeInParagraphVariants } from "@/lib/animations";
import Badge from "../ui/badge";
import SkillsItem from "./skillsItem";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";

const Skills = () => {
  return (
    <div className="mx-auto w-full max-w-5xl px-0 pb-5 pt-28 text-center md:max-w-4xl md:px-10 lg:max-w-6xl">
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
            className="group flex h-fit w-[4.25rem] flex-col items-center justify-center gap-4 outline-none md:h-full md:w-auto"
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

      <div className="relative z-[4] mx-auto flex h-80 w-full max-w-5xl flex-none flex-col flex-nowrap content-center items-center justify-center gap-[30px] overflow-visible p-0 px-0 text-left md:max-w-4xl md:px-10 lg:max-w-6xl">
        <div className="mask-radial absolute inset-0 overflow-hidden opacity-30 sm:opacity-25">
          <div className="absolute left-1/2 top-1/2 flex h-min w-min -translate-x-1/2 -translate-y-1/2 flex-col flex-nowrap items-center justify-center gap-[30px] overflow-hidden p-0">
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-px w-[827px] flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
          </div>
          <div className="absolute left-1/2 top-1/2 flex h-min w-min -translate-x-1/2 -translate-y-1/2 flex-row flex-nowrap items-center justify-center gap-[30px] overflow-hidden p-0">
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
            <div className="relative z-[1] h-[367px] w-px flex-none overflow-hidden border-[0.5px] border-dashed border-[rgba(181,204,227,0.6)]"></div>
          </div>
        </div>
        <div className="relative flex h-min w-full flex-none flex-col flex-nowrap items-center justify-center gap-[0.2rem] overflow-visible p-0">
          <motion.div
            variants={fadeInParagraphVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={1.5}
            className="relative mt-12 flex flex-col items-center justify-center gap-1"
          >
            <div className="] z-[2] flex aspect-square w-[57px] flex-none items-center justify-center gap-[10px] overflow-hidden rounded-[12px] bg-[rgba(181,204,227,0.15)]">
              <div className="border-[rgba(181,204,227,0.6) rounded-[12px] border-[0.5px] border-solid p-[6px]">
                <PiCodesandboxLogoDuotone size={"34"} />
              </div>
            </div>

            <h3 className="text-left text-2xl font-bold">My toolbox includes</h3>
          </motion.div>

          <ul className="nav-wrap mb-2 flex flex-wrap items-baseline justify-center gap-0 sm:gap-4">
            {toolkitData?.map((techItem) => (
              <motion.li
                className="nav group flex h-full w-min flex-col items-center justify-center gap-2 outline-none"
                key={techItem.title}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    scale: [0.8, 1.2, 1],
                    transition: { duration: 1 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                exit={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring" }}
                viewport={{
                  once: false,
                }}
              >
                <SkillsItem size="main" icon={techItem.icon} title={techItem.title} animateTitle />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
