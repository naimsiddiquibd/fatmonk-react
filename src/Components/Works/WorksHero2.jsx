import React from 'react';

const WorksHero2 = () => {
    const handleDiscussProject = () => {
        window.location.href = 'mailto:hello@fatmonk.studio';
    };

    return (
        <div
            className="hero min-h-[520px] sm:min-h-screen w-full bg-[#000] relative"
        >
            <div>
                <img src="/hosting-hero-bg.png" className=' absolute top-32 z-30 right-0' alt="" />
                
            </div>
            <div className="hero-content lg:max-w-[1800px]">
                <div className='right-0 z-10 absolute bg-blend-overlay'>
                    <img 
                        className='w-[750px]' 
                        src="/work-gif.gif" 
                        alt="" 
                    />
                </div>
                <div className='absolute lg:mx-auto lg:w-[1180px] z-40 md:col-span-9 lg:ml-0 mt-10 mx-5'>
                    <h1 className='font-poppins font-semibold text-monkwhite text-5xl lg:text-7xl my-1 lg:my-3 lg:leading-[90px]'>
                        <span style={{
                            background: 'linear-gradient(to right, #E233FF, #FF6B00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}> Crafting Exceptional<br /> Digital Experiences </span>
                    </h1>
                    <p className='text-lg lg:text-xl text-monkwhite lg:w-[500px]'>
                        At Fatmonk Studio, we deliver impactful design solutions, blending creativity and strategy to bring ideas to life. Explore how we help businesses transform through innovative design.
                    </p>
                    <button
  onClick={handleDiscussProject}
  className='
    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
    font-poppins font-medium px-5 md:px-5 md:py-3 py-3 rounded-full
    text-[15px] text-monkwhite md:mt-5 md:text-[18px]
    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
    cursor-pointer lg:mt-8 mt-5
  '
>
  Discuss your Project
  <img className='h-12 w-12' src="/button-icon.png" alt="" />
</button>
                </div>

            </div>
        </div>
    );
};

export default WorksHero2;
