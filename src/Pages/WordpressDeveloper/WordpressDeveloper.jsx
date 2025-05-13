import React from "react";
import { motion } from "framer-motion";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";
import { Helmet } from "react-helmet";

const WordPressDeveloper = () => {
  return (
    <div>
      <Helmet>
        <title>WordPress Developer Position - Fatmonk</title>
        <meta property="og:title" content="UI/UX Designer Position - Fatmonk" />
        <meta
          property="og:description"
          content="At Fatmonk, the UI/UX Designer takes center stage as the key executor for content creation and production. Professionals in this role are tasked with crafting compelling stories, bringing ideas to life through impactful design. To thrive in this role, a keen eye for detail, excellent interpersonal skills, manual dexterity, technical acumen, and proficiency in illustration, Photoshop techniques, and digital platforms are essential."
        />
        <meta property="og:image" content="/job3.png" />
        <meta property="og:url" content="https://example.com/ui-ux-designer" />
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
                Wordpress Developer
              </h1>
            </div>
            <div></div>
          </div>

          <p className="font-semibold text-monkred text-xl lg:text-3xl my-3 text-center">
            Full time
          </p>

          <div>
            <div className="w-full mt-6">
              <img className="w-full px-2" src="/dev-wp.png" alt="" />
            </div>
          </div>

          <div className="p-3 mt-6">
            <p className="text-sm lg:text-lg text-monkwhite">
              Are you a WordPress wizard with a passion for building dynamic
              websites? Fatmonk Studio is looking for a WordPress Developer to
              join our team. If you have experience in theme and plugin
              development and are eager to explore platforms like Shopify and
              Webflow, we’d love to connect with you!
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
                    Design, develop, and maintain custom WordPress websites.
                  </li>
                  <li>Create and customize WordPress themes and plugins.</li>
                  <li>
                    Troubleshoot and optimize WordPress sites for performance
                    and security.
                  </li>
                  <li>
                    Collaborate with designers and other developers to deliver
                    seamless user experiences.
                  </li>
                  <li>
                    Explore and implement solutions using Shopify and Webflow
                    for diverse client needs.
                  </li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Required Skills
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Strong knowledge of HTML, CSS, and Bootstrap.</li>
                  <li>
                    Basic knowledge of React, Vue, or any other front-end
                    framework is a plus.
                  </li>
                  <li>
                    Strong understanding of WordPress architecture and best
                    practices.
                  </li>
                  <li>
                    Proficiency in developing and customizing WordPress themes
                    and plugins.
                  </li>
                  <li>Solid experience with HTML, CSS, JavaScript, and PHP.</li>
                  <li>
                    Familiarity with responsive and mobile-first design
                    principles.
                  </li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Additional Skills (Bonus)
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>
                    Experience working with Shopify and Webflow platforms.
                  </li>
                  <li>Knowledge of e-commerce development and integrations.</li>
                  <li>
                    Familiarity with SEO and site performance optimization.
                  </li>
                  <li>Understanding of version control systems like Git.</li>
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
                    Bachelor’s Degree in Computer Science, Software Engineering,
                    or a related field (or equivalent experience).
                  </li>
                  <li>
                    Minimum 1-2 years of professional WordPress development
                    experience.
                  </li>
                  <li>
                    Strong portfolio of WordPress projects (GitHub/Live links
                    preferred).
                  </li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Compensation & Benefits
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Competitive salary (negotiable based on experience).</li>
                  <li>
                    Festival Bonus (After Probation Period) and Partially
                    Subsidized Office Lunch.
                  </li>
                  <li>Supportive and collaborative team culture.</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                Job Details
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                <ul className="list-disc pl-4">
                  <li>Full-time, Sunday to Thursday.</li>
                  <li>Flexible Work Hours: 10:00 AM to 6:00 PM.</li>
                  <li>Office Location: Banani, Dhaka, Bangladesh.</li>
                </ul>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl lg:text-3xl font-poppins font-semibold text-monkwhite">
                How to Apply
              </h2>
              <p className="text-sm lg:text-lg text-monkwhite mt-3">
                Send your CV and portfolio link to{" "}
                <a
                  href="mailto:career@fatmonk.studio"
                  className="text-monkblue"
                >
                  career@fatmonk.studio
                </a>{" "}
                with the subject line: <b>"WordPress Developer Application"</b>.
                Let’s build amazing websites together! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WordPressDeveloper;
