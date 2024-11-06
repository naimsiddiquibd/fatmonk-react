import React from 'react';

const HostingHerp = () => {
    const handleDiscussProject = () => {
        window.location.href = 'mailto:hello@fatmonk.studio';
    };

    return (
        <div
            className="hero min-h-[520px] sm:min-h-screen bg-[#000] relative"
            style={{
                backgroundImage: 'url("/hosting-hero-bg.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '90vw', // Adjust width as needed
            margin: '0 auto',  // Center horizontally
            }}
        >
            <div className="hero-content xl:max-w-[1800px] flex-col">
                <div className='hidden lg:inline right-0 z-10 absolute'>
                    <img className='w-[450px]' src="/hosting-hero-diamond.png" alt="" />
                </div>
                <div className='absolute lg:mx-auto lg:w-[1180px] z-40 md:col-span-9 lg:ml-0 mt-10'>
                    <h1 className='font-poppins font-semibold text-monkwhite text-3xl lg:text-7xl my-1 lg:my-3 lg:leading-[90px]'>
                        Reliable 
                        <span style={{
                            background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}> Web<br></br> Hosting Platform </span>
                        for<br></br> Your Website
                    </h1>
                    
                </div>
            </div>
        </div>
    );
};

export default HostingHerp;
