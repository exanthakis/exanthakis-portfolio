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
      className="mx-auto mb-20 w-full max-w-5xl scroll-mt-28 px-0 pt-16 text-center sm:mb-28 md:max-w-4xl md:px-10 lg:max-w-6xl"
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="text-left text-[#f1f7feb5] dark:text-white/80">
        You can contact me through this form and I will get back to you as soon as possible.
      </p>
      <div className="mx-auto pt-8">
        <form
          className="mt-10 flex flex-col text-black/80"
          action={async (formData) => {
            const { emailData, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully");
          }}
        >
          <div className="mt-6 flex flex-col gap-10 sm:flex-row">
            <div className="relative w-full sm:w-2/4">
              <Input label={"email"} maxLength={100} type="input" inputType={"email"} />
            </div>
            <div className="relative w-full sm:w-2/4">
              <Input label={"fullname"} maxLength={100} type="input" inputType={"text"} />
            </div>
          </div>
          <div className="relative mt-6">
            <Input label={"message"} maxLength={5000} type="textarea" inputType={"text"} />
          </div>
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
};

export default Contact;
