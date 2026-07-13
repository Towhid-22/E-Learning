import Coaching from "@/components/membership/Coaching";
import Pricing from "@/components/membership/Pricing";
import StudentComment from "@/components/membership/StudentComment";
import Teacher from "@/components/membership/Teacher";
import React from "react";

const page = () => {
  return (
    <div>
      <Pricing />
      <Coaching />
      <StudentComment />
      <Teacher />
    </div>
  );
};

export default page;
