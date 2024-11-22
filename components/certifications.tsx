"use client";

import React, { useEffect, useRef, useState } from "react";
import { certificationsData } from "@/lib/data";
import { motion } from "framer-motion";
import Button from "./ui/button";
import { ButtonType } from "@/lib/types";
import { BsArrowRight } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { fadeInAnimationVariants } from "@/lib/animations";
import Badge from "./ui/badge";
import Modal from "./ui/modal";
import { FiPlus } from "react-icons/fi";

const Certifications = () => {
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
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-center w-full mx-auto py-12 my-[8rem] relative overflow-hidden rounded-3xl border-t border-[#d6ebfd30] max-w-7xl">
      <div
        aria-hidden="true"
        className="left-1/2 right-1 top-0 w-[300px] sm:left-auto center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="-top-1 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
        }}
      ></div>
      <div className="w-full flex items-center flex-col pb-10 max-w-7xl mx-auto">
        <Badge className="bg-[#B59AFF]" title={"Certifications"} />

        <span className="text-center tracking-[-0.16px] text-secondary font-normal max-w-3xl">
          Additionally, I&apos;ve earned a few certificates emphasizing my
          dedication to continual learning and skill deevelopment. I&apos;m
          always open to new learning opportunities, eager to enhance my skills
          even further.
        </span>
      </div>

      <ul className="relative z-20 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:flex-row md:gap-20 lg:grid-cols-3">
        {certificationsData.map((certification, index) => (
          <motion.li
            className="col-span-1 flex flex-col p-4"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={1}
          >
            <span className="inline mb-4 leading-[0] text-white text-2xl">
              {certification.icon}
            </span>
            <h5 className="mb-2 font-bold text-2xl text-left">
              {certification.title}
            </h5>

            <p className="text-md text-justify mt-auto">{certification.date}</p>
            {certification.link && certification.link.trim().length > 0 ? (
              <div className="flex flex-wrap pt-3 text-xs">
                <Button
                  buttonType={ButtonType.LINK}
                  href={certification.link}
                  target="_blank"
                >
                  Learn more
                  <GoLinkExternal className="opacity-70 group-hover:translate-x-1 transition" />
                </Button>
              </div>
            ) : (
              <>
                {/* If certification link is empty then open a modal */}
                <div
                  onClick={handleOpenModal}
                  className="flex gap-2 flex-wrap pt-3 text-xs cursor-pointer"
                >
                  Learn more
                  <GoLinkExternal className="opacity-70 group-hover:translate-x-1 transition" />
                </div>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                  <section
                    ref={modalRef}
                    className="flex justify-start h-full noScrollbar flex-col border border-black/5 rounded-lg overflow-hidden relative text-white overflow-y-scroll overflow-x-hidden cursor-default"
                  >
                    <div className="py-2 px-4">
                      <div className="mb-4 rounded-lg border border-[#d6ebfd30] bg-[#d8f4f609] transition ease-in-out hover:bg-[#ddeaf814]">
                        <h4>Udemy test</h4>
                      </div>
                    </div>
                  </section>
                </Modal>
              </>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
