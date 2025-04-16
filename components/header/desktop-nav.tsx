import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";

const DesktopNav = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <nav className="hidden items-center gap-2 md:flex">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => (
          <li key={link.hash} className="relative flex h-3/4 items-center justify-center">
            <Link
              href={link.hash}
              className={`flex w-full items-center justify-center px-2 py-1 transition ${
                activeSection === link.name ? "text-gray-950 hover:text-gray-950" : ""
              } hover:text-gray-300`}
              onClick={() => {
                setTimeOfLastClick(Date.now());
                setActiveSection(link.name);
              }}
            >
              {link.name}
              {activeSection === link.name && (
                <motion.span
                  className="absolute inset-0 -z-10 rounded-lg bg-gray-100"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                ></motion.span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
