import React from 'react';
import { Link } from 'react-router-dom';

const DropUs = () => {
    return (
        <div className='flex justify-center py-20 bg-[#0D0D0D]'>
            <div
                style={{
                    background: 'linear-gradient(to right, #FF003D, #4444C4)',
                    padding: '1px', // Adjust this for border thickness
                    borderRadius: '0.5rem', // Match the border radius
                    position: 'relative',
                    margin: '12px' // Set position relative to allow absolute positioning of the image
                }}
            >
                <div className='lg:px-20 lg:py-20 px-6 py-5 rounded-lg lg:w-[1180px] bg-[#121120] shadow-md shadow-[#423359c9]'>
                    <h3 className='text-monkwhite text-3xl lg:text-4xl'>Drop us a line or Share a Project Idea </h3>
                    <p className='text-monkwhite text-lg lg:text-xl mt-3 lg:my-9 lg:w-[880px]'>
                        Whether you’re a design team in need of support or an early-stage company looking to elevate your design, Fatmonk Studio is here to help. We’d love to discuss your project and explore how we can bring your vision to life. 💜
                    </p>
                   <Link to="/contact">
                   <button
                        className='
                            flex items-center gap-3 bg-gradient-to-r to-[#FF003D] from-[#4444C4]
                             font-medium px-5 lg:px-7 lg:py-5 py-4 rounded-full
                            text-sm text-monkwhite mt-5 lg:mt-5 lg:text-lg
                            hover:bg-gradient-to-r hover:to-[#4444C4] hover:from-[#FF003D]
                            cursor-pointer
                        '
                    >
                        Let’s create magic together ✨ 
                    </button>
                   </Link>
                </div>
                
                {/* Add the image here */}
                <img 
                    src='/drop-logo.png'
                    alt="Your description" 
                    className='absolute bottom-0 right-0 w-[100px] lg:w-[180px] h-auto m-0'
                />
            </div>
        </div>
    );
};

export default DropUs;
