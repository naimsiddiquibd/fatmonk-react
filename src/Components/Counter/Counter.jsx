import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className='py-16 bg-[#000]'>
            <div className='lg:w-[1180px] lg:mx-auto'>
            <div className='h-full lg:h-[500px] bg-contain bg-[#000] bg-no-repeat bg-center' style={{ 
                backgroundImage: `url('https://i.ibb.co/44gx2rw/counter.gif')`,
                backgroundSize: '50%', // Adjust background size to make it slightly bigger
            }}>
            <h2 className='font-poppinf text-center text-[30px] md:text-[60px] pt-16 font-bold text-monkwhite mb-5'>At a Glance</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  pb-16 gap-2 px-2 lg:px-0'>
                <div className='backdrop-blur-sm bg-monkwhite/5 m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[340px] border-b-2'>
                    <p className='font-poppins text-[25px] text-monkwhite font-light'>Since</p>
                    <h2 className='font-poppins text-[60px] xl:text-[70px] text-monkred font-bold'>2016</h2>
                    <p className='text-monkwhite'>
                    Fatmonk Studio, founded in 2016, strives to be a leading software and design entity, dedicated to realizing creative visions into tangible<br></br> solutions.
                    </p>
                </div>
                <div className='backdrop-blur-sm bg-monkwhite/5 m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[340px] border-b-2'>
                    <p className='font-poppins text-[25px] text-monkwhite font-light'>Team Members</p>
                    <h2 className='font-poppins text-[60px] xl:text-[70px] text-monkred font-bold'><CountUp end={20} duration={7} />+</h2>
                    <p className='text-monkwhite'>
                    Our team comprises expert software developers, UI/UX designers, project managers, and graphics artists, ready to meet your <br></br> unique needs.
                    </p>
                </div>
                <div className='backdrop-blur-sm bg-monkwhite/5 m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[340px] border-b-2'>
                    <p className='font-poppins text-[25px]  text-monkwhite font-light'>Total Clients</p>
                    <h2 className='font-poppins text-[60px] xl:text-[70px] text-monkred font-bold'><CountUp end={85} duration={7} />+</h2>
                    <p className='text-monkwhite'>
                    Fatmonk Studio epitomizes innovation and excellence, crafting tailored solutions for a diverse clientele with unwavering commitment to client satisfaction.
                    </p>
                </div>
                <div className='backdrop-blur-sm bg-monkwhite/ m-5 lg:m-2 px-6 lg:px-6 xl:px-6 py-7 rounded-2xl h-[340px] border-b-2'>
                    <p className='font-poppins text-[25px] text-monkwhite font-light'>Products</p>
                    <h2 className='font-poppins text-[60px] xl:text-[70px] text-monkred font-bold'><CountUp end={10} duration={7} />+</h2>
                    <p className='text-monkwhite'>
                    Fatmonk's expertise extends across diverse industries, crafting customized solutions that cater to each sector's unique needs, showcasing our client-centric approach.
                    </p>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Counter;
