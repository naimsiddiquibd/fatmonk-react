import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='w-full overflow-x-hidden bg-[#000]'> {/* Apply overflow-x: hidden; here */}
            <div className="hero min-h-[520px] sm:min-h-screen relative overflow-x-hidden px-5 lg:px-0">
                <div className='flex items-center mt-44 overflow-x-hidden'>
                    <img className='absolute -left-0 w-[600px] z-20 left-image' src="chakti1.png" alt="" />
                    <img className='absolute -right-0 w-[600px] z-20 right-image' src="chakti2.png" alt="" />
                </div>
                {/* image */}
                {/* <div className='xl:-right-44 z-0 absolute w-full inline lg:hidden'>
                    <img className='w-[2000px] h-full  transform rotate-90' src="/heroball.gif" alt="" />
                </div> */}

                <div className='xl:-right-44 z-0 absolute overflow-x-hidden hidden lg:inline'>
                    <img className='w-[1000px] overflow-x-hidden' src="/heroball.gif" alt="" />
                </div>
                {/* bg */}
                <div className="absolute h-full w-full bg-cover bg-no-repeat bg-center z-10 hidden lg:inline" style={{ backgroundImage: `url('herolay.png')` }}>
                </div>
                {/* body */}
                <div className='z-20 md:col-span-9 md:ml-20 mt-10'>
                    <h2 className='font-poppins text-lg text-monkwhite md:text-[42.8px] 2xl:text-[80px] '>Transform Your Idea Into</h2>
                    <h1 className='font-poppins font-bold text-4xl text-monkwhite sm:text-[72px] sm:leading-[80px] md:text-[82px] lg:text-[87px] xl:text-[95px] 2xl:text-[120px] md:leading-[80px] lg:leading-[90px] 2xl:leading-[150px] md:my-12'>Reality with Fatmonk</h1>
                    <button className='bg-monkred font-poppins font-semibold px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-5 md:mt-5 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
