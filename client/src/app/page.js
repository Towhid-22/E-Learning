import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Success from "@/components/success/Success";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Success />
    </div>
  );
};

export default page;
