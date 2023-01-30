import React, { useState } from 'react';

const PaginationWrapper = ({dataLeng,perPage,callBackFunc}) => {

    // store current page number
    const [curPageNum,setCurPageNum] = useState(0);

    return (
        <>
            <section className={`flex gap-3 justify-center my-3`}>
                {
                    [...Array(Math.ceil(dataLeng/perPage)).keys()].map((int,idx) => <div key={idx} onClick={(e)=>{
                        callBackFunc(int)
                        setCurPageNum(idx)
                    }} className={`${curPageNum === idx ? 'bg-[#04AA6D] text-white': 'bg-gray-300'} px-2.5 cursor-pointer rounded-sm py-0.5`}>
                            <button>{idx+1}</button>
                        </div>
                    )
                }
            </section>
        </>
    )
};

export default PaginationWrapper;