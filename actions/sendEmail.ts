"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const message = data.message;
  const senderEmail = data.email;

  // simple server-side validation
  if (!validateString(senderEmail, 100)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let emailData;
  try {
    emailData = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["manolis.ksanthakis@gmail.com"],
      subject: "Hello World",
      // text: message as string,
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });
  } catch (err) {
    return {
      error: getErrorMessage(err),
    };
  }

  return {
    emailData,
  };
};
