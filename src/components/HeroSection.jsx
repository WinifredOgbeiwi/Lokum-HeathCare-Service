import React from 'react'
import HeroPic from './images/Hero.png'
import { FaHeart } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'

function HeroSection() {
    return (
        <section className='flex justify-between bg-[#F6FDFA]'>
            <div className='mt-[202px]'>
                <h1 className='text-7xl text-text-color font-bold mb-5'>No more waiting to access a healthworker.</h1>
                <p className='font-normal text-xl text-text-color'>Access healthworkers without delay wherever and whenever</p>
                <button className='bg-[#38805D] text-white rounded-[4px] w-[280px] h-[57px] mt-[66px]'>Request Healthworker</button>
            </div>

            <div className='relative'>
                <div className='bg-[#E8FBF2] flex items-center justify-between w-[234px] h-[72px] rounded p-4 absolute top-28 left-20 '>
                    <IoIosPeople className='text-2xl' />
                    <p className='text-normal font-normal w-[153px] '>Trained Healthcare Practitional</p>
                </div>

                <div className='bg-[#E8FBF2] flex items-center justify-between w-[224px] h-[72px] rounded p-4 absolute top-40 right-[-4rem]'>
                    <FaHeart className='text-2xl' />
                    <p className='text-normal font-normal w-[153px] '>We have your best interest at heart</p>
                </div>
                <div>
                    <img src={HeroPic} alt="" className='ml-32 mt-60 w-[100rem]'/>
                </div>
            </div>
        </section>
    )
}

export default HeroSection