import React from 'react'
import Logo from '../images/Lokum-Logo.png'

import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import links from './linkData'
function Footer() {

  return (
    <section className=''>
      <div className='flex flex-col lg:flex-row items-center justify-start gap-40 pt-20 text-base md:text-2xl lg:text-base'>
        <img src={Logo} alt="Medfile Logo" className='mt-[-16rem]' />
        <div className='flex flex-row gap-40'>


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

            <button className='placeholder:text-sm py-3 px-7 border-[#060E0A]  bg-[#38805D] w-[20rem] mt-10' >Submit</button>
          </div>

        </div>

      </div>
      <div className='ml-[310px] mt-[-20px] text-[#137866]'>
      <div className='font-semibold text-sm'>FOLLOW US ON SOCIAL MEDIA </div>
      <div className='flex my-6 gap-3 '>
        
        <div className='w-10 h-10 rounded-full border-2 border-[#137866] flex items-center justify-center '>
          <FaTwitter className='' />
        </div>

        <div className='w-10 h-10 rounded-full border-2 border-[#137866] flex items-center justify-center'>
          <FaLinkedinIn className='' />
        </div>

        <div className='w-10 h-10 rounded-full border-2 border-[#137866] flex items-center justify-center '>
          <FaInstagram className='' />
        </div>
</div>
  
      </div>
    </section>
  )
}

export default Footer
