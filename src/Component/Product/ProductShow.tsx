import React, { Fragment } from "react";
import Image from "next/image";

import Link from "next/link";
import BasketImage from "@/assent/Imge/Product/‌basket.svg";

const ProductShow = ({ currentPageData, filledHeart, handleHeartClick }) => {
  return (
    <Fragment>
      {currentPageData.map((treatment, index) => (
        <div
          key={index}
          className="w-60 relative h-80 px-2 rounded-xl bg-[#FFFFFF] shadow transition-transform duration-300 hover:scale-105 group"
        >
          <Link href="/product/productdetail">
            <Image src={treatment.src} width={224} height={141} alt="" />
            <p className="text-[#3A3A3A]  font-demiBold text-base mt-1">
              {treatment.name}
            </p>

            <p className="font-medium text-base mt-2 leading-6 text-[#565656]">
              مدل
              {"  "} {treatment.model}
            </p>
            <div className="flex justify-between mt-3 items-center">
              <p className="font-medium text-base text-[#565656]">رنگ بندی :</p>
          
            </div>
            <div className="flex justify-between mt-10 items-center">
              <p className="font-demiBold text-base text-[#3A3A3A] leading-6">
                قیمت : {treatment.price}
                تومان
              </p>
              <Image src={BasketImage} width={24} height={24} alt="" />
            </div>
          </Link>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={filledHeart[index] ? "#D20404 " : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" text-[#3A3A3A] hover:text-inherit absolute top-3   cursor-pointer   size-7 hover:fill-[#D20404]"
              onClick={() => handleHeartClick(index)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ProductShow;
