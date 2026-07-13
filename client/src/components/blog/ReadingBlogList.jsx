import React from "react";
import Container from "../common/Container";
import Link from "next/link";

const ReadingBlogList = () => {
  return (
    <Container>
      <div className="py-10 md:py-16 lg:py-20">
        <h3 className="font-bold text-2xl md:text-3xl mb-6 md:mb-8">
          Reading blog list
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <Link href="#" className="overflow-hidden rounded-lg">
            <img
              src="/blog/uxui.png"
              alt="uxui"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link href="#" className="overflow-hidden rounded-lg">
            <img
              src="/blog/react.png"
              alt="react"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link href="#" className="overflow-hidden rounded-lg">
            <img
              src="/blog/php.png"
              alt="php"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>

          <Link href="#" className="overflow-hidden rounded-lg">
            <img
              src="/blog/javascript.png"
              alt="javascript"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ReadingBlogList;
