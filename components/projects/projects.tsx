"use client";

import React from "react";
import SectionHeading from "../ui/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className=" mb-28 w-full mx-auto max-w-7xl"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="flex py-8">
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

      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex-row lg:grid-cols-3">
        {projectsData.map((project) => {
          return (
            <React.Fragment key={project.title}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
