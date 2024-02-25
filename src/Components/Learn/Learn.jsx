import React from 'react';

const Learn = () => {
    return (
        <div className=' bg-[#FFEDF3] py-10'>
            <h1 className='text-center font-poppins text-[30px] md:text-[60px] font-bold my-6 md:my-12 text-[#BD7C92]'>Learn With Us</h1>
            <div className='flex justify-center'>
                <div className='lg:flex lg:justify-center gap-5'>
                    <div className="card w-72 md:w-80 bg-monkwhite mb-5">
                        <figure><img src="/learn1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                            <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>The Art of Visual Branding: How to Leverage Brand Elements to Establish Your</p>
                            <div className="card-actions justify-start">
                                <p className='font-poppins text-[15px] font-semibold text-monkred'>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 md:w-80 bg-monkwhite mb-5">
                        <figure><img src="/learn2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                            <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>The Art of Visual Branding: How to Leverage Brand Elements to Establish Your</p>
                            <div className="card-actions justify-start">
                                <p className='font-poppins text-[15px] font-semibold text-monkred'>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 md:w-80 bg-monkwhite mb-5">
                        <figure><img src="/learn3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-poppins text-[14px] md:text-[14px] leading-3 font-semibold text-[#9D9D9D]">20 min ago</h2>
                            <p className='font-poppins text-[18px] md:text-[24px] leading-5 md:leading-7 font-semibold text-monkblack w-[240px] md:w-[260px]'>The Art of Visual Branding: How to Leverage Brand Elements to Establish Your</p>
                            <div className="card-actions justify-start">
                                <p className='font-poppins text-[15px] font-semibold text-monkred'>Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;