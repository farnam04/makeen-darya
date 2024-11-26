import React, { Fragment, useState } from "react";
import ArrowUp from "@/assent/Imge/Product/arrow-up.svg";
import Image from "next/image";
const FilterDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("برند ها");
  const brands = ["KIRBY MORGAN", "SEACRAFT", "APEKS", "DAN", "ALIKAN"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (brand) => {
    setSelectedBrand(brand);
    setIsOpen(false);
  };

  return (
    <Fragment>
      <div className="relative   w-80 mr-10  mt-10">
        <div
          onClick={toggleDropdown}
          className="flex justify-between  items-center px-4 py-3 bg-white rounded-lg shadow cursor-pointer"
        >
          <span className="font-medium text-base text-[#363636]">
            {selectedBrand}
          </span>

          <Image
            src={ArrowUp}
            width={24}
            height={24}
            alt=""
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {isOpen && (
          <div className="absolute w-full mt-2 bg-white   rounded-lg shadow">
            {brands.map((brand, index) => (
              <div
                key={index}
                onClick={() => handleSelect(brand)}
                className={`px-4 py-2 rounded-lg hover:border-r-2 hover:border-r-[#1744DA] cursor-pointer hover:bg-blue-100 ${
                  selectedBrand === brand
                    ? "bg-blue-100 border-r-2 :border-r-[#1744DA]"
                    : ""
                }`}
              >
                {brand}
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default FilterDropDown;
