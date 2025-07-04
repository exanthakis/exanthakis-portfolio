import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ActiveContextProvider from "@/store/active-context";
import Image from "next/image";
import bgImg from "@/public/images/heroBg.jpg";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanouel Xanthakis | Personal Portfolio",
  description:
    "Creative front-end developer based in Chania, showcasing a collection of selected works and side projects using JavaScript, React, and Next.js, with a focus on innovative and responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`relative bg-black font-generalSansRegular text-gray-50 dark:text-opacity-90`}
      >
        {/* Circle hero bg */}
        <div className="absolute top-0 -z-10 flex h-[104vh] w-full items-center justify-center overflow-hidden sm:h-screen md:left-0 md:top-auto">
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

        <ActiveContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveContextProvider>
        <Analytics />
        <SpeedInsights />

        {/* Transparent body bg */}
        <div className="pointer-events-none fixed bottom-full left-0 right-0 top-0 z-10 h-full">
          <div className="h-full w-full bg-[url('/images/transparentBg.png')] bg-[length:128px] bg-repeat opacity-[0.04] md:opacity-[0.05]"></div>
        </div>
      </body>
    </html>
  );
}
