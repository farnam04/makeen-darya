import React, { Fragment } from "react";
import Link from "next/link";
import BlogData from "@/Component/Blogs/BlogShow/BlogShowData";
import Image from "next/image";
import CalenderIcon from "@/assent/Imge/Blog/calendar-2.svg";
import ClockIcon from "@/assent/Imge/Blog/clock.svg";
import EyeIcon from "@/assent/Imge/Blog/eye.svg";
const BlogShow = () => {
  const Data = BlogData().Data[0];
  return (
    <Fragment>
      <div className="mt-8 px-20">
        <div className="breadcrumbs  text-base">
          <ul>
            <li>
              <Link href="/" className="text-[#727272] font-medium text-base">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[#727272] font-medium text-base"
              >
                بلاگ ها
              </Link>
            </li>

            <li>
              <Link
                href="/blog/detailblog"
                className="text-[#3A3A3A] font-medium text-base"
              >
                جزئیات مقاله
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <div>
            <p className="font-medium text-2xl text-[#363636]">{Data.name}</p>
            <div className="flex mt-10 justify-between">
              <Image src={Data.src} width={916} height={417} alt="" />
              <div className="w-[276px] h-[219px] bg-[#FAFAFA] py-5 px-2">
                <p className="font-medium text-base text-[#363636]">
                  جزئیات مقاله
                </p>
                <div className="flex justify-between border-b border-b-[#909090] py-3">
                  <div className="flex  gap-3 items-center">
                    <Image src={CalenderIcon} width={20} height={20} alt="" />
                    <p className="font-normal text-sm text-[#404040]">
                      تاریخ انتشار
                    </p>
                  </div>
                  <p className="font-normal text-sm text-[#565656]">
                    {Data.date}
                  </p>
                </div>

                <div className="flex justify-between border-b border-b-[#909090] py-3">
                  <div className="flex gap-3 items-center">
                    <Image src={ClockIcon} width={20} height={20} alt="" />
                    <p className="font-normal text-sm text-[#404040]">
                      زمان مطالعه
                    </p>
                  </div>
                  <p className="font-normal text-sm text-[#565656]">
                    {Data.time}
                  </p>
                </div>

                <div className="flex justify-between border-b border-b-[#909090] py-3">
                  <div className="flex gap-3 items-center">
                    <Image src={EyeIcon} width={20} height={20} alt="" />
                    <p className="font-normal text-sm text-[#404040]">
                      تعداد بازدید
                    </p>
                  </div>
                  <p className="font-normal text-sm text-[#565656]">
                    {Data.seen}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="py-5 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.discriptionMain1}
              </p>

              <p className="py-5 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.discriptionMain2}
              </p>

              <p className="font-medium text-2xl mt-10 mb-5 text-[#363636]">
                {Data.name2}
              </p>

              <p className="py-5 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.discription1}
              </p>

              <div className="flex gap-6 ">
                <div className="flex w-[35%] flex-col">
                  <p className="py-5 font-medium text-base text-[#494949]  leading-10">
                    {Data.discription2}
                  </p>

                  <p className="py-5 font-medium text-base text-[#494949]  leading-10">
                    {Data.discription3}
                  </p>
                </div>
                <Image
                  src={Data.src2}
                  width={410}
                  height={526}
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="my-8">
              <p className="font-medium text-2xl text-[#363636]">
                {Data.name3}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood1}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood2}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood3}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood4}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood5}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood6}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood7}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood8}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood9}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood10}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood11}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood12}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood13}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.Neighborhood14}
              </p>
            </div>

            <div className="flex justify-between w-[70%]">
              <Image src={Data.src2} width={444} height={448} alt="" />
              <Image src={Data.src2} width={444} height={448} alt="" />
            </div>

            <div className="my-8">
              <p className="font-medium text-2xl text-[#363636]">
                {Data.nameNature}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature1}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature2}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature3}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature4}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature5}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature6}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature7}
              </p>

              <p className="py-3 font-medium text-base text-[#494949] w-[70%] leading-10">
                {Data.nature8}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogShow;
