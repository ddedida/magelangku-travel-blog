/* eslint-disable @next/next/no-img-element */

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import HeroSlide from "@/components/landing-page/HeroSlide";
import About from "@/components/landing-page/About";

const Home: React.FC = () => {
  return (
    <main className="h-[200vh] w-[1280px]">
      <Navbar />
      <div className="flex w-full flex-col gap-y-20">
        <div className="w-full overflow-hidden rounded-2xl">
          <HeroSlide />
        </div>
        <About />
      </div>
    </main>
  );
};

export default Home;
