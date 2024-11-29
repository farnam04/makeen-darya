import React, { Fragment } from "react";
import Image from "next/image";
import Logo from "@/assent/Imge/Landing/Logo.svg";
import Link from "next/link";
import CallIcon from "@/assent/Imge/Product/calling.svg";
import smsIcon from "@/assent/Imge/Product/sms.svg";
import locationIcon from "@/assent/Imge/Product/location.svg";
import Enamad from "@/assent/Imge/Product/Enamad.svg";
import Enamad2 from "@/assent/Imge/Product/Enamad2.svg";
import FaceBook from '@/assent/Imge/Product/facebook.svg'
import Insta from '@/assent/Imge/Product/insta.svg'
import Goggle from '@/assent/Imge/Product/Goggle.svg'
const Footer = () => {
  return (
    <Fragment>
      <div className="px-20 border-b border-b-[#ADADAD] py-10 mt-20 bg-[#FAFAFA]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <Image src={Logo} width={51} height={53} alt="" />
              <p className="text-[#363636] text-base font-medium">مکین استور</p>
            </div>
            <p className="font-medium w-80 text-base text-[#404040]">
              مکین استور کالا با رویکرد اعتماد به مشتری، با در اختیار داشتن
              بزرگترین ناوگان تجهیزات دریایی متشکل از انواع کالا های اقتصادی تا
              تجاری در سراسر کشور آماده خدمات رسانی به مشتریان است.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <p className="text-base font-medium text-[#404040]">دسترسی سریع</p>
            <Link href="/">
              <p className="text-base font-medium text-[#404040]">صفحه اصلی</p>
            </Link>

            <Link href="/">
              <p className="text-base font-medium text-[#404040]">بلاگ ها</p>
            </Link>

            <Link href="/">
              <p className="text-base font-medium text-[#404040]">درباره ما</p>
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            <p className="text-base font-medium text-[#404040]">ارتباط با ما</p>
            <Link className="flex items-center gap-3" href="/">
              <Image src={CallIcon} width={24} height={24} alt="" />
              <p className="text-base font-medium text-[#404040]">
                021-22930141
              </p>
            </Link>

            <Link className="flex items-center gap-3" href="/">
              <Image src={smsIcon} width={24} height={24} alt="" />
              <p className="text-base font-medium text-[#404040]">
                Autorent@gmail.com
              </p>
            </Link>

            <Link className="flex items-center gap-3" href="/">
              <Image src={locationIcon} width={24} height={24} alt="" />
              <p className="text-base font-medium text-[#404040]">
                تهران - خیابان ولیعصر - بلوار میرداماد
              </p>
            </Link>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex gap-20 items-center">
              <Image src={Enamad} width={89} height={89} alt="" />

              <Image src={Enamad2} width={94} height={89} alt="" />
            </div>

            <div className="flex gap-4 justify-center items-center">
              <Image src={Goggle} width={45} height={45} alt="" />

              <Image src={FaceBook} width={45} height={45} alt="" />

              <Image src={Insta} width={45} height={45} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
