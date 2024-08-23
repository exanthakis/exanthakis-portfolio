import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-6 md:px-4 mx-auto">
      <Hero />
      <About />
    </main>
  );
}
