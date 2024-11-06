import React from 'react';

const Revitalize = () => {
    return (
        <div className='relative bg-gradient-to-r from-[#FF0961] to-[#4444C4] h-[700px]  lg:h-[720px]'>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF0961] to-[#4444C4]/5"></div>

            {/* <h1 className='font-poppins font-black text-[#FF889D] text-[60px] md:text-[150px] lg:text-[200px] xl:text-[300px] absolute lg:-top-[70px] xl:-top-[88px] md:-left-5 text-opacity-30'>Fatmonkx</h1> */}
            <img className='absolute left-1/2 transform -translate-x-1/2' src="/fatmonk.png" alt="" />
            <div className='grid grid-cols-1 md:grid-cols-2 md:justify-items-end md:items-center md:px-16 absolute md:mt-26 md:bottom-0'>
                <div className='lg:w-[680px]'>
                    <img src="/monk.png" alt="" />
                </div>
                <div className='bg-gradient-b from-monkwhite/0 to-monkwhite/5 border-2 border-monkwhite border-opacity-10 lg:p-10 p-4 rounded-3xl mx-3 lg:mx-7 lg:max-w-[800px]'>
                    <div className='grid grid-cols-1 px-0 lg:px-0 md:mb-10'>
                        <div>
                            <h3 className='text-[25px] md:text-[30px] lg:text-5xl md:leading-[35px] lg:leading-[60px] font-poppins text-monkwhite font-bold mt-3 leading-8 text-center md:text-left'>Revitalize businesses with innovative design.</h3>
                        </div>
                        <div>
                            <p className='text-[12px] lg:text-lg font-poppins font-normal text-monkwhite mt-2 leading-5 md:text-left text-center'>Ready to take your business to the next level? Our team of experts is here to collaborate with you, bringing fresh ideas and modern solutions to the table. Whether you need to boost your online presence, streamline your software, create stunning designs, or plan unforgettable events, we've got the expertise you need.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className='font-poppins font-black text-[#FF889D] md:text-[400px] text-[60px] text-right absolute md:-bottom-24 bottom-0 right-0 text-opacity-10'>Studio</h1> */}
        </div>
    );
};

export default Revitalize;
