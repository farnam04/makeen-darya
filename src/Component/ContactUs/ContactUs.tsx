import React, { Fragment } from "react";
import Link from "next/link";
import SuggestionsInputs from "./SuggestionsInputs";
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

        <div className="flex justify-between items-center">
           <div className="flex flex-col gap-10 items-center">

           </div>
           <div>
            <SuggestionsInputs/>
           </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
