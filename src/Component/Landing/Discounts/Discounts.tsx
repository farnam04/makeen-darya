import React, { Fragment } from "react";
import Background from "@/assent/Imge/Landing/DiscountsBackground.svg";
import Timer from "./Timer";
import DiscountImage from "@/assent/Imge/Landing/DiscountImage.svg";
import Image from "next/image";
import FlashImage from "@/assent/Imge/Landing/Flash.svg";
import BasketImage from "@/assent/Imge/Product/‌basket.svg";
import Link from "next/link";
import DiscountsData from "./DiscountsData";
const Discounts = () => {
    const Data = DiscountsData().Discounts
  return (
    <Fragment>
      <div className="mt-20">
        <div
          className=" w-[100%] 2xl:w-[99%]    py-10   "
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between px-20 ">
            <div className="flex flex-col gap-10 mt-10 items-center">
              <div>
                <p className="font-bold text-2xl text-[#FFFFFF]">
                  تخفیفات ویژه خلیج کالا
                </p>
              </div>
              <Timer />
              <Image
                src={DiscountImage}
                width={126}
                height={138}
                alt="DiscountImage"
              />

              <button className="flex gap-5 items-center text-[#0B2065] bg-[#F6F6F6] px-4 py-2 rounded-md">
                مشاهده بیشتر
                <Image src={FlashImage} width={24} height={24} alt="" />
              </button>
            </div>

            <div
          
          className="flex   overflow-x-auto scrollbar-hide gap-9"
        >
            {Data.map((items) => (
            <div
              key={items.id}
              className="relative px-2 bg-[#FAFAFA] border border-[#E1E1E1] rounded-xl  duration-300 flex-shrink-0"
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
                   

                    <p className="font-medium flex items-center gap-2 text-base text-[#363636] leading-6">
                      قیمت :
                      
                      <p className="font-medium line-through  text-xs text-[##909090] ">
                      {items.Disprice}
                      
                    </p>
                       {items.price}
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
        </div>
      </div>
    </Fragment>
  );
};

export default Discounts;
