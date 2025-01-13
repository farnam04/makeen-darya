import Link from "next/link";
import React from "react";
import { Line } from "react-chartjs-2";
import page from "@/app/(panel)/admindashboard/adduser/page";

export default function TopBarorders() {
  return (
    <div>
      <div className=" w-full h-[45px] flex ">
        <p className="text-[18px]">لیست سفارشات</p>
      </div>
      <div className="w-full h-[45px]  flex items-center justify-between">
        <input
          className="w-[230px] h-[40px] border-[1px] border-[#F0F0F0] outline-none rounded-md placeholder:text-[13px] pr-[34px] "
          type="text"
          name=""
          id=""
          placeholder="جستجوی "
        />
        <button 
        className="w-[160px] h-[40px] text-[15px] rounded-md flex items-center justify-center bg-[#194BF0] text-white">
              خروجی اکسل سفارشات
        </button>
      </div>
    </div>
  );
}