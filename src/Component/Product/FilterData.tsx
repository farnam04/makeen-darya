import React, { Fragment } from "react";

function FilterData() {
  return (
    <Fragment>
      <div className="bg-white w-80 -mt-[72px] py-5 rounded-lg mr-10 h-[10%] shadow">
       
            <p className="font-medium text-[#3A3A3A] text-base mr-4" >
            فیلتر ها
            </p>
       
        <div className="flex flex-col gap-8 px-4 py-4">
          <label className="flex justify-between items-center gap-3 cursor-pointer">
            <span className="label-text font-medium text-base text-[#393939]">
              فقط کالاهای موجود
            </span>
            <input
              type="checkbox"
              className="toggle border-[#E8EDFE]   bg-[#476FF3] checked:bg-[#476FF3]  checked:[--tglbg:#E8EDFE]  hover:bg-[#476FF3]"
              defaultChecked
            />
          </label>
        </div>
      </div>
    </Fragment>
  );
}

export default FilterData;
