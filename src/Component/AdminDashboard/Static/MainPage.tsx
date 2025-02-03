"use client";
import { useState } from "react";
import React from "react";
import { CustomerListDaily, StaticDay, OrderListDaily } from "./Data/Day";
import { CustomerListWeekly, StaticWeek, OrderListWEEKLY } from "./Data/Week";
import {
  StaticMonth,
  OrderListMonthly,
  CustomerListMonthly,
} from "./Data/Month";
import { OrderListYearly, StaticYear, CustomerListYearly } from "./Data/Year";
import MainPageState from "./MainPageState";

export default function MainPage() {
  const [State, setState] = useState(StaticDay);
  const [Orderlist, setOrderlist] = useState(OrderListDaily);
  const [Customerlist, setCustomerlist] = useState(CustomerListDaily);

  const dataMap = {
    WEEK: {
      state: StaticWeek,
      orders: OrderListWEEKLY,
      customers: CustomerListWeekly,
    },
    DAY: {
      state: StaticDay,
      orders: OrderListDaily,
      customers: CustomerListDaily,
    },
    MONTH: {
      state: StaticMonth,
      orders: OrderListMonthly,
      customers: CustomerListMonthly,
    },
    YEAR: {
      state: StaticYear,
      orders: OrderListYearly,
      customers: CustomerListYearly,
    },
  };

  function ChangeAmount(e) {
    const selectedData = dataMap[e.target.value];
    if (selectedData) {
      setState(selectedData.state);
      setOrderlist(selectedData.orders);
      setCustomerlist(selectedData.customers);
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between items-center w-1/2 h-[40px]">
        {Object.keys(dataMap).map((key) => (
          <button
            key={key}
            value={key}
            onClick={ChangeAmount}
            className="flex items-center justify-center text-[15px] text-[#194BF0] w-[100px] h-full border-[1px] border-[#194BF0] rounded-md"
          >
            {key === "DAY"
              ? "امروز"
              : key === "WEEK"
              ? "هفتگی"
              : key === "MONTH"
              ? "ماهانه"
              : "سالانه"}
          </button>
        ))}
        <button className="flex items-center justify-center text-[15px] text-[#194BF0] w-[100px] h-full border-[1px] border-[#194BF0] rounded-md">
          بر اساس تاریخ
        </button>
      </div>
      <MainPageState
        State={State}
        Orderlist={Orderlist}
        Customerlist={Customerlist}
      />
    </div>
  );
}
