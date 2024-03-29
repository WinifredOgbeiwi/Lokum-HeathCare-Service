import React from 'react'
import Headings from '../singleComponents/Headings'
import ArticlePic from '../images/articleMain.png'
import ArticleData from './articleData.json'
import { AiOutlineArrowRight } from 'react-icons/ai'
function ArticleSection() {
  const date = new Date();
  var month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const articleData = ArticleData.map(({ id, image, heading, paragraph }) => {
    return (
      <div key={id} className='shadow-xl w-full rounded-xl '>
        <div className='flex items-center gap-4 p-4'>
          <div className='rounded-lg overflow-hidden'>
            <img src={image} alt="" />
          </div>
          <div>
            <h3 className='font-bold text-xs'>{heading}</h3>
            <p className='font-normal mt-[1px] text-[0.6rem] '>{paragraph}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <section className='mt-10'>
      <Headings text='Daily curated articles for your healthcare' />
      <div className='flex flex-col md:flex-row md:items-center items-start mt-16'>
        <div className='md:w-7/12 w-full'>
          <div className='overflow-hidden rounded-xl'>
            <img src={ArticlePic} alt="" />
          </div>
          <p className='text-[#38805D] rounded-md mt-4 mb-5'>{month} {year}</p>
          <h3 className='font-semibold text-lg w-3/4'>Moderna vaccine recipient survey: side effect of the ten day injection </h3>
          <p className='mt-5 mb-7 w-3/4'>Regular use of laxatives may increase the risk of dementia, especially among those who use multiple types of laxatives or osmotic laxatives, new research suggests.</p>
          <div className='text-normal text-[#DC362E] inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </div>
        </div>

        <div className='md:w-5/12 w-full'>
          <div className='flex justify-between px-5 mt-5 xl:mt-0'>
            <h3>Whats New?</h3>
            <div className='text-normal text-[#DC362E] inline-block'>See More <AiOutlineArrowRight className=' inline-block' />
            </div>
          </div>
          {articleData}
        </div>
      </div>
    </section>
  )
}

export default ArticleSection