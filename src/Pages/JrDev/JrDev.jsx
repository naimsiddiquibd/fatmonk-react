import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import { Helmet } from 'react-helmet';

const JrDev = () => {
    return (
        <div>
            <Helmet>
                <title>Junior Developer Position - Fatmonk</title>
                <meta property="og:title" content="Junior Developer Position - Fatmonk" />
                <meta property="og:description" content="We are looking for a Junior Developer who will work with our dedicated team. In this role, you will be responsible for the development and maintenance of our web-based applications." />
                <meta property="og:image" content="/job2.png" />
                <meta property="og:url" content="https://fatmonk.studio/jrdev" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar></Navbar>
            <StickyIcons></StickyIcons>
            <div className='bg-[#000] flex justify-center md:py-20 py-10 md:px-20 relative overflow-y-hidden overflow-x-hidden'>
                <div className='flex items-center mt-44'>
                    <Img
                        className='absolute -left-0 w-[750px] top-24 z-20 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                    <Img
                        className='absolute -right-0 w-[750px] top-24 z-20 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
                </div>
                <div className='flex items-center mt-44'>
                    <Img
                        className='absolute -left-0 w-[750px] bottom-24 z-20 left-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
                    />
                    <Img
                        className='absolute -right-0 w-[750px] bottom-24 z-20 right-image'
                        src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
                    />
                </div>

                <div className='font-poppins z-30 lg:w-[1180px] px-4'>
                    <div className='mt-12 text-center flex items-center gap-3 lg:justify-between justify-center '>
                        <div>
                            <Link to="/career">
                                <ChevronLeftIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500 text-monkwhite" />
                            </Link>
                        </div>
                        <div className='lg:mr-8'>
                            <h1 className='text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]'>JUNIOR DEVELOPER</h1>
                        </div>
                        <div></div>
                    </div>
                    <p className='font-semibold text-monkred text-xl lg:text-3xl my-3 text-center'>Full time</p>
                    <div>
                        <div className='w-full mt-6'>
                            <img className='w-full px-2' src="/job2.png" alt="" />
                        </div>
                    </div>
                    <div className='p-3 mt-6'>
                        <p className='text-sm lg:text-lg text-monkwhite'>
                            We are looking for a Junior Developer who will work with our dedicated team. In this role, you will be responsible for the development and maintenance of our web-based applications.
                        </p>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Responsibilities</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Assisting the development manager with all aspects of software design and coding.</li>
                                    <li>Attending and contributing to company development meetings.</li>
                                    <li>Learning the codebase and improving your coding skills.</li>
                                    <li>Writing and maintaining code.</li>
                                    <li>Working on minor bug fixes.</li>
                                    <li>Monitoring the technical performance of internal systems.</li>
                                    <li>Responding to requests from the development team.</li>
                                    <li>Gathering information from consumers about program functionality.</li>
                                    <li>Writing reports.</li>
                                    <li>Conducting development tests.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Required Expertise / Skills</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Must have experience with Laravel Framework.</li>
                                    <li>Experience with a relational database, preferably MySQL.</li>
                                    <li>Design a database and scale it efficiently.</li>
                                    <li>E-Commerce website developing experience is highly preferred.</li>
                                    <li>Good command on HTML5, CSS, JavaScript</li>
                                    <li>Strong Knowledge on web services (API Development and integration)</li>
                                    <li>Experience on Frontend Framework(React / Vue)</li>
                                    <li>Basic Knowledge of Server/cPanel/Hosting.</li>
                                    <li>Familiarity with code versioning tools such as Git, Gitlab, or GitHub</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Additional Requirements</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Eagerness to learn and adopt new technologies.</li>
                                    <li>Excellent communication and interpersonal skills.</li>
                                    <li>Capable of working under pressure.</li>
                                    <li>Individual problem solving skill.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Qualifications</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Minimum Bachelor’s Degree in CSE/CS/CIS or other relevant fields.</li>
                                    <li>1+ years experience</li>
                                    <li>Willing to commit at least 2 years of service to Fatmonk.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Compensation & Other Benefits</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Festival Bonus: 2.</li>
                                    <li>Office Lunch (Partially Subsidized).</li>
                                    <li>Friendly working environment.</li>
                                    <li>Unlimited Tea/Coffee.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Details</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Full-time</li>
                                    <li>Work Week: Sunday to Thursday</li>
                                    <li>Work Hours: 10:00 AM to 6:00 PM (Flexible)</li>
                                    <li>Office Location: Banani, Dhaka, Bangladesh</li>
                                    <li>Monthly Salary: Negotiable</li>
                                    <li>Upto 6-months probation period</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Application Instructions</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>To apply please send your updated CV to career@fatmonk.studio by mentioning “Junior Developer” in the subject line.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default JrDev;