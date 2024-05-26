/* eslint-disable @next/next/no-img-element */

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import HeroSlide from "@/components/landing-page/HeroSlide";
import About from "@/components/landing-page/About";
import TopDestination from "@/components/landing-page/TopDestination";
import OtherRecommendation from "@/components/landing-page/OtherRecommendation";
import Footer from "@/components/landing-page/Footer";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div className="flex h-full w-[1280px] flex-col gap-y-20">
        <div className="w-full overflow-hidden rounded-2xl">
          <HeroSlide />
        </div>
        <About />
        <TopDestination />
        <OtherRecommendation />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
