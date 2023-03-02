import React from 'react'
import MedicalWoman from '../images/medicalWoman.png'
import HireMeList from './HireMeList'
function HireSection() {
  return (
    <section>
      <div className='mt-28  text-center lg:text-left'>
        <h2 className='font-bold  text-4xl xl:text-6xl mb-3 w-[500px] xl:w-[820px]'>Your healthfacility can serve patients effeciently without breaking the bank </h2>
      <p className='text-base'>Hire healthworkers for your business and pay them per hour.</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-between mt-12 lg:mt-16 items-center'>
        <div className='grid grid-cols-2  gap-x-14 gap-y-20 '>
          <HireMeList text='Medical doctors'/>
          <HireMeList text='Pharmarcist' />
          <HireMeList text='Dentist' />
          <HireMeList text='Optician' />
        </div>
        <img src={MedicalWoman} alt="" className='w-30 lg:w-96'/>
      </div>
      <button className='bg-[#38805D] text-white rounded-[4px] w-[250px] h-[57px] mt-8'>Hire HealthWorker</button>
  
    </section>
  )
}

export default HireSection