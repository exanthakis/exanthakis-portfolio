import { SectionHeadingProps } from "@/lib/types";
import React from "react";

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2
      className={`mb-5 w-fit text-center text-[3rem] font-medium leading-[120%] tracking-tight md:text-left md:text-[3.5rem] ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
