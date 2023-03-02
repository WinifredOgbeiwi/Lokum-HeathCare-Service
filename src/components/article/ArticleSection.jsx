import React from 'react'
import Headings from '../singleComponents/Headings'
import ArticlePic from '../images/articleMain.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
function ArticleSection() {
  const date = new Date();
  var month = date.toLocaleString('default', { month: 'long' });
 const year = date.getFullYear();
  return (
    <section>
      <Headings text='Daily curated articles for your healthcare'/>
      <div className='flex mt-16'>
        <div cl>
          <img src={ArticlePic} alt="" />
          <p className='text-[#38805D] rounded-md  mt-4 mb-5'>{month} {year}</p>
          <h3>Moderna vaccine recipient survey: side effect of the ten day injection </h3>
          <p className='mt-5 mb-7'>Regular use of laxatives may increase the risk of dementia, especially among those who use multiple types of laxatives or osmotic laxatives, new research suggests.</p>
          <div className='text-xl text-main-color inline-block'>Learn More <AiOutlineArrowRight className=' inline-block' />
          </div>
        </div>



        <div></div>
      </div>
    </section>
  )
}

export default ArticleSection