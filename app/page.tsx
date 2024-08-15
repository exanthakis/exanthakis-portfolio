import About from "@/components/about/about";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mx-auto max-w-7xl">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
