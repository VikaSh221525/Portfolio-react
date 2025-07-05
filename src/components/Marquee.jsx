import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-25 bg-[#004d43] rounded-t-xl">
            <div className="relative border-y-2 border-white overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 25,
                    }}
                    style={{ width: "200%" }}
                >
                    {/* First set */}
                    <h1 className="text-[18rem] bebas-neue-regular leading-none tracking-tight px-10 min-w-max text-white">
                        CREATIVE PASSIONATE HARDWORKING
                    </h1>
                    <h1 className="text-[18rem] bebas-neue-regular leading-none tracking-tight px-10 min-w-max text-white">
                        CREATIVE PASSIONATE HARDWORKING
                    </h1>
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee