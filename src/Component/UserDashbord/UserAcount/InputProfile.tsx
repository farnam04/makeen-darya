import React, { Fragment } from 'react'

const InputProfile = () => {
  return (
    <Fragment>
        <div className="grid grid-cols-2 gap-3 mt-20 " >
        <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[85%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
              نام 
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>


          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[72%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
              نام خانوادگی
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>


          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[74%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
              شماره تلفن
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>


          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[80.5%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
             ایمیل
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>


          <div className="relative w-full md:w-auto">
            <label className="absolute -top-2 z-10 left-[80%] px-3 dark:bg-[#4F5D74] dark:text-white bg-[#ffff] pt-2">
            کد ملی
            </label>
            <input
              type="text"
              className="border focus:outline-none focus:ring-2 focus:ring-[#1235AA] w-96 pr-4 md:w-96 h-14 border-[#CBCBCB] dark:bg-[#4F5D74] rounded-md relative m-3"
            />
          </div>


         

        </div>
    </Fragment>
  )
}

export default InputProfile