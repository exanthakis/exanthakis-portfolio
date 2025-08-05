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
import { baseUrl } from "./sitemap";
import React from "react";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Emmanouel Xanthakis | Personal Portfolio",
    template: "%s | Emmanouel Xanthakis | Personal Portfolio",
  },
  description:
    "Creative front-end developer based in Chania, showcasing a collection of selected works and side projects using JavaScript, React, and Next.js, with a focus on innovative and responsive design.",

  openGraph: {
    title: "Emmanouel Xanthakis | Personal Portfolio",
    description:
      "Creative front-end developer based in Chania, showcasing a collection of selected works and side projects using JavaScript, React, and Next.js, with a focus on innovative and responsive design.",
    url: baseUrl,
    siteName: "Emmanouel Xanthakis | Personal Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
