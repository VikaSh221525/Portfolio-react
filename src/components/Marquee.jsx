import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.1"  className='w-full py-20 bg-[#004d43] rounded-t-xl'>
            <div className="border-b-2 border-t-2 border-white flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex"
                    initial={{ x: 0 }}
                    animate={{ x: "-33.3333%" }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                    style={{ width: "300%" }}
                >
                    <h1 className="OCHI text-[15rem] font-bold leading-none pr-10 tracking-tighter min-w-max">WE ARE OCHI</h1>
                    <h1 className="text-[15rem] font-bold leading-none tracking-tighter pr-10 min-w-max">WE ARE OCHI</h1>
                    <h1 className="text-[15rem] font-bold leading-none tracking-tighter pr-10 min-w-max">WE ARE OCHI</h1>
                </motion.div>
            </div>

        </div>
    )
}

export default Marquee