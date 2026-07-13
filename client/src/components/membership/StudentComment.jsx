"use client";
import React from "react";
import Container from "../common/Container";
import { IoLogoAndroid } from "react-icons/io5";
import { FaAppleWhole } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const comments = [
  {
    id: 1,
    image: "/comments.png",
    name: "Bulkin Simons",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "/comments.png",
    name: "Sarah Johnson",
    comment:
      "Amazing course! Everything was explained clearly and helped me improve my skills quickly.",
  },
  {
    id: 3,
    image: "/comments.png",
    name: "David Smith",
    comment:
      "Highly recommended for beginners. The instructor was very supportive.",
  },
  {
    id: 4,
    image: "/comments.png",
    name: "Emily Brown",
    comment: "One of the best online learning experiences I've ever had.",
  },
  {
    id: 5,
    image: "/comments.png",
    name: "John Doe",
    comment: "The practical projects made learning enjoyable and effective.",
  },
];

const StudentComment = () => {
  return (
    <section className="bg-[#9DCCFF] py-12 md:py-16 lg:py-24 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D3436] leading-tight">
            What our students have to say
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4">
            {comments.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full rounded-2xl bg-white p-6 md:p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-full flex-col items-center text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover"
                    />

                    <h3 className="mt-5 text-xl md:text-2xl font-semibold text-[#2D3436]">
                      {item.name}
                    </h3>

                    <p className="mt-4 text-sm md:text-base leading-7 text-gray-600 grow">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 lg:-left-14" />
          <CarouselNext className="right-2 top-1/2 -translate-y-1/2 lg:-right-14" />
        </Carousel>
        <div className="mt-12 lg:mt-20 rounded-3xl bg-TextColor px-6 py-10 text-white md:px-10 lg:px-20 lg:py-16">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              APP is available for free
            </h2>
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:w-auto">
              <button className="btn bg-[#29B9E7]! w-full sm:w-60 lg:w-64 flex items-center justify-center gap-3 text-lg font-semibold md:text-xl">
                <IoLogoAndroid size={28} />
                Android APP
              </button>
              <button className="btn w-full sm:w-60 lg:w-64 flex items-center justify-center gap-3 text-lg font-semibold md:text-xl">
                <FaAppleWhole size={28} />
                IOS APP
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudentComment;
