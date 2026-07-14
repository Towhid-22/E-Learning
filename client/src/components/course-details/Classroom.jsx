import React from "react";
import Container from "../common/Container";
import Link from "next/link";

const Classroom = () => {
  const offers = [
    {
      id: 1,
      discount: "50%",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC’s school management software helps traditional and online schools manage scheduling.",
    },
    {
      id: 2,
      discount: "50%",
      title: "FOR STUDENTS",
      description:
        "TOTC’s school management software helps traditional and online schools manage scheduling.",
    },
    {
      id: 3,
      discount: "50%",
      title: "FOR TEACHERS",
      description:
        "TOTC’s school management software helps traditional and online schools manage scheduling.",
    },
  ];

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <h3 className="font-medium text-3xl md:text-4xl lg:text-5xl leading-[150%] text-textSecondaryColor">
              Everything you can do in a physical classroom,
              <span className="text-otherTextColor"> you can do with TOTC</span>
            </h3>

            <p className="mt-6 text-base md:text-lg lg:text-xl leading-[180%] text-textPrimaryColor">
              TOTC’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>

            <Link
              href="#"
              className="inline-block mt-6 underline text-lg md:text-xl text-textPrimaryColor"
            >
              Learn more
            </Link>
          </div>

          {/* Right */}
          <div>
            <img
              src="/course/classroom.png"
              alt="Classroom"
              className="w-full max-w-162.5 mx-auto"
            />
          </div>
        </div>

        {/* Offer Section */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <h3 className="font-semibold text-2xl md:text-3xl">
              Top Education offers and deals are listed here
            </h3>

            <Link href="#" className="text-bgColor font-bold text-lg">
              See all
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {offers.map((item) => (
              <div
                key={item.id}
                className="education rounded-3xl p-6 md:p-8 text-white min-h-95 md:min-h-107.5flex flex-col justify-end"
              >
                <button className="bg-red-500/70 w-fit px-6 py-3 rounded-xl font-bold text-xl">
                  {item.discount}
                </button>

                <h3 className="mt-6 text-2xl md:text-3xl font-semibold uppercase">
                  {item.title}
                </h3>

                <p className="mt-6 text-base md:text-lg leading-8">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Classroom;
