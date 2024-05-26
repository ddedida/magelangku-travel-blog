/* eslint-disable @next/next/no-img-element */

import React from "react";
import OtherRecommendationTab from "./OtherRecommendationTab";

const OtherRecommendation = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-14">
      <h3 className="font-cinaGeo text-[40px] font-semibold text-bw-primary">
        Other Recommendations
      </h3>
      <div className="flex h-fit w-full justify-between">
        <OtherRecommendationTab
          image="/images/chicken-church.png"
          title="Chicken Church"
        />
        <OtherRecommendationTab
          image="/images/nepal-van-java.png"
          title="Nepal Van Java"
        />
        <OtherRecommendationTab
          image="/images/selancur-highland.png"
          title="Selancur Highland"
        />
        <OtherRecommendationTab
          image="/images/silawe-waterfall.png"
          title="Silawe Waterfall"
        />
        <OtherRecommendationTab
          image="/images/punthuk-setumbu.png"
          title="Punthuk Setumbu"
        />
      </div>
    </div>
  );
};

export default OtherRecommendation;
