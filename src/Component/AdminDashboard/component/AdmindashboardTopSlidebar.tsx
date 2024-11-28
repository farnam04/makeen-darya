import Logogulf from "@/component/AdminDashboard/Logo/Logogulf";
import React from "react";

export default function AdmindashboardTopSlidebar() {
  return (
    <div className=" flex flex-row-reverse items-center  w-full h-full justify-between  bg-white ">
      <div className=" w-[300px] h-full flex flex-row-reverse items-center justify-between ">
        <Logogulf />
        <p>! به پنل ادمین خوش آمدید</p>
      </div>
      <div className="h-full w-[300px] flex items-center " >
        <button className="w-[30px] h-[80%] bg-red-950  " ></button>
      </div>
    </div>
  );
}
