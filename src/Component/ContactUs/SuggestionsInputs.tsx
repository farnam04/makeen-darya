import React, { Fragment } from "react";

const SuggestionsInputs = () => {
  return (
    <Fragment>
      <div className="w-[416px] rounded-lg  p-6 bg-[#ffff]">
        <p className="font-medium text-base text-[#363636]">
          انتقاد یا پیشنهاد خودتان را برای ما ارسال کنید.
        </p>
        <div className="flex gap-8 mt-7 items-center flex-col">
          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[75%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
              نام شما
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>

          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[63%] px-3 dark:bg-[#4F5D74] dark:text- bg-[#ffff] pt-2">
              پست الکترونیک
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>

          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[67%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
              شماره موبایل
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>

          <div className="relative w-full md:w-auto">
            <label className="absolute -top-3 z-10 left-[36%] px-3   bg-[#ffff] ">
              پیشنهاد یا انتقاد خود را بنویسید
            </label>
            <textarea
        className="w-[380px] h-[228px] p-4 border border-gray-300 rounded-md text-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#1235AA]"
      
        dir="rtl"
       
      ></textarea>
          </div>
        </div>
          <div className="flex justify-end mt-4">
          <button className="px-6 py-[6px] bg-[#3d5eca] duration-300 hover:bg-[#1744DA] rounded-lg text-[#FAFAFA] font-medium text-sm ">
            ارسال
        </button>
          </div>
        
      </div>
    </Fragment>
  );
};

export default SuggestionsInputs;
