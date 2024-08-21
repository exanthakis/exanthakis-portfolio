import { links, socialLinks } from "@/lib/data";
import { ButtonType, MobileNavProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";
import Button from "../ui/button";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImg from "@/public/bg.png";
import { fadeInAnimationVariants } from "@/lib/animations";

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col justify-between items-end bg-black  pr-4 pt-14 pb-6 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
        open ? "translate-x-0 h-[100dvh]" : "translate-x-[100%]"
      }`}
    >
      <Image
        src={bgImg}
        alt="Background image"
        quality="95"
        priority={true}
        className="absolute left-0 z-10 h-screen w-full select-none md:top-0 opacity-80"
      />
      <button
        type="button"
        className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden "
        aria-expanded={open}
        onClick={() => setOpen(false)}
      >
        <MdClose />
        <span className="sr-only">Close menu</span>
      </button>

      <ul className="grid justify-items-end gap-8 pb-8 z-10">
        {links.map((item, index) => (
          <motion.li
            className="first:mt-8"
            animate={open}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
          >
            <Link
              href={item.hash}
              key={index}
              className={`block px-3 text-3xl ${
                activeSection === item.name ? "text-white" : "text-gray-500"
              }`}
              onClick={() => {
                setOpen(false);
                setActiveSection(item.name);
                setTimeOfLastClick(Date.now());
              }}
              aria-current={
                pathname.includes(item.hash as string) ? "page" : undefined
              }
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="pt-6 flex justify-center gap-4 px-3">
        {socialLinks.map((social) => (
          <Button
            buttonType={ButtonType.LINK}
            href={social.link}
            key={social.link}
            target="_blank"
            className="z-10"
          >
            {social.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
