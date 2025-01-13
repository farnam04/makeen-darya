import React from "react";

import { UserBarData,} from "../userpanel/UserbarData";
import { Mapper } from "./Mapper";
export default function ListOrder() {

  
      return (
    <div className=" flex flex-col w-full h-[700px]  mt-[20px]">
      <div className=" text-white text-[16px]  flex items-center w-full h-[60px] bg-[#1235AA] rounded-xl pr-[15px] ">
        <p>ردیف</p>
        <p className="mr-[80px]"> نام و نام خانوادگی </p>
        <p className="mr-[80px]"> وضعیت</p>
        <p className="mr-[80px]">تعداد کل سفارشات</p>
        <p className="mr-[80px]">تاریخ سفارش</p>
        <p className="mr-[80px]"> مجموع قیمت</p>
      </div>
      {Mapper}
    </div>
  );
}
