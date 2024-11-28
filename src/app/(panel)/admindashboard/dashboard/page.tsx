import AdmindashboardNavbar from "@/component/AdminDashboard/component/AdmindashboardNavbar";
import AdmindashboardTopSlidebar from "@/component/AdminDashboard/component/AdmindashboardTopSlidebar";
import React, { Fragment } from "react";

export default function page() {
  return (
    <Fragment>
      <div className="w-full h-screen flex items-center justify-center bg-[#f6f6f6]">
        <div className="flex flex-col  w-[95%] h-full">
          <div className="w-full h-[70px]">
            <AdmindashboardTopSlidebar />
          </div>
          <div className="w-full h-[930px] bg-slate-500 flex flex-row-reverse mt-[10px] ">
            <div className=" h-full w-[180px]">
              <AdmindashboardNavbar/>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
