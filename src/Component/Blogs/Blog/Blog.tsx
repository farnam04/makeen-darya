"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BlogsData from "./BlogsData";
import Eye from "@/assent/Imge/Blog/eye.svg";
import Clock from "@/assent/Imge/Blog/clock.svg";
import Arrow from "@/assent/Imge/Blog/arrow-left.svg";
import Paginate from "@/Component/Products/Product/Paginate";
import BlogSuggestion from "./BlogSuggestion";
const Blog = () => {
  const Data = BlogsData().Blog;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };
  return (
    <Fragment>
      <div className="mt-8 px-24">
        <div className="breadcrumbs  text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[#3A3A3A] font-medium text-base"
              >
                بلاگ ها
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between ">
          <div>
            {currentPageData.map((items) => (
              <div
                className="  relative  px-4   rounded-xl  shadow transition-transform duration-300 hover:scale-105 group"
                key={items.id}
              >
                <div className="flex flex-col my-10 gap-10 py-3   bg-[#FAFAFA]">
                  <div className="flex gap-10 ">
                    <Image src={items.src} width={352} height={231} alt="" />
                    <div className="mt-10">
                      <p className="text-[#363636] text-lg font-normal">
                        {items.name}
                      </p>

                      <p className="text-[#565656] w-96 mt-3 text-base font-normal">
                        {items.discription}
                      </p>
                      <div className="flex justify-between mt-8 items-center">
                        <div className="flex gap-5">
                          <div className="flex items-center gap-1">
                            <Image src={Clock} width={20} height={20} alt="" />
                            <p className="font-medium text-[#909090] text-xs">
                              {items.time} دقیقه
                            </p>
                          </div>

                          <div className="flex items-center gap-1">
                            <Image src={Eye} width={20} height={20} alt="" />
                            <p className="font-medium text-[#909090] text-xs">
                              {items.seen}{" "}
                            </p>
                          </div>
                        </div>

                        <Link href="/">
                          <button className="bg-[#1235AA] px-4 py-2 flex gap-4 items-center">
                            <p className="font-medium text-sm text-[#FAFAFA]">
                              مطالعه بیشتر
                            </p>
                            <Image src={Arrow} width={20} height={20} alt="" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <BlogSuggestion/>
          </div>
        </div>
      </div>
      <div className="mt-10  w-[57%] mr-[6%]  ">
        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />
      </div>
    </Fragment>
  );
};

export default Blog;
