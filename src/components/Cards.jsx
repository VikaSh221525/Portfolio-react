import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-10 items-center px-15'>
            <div className='w-1/2 h-[60vh] bg-[#004d43] rounded-2xl relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'><img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" /></div>
                <a className='bg-inherit border-1 border-[#cdea68] rounded-[20px] py-2 px-4 absolute bottom-10 left-10 text-[#cdea68]' href="#">&copy;2019-2025</a>
            </div>
            <div className='w-1/4 h-[60vh] bg-[#011210] rounded-2xl relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'><img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /></div> 
                <a className='bg-inherit border-1 border-amber-50 rounded-[20px] py-2 px-4 absolute bottom-10 left-10 ' href="#">RATING 5.0 ON CLUTCH</a>
            </div>
            <div className='w-1/4 h-[60vh] bg-[#01100d] rounded-2xl relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'><img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /></div>
                <a className='bg-inherit border-1 border-amber-50 rounded-[20px] py-2 px-4 absolute bottom-10 left-10 ' href="#">BUSINESS BOOTCAMP ALUMNI</a>
            </div>
        </div>
    )
}

export default Cards;