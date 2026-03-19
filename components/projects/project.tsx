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
  link,
  repo,
  blurDataUrl,
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

  return (
    <>
      <motion.div
        // className="image-card"
        key={title}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-80 flex-col justify-between overflow-hidden rounded-3xl bg-[#141516] px-7 py-8 text-left hover:bg-[#191a1b] sm:pointer-events-none"
        onClick={handleOpenModal}
      >
        <Image
          src={imageUrl}
          alt={title}
          className={`pointer-events-none absolute inset-0 h-full w-full cursor-none rounded-3xl bg-cover bg-center object-cover object-top opacity-40 transition-opacity duration-200 ease-in-out`}
          objectFit="cover"
          quality={100}
          loading="lazy"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />

        <div className="relative mb-[-5.625rem] w-fit">
          <div className="absolute inset-0 w-full rounded-2xl bg-black/20 backdrop-blur-md"></div>

          <ul className="relative z-10 flex flex-wrap justify-start gap-4 p-2">
            {techStack.map((techItem) => (
              <li
                key={techItem.title}
                className="group flex flex-col items-center justify-center gap-4 text-base text-green-300"
              >
                {techItem.icon}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex w-full items-end justify-between">
          <div className="relative">
            <div className="z-10">
              <span className="text-xl">
                <span className="relative z-10 p-2 text-base font-extrabold">
                  {title}

                  <div className="absolute inset-0 z-[-1] w-full rounded-2xl bg-black/40 backdrop-blur-md"></div>
                </span>
              </span>
            </div>
          </div>
          <motion.div
            whileHover={{
              scale: 1.1,
              color: "#f7f8f8",
              backgroundColor: "#1c1c1c",
              borderColor: "#1c1c1c",
            }}
            transition={{ type: "spring", stiffness: 500 }}
            className="h z-[1] hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#1f2326] bg-[#131618] text-[#8a8f98] sm:pointer-events-auto sm:flex"
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
              className="noScrollbar relative flex h-full cursor-default flex-col justify-start overflow-hidden overflow-x-hidden overflow-y-scroll rounded-lg text-white"
            >
              <div
                className={`inset-0 h-[55%] w-full bg-cover`}
                // style={{
                //   backgroundImage: `url('${imageXsUrl?.src}')`,
                //   backgroundPosition: "center",
                //   backgroundSize: "cover",
                // }}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  className={`pointer-events-none h-full w-full cursor-none bg-contain bg-center object-cover object-center transition-opacity duration-200 ease-in-out`}
                  objectFit="cover"
                  quality={100}
                  loading="lazy"
                  blurDataURL={blurDataUrl}
                  placeholder="blur"
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
