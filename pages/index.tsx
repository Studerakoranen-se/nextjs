import Head from "next/head";
import Image from "next/image";
import AlQuran from "../components/AlQuran";
import BottomPage from "../components/BottomPage";
import CopyrightSection from "../components/CopyrightSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import RecentSection from "../components/RecentSection";
import SearchSection from "../components/SearchSection";
import TabSection from "../components/TabSection";
import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-inter bg-color1">
        <TopBar />
        <NavBar />
        <HeroSection />
        <AlQuran />
        <SearchSection />
        <RecentSection />
        <TabSection />
        <BottomPage />
        <Footer />
        <CopyrightSection />
      </main>
    </>
  );
}
