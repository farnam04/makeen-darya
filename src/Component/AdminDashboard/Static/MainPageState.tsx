import React from "react";
import StateMap from "./Mappers/StateMap";
import OrderList from "./Mappers/OrderList";
import Customers from "./Mappers/Customers";
export default function MainPageState({ State, Orderlist, Customerlist }) {

  return (
    <div className="flex flex-col justify-between w-full h-[750px] mt-[40px] ">
      <div className=" flex items-center justify-between w-full h-[90px] bg-white ">
        <StateMap State={State} />
      </div>
      <div className=" flex items-center justify-between h-[600px] w-full mt-[40px]" >
        <OrderList OrderList={Orderlist} />
        <Customers Custom={Customerlist} />
      </div>
    </div>
  );
}
