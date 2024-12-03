import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import ProductDetail from "@/Component/Products/ShowProduct/ProductDetail";
import Footer from "@/Component/Landing/Footer/Footer";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ProductDetail />
      <Footer/>
    </Fragment>
  );
};

export default page;
