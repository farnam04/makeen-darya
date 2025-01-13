'use client'

import { useState } from "react";
import Edith from "@/assent/Imge/AdminpanelUser/Edit Icon.svg";
import Trash from "@/assent/Imge/AdminpanelUser/trash.svg";
import Image from "next/image";
import { OrderData } from "./OrderData";

function Next(){

} 
  export const Mapper = OrderData.slice(0, 10).map((item, index) => (
    <div
      key={index}
      className="odd:bg-[#E8EDFE] text-[16px] flex items-center w-full h-[60px] rounded-xl pr-[25px]"
    >
      <div className="h-full w-[100px] flex items-center">{index + 1}</div>
      <div className="h-full w-[190px] flex items-center">{item.namde}</div>
      <div className="h-full w-[150px] flex items-center">{item.State? "تکمیل" : "درحال ارسال"}</div>
      <div className="h-full w-[150px] flex items-center">{item.orderNum}</div>
      <div className="h-full w-[200px] flex items-center">{item.history}</div>
      <div className="h-full w-[200px] flex items-center">{item.PriceTotal}</div>
      <div className="h-full w-[100px] mr-[60px] flex items-center justify-around">
        <button className="w-[24px] h-[24px]">
          <Image src={Edith} alt="edtih" />
        </button>
        <button className="w-[24px] h-[24px]">
          <Image src={Trash} alt="trash" />
        </button>
      </div>
    </div>
  ));

  import React from 'react'

