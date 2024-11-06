import React from 'react';

const Plans = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#0E022C] py-32 mx-auto'>
            <div>
                <div className='mb-10'>
                    <h2 style={{
                        background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }} className='text-3xl text-center font-semibold'>SSD Cloud Hosting (Standard) Plan</h2>
                    <p className='text-lg text-monkwhite text-center'>100% SSD Disks, RAM 2GB with I/O Usage 2MB/s</p>
                </div>
                <div className='lg:w-[1100px] flex flex-wrap items-center justify-center gap-10 mt-10'>
                    <div className='relative'>
                        {/* Nairobi Button */}
                        <div className="absolute -top-0.1 lg:-top-1 flex justify-center w-full z-10">
                            <button
                                className='
                                    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                                    font-poppins font-medium px-7 md:px-7 md:py-2 py-2 rounded-full
                                    text-[12px] text-monkwhite md:text-[14px]
                                    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D] border-2 border-monkwhite
                                '
                            >
                                Nairobi
                            </button>
                        </div>

                        {/* Card area */}
                        <div className='text-center bg-[#191139] p-5 rounded-xl mt-6 border-2 border-monkwhite border-opacity-5'>
                            <h2 className='text-2xl text-monkwhite'>2 GB SSD</h2>
                            <h1
                                style={{
                                    background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                                className='text-4xl text-monkwhite font-bold'>2,000 BDT /yr</h1>
                            <div className="divider divider-default"></div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2 GB SSD</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2GB RAM</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>50GB Bandwidth</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Email</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Sub Domain</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Host 1 Domain</p>
                                </div>

                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    className='
        flex items-center gap-6 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
        font-poppins font-medium px-1 md:px-2 md:py-1 py-1 rounded-full
        text-[12px] text-monkwhite md:text-[14px]
        hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
        cursor-pointer
    '
                                >
                                    <span className='ml-4'>Order Now</span>
                                    <img className='h-8 w-8' src="/button-icon.png" alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        {/* Nairobi Button */}
                        <div className="absolute -top-0.1 lg:-top-1 flex justify-center w-full z-10">
                            <button
                                className='
                                    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                                    font-poppins font-medium px-7 md:px-7 md:py-2 py-2 rounded-full
                                    text-[12px] text-monkwhite md:text-[14px]
                                    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D] border-2 border-monkwhite
                                '
                            >
                                Nairobi
                            </button>
                        </div>

                        {/* Card area */}
                        <div className='text-center bg-[#191139] p-5 rounded-xl mt-6 border-2 border-monkwhite border-opacity-5'>
                            <h2 className='text-2xl text-monkwhite'>5 GB SSD</h2>
                            <h1
                                style={{
                                    background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                                className='text-4xl text-monkwhite font-bold'>2,800 BDT /yr</h1>
                            <div className="divider divider-default"></div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>5 GB SSD</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2GB RAM</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>50GB Bandwidth</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Email</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Sub Domain</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Host 1 Domain</p>
                                </div>

                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    className='
        flex items-center gap-6 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
        font-poppins font-medium px-1 md:px-2 md:py-1 py-1 rounded-full
        text-[12px] text-monkwhite md:text-[14px]
        hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
        cursor-pointer
    '
                                >
                                    <span className='ml-4'>Order Now</span>
                                    <img className='h-8 w-8' src="/button-icon.png" alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        {/* Nairobi Button */}
                        <div className="absolute -top-0.1 lg:-top-1 flex justify-center w-full z-10">
                            <button
                                className='
                                    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                                    font-poppins font-medium px-7 md:px-7 md:py-2 py-2 rounded-full
                                    text-[12px] text-monkwhite md:text-[14px]
                                    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D] border-2 border-monkwhite
                                '
                            >
                                Nairobi
                            </button>
                        </div>

                        {/* Card area */}
                        <div className='text-center bg-[#191139] p-5 rounded-xl mt-6 border-2 border-monkwhite border-opacity-5'>
                            <h2 className='text-2xl text-monkwhite'>10 GB SSD</h2>
                            <h1
                                style={{
                                    background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                                className='text-4xl text-monkwhite font-bold'>4,000 BDT /yr</h1>
                            <div className="divider divider-default"></div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2 GB SSD</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2GB RAM</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>50GB Bandwidth</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Email</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Sub Domain</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Host 1 Domain</p>
                                </div>

                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    className='
        flex items-center gap-6 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
        font-poppins font-medium px-1 md:px-2 md:py-1 py-1 rounded-full
        text-[12px] text-monkwhite md:text-[14px]
        hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
        cursor-pointer
    '
                                >
                                    <span className='ml-4'>Order Now</span>
                                    <img className='h-8 w-8' src="/button-icon.png" alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        {/* Nairobi Button */}
                        <div className="absolute -top-0.1 lg:-top-1 flex justify-center w-full z-10">
                            <button
                                className='
                                    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                                    font-poppins font-medium px-7 md:px-7 md:py-2 py-2 rounded-full
                                    text-[12px] text-monkwhite md:text-[14px]
                                    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D] border-2 border-monkwhite
                                '
                            >
                                Nairobi
                            </button>
                        </div>

                        {/* Card area */}
                        <div className='text-center bg-[#191139] p-5 rounded-xl mt-6 border-2 border-monkwhite border-opacity-5'>
                            <h2 className='text-2xl text-monkwhite'>2 GB SSD</h2>
                            <h1
                                style={{
                                    background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                                className='text-4xl text-monkwhite font-bold'>2,000 BDT /yr</h1>
                            <div className="divider divider-default"></div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2 GB SSD</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2GB RAM</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>50GB Bandwidth</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Email</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Sub Domain</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Host 1 Domain</p>
                                </div>

                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    className='
        flex items-center gap-6 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
        font-poppins font-medium px-1 md:px-2 md:py-1 py-1 rounded-full
        text-[12px] text-monkwhite md:text-[14px]
        hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
        cursor-pointer
    '
                                >
                                    <span className='ml-4'>Order Now</span>
                                    <img className='h-8 w-8' src="/button-icon.png" alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        {/* Nairobi Button */}
                        <div className="absolute -top-0.5 flex justify-center w-full z-10">
                            <button
                                className='
                                    flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                                    font-poppins font-medium px-7 md:px-7 md:py-2 py-2 rounded-full
                                    text-[12px] text-monkwhite md:text-[14px]
                                    hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D] border-2 border-monkwhite
                                '
                            >
                                Nairobi
                            </button>
                        </div>

                        {/* Card area */}
                        <div className='text-center bg-[#191139] p-5 rounded-xl mt-6 border-2 border-monkwhite border-opacity-5'>
                            <h2 className='text-2xl text-monkwhite'>2 GB SSD</h2>
                            <h1
                                style={{
                                    background: 'linear-gradient(to right, #FFCC33, #E233FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                                className='text-4xl text-monkwhite font-bold'>2,000 BDT /yr</h1>
                            <div className="divider divider-default"></div>

                            <div className='flex flex-col gap-5'>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2 GB SSD</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>2GB RAM</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>50GB Bandwidth</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Email</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Unlimited Sub Domain</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <img className='h-6 w-6' src="/check-circle.png" alt="" />
                                    <p className='text-sm text-monkwhite'>Host 1 Domain</p>
                                </div>

                            </div>
                            <div className="flex justify-center mt-5">
                                <button
                                    className='
        flex items-center gap-6 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
        font-poppins font-medium px-1 md:px-2 md:py-1 py-1 rounded-full
        text-[12px] text-monkwhite md:text-[14px]
        hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
        cursor-pointer
    '
                                >
                                    <span className='ml-4'>Order Now</span>
                                    <img className='h-8 w-8' src="/button-icon.png" alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='mt-16'>
                <p className='text-lg text-monkwhite text-center'>Included With Every Plan</p>
            </div>

            <div className='lg:w-[1080px] flex flex-wrap items-center justify-center gap-3 mt-5 mx-1 lg:mx-0'>
                <div className='border-2 rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>100% SSD Disks</p>
                </div>
                <div className='border-2 rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>CloudLinux</p>
                </div>
                <div className='border-2 rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>RAM 2GB</p>
                </div>
                <div className='border-2 rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>50GB Bandwidth</p>
                </div>
                <div className='border-2 rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>Softaculous</p>
                </div>
                <div className='border-2 rounded-full px-6 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>I/O Usage 2MB/s</p>
                </div>
                <div className='border-2 rounded-full px-2 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>Daily Backup</p>
                </div>
                <div className='border-2 rounded-full px-4 py-3 inline-flex items-center gap-2 mt-2'>
                    <img src="/tik.png" alt="" />
                    <p>Free SSL Certificates</p>
                </div>
            </div>
        </div>
    );
};

export default Plans;
