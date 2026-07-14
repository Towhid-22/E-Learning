import CourseBanner from "@/components/course/CourseBanner";
import CourseCategory from "@/components/course/CourseCategory";
import Recommended from "@/components/course/Recommended";
import StudentView from "@/components/course/StudentView";
import YourChoice from "@/components/course/YourChoice";
import React from "react";

const page = () => {
  return (
    <div>
      <CourseBanner />
      <CourseCategory />
      <Recommended />
      <YourChoice/>
      <StudentView/>
    </div>
  );
};

export default page;
