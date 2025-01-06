'use client'
import React from 'react'
import PBmostsales from './PBmostsales'
import PBnewuser from './PBnewuser'
import Static from './Static'
import Weeklysale from './Weeklysale'

export default function Mainpage() {
  return (
    <div className='w-full h-full  flex flex-col items-center bg-[#fafafa] ' >
<div className={`w-[97%] h-[300px]  flex items-center justify-around `} >
    <PBmostsales/>
    <PBnewuser/>
</div>
<div className="w-[97%] h-[200px]  flex items-center justify-around  " >
<Static/>
</div>
<div className=' w-[97%] h-[320px] mt-[90px] ' >
<Weeklysale/>
</div>
    </div>
  )
}
