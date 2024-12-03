import React, { Fragment } from "react";
import Header from "@/Component/Landing/Header/Header";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Footer from "@/Component/Landing/Footer/Footer";
import ContactUs from "@/Component/ContactUs/ContactUs";
const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default page;
