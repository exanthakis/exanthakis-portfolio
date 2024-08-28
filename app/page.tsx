import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 md:px-4 mx-auto overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
