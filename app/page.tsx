import About from "@/components/about/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center px-6 md:px-4">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
