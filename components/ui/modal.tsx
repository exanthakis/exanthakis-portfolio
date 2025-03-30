"use client";

import { ButtonType, ModalProps } from "@/lib/types";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { modalVariant } from "@/lib/animations";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.classList.add("modal-bg"); // Prevent scrolling
    } else {
      dialogRef.current?.close();
      document.body.classList.remove("modal-bg");
    }

    // Close on backdrop click
    if (dialogRef.current) {
      dialogRef.current.addEventListener("click", handleBackdropClick);
    }

    return () => {
      document.body.classList.remove("modal-bg");
      if (dialogRef.current) {
        dialogRef.current.removeEventListener("click", handleBackdropClick);
      }
    };
  }, [isOpen]);

  const handleBackdropClick = (event: MouseEvent) => {
    if (dialogRef.current && event.target === dialogRef.current) {
      onClose();
    }
  };

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
          ref={dialogRef}
          className={`w-[90%] fixed h-[90vh] inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-3xl noScrollbar outline-none shadow-lg max-w-4xl bg-[#08090a]`}
        >
          <div
            onClick={handleClose}
            className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center cursor-pointer rounded-full border-2  bg-[#1c1c1c] hover:bg-[#424242] text-[#f7f8f8] border-[#1c1c1c] z-10"
          >
            <IoCloseOutline className=" group-hover:translate-x-1 transition" />
          </div>
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
