import React from "react";
import Container from "../common/Container";

const BlogBanner = () => {
  return (
    <div className="bg-[#9DCCFF]/20 py-10 md:py-14 lg:py-17.5">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              By Themadbrains in{" "}
              <span className="text-bgColor font-bold">inspiration</span>
            </p>

            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[44px] text-textSecondaryColor my-4 md:my-5 leading-tight">
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl text-textPrimaryColor leading-[180%] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.
            </p>

            <button className="btn font-bold">Start learning now</button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/blog/blogBanner.png"
              alt="blogBanner"
              className="w-full max-w-sm md:max-w-md lg:max-w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogBanner;
