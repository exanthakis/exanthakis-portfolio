import { FilterProps, TechStackE } from "@/lib/types";
import React from "react";

const Filter = ({ activeTechStack, onActiveTechStach }: FilterProps) => {
  const handleFilterClick = (id: TechStackE) => {
    onActiveTechStach(id);
  };
  return (
    <div className="flex gap-4 flex-col items-start justify-center pb-8">
      <button
        className={`${
          activeTechStack === TechStackE.All ? "text-pink-400" : ""
        }`}
        onClick={() => handleFilterClick(TechStackE.All)}
      >
        All
      </button>
      <button
        className={`${
          activeTechStack === TechStackE.REACT ? "text-pink-400" : ""
        }`}
        onClick={() => handleFilterClick(TechStackE.REACT)}
      >
        React
      </button>
      <button
        className={`${
          activeTechStack === TechStackE.HTML ? "text-pink-400" : ""
        }`}
        onClick={() => handleFilterClick(TechStackE.HTML)}
      >
        HTML/CSS
      </button>
    </div>
  );
};

export default Filter;
