// left right hero
"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import Image from "next/image";
import Button from "../ui/button";
import { BsArrowRight } from "react-icons/bs";
import { ButtonType } from "@/lib/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";

const CubeScene = dynamic(() => import("@/components/hero/cube-scene"), {
  ssr: false,
});

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mx-auto flex flex-col md:flex-row-reverse justify-center items-center h-[92dvh] max-w-3xl text-center"
    >
      {/* <div className="flex items-center justify-center z-10 relative h-3/5"> */}
      {/* <CubeScene /> */}
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
        className="flex flex-col items-center justify-center gap-y-8 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <h1 className="font-black font-calSans bg-white bg-home-hero-title bg-clip-text font-titles  text-5xl sm:text-6xl text-transparent leading-[120%]">
          Turning Ideas into Digital Products
        </h1>

        <span
          className={`md:text-xl tracking-[-0.16px] text-[rgba(239,247,255,.615)] font-normal sm:px-10`}
          // className={`text-white font-medium lg:text-2xl sm:text-xl xs:text-[20px] text-[16px] lg:leading-[40px] leading-[20px] text-white-100`}
        >
          I'm a Greek creative developer based in Chania{" "}
          <span className="font-bold">with years</span> of experience in
          front-end development, developing user interfaces and web
          applications.
        </span>

        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full outline-none focus:scale-110 z-10 bg-white text-white/60  active:scale-105 transition border border-black/10 dark:bg-white/10  hover:bg-white/90 hover:!text-gray-900 px-7 py-2 shadow-[0_6px_16px_rgba(255,255,255,.2)] hover:shadow-[0_6px_20px_rgba(255,255,255,.4)]"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* <Button buttonType={ButtonType.PRIMARY} href="">
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button> */}
      </motion.div>
    </section>
  );
};

export default Hero;
