import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans, Be_Vietnam_Pro } from "next/font/google";
import Navbar from "./components/navbar";
import LayoutWrapper from "./layoutWrapper";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-vietnam",
});

const plexMono = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Matthew Guo",
  description: "Matthew Guo's internet home",
  openGraph: {
    title: "Matthew Guo",
    description: "Matthew Guo's internet home ",
    url: "https://homescree.net",
    images: "https://homescree.net/favicon.ico",
    siteName: "Matthew Guo",
    locale: "en-US",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${vietnam.variable} font-sans text-neutral-800  ${plexMono.variable} font-ibm bg-white `}
      >
        <LayoutWrapper>
          <Navbar></Navbar>
          {children}
        </LayoutWrapper>
        <div className="mt-36 text-[12px] text-black/25 pb-1 pl-1">
          Matthew Guo
        </div>
      </body>
    </html>
  );
}
