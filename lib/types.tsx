import { Dispatch, SetStateAction } from "react";
import { links } from "./data";

type SectionHeadingProps = {
  children: React.ReactNode;
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

export type { SectionHeadingProps, SectionName, ButtonProps, MobileNavProps };
