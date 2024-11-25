"use client";

import React, { Fragment, useState } from "react";

const FilterProduct = () => {
  const [activeFilter, setActiveFilter] = useState("همه مقالات");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <Fragment>
      <div className="bg-white mt-10 w-[66%] flex justify-between items-center px-5   rounded-xl mr-[28%]  py-4  h-[78px]">
        <div className=" flex gap-1 mt-1 items-center">
         
          <p className="text-[#727272] font-medium text-lg">
            مرتب سازی بر اساس :
          </p>
          <div className="flex  gap-5 mr-12 cursor-pointer items-center">
            <p
              className={`font-medium text-base duration-300 ${
                activeFilter === "جدید ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("جدید ترین")}
            >
             جدید ترین
            </p>

            <p
               className={`font-medium text-base duration-300 ${
                activeFilter === "محبوب ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("محبوب ترین")}
            >
             محبوب ترین
            </p>

            <p  className={`font-medium text-base duration-300 ${
                activeFilter === "پرفروش ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("پرفروش ترین")}>
             پرفروش ترین
            </p>


            <p   className={`font-medium text-base duration-300 ${
                activeFilter === "ارزان ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("ارزان ترین")}>
        ارزان ترین
            </p>

            <p   className={`font-medium text-base duration-300 ${
                activeFilter === "گران ترین"
                  ? "text-[#2E8B57]"
                  : "text-[#727272] hover:text-[#2E8B57]"
              }`}
              onClick={() => handleFilterClick("گران ترین")}>
             گران ترین
            </p>


         


         
          </div>
        </div>
        <p className="text-base font-medium text-[#404040]">
        28 کالای موجود
        </p>
      </div>
    </Fragment>
  );
};

export default FilterProduct;
