import React from 'react';
import { motion } from 'framer-motion';
import { Img } from 'react-image';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import StickyIcons from '../../Components/StickyIcons/StickyIcons';
import { Helmet } from 'react-helmet';

const UiUxJob = () => {
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
                            <h1 className='text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]'>UI/UX Designer</h1>
                        </div>
                        <div></div>
                    </div>

                    <p className='font-semibold text-monkred text-xl lg:text-3xl my-3 text-center'>Full time</p>

                    <div>
                        <div className='w-full mt-6'>
                            <img className='w-full px-2' src="/job5.png" alt="" />
                        </div>
                    </div>



                    <div className='p-3 mt-6'>
                        <p className='text-sm lg:text-lg text-monkwhite'>
                            Fatmonk Studio is on the hunt for a UI/UX Designer! 🎨💻 If you're a wizard with pixels and have a knack for crafting seamless user experiences, we want you on our team!
                        </p>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Responsibilities</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Dive deep into user needs and research to design smooth, intuitive experiences.</li>
                                    <li>Create stunning UI designs for web and mobile apps using Figma and Adobe XD.</li>
                                    <li>Develop user flows and wireframes to lay a solid foundation for our apps.</li>
                                    <li>Bring our apps to life with high-fidelity mockups in Adobe Photoshop and Illustrator.</li>
                                    <li>Keep the team aligned with quick mockups and presentations using Canva.</li>
                                    <li>Collaborate closely with developers and product managers to realize our vision.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Required Skills</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Mastery of UI/UX design principles.</li>
                                    <li>Proficiency in Figma, Adobe XD, Photoshop, and Illustrator.</li>
                                    <li>Strong design portfolio showcasing your talent.</li>
                                    <li>Excellent communication skills.</li>

                                </ul>
                            </p>
                        </div>


                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Additional Requirements</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Ability to simplify complex ideas into user-friendly interfaces.</li>
                                    <li>Passion for creating beautiful and functional digital experiences.</li>
                                    <li>Experience in graphics design, including 3D and 2D sketching is a plus.</li>
                                    <li>Willingness to learn and grow with our team.</li>

                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Qualifications</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <li>Bachelor’s Degree in relevant fields.</li>
                                <li>Minimum 2+ years of experience.</li>
                                <li>Commitment to at least 2 years with Fatmonk.</li>
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
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>To apply email your website/dribble profile link/portfolio link with an updated CV to career@fatmonk.studio <b>“UI UX Designer"”</b>  in the subject line.Let's create something amazing together! ✨</p>
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UiUxJob;