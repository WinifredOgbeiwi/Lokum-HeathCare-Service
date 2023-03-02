import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
const FAQpage = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className='shadow-md px-6 py-3 mb-4 rounded-md border-2 w-[25rem] md:w-[35rem] lg:w-[45rem]'>
            <div className='flex justify-between ' onClick={() => setIsOpen(!isOpen)}>
                <h3 className='text-[#333333] text-2xl font-normal'>{question} </h3>

                <button className="text-2xl">{isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle/>}</button>
            </div>
            {isOpen && <p>{answer}</p>}
        </div>
    );
};

export default FAQpage;
