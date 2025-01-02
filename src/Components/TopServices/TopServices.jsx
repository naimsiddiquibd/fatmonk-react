import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TopServices = () => {
  return (
    <div className=" bg-[#0D0D0D] py-16 flex-1 mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-2 lg:gap-3 lg:w-[980px] lg:mx-auto gap-2 mx-2">
        <Link to="/development">
          <motion.div className="bg-none hover:bg-gradient-to-b from-[#E233FF] to-[#FF6B00] bg-opacity-5 border-[#BB9BFF26] hover:border-[#000000] border-t-[2px] border-l-[2px] border-r-[2px] px-2 py-2 lg:px-8 lg:py-6 lg:m-4 lg:mx-1 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out">
            <div className="bg-gradient-to-b from-[#E233FF] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center to-[#FF6B00] shadow-lg">
              <img
                className="w-6 h-6 p-1 lg:w-16 lg:h-16 lg:p-4"
                src="/web.png"
                alt=""
              />
            </div>
            <h1 className="lg:text-[30px] text-md font-semibold text-monkwhite my-1">
              Web Development
            </h1>
            <p className="lg:text-[15px] text-sm leading-5 lg:leading-7 text-monkwhite font-light">
              At Fatmonk Studio, It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at it's layout.
            </p>
          </motion.div>
        </Link>

        <motion.div className="bg-none hover:bg-gradient-to-b from-[#4684FF] to-[#000066] bg-opacity-5 border-[#BB9BFF26] hover:border-[#000000] border-t-[2px] border-l-[2px] border-r-[2px] px-2 py-2 lg:px-8 lg:py-6 lg:m-4 lg:mx-1 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out">
          <div className="bg-gradient-to-b from-[#4684FF] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center to-[#4684FF] shadow-lg">
            <img
              className="w-6 h-6 p-1 lg:w-16 lg:h-16 lg:p-4"
              src="/software.png"
              alt=""
            />
          </div>
          <h1 className="lg:text-[30px] text-md font-semibold text-monkwhite my-1">
            Software Development
          </h1>
          <p className="lg:text-[15px] text-sm leading-5 lg:leading-7 text-monkwhite font-light">
            Embark on a journey of innovative software with us, where your
            vision transforms into reality. Our dedicated team expertly guides
            you from ideation to launch.
          </p>
        </motion.div>

        <Link to="/uiuxdesign">
          <motion.div className="bg-none hover:bg-gradient-to-b from-[#9E04B1] to-[#3702CF] bg-opacity-5 border-[#BB9BFF26] hover:border-[#000000] border-t-[2px] border-r-[2px] border-l-[2px] px-2 py-2 lg:px-8 lg:py-6 lg:m-4 lg:mx-1 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out">
            <div className="bg-[#9E04B1] shadow-lg w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ">
              <img
                className="w-6 h-6 p-1 lg:w-16 lg:h-16 lg:p-4"
                src="/design.png"
                alt="Web Icon"
              />
            </div>
            <h1 className="lg:text-[30px] text-md font-semibold text-monkwhite my-1">
              Ui Ux Design
            </h1>
            <p className="lg:text-[15px] text-sm leading-5 lg:leading-7 text-monkwhite font-light">
              Experience the magic of our UI/UX expertise, where captivating
              designs and seamless interactions enhance user engagement and
              propel your business forward
            </p>
          </motion.div>
        </Link>

        <Link to="/branddesign">
          <motion.div className="bg-none hover:bg-gradient-to-b from-[#02C374] to-[#FF9D00] bg-opacity-5 border-[#BB9BFF26] hover:border-[#000000] border-t-[2px] border-r-[2px] border-l-[2px] px-2 py-2 lg:px-8 lg:py-6 lg:m-4 lg:mx-1 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out">
            <div className="bg-gradient-to-b from-[#02C374] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center to-[#02C374] shadow-lg">
              <img
                className="w-6 h-6 p-1 lg:w-16 lg:h-16 lg:p-4"
                src="/brand.png"
                alt=""
              />
            </div>
            <h1 className="lg:text-[30px] text-md font-semibold text-monkwhite my-1">
              Brand Design
            </h1>
            <p className="lg:text-[15px] text-sm leading-5 lg:leading-7 text-monkwhite font-light">
              Creating cohesive brand identities through logos, color schemes,
              and visual assets that embody the brand’s personality and values.
            </p>
          </motion.div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link to="/events">
          <motion.div className="bg-none hover:bg-gradient-to-b from-[#FFCC33] to-[#E233FF] bg-opacity-5 border-[#BB9BFF26] hover:border-[#000000] border-t-[2px] border-l-[2px] border-r-[2px] px-8 py-6 m-4 lg:mx-1 mx-2 rounded-3xl cursor-pointer transition-all duration-500 ease-in-out w-[520px]">
            <div className="bg-gradient-to-b from-[#FFCC33] w-10 h-10 lg:w-16 lg:h-16 rounded-full flex items-center justify-center to-[#E233FF] shadow-lg ">
              <img
                className="w-6 h-6 p-1 lg:w-16 lg:h-16 lg:p-4"
                src="/event.png"
                alt=""
              />
            </div>
            <h1 className="lg:text-[30px] text-md font-semibold text-monkwhite my-1">
              Event
            </h1>
            <p className="lg:text-[15px] text-sm leading-5 lg:leading-7 text-monkwhite font-light">
              Elevate your gatherings with Fatmonk Studio's exceptional event
              management services, designed to create memorable experiences from
              start to finish.
            </p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default TopServices;
