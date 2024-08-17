"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import AboutShowcase from "./about-showcase";
import Skills from "../skills";
import Certifications from "../certifications";
import Experience from "../experience";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      id="about"
      className="py-12 mt-8 text-center w-full leading-8 scroll-mt-28 relative"
    >
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-full center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%);",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="left-1/2 top-0 h-[300px] w-[80%] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%);",
        }}
      ></div>

      <AboutShowcase />
      <Skills />
      <Certifications />
      <Experience />
    </section>
  );
};

export default About;
