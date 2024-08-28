"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion } from "framer-motion";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const projectsCarousel = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [disableDrag, setDisableDrag] = useState(false);

  // extra drag space on right
  const threshold = 50;

  useEffect(() => {
    if (projectsCarousel && projectsCarousel.current)
      setWidth(
        projectsCarousel.current.scrollWidth -
          projectsCarousel.current.offsetWidth +
          threshold
      );
  }, []);

  const hanldleOpenModal = (disableDrag: boolean) => {
    setDisableDrag(disableDrag);
  };

  return (
    <section
      ref={ref}
      id="projects"
      className=" mb-28 w-full mx-auto max-w-7xl"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex pt-8 pb-12">
        <h3 className="w-full md:w-1/2 flex items-start justify-start text-4xl">
          Made for modern product teams
        </h3>
        <p className="w-full md:w-1/2 flex items-start justify-start text-[#8a8f98] font-medium">
          In this section, you’ll find a collection of projects that showcase my
          skills in front-end development. Feel free to explore the code,
          features, and challenges faced during development—each project is a
          testament to my passion for continuous learning and improvement in the
          ever-evolving tech landscape.
        </p>
      </div>

      <motion.div
        ref={projectsCarousel}
        className="overflow-hidden cursor-grab relative"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag={disableDrag ? false : "x"}
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-10 "
        >
          {projectsData.map((project, index) => {
            return (
              <motion.div className="min-w-[30rem]" key={index}>
                <Project {...project} onOpenModal={hanldleOpenModal} />
              </motion.div>
            );
          })}
        </motion.div>
        <div
          aria-hidden="true"
          className="-right-10 top-0 w-[300px] h-full center pointer-events-none absolute max-w-full "
          style={{
            background: "linear-gradient(to right,transparent 70%,#000 95%)",
          }}
        ></div>
      </motion.div>
    </section>
  );
};

export default Projects;
