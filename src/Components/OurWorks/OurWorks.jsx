import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';

const works = [
    {
        id: 1,
        imgSrc: '/work1.png',
        title: 'Threadwel - Market Place For RMG and Garments Industry',
        description: 'UI/UX Design • Website Development • Software Development',
    },
    {
        id: 2,
        imgSrc: '/work2.png',
        title: 'Ispahani - Group Website & CRM System',
        description: 'UI/UX Design • Website Development • Software Development',
    },
    {
        id: 3,
        imgSrc: '/work3.png',
        title: 'Marina - Booking System & Website',
        description: 'UI/UX Design • Website Development • Software Development',
    },
    {
        id: 4,
        imgSrc: '/work4.png',
        title: 'Digital Health - Digital Health Care Solutions',
        description: 'UI/UX Design • Website Development • Software Development',
    },
];

const OurWorks = () => {
    return (
        <div className='bg-[#000] flex-1 mx-auto relative overflow-y-hidden overflow-x-hidden'>
            <div className='lg:w-[980px] lg:flex lg:mx-auto justify-center lg:py-20 py-2 lg:px-20'>
                <div className='flex items-center mt-4'>
                    <Img
                        className='absolute -left-0 w-[750px] top-24 z-20 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                    <Img
                        className='absolute -right-0 w-[750px] top-24 z-20 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
                </div>
                <div className='font-poppins text-center z-30 flex flex-col items-center'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-monkwhite leading-[35px] md:leading-[70px] mb-10 md:mb-16'>
                        Our Works
                    </h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[980px]'>
                        {works.map((work, index) => (
                            <motion.div
                                key={work.id}
                                initial={{ y: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: 'spring', stiffness: 60 },
                                    opacity: { duration: 0.2 },
                                    ease: 'easeIn',
                                    duration: 0.2,
                                }}
                                className={`${work.id % 2 === 0 ? 'lg:mt-20' : ''}`}
                            >
                                <div className='lg:w-[430px] w-[280px] relative overflow-hidden rounded-3xl hover:rounded-5xl lg:hover:rounded-[70px] transition-all duration-300'>
                                    <img
                                        src={work.imgSrc}
                                        alt={work.title}
                                        className='transition-transform duration-300 transform hover:scale-150 rounded-lg'
                                    />
                                </div>
                                <h3 className='text-start lg:text-2xl text-[20px] mt-4 text-monkwhite font-poppins font-semibold w-[280px] lg:w-[380px] leading-6 lg:leading-9'>
                                    {work.title}
                                </h3>
                                <p className='text-start lg:w-[450px] lg:text-lg text-[16px] mt-2 text-monkwhite font-poppins font-normal w-[280px] leading-5 lg:leading-7'>
                                    {work.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;
