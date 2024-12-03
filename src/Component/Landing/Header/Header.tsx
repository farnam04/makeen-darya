import React, { Fragment } from 'react'
import Logo from '@/assent/Imge/Landing/Logo.svg'
import Image from 'next/image'
import loginButtonIcon from '@/assent/Imge/Landing/user.svg'
import ShoppingImage from '@/assent/Imge/Landing/shopping-cart.svg'
import Link from 'next/link'
const Header = () => {
  return (
    <Fragment>
        <div className='flex bg-white justify-between px-20 py-4 pb-2 '>
          <Link href="/">
           <div className='flex items-center gap-3'>
            <Image
            src={Logo}
            width={51}
            height={53}
            alt=''
            />
            <p className='text-[#363636] text-base font-medium'>
                مکین استور
            </p>
           </div>
           </Link>
           <div>
            <div className='flex items-center gap-5'>
            <div className="hidden md:block cursor-pointer ">
              <Image src={ShoppingImage} width={26} height={26} alt="" />

              </div>
            <div className="hidden md:block ">
            <button className="flex gap-2 bg-[#194BF0] rounded-xl py-2 px-4 whitespace-nowrap">
              <Image src={loginButtonIcon} width={20} height={20} alt="" />
              <p className="font-medium text-[#FFFFFF] text-sm pl-4">
                ورود / ثبت نام
              </p>
            </button>
          </div>
            </div>
           </div>
        </div>
    </Fragment>
  )
}

export default Header