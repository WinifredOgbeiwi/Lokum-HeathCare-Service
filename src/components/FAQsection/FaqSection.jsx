import React from 'react'
import Headings from '../singleComponents/Headings'
import faqs from './FAQdata'
import FAQpage from './FAQpage';
import FAQimg from '../images/FAQimage.png'
function FaqSection() {
  return (
    <section className='bg-[#F6FDFA]'>
          <div className='mb-[85px] mt-24'>
              <Headings text='Frequently Asked Questions' />
          </div>

<div className='flex justify-between items-center'>
          <div>
              {faqs.map(({ index, question, answer }) => (

                  <FAQpage question={question} answer={answer} key={index} />
              ))}
              </div>
              
              <div>
                <img src={FAQimg} alt="" className='w-96' />
              </div>
              </div>
    </section>
  )
}

export default FaqSection
