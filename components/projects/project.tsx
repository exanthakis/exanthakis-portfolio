"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import companyImg from "../../public/deloitte-digital-logo.png";
import { FiPlus } from "react-icons/fi";
import Modal from "../ui/modal";
import { useState } from "react";
import Divider from "../ui/divider";
import Button from "../ui/button";
import { ButtonType, ProjectProps } from "@/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({
  title,
  description,
  icons,
  imageUrl,
  link,
  onOpenModal,
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    onOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onOpenModal(false);
  };

  return (
    <div className="bg-[#131618] py-8 px-7 h-80 relative text-left flex flex-col overflow-hidden rounded-3xl justify-between hover:brightness-[170%] ">
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
        <div
          onClick={handleOpenModal}
          className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2 border-[#1f2326] bg-[#131618] text-[#8a8f98] hover:bg-[#1c1c1c] hover:text-[#f7f8f8] hover:border-[#1c1c1c]"
        >
          <FiPlus className=" group-hover:translate-x-1 transition" />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <section className="flex h-full noScrollbar flex-col border border-black/5 rounded-lg overflow-hidden relative text-white overflow-y-scroll cursor-default">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="
            w-full shadow-2xl"
            />
            <div className="pt-4 pb-7 w-full px-5 sm:pl-10 sm:pt-10 flex flex-col h-full sm:group-even:ml-[18rem]">
              <ul className="flex flex-wrap gap-8 mb-[-5.625rem] justify-center">
                {icons.map((icon, index) => (
                  <li key={index} className="text-3xl text-white rounded-full">
                    {icon}
                  </li>
                ))}
              </ul>
              <Divider />
              <h3 className="text-5xl font-semibold mt-[-3.125rem]">{title}</h3>
              <p className="mt-5 leading-relaxe text-white/70">{description}</p>
              {link && (
                <Button
                  className="text-white flex gap-3 items-center pt-5  outline-none"
                  buttonType={ButtonType.LINK}
                  href={link}
                  target="_blank"
                >
                  Visit website
                  <FaExternalLinkAlt className=" group-hover:translate-x-1 transition" />
                </Button>
              )}
            </div>
          </section>
        </Modal>
      </div>
    </div>
  );
};

export default Project;
