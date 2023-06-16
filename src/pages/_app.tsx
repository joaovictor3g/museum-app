import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import { globalStyles } from "@/styles/global";
import { Header } from "@/components/layout";

globalStyles();

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
