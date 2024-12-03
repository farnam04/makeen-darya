import React, { Fragment } from "react";

import BlogRout from "@/assent/Imge/Landing/BlogRout.svg";
import Link from "next/link";
import Image from "next/image";
import BlogsData from "./BlogsData";
import Eye from "@/assent/Imge/Blog/eye.svg";
import Clock from "@/assent/Imge/Blog/clock.svg";
import Arrow from "@/assent/Imge/Blog/arrow-left.svg";
const Blogs = () => {
  const Data = BlogsData().Blog;

  const Data2 = BlogsData().BlogMain[0];
  return (
    <Fragment>
      <div className=" relative my-10">
        <div className="py-4">
          <Image src={BlogRout} width={1440} height={58} alt="" />
        </div>

        <div className="flex items-center px-24 justify-between">
          <Link href="/blog/detailblog">
            <div className="  relative w-[532px] h-[518px]  border border-[#E1E1E1]   p-4   rounded-xl  shadow transition-transform duration-300 hover:scale-105 group">
              <Image src={Data2.src} width={500} height={295} alt="" />
              <p className="text-[#363636] mt-2 text-lg font-normal">
                {Data2.name}
              </p>

              <p className="text-[#565656] w-96 mt-3 text-sm font-normal">
                {Data2.discription}
              </p>
              <div className="flex justify-between mt-3 items-center">
                <div className="flex gap-5">
                  <div className="flex items-center gap-1">
                    <Image src={Clock} width={20} height={20} alt="" />
                    <p className="font-medium text-[#909090] text-xs">
                      {Data2.time} دقیقه
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Image src={Eye} width={20} height={20} alt="" />
                    <p className="font-medium text-[#909090] text-xs">
                      {Data2.seen}{" "}
                    </p>
                  </div>
                </div>
                <Link href="/blog/detailblog">
                  <button className="bg-[#1235AA] px-4 py-2 flex gap-4 items-center">
                    <p className="font-medium text-sm text-[#FAFAFA]">
                      مطالعه بیشتر
                    </p>
                    <Image src={Arrow} width={20} height={20} alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </Link>

          <div>
            {Data.map((items) => (
              <div
                className="  relative   px-4   rounded-xl  shadow transition-transform duration-300 hover:scale-105 group"
                key={items.id}
              >
                <Link href="/blog/detailblog">
                  <div className="flex flex-col my-10 gap-10 py-3   bg-[#FAFAFA]">
                    <div className="flex gap-10 ">
                      <Image src={items.src} width={205} height={209} alt="" />
                      <div className="mt-10">
                        <p className="text-[#363636] text-lg font-normal">
                          {items.name}
                        </p>

                        <p className="text-[#565656] w-96 mt-3 text-sm font-normal">
                          {items.discription}
                        </p>
                        <div className="flex justify-between mt-8 items-center">
                          <div className="flex gap-5">
                            <div className="flex items-center gap-1">
                              <Image
                                src={Clock}
                                width={20}
                                height={20}
                                alt=""
                              />
                              <p className="font-medium text-[#909090] text-xs">
                                {items.time} دقیقه
                              </p>
                            </div>

                            <div className="flex items-center gap-1">
                              <Image src={Eye} width={20} height={20} alt="" />
                              <p className="font-medium text-[#909090] text-xs">
                                {items.seen}{" "}
                              </p>
                            </div>
                          </div>

                          <Link href="/blog/detailblog">
                            <button className="bg-[#1235AA] px-4 py-2 flex gap-4 items-center">
                              <p className="font-medium text-sm text-[#FAFAFA]">
                                مطالعه بیشتر
                              </p>
                              <Image
                                src={Arrow}
                                width={20}
                                height={20}
                                alt=""
                              />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blogs;
