"use client";

import React from "react";
import { motion } from "framer-motion";
import { widthAnimationVariants } from "@/lib/animations";
import { InputProps } from "@/lib/types";

const Input = ({ label, maxLength, type }: InputProps) => {
  return (
    <>
      {type === "input" ? (
        <input
          type={label}
          name={label}
          required
          maxLength={maxLength}
          className="h-10 text-white px-4 peer w-full placeholder:text-transparent bg-transparent outline-none"
          placeholder={`Your ${label}`}
        />
      ) : (
        <textarea
          className="h-52 pt-2 text-white px-4 peer w-full placeholder:text-transparent bg-transparent outline-none"
          name={label}
          required
          maxLength={5000}
          placeholder={`Your ${label}`}
        />
      )}
      <label
        htmlFor={label}
        className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm transition duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#f1f7feb5] peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
      >
        {label.toUpperCase()}
      </label>
      <motion.div
        className="absolute left-0 bottom-0 h-[1px] bg-[#f1f7feb5]"
        variants={widthAnimationVariants}
        custom={0.1}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: false,
        }}
      />
    </>
  );
};

export default Input;
