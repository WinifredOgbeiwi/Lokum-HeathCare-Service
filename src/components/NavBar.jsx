import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { FaBars, FaTimes } from "react-icons/fa"
import Logo from './images/Lokum-Logo.png'
function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className='flex justify-between items-center shadow-2xl h-[120px] pr-6'>
        <div className='flex items-center'>
          <img src={Logo} alt="" />
          <ul className='hidden lg:flex gap-10 text-[12px] tracking-wide '>

            <div>
              <li className=' flex gap-1 mb-2 cursor-pointer' >
                Find Healthcareworker
                <MdKeyboardArrowDown className='mt-1' /></li>
            </div>
            <li className='flex gap-1 cursor-pointer'>
              Find Patient
              <MdKeyboardArrowDown className='mt-1' />
            </li>
            <li className='flex gap-1 cursor-pointer'>
              Hire Healthcareworker
              <MdKeyboardArrowDown className='mt-1' />
            </li>
          </ul>
        </div>

        <div className='hidden xl:flex items-center gap-6 text-sm'>
          <div className='flex flex-row text-sm md:text-base relative  overflow-hidden rounded-lg'>
            <FiSearch className=' text-md absolute top-[17px] left-3' />
            <input type="text" placeholder='Search' className='w-[12rem] md:w-[25rem] lg:w-[10rem] h-12  font-light  px-10 text-start bg-[#E8FBF2] text-black placeholder-slate-900 placeholder:text-sm' />
            <div className='border-l-2 border-black bg-[#E8FBF2]
        w-[5rem] md:w-[10rem] h-12 flex items-center justify-center text-xs gap-1 text-black' >Healthcareworker <MdKeyboardArrowDown className='mt-1' /></div>
          </div>

          <button className='w-[100px] h-[45px] rounded-md border-2 border-[#38805D] text-[#38805D]'>Log in</button>
          <button className='w-[100px] h-[45px] bg-[#38805D] rounded-md border-2 border-[#38805D] text-white'>Sign up</button>
        </div>

        <div
          className='cursor-pointer pr-4 z-10 text-black xl:hidden z-[100]'
          onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* links for responsive navbar */}
        {nav && (
          <>
        
            <div className='flex flex-col items-center absolute top-0 z-50 right-0  w-80 h-screen bg-[#E8FBF2] text-white xl:hidden' onClick={() => setNav(!nav)}>
             
              <ul className='lg:hidden flex flex-col gap-10 text-base text-[#38805D] tracking-wide mt-20 '>

                <div>
                  <li className=' flex gap-1 mb-2' >
                    Find Healthcareworker
                    <MdKeyboardArrowDown className='mt-1' /> </li>
                </div>
                <li className='flex gap-1'>
                  Find Patient
                  <MdKeyboardArrowDown className='mt-1' />
                </li>
                <li className='flex gap-1'>
                  Hire Healthcareworker
                  <MdKeyboardArrowDown className='mt-1' />
                </li>
              </ul>
             
              <button className=' rounded-md border-2 text-[#38805D] hover:bg-[#38805D]  hover:text-white border-[#38805D] py-3 px-10 mt-20'>Log in</button>
              <button className='rounded-md border-2 py-3 px-10 text-[#38805D] mt-5 border-[#38805D] hover:bg-[#38805D] hover:text-white'>Sign up</button>

              <div className='flex flex-col text-sm md:text-base relative overflow-hidden rounded-lg'>
                <FiSearch className=' text-xl absolute top-[32px] left-3 text-black' />
                <input type="text" placeholder='Search' className='w-[15rem] h-12  font-light  px-10 text-start shadow-xl text-black placeholder-slate-900 mt-5' />
                <div className='border-t-2 border-black shadow-xl
       w-[15rem] h-12 flex items-center justify-center text-sm gap-1 text-black bg-white' >Healthcareworker <MdKeyboardArrowDown className='mt-1' /></div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  )
}

export default NavBar;