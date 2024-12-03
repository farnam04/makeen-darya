import Branners from "@/Component/Landing/Banners/Banners/Branners";
import MainBanners from "@/Component/Landing/Banners/MainBanner/MainBanners";
import Blogs from "@/Component/Landing/Blogs/Blogs";
import CatigoryProduct from "@/Component/Landing/CatigoryProduct/CatigoryProduct";
import Features from "@/Component/Landing/Features/Features";
import Footer from "@/Component/Landing/Footer/Footer";
import Header from "@/Component/Landing/Header/Header";
import Hero from "@/Component/Landing/Hero/Hero";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Populer from "@/Component/Landing/Populer/Populer";
import Suggestion from "@/Component/Landing/Suggestion/Suggestion";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Hero />
      <CatigoryProduct />
      <Suggestion />
      <Branners/>
      <Features/>
      <Populer/>
      <MainBanners/>
      <Blogs/>
      <Footer />
    </Fragment>
  );
};

export default page;
