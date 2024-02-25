import React from 'react';
import { motion } from "framer-motion"

const TopServices = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-1 bg-[#0D0D0D] md:px-20 md:py-20">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.2,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='bg-[#281A3A] px-8 py-14 m-4 rounded-3xl h-[435px] cursor-pointer'>
                <img className='w-16' src="/web.png" alt="" />
                <h1 className='text-[42px] font-poppins font-semibold  text-monkwhite my-2'>Web</h1>
                <p className='text-[18px] font-poppins leading-7 text-monkwhite'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.2,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='bg-gradient-to-bl from-[#FF0961] to-[#4100FB] px-8 py-14 m-4 rounded-3xl md:mt-24 h-[470px] cursor-pointer'>
                <img className='w-16' src="/design.png" alt="" />
                <h1 className='text-[42px] font-poppins font-semibold text-monkwhite my-2'>Design</h1>
                <p className='text-[18px] font-poppins leading-7 text-monkwhite'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </motion.div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.2,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='bg-[#030A49] px-8 py-14 m-4 rounded-3xl h-[435px] cursor-pointer'>
                <img className='w-16' src="/software.png" alt="" />
                <h1 className='text-[42px] font-poppins font-semibold text-monkwhite my-2'>Software</h1>
                <p className='text-[18px] font-poppins leading-7 text-monkwhite'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    y: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 0.2,
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className='bg-gradient-to-bl from-[#FF4409] to-[#FFEF5A] px-8 py-14 m-4 rounded-3xl md:mt-24 h-[470px] cursor-pointer'>
                <img className='w-16' src="/events.png" alt="" />
                <h1 className='text-[42px] font-poppins font-semibold text-[#864B04] my-2'>Events</h1>
                <p className='text-[18px] font-poppins leading-7 text-[#864B04]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </motion.div>
        </div>
    );
};

export default TopServices;