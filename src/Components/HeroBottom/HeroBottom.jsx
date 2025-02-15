import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroBottom = () => {
  const [imgHover, setImgHover] = useState(false);
  return (
    <div className="hero min-h-full lg:min-h-[700px] bg-monkblack">
      <div className="hero-content lg:w-[1180px] flex-col lg:flex-row lg:mx-auto">
        <div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 0.5,
            }}
            className="grid grid-cols-1 px-7"
          >
            <div>
              <h3 className="text-[25px] lg:text-[60px] lg:leading-[70px] font-poppins text-monkwhite font-bold mt-3 leading-8 text-center lg:text-left">
                Revitalize businesses with
                <span
                  style={{
                    background: "linear-gradient(to right, #4444C4, #FF003D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  innovative design.
                </span>
              </h3>
            </div>
            <div>
              <p className="text-sm lg:text-lg  lg:leading-[30px] font-poppins font-normal text-monkwhite mt-2 leading-5 md:text-left text-center">
                Ready to take your business to the next level? Our team of
                experts is here to collaborate with you, bringing fresh ideas
                and modern solutions to the table. Whether you need to boost
                your online presence, streamline your software, create stunning
                designs, or plan unforgettable events, we've got the expertise
                you need.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 0.3,
          }}
          // whileHover={{ scale: 1.1 }}
          src={"/bottom_hero1.jpg"}
          className="h-[400px] w-[400px] md:max-w-lg rounded-full shadow-2xl mt-8 lg:mt-0 object-cover transition-all"
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        />
      </div>
    </div>
  );
};

export default HeroBottom;
