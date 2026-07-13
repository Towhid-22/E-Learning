import React from "react";
import Container from "../../common/Container";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { GoStarFill } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";

const Testimonial = () => {
  return (
    <section className="py-12 lg:py-20 overflow-hidden mb-40">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-45">
          {/* Left Content */}
          <div className="w-full lg:w-[42%]">
            <h2 className="inline-flex items-center gap-3 md:gap-5 uppercase text-[#525596] text-sm md:text-lg lg:text-xl tracking-[20%] before:content-[''] before:w-12 md:before:w-16 lg:before:w-20 before:h-px before:bg-[#525596]">
              Testimonial
            </h2>

            <h2 className="font-nunito_sans font-bold text-4xl md:text-5xl lg:text-6xl text-[#2F327D] mt-6 lg:mt-8 mb-6 lg:mb-7.5">
              What They Say?
            </h2>

            <p className="text-textPrimaryColor leading-[160%] tracking-[2%] text-base md:text-lg mb-6">
              TOTC has got more than 100k positive ratings from our users around
              the world.
            </p>

            <p className="text-textPrimaryColor leading-[160%] tracking-[2%] text-base md:text-lg mb-6">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>

            <p className="text-textPrimaryColor leading-[160%] tracking-[2%] text-base md:text-lg mb-10 lg:mb-12">
              Are you too? Please give your assessment
            </p>

            <button className="text-[#49BBBD] flex items-center gap-5 lg:gap-10 border border-[#49BBBD] px-5 lg:px-6 py-3 rounded-full cursor-pointer">
              Write your assessment
              <HiMiniArrowLongRight size={25} />
            </button>
          </div>

          {/* Right Content */}
          <div className="relative w-full lg:w-auto">
            <img
              src="/testimonial.png"
              alt="testimonial"
              className="w-full lg:w-auto"
            />

            {/* Review Card */}
            <div className="shadow-2xl py-6 md:py-8 lg:py-10 px-6 md:px-8 lg:px-10 border-l-14 bg-white border-[#F67766] w-full sm:max-w-170 lg:w-170 mt-6 sm:mt-0 static sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:-bottom-20 lg:left-17.25 lg:translate-x-0 lg:-bottom-30.25">
              <p className="border-l border-[#BDBDD1] pl-5 lg:pl-8 text-[#5F5F7E] tracking-[2%] leading-[180%] text-base md:text-lg lg:text-[22px]">
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. TOTC is exactly what our business has been lacking."
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-6 lg:mt-7.5">
                <h2 className="text-[#5f5f7e] font-nunito_sans font-semibold text-xl lg:text-2xl leading-[180%]">
                  Gloria Rose
                </h2>

                <div>
                  <div className="text-[#FBA333] flex gap-0.5">
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                  </div>

                  <p className="text-textPrimaryColor font-semibold font-nunito_sans text-sm md:text-base lg:text-[18px] leading-[180%] tracking-[2%]">
                    12 reviews at Yelp
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow Button */}
            <button className="absolute top-1/2 right-2 lg:right-0 -translate-y-1/2 lg:translate-x-1/2 bg-white flex items-center justify-center rounded-full size-12 md:size-16 lg:size-20 text-2xl lg:text-3xl text-[#1EA4CE] shadow-2xl">
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
