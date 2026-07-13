import React from "react";
import Container from "../common/Container";

const teachers = [
  {
    id: 1,
    image: "/teacher.png",
    title: "Become a Teacher",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    btn: "Apply as Teacher",
  },
  {
    id: 2,
    image: "/teacher.png",
    title: "Become a Course Creator",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    btn: "Apply as Creator",
  },
];

const Teacher = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {teachers.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-xl object-cover"
              />

              <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-TextColor">
                {item.title}
              </h3>

              <p className="mt-4 text-base md:text-lg leading-8 text-textPrimaryColor">
                {item.description}
              </p>

              <button className="btn mt-8 w-full sm:w-auto">{item.btn}</button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Teacher;
