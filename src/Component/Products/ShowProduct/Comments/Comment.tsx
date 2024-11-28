// import React, { Fragment } from "react";
// import CommentData from "@/Component/Products/ShowProduct/Comments/CommentData";
// import Image from "next/image";
// import LikeImage from "@/assent/Imge/Product/ProductDetail/Like.svg";
// import DisLikeImage from "@/assent/Imge/Product/ProductDetail/dislike.svg";

// const Comment = () => {
//   const Data = CommentData().Comment;
//   return (
//     <Fragment>
//       <div className="  items-center">
//         <div className="flex flex-col gap-7 items-center">
//           {Data.map((items) => (
//             <div key={items.id} className="bg-[#FAFAFA] w-[80%] p-4">
//               <div className="flex justify-between items-center">
//                 <div className="flex gap-2 items-center">
//                   <Image src={items.src} width={36} height={36} alt="" />
//                   <p className="font-medium text-sm text-[#404040]">
//                     {items.name}
//                   </p>
//                 </div>
//                 <div className="flex gap-2 items-center">
//                   <p className="font-normal text-sm text-[#494949]">
//                     {items.date}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-10 flex justify-between items-center">
//                 <div>
//                   <p className="font-medium text-sm text-[#404040]">
//                     {items.discription}
//                   </p>
//                 </div>
//                 <div className="flex gap-3 items-center">
//                   <Image
//                     src={DisLikeImage}
//                     width={24}
//                     height={24}
//                     alt=""
//                     className="cursor-pointer"
//                   />
//                   <Image
//                     src={LikeImage}
//                     width={24}
//                     height={24}
//                     alt=""
//                     className="cursor-pointer"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Comment;

import React, { Fragment } from "react";
import CommentData from "@/Component/Products/ShowProduct/Comments/CommentData";
import Image from "next/image";
import LikeImage from "@/assent/Imge/Product/ProductDetail/Like.svg";
import DisLikeImage from "@/assent/Imge/Product/ProductDetail/dislike.svg";

const Comment = () => {
  const Data = CommentData().Comment;

  const renderStars = (like) => {
    const totalStars = 5;
    const filledStars = parseInt(like);
    const emptyStars = totalStars - filledStars;

    return (
      <div className="flex gap-1">
        {Array(filledStars)
          .fill()
          .map((_, index) => (
            <svg
              key={`filled-${index}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="#FDB713" // ستاره‌های پر به رنگ طلایی
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}

        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <svg
              key={`empty-${index}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="#CBCBCB"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
      </div>
    );
  };

  return (
    <Fragment>
      <div className="items-center">
        <div className="flex flex-col gap-7 items-center">
          {Data.map((items) => (
            <div key={items.id} className="bg-[#FAFAFA] w-[80%] p-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image src={items.src} width={36} height={36} alt="" />
                  <p className="font-medium text-sm text-[#404040]">
                    {items.name}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="">{renderStars(items.like)}</div>
                  <p className="font-normal text-sm text-[#494949]">
                    {items.date}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm text-[#404040]">
                    {items.discription}
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={DisLikeImage}
                    width={24}
                    height={24}
                    alt=""
                    className="cursor-pointer"
                  />
                  <Image
                    src={LikeImage}
                    width={24}
                    height={24}
                    alt=""
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Comment;


