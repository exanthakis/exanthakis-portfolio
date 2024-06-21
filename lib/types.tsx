import { links } from "./data";

type SectionHeadingProps = {
  children: React.ReactNode;
};

type SectionName = (typeof links)[number]["name"];

export type { SectionHeadingProps, SectionName };
