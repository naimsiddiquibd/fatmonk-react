import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='py-16 bg-[#000]'>
            <div className='h-full bg-contain bg-[#000] bg-no-repeat bg-center' style={{ 
                backgroundImage: `url('counter.gif')`,
                backgroundSize: '50%', // Adjust background size to make it slightly bigger
            }}>
            <h2 className='font-poppinf text-center text-[30px] md:text-[60px] pt-16 font-bold text-monkwhite mb-5'>At a Glance</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:px-20 lg:px-20 xl:px-20 2xl:px-96 pb-16 gap-2'>
                <div className='backdrop-blur-sm bg-monkwhite/5 m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[300px] border-b-2'>
                    <p className='font-poppins text-[25px] md:text-[18px] text-monkwhite font-light'>Since</p>
                    <h2 className='font-poppins text-[50px] xl:text-[70px] text-monkred font-bold'>2016</h2>
                </div>
                <div className='backdrop-blur-sm bg-monkwhite/5 m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[300px] border-b-2'>
                    <p className='font-poppins text-[25px] md:text-[18px] text-monkwhite font-light'>Team Members</p>
                    <h2 className='font-poppins text-[50px] xl:text-[70px] text-monkred font-bold'><CountUp end={20} duration={7} />+</h2>
                </div>
                <div className='backdrop-blur-sm bg-monkwhite/5 m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[300px] border-b-2'>
                    <p className='font-poppins text-[25px] md:text-[18px] text-monkwhite font-light'>Total Clients</p>
                    <h2 className='font-poppins text-[50px] xl:text-[70px] text-monkred font-bold'><CountUp end={85} duration={7} />+</h2>
                </div>
                <div className='backdrop-blur-sm bg-monkwhite/ m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[300px] border-b-2'>
                    <p className='font-poppins text-[25px] md:text-[18px] text-monkwhite font-light'>Products</p>
                    <h2 className='font-poppins text-[50px] xl:text-[70px] text-monkred font-bold'><CountUp end={10} duration={7} />+</h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Counter;
