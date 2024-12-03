import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Footer from "@/Component/Landing/Footer/Footer";
import Brand from "@/Component/‌Brand/Brand";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Brand />
      <Footer />
    </Fragment>
  );
};

export default page;
