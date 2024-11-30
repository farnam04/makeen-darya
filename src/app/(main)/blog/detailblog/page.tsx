import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Footer from "@/Component/Landing/Footer/Footer";
import BlogShow from "@/Component/Blogs/BlogShow/BlogShow";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <BlogShow />
      <Footer />
    </Fragment>
  );
};

export default page;
