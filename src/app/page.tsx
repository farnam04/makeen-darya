import Branners from "@/Component/Landing/Banners/Banners/Branners";
import MainBanners from "@/Component/Landing/Banners/MainBanner/MainBanners";
import Blogs from "@/Component/Landing/Blogs/Blogs";
import Brands from "@/Component/Landing/Brands/Brands";
import CatigoryProduct from "@/Component/Landing/CatigoryProduct/CatigoryProduct";
import Discounts from "@/Component/Landing/Discounts/Discounts";
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
      <Discounts/>
      <Features/>
      <Populer/>
      <MainBanners/>
      <Blogs/>
      <Brands/>
      <Footer />
    </Fragment>
  );
};

export default page;
