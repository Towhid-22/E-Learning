import React from "react";
import Container from "../common/Container";
import Link from "next/link";

const Totc = () => {
  return (
    <Container>
      <div className="py-12 lg:py-20">
        <h3 className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-center mb-5">
          What is <span className="text-otherTextColor">TOTC?</span>
        </h3>

        <p className="text-base md:text-xl lg:text-2xl leading-[180%] text-textPrimaryColor text-center mb-10 lg:mb-19 max-w-5xl mx-auto">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 xl:gap-25 mb-16 lg:mb-25">
          <div className="bgImageOne bg-cover bg-center w-full max-w-150 h-72 md:h-96 lg:w-150 lg:h-100 rounded-[20px] flex flex-col items-center justify-center text-center px-4">
            <h4 className="text-2xl lg:text-[32px] font-semibold text-white mb-4">
              FOR INSTRUCTORS
            </h4>

            <button className="border border-white rounded-full px-6 py-3 text-lg lg:text-[22px] font-medium text-white hover:bg-[#23BDEE]/90 transition-all duration-300 cursor-pointer">
              Start a class today
            </button>
          </div>

          <div className="bgImageTwo bg-cover bg-center w-full max-w-150 h-72 md:h-96 lg:w-150 lg:h-100 rounded-[20px] flex flex-col items-center justify-center text-center px-4">
            <h4 className="text-2xl lg:text-[32px] font-semibold text-white mb-4">
              FOR STUDENTS
            </h4>

            <button className="border border-white rounded-full px-6 py-3 text-lg lg:text-[22px] font-medium text-white hover:bg-[#23BDEE]/90 transition-all duration-300 cursor-pointer">
              Enter access code
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 justify-between">
          <div className="w-full lg:max-w-xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[160%] mb-6">
              Everything you can do in a physical classroom,
              <span className="text-otherTextColor"> you can do with TOTC</span>
            </p>

            <p className="text-base md:text-lg lg:text-2xl leading-[180%] text-textPrimaryColor mb-6">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>

            <Link href="#" className="underline text-lg">
              Learn More
            </Link>
          </div>

          <img
            src="/images/meeting.png"
            alt="meeting"
            className="w-full max-w-md md:max-w-xl lg:max-w-176.75"
          />
        </div>
      </div>
    </Container>
  );
};

export default Totc;
