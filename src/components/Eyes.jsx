import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setrotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX
            let y = e.clientY;

            let deltax = x - (window.innerWidth / 2);
            let deltay = y - (window.innerHeight / 2);

            var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
            setrotate(angle - 180);
        })
    })

    return (
        <div className='w-full h-screen overflow-hidden relative'>
            <div data-scroll data-scroll-section data-scroll-speed="-0.7"  className='w-full h-full object-center'>
                <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" alt="" />
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-amber-50 rounded-full'>
                        <div className='w-2/3 h-2/3 bg-black rounded-full relative'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-10 h-10 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-amber-50 rounded-full'>
                        <div className='w-2/3 h-2/3 bg-black rounded-full relative'>
                            <div style={{ transform: `rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-10 h-10 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes

