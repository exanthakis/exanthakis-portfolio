import { FilterProps, TechStackE } from "@/lib/types";
import React from "react";

const FilterBadge = ({
  activeTechStack,
  currentStack,
}: {
  activeTechStack: TechStackE;
  currentStack: TechStackE;
}) => {
  return (
    <div
      className={`${
        activeTechStack === currentStack ? "bg-[#68cc58]" : "bg-[#1c1c1c]"
      } w-1 h-6 rounded-full transition duration-500`}
    ></div>
  );
};

const FilterButton = ({
  activeTechStack,
  currentStack,
  onFilterClick,
}: {
  activeTechStack: TechStackE;
  currentStack: TechStackE;
  onFilterClick: (id: TechStackE) => void;
}) => {
  return (
    <button
      className={`flex gap-3 transition duration-500 ${
        activeTechStack === currentStack
          ? "text-white font-medium"
          : "text-[#62666d] font-normal"
      }`}
      onClick={() => onFilterClick(currentStack)}
    >
      <FilterBadge
        activeTechStack={activeTechStack}
        currentStack={currentStack}
      />
      <span className="">{currentStack}</span>
    </button>
  );
};

const Filter = ({ activeTechStack, onActiveTechStach }: FilterProps) => {
  const handleFilterClick = (id: TechStackE) => {
    onActiveTechStach(id);
  };
  return (
    <div className="flex gap-4 flex-col items-start justify-center pb-8 w-fit">
      <FilterButton
        activeTechStack={activeTechStack}
        currentStack={TechStackE.All}
        onFilterClick={handleFilterClick}
      />
      <FilterButton
        activeTechStack={activeTechStack}
        currentStack={TechStackE.REACT}
        onFilterClick={handleFilterClick}
      />
      <FilterButton
        activeTechStack={activeTechStack}
        currentStack={TechStackE.HTML}
        onFilterClick={handleFilterClick}
      />
    </div>
  );
};

export default Filter;
