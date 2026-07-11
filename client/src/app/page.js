import AllInOne from "@/components/all-in-one/AllInOne";
import Banner from "@/components/banner/Banner";
import Course from "@/components/course/Course";
import Feature from "@/components/features/Feature";
import Footer from "@/components/footer/Footer";
import LatesNews from "@/components/latest/LatesNews";
import Navbar from "@/components/navbar/Navbar";
import Success from "@/components/success/Success";
import Testimonial from "@/components/testimonial/Testimonial";
import Totc from "@/components/totc/Totc";
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
      <LatesNews/>
    </div>
  );
};

export default page;
