import React from "react";

const About = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-[360px]">
        <p className="font-cinaGeo text-[40px] font-medium leading-[48px] text-bw-primary">
          Blog about travel destination in Magelang
        </p>
      </div>
      <div className="w-[720px]">
        <p className="font-cinaGeo text-xl font-light leading-[28px] text-bw-primary">
          Magelang, an enchanting city flanked by the alluring beauty of five
          mountains, offers diverse and mesmerizing tourist destinations. With
          its soothing ambience and rich cultural and historical heritage, the
          city provides an enthralling experience for visitors.
        </p>
      </div>
    </div>
  );
};

export default About;
