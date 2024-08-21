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
    <header className="z-[999] fixed md:py-6 px-4 py-4 lg:sticky top-0 left-0 w-full flex border-b border-gray-500/5  transition items-center justify-between md:h-[8dvh] backdrop-blur bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="md:flex w-full justify-between  mx-auto max-w-7xl"
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="z-50 p-2 text-lg md:text-base fade-title font-calSans"
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

        <div className="hidden md:flex justify-center gap-2">
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
