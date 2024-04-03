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
                            <img className='w-full px-2' src="/job3.png" alt="" />
                        </div>
                    </div>



                    <div className='p-3 mt-6'>
                        <p className='text-sm lg:text-lg text-monkwhite'>
                            At Fatmonk, the UI/UX Designer takes center stage as the key executor for content creation and production. Professionals in this role are tasked with crafting compelling stories, bringing ideas to life through impactful design. To thrive in this role, a keen eye for detail, excellent interpersonal skills, manual dexterity, technical acumen, and proficiency in illustration, Photoshop techniques, and digital platforms are essential. If you’re responsible, creative, competitive, and ambitious, you’ll find a community of like-minded individuals at Fatmonk. Flexibility, determination, and a passion for your craft are crucial for growth in this dynamic environment. As a UI/UX Designer, you’ll collaborate with the creative team to plan, design, and edit impactful content for Fatmonk’s partners and clients. Embracing the company’s philosophy and staying updated on the latest trends and tools is vital for creating unique and creative content.
                        </p>
                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Responsibilities</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Conceptualizing visuals based on requirements.</li>
                                    <li>Creating images and layouts by hand or using design software.</li>
                                    <li>Studying design briefs and determining requirements.</li>
                                    <li>Developing illustrations, logos, and other designs using software or by hand.</li>
                                    <li>Using appropriate colors and layouts for each graphic.</li>
                                    <li>Collaborating with copywriters and creative directors to produce final designs.</li>
                                    <li>Amending designs based on feedback.</li>
                                    <li>Ensuring final graphics and layouts are visually appealing and on-brand.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Required Expertise / Skills</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Proven graphic/UI/UX designing experience of at least 1+ years.</li>
                                    <li>A strong portfolio of illustrations or other graphics.</li>
                                    <li>Familiarity with design software and technologies (such as Figma, InDesign, Illustrator, Photoshop).</li>
                                    <li>A keen eye for aesthetics and details.</li>
                                    <li>High levels of self-motivation, commitment, and dedication to work.</li>
                                    <li>Visual composition skills with the ability to conceptualize and produce storytelling video productions.</li>
                                    <li>Ability to work under pressure and meet deadlines.</li>
                                    <li>Patience to wait for the perfect shot.</li>
                                </ul>
                            </p>
                        </div>


                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Additional Requirements</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Good listener and team player.</li>
                                    <li>Ability to manage multiple projects and adjust priorities.</li>
                                    <li>Engaging and approachable personality, especially when working with people not used to being filmed.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Qualifications</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Educational degree in software firm/film/production or other relevant fields.</li>
                                    <li>Certifications in software firm/films/production or similar fields.</li>
                                    <li>Working experience with different brands, designers, and marketing professionals.</li>
                                    <li>Basic knowledge of After Effects is a plus.</li>
                                </ul>
                            </p>
                        </div>


                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Compensation & Other Benefits
                            </h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Our office environment, from ambiance to gadgets, is designed to foster learning, growth, and enjoyment.</li>
                                    <li>Work hours that allow for a social life, discipline, and increased productivity.</li>
                                    <li>A horizontal work culture that provides the freedom to voice opinions and actively participate in all proceedings.</li>
                                    <li>Recognition for your contributions in design, development, engineering, or writing.</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Job Details
                            </h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>
                                <ul className='list-disc pl-4'>
                                    <li>Full-time position</li>
                                    <li>Work Week: Sunday to Thursday</li>
                                    <li>Work Hours: Flexible, 10:00 AM to 6:00 PM</li>
                                    <li>Office Location: Banani, Dhaka, Bangladesh</li>
                                    <li>Up to 6-month probation period</li>
                                </ul>
                            </p>
                        </div>

                        <div className='mt-6'>
                            <h2 className='text-xl lg:text-3xl font-poppins font-semibold text-monkwhite'>Application Instructions</h2>
                            <p className='text-sm lg:text-lg text-monkwhite mt-3'>To apply please send your updated CV to career@fatmonk.studio Cc wakil@fatmonk.studio with <b>“Mid/Senior Ruby On Rails Developer”</b> mentioned in the subject line.</p>
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UiUxJob;