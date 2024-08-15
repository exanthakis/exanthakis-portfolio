"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import Button from "./button";
import { BsArrowRight } from "react-icons/bs";
import { ButtonType } from "@/lib/types";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="relative mx-auto flex max-w-3xl flex-col justify-center h-[92vh]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            test
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I&apos;m a{" "}
        <span className="font-bold">
          Front end developer & Software Engineer
        </span>{" "}
        with <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button buttonType={ButtonType.PRIMARY} href="" download>
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
        <Button buttonType={ButtonType.SECONDARY} href="">
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
