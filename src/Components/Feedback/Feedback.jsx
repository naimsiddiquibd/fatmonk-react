import React, { useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

const Feedback = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://fatmonk.dupbsdaa.com/api/clients')
            .then(response => response.json())
            .then(data => setClients(data))
            .catch(error => console.error('Error fetching clients:', error));
    }, []);
    return (
        <div className='py-10 md:py-16 bg-[#000] flex flex-col justify-center items-center bg-no-repeat' style={{
            backgroundImage: `url('/feedbackbg.png')`,
            backgroundSize: '100%', // Adjust background size to make it slightly bigger
        }}>
            <h1 className='text-center text-[30px] md:text-[60px] font-poppins font-bold my-7 md:my-16 text-monkwhite'>Client Feedback</h1>
            <img className='w-[70px] lg:w-[95px]' src="/comma.png" alt="" />





            <div className="lg:w-[1180px] mt-7 lg:mt-12 flex flex-col items-center justify-center">
                {/* review */}
                <div className='lg:w-[1180px] flex justify-between items-center'>
                    <div>
                        <ChevronLeftIcon className="h-9 w-9 text-monkwhite" />
                    </div>
                    <div>
                        <p className='text-monkwhite text-center text-lg lg:text-xl lg:w-[980px]'>I had the pleasure of collaborating with Fatmonk Studio for our software solutions, and it was a remarkable experience. Fatmonk Studio's team displayed an exceptional level of professionalism throughout the project. Their creative design solutions not only met but surpassed our requirements, leaving us thoroughly impressed. Their unwavering commitment to excellence was evident in the continuous improvements and refinements made to our software, resulting in a final product that exceeded our expectations.

                            We wholeheartedly recommend Fatmonk Studio for anyone seeking software development expertise. If you're looking for a partner who combines creativity, professionalism, and a relentless pursuit of quality, Fatmonk Studio is the team you need for your software development needs.</p>
                    </div>
                    <div>
                        <ChevronRightIcon className="h-9 w-9 text-monkwhite" />
                    </div>
                </div>
                {/* profile */}
                <div className='flex gap-4 items-center mt-3 lg:mt-9'>
                    <div className='rounded-full'>
                        <img className='w-16 lg:w-28' src="/client1.png" alt="" />
                    </div>
                    <div>
                        <h3 className='font-poppins text-2xl font-bold text-monkwhite'>Nazr Irfan</h3>
                        <p className='text-[14px] font-poppins leading-3'>CEO, Tegra Design</p>
                    </div>
                </div>
            </div>




            <div className='mt-8 lg:mt-16'>
                <div className='lg:grid lg:grid-cols-6 lg:gap-3'>
                    {clients.map((client, index) => (
                        <div key={index} className='w-[280px] h-[130px] lg:w-[190px] lg:h-[90px] bg-monkwhite flex justify-center rounded-[10px] mt-4 lg:mt-0'>
                            <img src={`https://fatmonk.dupbsdaa.com/uploads/${client.logo.filename}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>





        </div>
    );
};

export default Feedback;