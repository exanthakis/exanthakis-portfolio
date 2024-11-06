"use client";

import React, { useState } from "react";

import { experiencesData, monthNames } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariants,
  slideInFromRightVariants,
} from "@/lib/animations";
import Badge from "./ui/badge";
import { GoLinkExternal } from "react-icons/go";
import { ExperienceItem } from "@/lib/types";

const Experience = () => {
  const [showExperienceDetails, setShowExperienceDetails] = useState<
    ExperienceItem[]
  >([]);

  const { month: currentMonth, year: currentYear } = getDateMonthYear(
    experiencesData[0].startDate
  );

  function getDateMonthYear(experienceDate: string) {
    const date = new Date(experienceDate);
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return {
      month,
      year,
    };
  }

  const handleExperienceDetails = (id: number) => {
    const experienceItems = [...showExperienceDetails];
    const exists = experienceItems.find((el) => el.id === id);

    let items = experienceItems;
    if (exists) {
      items = experienceItems.map((el) => {
        if (el.id === id) {
          return {
            id,
            show: !el.show,
          };
        }
        return el;
      });
    } else {
      items.push({ id, show: true });
    }

    setShowExperienceDetails(items);
  };

  return (
    <div className="pt-[10rem] pb-12 text-center w-full relative my-24 bg-gradient ">
      <div className="w-full flex flex-col pb-10 max-w-7xl mx-auto">
        <Badge className="bg-[#68CC58]" title={"Experience"} />

        <h3 className="font-bold text-2xl text-left">
          {experiencesData[0].title}
        </h3>
        <p className="text-justify mb-2">
          {`${currentMonth}, ${currentYear} - ${experiencesData[0].endDate} / ${experiencesData[0].company}`}
        </p>
        <span className="text-left tracking-[-0.16px] text-secondary font-normal max-w-3xl">
          Promoted annually in my current role as a Front-End Developer at
          Deloitte Digital, consistently recognized for delivering high-quality,
          innovative solutions and driving impactful results within the team.
        </span>
      </div>

      <ul className="flex flex-col w-full mx-auto max-w-5xl py-16 ">
        {experiencesData.map((experience, index) => {
          const { month: itemStartMonth, year: itemStartYear } =
            getDateMonthYear(experience.startDate);
          const { month: itemEndMonth, year: itemEndYear } = getDateMonthYear(
            experience.endDate
          );

          const expItem = showExperienceDetails.find(
            (el) => el.id === experience.id
          );

          return (
            <li
              key={experience.id}
              className="relative flex w-full flex-row overflow-hidden sm:overflow-visible"
            >
              <div className="flex w-[7.375rem] sm:w-[12.5rem] pb-4 ">
                <p className="text-sm leading-[1.6] text-[#f1f7feb5] font-normal">
                  <time
                    className="sticky top-24"
                    dateTime={experience.startDate}
                  >
                    {`${itemStartMonth}, ${itemStartYear} - `}
                  </time>

                  {itemEndMonth && itemEndYear ? (
                    <time
                      className="sticky top-28"
                      dateTime={experience.endDate}
                    >
                      {`${itemEndMonth}, ${itemEndYear}`}
                    </time>
                  ) : (
                    <span className="sticky top-28">
                      {experiencesData[0].endDate}
                    </span> // Present string
                  )}
                </p>
              </div>
              <div className="relative flex w-[3rem] sm:w-[9.375rem] overflow-visible">
                <div className="sticky left-0 top-[102px] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#f1f7feb5]"></div>
                <div className="absolute left-0.5 top-0.5 h-full w-0.5 bg-[#d6ebfd30]"></div>
              </div>
              <motion.div
                className="w-full pb-16 "
                variants={slideInFromRightVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="space-y-4">
                  <Image
                    src={experience.img}
                    alt={`${experience.company} logo`}
                    quality="95"
                    className="opacity-70"
                    height={32}
                    width={experience.id === 1 ? 100 : 64}
                  />
                  <div className="flex flex-col justify-start items-start text-left">
                    <h5 className="line-clamp-5 tracking-tight text-2xl pb-4">
                      {experience.title}
                    </h5>
                    <span className="mb-4 text-base  md:leading-[1.5] text-[#f1f7feb5] font-normal">
                      {experience.description}
                    </span>
                  </div>

                  {experience.items && experience.items.length > 0 && (
                    <div className="flex flex-col md:flex-row flex-wrap !mt-0">
                      <button
                        className="flex gap-2 items-center pt-1 pb-5"
                        onClick={() => handleExperienceDetails(experience.id)}
                      >
                        {expItem?.show ? "Read less" : "Read more"}
                        <GoLinkExternal className="opacity-70 group-hover:translate-x-1 transition" />
                      </button>

                      {expItem?.show && (
                        <ol className="flex flex-col md:flex-row flex-wrap justify-start gap-4 text-base  md:leading-[1.5] text-[#f1f7feb5] font-normal">
                          {experience.items.map((item, index) => (
                            <motion.li
                              className="group flex flex-col items-start justify-center outline-none w-full md:w-auto text-start"
                              key={index}
                              variants={fadeInAnimationVariants}
                              initial="initial"
                              whileInView="animate"
                              viewport={{
                                once: true,
                              }}
                              custom={index}
                            >
                              {item.description}
                            </motion.li>
                          ))}
                        </ol>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
