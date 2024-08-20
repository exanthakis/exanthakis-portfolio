"use client";

import React from "react";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./ui/section-heading";
import Button from "./ui/button";

const Experience = () => {
  return (
    <div className="py-12 text-center w-full">
      {/* <SectionHeading>Experience</SectionHeading> */}

      <div className="w-full flex flex-col pb-10">
        <h3 className="font-bold text-2xl text-left">Frontend Developer</h3>
        <p className="text-justify mb-2">2021 - Present / Deloitte Digital</p>
        <span className="text-left tracking-[-0.16px] text-[rgba(239,247,255,.615)] font-normal max-w-3xl">
          Working as frontend developer Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti commodi sint ipsum ut, explicabo laboriosam
          delectus hic eligendi ipsam repudiandae!
        </span>
      </div>

      <ul className="flex flex-col">
        <li className="relative flex w-full flex-col sm:flex-row">
          <div className="flex w-full pb-4 sm:w-[200px] sm:pb-0">
            <p className="text-sm leading-[1.6] text-slate-11 font-normal">
              <time className="sticky top-24" dateTime="2024-07-17">
                Jul 17, 2024
              </time>
            </p>
          </div>
          <div className="relative hidden sm:flex sm:w-[150px]">
            <div className="sticky left-0 top-[102px] mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-500"></div>
            <div className="absolute left-0.5 top-0.5 h-full w-0.5 bg-gray-400"></div>
          </div>
          <div className="w-full pb-16">
            <a href="/changelog/new-contact-webhooks">
              <div className="space-y-4">
                <img
                  alt="New Contact Webhooks"
                  loading="lazy"
                  width="821"
                  height="432"
                  decoding="async"
                  data-nimg="1"
                  className="col-span-2 w-full rounded-md border border-slate-6 object-cover lg:rounded-lg"
                  srcSet="/_next/image?url=%2Fstatic%2Fposts%2Fnew-contact-webhooks.png&amp;w=828&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fposts%2Fnew-contact-webhooks.png&amp;w=1920&amp;q=75 2x"
                  src="/_next/image?url=%2Fstatic%2Fposts%2Fnew-contact-webhooks.png&amp;w=1920&amp;q=75"
                  style={{ color: "transparent;" }}
                />
                <div className="flex flex-col">
                  <h2 className="font-book font-styling font-display line-clamp-5 leading-normal text-[2.25rem] tracking-tight leading-[130%] text-slate-12">
                    New Contact Webhooks
                  </h2>
                  <span className="sans mb-4 text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
                    Receive real-time notifications when contacts are created,
                    updated, or deleted.
                  </span>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <img
                      alt="Felipe Volpone"
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      className="h-6 w-6 rounded-full border border-slate-6 object-cover"
                      srcSet="/_next/image?url=%2Fstatic%2Favatars%2Ffelipe-volpone.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Favatars%2Ffelipe-volpone.jpg&amp;w=96&amp;q=75 2x"
                      src="/_next/image?url=%2Fstatic%2Favatars%2Ffelipe-volpone.jpg&amp;w=96&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                    <div className="flex gap-1">
                      <span className="sans text-sm leading-[1.6] text-slate-11 font-normal">
                        Felipe Volpone
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
