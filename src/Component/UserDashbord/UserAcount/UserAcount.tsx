import React, { Fragment } from "react";
import InputProfile from "./InputProfile";

const UserAcount = () => {
  return (
    <Fragment>
      <div className=" bg-white w-[996px] h-[775px]   p-6  rounded-3xl">
      <p className="font-medium text-xl text-[#363636] mt-2">اطلاعات حساب کاربری</p>
      <InputProfile/>
      </div>
    </Fragment>
  );
};

export default UserAcount;
