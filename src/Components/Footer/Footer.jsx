import React from 'react';
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
    return (
        <div className='bg-monkblack'>
            <footer className="footer p-6 lg:p-0 lg:py-10 lg:w-[1180px] lg:mx-auto   text-monkwhite font-poppins  lg:flex lg:items-center lg:justify-between">
                <div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold mt-1 md:text-[18px] w-56 md:w-96 md:leading-8 2xl:text-[22px]'>Transform Your Idea Into Reality </h3>
                        <p className='text-[14px] md:text-[18px] lg:text-[20px] mt-3'>Fatmonk, 2024.</p>
                    </div>
                </div>
                <div className='md:flex md:justify-between lg:flex lg:items-top gap-4 lg:gap-8 xl:gap-8 2xl:gap-16 2xl:text-[18px]'>
                    {/* <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Platform</h6>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Personal AI Manager</a>
                        <a className="link link-hover">AI Business Writer</a>
                    </nav> */}
                    <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">News</a>
                    </nav>
                    <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Resources</h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Papers</a>
                        <a className="link link-hover">Press Conferences</a>
                    </nav>
                    <nav className='flex flex-col gap-1 mt-5 lg:mt-0 lg:gap-0 xl:gap-3'>
                        <h6 className="mb-2 text-xl">Get In Touch</h6>
                        <p className='font-bold text-2xl mt-1 lg:mt-0'>+8801722723891</p>
                        <div className='flex items-center gap-3 mt-2 lg:mt-0'>
                            <a href="tel:+8801722723891" className='flex items-center gap-1 cursor-pointer'>
                                <IoIosCall className='text-xl'></IoIosCall>
                                <p>Call Now</p>
                            </a>
                            <a href="https://wa.me/+8801722723891" className='flex items-center gap-1 cursor-pointer'>
                                <FaWhatsapp className='text-xl'></FaWhatsapp>
                                <p>WhatsApp</p>
                            </a>
                        </div>
                    </nav>
                </div>
            </footer>
            <footer className="footer gap-y-2 p-10 lg:p-0 lg:py-10  items-center  bg-monkblack text-monkwhite flex flex-col lg:flex-row lg:justify-between text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[1180px] lg:mx-auto">
                <aside className="items-center grid-flow-col text-center">
                    <p>Copyright © 2024 Fatmonk Studio - All right reserved</p>
                </aside>
                <div className="grid-flow-col gap-2 lg:gap-4 lg:place-self-center lg:justify-self-end">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;