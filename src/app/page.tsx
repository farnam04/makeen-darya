import CatigoryProduct from "@/Component/Landing/CatigoryProduct/CatigoryProduct";
import Footer from "@/Component/Landing/Footer/Footer";
import Header from "@/Component/Landing/Header/Header";
import Hero from "@/Component/Landing/Hero/Hero";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Hero />
      <CatigoryProduct />
      {/* <div className="mt-[66%]"> */}
        <Footer />
      {/* </div> */}
     
    </Fragment>
  );
};

export default page;
