/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export type OtherRecommendationTabProps = {
  image: string;
  title: string;
};

const OtherRecommendationTab: React.FC<OtherRecommendationTabProps> = ({
  image,
  title,
}) => {
  return (
    <div className="h-fit w-fit overflow-hidden rounded-lg shadow-md transition hover:scale-105">
      <div className="h-[300px] w-[236px] overflow-hidden">
        <img className="h-full" src={image} alt="" />
      </div>
      <div className="h-[90px] w-[236px] bg-white p-4">
        <div className="flex w-full items-center justify-between">
          <p className="text-start font-cinaGeo text-[24px] font-normal leading-8 text-bw-primary">
            {title}
          </p>
          <div className="h-fit w-fit rounded-full bg-bw-primary p-1">
            <img src="/icons/arrow-right-white.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherRecommendationTab;
