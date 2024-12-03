"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import BrandData from "./BrandData";
import Image from "next/image";

const Brand = () => {
  const Data = BrandData().Brand;

 
  return (
    <Fragment>
      <div className="mt-8 px-24">
        <div className="breadcrumbs  text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/brand"
                className="text-[#3A3A3A] font-medium text-base"
              >
                برند ها
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-4 mr-10 mt-10 gap-20 w-[96%]">
            {Data.map((items) => (
              <div
                className="  relative  px-2  rounded-xl  shadow transition-transform duration-300 hover:scale-105 group"
                key={items.id}
              >
                <div className="flex flex-col gap-3 py-3 justify-center items-center bg-[#FAFAFA]">
                   <Image
                   src={items.src}
                   width={220}
                   height={157}
                   alt=""
                   />
                   <p className="text-lg text-[#363636] font-medium">
                    {items.name}
                   </p>

                   <p className="text-base  text-[#363636] bg-[#E8EDFE] px-2 py-1 rounded-lg font-medium">
                    {items.number} محصول
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </Fragment>
  );
};

export default Brand;
