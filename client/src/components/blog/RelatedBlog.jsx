import React from "react";
import Container from "../common/Container";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { IoMdEye } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const blog = [
  {
    id: 1,
    image: "/blog/relatedBlog1.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    userImage: "/blog/user.png",
    userName: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    icon: <IoMdEye />,
    view: 251232,
  },
  {
    id: 3,
    image: "/blog/relatedBlog2.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    userImage: "/blog/user.png",
    userName: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    icon: <IoMdEye />,
    view: 251232,
  },
  {
    id: 2,
    image: "/blog/relatedBlog2.png",
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    userImage: "/blog/user.png",
    userName: "Lina",
    description:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    icon: <IoMdEye />,
    view: 251232,
  },
];
const RelatedBlog = () => {
  return (
    <div className="bg-[#9DCCFF]/20 py-25">
      <Container>
        <div className="flex items-center justify-between">
          <p className="font-medium text-3xl tracking-[2%]">Related Blog </p>
          <Link href={"#"} className="text-bgColor font-black text-xl">
            See all
          </Link>
        </div>
        <div>
          <Carousel className="w-full mt-10">
            <CarouselContent className="-ml-4">
              {blog.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-full sm:basis-1/2"
                >
                  <div className="bg-white p-5 md:p-8 rounded-[20px] h-full flex flex-col">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto rounded-[20px]"
                    />
                    <p className="font-medium text-xl md:text-[26px] leading-[160%] md:leading-[180%] text-TextColor mt-4">
                      <Link href={"#"}>{item.title}</Link>
                    </p>
                    <div className="flex items-center gap-3 md:gap-4 py-3">
                      <img
                        src={item.userImage}
                        alt="user"
                        className="w-10 h-10 md:w-auto md:h-auto"
                      />
                      <p className="font-medium text-base md:text-[18px] tracking-[2%]">
                        {item.userName}
                      </p>
                    </div>
                    <p className="text-textPrimaryColor text-base md:text-xl leading-[180%] tracking-[2%] mt-4 mb-8 flex-1">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        href="#"
                        className="text-sm md:text-xl text-textPrimaryColor underline"
                      >
                        Read more
                      </Link>
                      <div className="flex items-center gap-2 md:gap-4 text-textPrimaryColor">
                        <span className="text-bgColor text-lg md:text-2xl">
                          {item.icon}
                        </span>
                        <span className="text-sm md:text-xl">
                          {item.view.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default RelatedBlog;
