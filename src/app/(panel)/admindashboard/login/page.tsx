import React, { Fragment } from 'react'
import Image from 'next/image'
import SidebarImage from "@/assent/Imge/LoginPanelAdmin/Sidebarloginpanel.svg"
import FormLogin from '@/component/AdminDashboard/LoginDashboard/FormLogin'

export default function page() {
    return (
        <Fragment >
            <div className='flex flex-row-reverse w-full h-screen items-center justify-between ' >
                <div className='w-[527px] h-full flex ' >
                    <Image src={SidebarImage} alt='' className=' h-screen w-full  ' />
                </div>
                <div className='w-3/5  h-[700px] flex justify-center ' >
                    <FormLogin />
                </div>
            </div>
        </Fragment>
    )
}
