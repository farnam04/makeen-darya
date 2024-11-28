import Image from "next/image";
import React, { Fragment } from "react";
import UserImage from '@/assent/Imge/Product/ProductDetail/user.svg'
import LikeImage from '@/assent/Imge/Product/ProductDetail/like.svg'
import DisLikeImage from '@/assent/Imge/Product/ProductDetail/DisLike.svg'
const ProductComment = ({ ProductDetail }) => {
  return (
    <Fragment>
      <p className="text-[#2E8B57] font-demiBold text-lg">نظرات</p>
      {ProductDetail.map((items) => (
        <div key={items.id} className=" mt-20 border-b pb-2 border-[#E9E9E9]">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-3">
                <Image
                src={UserImage}
                width={24}
                height={24}
                alt=""
                />
                <p className="font-medium text-lg text-[#3A3A3A]">
                نام  :
                {"  "}      {items.UserName}
                </p>
               </div>
               <p className="font-regular text-base text-[#A5A5A5]">
                
                   {items.dateComment}
               </p>
            </div>

            <div className="flex justify-between pb-5  mt-10 items-center">
              
                <p className="font-regular text-base text-[#A5A5A5]">
                {items.comment}
                </p>
             
              <div className="flex gap-8 items-center">
                   <div className="flex flex-col items-center">
                     <Image
                     src={LikeImage}
                     width={24}
                     height={24}
                     alt="like"
                     />
                     <p className="font-regular text-sm text-[#A5A5A5]">
                        {items.Like}
                     </p>
                   </div>

                   <div className="flex flex-col items-center">
                     <Image
                     src={DisLikeImage}
                     width={24}
                     height={24}
                     alt="like"
                     />
                     <p className="font-regular text-sm text-[#A5A5A5]">
                        {items.disLike}
                     </p>
                   </div>
              </div>
            </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ProductComment;
