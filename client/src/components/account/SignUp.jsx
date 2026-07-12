"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/account/register.png"
            alt="signup"
            className="w-full max-w-md lg:max-w-full h-auto"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto">
          <p className="text-base text-center">Welcome to lorem..!</p>

          {/* Toggle */}
          <div className="bg-bgColor/60 flex rounded-full p-1 my-6">
            <Link
              href="/login"
              className="w-1/2 py-2 rounded-full text-center text-sm md:text-base font-medium text-white transition-all duration-300"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="w-1/2 py-2 rounded-full text-center text-sm md:text-base font-medium bg-bgColor text-white shadow-md transition-all duration-300"
            >
              Register
            </Link>
          </div>

          <p className="text-textPrimaryColor text-sm md:text-base text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          {/* Username */}
          <div className="flex flex-col gap-3 mt-8">
            <label htmlFor="name">Username</label>

            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="border border-bgColor outline-none py-3 md:py-4 px-5 md:px-6 rounded-full w-full"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="email">User Email</label>

            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="border border-bgColor outline-none py-3 md:py-4 px-5 md:px-6 rounded-full w-full"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-3 mt-6">
            <label htmlFor="password">Your Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                className="border border-bgColor outline-none py-3 md:py-4 px-5 md:px-6 rounded-full w-full pr-14"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? (
                  <IoIosEye size={22} />
                ) : (
                  <IoIosEyeOff size={22} />
                )}
              </button>
            </div>
          </div>

          <button className="w-full py-3 md:py-4 bg-bgColor rounded-full text-white mt-8 cursor-pointer hover:opacity-90 transition">
            Register
          </button>

          <p className="text-center mt-5 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-bgColor font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
