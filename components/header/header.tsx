"use client";

import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/button";
import { ButtonType } from "@/lib/types";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { links } from "@/lib/data";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const selectedLink = links?.find((link) => link.name === activeSection);

  return (
    <header
      id="menu"
      className="fixed left-0 top-0 z-[999] flex w-full items-center justify-between border-b border-gray-500/15 bg-[#0A0A0ACC] px-4 py-2.5 backdrop-blur transition lg:sticky"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto w-full max-w-5xl justify-between px-0 md:flex md:max-w-4xl md:px-10 lg:max-w-6xl"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="fade-title z-50 py-2 font-calSans text-xl"
            onClick={() => setOpen(false)}
          >
            exanthakis
            <span className="sr-only">Emmanoul Xanthakis Portfolio Page</span>
          </Link>
          {selectedLink && (
            <li
              key={selectedLink.hash}
              className="relative ml-auto mr-5 flex h-3/4 items-center justify-end rounded-lg bg-gray-100 md:hidden"
            >
              <Link
                href={selectedLink.hash}
                className={`flex w-full items-center justify-center px-2.5 py-1 text-sm transition ${
                  activeSection === selectedLink.name ? "text-gray-950 hover:text-gray-950" : ""
                } hover:text-gray-300`}
                onClick={() => {
                  setTimeOfLastClick(Date.now());
                  setActiveSection(selectedLink.name);
                }}
              >
                {selectedLink.name}
              </Link>
            </li>
          )}

          <button
            type="button"
            className={`group relative z-50 inline-block h-4 w-4 p-2 text-3xl text-white md:hidden`}
            aria-expanded={open}
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <span
              className={`relative block w-4 rounded-sm bg-white transition-all duration-200 ease-in-out before:absolute before:-top-1 before:right-2 before:h-[0.01rem] before:w-4 before:rounded-sm before:bg-white before:transition-all before:duration-200 before:ease-in-out before:content-[''] after:absolute after:-bottom-1 after:right-2 after:h-[0.01rem] after:w-4 after:rounded-sm after:bg-white after:transition-all after:duration-200 after:ease-in-out after:content-[''] ${open ? "bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45" : ""}`}
            ></span>
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Mobile nav */}
        <MobileNav open={open} setOpen={setOpen} />

        {/* Desktop Nav */}
        <DesktopNav />

        <div className="hidden justify-center gap-2 md:flex">
          {socialLinks.map((social) => (
            <Button
              buttonType={ButtonType.LINK}
              href={social.link}
              key={social.link}
              target="_blank"
            >
              {social.icon}
            </Button>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
