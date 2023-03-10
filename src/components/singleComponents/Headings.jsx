import React from 'react'

function Headings(props) {
    return (
        <>
            <div className='flex flex-col items-center mt-10'>
                <h2 className='text-3xl md:text-5xl font-bold text-[#060E0A]'>{props.text}</h2>
            </div>
        </>
    )
}

export default Headings
