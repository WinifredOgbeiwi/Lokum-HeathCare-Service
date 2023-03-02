import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Logo from './images/Lokum-Logo.png'
function NavBar() {
  return (
    <>
      <nav className='flex justify-between items-center shadow-2xl h-[120px] px-5'>
        <div className='flex items-center'>
          <img src={Logo} alt="" />
          <ul className='flex gap-10 text-base tracking-wide'>
            <li><a href="/">Find Healthcareworker</a>  <MdKeyboardArrowDown/></li>
            <li>Find Patient<MdKeyboardArrowDown /></li>
            <li>Hire Healthcareworker<MdKeyboardArrowDown /></li>
          </ul>
        </div>

        <div className='flex items-center gap-6'>
          <input type="text" placeholder='Search' className='bg-[#E8FBF2]' />
          <div className='text-normal '>Healthcareworker <MdKeyboardArrowDown /></div>
          <button className='w-[123px] h-[57px] rounded-md border-2 border-[#38805D]'>Log in</button>
          <button className='w-[123px] h-[57px] bg-[#38805D] rounded-md border-2 border-[#38805D]'>Sign up</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar