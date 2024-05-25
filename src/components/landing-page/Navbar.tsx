import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-fit w-full bg-white py-5">
      <div className="flex w-full items-center justify-between">
        <p className="font-cinaGeo text-[32px] font-bold text-bw-primary">
          magelangKu
        </p>
        <div className="flex gap-x-10">
          <Link
            href="#"
            className="font-cinaGeo text-xl font-semibold text-bw-primary"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-cinaGeo text-xl font-normal text-bw-primary"
          >
            About
          </Link>
          <Link
            href="#"
            className="font-cinaGeo text-xl font-normal text-bw-primary"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
