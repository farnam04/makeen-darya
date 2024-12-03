import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Footer from "@/Component/Landing/Footer/Footer";
import Blog from "@/Component/Blogs/Blog/Blog";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Blog />
      <Footer />
    </Fragment>
  );
};

export default page;
