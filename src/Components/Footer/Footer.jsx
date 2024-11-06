import React from 'react';
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <div className='bg-monkblack'>
            <footer className="footer p-6 lg:p-0 lg:py-10 lg:w-[1180px] lg:mx-auto   text-monkwhite font-poppins  lg:flex lg:items-strat lg:justify-between">
                <div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold mt-1 lg:text-[20px] w-56 md:w-96 md:leading-8'>Transform Your Idea Into Reality <span className='text-monkwhite bg-gradient-to-r from-[#4444C4] to-[#FF003D] bg-clip-text text-transparent'>Fatmonk</span></h3>
                        {/* <div className='flex items-center gap-1 mt-3'>
                            <img src="/with.png" className='h-6' alt="" />
                            <p className='text-[14px] md:text-[18px] lg:text-[20px]'>Fatmonk</p>
                        </div> */}
                        <div className="relative mt-2">
                            {/* <Link to="https://g.page/r/CX2NJetJdEQkEB0/review" className='w-[120px] absolute top-0 right-0 m-2 lg:m-1 z-50 cursor-pointer'>
                                <img src="/review.png" alt="" className="hover:transition hover:ease-in-out hover:elay-150  hover:-translate-y-1 hover:scale-110 hover:duration-30" />
                            </Link> */}
                            <iframe
                                className="w-[280px] h-[100px] rounded-lg relative"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.694210064945!2d90.4088496!3d23.7939011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c713242c0001%3A0x24447449eb258d7d!2zRmF0bW9uayBTdHVkaW8g4Kar4KeN4Kav4Ka-4Kaf4Kau4KaZ4KeN4KaVIOCmuOCnjeCmn-CngeCmoeCmv-Cmkw!5e0!3m2!1sen!2sbd!4v1709535656504!5m2!1sen!2sbd%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                                frameBorder="0"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className='md:flex md:justify-between lg:flex lg:items-top gap-4 lg:gap-8 xl:gap-8 2xl:gap-16 2xl:text-[18px]'>
                    {/* <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Platform</h6>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Personal AI Manager</a>
                        <a className="link link-hover">AI Business Writer</a>
                    </nav> */}
                    {/* <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">News</a>
                    </nav> */}

                    {/* <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Development</a>
                        <a className="link link-hover">UI UX Design</a>
                        <a className="link link-hover">Brand Design</a>
                    </nav> */}

                    <nav className=''>
                        <h6 className="font-bold text-lg">Services</h6>


                        <div className='flex flex-col lg:gap-2 mt-6 text-sm'>
                            <p>Web Development</p>
                            <p>Software Development</p>
                            <p>Ui Ux Design</p>
                            <p>Brand Design</p>
                            <p>Event</p>
                        </div>


                    </nav>

                    <nav className='flex flex-col gap-1 mt-5 lg:mt-0 lg:gap-0 xl:gap-3'>
                        <h6 className="font-bold text-lg">Contact</h6>
                        <p className='font-bold text-xl lg:mt-3'>+8801722723891</p>
                        <div className='flex items-center gap-3 mt-2 lg:mt-0'>
                            <a href="tel:+8801722723891" className='flex items-center gap-1 cursor-pointer text-sm'>
                                <IoIosCall className='text-lg'></IoIosCall>
                                <p>Call Now</p>
                            </a>
                            <a href="https://wa.me/+8801722723891" className='flex items-center gap-1 cursor-pointer text-sm'>
                                <FaWhatsapp className='text-lg'></FaWhatsapp>
                                <p>WhatsApp</p>
                            </a>
                        </div>
                        <div className='my-3'>
                            <div className='flex items-center gap-2 text-sm'>
                                <EnvelopeIcon className="size-6 text-blue-500" />
                                <p>fatmonk@gmail.com</p>
                            </div>
                            <div className='flex items-start gap-2 mt-2 text-sm'>
                                <MapPinIcon className="size-6 text-blue-500" />
                                <p className='max-w-xs leading-7'>Level 3, House 06 Rd No.28,
                                    Dhaka 1212, Bangladesh</p>
                            </div>
                        </div>
                        
                    </nav>

                </div>
            </footer>
            <footer className="footer gap-y-2 p-10 lg:p-0 lg:py-10  items-center  bg-monkblack text-monkwhite flex flex-col lg:flex-row lg:justify-between text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] lg:w-[1180px] lg:mx-auto text-sm">
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