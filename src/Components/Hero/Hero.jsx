import React from 'react';
import './Hero.css';
import { Img } from 'react-image';

const Hero = () => {
    const handleDiscussProject = () => {
        window.location.href = 'mailto:hello@fatmonk.studio';
    };

    return (
        <div className='w-full overflow-x-hidden overflow-y-hidden bg-[#000]'> {/* Apply overflow-x: hidden; here */}
            <div className="hero  min-h-[520px] sm:min-h-screen relative overflow-x-hidden overflow-y-hidden px-5 lg:px-0">
                <div className='flex items-center mt-44 overflow-x-hidden'>
                    <Img
                        className='absolute -left-0 w-[600px] z-30 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                    <Img
                        className='absolute -right-0 w-[700px] z-50 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
                </div>

                <div className='xl:-right-[250px] xl:top-12 z-10 absolute overflow-x-hidden overflow-y-hidden'>
                    <Img
                        className='lg:h-screen overflow-x-hidden overflow-y-hidden'
                        src="/x.gif"
                    />
                </div>
                {/* bg */}
                <Img
                    className="absolute h-full w-full bg-cover bg-no-repeat bg-center z-20 hidden lg:inline"
                    src="/herolay.png"
                />
                {/* body */}
                <div className='lg:absolute lg:w-[1180px] z-40 md:col-span-9 lg:ml-0 mt-10'>
                    <h2 className='font-poppins text-lg text-monkwhite lg:text-4xl  '>Transform Your Idea Into</h2>
                    <h1 className='font-poppins font-bold text-monkwhite text-5xl lg:text-8xl my-1 lg:my-3'>Reality with<br></br> Fatmonk</h1>
                    <button onClick={handleDiscussProject} className='bg-monkred font-poppins font-semibold px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-5 md:mt-5 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
