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
          className={`noScrollbar fixed inset-0 left-1/2 top-1/2 z-10 h-[90vh] w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#08090a] shadow-lg outline-none`}
        >
          <div
            onClick={handleClose}
            className="fixed right-6 top-6 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-[#1c1c1c] bg-[#1c1c1c] text-[#f7f8f8] hover:bg-[#424242]"
          >
            <IoCloseOutline className="transition group-hover:translate-x-1" />
          </div>
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default Modal;
