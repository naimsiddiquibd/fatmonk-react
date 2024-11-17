import React, { useState } from 'react';

const FlexibleHourly = () => {
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
    ];

    const [selectedRole, setSelectedRole] = useState('Senior Designer');

    const roleDetails = {
        'Software Engineer': {
            price: '$30',
            expertise: 'Expertise of Software Engineer',
            points: [
                'Builds scalable and efficient software solutions.',
                'Proficient in Java, Python, and C++.',
                'Experienced in cloud technologies like AWS and Azure.',
                'Strong debugging and problem-solving skills.',
            ],
        },
        'Web Developer': {
            price: '$25',
            expertise: 'Expertise of Web Developer',
            points: [
                'Develops responsive and high-performance websites.',
                'Skilled in HTML, CSS, JavaScript, and React.',
                'Optimizes web applications for SEO and speed.',
                'Ensures cross-browser and device compatibility.',
            ],
        },
        'Account Manager': {
            price: '$22',
            expertise: 'Expertise of Account Manager',
            points: [
                'Manages client relationships and ensures satisfaction.',
                'Proficient in CRM tools like Salesforce and HubSpot.',
                'Excellent communication and negotiation skills.',
                'Drives business growth through strategic planning.',
            ],
        },
        'Design Manager': {
            price: '$28',
            expertise: 'Expertise of Design Manager',
            points: [
                'Leads design teams to deliver impactful projects.',
                'Skilled in project management and team leadership.',
                'Ensures brand consistency across all design assets.',
                'Expert in creating innovative design strategies.',
            ],
        },
        'Senior Designer': {
            price: '$20',
            expertise: 'Expertise of Senior Designer',
            points: [
                'Creates user-centered, visually engaging designs.',
                'Skilled in Figma, Adobe XD, and Sketch.',
                'Focuses on accessibility and inclusivity.',
                'Expert in storytelling through design.',
            ],
        },
    };

    return (
        <div className='bg-monkwhite pb-20'>
            <div className='px-4 lg:px-72 bg-gradient-to-r from-[#58033E] to-[#5B38AC] py-20'>
                <h2 className='text-center text-3xl text-monkwhite font-bold'>Flexible Hourly Pricing for Your Project Needs</h2>
                <p className='text-sm text-monkwhite font-normal text-center my-3'>Choose a plan that fits your project requirements with transparent, per-hour pricing for our skilled professionals. Scale up or down as your business needs change—our team is here to support you at every stage.</p>
                <div className='flex flex-wrap justify-center gap-3'>
                    {Object.keys(roleDetails).map((role) => (
                        <button
                            key={role}
                            onClick={() => setSelectedRole(role)}
                            className={`bg-[#170723] px-5 py-3 rounded-full border-[1px] border-monkwhite text-monkwhite text-sm mt-1 ${selectedRole === role
                                ? 'bg-opacity-100 border-opacity-30'
                                : 'bg-opacity-20 border-opacity-30'
                                }`}
                        >
                            {role}
                        </button>
                    ))}
                </div>

            </div>
            <div className='-mt-12'>
                <div className='flex flex-col justify-center items-center mx-4 lg:mx-0'>
                    <div className='lg:w-[850px] bg-monkwhite rounded-md shadow-lg'>
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            <div className='bg-[#652CD3] bg-opacity-10 flex flex-col justify-center items-center py-12 px-8'>
                                <p className='text-4xl text-[#171923] font-bold'>{roleDetails[selectedRole].price}</p>
                                <p className='mt-1 mb-3 text-sm text-[#171923]'>Per Hour</p>
                                <button className='text-sm bg-gradient-to-r from-[#58033E] to-[#5B38AC] px-16 py-2 rounded-full text-monkwhite'>Hire Now</button>
                            </div>
                            <div className='col-span-2'>
                                <div className='py-12 px-8'>
                                    <p className='text-sm text-[#2D3748] font-semibold'>{roleDetails[selectedRole].expertise}</p>
                                    {roleDetails[selectedRole].points.map((point, index) => (
                                        <div key={index} className='flex items-center gap-3 mt-3'>
                                            <img className='h-4 w-4' src="/blue-ball.png" alt="" />
                                            <p className='text-sm text-[#2D3748]'>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex flex-col justify-center items-center'>
                <p className='text-center font-bold text-xl lg:w-96 bg-gradient-to-r from-[#58033E] to-[#5B38AC] bg-clip-text text-transparent mx-4'>Over 100+ ambitious startups across
                    various industries rely on us!</p>
            </div>
            <div className="mt-10 px-4 lg:px-20">
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
        {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center">
                <img 
                    src={client.logo} 
                    alt={`Client ${index}`} 
                    className="h-16 w-auto object-contain bg-monkwhite rounded-full shadow-lg p-3 grayscale" 
                />
            </div>
        ))}
    </div>
</div>

        </div>
    );
};

export default FlexibleHourly;
