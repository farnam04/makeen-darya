import React from "react";

export default function StateMap({ State }) {
  const Mapper = State.map((item, index) => (
    <div
      key={index}
      className=" flex flex-col w-[180px] h-full bg-[#829efb] rounded-lg text-white p-3 "
    >
      <div className=" flex items-center justify-end w-full h-1/2 text-[14px] ">
        {item.number}
      </div>

      <div className=" flex items-center justify-start w-full h-1/2 text-[14px] ">
        {item.property}
      </div>
    </div>
  ));
  return (
    <div className=" flex items-center justify-between w-full h-[90px] bg-white ">
      {Mapper}
    </div>
  );
}


