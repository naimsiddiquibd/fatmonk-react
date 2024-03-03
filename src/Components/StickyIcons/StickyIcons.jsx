import React from 'react';
import { Link } from 'react-router-dom';

const StickyIcons = () => {
    return (
        <div className='z-40 fixed h-screen grid grid-cols-3 gap-4 content-center md:ml-8'>
            <div className='items-center flex-col hidden md:inline-block'>
                <Link to="https://www.facebook.com/fatmonkhere">
                    <img className='w-5 cursor-pointer hover:scale-150 transition-transform' src="/facebook.png" alt="" />
                </Link>
                <Link to="https://www.linkedin.com/company/fatmonk/mycompany/verification/">
                    <img className='w-5 my-7 cursor-pointer hover:scale-150 transition-transform' src="/linkedin.png" alt="" />
                </Link>
                <Link to="https://www.instagram.com/fatmonkstudio/">
                    <img className='w-5 cursor-pointer hover:scale-150 transition-transform' src="/instagram.png" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default StickyIcons;
