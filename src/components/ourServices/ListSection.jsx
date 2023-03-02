import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
function ListSection(props) {
  return (
    <>
          <div className='flex items-center space-x-3'>
        <div className="flex-shrink-0 w-16 h-16 bg-[#E8FBF2] rounded-full flex items-center justify-center">
        <GiCheckMark className="text-black w- w-8 h-8 " /></div>
              <div className='text-text-color'>
              <h3 className='font-bold text-2xl'>{props.heading}</h3>
             <p className=' mt-2 text-base'>{props.paragraph}</p>
              </div>
              </div>
              
    </>
  )
}

export default ListSection
