import { SkillsItemProps } from "@/lib/types";
import React from "react";

const SkillsItem = ({
  icon,
  title,
  iconColor = "#e5e7eb",
  size = "default",
}: SkillsItemProps) => {
  const isMain = size === "main";

  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className={`flex items-center justify-center transition duration-200 ease-in-out ${
          isMain
            ? "w-[2.25rem] hover:shadow-lg"
            : "h-14 w-[4.25rem] rounded-2xl border border-[#d6ebfd30] hover:shadow-[0_6px_20px_rgba(255,255,255,.4)]"
        }`}
      >
        <span
          style={{ color: iconColor }}
          className={`inline leading-[0]  ${isMain ? "text-xl" : "text-2xl"}`}
        >
          {icon}
        </span>
      </div>
      <span
        className={`sans transition duration-200 ease-in-out group-hover:text-white font-normal ${
          isMain
            ? "text-xs leading-2 text-[#f1f7feb5]"
            : "text-sm leading-[1.6] text-[#f1f7feb5]"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default SkillsItem;
