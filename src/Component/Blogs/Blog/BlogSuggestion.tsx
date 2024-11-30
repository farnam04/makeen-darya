import React, { Fragment } from "react";
import BlogSuggestionData from "./BlogSuggestionData";
import Image from "next/image";
import Eye from "@/assent/Imge/Blog/eye.svg";
import Clock from "@/assent/Imge/Blog/clock.svg";
import Link from "next/link";
const BlogSuggestion = () => {
  const Data = BlogSuggestionData().Blog;
  return (
    <Fragment>
      <div className=" sticky top-6 w-[394px]  h-[495px] bg-[#FDFDFD] rounded-lg py-6 px-4">
        <p className="text-base text-[#363636] font-medium">
          پیشنهاد خلیج کالا به شما
        </p>
        <div className="mt-10 px-4">
          {Data.map((items) => (
            <Link
            href="/"
              key={items.id}
              className="flex flex-col  mb-16 border-b border-b-[#D9D9D9]"
            >

              <div className="flex  mb-4 gap-9">
                <Image
                  src={items.src}
                  width={96}
                  height={96}
                  alt=""
                  className="rounded-md"
                />
                <div className="flex flex-col justify-between">
                  <p className="font-medium text-sm text-[#494949]">
                    {items.name}
                  </p>

                  <div className="flex  gap-5">
                    <div className="flex items-center gap-1">
                      <Image src={Clock} width={20} height={20} alt="" />
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BlogSuggestion;



