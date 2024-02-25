import React from 'react';
import MacMockup from '../MacMockup/MacMockup';

const CustomerExperience = () => {
    return (
        <div className='bg-monkblack h-screen lg:pt-16 pt-7'>
            <div className='flex flex-col items-center'>
                <h2 className='text-center text-2xl md:text-5xl lg:text-7xl w-[300px] sm:w-[400] md:w-[700px] lg:w-[950px] text-monkwhite font-semibold '>Build a customer experience, not just a product!</h2>
                
                <h2 className='font-poppins text-md md:text-xl xl:text-2xl 2xl:text-3xl text-monkwhite w-[280px] sm:w-[500px] lg:w-[800px] text-center mt-4'>From clicks to trust, crafted with care. We design interfaces that guide users effortlessly, building confidence at every point.</h2>

                <button className='bg-monkred font-poppins font-semibold px-5 md:px-11 md:py-8 py-3 rounded-full text-sm text-monkwhite mt-5 md:mt-5 md:text-[22px] hover:bg-monkdeepred cursor-pointer'>Discuss your Project</button>

                <MacMockup></MacMockup>

            </div>
        </div>
    );
};

export default CustomerExperience;