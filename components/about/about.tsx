"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import AboutShowcase from "./about-showcase";
import Skills from "../skills";
import Certifications from "../certifications";
import Experience from "../experience";
import Divider from "../ui/divider";

const About = () => {
  const { ref } = useSectionInView("About", 0.1);

  return (
    <section
      ref={ref}
      id="about"
      className="text-center w-full leading-8 scroll-mt-28 relative"
    >
      <Divider type={"light"} />
      <AboutShowcase />
      <Skills />
      <Experience />
      <Certifications />
    </section>
  );
};

export default About;
