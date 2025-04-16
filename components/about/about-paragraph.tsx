"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInParagraphVariants } from "@/lib/animations";
import { AboutParagraphProps } from "@/lib/types";

const AboutParagraph = ({ id, children }: AboutParagraphProps) => {
  return (
    <motion.p
      variants={fadeInParagraphVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      custom={id}
      className="mb-6 text-left font-sans text-base font-normal md:text-left md:text-[1.125rem] md:leading-[1.5]"
    >
      {children}
    </motion.p>
  );
};

export default AboutParagraph;
