import React from "react";

const WhatYouWillGet = () => {
  return (
    <div
      className="flext items-center bg-monkblack"
      style={{
        backgroundImage: 'url("/hosting-hero-bg.png")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxWidth: "80vw", // Adjust width as needed
        margin: "0 auto", // Center horizontally
      }}
    >
      <h2 className="text-[40px] font-semibold text-monkwhite text-center py-20">
        What will you get if you join us?
      </h2>
      <div className="grid lg:grid-cols-5 gap-3 lg:mx-32 pb-20">
        <div className="flex flex-col items-center justify-center hover:scale-110 transition-all">
          <img
            className="h-28"
            src="/happy-client.png"
            alt="Happy Client Icon"
          />
          <h5 className="font-semibold text-monkwhite text-2xl mt-3">5000+</h5>
          <p className=" text-sm text-monkwhite">Happy Clients</p>
        </div>

        <div className="flex flex-col items-center justify-center hover:scale-110 transition-all">
          <img className="h-28" src="/up-time.png" alt="Happy Client Icon" />
          <h5 className="font-semibold text-monkwhite text-2xl mt-3">
            Maximum
          </h5>
          <p className=" text-sm text-monkwhite">uptime</p>
        </div>

        <div className="flex flex-col items-center justify-center hover:scale-110 transition-all">
          <img className="h-28" src="/20plus.png" alt="Happy Client Icon" />
          <h5 className="font-semibold text-monkwhite text-2xl mt-3">20+</h5>
          <p className=" text-sm text-monkwhite">Server Location</p>
        </div>

        <div className="flex flex-col items-center justify-center hover:scale-110 transition-all">
          <img
            className="h-28"
            src="/live-support.png"
            alt="Happy Client Icon"
          />
          <h5 className="font-semibold text-monkwhite text-2xl mt-3">24/7</h5>
          <p className=" text-sm text-monkwhite">Live Support</p>
        </div>

        <div className="flex flex-col items-center justify-center hover:scale-110 transition-all">
          <img className="h-28" src="/tire.png" alt="Happy Client Icon" />
          <h5 className="font-semibold text-monkwhite text-2xl mt-3">Tire 3</h5>
          <p className=" text-sm text-monkwhite font-normal">Data Center</p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;
