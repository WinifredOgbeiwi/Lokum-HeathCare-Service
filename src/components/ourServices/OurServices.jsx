import React from 'react'

import MedicalMan from '../images/medicalMan.png'
import ListSection from './ListSection'
function OurServices() {
    return (
        <>
            <section className='bg-[#E7F5F9] py-6 '>
             
                <div className='flex flex-col lg:flex-row justify-between gap-10 items-center mt-9'>
                    <img src={MedicalMan} alt="" className='w-30 lg:w-96' />
                    <div>
                        <h2 className='font-bold  text-4xl xl:text-5xl mb-6 xl:mb-10 text-center lg:text-left'>How it Works</h2>
                        <ul className='text-sm font-normal space-y-4'>
                            <ListSection heading='Autonomy healthcare service' paragraph='Provides individuals more autonomy to access care as needed'/>
                            <ListSection heading='Less admin fee' paragraph='Provides a less capital intensive entry access to the business of healthcare'/>
                            <ListSection heading='Flexibility' 
                                paragraph='Flexible for both the healthcareworkers and patient'/>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default OurServices;
