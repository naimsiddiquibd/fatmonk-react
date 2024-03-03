import React from 'react';

const CaseStudies = () => {
    return (
        <div className='flex justify-center lg:px-0 px-5 pb-20 pt-12 items-center content-center bg-monkblack'>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 lg:w-[1180px] lg:mx-auto ">
                <div class="lg:col-span-2">
                    <div className="card w-full bg-base-100 shadow-2xl relative ">
                        <figure><img src="/threadwel.png" alt="Shoes" /></figure>
                        <div className="card-body absolute right-0 bottom-5">
                            <h2 className="text-2xl font-poppins font-bold text-monkblack">Threadwel</h2>
                        </div>
                    </div>
                </div>
                <div class="bg-[#2D42FF] p-7 rounded-2xl">
                    <p className='font-popins text-[16] text-monkwhite'>Explore the innovation of Threadwel, a cutting-edge software crafted for buyers and sellers in the RMG sector. Streamline your trading experience connect with Threadwel, designed by Fatmonk Studio!</p>
                    <button className='font-poppins text-monkblack bg-monkwhite px-10 py-4 rounded-full font-semibold mt-4'>View Case Study</button>
                </div>
                <div class="bg-[#BFA888] p-7 rounded-2xl">
                    <p className='font-popins text-[16] text-monkwhite'>Explore the innovation of Threadwel, a cutting-edge software crafted for buyers and sellers in the RMG sector. Streamline your trading experience connect with Threadwel, designed by Fatmonk Studio!</p>
                    <button className='font-poppins text-monkblack bg-monkwhite px-10 py-4 rounded-full font-semibold mt-4'>View Case Study</button>
                </div>
                <div class="lg:col-span-2">
                    <div className="card w-full bg-base-100 shadow-2xl">
                        <figure className='relative'><img src="/threadwel.png" alt="Shoes" /></figure>
                        <div className="card-body absolute right-0 bottom-5">
                            <h2 className="text-2xl font-poppins font-bold text-monkblack">Threadwel</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;