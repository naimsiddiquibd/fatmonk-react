import React from 'react';

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer p-10 md:px-20 xl:px-40 bg-monkblack text-monkwhite font-poppins  lg:flex lg:items-center lg:justify-between">
                <div>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold mt-1 md:text-[18px] w-56 md:w-96 md:leading-8 2xl:text-[22px]'>We growing up your business with personal Care.</h3>
                        <p className='text-[14px] md:text-[18px] lg:text-[20px] mt-3'>Fatmonk, 2024.</p>
                    </div>
                </div>
                <div className='md:flex md:justify-between lg:flex lg:items-center gap-4 lg:gap-8 xl:gap-8 2xl:gap-16 2xl:text-[18px]'>
                    <nav className='flex flex-col gap-4 lg:gap-3 xl:gap-3 2xl:gap-7'>
                        <h6 className="footer-title">Platform</h6>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Personal AI Manager</a>
                        <a className="link link-hover">AI Business Writer</a>
                    </nav>
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
                </div>
            </footer>
            <footer className="footer p-10 md:px-20 items-center  bg-monkblack text-monkwhite flex flex-col lg:flex-row lg:justify-between lg:px-20 xl:px-40 text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px]">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2024 Fatmonk Studio - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-2 md:gap-4 md:place-self-center md:justify-self-end">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;