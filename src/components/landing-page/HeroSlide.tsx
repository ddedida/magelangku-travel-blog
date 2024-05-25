"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import SlideButton from "./SlideButton";

import "swiper/css";

export default function App() {
  return (
    <div className="relative w-full">
      <Swiper loop={true}>
        <SwiperSlide>
          <Slide
            image="/images/borobudur.png"
            title="Borobudur Temple"
            description="Borobudur Temple is the largest Buddhist historical site in the world, located in Magelang, Central Java, Indonesia. Built in the 9th century, the temple offers a spiritual experience and stunning architectural beauty, with reliefs and stupas depicting Buddhism and daily life in the past."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="/images/liong-hok-bio.png"
            title="Liong Hok Bio Temple"
            description="The Liong Hok Bio Temple is known for its beautiful traditional Chinese architecture and stunning details. From the outside, the temple often looks majestic with its distinctive Chinese-style roof and decorations rich in auspicious and religious symbols."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="/images/merbabu.png"
            title="Merbabu Mountain"
            description="Mount Merbabu is known for its spectacular views and stunning natural beauty. The mountain offers a variety of challenging hiking routes, ranging from those suitable for beginners to more extreme ones for experienced climbers."
          />
        </SwiperSlide>
        <SlideButton />
      </Swiper>
    </div>
  );
}
