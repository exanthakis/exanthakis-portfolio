"use client";

import { SectionName } from "@/lib/types";
import React from "react";
import { createContext, useState } from "react";

type ActiveSectionContentType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// object that contains react component
export const ActiveContext = createContext<ActiveSectionContentType | null>(null);

const ActiveContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const activeCtx = {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  };
  return <ActiveContext.Provider value={activeCtx}>{children}</ActiveContext.Provider>;
};

export default ActiveContextProvider;
