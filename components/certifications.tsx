"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import Button from "./button";
import { ButtonType } from "@/lib/types";
import { BsArrowRight } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

export const fadeInModAnimationVariants = {
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

const Certifications = () => {
  return (
    <div className="scroll-mt-28 text-center w-full mx-auto py-5 mt-5 relative overflow-hidden rounded-3xl border-t border-[#d6ebfd30] ">
      <div
        aria-hidden="true"
        className="left-1/2 right-1 top-0 w-[300px] sm:left-auto center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%);",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="-top-1 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%);",
        }}
      ></div>

      <ul className="relative pt-16 z-20 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols-3">
        {certificationsData.map((certification, index) => (
          <motion.li
            className="col-span-1 flex flex-col p-4"
            key={index}
            variants={fadeInModAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <span className="inline mb-4 leading-[0] text-white text-2xl">
              {certification.icon}
            </span>
            <h5 className="mb-2 font-bold text-2xl text-left">
              {certification.title}
            </h5>

            <p className="text-md text-justify mt-auto">{certification.date}</p>
            <div className="flex flex-wrap pt-3 text-xs">
              <Button
                buttonType={ButtonType.LINK}
                href={certification.link}
                target="_blank"
              >
                Learn more
                <GoLinkExternal className="opacity-70 group-hover:translate-x-1 transition" />
              </Button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
