import React, { Fragment } from "react";

const ProductFeature = ({ product }) => {
  return (
    <Fragment>
      <p className="text-[#2E8B57] font-demiBold text-lg">ویژگی محصول</p>
      <div className=" flex gap-10 mt-3 items-center">
        <p className="font-medium text-lg  text-[#727272]">نام برند :</p>
        <p className="font-medium text-lg  text-[#3A3A3A]">{
            product.OuterMaterial
            }</p>
      </div>

      <div className=" flex gap-10 mt-6 items-center">
        <p className="font-medium text-lg  text-[#727272]">جنس کف چادر :</p>
        <p className="font-medium text-lg  text-[#3A3A3A]">{
            product.OuterMaterial
            }</p>
      </div>

      <div className=" flex gap-10 mt-6 items-center">
        <p className="font-medium text-lg  text-[#727272]">جنس پوش داخلی : </p>
        <p className="font-medium text-lg  text-[#3A3A3A]">{
            product.TentFloorMaterial
            }</p>
      </div>


      <div className=" flex gap-10 mt-6 items-center">
        <p className="font-medium text-lg  text-[#727272]">وزن (به گرم) :</p>
        <p className="font-medium text-lg  text-[#3A3A3A]">{
            product.weight
            }</p>
      </div>
    </Fragment>
  );
};

export default ProductFeature;
