"use client";

import React, { useState } from "react";

import { experiencesData, monthNames } from "@/lib/data";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInAnimationVariants, slideInFromRightVariants } from "@/lib/animations";
import Badge from "./ui/badge";

import { ExperienceItem } from "@/lib/types";
import { CiRead } from "react-icons/ci";
import { CiUnread } from "react-icons/ci";

const Experience = () => {
  const [showExperienceDetails, setShowExperienceDetails] = useState<ExperienceItem[]>([]);

  const { month: currentMonth, year: currentYear } = getDateMonthYear(experiencesData[0].startDate);

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
    <div className="bg-gradient relative -ml-6 mb-24 mt-10 w-screen pb-12 pt-[8rem] text-center md:w-[calc(100%+2.5rem)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-0 pb-10 pl-6 pr-6 md:max-w-4xl md:px-10 lg:max-w-6xl">
        <Badge className="bg-[#68CC58]" title={"Experience"} />

        <h3 className="text-left text-2xl font-bold">{experiencesData[0].title}</h3>
        <p className="mb-2 text-justify">
          {`${currentMonth}, ${currentYear} - ${experiencesData[0].endDate} / ${experiencesData[0].company}`}
        </p>
        {/* <span className="text-left tracking-[-0.16px] text-secondary font-normal max-w-3xl">
          Promoted annually in my current role as a Front-End Developer at
          Deloitte Digital, consistently recognized for delivering high-quality,
          innovative solutions and driving impactful results within the team.
        </span> */}
      </div>

      <ul className="mx-auto flex w-full max-w-5xl flex-col px-0 py-16 pl-6 pr-6 md:max-w-4xl md:px-10 lg:max-w-6xl">
        {experiencesData.map((experience, index) => {
          const { month: itemStartMonth, year: itemStartYear } = getDateMonthYear(
            experience.startDate,
          );
          const { month: itemEndMonth, year: itemEndYear } = getDateMonthYear(experience.endDate);

          const expItem = showExperienceDetails.find((el) => el.id === experience.id);

          return (
            <li
              key={experience.id}
              className="relative flex w-full flex-row overflow-hidden sm:overflow-visible"
            >
              <div className="flex w-[7.375rem] pb-4 sm:w-[12.5rem]">
                <p className="flex flex-col pr-2 text-sm font-normal leading-[1.6] text-[#f1f7feb5]">
                  <time className="sticky top-24" dateTime={experience.startDate}>
                    {`${itemStartMonth}, ${itemStartYear} - `}
                  </time>

                  {itemEndMonth && itemEndYear ? (
                    <time className="sticky top-36 md:top-28" dateTime={experience.endDate}>
                      {`${itemEndMonth}, ${itemEndYear}`}
                    </time>
                  ) : (
                    <span className="sticky top-36 md:top-28">{experiencesData[0].endDate}</span> // Present string
                  )}
                </p>
              </div>
              <div className="relative flex w-[3rem] overflow-visible sm:w-[9.375rem]">
                <div className="sticky left-0 top-[102px] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#f1f7feb5]"></div>
                <div className="absolute left-0.5 top-0.5 h-full w-0.5 bg-[#d6ebfd30]"></div>
              </div>
              <motion.div
                className="w-full pb-16 pr-2 md:pr-0"
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
                  <div className="flex flex-col items-start justify-start text-left">
                    <h5 className="line-clamp-5 pb-4 text-2xl tracking-tight">
                      {experience.title}
                    </h5>
                    <span className="mb-4 text-base font-normal text-[#f1f7feb5] md:leading-[1.5]">
                      {experience.description}
                    </span>
                  </div>

                  {experience.items && experience.items.length > 0 && (
                    <div className="!mt-0 flex flex-col flex-wrap md:flex-row">
                      <button
                        className="flex items-center gap-2 pb-5 pt-1 text-sm"
                        onClick={() => handleExperienceDetails(experience.id)}
                      >
                        {expItem?.show ? (
                          <>
                            <span>Read less</span>
                            <CiUnread className="text-lg" />
                          </>
                        ) : (
                          <>
                            <span>Read more</span>
                            <CiRead className="text-lg" />
                          </>
                        )}
                      </button>
                      <AnimatePresence>
                        {expItem?.show && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col flex-wrap justify-start gap-4 text-base md:flex-row md:leading-[1.5]"
                          >
                            {experience.items.map((item, index) => (
                              <motion.li
                                className="group relative flex w-full flex-col items-start justify-center text-start outline-none md:w-auto"
                                key={index}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                  once: true,
                                }}
                                custom={index}
                              >
                                <div className="absolute -left-4 top-2 h-1.5 w-1.5 rounded-full bg-[#f1f7feb5]"></div>

                                {item.title && (
                                  <p className="mb-2 text-justify">
                                    {`${item.title}, ${getDateMonthYear(item.date).year}`}
                                  </p>
                                )}
                                <span className="font-normal text-[#f1f7feb5]">
                                  {item.description}
                                </span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
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
