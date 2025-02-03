import React from "react";

export default function Customers({ Custom }) {
  const Mapper = Custom.map((item, index) => (
    <div
      key={index}
      className=" flex items-center justify-between w-full h-[50px] odd:bg-[#E8EDFE]  p-2 text-[#565656] rounded-lg "
    >
      <div className=" flex items-center w-2/12 h-full  ">
        <p>{index+1}</p>
      </div>
      <div className=" flex items-center w-3/12 h-full  ">
        <p>{item.number} </p>
      </div>
      <div className=" flex items-center w-3/12 h-full  ">
        <p>{item.lastorder}</p>
      </div>
      <div className=" flex items-center justify-center w-3/12 h-full  ">
        <p>{item.date}</p>
      </div>
    </div>
  ));
  return (
    <div className=" flex flex-col items-center w-[47%] h-[90%] bg-[#FAFAFA] rounded-lg ">
      <div className=" flex items-center justify-between w-full h-[60px] bg-[#1235AA] p-2 text-white rounded-lg ">
        <div className=" flex items-center w-2/12 h-full  ">
          <p>ردیف</p>
        </div>
        <div className=" flex items-center w-3/12 h-full  ">
          <p>تلفن خریدار </p>
        </div>
        <div className=" flex items-center w-3/12 h-full  ">
          <p> اخرین سفارش</p>
        </div>
        <div className=" flex items-center w-3/12 h-full  ">
          <p>تاریخ خرید</p>
        </div>
      </div>
      {Mapper}
    </div>
  );
}
