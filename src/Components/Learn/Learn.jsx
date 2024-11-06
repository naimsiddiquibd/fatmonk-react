import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Img } from 'react-image';

const Learn = () => {
    return (
        <div>
            <div className='w-full overflow-x-hidden overflow-y-hidden bg-[#000]'> {/* Apply overflow-x: hidden; here */}
                <div className="hero  pt-40 pb-20 relative overflow-x-hidden overflow-y-hidden px-5 lg:px-0">
                    <div className='flex items-center mt-44 overflow-x-hidden'>
                        {/* Set z-index lower so they appear behind other elements */}
                        <Img
                            className='absolute -left-0 w-[600px] z-10 left-image'
                            src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                        />
                        <Img
                            className='absolute -right-0 w-[700px] z-10 right-image'
                            src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                        />
                    </div>

                    {/* Set z-index higher for h1 and other components */}
                    <h1 className='text-3xl lg:text-5xl font-semibold text-monkwhite leading-[35px] lg:leading-[70px] absolute lg:-top-32 -top-20'>
                        Learn With Us
                    </h1>
                    <div className='flex justify-center lg:w-[1180px] lg:mx-auto px-4 lg:px-7 z-20'>
                        <div className='lg:flex lg:justify-center gap-5 '>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: 'spring', stiffness: 60 },
                                    opacity: { duration: 0.2 },
                                    ease: "easeIn",
                                    duration: 0.5,
                                }}
                                className="card w-full bg-monkwhite mb-5 hover:shadow-md cursor-pointer z-20">
                                <figure><img src="/learn1.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">1 day ago</h2>
                                    <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>A Symphony of Technological Creativity</p>
                                    <div className="card-actions justify-start">
                                        <Link to="https://blog.fatmonk.studio/a-symphony-of-human-and-technological-creativity/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: 'spring', stiffness: 60 },
                                    opacity: { duration: 0.2 },
                                    ease: "easeIn",
                                    duration: 0.5,
                                }}
                                className="card w-full bg-monkwhite mb-5 hover:shadow-md cursor-pointer z-20">
                                <figure><img src="/learn2.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                                    <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>Designing Immersive Experiences that Captivate Audience</p>
                                    <div className="card-actions justify-start">
                                        <Link to="https://blog.fatmonk.studio/designing-immersive-experiences-that-captivate-your-audience/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    delay: 0.2,
                                    y: { type: 'spring', stiffness: 60 },
                                    opacity: { duration: 0.2 },
                                    ease: "easeIn",
                                    duration: 0.5,
                                }}
                                className="card w-full bg-monkwhite mb-5 hover:shadow-md cursor-pointer z-20">
                                <figure><img src="/learn3.png" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                                    <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>How Innovation Can Drive Positive Change</p>
                                    <div className="card-actions justify-start">
                                        <Link to="https://blog.fatmonk.studio/tech-for-good-how-innovation-can-drive-positive-change/" className='font-poppins text-[15px] font-semibold text-monkred'>Read More</Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Learn;
