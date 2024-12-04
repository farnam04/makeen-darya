"use client";

import Image from "next/image";
import React, { Fragment, useRef } from "react";
import ProductHeder from "@/assent/Imge/Landing/ProductCategorysvg.svg";
import Line from "@/assent/Imge/Landing/Line.svg";
import ArrowLeft from "@/assent/Imge/Landing/arrow-left.svg";
import ArrowRight from "@/assent/Imge/Landing/arrowRight.svg";
import ArrowIcon from "@/assent/Imge/Landing/arrowLeft .svg";
import DataProduct from "./DataProduct";
import Link from "next/link";

const CatigoryProduct = () => {
  const Data = DataProduct().Product;

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
      <div className="px-20 relative my-20">
        <div className="py-4 flex justify-between gap-2">
          <Image src={ProductHeder} width={204} height={54} alt="" />
          <Image src={Line} width={887} height={0} alt="" />

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

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 items-center scrollbar-hide"
        >
          {Data.map((items) => (
            <Link key={items.id} href="">
            <div  className="flex-shrink-0">
              <div className="flex justify-start mb-4">
                <Image src={items.src} width={100} height={100} alt="" />
              </div>

              <div className="bg-[#F1F1F1] -mt-16 hover:bg-[#DEE6FFC7] duration-300 w-[260px] px-5 h-[155px] rounded-lg">
                <div className="flex justify-between pt-16 items-center">
                  <p className="font-medium text-xl text-[#363636]">
                    {items.name}
                  </p>
                  <p className="font-medium text-sm text-[#565656]">
                    {items.Number} کالا
                  </p>
                </div>

                <Link href="/">
                  <div className="flex gap-3 mt-5 items-center">
                    <p className="font-medium text-sm text-[#565656]">
                      مشاهده محصولات
                    </p>
                    <Image src={ArrowIcon} width={20} height={20} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CatigoryProduct;
