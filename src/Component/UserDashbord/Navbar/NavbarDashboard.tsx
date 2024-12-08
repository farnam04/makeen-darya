"use client";
import React, { Fragment } from "react";
import NavbarData from "./NavbarData";
import Image from "next/image";
import { usePathname } from "next/navigation";
import OutIcon from '@/assent/Imge/UserDashboard/Out.svg'
const NavbarDashboard = () => {
  const UserData = NavbarData().UserName[0];

  const Navbar = NavbarData().Navbar;

  const pathName = usePathname();
  return (
    <Fragment>
      <div className="px-8 py-4 flex flex-col gap-20 rounded-2xl bg-[#FAFAFA] w-[273px] h-[775px]">
        <div className="flex gap-5 items-center ">
          <div className="bg-[#F6F6F6] border border-[#EBEBEB] rounded-lg p-4 flex justify-center">
            <Image src={UserData.src} width={40} height={40} alt="" />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="font-medium text-sm text-[#000000]">
              {UserData.name}
            </p>

            <p className="font-medium text-sm text-[#000000]">
              {UserData.number}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          {Navbar.map((items) => (
            <div
              key={items.id}
              className={` flex gap-7 pr-4 items-center w-52 h-[47px] rounded-lg hover:border-r-2 hover:border-r-[#1744DA] cursor-pointer hover:bg-blue-100 ${
                pathName === items.Link
                  ? "bg-blue-100 border-r-2 border-r-[#1744DA]"
                  : ""
              }`}
            >
              <Image src={items.src} width={24} height={24} alt="" />

              <p className="font-medium text-base text-[#363636]">
                {items.name}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t mt-60 border-t-[#ADADAD] pt-7 ">
           <div className="flex gap-4 items-center">
           <Image
           src={OutIcon}
           width={24}
           height={24}
           alt=""
           />
           <p className="font-medium text-base text-[#DE3800]">
           خروج از حساب کاربری
           </p>
           </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarDashboard;
