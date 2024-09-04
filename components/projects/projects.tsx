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
        projectsCarousel.current.scrollWidth -
          projectsCarousel.current.offsetWidth +
          threshold
      );
    }
  }, [activeTechStack]);

  const hanldleOpenModal = (disableDrag: boolean) => {
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
      className="scroll-mt-28 mb-28 w-full mx-auto max-w-7xl"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col md:flex-row gap-4 pt-8 pb-12">
        <h3 className="w-full md:w-1/2 flex items-start justify-start text-4xl">
          Side projects over the past couple of years
        </h3>
        <p className="w-full md:w-1/2 flex items-start justify-start text-secondary font-medium">
          In this section, you’ll find a collection of projects that showcase my
          skills in front-end development. Feel free to explore the code,
          features, and challenges faced during development—each project is a
          testament to my passion for continuous learning and improvement in the
          ever-evolving tech landscape.
        </p>
      </div>

      <Filter
        activeTechStack={activeTechStack}
        onActiveTechStach={handleActiveStack}
      />
      <motion.div
        className="overflow-hidden cursor-grab relative"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          ref={projectsCarousel}
          drag={disableDrag ? false : "x"}
          dragConstraints={{ right: 0, left: -width }}
          animate={controls}
          className="grid grid-flow-col gap-10 "
        >
          {filtered.map((project) => {
            return (
              <motion.div
                layout
                className="min-w-[26rem] sm:min-w-[30rem]"
                key={project.id}
              >
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
