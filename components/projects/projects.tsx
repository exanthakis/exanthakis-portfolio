"use client";

import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../ui/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/useSectionInView";
import { motion, useAnimation } from "framer-motion";
import Filter from "./filter";
import { ProjectsT, TechStackE } from "@/lib/types";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const projectsCarousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const [filtered, setFiltered] = useState<ProjectsT[]>(projectsData);
  const [activeTechStack, setActiveTechStack] = useState(TechStackE.All);
  const [width, setWidth] = useState(0);
  const [disableDrag, setDisableDrag] = useState(false);

  // extra drag space on right
  const threshold = 50;

  useEffect(() => {
    if (projectsCarousel && projectsCarousel.current) {
      handleResetDrag();
      setWidth(
        projectsCarousel.current.scrollWidth - projectsCarousel.current.offsetWidth + threshold,
      );
    }
  }, [activeTechStack]);

  const handleOpenModal = (disableDrag: boolean) => {
    setDisableDrag(disableDrag);
  };

  const handleActiveStack = (id: TechStackE) => {
    setActiveTechStack(id);

    const filtered =
      id != TechStackE.All
        ? projectsData.filter((project: ProjectsT) => {
            const found = project.tags.find((tag) => id.includes(tag));
            return !!found;
          })
        : projectsData;

    setFiltered(filtered);
  };

  // Function to reset the drag to the start
  const handleResetDrag = () => {
    controls.start({
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="mx-auto mb-28 w-full max-w-5xl scroll-mt-5 px-0 md:max-w-4xl md:px-10 lg:max-w-6xl"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-4 pb-12 pt-8 md:flex-row">
        <h3 className="flex w-full items-start justify-start text-4xl md:w-1/2">
          Side projects over the past couple of years
        </h3>
        <p className="text-secondary flex w-full items-start justify-start font-medium md:w-1/2">
          In this section, you&apos;ll find a collection of projects that showcase my skills in
          front-end development. Feel free to explore the code, features, and challenges faced
          during development.
        </p>
      </div>

      <Filter activeTechStack={activeTechStack} onActiveTechStack={handleActiveStack} />
      <motion.div
        className="relative cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          ref={projectsCarousel}
          drag={disableDrag ? false : "x"}
          dragConstraints={{ right: 0, left: -width }}
          animate={controls}
          className="grid grid-flow-col gap-4 md:gap-10"
        >
          {filtered.map((project) => {
            return (
              <motion.div layout className="min-w-[26rem] sm:min-w-[30rem]" key={project.id}>
                <Project {...project} onOpenModal={handleOpenModal} />
              </motion.div>
            );
          })}
        </motion.div>
        <div
          aria-hidden="true"
          className="center pointer-events-none absolute -right-10 top-0 h-full w-[300px] max-w-full"
          style={{
            background: "linear-gradient(to right,transparent 70%,#080808 95%)",
          }}
        ></div>
      </motion.div>
    </section>
  );
};

export default Projects;
