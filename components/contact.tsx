"use client";

import React from "react";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import SubmitBtn from "./ui/submit-button";
import { widthAnimationVariants } from "@/lib/animations";
import SectionHeading from "./ui/section-heading";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-full mx-auto max-w-7xl text-center"
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-[#8a8f98]  dark:text-white/80 text-left">
        You can contact me through this form and I will get back to you as soon
        as possible.
      </p>
      <div className="max-w-2xl pt-8 mx-auto ">
        <form
          className="mt-10 flex flex-col dark:text-black/80 "
          action={async (formData) => {
            const { emailData, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully");
          }}
        >
          <div className="relative mt-6 ">
            <input
              type="email"
              name="email"
              required
              maxLength={100}
              className="h-10 text-white px-4 peer w-full placeholder:text-transparent bg-transparent outline-none"
              placeholder="Your email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm transition duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
            >
              EMAIL
            </label>
            <motion.div
              className="absolute left-0 bottom-0 h-[1px] bg-gray-500/55"
              variants={widthAnimationVariants}
              custom={0.1}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
            />
          </div>
          <div className="relative mt-6">
            <textarea
              className="h-52 pt-2 text-white px-4 peer w-full placeholder:text-transparent bg-transparent outline-none"
              name="message"
              required
              maxLength={5000}
              placeholder="Your message"
            />
            <label
              htmlFor="message"
              className="absolute left-0 ml-1 -translate-y-3 text-white px-1 text-sm transition duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:px-1 peer-focus:text-sm"
            >
              MESSAGE
            </label>
            <motion.div
              className="absolute left-0 bottom-0 h-[1px] bg-gray-500/55"
              variants={widthAnimationVariants}
              custom={0.1}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
            />
          </div>
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
};

export default Contact;
