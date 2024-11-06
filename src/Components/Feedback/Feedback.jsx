import React, { useEffect, useState, useRef } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, StarIcon } from '@heroicons/react/24/solid';
import './Feedback.css';

const Feedback = () => {
    const clients = [
        { logo: '/client/0.png' },
        { logo: '/client/1.png' },
        { logo: '/client/2.png' },
        { logo: '/client/3.png' },
        { logo: '/client/4.png' },
        { logo: '/client/5.png' },
        { logo: '/client/6.png' },
        { logo: '/client/7.png' },
        { logo: '/client/8.png' },
        { logo: '/client/9.png' },
        { logo: '/client/14.png' },
        { logo: '/client/15.png' },
        { logo: '/client/16.png' },
        { logo: '/client/17.png' },
        { logo: '/client/18.png' },
        { logo: '/client/19.png' },
        { logo: '/client/20.png' },
        { logo: '/client/21.png' },
        { logo: '/client/22.png' },
        { logo: '/client/23.png' },
        { logo: '/client/24.png' },
        { logo: '/client/25.png' },
        { logo: '/client/26.png' },
        { logo: '/client/27.png' },
        { logo: '/client/28.png' },
        { logo: '/client/29.png' },
        { logo: '/client/30.png' },
        { logo: '/client/31.png' },
        { logo: '/client/32.png' },
        { logo: '/client/33.png' },
        { logo: '/client/34.png' },
        { logo: '/client/35.png' },
        { logo: '/client/36.png' },
        { logo: '/client/37.png' },
        { logo: '/client/38.png' },
        { logo: '/client/39.png' },
        { logo: '/client/40.png' },
        { logo: '/client/41.png' },
        { logo: '/client/42.png' },
        { logo: '/client/43.png' }
    ];

   // Divide clients into two arrays for national and global clients
   const halfLength = Math.ceil(clients.length / 2);
   const nationalClients = clients.slice(0, halfLength);
   const globalClients = clients.slice(halfLength);

   const [currentNationalIndex, setCurrentNationalIndex] = useState(0);
   const [currentGlobalIndex, setCurrentGlobalIndex] = useState(0);
   const nationalRef = useRef(null);
   const globalRef = useRef(null);

   // Auto slide effect for national clients
   useEffect(() => {
       const nationalInterval = setInterval(() => {
           setCurrentNationalIndex((prevIndex) => (prevIndex + 1) % Math.ceil(nationalClients.length / 5));
       }, 3000); // Change slide every 3 seconds

       return () => clearInterval(nationalInterval);
   }, [nationalClients.length]);

   // Auto slide effect for global clients
   useEffect(() => {
       const globalInterval = setInterval(() => {
           setCurrentGlobalIndex((prevIndex) => (prevIndex + 1) % Math.ceil(globalClients.length / 5));
       }, 3000); // Change slide every 3 seconds

       return () => clearInterval(globalInterval);
   }, [globalClients.length]);

   useEffect(() => {
       // Update transform for national clients
       if (nationalRef.current) {
           nationalRef.current.style.transform = `translateX(-${currentNationalIndex * 100}%)`;
       }
   }, [currentNationalIndex]);

   useEffect(() => {
       // Update transform for global clients
       if (globalRef.current) {
           globalRef.current.style.transform = `translateX(-${currentGlobalIndex * 100}%)`;
       }
   }, [currentGlobalIndex]);

   const renderClients = (clientArray, ref) => {
    return (
        <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" ref={ref}>
                {clientArray.map((client, index) => (
                    <div className="flex-none w-1/5 p-2" key={index}>
                        <img 
                            src={client.logo} 
                            alt={`Client ${index}`} 
                            className="w-36 h-36 object-contain filter grayscale mx-auto" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
    return (
        <div className='py-10 md:py-16 bg-[#000] flex flex-col justify-center items-center bg-no-repeat' style={{
            backgroundImage: `url('/feedbackbg.png')`,
            backgroundSize: '100%',
        }}>
            <h1 className='text-center text-[30px] md:text-[50px] font-bold lg:my-7 my-20 lg:mt-32 mt-2 text-monkwhite bg-gradient-to-r from-[#582FFB] via-[#FF4DCD] to-[#FC974E] bg-clip-text text-transparent'>Client Feedback</h1>
            {/* <img className='w-[70px] lg:w-[95px]' src="/comma.png" alt="" /> */}

            <div className="lg:w-[400px] lg:h-[500px]  lg:mt-2 flex flex-col items-center justify-center bg-monkwhite rounded-xl bg-opacity-10 px-8 py-8 mx-4 ">
                <div className='flex justify-between items-center'>
                    {/* <div>
            <ChevronLeftIcon className="h-9 w-9 text-monkwhite" />
        </div> */}
                    <div className="max-h-[200px] overflow-y-scroll no-scrollbar">
                        <p className='text-monkwhite text-center text-sm lg:text-sm'>
                            I had the pleasure of collaborating with Fatmonk Studio for our software solutions, and it was a remarkable experience. Fatmonk Studio's team displayed an exceptional level of professionalism throughout the project. Their creative design solutions not only met but surpassed our requirements, leaving us thoroughly impressed. Their unwavering commitment to excellence was evident in the continuous improvements and refinements made to our software, resulting in a final product that exceeded our expectations.

                            We wholeheartedly recommend Fatmonk Studio for anyone seeking software development expertise. If you're looking for a partner who combines creativity, professionalism, and a relentless pursuit of quality, Fatmonk Studio is the team you need for your software development needs.
                        </p>
                    </div>
                    {/* <div>
            <ChevronRightIcon className="h-9 w-9 text-monkwhite" />
        </div> */}
                </div>
                <div className='flex items-center my-5 gap-2'>
                    <StarIcon className="h-5 w-5 text-[#FFB800]" />
                    <StarIcon className="h-5 w-5 text-[#FFB800]" />
                    <StarIcon className="h-5 w-5 text-[#FFB800]" />
                    <StarIcon className="h-5 w-5 text-[#FFB800]" />
                    <StarIcon className="h-5 w-5 text-[#FFB800]" />
                </div>
                <div className='gap-4 mt-3 flex-col items-center justify-center'>
                    <div className='rounded-full flex items-center justify-center'>
                        <img className='w-16 lg:w-28' src="/client1.png" alt="" />
                    </div>
                    <div className='mt-2 text-center'>
                        <h3 className='font-poppins text-2xl font-semibold text-monkwhite text-center'>Nazr Irfan</h3>
                        <p className='text-[14px] leading-3 text-monkwhite text-center'>CEO, Tegra Design</p>
                    </div>
                </div>
            </div>


            <div className='mt-8 lg:my-16 lg:pb-16 bg-monkwhite w-full'>
                <h1 className='text-center text-3xl lg:text-5xl font-bold text-monkblack mt-16 lg:mb-7'>Local Clients</h1>
                {renderClients(nationalClients, nationalRef)}

                <h1 className='text-center text-3xl lg:text-5xl font-bold text-monkblack m-0 lg:m-10'>Global Clients</h1>
                {renderClients(globalClients, globalRef)}
            </div>
        </div>
    );
};

export default Feedback;
