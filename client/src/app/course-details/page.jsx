import MarketingArticles from "@/components/blog/MarketingArticles";
import Classroom from "@/components/course-details/Classroom";
import CourseDetails from "@/components/course-details/CourseDetails";
import CourseReview from "@/components/course-details/CourseReview";
import Rating from "@/components/course-details/Rating";
import React from "react";

const page = () => {
  return (
    <div>
      <CourseDetails />
      <div className="bg-[#9DCCFF]/20">
        <MarketingArticles />
      </div>
      <Classroom />
    </div>
  );
};

export default page;
