"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import AboutShowcase from "./about-showcase";
import Skills from "../skills/skills";
import Certifications from "../certifications";
import Experience from "../experience";
import Divider from "../ui/divider";

const About = () => {
  const { ref } = useSectionInView("About", 0.1);

  return (
    <section ref={ref} id="about" className="relative w-full scroll-mt-28 text-center leading-8">
      <Divider type={"light"} />
      <AboutShowcase />
      <Skills />
      <Experience />
      <Certifications />
    </section>
  );
};

export default About;
