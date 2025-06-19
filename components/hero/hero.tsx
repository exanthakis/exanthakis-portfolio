"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useActiveSectionContext } from "@/hooks/useActiveSectionContext";
import { mainSkillsData } from "@/lib/data";
import SkillsItem from "../skills/skillsItem";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative mt-8 flex h-[100vh] w-full items-center justify-center text-center md:h-[92vh] lg:mt-0"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="-mt-[10%] flex flex-col items-center justify-center gap-y-8 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h1 className="bg-home-hero-title font-titles bg-white bg-clip-text px-0 font-calSans text-5xl font-black leading-[120%] text-transparent md:px-8">
            Turning Ideas into Digital Products
          </h1>

          <p className={`text-secondary text-base font-normal sm:px-10 md:text-lg`}>
            I&apos;m a Greek creative developer based in Chania with years of experience in
            front-end development. I turn ideas ideas into dynamic digital products that meet
            today&apos;s needs and adapt to tomorrow&apos;s challenges.
          </p>

          <Link
            href="#contact"
            className="group z-[20] flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-base text-black shadow-[0_6px_16px_rgba(255,255,255,.2)] outline-none transition hover:bg-white/90 hover:!text-gray-900 hover:shadow-[0_6px_20px_rgba(255,255,255,.4)] focus:scale-110 active:scale-105"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      <ul className="absolute bottom-6 z-10 mx-auto flex flex-wrap justify-center gap-10 text-lg text-gray-800 sm:max-w-[53rem]">
        {mainSkillsData.map((skill, index) => (
          <motion.li
            className="group flex h-full w-[calc(100%/4)] flex-col items-center justify-center gap-4 outline-none sm:w-[calc(100%/5)]"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <SkillsItem
              icon={skill.icon}
              title={skill.title}
              iconColor={skill.iconColor}
              size="main"
            />
          </motion.li>
        ))}
      </ul>
      <div className="z-3 absolute bottom-0 h-[700px] w-full overflow-hidden bg-[radial-gradient(50%_53%_at_50%_100%,_#171717,_#ababab00)]"></div>
      <div className="framer2 absolute bottom-0 z-[3] h-[33vh] w-full bg-[radial-gradient(50%_53%_at_50%_100%,_#171717,_#ababab00)]"></div>
    </section>
  );
};

export default Hero;
