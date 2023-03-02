import React from 'react'
import Headings from '../singleComponents/Headings'
import ReviewList from './reviewData.json'

function ReviewSection() {
    const Review = ReviewList.map(review => {
        return (
            <>
                <div key={review.id} className='flex flex-col justify-center items-center gap-10 p-8 shadow-xl'>
                    <p className='text-center text-lg'>{review.quote}</p>

                    <div className='flex items-center gap-3'>
                        <img src={review.image} alt="" />
                        <div>
                            <h2 className='font-semibold text-lg '>{review.name}</h2>
                            <p className=' text-xs' >patient</p> </div>
                    </div>
                </div>
            </>
        )
    })
    return (
        <section className='bg-light-green p-28 mt-20'>
            <Headings text='Our reviews' />
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
    
            {Review}
</div>
        </section>
    )
}

export default ReviewSection