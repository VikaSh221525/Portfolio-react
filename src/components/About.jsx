import React from 'react'
import { motion } from "motion/react"

const About = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.1" className='w-full bg-[#cdea68] rounded-2xl'>
            <div className='py-20 px-15 '>
                <h1 className='text-black text-6xl w-[88%]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds, sell prod­ucts, ex­plain com­plex ideas </span> and <span className='underline'>hire great peo­ple.</span> </h1>
            </div>
            <div className='line w-full border-t-2 border-black mb-4'></div>
            <div className='px-15 pb-15 flex justify-between'>
                <div>
                    <h1 className='text-6xl text-black mb-5'>Our approach:</h1>
                    <div className='bg-black w-fit px-8 py-4 rounded-full flex items-center gap-5'>
                        <a href="#" className='text-xl'>READ MORE </a><a><i className="ri-arrow-right-up-line text-2xl"></i></a> 
                    </div>
                </div>
                <div className='w-1/2 bg-amber-600 rounded-[10px]'><img className='overflow-hidden rounded-[10px]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
            </div>

        </div>
    )
}

export default About