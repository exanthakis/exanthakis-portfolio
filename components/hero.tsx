"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative mx-auto flex max-w-3xl flex-col justify-center h-[90vh]">
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
    </div>
  );
};

export default Hero;
