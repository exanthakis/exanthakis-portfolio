import { SectionHeadingProps } from "@/lib/types";
import React from "react";

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="mb-3 text-center md:text-left text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%]">
      {children}
    </h2>
  );
};

export default SectionHeading;
