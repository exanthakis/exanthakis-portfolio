"use client";

import React from "react";
import { motion } from "framer-motion";
import { widthAnimationVariants } from "@/lib/animations";
import { InputProps } from "@/lib/types";

const Input = ({ label, maxLength, type, inputType }: InputProps) => {
  return (
    <>
      {type === "input" ? (
        <input
          type={inputType}
          name={label}
          required
          maxLength={maxLength}
          className="peer h-10 w-full bg-transparent px-4 text-white outline-none placeholder:text-transparent"
          placeholder={`Your ${label}`}
        />
      ) : (
        <textarea
          className="peer h-52 w-full bg-transparent px-4 pt-2 text-white outline-none placeholder:text-transparent"
          name={label}
          required
          maxLength={5000}
          placeholder={`Your ${label}`}
        />
      )}
      <label
        htmlFor={label}
        className="absolute left-0 ml-1 -translate-y-3 px-1 text-sm text-white transition duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#f1f7feb5] peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
      >
        {label.toUpperCase()}
      </label>
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-[#f1f7feb5]"
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
