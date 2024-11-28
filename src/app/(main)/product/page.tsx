import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Product from "@/Component/Products/Product/Product";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Product />
    </Fragment>
  );
};

export default page;
