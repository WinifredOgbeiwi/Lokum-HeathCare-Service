import React from 'react'
import HandCross from './images/handCross.png'
import secure from './images/secure.png'
import call from './images/call.png'
import twoPeople from './images/twoPeople.png'
import Headings from './singleComponents/Headings'
function WhyChooseUs() {
  const boxStyle = {
    height: '238px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap:'20px',
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"

  }
  return (
    <section>
      <div className='text-text-color'>
        <Headings text='Why choose us' />
        <p className=' font-normal text-lg mt-5 text-center mb-16'>Unlock better health with our expert services</p>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20 text-center'>

        <div style={boxStyle} className='bg-light-green'>
          <img src={HandCross} alt="" />
          <h3>Access healthcare<br /> worker</h3>
        </div>

        <div style={boxStyle} className='bg-[#FFFDF0] w-'>
          <img src={twoPeople} alt="" />
          <h3>24/7<br /> Support</h3>
        </div>
        <div style={boxStyle} className=' bg-[#FFF5F6] '>
          <img src={secure} alt="" />
          <h3>Fully<br /> Secured </h3>
        </div>
        <div style={boxStyle} className=' bg-[#FCF6FD]'>
          <img src={call} alt="" />
          <h3>Live <br /> Consultation</h3>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs