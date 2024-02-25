import React from 'react';
import { PhoneXMarkIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { MapPinIcon } from '@heroicons/react/24/solid'

const Contact = () => {
    return (
        <div className='lg:bg-monkblack bg-monkwhite w-full flex justify-center p-4 lg:p-16'>
            <div className='grid grid-cols-1 lg:flex lg:gap-8 justify-items-center bg-monkwhite rounded-md'>
            <div className='relative content-between bg-monkred h-[500px] w-[300px] rounded-lg p-7 lg:m-2'>
                <div className='absolute bottom-0 right-0'>
                    <img className='w-[180px]' src="/contactcircles.png" alt="" />
                </div>
                <div className='h-[450px] grid grid-cols-1 gap-4 content-between'>
                    <div>
                        <h3 className='font-poppins text-[16px] font-semibold text-monkwhite'>
                            Contact Information
                        </h3>
                        <p className='text-sm text-monkwhite font-light'>
                            Say something to start a live chat!
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center gap-4'>
                            <PhoneXMarkIcon className="h-5 w-5 text-monkwhite" />
                            <p className='text-sm text-monkwhite font-light'>
                                +880 1722-723891
                            </p>
                        </div>
                        <div className='flex items-center gap-4 my-6'>
                            <EnvelopeIcon className="h-5 w-5 text-monkwhite" />
                            <p className='text-sm text-monkwhite font-light'>
                                hello@fatmonk.studio
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MapPinIcon className="h-5 w-5 text-monkwhite" />
                            <p className='text-sm text-monkwhite font-light w-[180px]'>
                                Level 3, House 06, Road 28, Block K
                                Banani, Dhaka 1213, Bangladesh
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-monkblack w-8 h-8 flex items-center justify-center p-2 rounded-full'>
                            <img src="twitter.png" className='w-6' alt="" />
                        </div>
                        <div className='bg-monkwhite w-8 h-8 flex items-center justify-center p-2 rounded-full'>
                            <img src="ig.png" className='w-6' alt="" />
                        </div>
                        <div className='bg-monkblack w-8 h-8 flex items-center justify-center p-2 rounded-full'>
                            <img src="discord.png" className='w-6' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[280px] lg:w-[550px] my-7 lg:mr-8 lg:relative'>
                   <div >
                    <div className='lg:flex lg:items-center gap-5'>
                    <label className="form-control w-full max-w-lg">
                        <div className="label p-0">
                            <span className="label-text text-monkblack">First Name</span>
                        </div>
                        <input type="text" className="bg-monkwhite  w-full max-w-lg outline-none border-b-2" />
                    </label>
                    <label className="form-control w-full max-w-lg mt-8 lg:mt-0">
                        <div className="label p-0">
                            <span className="label-text text-monkblack">Last Name</span>
                        </div>
                        <input type="text" className="bg-monkwhite  w-full max-w-lg outline-none border-b-2" />
                    </label>
                    </div>
                   
                    <div className='lg:flex lg:items-center lg:gap-5'>
                    <label className="form-control w-full max-w-lg mt-8">
                        <div className="label p-0">
                            <span className="label-text text-monkblack">Email</span>
                        </div>
                        <input type="email" className="bg-monkwhite  w-full max-w-lg outline-none border-b-2" />
                    </label>
                    <label className="form-control w-full max-w-lg mt-8">
                        <div className="label p-0">
                            <span className="label-text text-monkblack">Phone Number</span>
                        </div>
                        <input type="text" className="bg-monkwhite  w-full max-w-lg outline-none border-b-2" />
                    </label>
                    </div>
                   </div>
                    <label className="form-control w-full max-w-lg lg:max-w-5xl mt-8">
                        <div className="label p-0">
                            <span className="label-text text-monkblack">Select Subject</span>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-3 mt-3'>
                            <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-1" className="radio w-4 h-4" checked />
                            <p className='label-text text-monkblack'>General Inquiry</p>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-1" className="radio w-4 h-4" checked />
                            <p className='label-text text-monkblack'>General Inquiry</p>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-1" className="radio w-4 h-4" checked />
                            <p className='label-text text-monkblack'>General Inquiry</p>
                            </div>
                            <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-1" className="radio w-4 h-4" checked />
                            <p className='label-text text-monkblack'>General Inquiry</p>
                            </div>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-lg lg:max-w-6xl mt-8">
                        <div className="label p-0">
                            <span className="label-text text-monkblack">Message</span>
                        </div>
                        <textarea type="text" className="bg-monkwhite  w-full max-w-lg lg:max-w-6xl outline-none border-b-2" />
                    </label>
                    <button className='bg-[#000000] font-poppins font-medium px-5 lg:px-9 lg:py-4 py-3 rounded-md text-sm text-monkwhite md:mt-5 md:text-[18px] hover:bg-monkred cursor-pointer mt-10 lg:mt-0 lg:absolute lg:-bottom-24 lg:right-0'>Send Message</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
