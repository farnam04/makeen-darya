import React, { Fragment } from "react";
import Link from "next/link";
import AboutUsData from "./AboutUsData";
import Image from "next/image";
import TikIcon from "@/assent/Imge/AboutUs/TiikBlue.svg"
import Icon24 from "@/assent/Imge/AboutUs/24Image.svg"
import TruckImage from "@/assent/Imge/AboutUs/TruckImage.svg"
import CardImage from "@/assent/Imge/AboutUs/CardImage.svg"
const AboutUs = () => {
  const Data = AboutUsData().AboutUs[0];
  return (
    <Fragment>
      <div className="mt-8 px-20 relative">
        <div className="breadcrumbs  text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className="text-[#3A3A3A] font-medium text-base"
              >
                درباره ما
              </Link>
            </li>
          </ul>
        </div>

        <div className=" px-10 my-8">
          <Image src={Data.src} width={1224} height={432} alt="" />
        </div>

        <div className="bg-[#FAFAFA] px-6 left-[123px] -mt-[3%] w-[83%] absolute  py-6  rounded-t-2xl">
          <div>
            <p className="font-medium text-base text-[#000000] leading-10">
              {Data.discription}
            </p>

            <p className="font-medium mt-10 text-base text-[#000000] leading-10">
              {Data.discription2}
            </p>

            <p className="font-medium mt-10 text-base text-[#000000] leading-10">
              {Data.discription3}
            </p>

            <p className="font-medium mt-10 text-base text-[#000000] leading-10">
              {Data.discription4}
            </p>

            <p className="font-medium mt-10 text-base text-[#000000] leading-10">
              {Data.discription5}
            </p>
          </div>


          <div className="flex justify-between mt-16 items-center px-3">
             <div className="flex flex-col justify-between items-center">
              <Image
              src={TikIcon}
              width={80}
              height={80}
              alt=""
              />
              <p className="text-center mt-3 font-medium text-base text-[#363636]">
                {Data.atribiot1}
              </p>

              <p className="text-center mt-3 font-medium text-base text-[#565656]">
                {Data.atribiotDiscription1}
              </p>
             </div>

             <div className="flex flex-col justify-between items-center">
              <Image
              src={Icon24}
              width={80}
              height={80}
              alt=""
              />
              <p className="text-center mt-3 font-medium text-base text-[#363636]">
                {Data.atribiot2}
              </p>

              <p className="text-center mt-3 font-medium text-base text-[#565656]">
                {Data.atribiotDiscription2}
              </p>
             </div>

             <div className="flex flex-col justify-between items-center">
              <Image
              src={TruckImage}
              width={80}
              height={80}
              alt=""
              />
              <p className="text-center mt-3 font-medium text-base text-[#363636]">
                {Data.atribiot3}
              </p>

              <p className="text-center mt-3 font-medium text-base text-[#565656]">
                {Data.atribiotDiscription3}
              </p>
             </div>

             <div className="flex flex-col justify-between items-center">
              <Image
              src={CardImage}
              width={80}
              height={80}
              alt=""
              />
              <p className="text-center mt-3 font-medium text-base text-[#363636]">
                {Data.atribiot4}
              </p>

              <p className="text-center mt-3 font-medium text-base text-[#565656]">
                {Data.atribiotDiscription4}
              </p>
             </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
