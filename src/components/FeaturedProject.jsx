import React from 'react'
import { motion } from 'motion/react'

const FeaturedProject = () => {

    return (
        <div className='w-full py-30'>
            <div className='w-full px-15'>
                <h1 className='text-6xl'>Featured Project</h1>
            </div>
            <div className='border-t-[1px] border-amber-50 mt-20 mb-15'></div>
            <div className='w-full px-15 flex gap-10 '>
                <div className='w-full relative'>
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='w-[10px] h-[10px] rounded-full bg-amber-50' />
                        <h1>SALIENCE PROJECT</h1>
                    </div>
                    <div className="h-[85vh] rounded-2xl group transition-transform duration-500 ease-in-out hover:scale-95 ">
                    
                        <img
                            className="object-cover w-full h-full rounded-2xl "
                            src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className='w-full relative'>
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='w-[10px] h-[10px] rounded-full bg-amber-50' />
                        <h1>Cardboard Spaceship</h1>
                    </div>
                    <div className=' h-[85vh] rounded-2xl group transition-transform duration-500 ease-in-out hover:scale-95 '>
                        <img className='object-cover w-full h-full rounded-2xl' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedProject

{/* <h1 className='absolute text-7xl font-bold tracking-tighter overflow-hidden leading-none left-full top-1/2 -translate-x-1/3 -translate-y-1/2 z-100 text-[#cdea68] w-full'> 
                        {"SALIENCE PROJECT".split("").map((items, index)=>(
                            <motion.span className='inline-block translate-y-full' key={index}>{items} </motion.span>
                        ))}
                    </h1> */}


{/* <h1 className='absolute text-7xl font-bold tracking-tighter leading-none right-full top-1/2 translate-x-2/3 -translate-y-1/2 z-100 text-[#cdea68] w-full'> 
                        {"Cardboard Spaceship".split("").map((items, index)=>(
                            <span className='inline-block z-101' key={index}>{items} </span>
                        ))}
                    </h1> */}