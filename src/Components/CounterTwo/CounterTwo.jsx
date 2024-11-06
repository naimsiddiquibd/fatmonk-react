import React from 'react';

const CounterTwo = () => {
    return (
        <div className='relative'>
            <div className='lg:flex lg:justify-center items-center w-full absolute z-[999999999px] -top-10 hidden'>
                <div className='flex justify-between bg-monkwhite text-monkblack lg:px-48 px-5 py-12 rounded-3xl lg:w-[1180px]'>
                    <div>
                        <p className='lg:text-xl font-light text-[#6f6f6f] text-xs'>Since</p>
                        <h2 className='lg:text-4xl text-sm font-spaceGrotesk font-bold text-monkblack mt-3'>2016</h2>
                    </div>
                    <div>
                        <p className='lg:text-xl font-light text-[#6f6f6f] text-xs'>Team Members</p>
                        <h2 className='lg:text-4xl text-sm font-spaceGrotesk font-bold text-monkblack mt-3'>20+</h2>
                    </div>
                    <div>
                        <p className='lg:text-xl font-light text-[#6f6f6f] text-xs'>Total Client</p>
                        <h2 className='lg:text-4xl text-sm font-spaceGrotesk font-bold text-monkblack mt-3'>85+</h2>
                    </div>
                    <div>
                        <p className='lg:text-xl font-light text-[#6f6f6f] text-xs'>Products</p>
                        <h2 className='lg:text-4xl text-sm font-spaceGrotesk font-bold text-monkblack mt-3'>10+</h2>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default CounterTwo;
