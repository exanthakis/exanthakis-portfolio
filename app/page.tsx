import About from "@/components/about/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Image from "next/image";
import bgImg from "@/public/images/heroBg.jpg";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center px-6 md:px-4">
      {/* Circle hero bg */}
      <div className="absolute top-0 -z-10 flex w-full items-center justify-center overflow-hidden sm:h-screen md:left-0">
        <div className="mask-gradient-fade z-2 absolute inset-0 left-1/2 m-auto aspect-square w-[1080px] max-w-[1180px] -translate-x-1/2 overflow-visible opacity-20 grayscale-[1] md:left-0 md:w-auto md:translate-x-0 md:opacity-30">
          <div className="mask-gradient-fade2 z-1 h-full rotate-180">
            <Image
              src={bgImg}
              alt="Background image"
              quality="95"
              priority={true}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
