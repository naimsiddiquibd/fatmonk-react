import React from 'react';

const AboutHero = () => {
    const handleDiscussProject = () => {
        window.location.href = 'mailto:hello@fatmonk.studio';
    };
    return (
        <div className="hero min-h-[520px] sm:min-h-screen bg-[#000] relative">
            <div style={{ backgroundImage: "url('/aboutbg.png')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
            <div className="hero-content xl:max-w-[1800px] flex-col relative">
                <div className='lg:absolute lg:mx-auto lg:w-[1180px] z-40 md:col-span-9 lg:ml-0 mt-10'>
                    <h1 className='font-poppins font-bold text-monkwhite text-3xl lg:text-8xl my-1 lg:my-3 w-[250px] lg:w-[750px]'>Web Design & Development</h1>
                    <h2 className='font-poppins text-sm lg:text-lg text-monkwhite w-[250px] lg:w-[600px]'>Your website should convert, not confuse your visitors. A perfect blend of good user experience and aesthetic design can ignite growth - we will help you get there.</h2>
                    <button onClick={handleDiscussProject} className='bg-monkred font-poppins font-semibold px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-5 md:mt-5 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
