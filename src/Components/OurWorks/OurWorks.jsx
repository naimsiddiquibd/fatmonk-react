import React from 'react';
import { motion } from 'framer-motion';

const OurWorks = () => {
    return (
        <div className='bg-[#ODODOD] flex justify-center md:py-20 py-10 md:px-20 relative overflow-y-hidden overflow-x-hidden'>
            <div className='flex items-center mt-44'>
                <img className='absolute -left-0 w-[750px] top-24 z-20 left-image' src="chakti1.png" alt="" />
                <img className='absolute -right-0 w-[750px] top-24 z-20 right-image' src="chakti2.png" alt="" />
            </div>
            <div className='flex items-center mt-44'>
                <img className='absolute -left-0 w-[750px] bottom-24 z-20 left-image' src="chakti1.png" alt="" />
                <img className='absolute -right-0 w-[750px] bottom-24 z-20 right-image' src="chakti2.png" alt="" />
            </div>

            <div className='font-poppins text-center z-30'>
                <h1 className='text-3xl md:text-6xl font-semibold text-monkwhite leading-[35px] md:leading-[70px] mb-10 md:mb-16'>
                    OUR Works
                </h1>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10'>
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
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300'>
                            <img src="/work1.png" alt="" className='transition-transform duration-300 transform hover:scale-110 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px] leading-9'>Tamara - Biggest BNPL eCommerce in Golf</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-3'>Mobile App • UI/UX & Development</p>
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
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300 md:mt-24'>
                            <img src="/work2.png" alt="" className='transition-transform duration-300 transform hover:scale-110 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px]'>Tamara - Biggest BNPL eCommerce in Golf</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-3'>Mobile App • UI/UX & Development</p>
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
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300'>
                            <img src="/work3.png" alt="" className='transition-transform duration-300 transform hover:scale-110 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px]'>Tamara - Biggest BNPL eCommerce in Golf</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-3'>Mobile App • UI/UX & Development</p>
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
                    >
                        <div className='md:w-[530px] md:h-[707px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-[70px] transition-all duration-300 md:mt-24'>
                            <img src="/work4.png" alt="" className='transition-transform duration-300 transform hover:scale-110 rounded-lg' />
                        </div>
                        <h3 className='text-start md:w-[530px] md:text-[28px] text-[20px] mt-2 text-monkwhite font-poppins font-semibold w-[280px]'>Tamara - Biggest BNPL eCommerce in Golf</h3>
                        <p className='text-start md:w-[530px] md:text-[20px] text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-3'>Mobile App • UI/UX & Development</p>
                    </motion.div>


                </div>
            </div>
        </div>


    );
};

export default OurWorks;