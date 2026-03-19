import About from "@/components/about/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Image from "next/image";
import bgImg from "@/public/images/heroBg.jpg";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { projectsData } from "@/lib/data";

export async function getBase64ImageUrl(imagePath: string) {
  // Resolve the absolute path from the public folder
  const absolutePath = path.join(process.cwd(), "public", imagePath);

  // Read the file directly
  const buffer = await fs.readFile(absolutePath);

  // tiny version for blur
  const resizedBuffer = await sharp(buffer)
    .resize(20) // very small
    .toBuffer();

  return `data:image/webp;base64,${resizedBuffer.toString("base64")}`;
}

export default async function HomePage() {
  const projectsWithBlur = await Promise.all(
    projectsData.map(async (data) => ({
      ...data,
      blurDataUrl: await getBase64ImageUrl(data.src ?? ""),
    })),
  );

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
      {projectsWithBlur && <Projects projectData={projectsWithBlur} />}
      <Contact />
    </main>
  );
}
