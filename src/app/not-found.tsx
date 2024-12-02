import React, { Fragment } from "react";
import Navbar from "@/Component/Landing/Navbar/Navbar";
import Image from "next/image";
import ErrorImage from "@/assent/Imge/NotFoundPage.svg";

import Header from "@/Component/Landing/Header/Header";
import Link from "next/link";
const notFound = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />

      <div className="flex flex-col mt-10 gap-8 items-center justify-center">
        <Image src={ErrorImage} width={610} height={539} alt="" />
        <Link href="/" passHref>
          <button className="flex justify-center items-center text-[#FAFAFA]  gap-2 rounded-lg   bg-[#194BF0] py-2 px-20">
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default notFound;
