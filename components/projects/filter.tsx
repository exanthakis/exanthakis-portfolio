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
      } h-6 w-1 rounded-full transition duration-500`}
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
        activeTechStack === currentStack ? "font-medium text-white" : "font-normal text-[#62666d]"
      }`}
      onClick={() => onFilterClick(currentStack)}
    >
      <FilterBadge activeTechStack={activeTechStack} currentStack={currentStack} />
      <span className="">{currentStack}</span>
    </button>
  );
};

const Filter = ({ activeTechStack, onActiveTechStack }: FilterProps) => {
  const handleFilterClick = (id: TechStackE) => {
    onActiveTechStack(id);
  };
  return (
    <div className="flex w-fit flex-row items-start justify-center gap-4 pb-8">
      <FilterButton
        activeTechStack={activeTechStack}
        currentStack={TechStackE.All}
        onFilterClick={handleFilterClick}
      />
      <FilterButton
        activeTechStack={activeTechStack}
        currentStack={TechStackE.NEXT}
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
