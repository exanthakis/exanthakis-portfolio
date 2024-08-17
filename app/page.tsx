import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 mx-auto max-w-7xl">
      <Hero />
      <About />
    </main>
  );
}
