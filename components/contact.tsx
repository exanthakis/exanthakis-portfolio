"use client";

import React from "react";

import { useSectionInView } from "@/hooks/useSectionInView";
import SubmitBtn from "./ui/submit-button";
import SectionHeading from "./ui/section-heading";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import Input from "./ui/input";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-28 w-full mx-auto max-w-7xl text-center"
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-[#f1f7feb5]  dark:text-white/80 text-left">
        You can contact me through this form and I will get back to you as soon
        as possible.
      </p>
      <div className="max-w-2xl pt-8 mx-auto ">
        <form
          className="mt-10 flex flex-col text-black/80 "
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
            <Input label={"email"} maxLength={100} type="input" />
          </div>
          <div className="relative mt-6">
            <Input label={"message"} maxLength={5000} type="textarea" />
          </div>
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
};

export default Contact;
