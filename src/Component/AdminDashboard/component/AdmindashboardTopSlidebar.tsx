import Logogulf from "@/component/AdminDashboard/Logo/Logogulf";
import React from "react";
import Image from "next/image";
import Logout from "@/assent/Imge/Panel/Logout.svg";

export default function AdmindashboardTopSlidebar() {
  return (
    <div className=" flex items-center  w-full h-full justify-between  bg-[#fafafa] ">
      <div className=" w-[300px] h-full flex items-center justify-between text-[14px] ">
        <Logogulf />
        <p>به پنل ادمین خوش آمدید!</p>
      </div>
      <div className="h-full w-[300px] flex items-center flex-row-reverse ">
        <div className="w-[50px] h-[80%] flex items-center justify-center ">
          <button>
            {" "}
            <Image src={Logout} alt="" width={30} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

