import React, { Fragment } from "react";
import Background from "@/assent/Imge/Landing/BannerYellow.svg";
import Background2 from "@/assent/Imge/Landing/BannerBlue.svg";
import FlashImage from "@/assent/Imge/Landing/Flash.svg";
import Image from "next/image";

const Branners = () => {
  return (
    <Fragment>
      <div className="flex mt-40 pl-24 relative  items-center">
        <div
          className=" w-[100%] 2xl:w-[99%] pb-60   py-10   "
          style={{
            backgroundImage: `url(${Background2.src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" pr-40 flex gap-10 flex-col absolute mt-10 ">
            <p className="font-semibold text-2xl text-[#F6F6F6]">
              لـوازم غــواصــی
            </p>
            <button className="flex gap-5 text-[#363636] items-center bg-[#F6F6F6] px-4 py-2 rounded-md">
              مشاهده بیشتر
              <Image src={FlashImage} width={24} height={24} alt="" />
            </button>
          </div>
        </div>

        <div
          className=" w-[100%] 2xl:w-[99%]  pb-60   py-10   "
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" pr-40 flex gap-10 flex-col absolute mt-10 ">
            <p className="font-semibold  text-2xl text-[#F6F6F6]">
              لـوازم مـاهـیگـیری
            </p>
            <button className="flex text-[#363636] gap-5 items-center bg-[#F6F6F6] px-4 py-2 rounded-md">
              مشاهده بیشتر
              <Image src={FlashImage} width={24} height={24} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Branners;
