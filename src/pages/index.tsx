import Head from "next/head";
import { Blur } from "@/components/styled";
import { HeroSection, SearchSection } from "@/components/pages/Home";
import { WorksOfArtSection } from "@/components/pages/Home/WorksOfArtSection";
import { SearchProvider } from "@/contexts/SearchContext";

export default function Home() {
  return (
    <>
      <Head>
        <title>Museum App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <HeroSection />
        <SearchProvider>
          <SearchSection />
          <WorksOfArtSection />
        </SearchProvider>
        <Blur />
      </div>
    </>
  );
}
