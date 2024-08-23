import { BadgeProps } from "@/lib/types";
import React from "react";

const Badge = ({ className, title }: BadgeProps) => {
  return (
    <div className="flex flex-row gap-3 items-center pb-4">
      <div
        className={`w-[0.875rem] h-[0.5rem] rounded-full ${className}`}
      ></div>
      {title && (
        <span className="font-bold  text-left text-[#d0d6e0] text-sm">
          {title}
        </span>
      )}
    </div>
  );
};

export default Badge;
