import React from 'react';

const CaseStudies = () => {
    return (
        <div className='flex justify-center px-20 pb-20 pt-12 items-center content-center bg-monkblack'>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 ">
                <div class="lg:col-span-2">
                    <div className="card w-[838px] bg-base-100 shadow-2xl relative ">
                        <figure><img src="/threadwel.png" alt="Shoes" /></figure>
                        <div className="card-body absolute right-0 bottom-24">
                            <h2 className="text-2xl font-poppins font-bold text-monkblack">Threadwel</h2>
                        </div>
                    </div>
                </div>
                <div class="bg-[#2D42FF] p-7 rounded-2xl lg:w-96">
                    <p className='font-popins text-[16] text-monkwhite'>Explore the innovation of Threadwel, a cutting-edge marketplace software crafted for buyers and sellers in the RMG sector. Streamline your trading experience and seamlessly connect with Threadwel, designed and built by Fatmonk Studio!</p>
                    <button className='font-poppins text-monkblack bg-monkwhite px-10 py-4 rounded-full font-semibold mt-4'>View Case Study</button>
                </div>
                <div class="bg-[#BFA888] p-7 rounded-2xl">
                    <p className='font-popins text-[16] text-monkwhite'>Explore the innovation of Threadwel, a cutting-edge marketplace software crafted for buyers and sellers in the RMG sector. Streamline your trading experience and seamlessly connect with Threadwel, designed and built by Fatmonk Studio!</p>
                    <button className='font-poppins text-monkblack bg-monkwhite px-10 py-4 rounded-full font-semibold mt-4'>View Case Study</button>
                </div>
                <div class="lg:col-span-2">
                    <div className="card w-[838px] bg-base-100 shadow-2xl relative ">
                        <figure><img src="/threadwel.png" alt="Shoes" /></figure>
                        <div className="card-body absolute right-0 bottom-24">
                            <h2 className="text-2xl font-poppins font-bold text-monkblack">Threadwel</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;