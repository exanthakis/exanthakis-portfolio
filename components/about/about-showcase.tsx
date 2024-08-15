import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

const AboutShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={ref}
      className="mx-auto text-left"
      style={{ opacity: opacityProgress }}
    >
      <SectionHeading>About</SectionHeading>
      <p className="font-sans mb-6 text-center md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
        A Frontend developer with{" "}
        <span className="font-medium">over 3 years</span> of experience in
        building large-scale applications, focused on driving performance,
        reliability, and scalability of customer-facing web applications.
        Skilled in <span className="font-medium">problem-solving</span> and
        executing software tasks from start to finish. Capable of working
        independently or as part of a team, with high levels of organization to
        consistently meet deadlines.
      </p>
      <p className="font-sans mb-6 text-center md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
        Graduate with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js</span>. I am also
        familiar with TypeScript. I am always looking to learn new technologies.
      </p>
      <p className="font-sans text-center md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dog. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m
        also learning how to play the guitar.
      </p>
    </motion.div>
  );
};

export default AboutShowcase;
