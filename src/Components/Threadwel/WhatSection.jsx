import React from "react";

const WhatSection = () => {
  return (
    <div className="bg-monkwhite">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 p-10">
        <div className="flex md:justify-end sm:justify-center p-10">
          <div className="relative">
            <img src="/threadwel/threadwel_phone.png" alt="" className="z-10" />
            <img
              src="/threadwel/threadwel_arrow.svg"
              alt=""
              className="absolute top-10 left-20 z-0"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#034D82]">
            What is Threadwel?
          </h1>
          <p
            className="text-[#171717] max-w-[689px] text-lg md:text-xl mt-10"
            style={{ lineHeight: "40px", letterSpacing: "0.4px" }}
          >
            Explore the innovation of Threadwel, a cutting-edge marketplace
            software crafted for buyers and sellers in the RMG sector.
            Streamline your trading experience and seamlessly connect with
            Threadwel, designed and built by Fatmonk Studio!
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 p-10">
        <div className="flex justify-end">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-[#034D82]">
              What is ThreadWel?
            </h1>
            <p
              className="text-[#171717] max-w-[689px] text-lg md:text-xl mt-10"
              style={{ lineHeight: "40px", letterSpacing: "0.4px" }}
            >
              Threadwel is a transformative procurement marketplace designed for
              the garment industry, connecting manufacturers and raw material
              suppliers in an efficient, transparent, and cost-effective way.
              Our platform simplifies procurement by automating document
              generation, enabling real-time order tracking, and streamlining
              communication, eliminating traditional barriers like manual
              follow-ups and paperwork. Manufacturers can monitor orders at
              every stage, while suppliers receive updates to ensure
              transparency and timely delivery. Threadwel also empowers
              suppliers with diverse business opportunities, supported by active
              admin involvement to ensure no RFQ is missed. By enhancing supply
              chain efficiency, Threadwel drives growth and competitiveness in
              the RMG sector in Bangladesh and beyond.
            </p>
          </div>
        </div>

        <div className="flex justify-start p-10">
          <img
            src="/threadwel/threadwel_laptop.png"
            alt=""
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatSection;
