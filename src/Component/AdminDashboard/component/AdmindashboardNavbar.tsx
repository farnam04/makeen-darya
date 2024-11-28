import React from "react";
import Link from "next/link";
import page from "@/app/(panel)/admindashboard/user/page";

export default function AdmindashboardNavbar() {
  return (
    <div className="w-full h-full bg-white flex flex-col  ">
      <div className="w-full h-[90%] flex flex-col justify-between  text-[#6B6B6B]   ">
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px] ">
          <Link href="/admindashboard/dashboard">داشبورد</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
        <div className="w-full h-[60px] flex items-center justify-end pr-[20px] text-[18px]  ">
          <Link href="/admindashboard/user">کاربران</Link>
        </div>
      </div>
    </div>
  );
}
