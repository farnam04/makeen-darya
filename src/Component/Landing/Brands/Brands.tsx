import React, { Fragment } from 'react'
import Image from 'next/image'
import BrandsRout from '@/assent/Imge/Landing/BrandsRout.svg'
import BrandData from './BrandsData'
import Link from 'next/link'
const Brands = () => {
    const Data= BrandData().Brand
  return (
    <Fragment>
      <div className=" relative  my-10">
        <div className="py-4">
          <Image src={BrandsRout} width={1440} height={58} alt="" />
        </div>
           <div className='flex px-20 py-10 justify-between items-center '>
           {Data.map((items)=>(
            <Link key={items.id} href="/">
               <Image
               src={items.src}
               width={220}
               height={220}
               alt=''
               />
               
               
            </Link>
           ))}
           </div>
      </div>
    </Fragment>
  )
}

export default Brands