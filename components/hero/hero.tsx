"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex w-full mt-8 lg:mt-0 justify-center items-center h-[100vh] md:h-[92vh] text-center"
    >
      <div className="max-w-3xl mx-auto ">
        <motion.div
          className="flex flex-col items-center justify-center gap-y-8 px-4 text-lg font-medium -mt-[10%]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h1 className="font-black font-calSans bg-white bg-home-hero-title bg-clip-text font-titles px-0 md:px-8 text-5xl   text-transparent leading-[120%]">
            Turning Ideas into Digital Products
          </h1>

          <p
            className={`md:text-lg tracking-[-0.16px] text-secondary font-normal sm:px-10`}
          >
            I&apos;m a Greek creative developer based in Chania with years of
            experience in front-end development. I turn ideas ideas into dynamic
            digital products that meet today&apos;s needs and adapt to
            tomorrow&apos;s challenges.
          </p>

          <Link
            href="#contact"
            className="group text-base  flex items-center gap-2 rounded-lg outline-none focus:scale-110 z-[20] bg-white text-black active:scale-105 transition border border-black/10  hover:bg-white/90 hover:!text-gray-900 px-3 py-1.5 shadow-[0_6px_16px_rgba(255,255,255,.2)] hover:shadow-[0_6px_20px_rgba(255,255,255,.4)]"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full z-3 overflow-hidden h-[700px] bg-[radial-gradient(50%_53%_at_50%_100%,_#171717,_#ababab00)]"></div>
      <div className=" bg-[radial-gradient(50%_53%_at_50%_100%,_#171717,_#ababab00)] absolute bottom-0 framer2 h-[33vh] w-full z-[3]"></div>
    </section>
  );
};

export default Hero;
