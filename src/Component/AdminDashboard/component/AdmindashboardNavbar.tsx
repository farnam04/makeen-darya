"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavData } from "./NavData";

export default function   AdmindashboardNavbar() {
  const pathname = usePathname();

  return (
    <div className="w-full h-full bg-[#fafafa] flex flex-col">
      <div className="w-full h-[90%] flex flex-col items-center justify-around text-[#6B6B6B] scroll-m-0">
        {NavData.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${
              pathname === item.href
                ? "bg-[#e8edfe] w-[90%] h-[55px] flex flex-row-reverse items-center justify-end pr-[40px] text-[16px] rounded-lg"
                : "w-full h-[60px] flex flex-row-reverse items-center justify-end pr-[20px] text-[16px] hover:translate-x-[-10px]"
            } 
            sm:w-[90%] sm:h-[50px] lg:w-[95%] lg:h-[55px]`} 
          >
            <div className="w-full h-full flex items-center text-[16px] text-[#565656]">
              <Image
                src={item.img}
                alt={item.name}
                width={24}
                height={24}
                className={`${pathname === item.href ? "filter grayscale-0" : "filter grayscale"}`}
              />
              <p
                className={`mr-3 text-sm sm:text-xs lg:text-base ${
                  pathname === item.href ? "text-black" : ""
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
