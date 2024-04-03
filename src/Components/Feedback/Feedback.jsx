import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

const Feedback = () => {
    return (
        <div className='py-10 md:py-16 bg-[#000] flex flex-col justify-center items-center bg-no-repeat' style={{
            backgroundImage: `url('/feedbackbg.png')`,
            backgroundSize: '100%', // Adjust background size to make it slightly bigger
        }}>
            <h1 className='text-center text-[30px] md:text-[60px] font-poppins font-bold my-7 md:my-16 text-monkwhite'>Client Feedback</h1>
            <img className='w-[70px] lg:w-[95px]' src="/comma.png" alt="" />





            <div className="lg:w-[1180px] mt-7 lg:mt-12 flex flex-col items-center justify-center">
                {/* review */}
                <div className='lg:w-[1180px] flex justify-between items-center'>
                    <div>
                        <ChevronLeftIcon className="h-9 w-9 text-monkwhite" />
                    </div>
                    <div>
                        <p className='text-monkwhite text-center text-lg lg:text-xl lg:w-[980px]'>I had the pleasure of collaborating with Fatmonk Studio for our software solutions, and it was a remarkable experience. Fatmonk Studio's team displayed an exceptional level of professionalism throughout the project. Their creative design solutions not only met but surpassed our requirements, leaving us thoroughly impressed. Their unwavering commitment to excellence was evident in the continuous improvements and refinements made to our software, resulting in a final product that exceeded our expectations.

                            We wholeheartedly recommend Fatmonk Studio for anyone seeking software development expertise. If you're looking for a partner who combines creativity, professionalism, and a relentless pursuit of quality, Fatmonk Studio is the team you need for your software development needs.</p>
                    </div>
                    <div>
                        <ChevronRightIcon className="h-9 w-9 text-monkwhite" />
                    </div>
                </div>
                {/* profile */}
                <div className='flex gap-4 items-center mt-3 lg:mt-9'>
                    <div className='rounded-full'>
                        <img className='w-16 lg:w-28' src="/client1.png" alt="" />
                    </div>
                    <div>
                        <h3 className='font-poppins text-2xl font-bold text-monkwhite'>Nazr Irfan</h3>
                        <p className='text-[14px] font-poppins leading-3'>CEO, Tegra Design</p>
                    </div>
                </div>
            </div>




            <div className='mt-8 lg:mt-16'>
                <div className='lg:grid lg:grid-cols-6 lg:gap-3'>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/0.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/1.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/2.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/3.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/4.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/5.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/6.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/7.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/8.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/9.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/14.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/15.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/16.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/17.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/18.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/19.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/20.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/21.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/22.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/23.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/24.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/25.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/26.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/27.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/28.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/29.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/30.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/31.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/32.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/33.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/34.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/34.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/35.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/36.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/37.png" alt="" />
                    </div>
                    <div className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                        <img src="/client/38.png" alt="" />
                    </div>

                </div>
            </div>






        </div>
    );
};

export default Feedback;