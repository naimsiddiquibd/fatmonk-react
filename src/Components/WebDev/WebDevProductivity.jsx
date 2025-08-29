import { useState } from "react";

const TABS = [
  "CMS Websites",
  "Custom Web Development",
  "Web Applications",
  "eCommerce Development",
  "API Integration & Development",
  "Website Optimization & Maintenance",
];

const WebDevProductivity = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  return (
    <div
      className="px-10 py-14"
      style={{
        backgroundImage: `url('/webdev/productivity_bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-monkwhite">
          Productivity Redefined
        </h1>
        <p className="text-xl text-[#EFE6FD] mb-16">
          The complete productivity toolkit—powered by Fatmonk’s Web Development
          Services
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#1F1F1F] w-fit rounded-full flex-wrap">
          {TABS.map((tab, i) => (
            <div
              key={i}
              className={`w-fit flex justify-center items-start px-5 py-4 cursor-pointer ${
                activeTab === tab &&
                "bg-gradient-to-l from-[#58033E] to-[#5B38AC] rounded-full"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {activeTab === tab ? (
                <p className="text-[#EFE6FD] text-sm">{tab}</p>
              ) : (
                <p className="text-[#BFBFBF] text-sm">{tab}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-start mt-16 min-h-[800px]">
        {activeTab === TABS[0] && (
          <img
            className="max-h-[718px] rounded-xl"
            src={`/webdev/p1.png`}
            alt=""
          />
        )}
        {activeTab === TABS[1] && (
          <img
            className="max-h-[718px] rounded-xl"
            src={`/webdev/p2.jpg`}
            alt=""
          />
        )}
        {activeTab === TABS[2] && (
          <img
            className="max-h-[718px] rounded-xl"
            src={`/webdev/p3.jpg`}
            alt=""
          />
        )}
        {activeTab === TABS[3] && (
          <img
            className="max-h-[718px] rounded-xl"
            src={`/webdev/p4.jpg`}
            alt=""
          />
        )}
        {activeTab === TABS[4] && (
          <img
            className="max-h-[718px] rounded-xl"
            src={`/webdev/p5.jpg`}
            alt=""
          />
        )}
        {activeTab === TABS[5] && (
          <img
            className="max-h-[718px] rounded-xl"
            src={`/webdev/p6.jpg`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default WebDevProductivity;
