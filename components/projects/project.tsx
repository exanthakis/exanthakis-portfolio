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
      className="relative flex h-80 flex-col justify-between overflow-hidden rounded-3xl bg-[#131618] px-7 py-8 text-left hover:brightness-[170%]"
    >
      <div>
        <ul className="mb-[-5.625rem] flex flex-wrap justify-start gap-4">
          {techStack.map((techItem) => (
            <li
              key={techItem.title}
              className="group flex flex-col items-center justify-center gap-4 text-lg opacity-100 outline-none"
            >
              {techItem.icon}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex w-full items-end justify-between">
        <span className="text-xl">{title}</span>
        <div
          onClick={handleOpenModal}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#1f2326] bg-[#131618] text-[#8a8f98] hover:border-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-[#f7f8f8]"
        >
          <FiPlus className="transition group-hover:translate-x-1" />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <section
            ref={modalRef}
            className="noScrollbar relative flex h-full cursor-default flex-col justify-start overflow-hidden overflow-x-hidden overflow-y-scroll rounded-lg border border-black/5 text-white"
          >
            <div className="before:z-2 relative h-[55%] w-full shadow-2xl before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)] before:content-['']">
              <Image
                src={imageUrl}
                alt={title}
                layout="fill" // ensures the image covers the container
                objectFit="cover" // makes sure the image covers the container without stretching
                quality={100} // optional: improves image quality
              />
            </div>
            <div className="flex h-[45%] w-full flex-col px-5 pb-7 pt-7 sm:pl-10 sm:pt-10">
              <ul className="mb-[-5.625rem] flex flex-wrap justify-center gap-8">
                {techStack.map((techItem) => (
                  <li
                    key={techItem.title}
                    className="group flex flex-col items-center justify-center gap-4 outline-none"
                  >
                    <SkillsItem icon={techItem.icon} title={techItem.title} />
                  </li>
                ))}
              </ul>
              <Divider />
              <h3 className="mt-[-3.125rem] text-5xl font-semibold">{title}</h3>
              <p className="mt-5 text-white/70">{description}</p>

              <div className="flex flex-col gap-8 pb-10 pt-7 sm:flex-row">
                {link && (
                  <Button
                    className="flex items-center gap-3 text-white outline-none"
                    buttonType={ButtonType.LINK}
                    href={link}
                    target="_blank"
                  >
                    Visit website
                    <FaExternalLinkAlt className="text-xs transition group-hover:translate-x-1" />
                  </Button>
                )}

                {repo && (
                  <Button
                    className="flex items-center gap-3 text-white outline-none"
                    buttonType={ButtonType.LINK}
                    href={repo}
                    target="_blank"
                  >
                    Visit repository
                    <FaExternalLinkAlt className="text-xs transition group-hover:translate-x-1" />
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
