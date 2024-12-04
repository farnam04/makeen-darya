import React, { Fragment } from "react";
import Background from "@/assent/Imge/Landing/DiscountsBackground.svg";
import Timer from "./Timer";
const Discounts = () => {
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
            <div className="flex flex-col gap-20 mt-10 items-center">
              <div>
                <p className="font-bold text-2xl text-[#FFFFFF]">
                  تخفیفات ویژه خلیج کالا
                </p>
              </div>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Discounts;
