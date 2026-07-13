import React from "react";
import Container from "@/components/common/Container";

const Feature = () => {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <div>
          {/* Heading */}
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-[160%] text-center mb-5">
            Our <span className="text-otherTextColor">Features</span>
          </h2>
          <p className="text-base md:text-xl lg:text-2xl leading-[180%] text-textPrimaryColor text-center max-w-4xl mx-auto">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-32 my-16 lg:my-24">
            <img
              src="/features/feature.png"
              alt="Feature"
              className="w-full max-w-md md:max-w-xl lg:max-w-4xl"
            />
            <div className="w-full lg:max-w-xl">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[160%] text-textSecondaryColor mb-8 lg:mb-12">
                A <span className="text-otherTextColor">user interface</span>{" "}
                designed for the classroom
              </h2>
              <div className="flex items-start gap-5 lg:gap-7 mb-6">
                <img src="/features/group2.png" alt="group" />
                <p className="text-base md:text-lg lg:text-[22px] leading-[180%]">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="flex items-start gap-5 lg:gap-7 mb-6">
                <img src="/features/group.png" alt="group" />
                <p className="text-base md:text-lg lg:text-[22px] leading-[180%]">
                  TA’s and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="flex items-start gap-5 lg:gap-7">
                <img src="/features/user.png" alt="group" />
                <p className="text-base md:text-lg lg:text-[22px] leading-[180%]">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-32 my-16 lg:my-24">
            <div className="w-full lg:max-w-xl">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[160%] text-textSecondaryColor mb-8 lg:mb-12">
                <span className="text-otherTextColor">Tools </span>
                For Teachers <br /> And Learners
              </h2>

              <p className="text-base md:text-lg lg:text-[22px] leading-[180%] text-textPrimaryColor">
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <img
              src="/features/feature1.png"
              alt="Feature"
              className="w-full max-w-md md:max-w-xl lg:max-w-4xl"
            />
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-32 my-16 lg:my-24">
            <img
              src="/features/feature2.png"
              alt="Feature"
              className="w-full max-w-md md:max-w-xl lg:max-w-4xl"
            />

            <div className="w-full lg:max-w-xl">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[160%] text-textSecondaryColor mb-8 lg:mb-12">
                Assessments, <br />
                <span className="text-otherTextColor">Quizzes,</span> Tests
              </h2>

              <p className="text-base md:text-lg lg:text-[22px] leading-[180%] text-textPrimaryColor">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-32 my-16 lg:my-24">
            <div className="w-full lg:max-w-xl">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[160%] text-textSecondaryColor mb-8 lg:mb-12">
                <span className="text-otherTextColor">Class Management</span>
                <br />
                Tools for Educators
              </h2>
              <p className="text-base md:text-lg lg:text-[22px] leading-[180%] text-textPrimaryColor">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <img
              src="/features/feature3.png"
              alt="Feature"
              className="w-full max-w-md md:max-w-xl lg:max-w-4xl"
            />
          </div>
          {/* Feature 5 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 xl:gap-32 my-16 lg:my-24">
            <img
              src="/features/freature4.png"
              alt="Feature"
              className="w-full max-w-md md:max-w-xl lg:max-w-4xl"
            />
            <div className="w-full lg:max-w-xl">
              <h2 className="font-semibold text-3xl md:text-4xl lg:text-[40px] leading-[160%] text-textSecondaryColor mb-8 lg:mb-12">
                One-on-One <br />
                <span className="text-otherTextColor">Discussions</span>
              </h2>
              <p className="text-base md:text-lg lg:text-[22px] leading-[180%] text-textPrimaryColor">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="border border-otherTextColor text-otherTextColor px-8 py-3 rounded-full hover:bg-otherTextColor hover:text-white transition-all duration-300 cursor-pointer">
            See more features
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Feature;
