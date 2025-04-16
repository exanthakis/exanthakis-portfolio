"use client";

import { ButtonType, ModalProps } from "@/lib/types";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRoot = document.body;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Prevent scrolling
      document.getElementById("menu")?.classList.add("hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.getElementById("menu")?.classList.remove("hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.getElementById("menu")?.classList.remove("hidden");
    };
  }, [isOpen]);

  if (!modalRoot) return null;

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        open
        className={`noScrollbar none fixed inset-0 top-10 z-50 mx-auto h-[90vh] w-[90%] max-w-4xl rounded-3xl bg-[#08090a] shadow-lg outline-none`}
      >
        {children}
      </motion.dialog>
    </>,
    modalRoot,
  );
};

export default Modal;
