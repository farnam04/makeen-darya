"use client";
import { Percent } from "lucide-react";
import React, { useState } from "react";

export default function PBmostsales() {
  const Info = [
    { name: "parasto", Percent: 50 },
    { name: "kaftar", Percent: 20 },
    { name: "shalag", Percent: 70 },
    { name: "ghalade", Percent: 98 },
    { name: "nigger", Percent: 99.1 },
  ];
  const TopThree = Info.sort((a, b) => b.Percent - a.Percent).slice(0, 3);
  const Mapper = TopThree.map((item, index) => (
    <div key={index}>
      <div className="w-full h-[20px] flex items-center justify-between ">
        <p>{item.name}</p>
        <div className="w-[330px] h-[5px] bg-[#D3D3D3] flex justify-end rounded-[3.5px] ">
          <div
            className=" h-[5px] bg-[green] rounded-[3.5px] "
            style={{ width: `${item.Percent}%` }}
          ></div>
        </div>
      </div>
    </div>
  ));
  

  return (
    <div className="w-1/2 h-full flex items-center justify-center ">
      <div className=" flex flex-col justify-around w-[550px] h-[270px] border-[1px] border-[#b4b7b6] rounded-md bg-white pr-2 pl-2 pt-5 ">
        <p className="text-[16px]">تعداد پرفروش ترین محصولات:</p>
        {Mapper}
      </div>
    </div>
  );
}
