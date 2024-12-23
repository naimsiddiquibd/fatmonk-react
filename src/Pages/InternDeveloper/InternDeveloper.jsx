import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import { Helmet } from 'react-helmet';

const InternDeveloper = () => {
    return (
        <div>
            <Helmet>
                <title>UI/UX Designer Position - Fatmonk</title>
                <meta property="og:title" content="UI/UX Designer Position - Fatmonk" />
                <meta property="og:description" content="At Fatmonk, the UI/UX Designer takes center stage as the key executor for content creation and production. Professionals in this role are tasked with crafting compelling stories, bringing ideas to life through impactful design. To thrive in this role, a keen eye for detail, excellent interpersonal skills, manual dexterity, technical acumen, and proficiency in illustration, Photoshop techniques, and digital platforms are essential." />
                <meta property="og:image" content="/job3.png" />
                <meta property="og:url" content="https://example.com/ui-ux-designer" />
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
                            <h1 className='text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]'>Intern Developer</h1>
                        </div>
                        <div></div>
                    </div>

                    <p className='font-semibold text-monkred text-xl lg:text-3xl my-3 text-center'>Internship</p>

                    <div>
                        <div className='w-full mt-6'>
                            <img className='w-full px-2' src="/dev-intern.png" alt="" />
                        </div>
                    </div>



                    <div className='p-3 mt-6'>
                        <p className='text-sm lg:text-lg text-monkwhite'>
                            Are you a passionate tech enthusiast with a hunger to learn and grow? Fatmonk Studio is excited to bring on a Developer Intern to join our dynamic team. If you're eager to enhance your skills in MERN, Laravel, React, and Next.js, we want to hear from you!
                        </p>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Responsibilities</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Assist in building and maintaining web applications using the MERN stack and Laravel framework.</li>
                                    <li>Develop and optimize front-end features with React and Next.js.</li>
                                    <li>Debug, test, and troubleshoot across various stages of development.</li>
                                    <li>Collaborate with senior developers to bring innovative ideas to life.</li>
                                    <li>Stay updated with emerging web technologies and apply them where relevant.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Required Skills</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Basic understanding of MERN stack development (MongoDB, Express, React, Node.js).</li>
                                    <li>Foundational knowledge of Laravel for backend development.</li>
                                    <li>Familiarity with React concepts and a willingness to explore Next.js.</li>
                                    <li>Problem-solving mindset with a keen eye for detail.</li>
                                    <li>Ability to work collaboratively in a team environment.</li>

                                </ul>
                            </p>
                        </div>


                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Additional Requirements</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Experience with version control tools like Git.</li>
                                    <li>Knowledge of API development and integration.</li>
                                    <li>Interest in exploring cloud platforms (AWS, Firebase, etc.).</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Qualifications</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <li>Pursuing or recently completed a degree in Computer Science, Software Engineering, or a related field.</li>
                                <li>Passion for coding and eagerness to learn new technologies.</li>
                                <li>Basic portfolio showcasing any personal or academic projects (GitHub/Live links preferred).</li>
                            </p>
                        </div>


                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Compensation & Other Benefits
                            </h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Festival Bonus and Partially Subsidized Office Lunch.</li>
                                    <li>Supportive work environment.</li>

                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Details
                            </h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Full-time, Sunday to Thursday.</li>
                                    <li>Flexible Work Hours: 10:00 AM to 6:00 PM.</li>
                                    <li>Office Location: Banani, Dhaka, Bangladesh.</li>
                                    <li>Monthly Salary: Negotiable.</li>
                                    <li>Up to 6-month probation period.</li>

                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Application Instructions</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>To apply email your updated CV to career@fatmonk.studio <b>“Intern Developer”</b>  in the subject line. Let's create something amazing together! ✨</p>
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default InternDeveloper;
