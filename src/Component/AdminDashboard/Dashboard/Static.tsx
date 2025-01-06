import React from "react";
import User from "@/assent/Imge/Panel/UserIcon.svg";
import Product from "@/assent/Imge/Panel/ProductIcon.svg"
import Order from "@/assent/Imge/Panel/OrderNumber.svg"
import Opinion from "@/assent/Imge/Panel/Opinion.svg"



import Image from "next/image";

export default function Static() {
  const State = [
    { state: "تعداد کاربران", Number: 1500 , media:User },
    { state: " تعداد محصولات", Number: 3000 , media:Product },
    { state: " تعداد سفارشات", Number: 4000 , media:Order },
    { state: " تعداد نظرات", Number: 900 , media:Opinion },
  ];

  const Mapper = State.map((item, index) => (
    <div
      key={index}
      className="w-[250px] h-[170px] bg-[#fafafa] flex flex-col items-center justify-end relative "
    >
      <div className="bg-[#fafafa] w-[40px] h-[40px] rounded-full flex items-center justify-center border-b-[1px]  border-[#b4b7b6] absolute z-30 top-2  ">
        <Image src={item.media} alt="" className="" />
      </div>
      <div className="w-full h-[140px]  flex flex-col border-[1px] bg-white border-[#b4b7b6] rounded-[10px] p-2 ">
        <div className="w-full h-2/3   flex items-center justify-start" ><p>{item.state}</p></div>
        <div className="w-full h-1/3   flex items-center justify-end" ><p>{item.Number}</p></div>

      </div>
    </div>
  ));

  return (
    <div className="w-full h-full flex items-center justify-between">
      {Mapper}
    </div>
  );
}
