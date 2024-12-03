import React from 'react'
import Logo from '@/assent/Logo/Logo.svg'
import Image from 'next/image'

export default function Logogulf() {
  return (
    <div className='w-[130px] h-full flex items-center flex-row-reverse justify-around ' >
<Image src={Logo} alt='' className='' />
<p className='text-[16px] text-[#6B6B6B] ' >خلیج کالا</p>
    </div>
  )
}
