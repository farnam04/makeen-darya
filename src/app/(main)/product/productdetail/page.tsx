import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import ProductDetail from "@/Component/Products/ShowProduct/ProductDetail";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ProductDetail />
    </Fragment>
  );
};

export default page;
