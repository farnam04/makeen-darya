import Link from "next/link";
import React from "react";
import { Line } from "react-chartjs-2";
import page from "@/app/(panel)/admindashboard/adduser/page";

export default function StaticTopBar() {
  return (
    <div>
      <div className="w-full h-[45px]  flex items-center justify-between mt-[10px]">
      <div className=" w-full h-[45px] flex ">آمار فروش</div>

        <button className="w-[160px] h-[40px] text-[14px] rounded-md flex items-center justify-center bg-[#194BF0] text-white">
          خروجی اکسل سفارشات
        </button>
      </div>
    </div>
  );
}
