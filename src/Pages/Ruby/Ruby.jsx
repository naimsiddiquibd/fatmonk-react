import React from "react";
import { motion } from "framer-motion";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";
import { Helmet } from "react-helmet";

const Ruby = () => {
  return (
    <div>
      <Helmet>
        <title>Ruby On Rails Developer Position - Fatmonk</title>
        <meta
          property="og:title"
          content="Ruby On Rails Developer Position - Fatmonk"
        />
        <meta
          property="og:description"
          content="We’re in search of a skilled Mid/Senior Ruby On Rails Developer to join our dedicated team. In this role, you’ll contribute to the development and maintenance of our web-based applications."
        />
        <meta property="og:image" content="/job4.png" />
        <meta property="og:url" content="https://example.com/ruby" />
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
          <div className="mt-12 text-center flex flex-col itens-center lg:flex lg:flex-row items-center gap-3 lg:justify-between justify-center ">
            <div>
              <Link to="/career">
                <ChevronLeftIcon className="h-8 w-8 lg:h-12 lg:w-12 text-blue-500 text-monkwhite" />
              </Link>
            </div>
            <div className="lg:mr-8">
              <h1 className="text-monkwhite font-semibold text-3xl lg:text-[60px] lg:leading-[60px]">
                Ruby On Rails Developer
              </h1>
            </div>
            <div></div>
          </div>

          <p className="font-semibold text-monkred text-xl lg:text-3xl my-3 text-center">
            Full time
          </p>

          <div>
            <div className="w-full mt-6">
              <img className="w-full px-2" src="/job4.png" alt="" />
            </div>
          </div>

          <div className="p-3 mt-6">
            <p className="text-sm lg:text-lg text-monkwhite">
              We’re in search of a skilled Mid/Senior Ruby On Rails Developer to
              join our dedicated team. In this role, you’ll contribute to the
              development and maintenance of our web-based applications.
            </p>
            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Job Responsibilities
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>
                    Directly engage with clients, ensuring regular development
                    updates
                  </li>
                  <li>
                    Collaborate with the development manager on software design
                    and coding aspects
                  </li>
                  <li>Contribute insights in company development meetings</li>
                  <li>
                    Enhance your coding skills through learning and
                    familiarization with our codebase
                  </li>
                  <li>
                    Write, update, and maintain code, along with addressing
                    minor bug fixes
                  </li>
                  <li>
                    Monitor the technical performance of internal systems and
                    respond to development team requests
                  </li>
                  <li>
                    Gather consumer feedback on program functionality and
                    produce reports
                  </li>
                  <li>
                    Conduct development tests to ensure functionality and
                    quality
                  </li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Required Expertise / Skills
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>
                    Proficiency in Ruby on Rails, Sinatra, Rspec, Capybara,
                    RubyCritic, Sidekiq, Resque
                  </li>
                  <li>
                    Familiarity with AWS, Azure, DevOps, Docker, Kubernetes,
                    ElasticSearch, MongoDB, DynamoDB, Github, HTML5, CSS3
                  </li>
                  <li>
                    Extensive experience with Ruby on Rails (Versions 2.x, 3.x,
                    4.x, 5.x, 6.x) and Ruby Programming (Versions 1.7, 1.8, 1.9,
                    2.x)
                  </li>
                  <li>
                    Previous work with relational databases, particularly
                    PostgreSQL, MySQL, and MongoDB
                  </li>
                  <li>
                    Hands-on experience in developing Real-Time Applications for
                    Chat & Video using Action Cable, Faye, Web Sockets
                  </li>
                  <li>
                    Proficiency in JavaScript, jQuery, CoffeeScript, AJAX, etc.
                  </li>
                  <li>Knowledge of CSS, SASS, SCSS, LESS</li>
                  <li>
                    Familiarity with server environments like Heroku, AWS, and
                    Digital Ocean
                  </li>
                  <li>
                    Proficient with code management tools like Git, Bitbucket,
                    and Subversion
                  </li>
                  <li>
                    Good grasp of Amazon S3 services and server-side experience
                    with Apache, Nginx, Passenger, Puma
                  </li>
                  <li>Strong communication and interpersonal skills</li>
                  <li>
                    Ability to perform effectively under pressure with a knack
                    for individual problem-solving
                  </li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Additional Requirements
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Eagerness to learn and adopt new technologies.</li>
                  <li>Excellent communication and interpersonal skills.</li>
                  <li>Capable of working under pressure.</li>
                  <li>Individual problem-solving skill.</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Qualifications
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>
                    Minimum Bachelor’s Degree in CSE/CS/CIS or other relevant
                    fields
                  </li>
                  <li>3+ years of experience in a similar role</li>
                  <li>Willingness to commit at least 1 year to Fatmonk</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Compensation & Other Benefits
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Festival Bonus: 2</li>
                  <li>
                    Festival Bonus (After Probation Period) and Partially
                    Subsidized Office Lunch.
                  </li>
                  <li>Friendly working environment</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Job Details
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Full-time position</li>
                  <li>Work Week: Sunday to Thursday</li>
                  <li>Work Hours: Flexible, 10:00 AM to 6:00 PM</li>
                  <li>Office Location: Banani, Dhaka, Bangladesh</li>
                  <li>Monthly Salary: Negotiable</li>
                  <li>Up to 6-month probation period</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Application Instructions
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                To apply please send your updated CV to career@fatmonk.studio Cc
                wakil@fatmonk.studio with{" "}
                <b>“Mid/Senior Ruby On Rails Developer”</b> mentioned in the
                subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Ruby;
