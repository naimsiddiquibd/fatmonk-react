import React from "react";
import SquareCard from "./SquareCard";
import RectangleCard from "./RectangleCard";

const WebDevFeatures = () => {
  return (
    <div className="min-h-[1000px] bg-[#010101] pt-36 pb-20">
      <div className="text-center mb-20">
        <p className="text-[#EFE6FD] text-xl">OUR FEATURES</p>
        <h2 className="text-monkwhite font-bold text-3xl">
          All the essential tools to supercharge your workflow
        </h2>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          <SquareCard
            img="webdev/Feature1.png"
            title="Tasks"
            description=" Work through your tasks efficiently and intuitively with drag-and-drop simplicity."
            w="386px"
            h="356px"
          />
          <SquareCard
            img="webdev/Feature2.png"
            title="Invoicing"
            description="Generate and send professional invoices. Get paid faster via integrated payment gateways."
            w="386px"
            h="356px"
          />
          <SquareCard
            img="webdev/Feature3.png"
            title="Estimates"
            description="Quickly send estimates and proposals to your clients with just a few clicks."
            w="386px"
            h="356px"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-8">
          <div>
            <SquareCard
              img="webdev/Feature4.png"
              title="User Roles"
              description=" Control who sees what. Assign roles and manage access based on responsibilities."
              w="521px"
              h="392px"
            />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <RectangleCard
              img="webdev/Feature5.png"
              title="Help Desk"
              description="Provide seamless support through an integrated help desk system."
              w="676px"
              h="182px"
            />
            <RectangleCard
              img="webdev/Feature6.png"
              title="Time Tracking"
              description="Track every minute spent across tasks, projects, and teams with advanced tools."
              w="676px"
              h="182px"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 pb-8">
          <div className="flex flex-col gap-8 justify-center items-center">
            <RectangleCard
              img="webdev/Feature7.png"
              title="Work From Anywhere"
              description="Empower your remote team to stay connected and productive from any location."
              w="676px"
              h="182px"
            />
            <RectangleCard
              img="webdev/Feature8.png"
              title="Knowledgebase"
              description=" Create and share engaging articles, guides, and documentation with your team and clients."
              w="676px"
              h="182px"
            />
          </div>

          <div>
            <SquareCard
              img="webdev/Feature9.png"
              title="Subscriptions"
              description="Accept recurring payments effortlessly using Stripe integration and manage billing cycles."
              w="521px"
              h="392px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevFeatures;
