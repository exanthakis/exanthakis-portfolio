import { links, socialLinks } from "@/lib/data";
import { ButtonType, MobileNavProps } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";
import Button from "../ui/button";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-40 flex flex-col justify-between items-end bg-gray-950 pr-4 pt-14 pb-6 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
        open ? "translate-x-0 h-[100dvh]" : "translate-x-[100%]"
      }`}
    >
      <button
        type="button"
        className="fixed right-4 top-4 mb-4 block p-2 text-3xl text-white md:hidden "
        aria-expanded={open}
        onClick={() => setOpen(false)}
      >
        <MdClose />
        <span className="sr-only">Close menu</span>
      </button>

      <div className="grid justify-items-end gap-8">
        {links.map((item) => (
          <Link
            href={item.hash}
            key={item.name}
            className={`block px-3 text-3xl first:mt-8 ${
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
        ))}
      </div>
      <div className="pt-6 flex justify-center gap-2 px-3">
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
    </div>
  );
};

export default MobileNav;
