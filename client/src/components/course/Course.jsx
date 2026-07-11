import React from "react";
import Container from "../common/Container";
import { FiArrowRight } from "react-icons/fi";

const courseCategories = [
  {
    id: 1,
    title: "Lorem Ipsum",
    icon: "/course/facilisis.png",
    image: "/course/categoryOne.png",
  },
  {
    id: 2,
    title: "Quisque a Consequat",
    icon: "/course/quisque.png",
    image: "/course/categoryTwo.png",
  },
  {
    id: 3,
    title: "Aenean Facilisis",
    icon: "/course/degree.png",
    image: "/course/categoryThree.png",
  },
];

const Course = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <Container>
        <div className="text-center md:text-left">
          <h3 className="font-roboto font-bold text-3xl md:text-4xl lg:text-[40px] text-black/87 mb-4 md:mb-6">
            Explore Course
          </h3>

          <p className="font-roboto font-medium text-base md:text-xl lg:text-2xl text-black/54">
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </div>

        {courseCategories.map((course) => (
          <div
            key={course.id}
            className="mt-12 md:mt-16 lg:mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 md:mb-6">
              <h3 className="flex items-center gap-3 md:gap-4 font-roboto font-bold text-xl md:text-2xl lg:text-[28px] text-black/87">
                <img
                  src={course.icon}
                  alt={course.title}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
                {course.title}
              </h3>

              <button className="flex items-center gap-2 md:gap-4 font-roboto font-medium text-base md:text-lg lg:text-2xl text-[#00BCD4] cursor-pointer">
                SEE ALL
                <FiArrowRight className="text-xl md:text-2xl lg:text-[32px]" />
              </button>
            </div>

            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Course;