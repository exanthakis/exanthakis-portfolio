"use client";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import Modal from "../ui/modal";
import { useEffect, useRef, useState } from "react";
import Divider from "../ui/divider";
import Button from "../ui/button";
import { ButtonType, ProjectProps } from "@/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import SkillsItem from "../skills/skillsItem";
import { IoCloseOutline } from "react-icons/io5";

const Project = ({
  title,
  description,
  techStack,
  imageUrl,
  imageXsUrl,
  link,
  repo,
  onOpenModal,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjImgLoaded, setIsProjImgLoaded] = useState(false);
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
    setIsProjImgLoaded(false);
  };

  const handleImageLoad = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    setIsProjImgLoaded(true);
  };

  return (
    <>
      <motion.div
        layout
        onClick={handleOpenModal}
        className="relative flex h-80 flex-col justify-between overflow-hidden rounded-3xl bg-[#141516] px-7 py-8 text-left transition duration-200 hover:bg-[#191a1b] sm:pointer-events-none"
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
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#f7f8f8",
              backgroundColor: "#1c1c1c",
              borderColor: "#1c1c1c",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="h hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#1f2326] bg-[#131618] text-[#8a8f98] sm:pointer-events-auto sm:flex"
          >
            <FiPlus className="transition group-hover:translate-x-1" />
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <motion.div
              whileHover={{
                scale: 1.1,
                backgroundColor: "#424242",
              }}
              transition={{ type: "spring", stiffness: 500 }}
              onClick={handleCloseModal}
              className="absolute right-3 top-3 z-[11] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#1c1c1c] bg-[#1c1c1c] text-[#f7f8f8]"
            >
              <IoCloseOutline className="transition group-hover:translate-x-1" />
            </motion.div>
            <section
              ref={modalRef}
              className="noScrollbar relative flex h-full cursor-default flex-col justify-start overflow-hidden overflow-x-hidden overflow-y-scroll rounded-lg border border-black/5 text-white"
            >
              <div
                className={`inset-0 h-[55%] w-full bg-cover before:absolute before:h-[55%] before:w-full before:animate-pulse before:bg-[rgba(255,255,255,0.2)] before:content-[''] ${isProjImgLoaded ? "before:content-none" : ""}`}
                style={{
                  backgroundImage: `url('${imageXsUrl?.src}')`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                }}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  className={`pointer-events-none ease-in-out ${isProjImgLoaded ? "!opacity-100" : ""} h-full w-full cursor-none bg-cover bg-center object-cover object-top opacity-0 transition-opacity duration-200`}
                  onLoad={handleImageLoad}
                  objectFit="cover"
                  quality={100}
                  loading="lazy"
                />
              </div>

              <div className="flex h-[45%] w-full flex-col px-5 pb-7 pt-7 sm:pl-10 sm:pt-10">
                <ul className="mb-[-5.625rem] flex flex-wrap justify-center gap-8">
                  {techStack.map((techItem) => (
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, scale: 0.5 },
                        visible: {
                          opacity: 1,
                          scale: [0.8, 1.2, 1],
                          transition: { duration: 0.7 },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring" }}
                      key={techItem.title}
                      className="group flex flex-col items-center justify-center gap-4 outline-none"
                    >
                      <SkillsItem {...techItem} />
                    </motion.li>
                  ))}
                </ul>
                <Divider />
                <h3 className="mt-[-3.125rem] text-5xl font-semibold">{title}</h3>
                <p className="mt-5 whitespace-pre-line text-white/70">{description}</p>

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
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
