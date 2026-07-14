import React from "react";
import Container from "../common/Container";
import CourseReview from "./CourseReview";
import Link from "next/link";

import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import MarketingArticles from "../blog/MarketingArticles";

const CourseDetails = () => {
  const course = [
    {
      id: 1,
      image: "/course/money.png",
      details: "Money Back Guarantee",
    },
    {
      id: 2,
      image: "/course/access.png",
      details: "Access on all devices",
    },
    {
      id: 3,
      image: "/course/certificate.png",
      details: "Certification of completion",
    },
    {
      id: 4,
      image: "/course/modules.png",
      details: "32 Modules",
    },
  ];

  const mediaIcon = [
    { id: 1, icon: <FaTwitter /> },
    { id: 2, icon: <MdOutlineFacebook /> },
    { id: 3, icon: <FaYoutube /> },
    { id: 4, icon: <FaInstagram /> },
    { id: 5, icon: <PiTelegramLogoLight /> },
    { id: 6, icon: <MdOutlineWhatsapp /> },
  ];

  return (
    <section className="pb-16 lg:pb-24">
      {/* Banner */}
      <div>
        <img
          src="/course/courseDetailsBanner.png"
          alt="Course Banner"
          className="w-full h-55 sm:h-75 md:h-105 lg:h-130 object-cover"
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-10 mt-10">
          {/* Left Content */}
          <div>
            {/* Tabs */}
            <ul className="flex flex-wrap gap-3 md:gap-5 mb-10">
              {["Overview", "Curriculum", "Instructor", "Reviews"].map(
                (tab) => (
                  <li
                    key={tab}
                    className="px-5 md:px-8 py-3 md:py-4 rounded-xl bg-black/10 text-black/50 font-semibold text-sm md:text-lg cursor-pointer transition-all duration-300 hover:bg-bgColor hover:text-white"
                  >
                    {tab}
                  </li>
                ),
              )}
            </ul>

            <CourseReview />
          </div>

          {/* Sidebar */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 xl:sticky xl:top-8">
              <img
                src="/course/details.png"
                alt="Course"
                className="w-full rounded-xl"
              />

              {/* Price */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                  $49.65
                </h3>

                <del className="text-lg text-black/50">$99.99</del>

                <span className="text-lg font-semibold text-bgColor">
                  50% Off
                </span>
              </div>

              <p className="text-center text-bgColor font-semibold mt-5">
                11 hour left at this price
              </p>

              <button className="btn w-full mt-5 font-semibold">Buy Now</button>

              <hr className="my-7 text-gray-300" />

              {/* Includes */}
              <h3 className="text-xl md:text-2xl font-semibold mb-5">
                This Course Included
              </h3>

              <div className="space-y-4">
                {course.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.details}
                      className="w-5 h-5"
                    />

                    <p className="text-sm text-black/60">{item.details}</p>
                  </div>
                ))}
              </div>

              <hr className="my-7 text-gray-300" />

              {/* Training */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Training 5 or more people
              </h3>

              <p className="text-sm leading-7 text-textPrimaryColor">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively with Zoom to create an
                engaging learning experience.
              </p>

              <hr className="my-7 text-gray-300" />

              {/* Share */}
              <h3 className="text-xl md:text-2xl font-semibold mb-5">
                Share this course
              </h3>

              <div className="flex flex-wrap gap-3">
                {mediaIcon.map((item) => (
                  <Link href="#" key={item.id}>
                    <div className="w-10 h-10 rounded-full bg-bgColor text-white flex items-center justify-center hover:scale-110 transition">
                      {item.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CourseDetails;
