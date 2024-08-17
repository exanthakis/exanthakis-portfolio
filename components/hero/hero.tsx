// left right hero
"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import Button from "../ui/button";
import { BsArrowRight } from "react-icons/bs";
import { ButtonType } from "@/lib/types";
import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("@/components/hero/cube-scene"), {
  ssr: false,
});

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="relative mx-auto flex flex-col md:flex-row-reverse justify-center items-center h-[92dvh]"
    >
      {/* <div className="flex items-center justify-center z-10 relative h-3/5"> */}
      <CubeScene />
      {/* <div className="relative z-100 h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <CubeScene />
          </motion.div>
        </div> */}
      {/* </div> */}
      <motion.div
        className="flex sm:flex-col items-start justify-center gap-8 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <h1
          className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px]  lg:leading-[98px] leading-[60px] mt-2`}
        >
          Hi, I&apos;m{" "}
          <span className="text-[#30C1E7]">
            <br className="sm:block hidden" /> Emmanuel
          </span>
        </h1>

        <p
          className={`text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] leading-[20px] mt-2 text-white-100`}
        >
          A Frontend developer with <span className="font-bold">3 years</span>{" "}
          of experience in developing user interfaces and web applications.
        </p>
        {/* <h1 className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl max-w-3xl ">
          Hi I&apos;m Manolis
        </h1> */}
        {/* <h1 className=" mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl max-w-3xl ">
          Hi I&apos;m a{" "}
          <span className="font-bold">
            Front end developer & Software Engineer
          </span>{" "}
          with <span className="font-bold">3 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js)</span>.
        </h1> */}

        <Button buttonType={ButtonType.PRIMARY} href="">
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
