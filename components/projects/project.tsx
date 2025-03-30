"use client";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import Modal from "../ui/modal";
import { useEffect, useRef, useState } from "react";
import Divider from "../ui/divider";
import Button from "../ui/button";
import { ButtonType, ProjectProps } from "@/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import SkillsItem from "../skills/skillsItem";

const Project = ({
  title,
  description,
  techStack,
  imageUrl,
  link,
  repo,
  onOpenModal,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLElement>(null);

  // Scroll to the top of the modal on open
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    onOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onOpenModal(false);
  };

  return (
    <motion.div
      layout
      className="bg-[#131618] py-8 px-7 h-80 relative text-left flex flex-col overflow-hidden rounded-3xl justify-between hover:brightness-[170%] "
    >
      <div>
        <ul className="flex flex-wrap gap-4 mb-[-5.625rem] justify-start">
          {techStack.map((teckItem) => (
            <li
              key={teckItem.title}
              className="group flex flex-col items-center justify-center gap-4 outline-none opacity-35 text-lg"
            >
              {teckItem.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-end w-full">
        <span className="text-xl">{title}</span>
        <div
          onClick={handleOpenModal}
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2 border-[#1f2326] bg-[#131618] text-[#8a8f98] hover:bg-[#1c1c1c] hover:text-[#f7f8f8] hover:border-[#1c1c1c]"
        >
          <FiPlus className=" group-hover:translate-x-1 transition" />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <section
            ref={modalRef}
            className="flex justify-start h-full noScrollbar flex-col border border-black/5 rounded-lg overflow-hidden relative text-white overflow-y-scroll overflow-x-hidden cursor-default"
          >
            <div className="relative w-full shadow-2xl h-[55%] before:absolute before:top-0 before:left-0 before:z-2 before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)] before:content-[''] before:z-[2]">
              <Image
                src={imageUrl}
                alt={title}
                layout="fill" // ensures the image covers the container
                objectFit="cover" // makes sure the image covers the container without stretching
                quality={100} // optional: improves image quality
              />
            </div>
            <div className="pt-7 pb-7 w-full px-5 sm:pl-10 sm:pt-10 flex flex-col h-[45%]">
              <ul className="flex flex-wrap gap-8 mb-[-5.625rem] justify-center">
                {techStack.map((teckItem) => (
                  <li
                    key={teckItem.title}
                    className="group flex flex-col items-center justify-center gap-4 outline-none "
                  >
                    <SkillsItem icon={teckItem.icon} title={teckItem.title} />
                  </li>
                ))}
              </ul>
              <Divider />
              <h3 className="text-5xl font-semibold mt-[-3.125rem]">{title}</h3>
              <p className="mt-5 text-white/70">{description}</p>

              <div className="flex flex-col sm:flex-row gap-8 pb-10 pt-7">
                {link && (
                  <Button
                    className="text-white flex gap-3 items-center outline-none"
                    buttonType={ButtonType.LINK}
                    href={link}
                    target="_blank"
                  >
                    Visit website
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition" />
                  </Button>
                )}

                {repo && (
                  <Button
                    className="text-white flex gap-3 items-center outline-none"
                    buttonType={ButtonType.LINK}
                    href={repo}
                    target="_blank"
                  >
                    Visit repository
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition" />
                  </Button>
                )}
              </div>
            </div>
          </section>
        </Modal>
      </div>
    </motion.div>
  );
};

export default Project;
