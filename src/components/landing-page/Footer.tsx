/* eslint-disable @next/next/no-img-element */

import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-12 flex w-full flex-col gap-y-8 rounded-2xl bg-bw-light p-10">
      <div className="flex w-full justify-between">
        <div className="flex h-fit w-full flex-col gap-y-3">
          <p className="font-cinaGeo text-2xl font-bold text-bw-primary">
            magelangKu.
          </p>
          <p className="font-cinaGeo text-base font-light text-bw-primary">
            A place where nature and culture unite
          </p>
        </div>

        <div className="flex gap-x-4">
          <div className="flex w-[200px] flex-col gap-y-4">
            <p className="font-cinaGeo text-base font-medium text-bw-primary">
              About Us
            </p>
            <div className="flex flex-col gap-y-3">
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Our Guides
              </p>
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Blog
              </p>
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Contact
              </p>
            </div>
          </div>

          <div className="flex w-[200px] flex-col gap-y-4">
            <p className="font-cinaGeo text-base font-medium text-bw-primary">
              FAQ
            </p>
            <div className="flex flex-col gap-y-3">
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Personal Trip
              </p>
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Group Trip
              </p>
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Tour Payment
              </p>
            </div>
          </div>

          <div className="flex w-[200px] flex-col gap-y-4">
            <p className="font-cinaGeo text-base font-medium text-bw-primary">
              Further Information
            </p>
            <div className="flex flex-col gap-y-3">
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Terms of Use
              </p>
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Health & Safety
              </p>
              <p className="font-cinaGeo text-sm font-light text-bw-primary">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-bw-inline"></div>

      <div className="flex w-full justify-between">
        <p>Created by Dewangga Dika</p>
        <div className="flex gap-x-4">
          <Link href={"https://www.instagram.com/dewangga3d/"} target="_blank">
            <div className="h-fit w-fit rounded-full bg-bw-primary p-2 transition hover:scale-110">
              <img src="/icons/instagram.svg" className="fill-white" alt="" />
            </div>
          </Link>
          <Link href={"https://github.com/ddedida"} target="_blank">
            <div className="h-fit w-fit rounded-full bg-bw-primary p-2 transition hover:scale-110">
              <img src="/icons/github.svg" className="fill-white" alt="" />
            </div>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/dewangga3d/"}
            target="_blank"
          >
            <div className="h-fit w-fit rounded-full bg-bw-primary p-2 transition hover:scale-110">
              <img src="/icons/linkedin.svg" className="fill-white" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
