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
      className="scroll-mt-28 mb-20 sm:mb-28 w-full mx-auto max-w-5xl md:max-w-4xl lg:max-w-6xl px-0 md:px-10 text-center pt-16"
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-[#f1f7feb5] dark:text-white/80 text-left">
        You can contact me through this form and I will get back to you as soon
        as possible.
      </p>
      <div className="pt-8 mx-auto">
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
          <div className="flex-col sm:flex-row flex mt-6 gap-10">
            <div className="relative w-full sm:w-2/4">
              <Input
                label={"email"}
                maxLength={100}
                type="input"
                inputType={"email"}
              />
            </div>
            <div className="relative w-full sm:w-2/4">
              <Input
                label={"fullname"}
                maxLength={100}
                type="input"
                inputType={"text"}
              />
            </div>
          </div>
          <div className="relative mt-6">
            <Input
              label={"message"}
              maxLength={5000}
              type="textarea"
              inputType={"text"}
            />
          </div>
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
};

export default Contact;
