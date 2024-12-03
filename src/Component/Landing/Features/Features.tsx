import React, { Fragment } from "react";
import Image from "next/image";
import TikIcon from "@/assent/Imge/AboutUs/TiikBlue.svg";
import Icon24 from "@/assent/Imge/AboutUs/24Image.svg";
import TruckImage from "@/assent/Imge/AboutUs/TruckImage.svg";
import CardImage from "@/assent/Imge/AboutUs/CardImage.svg";
import FeaturesData from "./FeaturesData";
const Features = () => {
  const Data = FeaturesData().Features[0];
  return (
    <Fragment>
      <div className="bg-[#F6F6F6] rounded-t-xl px-32 py-20">
        <div className="flex justify-between mt-16 items-center px-3">
          <div className="flex flex-col justify-between items-center">
            <Image src={TikIcon} width={80} height={80} alt="" />
            <p className="text-center mt-3 font-medium text-base text-[#363636]">
              {Data.atribiot1}
            </p>

            <p className="text-center mt-3 font-medium text-base text-[#565656]">
              {Data.atribiotDiscription1}
            </p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <Image src={Icon24} width={80} height={80} alt="" />
            <p className="text-center mt-3 font-medium text-base text-[#363636]">
              {Data.atribiot2}
            </p>

            <p className="text-center mt-3 font-medium text-base text-[#565656]">
              {Data.atribiotDiscription2}
            </p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <Image src={TruckImage} width={80} height={80} alt="" />
            <p className="text-center mt-3 font-medium text-base text-[#363636]">
              {Data.atribiot3}
            </p>

            <p className="text-center mt-3 w-96 font-medium text-base text-[#565656]">
              {Data.atribiotDiscription3}
            </p>
          </div>

          <div className="flex flex-col justify-between items-center">
            <Image src={CardImage} width={80} height={80} alt="" />
            <p className="text-center mt-3 font-medium text-base text-[#363636]">
              {Data.atribiot4}
            </p>

            <p className="text-center mt-3 font-medium text-base text-[#565656]">
              {Data.atribiotDiscription4}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
