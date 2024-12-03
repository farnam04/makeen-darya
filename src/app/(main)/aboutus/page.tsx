import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Footer from "@/Component/Landing/Footer/Footer";
import AboutUs from "@/Component/AboutUs/AboutUs";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <AboutUs />
      <div className="mt-[66%]">
        <Footer />
      </div>
    </Fragment>
  );
};

export default page;
