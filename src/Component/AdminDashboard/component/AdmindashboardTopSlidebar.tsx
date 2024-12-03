import Logogulf from "@/component/AdminDashboard/Logo/Logogulf";
import React from "react";

export default function AdmindashboardTopSlidebar() {
  return (
    <div className=" flex items-center  w-full h-full justify-between  bg-white ">
      <div className=" w-[300px] h-full flex items-center justify-between text-[14px] ">
        <Logogulf />
        <p>به پنل ادمین خوش آمدید!</p>
      </div>
      <div className="h-full w-[300px] flex items-center flex-row-reverse " >
        <button className="w-[50px] h-[80%] bg-red-950  " ></button>
      </div>
    </div>
  );
}
