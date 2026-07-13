import AllInOne from "@/components/home/all-in-one/AllInOne";
import Banner from "@/components/home/banner/Banner";
import Course from "@/components/home/course/Course";
import Feature from "@/components/home/features/Feature";
import LatesNews from "@/components/home/latest/LatesNews";
import Success from "@/components/home/success/Success";
import Testimonial from "@/components/home/testimonial/Testimonial";
import Totc from "@/components/home/totc/Totc";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Success />
      <AllInOne />
      <Totc />
      <Feature />
      <Course />
      <Testimonial />
      <LatesNews />
    </div>
  );
};

export default page;
