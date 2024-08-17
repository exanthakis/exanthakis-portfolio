import { fullName, links } from "@/lib/data";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative h-24 px-4 text-center text-gray-500"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%" }}
    >
      <div className="fixed h-24 w-full bottom-0 flex flex-col justify-center">
        <small className="mb-2 block text-xs">
          &copy; {new Date().getFullYear()} {fullName} All rights reserved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
