import { SectionHeadingProps } from "@/lib/types";
import React from "react";

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2
      className={`mb-5 text-center md:text-left text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-medium w-fit ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
