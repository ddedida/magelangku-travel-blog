/* eslint-disable @next/next/no-img-element */

import React from "react";

const TopDestination = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-14">
      <h3 className="font-cinaGeo text-[40px] font-semibold text-bw-primary">
        Top Destination
      </h3>
      <div className="flex w-full justify-between">
        <div className="h-fit w-fit overflow-hidden rounded-2xl shadow-md transition hover:scale-105">
          <div className="h-[526px] w-[620px]">
            <img src="/images/borobudur-small.png" alt="" />
          </div>
          <div className="h-fit w-full bg-white px-10 py-6">
            <div className="flex w-full justify-between">
              <p className="font-cinaGeo text-[32px] font-normal text-bw-primary">
                Borobudur Temple
              </p>
              <div className="h-fit w-fit rounded-full bg-bw-primary p-2">
                <img src="/icons/arrow-right-white.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="h-fit w-fit overflow-hidden rounded-2xl shadow-md transition hover:scale-105">
            <div className="h-[200px] w-[620px]">
              <img src="/images/liong-hok-bio-small.png" alt="" />
            </div>
            <div className="h-fit w-full bg-white px-10 py-6">
              <div className="flex w-full justify-between">
                <p className="font-cinaGeo text-[32px] font-normal text-bw-primary">
                  Liong Hok Bio Temple
                </p>
                <div className="h-fit w-fit rounded-full bg-bw-primary p-2">
                  <img src="/icons/arrow-right-white.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="h-fit w-fit overflow-hidden rounded-2xl shadow-md transition hover:scale-105">
            <div className="h-[200px] w-[620px]">
              <img src="/images/merbabu-small.png" alt="" />
            </div>
            <div className="h-fit w-full bg-white px-10 py-6">
              <div className="flex w-full justify-between">
                <p className="font-cinaGeo text-[32px] font-normal text-bw-primary">
                  Merbabu Mountain
                </p>
                <div className="h-fit w-fit rounded-full bg-bw-primary p-2">
                  <img src="/icons/arrow-right-white.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
