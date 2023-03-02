import React from 'react'
import Logo from '../images/Lokum-Logo.png'

import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import links from './linkData'
function Footer() {

  return (
    <section>
      <div className='flex flex-col lg:flex-row items-center justify-start gap-40 pt-20 text-base md:text-2xl lg:text-base'>
        <img src={Logo} alt="Medfile Logo" className='mt-[-16rem]' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>


          {links.map(({ id, heading, list }) => {
            return (
              <>
                <div key={id}>
                  <div className='text-2xl font-semibold'>
                    {heading}</div>

                  <div className='flex flex-col gap-5 mt-10 '>
                    {list.map((listItem, i) => <p key={i} className='text-base hover:text-[#38805D]'>{listItem} </p>)}
                  </div>
                </div>
              </>
            )
          })}
          <div>
            <div className='text-2xl font-semibold mb-10'>Contact us</div>
            <form action="#" className='flex flex-col'>
              <label htmlFor="" className='text-sm font-normal mb-1'>Your Name</label>
              <input type="text" placeholder='Name' className='placeholder:text-sm placeholder:font-normal  border-[1.5px] rounded-lg py-2 px-7 border-[#060E0A]  bg-[#F6FDFA] ' />
            </form>

            <form action="#" className='flex flex-col'>
              <label htmlFor="" className='text-sm font-normal mt-5 mb-1'>Email Address</label>
              <input type="text" placeholder='Email Address' className='placeholder:text-sm placeholder:font-normal  border-[1.5px] rounded-lg py-2 px-7 border-[#060E0A]  bg-[#F6FDFA] ' />
            </form>

            <form action="#" className='flex flex-col'>
              <label htmlFor="" className='text-sm font-normal mt-5 mb-1'>Message</label>
              <input type="text" placeholder='Enter message' className='placeholder:text-sm placeholder:font-normal  border-[1.5px] rounded-lg py-2 px-7 border-[#060E0A]  bg-[#F6FDFA] ' />
            </form>

            <button className='placeholder:text-sm py-3 px-7 border-[#060E0A]  bg-[#38805D] text-white w-[20rem] md:w-[16rem] mt-10 font-semibold'>Submit</button>
          </div>

        </div>

      </div>
      <div className='mt-[40px] ml-[200px] md:ml-[100px] md:mt-[40px] lg:ml-[310px] lg:mt-[-20px] text-[#137866]'>
      <div className='font-semibold text-sm'>FOLLOW US ON SOCIAL MEDIA </div>
      <div className='flex my-6 gap-3 '>
        
          <div className='w-10 h-10 rounded-full border-2 hover:bg-[#137866] border-[#137866] flex items-center justify-center  hover:text-white'>
          <FaTwitter className='' />
        </div>

          <div className='w-10 h-10 rounded-full border-2 border-[#137866] flex items-center justify-center   hover:bg-[#137866]  hover:text-white'>
          <FaLinkedinIn className='' />
        </div>

          <div className='w-10 h-10 rounded-full border-2 border-[#137866] flex items-center justify-center  hover:bg-[#137866]  hover:text-white'>
          <FaInstagram className='' />
        </div>
</div>
  
      </div>
    </section>
  )
}

export default Footer
