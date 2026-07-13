import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-TextColor py-10 lg:py-16">
      <Container>
        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-15">
          <img src="/logo.png" alt="Logo" className="w-auto" />

          <div className="hidden sm:block border-l border-[#626381] h-16"></div>

          <p className="font-semibold text-lg sm:text-xl lg:text-[22px] tracking-[2%] text-white text-center sm:text-left">
            Virtual Class <br className="sm:hidden" />
            for Zoom
          </p>
        </div>

        {/* Newsletter */}
        <p className="font-medium text-xl sm:text-2xl lg:text-[26px] tracking-[4%] text-[#B2B3CF] text-center mt-12 lg:mt-24">
          Subscribe to get our Newsletter
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-87.5 lg:w-105 border border-[#83839A] py-3 px-5 rounded-full placeholder:text-[#83839A] text-base lg:text-xl tracking-[4%] outline-none text-white bg-transparent"
          />

          <button className="w-full sm:w-auto bg-bgColor py-3 px-8 rounded-full text-white text-lg lg:text-[22px] font-medium cursor-pointer">
            Subscribe
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-12 lg:mt-24 text-center">
          <p className="text-lg lg:text-[22px] tracking-[4%] text-[#B2B3CF]">
            Careers
          </p>

          <div className="hidden sm:block border-l border-[#626381] h-5"></div>

          <p className="text-lg lg:text-[22px] tracking-[4%] text-[#B2B3CF]">
            Privacy Policy
          </p>

          <div className="hidden sm:block border-l border-[#626381] h-5"></div>

          <p className="text-lg lg:text-[22px] tracking-[4%] text-[#B2B3CF]">
            Terms & Conditions
          </p>
        </div>

        {/* Copyright */}
        <p className="text-base sm:text-lg lg:text-[22px] tracking-[4%] text-[#B2B3CF] text-center mt-6">
          © 2021 Class Technologies Inc.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
