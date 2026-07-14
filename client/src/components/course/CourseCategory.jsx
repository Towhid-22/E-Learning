import React from "react";
import Container from "../common/Container";

const CourseCategory = () => {
  const category = [
    {
      id: 1,
      icon: "/course/design.png",
      title: "Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 2,
      icon: "/course/development.png",
      title: "Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 3,
      icon: "/course/developmentTwo.png",
      title: "Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 4,
      icon: "/course/business.png",
      title: "Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 5,
      icon: "/course/marketing.png",
      title: "Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 6,
      icon: "/course/photography.png",
      title: "Photography",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 7,
      icon: "/course/acting.png",
      title: "Acting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
    {
      id: 8,
      icon: "/course/business.png",
      title: "Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <Container>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-TextColor text-center lg:text-left leading-snug">
          Choice favourite course from top category
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
          {category.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white shadow-lg p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-18 h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 bg-bgColor/30 rounded-lg flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>

              <h4 className="mt-5 mb-3 text-xl md:text-2xl font-semibold text-TextColor">
                {item.title}
              </h4>

              <p className="text-sm md:text-base text-textPrimaryColor leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CourseCategory;