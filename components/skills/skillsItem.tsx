import { SkillsItemProps } from "@/lib/types";
import Image from "next/image";
import React from "react";

const SkillsItem = ({
  icon,
  image,
  title,
  iconColor = "#e5e7eb",
  size = "default",
  animateTitle = false,
}: SkillsItemProps) => {
  const isMain = size === "main";

  return (
    <div className="group relative flex flex-col items-center gap-2">
      <div
        className={`flex items-center justify-center transition duration-200 ease-in-out ${
          isMain
            ? "w-[2.25rem] hover:shadow-lg"
            : "h-14 w-[4.25rem] rounded-2xl border border-[#d6ebfd30] hover:shadow-[0_6px_20px_rgba(255,255,255,.4)]"
        }`}
      >
        {image ? (
          <Image
            src={image}
            width={animateTitle ? 24 : 30}
            height={animateTitle ? 24 : 30}
            alt="Background image"
            className={`object-cover ${title === "GitHub" || title === "Framer Motion" ? "invert" : ""}`}
          />
        ) : (
          <span
            style={{ color: iconColor }}
            className={`inline leading-[0] ${isMain ? "text-xl" : "text-2xl"}`}
          >
            {icon}
          </span>
        )}
      </div>
      <span
        className={`sans font-normal transition duration-200 ease-in-out group-hover:text-white ${
          isMain ? "leading-2 text-xs text-[#f1f7feb5]" : "text-sm leading-[1.6] text-[#f1f7feb5]"
        } ${animateTitle ? "text-center leading-5 opacity-0 group-hover:opacity-100" : ""}`}
      >
        {title}
      </span>
    </div>
  );
};

export default SkillsItem;
