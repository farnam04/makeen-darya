"use client";
import React, { Fragment, useState } from "react";
import ProductDetailData from "./ProductDetailData";
import Image from "next/image";
import Plus from "@/assent/Imge/Product/ProductDetail/Plus.svg";
import Link from "next/link";
import ImageGallery from "./ImageProduct";

const ProductDetail = () => {
  const [counter, setCounter] = useState(0);
  const { ProductDetail } = ProductDetailData();
  const product = ProductDetail[0];

  function posetive() {
    setCounter(counter + 1);
  }
  function negtiv() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <Fragment>
      <div className="px-20">
        <div className="flex mt-32 justify-between ">
          <div>
            <p className="font-demiBold text-xl text-[#3A3A3A] leading-8">
              {product.productTitle}
            </p>

            <p className="font-medium mt-9 text-base text-[#727272] leading-7">
              {product.productDetail}
            </p>

            <p className="font-medium mt-12 text-lg text-[#3A3A3A] leading-7">
              <span className="text-[#727272]">قیمت :</span> {product.price}{" "}
              تومان
            </p>
           
            <div className="flex gap-6 items-center mt-12 ">
              <p className="text-[#727272] text-base font-medium mt-9">
                تعداد:
              </p>
              <div className="flex flex-row mt-9 gap-4">
                <Image onClick={() => posetive()} src={Plus} alt="" />
                <span>{counter}</span>
                <Image onClick={() => negtiv()} src={Plus} alt="" />
              </div>
            </div>
            <Link href="/Resevaion/SetTime">
              <button className="mt-10 duration-300 bg-[#54896b] hover:bg-[#2E8B57] text-white w-[98%] h-12 rounded-xl">
                افزودن به سبد خرید
              </button>
            </Link>
          </div>
          <div className="xl:-mt-10">
            <ImageGallery Images={product.images} />
          </div>
        </div>
        <div className="mt-40">
          <p className="text-[#2E8B57] font-demiBold text-lg">توضیحات</p>
          <p className="font-regular mt-4  text-base text-[#727272]">
            {product.description}
          </p>
        </div>


        <div className="mt-10 ">
          <p className="font-medium text-2xl text-[#393939]">
            نظرات خودتان را با ما به اشتراک بگذارید:
          </p>

          <p className="font-regular text-base mt-10 text-[#3A3A3A]">پیام:</p>

          <textarea
           placeholder="لطفا پیام خودرا بنویسید"
            className=" w-[884px] px-5 py-4 mt-5 h-[177px] "
          ></textarea>
           
        </div>
        <button className="mt-10   bg-[#2E8B57] rounded-xl py-2 px-4 w-[9%] h-[12%] text-base text-[#FFFFFF] font-medium">
           ثبت نظر
        </button>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
