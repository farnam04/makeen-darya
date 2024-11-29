"use client";
import React, { Fragment, useState } from "react";
import ProductDetailData from "./ProductDetailData";
import Image from "next/image";
import Plus from "@/assent/Imge/Product/ProductDetail/Plus.svg";
import Negetive from "@/assent/Imge/Product/ProductDetail/minus.svg";
import Link from "next/link";
import ImageGallery from "./ImageProduct";
import Star from "@/assent/Imge/Product/ProductDetail/Star.svg";
import RoutDetail from "./RoutDetail";
import Suggestion from "./Suggestion/Suggestion";

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
        <div className="breadcrumbs mt-10  text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="text-[#727272] font-medium text-base"
              >
                محصولات
              </Link>
            </li>

            <li>
              <Link
                href="/product/productdetail"
                className="text-[#3A3A3A] font-medium text-base"
              >
                جزئیات محصولات
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex mt-16 justify-between ">
          <div>
            <div className="flex pb-4 gap-60  justify-between border-b border-[#ADADAD]">
              <div>
                <p className="font-demiBold text-xl text-[#3A3A3A] leading-8">
                  {product.productTitle}
                </p>
              </div>

              <div className="flex  items-center">
                <Image src={Star} width={24} height={24} alt="" />
                <p className="font-medium text-base text-[#404040]">
                  {product.rate}
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-5 items-center">
              <p className="font-medium text-base text-[#404040]">مدل :</p>
              <p className="font-medium text-base text-[#404040]">
                {product.model}
              </p>
            </div>

            <div className="flex gap-3 mt-5 items-center">
              <p className="font-medium text-base text-[#404040]">برند :</p>
              <p className="font-medium text-base text-[#404040]">
                {product.brand}
              </p>
            </div>
            <div className="flex mt-12 justify-between items-center">
              <p className="font-medium  text-lg text-[#3A3A3A] leading-7">
                <span className="text-[#727272]">قیمت :</span> {product.price}{" "}
                تومان
              </p>
              <div className="flex gap-6 items-center  ">
                <p className="text-[#727272] text-base font-medium ">تعداد:</p>
                <div className="flex flex-row  gap-4">
                  <Image onClick={() => posetive()} src={Plus} alt="" />
                  <span>{counter}</span>
                  <Image onClick={() => negtiv()} src={Negetive} alt="" />
                </div>
              </div>
            </div>

            <Link href="/Resevaion/SetTime">
              <button className="mt-10 duration-300 bg-[#445ba5] hover:bg-[#1235AA] text-white w-[98%] h-12 rounded-xl">
                افزودن به سبد خرید
              </button>
            </Link>
          </div>

          <div className="xl:-mt-10">
            <ImageGallery Images={product.images} />
          </div>
        </div>

        <div className="mt-40">
            <RoutDetail product={product}/>
        </div>

        <div>
          <Suggestion/>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
