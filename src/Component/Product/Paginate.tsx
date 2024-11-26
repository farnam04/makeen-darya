// import React from "react";
// import ReactPaginate from "react-paginate";
// import chevronRightImage from "@/assent/Imge/Product/chevronRightImage.svg";
// import chevronLeftImage from "@/assent/Imge/Product/chevronLeftImage.svg";
// import Image from "next/image";
// interface PaginateProps {
//   pageClick: (selectedItem: { selected: number }) => void;
//   currentPageData: any[];
//   pageCount: number;
// }

// const Paginate: React.FC<PaginateProps> = ({
//   pageClick,
//   currentPageData,
//   pageCount,
// }) => {
//   const PersianDigit = (num: number | string): string => {
//     const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
//     return num
//       .toString()
//       .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
//   };

//   const reverseString = (str: string): string =>
//     str.split("").reverse().join("");

//   return (
//     <div
//       className="bg-white  mt-8   "
//       style={{ direction: "rtl", borderRadius: "400px" }}
//     >
//       <div
//         className=" flex justify-between items-center bg-inherit   "
//         style={{
//           position: "relative",
//           bottom: 0,
//           backgroundColor: "inherit",
//           padding: "10px 0",
//           display: "flex",

//           justifyContent: "center",
//         }}
//       >
//         <ReactPaginate
//           className=" flex justify-between items-center bg-inherit   "
//           previousLabel={
//             <div className="flex items-center justify-center px-4 text-[#000] hover:text-[#000] cursor-pointer">
//               <Image
//                 src={chevronRightImage}
//                 width={24}
//                 height={24}
//                 alt="chevronRightImage"
//               />
//               <p className="font-medium text-base text-[#404040]">صفحه قبل</p>
//             </div>
//           }
//           nextLabel={
//             <div className="flex items-center justify-center px-4 text-[#000] hover:text-[#000] cursor-pointer">
//               <p className="font-medium text-base text-[#404040]">صفحه بعد</p>
//               <Image
//                 src={chevronLeftImage}
//                 width={24}
//                 height={24}
//                 alt="chevronRightImage"
//               />
//             </div>
//           }
//           breakLabel={
//             <span className="px-2 text-[#000]">
//               {reverseString(PersianDigit("..."))}
//             </span>
//           }
//           pageCount={pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={pageClick}
//           containerClassName={"flex items-center justify-between"}
//           pageClassName={"mx-1"}
//           pageLinkClassName={
//             "px-3 py-0 text-[#000] active:text-[#ffff]  rounded cursor-pointer hover:bg-[#194BF0] hover:text-white"
//           }
//           activeClassName={
//             "bg-[#194BF0]  py-1 text-white font-bold border-none"
//           }
//           breakClassName={"mx-2"}
//           breakLinkClassName={"px-3 py-1 text-[#000]"}
//           renderOnZeroPageCount={null}
//           pageLabelBuilder={(page) => reverseString(PersianDigit(page))}
//         />
//       </div>
//     </div>
//   );
// };

// export default Paginate;



import React from "react";
import ReactPaginate from "react-paginate";
import chevronRightImage from "@/assent/Imge/Product/chevronRightImage.svg";
import chevronLeftImage from "@/assent/Imge/Product/chevronLeftImage.svg";
import Image from "next/image";

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
    <div
      className="bg-white mt-8"
      style={{ direction: "rtl", borderRadius: "400px" }}
    >
      <div
        className="flex justify-between items-center bg-inherit"
        style={{
          position: "relative",
          bottom: 0,
          backgroundColor: "inherit",
          padding: "10px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ReactPaginate
          previousLabel={
            <div className="flex items-center justify-center px-4 text-[#000] hover:text-[#000] cursor-pointer">
              <Image
                src={chevronRightImage}
                width={24}
                height={24}
                alt="chevronRightImage"
              />
              <p className="font-medium text-base text-[#404040]">صفحه قبل</p>
            </div>
          }
          nextLabel={
            <div className="flex items-center justify-center px-4 text-[#000] hover:text-[#000] cursor-pointer">
              <p className="font-medium text-base text-[#404040]">صفحه بعد</p>
              <Image
                src={chevronLeftImage}
                width={24}
                height={24}
                alt="chevronLeftImage"
              />
            </div>
          }
          breakLabel={
            <span className="px-2 text-[#000]">
              {reverseString(PersianDigit("..."))}
            </span>
          }
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={pageClick}
          containerClassName={"flex items-center justify-between"}
          pageClassName={"mx-1"}
          pageLinkClassName={
            "px-3 py-1 text-black rounded cursor-pointer hover:bg-[#194BF0] hover:text-white"
          } // استایل لینک‌های غیرفعال
          activeClassName={
            "bg-[#194BF0] text-white py-1 font-bold border-none"
          } // استایل لینک صفحه فعال
          breakClassName={"mx-2"}
          breakLinkClassName={"px-3 py-1 text-[#000]"}
          renderOnZeroPageCount={null}
          pageLabelBuilder={(page) => reverseString(PersianDigit(page))}
        />
      </div>
    </div>
  );
};

export default Paginate;
