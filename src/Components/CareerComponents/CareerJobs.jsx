import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';

const CareerJobs = () => {
    return (
        <div className='bg-[#000] flex justify-center md:py-20 py-10 md:px-20 relative overflow-y-hidden overflow-x-hidden'>
            <div className='flex items-center mt-44'>
                <Img
                    className='absolute -left-0 w-[750px] top-24 z-20 left-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                />
                <Img
                    className='absolute -right-0 w-[750px] top-24 z-20 right-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                />
            </div>
            <div className='flex items-center mt-44'>
                <Img
                    className='absolute -left-0 w-[750px] bottom-24 z-20 left-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                />
                <Img
                    className='absolute -right-0 w-[750px] bottom-24 z-20 right-image'
                    src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                />
            </div>

            <div className='font-poppins text-center z-30'>
            
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10 lg:px-60 px-6'>
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
                        <div className="card w-full bg-[#000] shadow-xl">
                            <figure><img src="/job4.png" alt="Shoes" /></figure>
                            <Link to="https://blog.fatmonk.studio/mid-senior-ruby-on-rails-developer/(opens in a new tab" className="card-body text-left">
                                <h2 className="card-title text-monkwhite text-2xl">Ruby On Rails Developer</h2>
                                <h3 className='text-monkred text-lg leading-3 mb-4 font-semibold'>Full time</h3>
                                <p className='text-monkwhite text-sm'>We're in search of a skilled Mid/Senior Ruby On Rails Developer to join our dedicated team. In this role, you'll contribute to the development and maintenance of our web-based applications.</p>

                            </Link>
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
                            duration: 0.2,
                        }}
                    >
                       <Link to="https://blog.fatmonk.studio/ui-ux-designer/" className="card w-full bg-[#000] shadow-xl">
                            <figure><img src="/job3.png" alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title text-monkwhite text-2xl">Ui Ux Designer</h2>
                                <h3 className='text-monkred text-lg leading-3 mb-4 font-semibold'>Full time</h3>
                                <p className='text-monkwhite text-sm'>The UI/UX Designer is pivotal for content creation and production, crafting compelling stories, and bringing ideas to life through impactful design. Success demands attention to detail, superb skills."</p>

                            </div>
                        </Link>
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
                       <Link to="https://blog.fatmonk.studio/junior-developer/" className="card w-full bg-[#000] shadow-xl">
                            <figure><img src="/job2.png" alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title text-monkwhite text-2xl">Junior Developer</h2>
                                <h3 className='text-monkred text-lg leading-3 mb-4 font-semibold'>Full time</h3>
                                <p className='text-monkwhite text-sm'>We're seeking a Junior Developer to join our team, responsible for web app development and maintenance. This role offers a chance to work closely with our dedicated team, contributing to our web-based applications."</p>

                            </div>
                        </Link>
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
                        <Link to="https://blog.fatmonk.studio/strategic-planner-and-client-servicing/" className="card w-full bg-[#000] shadow-xl">
                            <figure><img src="/job1.png" alt="Shoes" /></figure>
                            <div className="card-body text-left">
                                <h2 className="card-title text-monkwhite text-2xl">Strategic Planner</h2>
                                <h3 className='text-monkred text-lg leading-3 mb-4 font-semibold'>Full time</h3>
                                <p className='text-monkwhite text-sm'>At Fatmonk, Client Servicing and Planning are vital to creative projects, providing insights from market studies. Strategic planners must envision beyond projects, charting the course for client success.</p>

                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CareerJobs;