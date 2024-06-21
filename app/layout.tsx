import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveContextProvider from "@/store/active-context";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanouil Xanthakis | Personal Portfolio",
  description: "Frontend with 3 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36  h-screen-ios  z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 `}
      >
        <div className="bg-[#07cdfe2c] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#07cdfe2c]"></div>
        <div className="bg-[#07cdfe2c] absolute top-[-1rem] -z-10 left-[50%] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#000]"></div>
        <ActiveContextProvider>
          <Header />
          {children}
        </ActiveContextProvider>
      </body>
    </html>
  );
}
