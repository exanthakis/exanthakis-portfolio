"use client";

import { fullName, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/button";
import { ButtonType } from "@/lib/types";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const pathname = usePathname();
  const selected = links?.find((el) => el.hash === pathname);
  const selectedLink = selected?.children?.find((link) => link.name === activeSection);

  return (
    <header
      id="menu"
      className="fixed left-0 top-0 z-[999] flex w-full items-center justify-between border-b border-gray-500/15 bg-[#0A0A0ACC] px-4 py-2.5 backdrop-blur transition md:sticky"
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
            <span className="sr-only">{fullName} Portfolio Page</span>
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
                  setActiveSection(selectedLink?.name);
                }}
              >
                {selectedLink.name}
              </Link>
            </li>
          )}

          <button
            type="button"
            className={`group relative z-50 inline-block h-4 w-4 text-3xl text-white md:hidden`}
            aria-expanded={open}
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <span
              className={`relative block rounded-sm bg-white transition-all duration-200 ease-in-out before:absolute before:-top-1 before:right-0 before:h-[0.01rem] before:w-4 before:rounded-sm before:bg-white before:transition-all before:duration-200 before:ease-in-out before:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[0.01rem] after:w-4 after:rounded-sm after:bg-white after:transition-all after:duration-200 after:ease-in-out after:content-[''] ${open ? "before:top-0 before:rotate-45 after:top-0 after:-rotate-45" : ""}`}
            ></span>
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        {/* Mobile nav */}
        <MobileNav open={open} setOpen={setOpen} />

        {/* Desktop Nav */}
        <DesktopNav />

        <div className="hidden items-center justify-center gap-2 md:flex">
          <>
            <Link
              href="/#contact"
              className="group z-[20] mr-4 flex h-fit items-center gap-2 rounded-lg border border-black/10 bg-white px-2 py-1 text-sm text-black outline-none transition hover:bg-white/90 hover:!text-gray-900 focus:scale-110"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact
              <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
            </Link>
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
          </>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
