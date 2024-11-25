"use client";
import React, { Fragment, useState } from "react";
import ProductData from "@/component/Product/ProductData";

import Link from "next/link";
import FilterProduct from "./FilterProduct";
import FilterData from "./FilterData";
import Paginate from "./Paginate";
import ProductShow from "./ProductShow";

const Product = () => {
  const Data = ProductData().Product;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const pageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1);
  };

  
  return (
    <Fragment>
      <div className="mt-8 px-24">
        <p className="pb-6 text-base font-medium text-[#1D1D1D]">
        محصولات لوازم ناوبری
        </p>
        <div className="breadcrumbs  text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="text-[#3A3A3A] font-medium text-base"
              >
                محصولات
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <FilterProduct />
      </div>
      <div className="flex">
        <div>
          <FilterData />
        </div>
        <div className="grid grid-cols-3 mr-10 mt-10 gap-9 w-[66%]">
          <ProductShow
            currentPageData={currentPageData}
         
          />
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Paginate
          currentPageData={currentPageData}
          pageCount={pageCount}
          pageClick={pageClick}
        />
      </div>
    </Fragment>
  );
};

export default Product;
