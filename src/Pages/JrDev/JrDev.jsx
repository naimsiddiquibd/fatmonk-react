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
                <title>Software Engineer Position - Fatmonk</title>
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
                            <h1 className='text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]'>SOFTWARE ENGINEER</h1>
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
                        We're on the lookout for a skilled Software Engineer (Laravel & React) to join our team at Fatmonk. As a key member, you'll be instrumental in developing and maintaining our web-based applications.
                        </p>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Responsibilities</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Collaborating with the development manager on software design and coding tasks, with a focus on utilizing Laravel for backend development and React for frontend development.</li>
                                    <li>Participating in company development meetings and contributing valuable insights.</li>
                                    <li>Familiarize yourself with our codebase and continuously enhance your coding proficiency, particularly in Laravel and React.</li>
                                    <li>Writing clean and efficient code while ensuring its maintenance.</li>
                                    <li>Addressing minor bugs and implementing fixes promptly.</li>
                                    <li>Monitoring the technical performance of internal systems.</li>
                                    <li>Monitoring the technical performance of our internal systems.</li>
                                    <li>GResponding to development team inquiries and requests.</li>
                                    <li>Gathering feedback from users to improve program functionality.</li>
                                    <li>Generating reports and conducting development tests.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Required Expertise / Skills</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Proficiency in Laravel Framework.</li>
                                    <li>Extensive experience in frontend development using React.</li>
                                    <li>Experience with relational databases, particularly MySQL, including efficient database design and scaling.</li>
                                    <li>Preferred experience in developing E-Commerce websites.</li>
                                    <li>Knowledgeable about web services, including API development and integration.</li>
                                    <li>Basic understanding of server management, cPanel, and hosting.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Additional Requirements</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Demonstrated eagerness to learn and adapt to new technologies, including Redux for state management and other relevant tools for React development.</li>
                                    <li>Excellent communication and interpersonal skills.</li>
                                    <li>Ability to perform under pressure and solve problems independently.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Qualifications</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Bachelor’s Degree in CSE/CS/CIS or related fields.</li>
                                    <li>Minimum of 2+ years of relevant experience.</li>
                                    <li>Commitment to at least 2 years of service with Fatmonk.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Compensation & Other Benefits</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Festival Bonus: 2.</li>
                                    <li>Partially Subsidized Office Lunch.</li>
                                    <li>Supportive and friendly working environment.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Details</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Full-time</li>
                                    <li>Work Week: Sunday to Thursday</li>
                                    <li>Flexible Work Hours: 10:00 AM to 6:00 PM.</li>
                                    <li>Office Location: Banani, Dhaka, Bangladesh</li>
                                    <li>Monthly Salary: Negotiable</li>
                                    <li>Upto 6-months probation period</li>
                                </ul>
                            </p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Application Instructions</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>To apply, please send your updated CV to career@fatmonk.studio with “Software Engineer (Laravel & React)” mentioned in the subject line.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default JrDev;