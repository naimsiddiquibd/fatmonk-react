import React from 'react';

const Feedback = () => {
    return (
        <div className='py-10 md:py-16 bg-[#F6F6F6] flex flex-col justify-center items-center'>
            <h1 className='text-center text-[30px] md:text-[60px] font-poppins font-bold my-7 md:my-16 text-monkblack'>Client Feedback</h1>
            <div className="carousel carousel-center max-w-xs lg:max-w-7xl p-4 space-x-4  rounded-box my-6">

                <div className="carousel-item p-5 bg-monkwhite mr-5 rounded-box flex flex-col items-center">
                    <div className='max-w-[260px]'>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-full h-[76.31px] w-[76.31px]'>
                                <img src="/client1.png" alt="" />
                            </div>
                            <div>
                                <h3 className='font-poppins text-lg font-bold text-[#000]'>Nazr Irfan</h3>
                                <p className='text-[14px] font-poppins leading-3'>CEO, Tegra Design</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-[52.50px] my-4'>
                                <img src="/comma.png" alt="" />
                            </div>
                            <div>
                                <p className='text-[15px] font-poppins text-[#000]'>Fatmonk Studio's professionalism and creativity surpassed expectations. Highly recommended for software development.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='mt-5'>
                        <img src="tesla.png" alt="" />
                    </div> */}
                </div>

                <div className="carousel-item p-5 bg-monkwhite mr-5 rounded-box flex flex-col items-center">
                    <div className='max-w-[260px]'>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-full h-[76.31px] w-[76.31px]'>
                                <img src="/client.png" alt="" />
                            </div>
                            <div>
                                <h3 className='font-poppins text-lg font-bold text-[#000]'>Hussain Ahmed</h3>
                                <p className='text-[14px] font-poppins leading-3'>CTO, Mangify Io</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-[52.50px] my-4'>
                                <img src="/comma.png" alt="" />
                            </div>
                            <div>
                                <p className='text-[15px] font-poppins text-[#000]'>Fatmonk Studio delivers satisfactory services, wishing them continued success in business growth. I'm wishing there success.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='mt-5'>
                        <img src="tesla.png" alt="" />
                    </div> */}
                </div>

                <div className="carousel-item p-5 bg-monkwhite mr-5 rounded-box flex flex-col items-center">
                    <div className='max-w-[260px]'>
                        <div className='flex gap-4 items-center'>
                            <div className='rounded-full h-[76.31px] w-[76.31px]'>
                                <img src="/client2.png" alt="" />
                            </div>
                            <div>
                                <h3 className='font-poppins text-lg font-bold text-[#000]'>Emily Lee</h3>
                                <p className='text-[14px] font-poppins leading-3'>Marketing Director</p>
                            </div>
                        </div>
                        <div>
                            <div className='w-[52.50px] my-4'>
                                <img src="/comma.png" alt="" />
                            </div>
                            <div>
                                <p className='text-[15px] font-poppins text-[#000]'> Fatmonk is an awesome working place for the programmers and developers of this tech startup. Great experience visiting as a guest with Fatmonk.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='mt-5'>
                        <img src="tesla.png" alt="" />
                    </div> */}
                </div>
            </div>

            {/* bottom logos */}
            <div className="carousel carousel-center max-w-xs lg:max-w-2xl p-4 space-x-4  rounded-box my-6">
                <div className="carousel-item">
                    <img src="/client/0.png" className="rounded-box w-[120px] h-full" />
                </div>

                <div className="carousel-item">
                    <img src="/client/2.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/3.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/4.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/5.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/6.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/7.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/8.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/9.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/10.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/14.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/15.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/16.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/17.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/18.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/19.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/20.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/21.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/22.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/23.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/24.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/25.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/26.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/27.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/28.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/29.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/30.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/31.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/32.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/33.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/34.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/35.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/36.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/37.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/38.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/39.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/40.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/41.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/42.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/43.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/44.png" className="rounded-box w-[120px] h-full" />
                </div>
                <div className="carousel-item">
                    <img src="/client/45.png" className="rounded-box w-[120px] h-full" />
                </div>
            </div>
        </div>
    );
};

export default Feedback;