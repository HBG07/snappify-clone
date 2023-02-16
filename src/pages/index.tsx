import Head from "next/head";
import { Inter } from "@next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Welcome from "@/components/welcome/Welcome";
import Options from "@/components/feature/Options";
import Hero from "@/components/feature/Hero";
import CodeStyles from "@/components/feature/CodeStyles";
import Pricing from "@/components/feature/Pricing";
import StayUpdate from "@/components/feature/StayUpdate";
import Mission from "@/components/feature/Mission";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Snappify Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Welcome/>
      <Options/>
      <Hero/>
      <CodeStyles/>
      <Pricing/>
      <StayUpdate/>
      <Mission/>
      <Footer/>
    </>
  );
}
