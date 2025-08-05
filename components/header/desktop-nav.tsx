import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const pathname = usePathname();
  const selected = links?.find((el) => el.hash === pathname);

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <nav className="hidden items-center gap-2 md:flex">
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map(
          (link) =>
            !link?.isButton && (
              <li key={link.hash} className="relative flex h-3/4 items-center justify-center">
                <Link
                  href={link.hash}
                  className={`flex w-full items-center justify-center px-2 py-1 transition ${
                    link.hash === pathname ? "text-gray-300 hover:text-gray-100" : ""
                  } hover:text-gray-300`}
                >
                  {link.name}
                </Link>
              </li>
            ),
        )}
        <div className="fixed right-0 top-[40vh]">
          {selected?.children?.map((el) => (
            <Link key={el.hash} href={el.hash}>
              <motion.span
                // layoutId="activeSection"
                className={`my-2 flex w-full flex-col items-center justify-center px-2 py-1 transition ${
                  activeSection === el.name
                    ? "rounded-lg bg-gray-100 text-gray-950 hover:text-gray-950"
                    : ""
                } hover:text-gray-300`}
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(el.name);
                }}
              >
                {el.icon}
              </motion.span>

              {/* {activeSection === el.name && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-lg bg-gray-100"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )} */}
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default DesktopNav;
