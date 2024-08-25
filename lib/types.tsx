import { Dispatch, SetStateAction } from "react";
import { links } from "./data";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionName = (typeof links)[number]["name"];

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  LINK = "link",
}

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

export type {
  SectionHeadingProps,
  SectionName,
  ButtonProps,
  MobileNavProps,
  DividerProps,
  BadgeProps,
  ModalProps,
};
