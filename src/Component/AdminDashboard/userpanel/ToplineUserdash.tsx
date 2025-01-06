import React from "react";

export default function ToplineUserdash() {
  return (
    <div>
      <div className=" w-full h-[45px] flex ">
        <p className="text-[18px]">لیست کاربران</p>
      </div>
      <div className="w-full h-[45px]  flex items-center justify-between">
        <input
          className="w-[230px] h-[40px] border-[1px] border-[#F0F0F0] outline-none rounded-md placeholder:text-[13px] pr-[34px] "
          type="text"
          name=""
          id=""
          placeholder="جستجوی کاربران"
        />
        <button className="w-[160px] h-[40px] rounded-md bg-[#194BF0] text-white">
            لیست مقام ها
        </button>
      </div>
    </div>
  );
}
