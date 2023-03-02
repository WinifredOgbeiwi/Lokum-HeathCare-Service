import React,{useState} from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import Logo from './images/Lokum-Logo.png'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className='flex justify-between items-center shadow-2xl h-[120px] pr-6'>
        <div className='flex items-center'>
          <img src={Logo} alt="" />
          <ul className='flex gap-10 text-base tracking-wide'>

            <div>
              <li className=' flex gap-1 mb-2' onClick={toggling}>
                Find Healthcareworker
                <MdKeyboardArrowDown className='mt-1' /> </li>
                {isOpen && (
                <ul className='bg-sky-400'>
                  <li>lorem</li>
                  <li> <a href="/"> Lorem, ipsum.</a></li>
                  <li>lorem</li>
                </ul>
                )}
             
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
        </div>

        <div className='flex items-center gap-6'>
          <input type="text" placeholder='Search' className='bg-[#E8FBF2]' />

          <div className='flex gap-1'>
            Healthcareworker
            <MdKeyboardArrowDown className='mt-1' />
          </div>
          
          <button className='w-[100px] h-[45px] rounded-md border-2 border-[#38805D]'>Log in</button>
          <button className='w-[100px] h-[45px] bg-[#38805D] rounded-md border-2 border-[#38805D]'>Sign up</button>
        </div>
      </nav>
    </>
  )
}

export default NavBar;