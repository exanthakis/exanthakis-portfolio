import { type ButtonProps, ButtonType } from "@/lib/types";

const Button = ({ buttonType, href, children, ...props }: ButtonProps) => {
  const classes =
    buttonType === ButtonType.SECONDARY
      ? "group bg-transparent text-white hover:bg-gray-950 active:scale-105 transition hover:bg-[#d9edfe25] "
      : "group bg-white text-black active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60 hover:bg-white/90";

  return (
    <a
      href={href}
      className={`px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 z-10 ${classes}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
