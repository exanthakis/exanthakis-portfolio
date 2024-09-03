import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group mt-14 flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full bg-white text-black  active:scale-105 transition border border-black/10  hover:bg-white/80 hover:!text-gray-900 px-7 py-2 "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-black"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
