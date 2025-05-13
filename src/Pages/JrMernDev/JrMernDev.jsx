import React from "react";
import { motion } from "framer-motion";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";
import { Helmet } from "react-helmet";

const JrMernDev = () => {
  return (
    <div>
      <Helmet>
        <title>Junior MERN Developer Position - Fatmonk</title>
        <meta
          property="og:title"
          content="Junior MERN Developer Position - Fatmonk"
        />
        <meta
          property="og:description"
          content="We're looking for a passionate Junior MERN Developer to join our team at Fatmonk. As a valuable team member, you'll assist in developing and maintaining our web-based applications while growing your skills in a collaborative environment."
        />
        <meta property="og:image" content="/job_post_img1.jpg" />
        <meta property="og:url" content="https://fatmonk.studio/JrMernDev" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar></Navbar>
      <StickyIcons></StickyIcons>
      <div className="bg-[#000] flex justify-center md:py-20 py-10 md:px-20 relative overflow-y-hidden overflow-x-hidden">
        <div className="flex items-center mt-44">
          <Img
            className="absolute -left-0 w-[750px] top-24 z-20 left-image"
            src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
          />
          <Img
            className="absolute -right-0 w-[750px] top-24 z-20 right-image"
            src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
          />
        </div>
        <div className="flex items-center mt-44">
          <Img
            className="absolute -left-0 w-[750px] bottom-24 z-20 left-image"
            src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846893/chakti1-min_psbn45.png"
          />
          <Img
            className="absolute -right-0 w-[750px] bottom-24 z-20 right-image"
            src="https://res.cloudinary.com/dnyx4cy8o/image/upload/v1708846878/chakti2-min_ntgg5i.png"
          />
        </div>

        <div className="font-poppins z-30 lg:w-[1180px] px-4">
          <div className="mt-12 text-center flex items-center gap-3 lg:justify-between justify-center ">
            <div>
              <Link to="/career">
                <ChevronLeftIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500 text-monkwhite" />
              </Link>
            </div>
            <div className="lg:mr-8">
              <h1 className="text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]">
                Junior MERN Developer
              </h1>
            </div>
            <div></div>
          </div>
          <p className="font-semibold text-monkred text-xl lg:text-3xl my-3 text-center">
            Full time
          </p>
          <div>
            <div className="w-full mt-6">
              <img className="w-full px-2" src="/job_post_img2.jpg" alt="" />
            </div>
          </div>
          <div className="p-3 mt-6">
            <p className="text-sm lg:text-lg text-monkwhite">
              We're looking for a passionate Junior MERN Developer to join our
              team at Fatmonk. As a valuable team member, you'll assist in
              developing and maintaining our web-based applications while
              growing your skills in a collaborative environment.
            </p>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Job Responsibilities
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>
                    Follow standard methods for Figma design to ensure easy
                    conversion to code
                  </li>
                  <li>
                    Generate clean and responsive HTML and CSS code from Figma
                    designs
                  </li>
                  <li>
                    Assist the development team with frontend and backend
                    development using the MERN stack (MongoDB, Express.js,
                    React.js, Node.js).
                  </li>
                  <li>
                    Participate in team meetings and contribute ideas to improve
                    our applications.
                  </li>
                  <li>
                    Work with the existing codebase and continuously enhance
                    your skills, especially in React and Node.js.
                  </li>
                  <li>Write clean, maintainable, and efficient code.</li>
                  <li>
                    Fix minor bugs and assist in testing and debugging efforts.
                  </li>
                  <li>
                    Help monitor and optimize the performance of web
                    applications.
                  </li>
                  <li>
                    Support the team by responding to development-related
                    queries and tasks.
                  </li>
                  <li>
                    Gather user feedback to improve application functionality.
                  </li>
                  <li>Contribute to testing, documentation, and reporting.</li>
                </ul>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Required Expertise / Skills
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Strong knowledge of HTML, CSS, and Bootstrap.</li>
                  <li>
                    Basic knowledge of React, Vue, or any other front-end
                    framework is a plus.
                  </li>
                  <li>
                    Basic understanding of the MERN stack and willingness to
                    grow expertise in it.
                  </li>
                  <li>
                    Familiarity with JavaScript (ES6+), HTML, CSS, and modern
                    React practices.
                  </li>
                  <li>Exposure to MongoDB and writing basic queries.</li>
                  <li>
                    Bonus: Experience with or interest in E-Commerce application
                    development.
                  </li>
                  <li>
                    Understanding of RESTful APIs and basic backend concepts
                    using Node.js and Express.
                  </li>
                  <li>General knowledge of Git and version control systems.</li>
                </ul>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Additional Requirements
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>
                    Eagerness to learn and adapt to new technologies, including
                    Redux for state management and modern React tools.
                  </li>
                  <li>Strong communication and interpersonal skills.</li>
                  <li>
                    Ability to stay focused under pressure and solve problems
                    with a proactive mindset.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Qualifications
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Bachelor’s Degree in CSE/CS/CIS or related fields.</li>
                  <li>Minimum of 1+ years of relevant experience.</li>
                  <li>
                    Commitment to at least 2 years of service with Fatmonk.
                  </li>
                </ul>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Compensation & Other Benefits
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Festival Bonus: 2.</li>
                  <li>
                    Festival Bonus (After Probation Period) and Partially
                    Subsidized Office Lunch.
                  </li>
                  <li>Supportive and friendly working environment.</li>
                </ul>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Job Details
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Full-time</li>
                  <li>Work Week: Sunday to Thursday</li>
                  <li>Flexible Work Hours: 10:00 AM to 6:00 PM.</li>
                  <li>Office Location: Banani, Dhaka, Bangladesh</li>
                  <li>Monthly Salary: Negotiable</li>
                  <li>Upto 6-months probation period</li>
                </ul>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Application Instructions
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                To apply, please send your updated CV to career@fatmonk.studio
                with “Junior MERN Developer” mentioned in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default JrMernDev;
