import React from "react";

export default function NewUserForm() {
  return (
    <div className="w-full h-full felx flex-col p-[16px] ">
      <p>اطلاعات کاربر</p>
      <div className="h-[90px] w-full flex items-center justify-between mt-[40px] ">
        <div className="w-1/2 h-full flex flex-col justify-between ">
          <p>نام :</p>
          <input
            type="text"
            className="h-[56px] w-[506px] border-[#D9D9D9] border-[1px] outline-none rounded-md pr-[5px] "
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between ">
          <p>نام خانوادگی :</p>
          <input
            type="text"
            className="h-[56px] w-[506px] border-[#D9D9D9] border-[1px] outline-none rounded-md pr-[5px] "
          />
        </div>
      </div>
      <div className="h-[90px] w-full flex items-center justify-between mt-[40px] ">
        <div className="w-1/2 h-full flex flex-col justify-between ">
          <p>شماره تماس :</p>
          <input
            type="text"
            className="h-[56px] w-[506px] border-[#D9D9D9] border-[1px] outline-none rounded-md pr-[5px] "
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between ">
          <p> مقام :</p>
          <select className="h-[56px] w-[506px] border-[#D9D9D9] border-[1px] outline-none rounded-md pr-[5px] ">
            <option value="">هیچکدام</option>
            <option value="MVP">ادمین کل سایت</option>
            <option value="writer">نویسنده</option>
            <option value="user">کاربر</option>

          </select>
        </div>
      </div>
    </div>
  );
}
