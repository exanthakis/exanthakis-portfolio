"use client";

import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] fixed lg:sticky top-0 left-0 w-full flex  items-center justify-between md:h-[100px]">
      {/* <motion.div
        className="fixed top-0 left-0 ml-auto mr-auto h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        // className=""
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div> */}

      <motion.div
        className="flex items-center gap-3"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <a href="">Emmanouil Xanthakis</a>
      </motion.div>

      <nav className="flex items-center gap-2">
        {/* <nav className="flex fixed top-[0.15rem] h-12 left-1/2 -translate-x-1/2 mr-auto sm:top-[1.7rem] sm:h-[initial] sm:py-0"> */}
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={`flex w-full items-center justify-center px-2 py-2
                 hover:text-white-950 transition ${
                   activeSection === link.name
                     ? "text-gray-950 dark:text-gray-200"
                     : ""
                 }  dark:text-gray-500 dark:hover:text-gray-300`}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(link.name);
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
