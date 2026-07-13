import React from "react";
import Container from "../../common/Container";
import Link from "next/link";

const newsList = [
  {
    id: 1,
    image: "/news/class.png",
    badge: "PRESS RELEASE",
    title:
      "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
    description: "Class Technologies Inc., the company that created Class,...",
  },
  {
    id: 2,
    image: "/news/zoom.png",
    badge: "NEWS",
    title:
      "Zoom’s earliest investors are betting millions on a better Zoom for schools",
    description:
      "Zoom was never created to be a consumer product. Nonetheless, the...",
  },
  {
    id: 3,
    image: "/news/former.png",
    badge: "NEWS",
    title:
      "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
    description:
      "This year, investors have reaped big financial returns from betting on Zoom...",
  },
];

const LatesNews = () => {
  return (
    <Container>
      <h2 className="font-nunito_sans font-bold text-3xl lg:text-4xl leading-[180%] text-[#2F327D] text-center">
        Lastest News and Resources
      </h2>
      <p className="font-nunito_sans text-textPrimaryColor leading-[180%] text-lg lg:text-2xl mt-5 text-center">
        See the developments that have occurred to TOTC in the world
      </p>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-30 mt-12 lg:mt-25 mb-25">
        {/* Left */}
        <div>
          <img src="/news/news.png" alt="news" />
          <p className="font-medium text-[20px] leading-[180%] bg-bgColor inline-block px-9 py-1 rounded-full text-white mt-10 mb-5">
            NEWS
          </p>
          <h4 className="font-medium text-[22px] lg:text-[26px] leading-[180%] text-TextColor mb-5">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </h4>
          <p className="text-lg lg:text-xl leading-[180%] text-textPrimaryColor tracking-[2%]">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <Link
            href="#"
            className="underline text-lg lg:text-xl leading-[180%] text-textPrimaryColor"
          >
            Read more
          </Link>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-12">
          {newsList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start gap-6 lg:gap-10"
            >
              <div className="relative shrink-0">
                <img src={item.image} alt={item.title} />
                <Link
                  href="#"
                  className="absolute right-5 bottom-5 text-[18px] text-white bg-bgColor py-1.5 px-5 rounded-full"
                >
                  {item.badge}
                </Link>
              </div>
              <div>
                <p className="font-medium text-xl lg:text-[22px] leading-[180%] text-TextColor mb-4">
                  {item.title}
                </p>
                <p className="text-lg lg:text-xl text-textPrimaryColor leading-[180%]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LatesNews;
