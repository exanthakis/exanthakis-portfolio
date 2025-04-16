"use client";

import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../ui/button";
import { ButtonType } from "@/lib/types";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobileNav from "./mobile-nav";
import DesktopNav from "./desktop-nav";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75 fixed left-0 top-0 z-[999] flex w-full items-center justify-between border-b border-gray-500/15 px-4 py-4 backdrop-blur transition md:h-[8vh] md:py-6 lg:sticky">
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
          <button
            type="button"
            className="block p-2 text-3xl text-white md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <MdMenu />
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
