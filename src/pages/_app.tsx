import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { globalStyles } from "@/styles/global";
import { Header } from "@/components/layout";

import "@/styles/global.css";
import { Footer } from "@/components/layout/Footer";

globalStyles();

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--inter",
});

const ppHatton = localFont({
  src: [
    {
      path: "../fonts/pp-hatton/PP Hatton Ultralight 200.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/pp-hatton/PP Hatton Medium 500.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/pp-hatton/PP Hatton Bold 700.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--pp-hatton",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${ppHatton.variable}`}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
