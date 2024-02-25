import React from 'react';

const AboutHero = () => {
    return (
        <div className="hero min-h-[520px] sm:min-h-screen bg-[#000]">
            <div className="hero-content xl:max-w-[1800px] flex-col relative">
               
            <div className=' xl:-right-10 z-10 absolute'>
                 <img className='bg-full' src="/aboutbg.png" alt="" />
            </div>
            <div className='z-20 md:col-span-9 md:ml-20 mt-10'>
                 
             <h1 className='font-poppins font-black text-[38px] leading-[50px] text-monkwhite sm:text-[72px] sm:leading-[82px] md:text-[87px] lg:text-[90px] xl:text-[95px] 2xl:text-[140px] md:leading-[80px] lg:leading-[90px] 2xl:leading-[150px] md:my-12'>Web Design & Development</h1>
             <h2 className='font-poppins text-md md:text-xl xl:text-2xl 2xl:text-3xl text-monkwhite w-[280px] sm:w-[500px] lg:w-[600px]'>Your website should convert, not confuse your visitors. A perfect blend of good user experience and aesthetic design can ignite growth - we will help you get there.</h2>
              <button className='bg-monkred font-poppins font-semibold px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-5 md:mt-5 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>
            </div>
            </div>
        </div>
    );
};

export default AboutHero;