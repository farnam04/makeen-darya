import React, { Fragment } from "react";
import Background from "@/assent/Imge/Landing/bigBanner.svg";
import FlashWhiteImage from "@/assent/Imge/Landing/FlashWhite.svg";
import Image from "next/image";

const MainBanners = () => {
  return (
    <Fragment>
      <div
        className=" w-[92%]  2xl:w-[99%] pb-60   py-10   "
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-16   mr-44 flex justify-start ">
          <div>
            <h1 className="font-medium text-[30px] text-[#FAFAFA] leading-[86px]">
            فـــروش ویــــژه لـــوازم شـــنـــا
            </h1>
            <p className=" text-[#FAFAFA]  font-medium text-xl leading-[48px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم 
            </p>

             <button className="flex gap-5 mt-5 items-center text-white border border-[#FAFAFA] px-4 py-2 rounded-md">
            مشاهده بیشتر
            <Image src={FlashWhiteImage} width={24} height={24} alt="" />
          </button>
          </div>
         
        </div>
      </div>
    </Fragment>
  );
};

export default MainBanners;
