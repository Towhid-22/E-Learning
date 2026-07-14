"use client";

import React from "react";
import Link from "next/link";
import Container from "../common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CourseBanner = () => {
  const banner = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      image: "/courseBanner/courseBanner1.png",
      user: "/user.png",
      name: "Lina",
      completed: 30,
      total: 40,
    },
    {
      id: 2,
      title: "React Masterclass",
      image: "/courseBanner/courseBanner2.png",
      user: "/user.png",
      name: "John",
      completed: 15,
      total: 30,
    },
    {
      id: 3,
      title: "Next.js Bootcamp",
      image: "/courseBanner/courseBanner3.png",
      user: "/user.png",
      name: "Smith",
      completed: 8,
      total: 20,
    },
    {
      id: 4,
      title: "Node.js API Development",
      image: "/courseBanner/courseBanner1.png",
      user: "/user.png",
      name: "David",
      completed: 25,
      total: 25,
    },
    {
      id: 5,
      title: "MongoDB Complete Guide",
      image: "/courseBanner/courseBanner2.png",
      user: "/user.png",
      name: "Emma",
      completed: 12,
      total: 30,
    },
    {
      id: 6,
      title: "Tailwind CSS Masterclass",
      image: "/courseBanner/courseBanner3.png",
      user: "/user.png",
      name: "Sophia",
      completed: 18,
      total: 24,
    },
  ];

  return (
    <section className="bg-[#9DCCFF]/20 py-16 md:py-16 lg:pt-10 lg:pb-20 pt-15 overflow-hidden">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold text-TextColor md:text-3xl lg:text-4xl">
            Welcome back, ready for your next lesson?
          </h2>
          <Link href="#" className="font-semibold text-bgColor hover:underline">
            View History
          </Link>
        </div>
        <Carousel
          // opts={{
          //   align: "start",
          //   loop: true,
          // }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {banner.map((item) => {
              const progress = Math.round((item.completed / item.total) * 100);
              return (
                <CarouselItem
                  key={item.id}
                  className="pl-4 basis-full sm:basis-1/2 xl:basis-1/3"
                >
                  <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full rounded-xl object-cover"
                    />
                    <h3 className="mt-5 text-xl font-semibold leading-8 text-TextColor">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-3">
                      <img
                        src={item.user}
                        alt={item.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <p className="font-medium text-gray-700">{item.name}</p>
                    </div>
                    <div className="mt-auto pt-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-gray-500">Progress</span>

                        <span className="font-semibold text-bgColor">
                          {progress}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-bgColor transition-all duration-700"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {item.completed} of {item.total} lessons completed
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-translate-y-1/2 lg:right-14" />
          <CarouselNext className=" -translate-y-1/2 lg:right-0" />
        </Carousel>
      </Container>
    </section>
  );
};

export default CourseBanner;
