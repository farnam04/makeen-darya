import React, { Fragment } from "react";
import Background from "@/assent/Imge/Landing/HeroBackground.svg";
import Link from "next/link";
const Hero = () => {
  return (
    <Fragment>
      <div className="relative">
        <div
          className="absolute -z-1 inset-0 w-[100%] 2xl:w-[99%] h-[920px] xl:-mt-[8%]  2xl:pb-[25.5%] pb-[28.5%] py-10   "
          style={{
            backgroundImage: `url(${Background.src})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="mt-60  px-20 flex justify-start ">
            <div>

           
            <h1 className="font-medium text-[26px] leading-10">
              تجهیزات دریایی با کیفیت؛ هر آنچه برای سفرهای آبی نیاز دارید!
            </h1>
            <p className="w-[65%] mt-8 font-medium text-base leading-9">
            فروشگاه ما مجموعه‌ای گسترده از لوازم دریایی را برای شما فراهم کرده است. از تجهیزات ایمنی دریایی تا وسایل حمل و نقل و نگهداری، هر چیزی که نیاز دارید، اینجا پیدا می‌کنید.
            </p>

            <div className="flex gap-8  mt-12">
          <Link href="/product">
            <button className="bg-[#194BF0] whitespace-nowrap w-36 py-[13px] px-4 rounded-md text-[#FAFAFA] font-medium text-sm">
            محصولات ما
            </button>
          </Link>
          <Link href="/contactus">
          <button className="border border-[#194BF0] whitespace-nowrap w-36 py-3 px-4 rounded-md text-[#194BF0] font-medium text-sm">
          تماس با ما
          </button>
          </Link>
        </div>
      </div>
          </div>
          </div>
        </div>
     
    </Fragment>
  );
};

export default Hero;
