"use client";

import React from "react";
import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import Button from "./ui/button";
import { ButtonType } from "@/lib/types";
import { GoLinkExternal } from "react-icons/go";
import { fadeInAnimationVariants } from "@/lib/animations";
import Badge from "./ui/badge";

const Certifications = () => {
  return (
    <div className="relative mx-auto my-[8rem] w-full max-w-5xl overflow-hidden rounded-3xl border-t border-[#d6ebfd30] px-0 py-12 text-center md:max-w-4xl md:px-10 lg:max-w-6xl">
      <div
        aria-hidden="true"
        className="center pointer-events-none absolute left-1/2 right-1 top-0 h-px w-[300px] max-w-full -translate-x-1/2 -translate-y-1/2 sm:left-auto"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="center pointer-events-none absolute -top-1 left-1/2 right-1 h-[300px] w-[320px] max-w-full -translate-x-1/2 -translate-y-1/2 sm:left-auto"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
        }}
      ></div>
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-0 pb-10 md:max-w-4xl md:px-10 lg:max-w-6xl">
        <Badge className="bg-[#B59AFF]" title={"Certifications"} />

        <span className="text-secondary max-w-3xl text-center font-normal">
          Additionally, I&apos;ve earned a few certificates emphasizing my dedication to continual
          learning and skill development. I&apos;m always open to new learning opportunities, eager
          to enhance my skills even further.
        </span>
      </div>

      <ul className="relative z-20 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols-3">
        {certificationsData.map((certification, index) => (
          <motion.li
            className="col-span-1 flex flex-col p-4"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={1}
          >
            <span className="mb-4 inline text-2xl leading-[0] text-white">
              {certification.icon}
            </span>
            <h5 className="mb-2 text-left text-2xl font-bold">{certification.title}</h5>

            <p className="text-md mt-auto text-justify">{certification.date}</p>
            <div className="flex flex-wrap pt-3 text-xs">
              <Button buttonType={ButtonType.LINK} href={certification.link} target="_blank">
                Learn more
                <GoLinkExternal className="opacity-70 transition group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
