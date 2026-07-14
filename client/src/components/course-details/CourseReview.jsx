import React from "react";
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const CourseReview = () => {
  const ratings = [
    { star: 5, percentage: 90 },
    { star: 4, percentage: 70 },
    { star: 3, percentage: 60 },
    { star: 2, percentage: 50 },
    { star: 1, percentage: 40 },
  ];

  const reviews = [
    {
      id: 1,
      name: "Lina",
      image: "/user.png",
      rating: 5,
      time: "3 Month",
      review:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to create an engaging learning experience.",
    },
    {
      id: 2,
      name: "Lina",
      image: "/user.png",
      rating: 5,
      time: "3 Month",
      review:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively with Zoom to create an engaging learning experience.",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-20 w-full">
      <div className="bg-[#EEF6FF] rounded-2xl lg:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10">
        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 lg:gap-10 items-center">
          {/* Rating Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-TextColor">
              4 <span className="text-xl md:text-2xl">out of 5</span>
            </h2>

            <div className="flex justify-center gap-1 my-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400 text-lg md:text-xl" />
              ))}
            </div>

            <p className="text-sm md:text-base text-textPrimaryColor font-medium">
              Top Rating
            </p>
          </div>

          {/* Rating Progress */}
          <div className="space-y-4 md:space-y-5">
            {ratings.map((item) => (
              <div
                key={item.star}
                className="flex items-center gap-3 md:gap-4"
              >
                <p className="w-14 md:w-16 text-xs sm:text-sm md:text-base text-textPrimaryColor whitespace-nowrap">
                  {item.star} Stars
                </p>

                <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-bgColor rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10 md:mt-12">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`${
                index !== 0 ? "border-t border-gray-300 mt-8 pt-8" : ""
              }`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-base md:text-lg">
                      {review.name}
                    </h4>

                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-yellow-400 text-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs md:text-sm text-gray-500">
                  <IoTimeOutline />
                  <span>{review.time}</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="mt-5 text-sm md:text-base text-textPrimaryColor leading-7 md:leading-8">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseReview;