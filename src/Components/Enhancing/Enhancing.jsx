import React from 'react';
import { Img } from 'react-image';

const Enhancing = () => {
    return (
        <div className='bg-[#0D0D0D] flex justify-center py-20 relative overflow-x-hidden overflow-y-hidden'>
            <div className='flex items-center mt-44 overflow-x-hidden overflow-y-hidden z-10'>
                <Img
                    className='absolute -left-0 w-[600px] left-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                />
                <Img
                    className='absolute -right-0 w-[600px] right-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                />
            </div>
            <div className='font-poppins text-center px-4 lg:px-0 lg:w-[1180px] z-20'>
                <h1 className='text-3xl md:text-5xl font-semibold text-monkwhite leading-[30px] lg:flex-1 lg:mx-auto lg:w-[980px] md:leading-[70px]'>
                    Enhancing <span className='bg-gradient-to-r from-[#FF3D00] to-[#FFF490] bg-clip-text text-transparent '>Online Services, </span>
                    <span className='bg-gradient-to-r from-[#4100FB] to-[#00FFFE] bg-clip-text text-transparent '>Empowering</span> Businesses, and Redefining
                    Experiences with Fatmonk
                </h1>
                <p className='text-sm md:text-[18px] leading-5 md:leading-7 my-5 text-monkwhite lg:w-[900px] lg:flex lg:mx-auto'>Welcome to Fatmonk Studio, your premier destination for cutting-edge technology, avant-garde software, visionary design, and unrivaled event excellence. At Fatmonk Studio, we transcend the conventional studio paradigm – we are your distinguished partners in orchestrating your ascent to triumph.</p>
                <p className='text-sm md:text-[18px] leading-5 md:leading-7 text-monkwhite lg:w-[900px] lg:flex lg:mx-auto'>

                    Imagine your business thriving in today's digital world, ready to conquer new heights. That's what we're here for! Our strength lies in turning user insights into powerful strategies that work seamlessly across different industries. Our goal is crystal clear: to bring out the best in your online services, empower your business with smart solutions, and redefine how experiences are created.</p>
                <button
                    className='
 gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
    font-poppins font-medium px-6 md:px-6 md:py-3.5 py-3.5 rounded-full
    text-[15px] text-monkwhite mt-5 md:mt-5 md:text-[16px]
    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
    cursor-pointer
  '
                >
                    Discuss your Project
                </button>
            </div>
        </div>
    );
};

export default Enhancing;