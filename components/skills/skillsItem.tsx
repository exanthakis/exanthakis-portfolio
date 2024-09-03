import { SkillsItemProps } from "@/lib/types";
import React from "react";

const SkillsItem = ({ icon, title }: SkillsItemProps) => {
  return (
    <>
      <div className="flex h-14 w-[4.25rem] items-center justify-center rounded-2xl border-[1px] border-[#d6ebfd30] transition duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(255,255,255,.4)]">
        <span className="inline leading-[0] text-[#e5e7eb] text-2xl">
          {icon}
        </span>
      </div>
      <span className="sans transition duration-200 ease-in-out group-hover:text-white text-sm leading-[1.6] text-[#f1f7feb5] font-normal ">
        {title}
      </span>
    </>
  );
};

export default SkillsItem;
