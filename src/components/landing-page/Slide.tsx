/* eslint-disable @next/next/no-img-element */

import React from "react";

export type SlideProps = {
  image: string;
  title: string;
  description: string;
};

const Slide: React.FC<SlideProps> = ({ image, title, description }) => {
  return (
    <div className="relative h-[640px] w-full">
      <img className="absolute h-full" src={image} alt="" />
      <img className="absolute h-full" src="/images/rectangle.png" alt="" />

      <div className="absolute bottom-14 left-14 flex h-fit w-[640px] flex-col gap-y-10">
        <div className="flex flex-col gap-y-6">
          <h1 className="font-cinaGeo text-[56px] font-bold text-white">
            {title}
          </h1>
          <p className="font-cinaGeo text-base font-light text-white">
            {description}
          </p>
        </div>
        <button className="flex h-fit w-fit items-center justify-center rounded-full bg-white px-6 py-3">
          <p className="font-cinaGeo text-base font-semibold text-bw-primary">
            Read More
          </p>
        </button>
      </div>
    </div>
  );
};

export default Slide;
