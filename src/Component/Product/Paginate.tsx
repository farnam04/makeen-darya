import React from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
// import chevronRightImage from "@/assent/Imge/Product/chevronRightImage.svg";
// import chevronLeftImage from "@/assent/Imge/Product/chevronLeftImage.svg";

interface PaginateProps {
  pageClick: (selectedItem: { selected: number }) => void;
  currentPageData: any[];
  pageCount: number;
}

const Paginate: React.FC<PaginateProps> = ({
  pageClick,
  currentPageData,
  pageCount,
}) => {
  const PersianDigit = (num: number | string): string => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return num
      .toString()
      .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  const reverseString = (str: string): string =>
    str.split("").reverse().join("");
  return (
    <div className="bg-inherit -mt-[5%] " style={{ direction: "rtl" }}>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "inherit",
          padding: "10px 0",
          display: "flex",
          marginRight: "32rem",
        }}
      >
        <ReactPaginate
          previousLabel={
            <div className="flex items-center justify-center w-8 h-8  bg-[#D6EDE1]   rounded-xl cursor-pointer hover:text-[#2E8B57] hover:bg-[#2E8B57]">
              {/* <Image
                src={chevronRightImage}
                width={48}
                height={48}
                alt="chevronRightImage"
              /> */}
              hi
            </div>
          }
          nextLabel={
            <div className="flex items-center justify-center w-8 h-8  bg-[#D6EDE1]   rounded-xl cursor-pointer hover:text-[#2E8B57] hover:bg-[#2E8B57]">
              {/* <Image
                src={chevronLeftImage}
                width={48}
                height={48}
                alt="chevronRightImage"
              /> */}

              by
            </div>
          }
          breakLabel={reverseString(PersianDigit("..."))}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          onPageChange={pageClick}
          containerClassName={"flex justify-center mt-7"}
          pageClassName={"mx-1 mt-7 rounded-xl"}
          previousLinkClassName={
            "px-8 py-1 !border-none !outline-none hover:border-none focus:!border-none"
          }
          nextClassName={"mx-2"}
          nextLinkClassName={
            "px-3 py-1 !border-none !outline-none hover:!border-none focus:!border-none rounded "
          }
          breakClassName={"mx-2"}
          breakLinkClassName={
            "px-3 py-1 !border-none !outline-none hover:!border-none focus:!border-none rounded"
          }
          activeClassName={"text-black dark:text-white font-bold"}
          pageLinkClassName={
            "px-[12px] bg-[#D6EDE1] py-[4px]   rounded-xl cursor-pointer hover:text-white hover:bg-[#2E8B57]"
          }
          renderOnZeroPageCount={null}
          pageLabelBuilder={(page) => reverseString(PersianDigit(page))}
        />
      </div>
    </div>
  );
};

export default Paginate;
