import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./useActiveSectionContext";
import { useEffect } from "react";
import { SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold = 0.3) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
