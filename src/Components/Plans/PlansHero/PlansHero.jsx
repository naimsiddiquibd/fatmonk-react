import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const PlansHero = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => setIsYearly(!isYearly);

  const plans = [
    {
      name: "Ignite",
      monthlyPrice: "$3500/mo",
      yearlyPrice: "$3360/mo",
      description: "Save 10% on quarterly plans, 20% on yearly!",
      details: [
        "Team composition",
        "1 senior designer",
        "Shared design manager",
        "Account manager",
        "What’s Included:",
        "1 active task",
        "Hours: 80 per month",
        "Turnaround: 2-3 days",
        "Revisions: 24 hours",
        "Requests: Unlimited design",
        "Collaboration: Slack access 1:1",
        "Flexibility: Pause/cancel anytime",
      ],
      gradient: false,
    },
    {
      name: "Ascend",
      monthlyPrice: "$8000/mo",
      yearlyPrice: "$6000/mo",
      description: "Save 15% on quarterly plans, 25% on yearly!",
      details: [
        "Team composition",
        "1 senior designer",
        "Shared design manager",
        "Account manager",
        "What’s Included:",
        "Tasks: 1 active tasks",
        "Hours: 80 per month",
        "Turnaround: 2-3 days",
        "Revisions: 24 hours",
        "Requests: Unlimited design",
        "Collaboration: Slack access 1:1",
        "Flexibility: Pause/cancel anytime",
      ],
      gradient: true,
    },
    {
      name: "Apex",
      monthlyPrice: "Custom Pricing",
      yearlyPrice: "Custom Pricing",
      description: "Save 20% on quarterly plans, 30% on yearly!",
      details: [
        "Team composition",
        "1 senior designer",
        "Shared design manager",
        "Account manager",
        "What’s Included:",
        "Tasks: 1 active tasks",
        "Hours: 80 per month",
        "Turnaround: 2-3 days",
        "Revisions: 24 hours",
        "Requests: Unlimited design",
        "Collaboration: Slack access 1:1",
        "Flexibility: Pause/cancel anytime",
      ],
      gradient: false,
    },
  ];

  return (
    <div
      className="hero min-h-[520px] sm:min-h-screen w-full bg-[#000] relative flex items-start justify-center"
      style={{
        backgroundImage: `url(/plan-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content lg:max-w-[1800px] z-10 text-center text-white mt-10 sm:mt-20">
        <div>
          <h1 className="text-monkwhite text-2xl lg:text-5xl font-normal mt-5">
            Boost Your Business with a Full Team
          </h1>
          <h1 className="text-monkwhite text-2xl lg:text-5xl font-normal mt-2">
            <span className="bg-gradient-to-b from-[#FFFFFF] to-[#B372CF] bg-clip-text text-transparent ">
              at a Fixed Rate
            </span>
          </h1>
          <p className="text-sm text-monkwhite mt-3">
            Choose a plan that fits your needs and scale your success with
            flexibility and ease.
          </p>
          <div className="flex justify-center mt-8">
            <img src="/20percent.png" alt="Discount" className="mx-auto w-24" />
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-5 bg-monkwhite px-6 py-2 rounded-full">
              <button
                className={`text-sm ${
                  !isYearly
                    ? "font-semibo2d text-monkwhite bg-monkblack px-7 py-2 rounded-full"
                    : "text-monkblack"
                }`}
                onClick={handleToggle}
              >
                Monthly
              </button>
              <button
                className={`text-sm ${
                  isYearly
                    ? "font-semibold text-monkwhite bg-monkblack px-6 py-2 rounded-full"
                    : "text-monkblack"
                }`}
                onClick={handleToggle}
              >
                Yearly
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {plans.map((plan, index) => (
              <div
                key={index}
                style={
                  plan.gradient
                    ? {
                        background:
                          "linear-gradient(180deg, #CAFFDB 0%, #75FF74 27.5%, #F2FF5A 52.5%, #F8FFE1 77%, #D6FFDD 100%)",
                      }
                    : {}
                }
                className={`text-start border-[1.5px] border-opacity-30 border-monkwhite rounded-md px-4 pt-4 pb-6`}
              >
                <div>
                  <p
                    className="text-md font-semibold"
                    style={{ color: plan.gradient ? "#000" : "#FFF" }}
                  >
                    {plan.name}
                  </p>
                  <h1
                    className="font-bold text-5xl my-2"
                    style={{ color: plan.gradient ? "#000" : "#FFF" }}
                  >
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </h1>
                  <p
                    className="text-xs font-medium"
                    style={{ color: plan.gradient ? "#000" : "#FFF" }}
                  >
                    {plan.description}
                  </p>
                </div>
                <div className="bg-monkwhite text-center py-1.5 rounded-full text-sm text-monkblack my-6">
                  <button>Schedule a call</button>
                </div>
                <div
                  className="font-normal"
                  style={{ color: plan.gradient ? "#000" : "#FFF" }}
                >
                  {plan.details.map((detail, idx) =>
                    detail === "Team composition" ||
                    detail === "What’s Included:" ? (
                      <p key={idx} className="text-[20px] mt-4 mb-3">
                        {detail}
                      </p>
                    ) : (
                      <div
                        key={idx}
                        className="text-xs flex items-center gap-2 mt-2"
                      >
                        <CheckIcon
                          className="size-4"
                          style={{ color: plan.gradient ? "#000" : "#FFF" }}
                        />
                        <p>{detail}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansHero;
