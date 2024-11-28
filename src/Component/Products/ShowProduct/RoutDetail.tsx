import Image from "next/image";
import React, { Fragment } from "react";
import Comment from "./Comments/Comment";
const RoutDetail = ({product}) => {
  return (
    <Fragment>
      <div role="tablist" className="tabs tabs-bordered  ">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="توضیحات"
        />
        <div role="tabpanel" className="tab-content p-10">
         {product.discription}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab whitespace-nowrap"
          aria-label="مشخصات فنی"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
         {product.TechnicalSpecifications}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label=" نظرات"
        />
        <div role="tabpanel" className="tab-content p-10">
         <Comment/>
        </div>
      </div>
    </Fragment>
  );
};

export default RoutDetail;


