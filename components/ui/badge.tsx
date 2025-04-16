import { BadgeProps } from "@/lib/types";
import React from "react";

const Badge = ({ className, title }: BadgeProps) => {
  return (
    <div className="flex flex-row items-center gap-3 pb-4">
      <div className={`h-[0.5rem] w-[0.875rem] rounded-full ${className}`}></div>
      {title && <span className="text-left text-sm font-bold text-[#d0d6e0]">{title}</span>}
    </div>
  );
};

export default Badge;
