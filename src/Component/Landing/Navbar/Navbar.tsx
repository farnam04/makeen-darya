'use client'
import React, { Fragment } from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
    const pathName= usePathname()
  return (
    <Fragment>
       <div className="relative bg-white rounded-b-3xl z-10">
      <div className="flex px-4 md:px-20 py-6 items-center md:justify-between">
        <div className="flex justify-between items-center w-full ">
          <div className="hidden md:flex  gap-10 items-center">
            <Link href="/">
              <button className="cursor-pointer">
                <span
                  style={pathName === "/" ? { color: "#363636" } : {}}
                  className={`w-20 font-demiBold text-base whitespace-nowrap 
                 ${
                       pathName === "/"
                         ? " text-[#363636] border-b-2 border-[#1235AA] pb-[4px]  w-[78px] text-base mt-[1px] leading-7 font-bold duration-300"
                         : "text-[#6B6B6B] w-[63px]"
                     }
                      hover:text-[#363636] hover:border-b-2 hover:border-[#1235AA] hover:pb-[5px] hover:pt-2  hover:font-bold  hover:w-[78px] hover:text-base duration-300`}
                >
                  صفحه اصلی
                </span>
              </button>
            </Link>

            <Link href="/product">
              <button className="cursor-pointer">
              <span
                   style={pathName === "/product" ? { color: "#363636" } : {}}
                   className={`w-20 font-demiBold text-base whitespace-nowrap 
                  ${
                        pathName === "/product"
                          ? " text-[#363636] border-b-2 border-[#1235AA] pb-[4px]  w-[78px] text-base mt-[1px] leading-7 font-bold duration-300"
                          : "text-[#6B6B6B] w-[63px]"
                      }
                       hover:text-[#363636] hover:border-b-2 hover:border-[#1235AA] hover:pb-[4px] hover:pt-2  hover:font-bold  hover:w-[78px] hover:text-base duration-300`}
                 >
                محصولات
                </span>
              </button>
            </Link>

            <Link href="/brand">
              <button className="cursor-pointer">
                <p
               style={pathName === "/brand" ? { color: "#363636" } : {}}
               className={`w-20 font-demiBold text-base whitespace-nowrap 
              ${
                    pathName === "/brand"
                      ? " text-[#363636] border-b-2 border-[#1235AA] pb-[10px] pt-2  w-[78px] text-base mt-[1px] leading-7 font-bold duration-300"
                      : "text-[#6B6B6B] w-[63px]"
                  }
                   hover:text-[#363636] hover:border-b-2 hover:border-[#1235AA] hover:pb-[15.7px] hover:pt-2  hover:font-bold  hover:w-[78px] hover:text-base duration-300`}
             >
                برند ها
                </p>
              </button>
            </Link>

            <Link href="/blog">
              <button className="cursor-pointer">
                <p
               style={pathName === "/blog" ? { color: "#363636" } : {}}
               className={`w-20 font-demiBold text-base whitespace-nowrap 
              ${
                    pathName === "/blog"
                      ? " text-[#363636] border-b-2 border-[#1235AA] pb-[10px] pt-2  w-[78px] text-base mt-[1px] leading-7 font-bold duration-300"
                      : "text-[#6B6B6B] w-[63px]"
                  }
                   hover:text-[#363636] hover:border-b-2 hover:border-[#1235AA] hover:pb-[14.5px] hover:pt-2  hover:font-bold  hover:w-[78px] hover:text-base duration-300`}
             >
                بلاگ ها
                </p>
              </button>
            </Link>

            <Link href="/aboutus">
              <button className="cursor-pointer">
                <p
                style={pathName === "/aboutus" ? { color: "#363636" } : {}}
                className={`w-20 font-demiBold text-base whitespace-nowrap 
               ${
                     pathName === "/aboutus"
                       ? " text-[#363636] border-b-2 border-[#1235AA] pb-[10px] pt-2   w-[78px] text-base mt-[1px] leading-7 font-bold duration-300"
                       : "text-[#6B6B6B] w-[63px]"
                   }
                    hover:text-[#363636] hover:border-b-2 hover:border-[#1235AA] hover:pb-[14.5px] hover:pt-2  hover:font-bold  hover:w-[78px] hover:text-base duration-300`}
              >
                 درباره ما
                </p>
              </button>
            </Link>


            <Link href="/contactus">
              <button className="cursor-pointer">
                <p
                style={pathName === "/contactus" ? { color: "#363636" } : {}}
                className={`w-20 font-demiBold text-base whitespace-nowrap 
               ${
                     pathName === "/contactus"
                       ? " text-[#363636] border-b-2 border-[#1235AA] pb-[10px] pt-2   w-[78px] text-base mt-[1px] leading-7 font-bold duration-300"
                       : "text-[#6B6B6B] w-[63px]"
                   }
                    hover:text-[#363636] hover:border-b-2 hover:border-[#1235AA] hover:pb-[14.5px] hover:pt-2  hover:font-bold  hover:w-[78px] hover:text-base duration-300`}
              >
              تماس با ما
                </p>
              </button>
            </Link>
          </div>

          <div className="">
          <label className="input input-bordered flex items-center gap-2" 
          style={{background:'#f8f8f8'}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70 text-[#A5A5A5] "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow w-[439px] h-[44px]  placeholder:text-[#A5A5A5] placeholder:text-base placeholder:font-medium"  placeholder="جستجو" />

          </label>
        </div>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Navbar