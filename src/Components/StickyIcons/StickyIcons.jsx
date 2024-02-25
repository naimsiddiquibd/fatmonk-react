import React from 'react';

const StickyIcons = () => {
    return (
       <div className='z-40 fixed h-screen grid grid-cols-3 gap-4 content-center md:ml-8'>
         <div className='items-center flex-col hidden md:inline-block'>
                <img className='w-5 cursor-pointer' src="/facebook.png" alt="" />
                <img className='w-5 my-7 cursor-pointer' src="/linkedin.png" alt="" />
                <img className='w-5 cursor-pointer' src="/instagram.png" alt="" />
            </div>
       </div>
    );
};

export default StickyIcons;