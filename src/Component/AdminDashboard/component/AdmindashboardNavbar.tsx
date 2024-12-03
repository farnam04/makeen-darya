"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavData } from "./NavData";
import { text } from "stream/consumers";

export default function AdmindashboardNavbar() {
  const pathname = usePathname();

  return (
    <div className="w-full h-full bg-white flex flex-col  ">
      <div className="w-full h-[90%] flex flex-col justify-around text-[#6B6B6B]">
        {NavData.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`w-full h-[60px] flex flex-row-reverse items-center justify-end pr-[20px] text-[16px] ${
              pathname === item.href ? "bg-[#1235AA]" : ""
            }`}
          >
            <div className="w-full h-full flex items-center text-[16px] text-[#565656]">
              <Image src={item.img} alt={item.name} width={24} height={24} />
              <p
                className={`mr-3 ${
                  pathname === item.href ? "text-white" : ""
                }`}
              >
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
