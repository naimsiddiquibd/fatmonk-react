import React from 'react';
import { Img } from 'react-image';

const Enhancing = () => {
    return (
        <div className='bg-[#0D0D0D] flex justify-center py-20 relative overflow-x-hidden overflow-y-hidden'>
            <div className='flex items-center mt-44 overflow-x-hidden overflow-y-hidden'>
                <Img
                        className='absolute -left-0 w-[600px] z-20 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                <Img
                        className='absolute -right-0 w-[600px] z-20 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
            </div>
            <div className='font-poppins text-center px-4 lg:px-0 lg:w-[1180px]'>
                <h1 className='text-3xl md:text-6xl font-semibold text-monkwhite leading-[35px] md:leading-[70px]'>
                    Enhancing <span className='bg-gradient-to-r from-[#FF3D00] to-[#FFF490] bg-clip-text text-transparent '>Online Services, </span>
                    <span className='bg-gradient-to-r from-[#4100FB] to-[#00FFFE] bg-clip-text text-transparent '>Empowering</span> Businesses, and Redefining
                    Experiences with Fatmonk
                </h1>
                <p className='text-sm md:text-[24px] leading-5 md:leading-10 my-10 text-monkwhite'>Welcome to Fatmonk Studio, your premier destination for cutting-edge technology, avant-garde software, visionary design, and unrivaled event excellence. At Fatmonk Studio, we transcend the conventional studio paradigm – we are your distinguished partners in orchestrating your ascent to triumph.</p>
                <p className='text-sm md:text-[24px] leading-5 md:leading-10 text-monkwhite'>

                    Imagine your business thriving in today's digital world, ready to conquer new heights. That's what we're here for! Our strength lies in turning user insights into powerful strategies that work seamlessly across different industries. Our goal is crystal clear: to bring out the best in your online services, empower your business with smart solutions, and redefine how experiences are created.</p>
                    <button className='bg-monkred font-poppins font-semibold px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-10 md:mt-9 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>
            </div>
        </div>
    );
};

export default Enhancing;