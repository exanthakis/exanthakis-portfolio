import { ActiveContext } from "@/store/active-context";
import { useContext } from "react";

export const useActiveSectionContext = () => {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error("useActiveSectionContext must be within a ActiveSectionProvider");
  }

  return context;
};
