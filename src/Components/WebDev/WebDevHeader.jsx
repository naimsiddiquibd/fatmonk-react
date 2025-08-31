import React from "react";

const WebDevHeader = () => {
  return (
    <div className="min-h-[900px] bg-gradient-to-r from-[#120B21] to-[#12020F] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-5 px-20">
      <div className="max-w-[700px] text-center lg:text-left mb-10 lg:mb-0">
        <h1 className="sm:text-3xl lg:text-5xl font-bold text-monkwhite mb-10">
          Build Faster. Launch Smarter. Scale Better.
        </h1>
        <p className="text-[#EBEDF0] sm:text-lg lg:text-xl">
          At Fatmonk, we craft performance-optimized, scalable, and secure web
          applications tailored to your business goals. Whether you're starting
          from scratch or upgrading an existing system, our end-to-end
          development services bring your digital vision to life.
        </p>
      </div>

      <div
        className="w-[320px] h-[198px] lg:w-[790px] lg:h-[490px] bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: 'url("/webdev/webdev_header.gif")' }}
      ></div>
    </div>
  );
};

export default WebDevHeader;
