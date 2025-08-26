import React from "react";
import DropUs from "../DropUs/DropUs";

const ThreadImageSection = () => {
  return (
    <div className="bg-monkwhite">
      <div className="flex justify-center items-center gap-3 px-4 py-20">
        <div>
          <img src="/threadwel/thread_img1.png" alt="" />
        </div>

        <div>
          <img src="/threadwel/thread_img2.png" alt="" />
          <img src="/threadwel/thread_img3.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        <div className="bg-gradient-to-b from-[#FAF9FF] to-[#ECE9FF] max-w-[844px] min-h-[381px] px-6 py-9 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-monkblack">
            Targeted Audience
          </h1>
          <p className="text-monkblack text-lg">
            Threadwel is designed for RMG industry stakeholders, including
            garment manufacturers, raw material suppliers, and vendors looking
            to streamline their procurement processes. Ideal for businesses in
            the RMG sector seeking efficiency, cost savings, and enhanced
            productivity through digital innovation.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#FAF9FF] to-[#ECE9FF] max-w-[604px] min-h-[381px] px-6 py-9 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-monkblack">
            Why People Should Use This
          </h1>
          <p className="text-monkblack text-lg">
            Threadwel simplifies the procurement process, saving time and
            resources by reducing administrative tasks and offering a
            transparent, competitive environment for bidding. Buyers benefit
            from an efficient sourcing experience, while suppliers access a
            diverse network of buyers, potentially boosting sales without high
            marketing costs. The platform’s advanced features and customer
            success support ensure users maximize productivity and
            profitability.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 px-4 py-20">
        <div>
          <img src="/threadwel/thread_img4.png" alt="" />
          <img src="/threadwel/thread_img5.png" alt="" />
        </div>

        <div>
          <img src="/threadwel/thread_img6.png" alt="" />
        </div>
      </div>

      <DropUs type="white" />
    </div>
  );
};

export default ThreadImageSection;
