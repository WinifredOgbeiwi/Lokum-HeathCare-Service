import React from 'react'
import { RiStethoscopeLine } from 'react-icons/ri'
function HireMeList(props) {
    return (
        <>
            <div className='flex items-center space-x-3'>
                <div className=" w-[64px] h-[64px] bg-[#E8FBF2] rounded-full flex items-center justify-center">
                    <RiStethoscopeLine className=" w-8 h-8 " /></div>
                <div className='text-text-color'>
                    <h3 className='font-bold text-[1.2rem] lg:text-2xl'>{props.text}</h3>
               
                </div>
            </div>

        </>
    )
}

export default HireMeList
