import BlogBanner from "@/components/blog/BlogBanner";
import MarketingArticles from "@/components/blog/MarketingArticles";
import ReadingBlogList from "@/components/blog/ReadingBlogList";
import RelatedBlog from "@/components/blog/RelatedBlog";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogBanner />
      <ReadingBlogList />
      <RelatedBlog />
      <MarketingArticles/>
    </div>
  );
};

export default page;
