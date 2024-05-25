/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useSwiper } from "swiper/react";

const SlideButton = () => {
  const swiper = useSwiper();

  const handleSlideNext = () => {
    swiper.slideNext();
  };

  const handleSlidePrev = () => {
    swiper.slidePrev();
  };

  return (
    <div className="absolute bottom-14 right-14 z-20 flex gap-x-6">
      <button
        className="h-fit w-fit rounded-full border border-transparent bg-transparent p-2 transition hover:border-white hover:bg-white hover:bg-opacity-25"
        onClick={handleSlidePrev}
      >
        <img src="/icons/arrow-left-white.svg" alt="Previous Slide" />
      </button>
      <button
        className="h-fit w-fit rounded-full border border-transparent bg-transparent p-2 transition hover:border-white hover:bg-white hover:bg-opacity-25"
        onClick={handleSlideNext}
      >
        <img src="/icons/arrow-right-white.svg" alt="Next Slide" />
      </button>
    </div>
  );
};

export default SlideButton;
