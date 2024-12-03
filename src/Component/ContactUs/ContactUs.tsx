import React, { Fragment } from "react";
import Link from "next/link";
import SuggestionsInputs from "./SuggestionsInputs";
import Image from "next/image";
import CallIcon from "@/assent/Imge/ContactUs/call.svg"
import PostIcon from "@/assent/Imge/ContactUs/direct.svg"
import EmailIcon from "@/assent/Imge/ContactUs/sms.svg"
import LocationIcon from "@/assent/Imge/ContactUs/location.svg"
import MapImage from '@/assent/Imge/ContactUs/Map.svg'
const ContactUs = () => {
  return (
    <Fragment>
      <div className="mt-8 px-24">
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
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-between  mt-7">
          <div className="flex flex-col gap-10  items-center">
            <div className="bg-[#ffff] w-[784px] h-[50%] rounded-lg py-6 px-4 ">
              <p className="font-medium text-base text-[#363636]">
                راه های ارتباطی با ما
              </p>
              <div className="flex flex-col mt-8 gap-10">
                <div className="flex gap-3 items-center">
                  <Image src={CallIcon} width={24} height={24} alt="" />
                  <p className="font-medium text-sm text-[#353535]">
                  تلفن: 021930141
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Image src={PostIcon} width={24} height={24} alt="" />
                  <p className="font-medium text-sm text-[#353535]">
                  کد پستی: 1386167946
                  </p>
                </div>


                <div className="flex gap-3 items-center">
                  <Image src={EmailIcon} width={24} height={24} alt="" />
                  <p className="font-medium text-sm text-[#353535]">
                  ایمیل: info@khalijkala.com
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Image src={LocationIcon} width={24} height={24} alt="" />
                  <p className="font-medium text-sm text-[#353535]">
                  آدرس: تهران، کیلومتر 14 جاده مخصوص، بلوار ایران خودرو
                  </p>
                </div>
              </div>
            </div>
            <Image
          src={MapImage}
          width={784}
          height={273}
          alt=""
          />
          </div>
         
          <div>
            <SuggestionsInputs />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
