import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar absolute z-30 mt-5 lg:px-5 xl:px-10 2xl:px-34">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-monkwhite" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-monkwhite rounded-box w-52 text-monkblack">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><a>About Us</a></li>
                        <li><a>Work</a></li>
                        <li><a>Approach</a></li>
                        <li><a>Career</a></li>
                        <li><a>Resources</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                    <img className="w-32 lg:w-[130px] xl:w-52 2xl:w-60" src="/logo.png" alt="Fatmonk Studio" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-0 text-[8px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[24px] text-monkwhite font-poppins gap-0">
                    <li><Link to="/" className='hover:text-monkred'>Home</Link></li>
                    <li><Link className='hover:text-monkred' to="/services">Services</Link></li>
                    <li><Link className='hover:text-monkred'>About Us</Link></li>
                    <li><Link className='hover:text-monkred'>Work</Link></li>
                    <li><Link className='hover:text-monkred'>Approach</Link></li>
                    <li><Link className='hover:text-monkred'>Career</Link></li>
                    <li><Link className='hover:text-monkred'>Resources</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className='bg-monkred font-poppins font-semibold px-4 lg:px-7 lg:py-3 2xl:px-8 py-2 2xl:py-6 rounded-full text-xs text-monkwhite sm:text-[10px] md:text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[24px] hover:bg-monkdeepred cursor-pointer'>Make a Call</button>
            </div>
        </div>
    );
};

export default Navbar;