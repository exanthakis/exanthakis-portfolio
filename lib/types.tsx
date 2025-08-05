import { Dispatch, SetStateAction } from "react";
import { links, projectsData } from "./data";
import { IconBaseProps } from "react-icons";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LINK = "link",
}

export enum TechStackE {
  All = "All",
  NEXT = "Next.js",
  VUE = "Vue.js",
}

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionName = (typeof links)[number]["children"][number]["name"];

interface IButtonProps {
  buttonType: ButtonType;
  href: string;
  children: React.ReactNode;
}

type ButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type MobileNavProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type DividerProps = {
  type?: string;
};

type BadgeProps = {
  className: string;
  title?: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

type ProjectPropsModal = {
  onOpenModal: (disableDrag: boolean) => void;
};

type ProjectsT = (typeof projectsData)[number];

type ProjectProps = ProjectsT & ProjectPropsModal;

type FilterProps = {
  activeTechStack: TechStackE;
  onActiveTechStack: (id: TechStackE) => void;
};

type SkillsItemProps = {
  icon: React.FunctionComponentElement<IconBaseProps>;
  title: string;
  size?: "main" | "default";
  iconColor?: string;
  animateTitle?: boolean;
};

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  fullname: string;
};

type InputProps = {
  label: string;
  maxLength: number;
  type: string;
  inputType: string;
};

type AboutParagraphProps = {
  id: number;
  children: React.ReactNode;
};

type ExperienceItem = {
  id: number;
  show: boolean;
};

type Tag = {
  id: number;
  name: string;
};

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string;
};

type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

type GetPostsOptions = {
  limit?: number;
  tags?: string[];
  page?: number;
};

type PaginationResult = {
  posts: Post[];
  pagination: {
    total: number;
    page: number;
    totalPages: number;
    limit: number;
    nextPage?: number | null;
    prevPage?: number | null;
  };
};

export type {
  SectionHeadingProps,
  SectionName,
  ButtonProps,
  MobileNavProps,
  DividerProps,
  BadgeProps,
  ModalProps,
  ProjectsT,
  ProjectProps,
  FilterProps,
  SkillsItemProps,
  ContactFormEmailProps,
  InputProps,
  AboutParagraphProps,
  ExperienceItem,
  Metadata,
  Tag,
  Post,
  GetPostsOptions,
  PaginationResult,
};
