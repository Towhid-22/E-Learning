import React from "react";
import Container from "../common/Container";
import Link from "next/link";
import { IoPlaySharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-bgColor py-12 lg:py-20 overflow-hidden">
      <Container>
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[54px]">
              <span className="text-accetOrange">Studying</span> Online is now
              much easier
            </h1>

            <p className="mt-6 mb-10 font-nunito_sans text-base leading-8 text-white sm:text-lg lg:text-2xl">
              TOTC is an interesting platform that will teach you in a more
              interactive way.
            </p>

            <div className="flex flex-col items-center gap-5 sm:flex-row lg:justify-start justify-center">
              <Link href="#">
                <button className="rounded-full bg-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-bgColor">
                  Join for free
                </button>
              </Link>

              <Link href="#" className="flex items-center gap-4 text-white">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-[#23BDEE] shadow-lg">
                  <IoPlaySharp />
                </button>

                <span className="font-medium">Watch how it works</span>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <img
              src="/banner/banner1.png"
              alt="banner one"
              className="w-65 sm:w-87.5 md:w-112.5 lg:w-137.5"
            />

            <img
              src="/banner/banner2.png"
              alt="banner two"
              className="absolute top-1/2 left-1/2 w-30 -translate-x-1/2 -translate-y-1/2 sm:w-40 md:w-55 lg:w-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
