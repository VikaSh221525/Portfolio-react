import { motion } from 'motion/react'
import React from 'react'


const Landing = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.8" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className="textstructure px-20 mt-40 flex flex-col -space-y-4">
                <div className="masker">
                    <h1 className='text-9xl tracking-tighter font-medium leading-none'>WE CREATE</h1>
                </div>
                <div className="masker flex items-baseline">
                    <motion.div initial={{width:0}} animate={{width:"8vw"}} transition={{delay:1, duration:1, ease:"easeInOut"}}
                    className='w-[8vw] h-[90px] rounded-md'><img className='w-[100%] h-[100%] object-cover rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>
                    <h1 className='text-9xl tracking-tighter font-medium leading-none m-0'>EYE-OPENING</h1>
                </div>
                <div className="masker">
                    <h1 className='text-9xl tracking-tighter font-medium leading-none'>PRESENTATIONS</h1>
                </div>
            </div>
            <div className='border-t-[1px] border-zinc-600 mt-32 mb-5'></div>
            <div className='shortdetail px-20 flex items-center justify-between text-lg'>
                <p>For public and private companies</p>
                <p>From the first pitch to IPO</p>
                <div className='startproject space-x-3 group '>
                    <a href="#" className='px-3 py-1.5 border rounded-[20px] font-medium transition-colors duration-200 group-hover:bg-white group-hover:text-black'>START THE PROJECT  </a> 
                    <a href='#' className='p-2 border rounded-[50%] transition-colors duration-200 group-hover:bg-white group-hover:text-black'><i className="ri-arrow-right-up-line text-xl"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Landing 