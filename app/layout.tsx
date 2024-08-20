import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ActiveContextProvider from "@/store/active-context";
import Image from "next/image";
import bgImg from "@/public/bg.png";
import Footer from "@/components/footer";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanouil Xanthakis | Personal Portfolio",
  description: "Front-End with 3 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-generalSansRegular relative bg-black text-gray-50 dark:text-opacity-90`}
        // className={`font-generalSansRegular bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
        <Image
          src={bgImg}
          alt="Background image"
          quality="95"
          priority={true}
          className="absolute left-0 z-[10] h-screen w-full select-none md:top-0 opacity-70"
        />
        <ActiveContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveContextProvider>
      </body>
    </html>
  );
}
