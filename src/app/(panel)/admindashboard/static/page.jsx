import AdmindashboardNavbar from "@/component/AdminDashboard/component/AdmindashboardNavbar";
import AdmindashboardTopSlidebar from "@/Component/AdminDashboard/component/AdmindashboardTopSlidebar";
import React, { Fragment } from "react";

export default function page() {
  return (
    <Fragment>
      <div className="w-full h-[1000px] flex items-center justify-center bg-[#f6f6f6]">
        <div className="flex flex-col  w-[95%] h-full">
          <div className="w-full h-[70px]">
            <AdmindashboardTopSlidebar />
          </div>
          <div className="w-full h-[930px]   flex justify-between mt-[10px] ">
            <div className=" h-full w-[180px]">
              <AdmindashboardNavbar />
            </div>
            <div className=" h-full w-[1250px] bg-white p-[16px] ">

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
