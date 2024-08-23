"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import companyImg from "../../public/deloitte-digital-logo.png";
import { FiPlus } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <div className="bg-[#08090a] py-8 px-7 h-80 relative text-left flex flex-col overflow-hidden rounded-3xl justify-between hover:brightness-[170%] ">
      <div>
        <Image
          src={companyImg}
          alt="Deloitte logo"
          quality="95"
          className="opacity-70 h-auto max-w-full"
          height={32}
          width={64}
        />
      </div>
      <div className="flex justify-between items-end w-full">
        <span>{title}</span>
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2 border-[#161616] bg-[#08090a] text-[#8a8f98] hover:bg-[#1c1c1c] hover:text-[#f7f8f8] hover:border-[#1c1c1c]">
          <FiPlus className=" group-hover:translate-x-1 transition" />
        </div>
      </div>
    </div>
  );
};

export default Project;
