import React from "react";
import Link from "next/link";
import Container from "../common/Container";
import { CiGrid41 } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";

const YourChoice = () => {
  const articles = [
    {
      id: 1,
      image: "/blog/marketing1.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      userImage: "/blog/user.png",
      userName: "Lina",
      discountPrice: 100,
      price: 80,
    },
    {
      id: 2,
      image: "/blog/marketing2.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      userImage: "/blog/user.png",
      userName: "Lina",
      discountPrice: 100,
      price: 80,
    },
    {
      id: 3,
      image: "/blog/marketing3.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      userImage: "/blog/user.png",
      userName: "Lina",
      discountPrice: 100,
      price: 80,
    },
    {
      id: 4,
      image: "/blog/marketing4.png",
      title: "AWS Certified solutions Architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      userImage: "/blog/user.png",
      userName: "Lina",
      discountPrice: 100,
      price: 80,
    },
  ];
  return (
    <div className="py-22.5">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="font-medium text-2xl md:text-3xl tracking-[2%]">
            Get choice of your course
          </p>

          <Link href="#" className="text-bgColor font-black text-lg md:text-xl">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="shadow-md p-5 rounded-[20px] bg-white h-full flex flex-col"
            >
              <img
                src={item.image}
                alt="marketing"
                className="w-full h-auto rounded-2xl"
              />

              <div className="flex items-center justify-between mt-5">
                <p className="text-textPrimaryColor font-medium text-xs sm:text-sm leading-[180%] tracking-[2%] flex items-center gap-2">
                  <CiGrid41 className="text-[#D9D9D9] text-lg" />
                  Design
                </p>

                <p className="text-textPrimaryColor font-medium text-xs sm:text-sm leading-[180%] tracking-[2%] flex items-center gap-2">
                  <MdAccessTime className="text-[#D9D9D9] text-lg" />3 Months
                </p>
              </div>

              <Link href="">
                <h3 className="my-4 md:my-5 font-medium text-xl md:text-2xl text-TextColor">
                  {item.title}
                </h3>
              </Link>

              <p className="text-textPrimaryColor leading-[180%] tracking-[2%] text-base md:text-[18px] mb-4 flex-1">
                {item.description}
              </p>

              <div className="flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={item.userImage}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />

                  <p className="font-medium text-sm md:text-[18px] tracking-[2%]">
                    {item.userName}
                  </p>
                </div>

                <p className="text-bgColor font-bold text-lg md:text-2xl tracking-[2%] whitespace-nowrap">
                  <del className="font-light italic text-sm md:text-[18px] text-black/50 mr-2">
                    ${item.discountPrice}
                  </del>
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-TextColor px-6 py-12 text-center text-white md:px-10 lg:px-20 my-22.5 lg:py-20">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Online coaching lessons for remote learning.
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 md:text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <button className="btn mt-10">Start learning now</button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="font-medium text-2xl md:text-3xl tracking-[2%]">
            The course in personal development
          </p>
          <Link href="#" className="text-bgColor font-black text-lg md:text-xl">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="shadow-md p-5 rounded-[20px] bg-white h-full flex flex-col"
            >
              <img
                src={item.image}
                alt="marketing"
                className="w-full h-auto rounded-2xl"
              />
              <div className="flex items-center justify-between mt-5">
                <p className="text-textPrimaryColor font-medium text-xs sm:text-sm leading-[180%] tracking-[2%] flex items-center gap-2">
                  <CiGrid41 className="text-[#D9D9D9] text-lg" />
                  Design
                </p>
                <p className="text-textPrimaryColor font-medium text-xs sm:text-sm leading-[180%] tracking-[2%] flex items-center gap-2">
                  <MdAccessTime className="text-[#D9D9D9] text-lg" />3 Months
                </p>
              </div>
              <Link href="">
                <h3 className="my-4 md:my-5 font-medium text-xl md:text-2xl text-TextColor">
                  {item.title}
                </h3>
              </Link>
              <p className="text-textPrimaryColor leading-[180%] tracking-[2%] text-base md:text-[18px] mb-4 flex-1">
                {item.description}
              </p>
              <div className="flex items-center justify-between gap-3 mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={item.userImage}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />

                  <p className="font-medium text-sm md:text-[18px] tracking-[2%]">
                    {item.userName}
                  </p>
                </div>

                <p className="text-bgColor font-bold text-lg md:text-2xl tracking-[2%] whitespace-nowrap">
                  <del className="font-light italic text-sm md:text-[18px] text-black/50 mr-2">
                    ${item.discountPrice}
                  </del>
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default YourChoice;
