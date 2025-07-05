import { motion } from 'motion/react'
import React from 'react'
import RotatingText from './RotatingText'


const Landing = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.8" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className="textstructure px-20 mt-40 flex flex-col -space-y-4">
                <div className="masker">
                    <h1 className='text-7xl lg:text-9xl tracking-tighter font-medium leading-none'>I'M VIKASH </h1>
                </div>
                <div className="masker flex items-baseline">
                    <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                        className='w-[8vw] h-[90px] rounded-md'><img className='w-[100%] h-[100%] object-cover rounded-md' src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
                    <h1 className='text-9xl tracking-tighter font-medium leading-none m-0'>SHARMA, A</h1>
                </div>
                <div className="masker">
                    <RotatingText
                        texts={["MERN Stack Developer", "UI/UX Designer", "DSA Enthusiast"]}
                        mainClassName="inline-block text-9xl tracking-tighter font-medium leading-none bg-transparent overflow-hidden py-0.5 sm:py-1 md-py-2 "
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
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

// ["MERN Stack Developer", "UI/UX Designer", "DSA Enthusiast"]