import React from "react";
import { DividerProps } from "@/lib/types";
import { motion } from "framer-motion";
import { widthAnimationVariants } from "@/lib/animations";

const Divider = ({ type }: DividerProps) => {
  return (
    <motion.div
      variants={widthAnimationVariants}
      custom={1}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      className="py-12 w-full relative mt-32 mx-auto"
    >
      <div
        aria-hidden="true"
        className="left-1/2 top-0 w-full center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      {type === "light" && (
        <div
          aria-hidden="true"
          className="left-1/2 top-0 h-[200px] w-[80%] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(8, 8, 8) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
          }}
        ></div>
      )}
    </motion.div>
  );
};

export default Divider;
