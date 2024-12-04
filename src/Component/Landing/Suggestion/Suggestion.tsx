"use client";

import React, { Fragment, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SuggestRout from "@/assent/Imge/Product/ProductDetail/SuggestionRout.svg";
import BasketImage from "@/assent/Imge/Product/‌basket.svg";
import SuggestionData from "./SuggestionData";
import ArrowLeft from "@/assent/Imge/Landing/arrow-left.svg";
import ArrowRight from "@/assent/Imge/Landing/arrowRight.svg";

const Suggestion = () => {
  const Data = SuggestionData().Suggestion;

  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Fragment>
      <div className="mt-40 px-20">
        <div className="flex justify-between items-center gap-10">
          <Image src={SuggestRout} width={1107} height={58} alt="suggestRout" />
          <div className="flex items-center gap-6">
            <Image
              src={ArrowRight}
              width={40}
              height={40}
              alt=""
              className="cursor-pointer"
              onClick={scrollRight}
            />

            <Image
              src={ArrowLeft}
              width={40}
              height={40}
              alt=""
              className="cursor-pointer"
              onClick={scrollLeft}
            />
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex  mt-10 overflow-x-auto scrollbar-hide gap-9"
        >
          {Data.map((items) => (
            <div
              key={items.id}
              className="relative px-2 rounded-xl shadow transition-transform duration-300 hover:scale-105 group flex-shrink-0"
            >
              <Link href="/product/productdetail">
                <div className="flex flex-col gap-4 px-4">
                  <Image src={items.src} width={256} height={225} alt="" />
                  <p className="font-medium text-base text-[#363636]">
                    {items.name}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-sm text-[#404040]">برند :</p>
                    <p className="font-medium text-sm text-[#6B6B6B]">
                      {items.brand}
                    </p>
                  </div>

                  <div className="flex border-b border-b-[#ADADAD] pb-3 justify-between items-center">
                    <p className="font-medium text-sm text-[#404040]">مدل :</p>
                    <p className="font-medium text-sm text-[#6B6B6B]">
                      {items.model}
                    </p>
                  </div>

                  <div className="flex justify-between mb-3 items-center">
                    <p className="font-medium text-base text-[#363636] leading-6">
                      قیمت : {items.price}
                      <span className="text-[#909090] text-xs">تومان</span>
                    </p>
                    <Image src={BasketImage} width={32} height={32} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Suggestion;
